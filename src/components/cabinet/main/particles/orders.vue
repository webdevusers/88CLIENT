<template>
    <div class="container orders">
        <div class="container-top">
            <div class="container-top-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M8 4H20V6H8V4Z" fill="#292929" />
                    <path d="M8 18H20V20H8V18Z" fill="#292929" />
                    <path d="M4 4H6V6H4V4Z" fill="#292929" />
                    <path d="M6 13V11H4V13H6Z" fill="#292929" />
                    <path d="M6 18H4V20H6V18Z" fill="#292929" />
                    <path d="M8 11H20V13H8V11Z" fill="#292929" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M0 5C0 2.23858 2.23858 0 5 0H19C21.7614 0 24 2.23858 24 5V19C24 21.7614 21.7614 24 19 24H5C2.23858 24 0 21.7614 0 19V5ZM5 1H19C21.2091 1 23 2.79086 23 5V19C23 21.2091 21.2091 23 19 23H5C2.79086 23 1 21.2091 1 19V5C1 2.79086 2.79086 1 5 1Z"
                        fill="#292929" />
                </svg>
            </div>
            <div class="container-top-title">
                Мої замовлення
            </div>
        </div>
        <div class="container-middleOrder">
            <div class="container-middleOrder-orderItem" v-for="(item, idX) in products" :key="idx">
                <div class="container-middleOrder-orderItem__header"
                    @click="openedProduct = (openedProduct === item._id) ? null : item._id;">
                    <div class="container-middleOrder-orderItem__header-status">
                        <template v-if="item.status === 'В процессі'">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="12" r="12" fill="#FFA500" />
                            </svg>
                        </template>
                        <template v-else-if="item.status === 'Виконано'">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="12" r="12" fill="#57AE01" />
                            </svg>
                        </template>
                        <template v-else-if="item.status === 'Не виконано'">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="12" r="12" fill="#E95050" />
                            </svg>
                        </template>
                    </div>
                    <div class="container-middleOrder-orderItem__header-date">
                        {{ item.date }}
                    </div>
                    <div class="container-middleOrder-orderItem__header-itemName">
                        {{ item.name }}
                    </div>
                    <div class="container-middleOrder-orderItem__header-arrow">
                        <svg :style="{ transform: (openedProduct === item._id) ? 'rotate(180deg)' : '' }"
                            xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path
                                d="M0.751468 3.03486C0.469668 3.13788 0.216047 3.38512 0.0751472 3.69417C0.00939375 3.84182 3.97164e-07 3.91394 3.83505e-07 4.22642C3.69096e-07 4.55607 0.0062626 4.60415 0.0876716 4.77584C0.162818 4.93037 0.845402 5.69612 3.73542 8.86903C6.69119 12.1141 7.32681 12.794 7.48337 12.8867C7.66184 12.9931 7.68689 13 8 13C8.31311 13 8.33816 12.9931 8.51663 12.8867C8.67632 12.794 9.30568 12.1175 12.2771 8.85187C15.1108 5.74076 15.8622 4.89603 15.9249 4.75867C15.9906 4.61102 16 4.5389 16 4.22642C16 3.89677 15.9906 3.84869 15.9092 3.67013C15.7996 3.43319 15.618 3.23403 15.3894 3.10354C15.2329 3.01769 15.1859 3.00739 14.9041 3.00739C14.3562 3.00739 14.6693 2.70864 11.1249 6.59237L8 10.0125L4.87828 6.59237C1.3683 2.75328 1.64697 3.01769 1.14286 3.00052C0.986302 2.99709 0.826615 3.01082 0.751468 3.03486Z"
                                fill="#292929" />
                        </svg>
                    </div>
                </div>
                <div class="container-middleOrder-orderItem__body" :class="{ active: openedProduct === item._id }">
                    <div class="container-middleOrder-orderItem__body-main">
                        <li><img src="../../../../../public/images/iphone.png" alt=""></li>
                        <li class="column">
                            <router-link :to="{ name: 'product', params: { query: id || 123 } }" class="itemName">
                                {{ item.name }}
                            </router-link>
                            <div class="itemStatus">
                                Статус: {{ item.status }}
                            </div>
                            <div class="addReview">
                                Залишити відгук
                            </div>
                        </li>
                        <li class="column">
                            <div class="count">
                                Кількість: {{ item.count }} од.
                            </div>
                            <div class="price">
                                Ціна: {{ item.price }} ₴
                            </div>
                            <div class="delivery">
                                Доставка: {{ item.delivery }} ₴
                            </div>
                            <div class="discount">
                                Знижка: {{ item.discount }} ₴
                            </div>
                            <div class="summ">
                                Разом: {{ item.summ }} ₴
                            </div>
                            <div class="repeatOrder">
                                <div class="repeatOrder-text">
                                    Повторити замовлення
                                </div>
                                <div class="repeatOrder-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none">
                                        <path
                                            d="M7.42604 0.0904087C6.86818 0.441814 6.86349 1.21585 7.42135 1.51977C7.54323 1.5815 7.53386 1.58625 7.05569 1.78095C5.71026 2.3318 4.42109 3.20556 3.34287 4.29302C1.61303 6.05004 0.562941 8.10624 0.131653 10.5661C0.00507984 11.2974 -0.0417992 12.9737 0.0425831 13.7192C0.126965 14.4743 0.29573 15.291 0.506686 15.9559C0.72233 16.6397 0.773897 16.7299 1.03642 16.8629C1.2755 16.9863 1.66929 16.9721 1.8568 16.8296C2.24121 16.54 2.27403 16.198 2.00213 15.329C1.50052 13.7287 1.45364 11.739 1.87555 10.0675C2.33497 8.2582 3.22098 6.70062 4.52891 5.40897C5.50868 4.44023 6.53533 3.74692 7.712 3.26255L7.99327 3.14858L7.88545 3.36227C7.7495 3.63295 7.7495 3.86564 7.88545 4.13156C8.1386 4.64443 8.89804 4.70141 9.22151 4.24078C9.52153 3.79915 10.4169 2.1466 10.4357 1.98989C10.4685 1.7667 10.3513 1.43429 10.2013 1.29658C10.145 1.2396 9.63404 0.926182 9.0668 0.598521C8.12454 0.0476702 8.0214 0.000183105 7.80107 0.000183105C7.65574 0.000183105 7.51511 0.0334241 7.42604 0.0904087Z"
                                            fill="white" />
                                        <path
                                            d="M12.8314 1.18713C12.4236 1.40558 12.3157 2.00866 12.6111 2.39331C12.7517 2.57376 12.897 2.63549 13.5159 2.77795C17.5943 3.70395 20.604 7.07079 21.1431 11.3019C21.2181 11.886 21.2134 13.0494 21.1384 13.6383L21.0821 14.1036L20.9509 13.9232C20.693 13.5575 20.2149 13.4816 19.8305 13.738C19.6054 13.8899 19.4742 14.1986 19.5117 14.4835C19.5351 14.6735 20.5758 16.573 20.7821 16.8009C20.9368 16.9766 21.1103 17.0478 21.3822 17.0478C21.6166 17.0478 21.6962 17.0098 22.6104 16.478C23.1448 16.1646 23.6417 15.8654 23.7167 15.8132C23.9793 15.6232 24.0824 15.1294 23.9277 14.7969C23.7542 14.4265 23.2292 14.2746 22.8354 14.4788C22.6057 14.5975 22.6057 14.588 22.6854 14.1606C22.8542 13.2394 22.8354 11.6391 22.6385 10.4899C22.24 8.16774 21.1665 6.05931 19.507 4.34978C18.0162 2.81594 16.3052 1.82346 14.2097 1.27736C13.408 1.06842 13.0939 1.04942 12.8314 1.18713Z"
                                            fill="white" />
                                        <path
                                            d="M2.56926 18.9806C2.69583 18.7717 2.76615 18.7147 2.98179 18.6339C3.20681 18.5532 5.29293 18.5437 5.59764 18.6197C5.98205 18.7194 6.21645 19.0803 6.16957 19.503C6.12738 19.8876 5.81329 20.182 5.44294 20.182C5.26011 20.182 5.24136 20.1915 5.29762 20.258C5.42888 20.4195 6.51179 21.108 7.09309 21.3929C10.4309 23.055 14.3406 22.6608 17.3643 20.3577C17.5706 20.201 18.0534 19.7546 18.4331 19.3652C18.9863 18.8096 19.1644 18.6529 19.3145 18.6149C20.027 18.4202 20.5943 19.2228 20.1817 19.8496C19.9989 20.1298 19.0426 21.0938 18.5597 21.4784C17.0268 22.7131 15.2829 23.5109 13.3139 23.8718C12.6904 23.9857 12.517 23.9952 11.4341 24C10.1121 24 9.67612 23.9525 8.62603 23.6913C7.14934 23.3257 5.51326 22.5231 4.36941 21.6019L4.08345 21.3692L4.05063 21.6066C4.01313 21.8678 3.88656 22.091 3.68498 22.243C3.49746 22.3854 3.00992 22.3854 2.8224 22.243C2.61145 22.0863 2.48956 21.8583 2.45206 21.5686C2.43331 21.4214 2.43331 20.8136 2.44268 20.22C2.46612 19.2275 2.48019 19.1278 2.56926 18.9806Z"
                                            fill="white" />
                                    </svg>
                                </div>
                            </div>
                        </li>
                    </div>
                    <div class="container-middleOrder-orderItem__body-delivery">
                        <div class="container-middleOrder-orderItem__body-delivery-title">
                            Інформація про замовлення
                        </div>
                        <ul>
                            <li class="typeDelivery">
                                {{ item.typeDelivery }}
                            </li>
                            <li class="paymentType">
                                {{ item.paymentType }}
                            </li>
                            <li class="ttn">
                                ТТН {{ item.ttn || "З'явиться найближчим часом" }}
                            </li>
                            <li class="deliveryInfo">
                                {{ item.deliveryInfo }}
                            </li>
                        </ul>
                    </div>
                    <div class="container-middleOrder-orderItem__body-customer">
                        <div class="container-middleOrder-orderItem__body-customer__title">
                            Отримувач
                        </div>
                        <ul>
                            <li>
                                <p>На ім'я</p>
                                <span>{{ item.customerName }}</span>
                            </li>
                            <li>
                                <p>Номер телефону</p>
                                <span>{{ item.customerPhone }}</span>
                            </li>
                            <li>
                                <p>Eлектронна пошта</p>
                                <span>{{ item.customerEmail }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            products: [
                {
                    _id: '123123',
                    status: 'В процессі',
                    date: '31.10.2023',
                    name: 'Iphone 13 pro max',
                    count: 1,
                    price: 14924,
                    delivery: 99,
                    discount: 1234,
                    summ: 14924,
                    typeDelivery: 'Самовивіз з Нової Пошти',
                    paymentType: 'Оплата під час отримання товару',
                    ttn: '20 000 000 000 000',
                    deliveryInfo: 'Київ, вул. Богатирська, 11',
                    customerName: 'Джон Доу',
                    customerPhone: '+380 12 345 6789',
                    customerEmail: 'lorem*****@gmail.com'
                },
                {
                    _id: '1234',
                    status: 'Виконано',
                    date: '31.10.2023',
                    name: 'Iphone 13 pro max',
                    count: 1,
                    price: 14924,
                    delivery: 99,
                    discount: 1234,
                    summ: 14924,
                    typeDelivery: 'Самовивіз з Нової Пошти',
                    paymentType: 'Оплата під час отримання товару',
                    ttn: '20 000 000 000 000',
                    deliveryInfo: 'Київ, вул. Богатирська, 11',
                    customerName: 'Джон Доу',
                    customerPhone: '+380 12 345 6789',
                    customerEmail: 'lorem*****@gmail.com'
                },
                {
                    _id: '321',
                    status: 'Не виконано',
                    date: '31.10.2023',
                    name: 'Iphone 13 pro max',
                    count: 1,
                    price: 14924,
                    delivery: 99,
                    discount: 1234,
                    summ: 14924,
                    typeDelivery: 'Самовивіз з Нової Пошти',
                    paymentType: 'Оплата під час отримання товару',
                    ttn: '20 000 000 000 000',
                    deliveryInfo: 'Київ, вул. Богатирська, 11',
                    customerName: 'Джон Доу',
                    customerPhone: '+380 12 345 6789',
                    customerEmail: 'lorem*****@gmail.com'
                },
            ],
            openedProduct: ''
        }
    }
}
</script>
<style lang="scss">
.container-middleOrder-orderItem {
    margin-bottom: 20px;
}
.container-middleOrder-orderItem__body {
    height: 0;
    display: none;
    padding-bottom: 0 !important;
    transition: .3s;

    &.active {
        display: block;
        height: max-content;
        padding-bottom: 20px !important;
        animation: load .3s;
    }
}

