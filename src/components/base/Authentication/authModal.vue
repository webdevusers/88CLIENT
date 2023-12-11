<template>
    <div class="background">

    </div>
    <div class="authentication">
        <div class="authentication__wrap wrap">
            <div class="authentication-title">
                Вхід до кабінету
            </div>
            <div class="authentication-block">
                <div class="authentication-left">
                    <div class="authentication-left__inputs">
                        <div class="authentication-left__inputs-item">

                            <label for="">Ел. пошта</label>
                            <a-input v-model:value="email" placeholder="example@gmail.com" />
                        </div>
                        <div class="authentication-left__inputs-item">
                            <label for="">Пароль</label>
                            <a-input-password v-model:value="password" placeholder="a-Z[1-9]*_" />
                        </div>

                    </div>
                    <div class="authentication-left__button" @click="auth(email, password)">
                        Увійти
                    </div>
                    <div class="authentication-left__switch">
                        Зареєструватися
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
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import { defineComponent, ref } from 'vue';
export default defineComponent({
    setup() {
        const password = ref('');
        const email = ref('');
        return {
            password,
            email,
        };
    },
    methods: {
        auth(email, password) {
            axios.post('http://88.cx.ua:3000/user/authentication', {
                email,
                password
            })
        }
    }
});
</script>

<style lang="scss">
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