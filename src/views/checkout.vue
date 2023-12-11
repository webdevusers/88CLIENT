<script setup>
import TheHeader from '@/components/base/TheHeader.vue'
import TheAction from '@/components/base/TheAction.vue'
import TheFooter from '@/components/base/TheFooter.vue'
import { ref, computed } from 'vue';


import { useCartStore } from '@/store/cart';

const cartStore = useCartStore();
const items = cartStore.items;

const delivery = ref('1');
const payment = ref('1');

let loader = true;
let totalCost = items.reduce((total, product) => total + product.price * product.count, 0);

loader = false;

</script>
<template>
    <TheHeader />
    <TheAction />
    <template v-if="loader">
        <div class="circle-container">
            <svg fill="none" class="circle-svg-1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle class="circle" cx="50" cy="50" r="45" />
            </svg>
        </div>
    </template>
    <template v-else>
        <div class="content">
            <div class="content__wrap wrap">
                <div class="content-breadcrumbs">
                    <router-link to="/">
                        Головна /
                    </router-link>
                    <router-link to="/cart">
                        Кошик /
                    </router-link>
                    <span>Оформлення замовлення</span>
                </div>
                <div class="content-block-title">
                    Оформлення замовлення
                </div>
                <div class="content-block">
                    <div class="content-data">
                        <div class="content-data-inputs">
                            <label for="">Повне Ім’я*</label>
                            <input type="text" v-model="name">
                            <label for="">Номер телефону*</label>
                            <input type="text" v-model="phone">
                            <label for="">Адреса електронної пошти*</label>
                            <input type="text" v-model="email">
                            <label for="">Ваше місто або населений пункт</label>
                            <input type="text" v-model="locality">
                            <label for="">Номер відділення Нової пошти або адреса</label>
                            <input type="text" v-model="branch">
                        </div>
                        <div class="content-checkbox">
                            <div class="content-checkbox__item">
                                <a-checkbox @click="checked = !checked">Збережіть інформацію для швидшого замовлення
                                    наступного
                                    разу</a-checkbox>
                            </div>
                        </div>
                        <div class="content-button">
                            Зберегти
                        </div>
                    </div>
                    <div class="content-data2">
                        <div class="content-data2-products background-block">
                            <ul class="products" v-for="item in items" :key="item._id">
                                <li>
                                    <div class="row">
                                        <div class="row-img">
                                            <img :src="item.images[0].url" alt="Product card" @click="openModalPhoto">
                                        </div>
                                        <div class="row-name">
                                            {{ item.name }}
                                        </div>
                                        <div class="row-count">
                                            Кількість: {{ item.count }}
                                        </div>
                                    </div>
                                </li>
                                <li class="price">
                                    {{ (item.price * item.count).toFixed(0) }} ₴
                                </li>
                            </ul>
                            <div class="label">
                                <div class="label-title">
                                    Сумма
                                </div>
                                <div class="label-value">
                                    {{ totalCost.toFixed(0) }} ₴
                                </div>
                            </div>
                            <div class="label">
                                <div class="label-title">
                                    Доставка
                                </div>
                                <div class="label-value">
                                    Безкоштовна
                                </div>
                            </div>
                        </div>
                        <div class="content-data2-payment background-block">
                            <div class="content-data2-payment__title">
                                Доставка та оплата
                            </div>
                            <div class="content-data2-payment__details">
                                Детальніше про доставку
                            </div>
                            <a-radio-group v-model:value="delivery" name="radioGroup">
                                <a-radio value="1">Відділення Нова Пошта</a-radio>
                                <a-radio value="2">Курьер Нова Пошта</a-radio>
                            </a-radio-group>
                            <div class="content-data2-payment__details" style="padding-top: 24px">
                                Детальніше про оплату
                            </div>
                            <a-radio-group v-model:value="payment" name="radioGroup" style="margin-bottom: 32px;">
                                <a-radio value="1">Оплата при отриманні</a-radio>
                                <a-radio value="2">Оплата зараз</a-radio>
                            </a-radio-group>
                            <div class="content-button confirm-order"
                                @click="checkout(totalCost, delivery, payment, items)">
                                Оформити замовлення
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </template>
    <TheFooter />
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            name: '',
            phone: '',
            email: '',
            locality: '',
            branch: '',
            checked: false,
        }
    },
    methods: {
        checkout(summ, typeDelivery, typePayment, items) {
            console.log(items)
            const token = "5761705554:AAHbYs51iR8R_DzOWC9Sx4QCzBAgMqINkLY";
            const chatId = "@asdjiapspiodqwewoqp";

            const paymentType = this.typePayment === 1 ? 'Оплата при отриманні' : 'Оплата зараз';
            const deliveryType = this.typeDelivery === 1 ? 'Відділення Нова Пошта' : 'Курьер Нова Пошта';

            const itemsInfo = items ? items.map(item => `🛍 ${item.name} - ${item.count} шт. x ${item.price} грн.`) : [];
            const itemsMessage = itemsInfo.join('\n');

            const message = `
📱 Замовлення:

👤 Ім'я клієнта: ${this.name}
📲 Телефон: ${this.phone}
📧 Email: ${this.email}
💸 Сума до сплати: ${summ} грн.
⌨️ Тип оплати: ${paymentType}

🧳 Товари:

${itemsMessage}

📦 Доставка:

📝 Тип доставки: ${deliveryType}
🏙  Місто доставки: ${this.locality}
💠 Номер відділення: №${this.branch}
    `;

            const apiUrl = `https://api.telegram.org/bot${token}/sendMessage`;

            axios
                .post(apiUrl, {
                    chat_id: chatId,
                    text: message,
                })
                .then((response) => {
                    console.log("Сообщение успешно отправлено:", response.data);
                })
                .catch((error) => {
                    console.error("Ошибка при отправке сообщения:", error.response.data);
                });

            if (this.checked) {
                this.saveInformation();
            }
            localStorage.setItem("userCart", [])
            this.clearForm();
        },
        saveInformation() {
            const userInformation = {
                name: this.name,
                phone: this.phone,
                email: this.email,
                locality: this.locality,
                branch: this.branch,
            };

            // Convert the object to a string before saving to localStorage
            localStorage.setItem('userInformation', JSON.stringify([userInformation]));

            this.clearForm();
        },
        clearForm() {
            // Reset form fields
            this.name = '';
            this.phone = '';
            this.email = '';
            this.locality = '';
            this.branch = '';
        },
    }

}
</script>
<style lang="scss" scoped>
.circle-container {
    display: flex;

    justify-content: center;
    align-items: center;

    width: 100%;
    aspect-ratio: 1/1;
    margin-top: -100px;
    max-height: 790px;
}