@keyframes load {
    from {
        height: 0;
    }

    to {
        height: 600px;
    }
}

.container-middleOrder-orderItem__header-arrow {
    svg {
        transition: .3s;
    }

}

.orders {
    user-select: none;

    .container-top {
        margin-bottom: 20px;
    }

    .container-middleOrder> :first-child::after,
    .container-middleOrder> :nth-child(2)::after,
    .container-middleOrder> :nth-child(3)::after {
        display: none !important;
    }
}

.itemName {
    color: #292929;
    font-family: '88';
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0.4px;
    text-decoration-line: underline;
    margin-bottom: 20px;
}

.itemStatus {
    color: #292929;
    font-family: '88';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.32px;
    margin-bottom: 32px;
}

.addReview {
    color: #292929;
    font-family: '88';
    font-size: 14px;
    font-weight: 400;
    text-decoration-line: underline;
}

.container-middleOrder-orderItem__body {
    padding-bottom: 20px;
}

.count,
.price,
.delivery,
.discount {
    color: #292929;
    font-family: '88';
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.32px;
    margin-bottom: 12px;
}

.summ {
    color: #292929;
    font-family: '88';
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0.32px;
    margin-bottom: 16px;
}

.repeatOrder {
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 10px;
    background: #EFCA00;
    padding: 8px 24px;
    color: white;
    font-family: '88';

    &-text {
        margin-right: 8px;
    }
}

