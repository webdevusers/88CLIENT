<template>
    <div class="background" @click="this.$emit('regModal', false)">

    </div>
    <div class="authentication">
        <div class="authentication__wrap wrap">
            <div class="authentication-title">
                Реєстрація
            </div>
            <div class="authentication-block">
                <div class="authentication-left">
                    <div class="authentication-left__inputs">
                        <div class="authentication-left__inputs-item">

                            <label for="">Повне Ім’я</label>
                            <a-input v-model:value="name" placeholder="Петро Васильченко" />
                        </div>
                        <div class="authentication-left__inputs-item">

                            <label for="">Номер телефону</label>
                            <a-input v-model:value="phone" placeholder="+380 (12) 345 67 89" />

                        </div>
                        <div class="authentication-left__inputs-item" :style="'padding'">

                            <label for="">Ел. пошта</label>
                            <a-input v-model:value="email" placeholder="example@gmail.com" />
                        </div>
                        <div class="authentication-left__inputs-item">
                            <label for="">Пароль</label>
                            <a-input-password v-model:value="password" placeholder="a-Z[1-9]*_" />
                        </div>

                    </div>
                    <div class="authentication-left__button" @click="create(name, phone, email, password)">
                        Зареєструватися
                    </div>
                    <div class="authentication-left__switch">
                        Увійти
                    </div>
                </div>
                <div class="authentication-right">
                    <div class="authentication-right__title">
                        Додаткова інформація
                    </div>
                    <div class="authentication-right__desc">
                        При використанні свого облікового запису на порталі 88, ви зможете замовляти товар в 1 клік
                    </div>
                    <div class="authentication-right__img">
                        <img src="/images/delivery.png" alt="">
                    </div>
                </div>
            </div>
            <div class="authentication-cross" @click="this.$emit('regModal', false)">
                <img
                src="https://firebasestorage.googleapis.com/v0/b/dropshipping-2afce.appspot.com/o/icons%2Fclose.svg?alt=media&token=ed2a79ce-eeca-4259-998f-f3a1f0c77a81&_gl=1*1hi8n3w*_ga*NDA0ODk5NjE2LjE2OTg2NzUwMzA.*_ga_CW55HF8NVT*MTY5ODc3MTYzNi44LjEuMTY5ODc3MTY0Ny40OS4wLjA."
                alt="" />
            </div>
        </div>
    </div>
    <div class="notify-bad" v-if="notifyBad">
        <svg fill="#dc1818" width="64px" height="64px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <title>cancel</title>
                <path
                    d="M16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13zM21.961 12.209c0.244-0.244 0.244-0.641 0-0.885l-1.328-1.327c-0.244-0.244-0.641-0.244-0.885 0l-3.761 3.761-3.761-3.761c-0.244-0.244-0.641-0.244-0.885 0l-1.328 1.327c-0.244 0.244-0.244 0.641 0 0.885l3.762 3.762-3.762 3.76c-0.244 0.244-0.244 0.641 0 0.885l1.328 1.328c0.244 0.244 0.641 0.244 0.885 0l3.761-3.762 3.761 3.762c0.244 0.244 0.641 0.244 0.885 0l1.328-1.328c0.244-0.244 0.244-0.641 0-0.885l-3.762-3.76 3.762-3.762z">
                </path>
            </g>
        </svg>
        <p>
            неправильне введення даних
        </p>
    </div>
</template>
<script>
import axios from 'axios';
import { defineComponent, ref } from 'vue';

export default defineComponent({
    data() {
        return {
            validEmail: null,
            validPass: null,
            validPhone: null,
            validName: null,
        }
    },
    setup() {
        const password = ref('');
        const name = ref('');
        const email = ref('');
        const phone = ref('');
        const notifyBad = ref(false);

        const validateEmail = () => {
            const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;
            return emailRegex.test(email.value);
        };

        const validatePhone = () => {
            const phoneRegex = /^\+\d+$/;
            return phoneRegex.test(phone.value);
        };

        const validatePassword = () => {
            const passwordRegex = /^.*$/;
            return passwordRegex.test(password.value);
        };

        const create = () => {
            if (!name.value.trim() || !validatePhone() || !validateEmail() || !validatePassword()) {
                notifyBad.value = true;
                return;
            }

            axios.post('http://88.cx.ua:3000/user/create', {
                name: name.value,
                phone: phone.value,
                email: email.value,
                password: password.value,
            }).then(() => {
                $router.router.push('/clienarea');
            });
        };


        return {
            password,
            phone,
            email,
            name,
            create,
            notifyBad
        };
    },
    watch: {
        notifyBad() {
            setTimeout(() => {
                this.notifyBad = false
            }, 2500)
        }
    }
});
</script>

<style lang="scss">
.notify-bad {
    position: fixed;
    right: 20px;
    top: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    z-index: 10003;
    background: #eb5050;
    padding: 4px 24px;
    border-radius: 10px;
    animation: load .3s;

    svg {
        max-width: 24px;
        margin-right: 16px;
    }

    p {
        font-family: '88';
        color: white;
    }
}

@keyframes load {
    from {
        top: -100px;
    }

    to {
        top: 30px;
    }
}

.background {
    position: fixed;
    width: 100%;
    height: 100%;
    background: #00000050;
    top: 0;
    z-index: 10001;

    @media (max-width: 968px) {
        display: none;
        visibility: none;
    }
}

.authentication {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 10002;
    background: #f8f8f8;
    box-shadow: 5px 5px 25px 0px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding: 24px 16px;
    &-cross {
        position: absolute;
        right: 24px;
        top: 24px;
        cursor: pointer;
    }
    &-block {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 50px;
        align-items: flex-start;
    }

    &-title {
        font-family: '88';
        color: #292929;
        font-size: 24px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        padding-bottom: 16px;
        margin-bottom: 64px;
        position: relative;

        &::after {
            position: absolute;
            width: 100%;
            height: 1px;
            background: #292929;
            content: "";
            display: block;
            bottom: -10px;
            left: 48%;
            transform: translate(-50%);
        }
    }

    &-left {
        &__inputs {
            margin-bottom: 32px;
            display: flex;
            flex-direction: column;
            font-family: '88';

            label {
                margin-bottom: 16px;
            }

            &-item {
                height: 80px;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: space-between;
                margin-bottom: 16px;

                label {
                    margin-bottom: 16px !important;
                }

            }

            input {
                width: 100%;
                height: 45px;
                border-radius: 4px;
                border: 1px solid rgba(0, 0, 0, 0.20);
                padding-left: 10px;
            }
        }

        &__button {
            margin-bottom: 32px;
            color: white;
            font-family: '88';
            font-size: 20px;
            border-radius: 4px;
            background: #EFCA00;
            height: 45px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: .3s;
            user-select: none;

            &:hover {
                border: 1px solid #EFCA00;
                background: transparent;
                color: #EFCA00;
            }
        }

        &__switch {
            color: #000;
            font-family: '88';
            font-size: 16px;
            font-weight: 500;
            text-align: center;
            cursor: pointer;
            user-select: none;
        }
    }

    &-right {
        position: relative;

        &__title {
            color: #292929;
            font-family: '88';
            font-size: 16px;
            font-weight: 500;
            margin-bottom: 32px;
        }

        &__desc {
            color: #292929;
            font-family: '88';
            font-size: 16px;
            font-weight: 500;
            max-width: 70%;
        }

        &__img {
            position: absolute;
            top: 150px;
            max-width: 200px;
            width: 100%;

            img {
                width: 100%;
                opacity: .7;
            }
        }
    }
}
</style>