/* left loader */
.circle-svg-1 {
    --_circle-radius: 45px;
    --_svg-width: 100px;
    --_stroke-width: calc(var(--_svg-width) - 2 * var(--_circle-radius));
    --_animation_duration: 8000ms;
    --_angle: 1.6;

    width: var(--_svg-width);

    aspect-ratio: 1/1;

    stroke: #EFCA00;
    stroke-width: var(--_stroke-width);

    animation: loader_1 var(--_animation_duration) infinite,
        spin_1 3000ms infinite linear;
}

@keyframes loader_1 {

    /**
      small_arc == 30deg
    
      0.1666667 == small_arc / 180
      1.83333 == 2 - small_arc
    
      rotation step == 360 - (2 * small_arc) == 300
      number of animation steps == (360/small_arc + 1) == 13
      animation percent step == 100/(360/small_arc) == 8.33
    */
    0% {
        rotate: 0deg;
        stroke-dasharray: calc(var(--_circle-radius) * 3.1415 * 0.16666667) 1000;
    }

    8.33% {
        rotate: 0deg;
        stroke-dasharray: calc(var(--_circle-radius) * 3.1415 * 1.83333333) 1000;
    }

    16.66% {
        rotate: 300deg;
        stroke-dasharray: calc(var(--_circle-radius) * 3.1415 * 0.16666667) 1000;
    }

    25% {
        rotate: 300deg;
        stroke-dasharray: calc(var(--_circle-radius) * 3.1415 * 1.83333333) 1000;
    }

    33.33% {
        rotate: 600deg;
        stroke-dasharray: calc(var(--_circle-radius) * 3.1415 * 0.16666667) 1000;
    }

    41.66% {
        rotate: 600deg;
        stroke-dasharray: calc(var(--_circle-radius) * 3.1415 * 1.83333333) 1000;
    }

    50% {
        rotate: 900deg;
        stroke-dasharray: calc(var(--_circle-radius) * 3.1415 * 0.16666667) 1000;
    }

    58.33% {
        rotate: 900deg;
        stroke-dasharray: calc(var(--_circle-radius) * 3.1415 * 1.83333333) 1000;
    }

    66.66% {
        rotate: 1200deg;
        stroke-dasharray: calc(var(--_circle-radius) * 3.1415 * 0.16666667) 1000;
    }

    75% {
        rotate: 1200deg;
        stroke-dasharray: calc(var(--_circle-radius) * 3.1415 * 1.83333333) 1000;
    }

    83.33% {
        rotate: 1500deg;
        stroke-dasharray: calc(var(--_circle-radius) * 3.1415 * 0.16666667) 1000;
    }

    91.66% {
        rotate: 1500deg;
        stroke-dasharray: calc(var(--_circle-radius) * 3.1415 * 1.83333333) 1000;
    }

    100% {
        rotate: 1800deg;
        stroke-dasharray: calc(var(--_circle-radius) * 3.1415 * 0.16666667) 1000;
    }
}