.container-middleOrder-orderItem {
    border-radius: 10px;
    background: var(--gray-white, #FFF);
    box-shadow: 5px 5px 25px 0px rgba(0, 0, 0, 0.20);

    &__header {
        display: grid;
        grid-template-columns: .5% 30% 50% 2%;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 20px;
        cursor: pointer;

        &-date {
            color: #292929;
            font-family: '88';
            font-size: 16px;
            letter-spacing: 0.32px;
        }

        &-itemName {
            color: #292929;
            font-family: '88';
            font-size: 20px;
            letter-spacing: 0.4px;
        }
    }

    &__body {
        &-main {
            position: relative;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            list-style: none;
            padding: 0 20px;
            padding-top: 20px;

            &::before {
                display: block;
                content: "";
                width: 100%;
                height: 1px;
                background: #DCDCDC;
                position: absolute;
                top: 0;
            }

            &::after {
                display: block;
                content: "";
                width: 100%;
                height: 1px;
                background: #DCDCDC;
                position: absolute;
                bottom: 0;
            }

            margin-bottom: 20px;
            padding-bottom: 20px;

            li {
                img {
                    max-width: 160px;
                }

                &.column {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                }
            }
        }

        &-delivery {
            position: relative;
            padding-bottom: 20px;

            &::after {
                display: block;
                content: "";
                width: 100%;
                height: 1px;
                background: #DCDCDC;
                position: absolute;
                bottom: 0;
            }

            &-title {
                color: #292929;
                font-family: '88';
                font-size: 20px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                letter-spacing: 0.4px;
                text-align: center;
            }

            ul {
                list-style: none;
                padding-left: 20px;

                li {
                    color: #292929;
                    font-family: '88';
                    font-size: 16px;
                    font-weight: 400;
                    letter-spacing: 0.32px;
                    margin-bottom: 16px;
                }
            }
        }

        &-customer {
            padding-top: 20px;

            &__title {
                color: #292929;
                font-family: '88';
                font-size: 20px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                letter-spacing: 0.4px;
                text-align: center;
            }

            ul {
                list-style: none;
                padding-left: 20px;

                li {
                    margin-bottom: 16px;

                    p {
                        color: #292929;
                        font-family: '88';
                        font-size: 16px;
                        letter-spacing: 0.32px;
                    }

                    span {
                        color: #292929;
                        font-family: '88';
                        font-size: 20px;
                        letter-spacing: 0.4px;
                    }
                }
            }
        }
    }
}</style>