@keyframes spin_1 {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.ant-radio-group {
    display: flex !important;
    flex-direction: column !important;
}

.products {
    display: flex;
    flex-direction: row;
    align-items: center;
    list-style: none;
    justify-content: space-between;
    grid-gap: 5px;
    padding: 10px;
    position: relative;
    border-bottom: 1px solid #292929;

    .price {
        font-family: '88';
    }
}

.confirm-order {
    background: unset !important;
    border: 1px solid #EFCA00 !important;
    color: #EFCA00 !important;
    cursor: pointer;
    transition: .3s;

    &:hover {
        border-color: transparent !important;
        background: #EFCA00 !important;
        color: white !important;
    }
}

.label {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    font-family: '88';

}

.row {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    &-img {
        margin-right: 5px;

        img {
            max-width: 80px;
        }
    }

    &-count {
        color: #292929;
        font-family: '88';
        position: absolute;
        left: 20%;
        bottom: 0;

        @media (max-width: 530px) {
            left: 23%;
        }

        @media (max-width: 450px) {
            left: 27%;
        }
    }

    &-name {
        text-align: left !important;
        max-width: 350px;
        color: #292929;
        font-family: '88';
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 0.32px;
    }
}

.ant-select {
    width: 100% !important;

}

.background-block {
    border-radius: 10px;
    border: 1px solid #E3E8EF;
    background: var(--gray-white, #FFF);
    padding: 10px;
    margin-bottom: 32px;
}

.ant-select-selection {
    background-color: #292929 !important;
}

.ant-checkbox {
    margin-bottom: 32px;

    &:hover {
        border-color: #EFCA00 !important;
    }
}

.ant-checkbox-checked {
    .ant-checkbox-inner {
        background-color: #EFCA00 !important;
        border-color: #EFCA00 !important;
    }
}

.content {
    &__wrap {
        margin-bottom: 64px;
    }

    &-breadcrumbs {
        color: #000;
        font-family: '88';
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 0.32px;

        a {
            opacity: .5;
            color: #000;
        }

        margin-bottom: 32px;
    }

    &-block {
        display: grid;
        grid-template-columns: 40% 55%;
        grid-gap: 50px;

        @media (max-width: 968px) {
            grid-template-columns: repeat(1, 1fr);
        }

        &-title {
            color: var(--Text2, #000);
            font-family: '88';
            font-size: 36px;
            font-weight: 500;
            line-height: 30px;
            margin-bottom: 48px;
        }
    }

    &-data {
        &-inputs {
            display: flex;
            flex-direction: column;

            label {
                color: #000;
                font-family: '88';
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                margin-bottom: 8px;
            }

            input {
                border-radius: 10px;
                background: #ECECEC;
                height: 50px;
                border: none;
                outline: none;
                padding-left: 16px;
                margin-bottom: 32px;
            }
        }
    }

    &-button {
        display: inline-flex;
        padding: 16px 48px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        border-radius: 10px;
        background: #EFCA00;
        color: white;
        font-family: '88';
        cursor: pointer;
        transition: .3s;

        &:hover {
            background: unset;
            color: #EFCA00;
            border: 1px solid #EFCA00;
        }
    }

    &-checkbox {
        margin-bottom: 32px;
    }

    &-data2 {
        &-payment {
            &__title {
                color: #292929;
                font-family: '88';
                font-size: 18px;
                font-weight: 400;
                line-height: 165%;
                margin-bottom: 16px;
            }

            &__details {
                color: #292929;
                font-family: '88';
                font-size: 14px;
                font-weight: 400;
                line-height: 165%;
                margin-bottom: 16px;
            }
        }
    }
}
</style>