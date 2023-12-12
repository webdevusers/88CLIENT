<template>
    <div class="container">
        <div class="container-top">
            <div class="container-top-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M5.04658 16.0389C6.42636 14.7012 8.20387 13.8278 10.114 13.5483C10.7621 13.4484 12.2499 13.4484 12.8883 13.5483C14.8671 13.8477 16.5759 14.6962 17.9998 16.0888C19.1587 17.2268 19.9541 18.5045 20.455 20.0318C20.779 21.0201 21 22.3428 21 23.2861C21 23.6455 20.9951 23.6655 20.833 23.8302L20.6661 23.9999H11.5428C4.38861 23.9999 2.39013 23.9849 2.29684 23.935C2.22809 23.905 2.12989 23.8002 2.07588 23.7054C1.98258 23.5407 1.98258 23.5007 2.03659 22.7321C2.23791 20.0368 3.25925 17.7658 5.04658 16.0389ZM14.1797 14.9658C13.5413 14.7511 13.0748 14.6413 12.4316 14.5665C10.1385 14.3019 7.80614 15.0356 6.02863 16.5829C4.40334 17.9954 3.2838 20.2764 3.09721 22.5374L3.06284 22.9517H19.9197V22.762C19.9197 22.6622 19.8854 22.3428 19.8461 22.0533C19.3747 18.7092 17.1995 15.984 14.1797 14.9658Z"
                        fill="#292929" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M6.45095 2.8822C7.32989 1.37985 8.93063 0.306738 10.664 0.0471952C11.1304 -0.0226825 11.9013 -0.0126994 12.4071 0.0621679C13.0356 0.161993 13.6101 0.35166 14.1944 0.656122C15.8001 1.48966 16.8902 2.9421 17.3026 4.79384C17.4008 5.24804 17.4156 6.60565 17.3223 7.07982C17.1406 8.03813 16.7036 8.98646 16.0898 9.78006C15.1323 11.0129 13.5856 11.8414 12.0339 11.9612C10.2417 12.096 8.69003 11.5519 7.45265 10.3491C5.42471 8.38752 5.01716 5.33289 6.45095 2.8822ZM16.2125 7.19961C16.9 4.52931 15.1814 1.74421 12.4906 1.16523C12.0585 1.07039 11.2876 1.03546 10.8947 1.09036C9.2498 1.32495 7.85038 2.36312 7.13348 3.89043C6.77012 4.6491 6.69647 5.01345 6.69156 5.98175C6.68665 6.97001 6.77012 7.36432 7.15312 8.15293C7.76199 9.41071 8.86189 10.3441 10.222 10.7583C10.6198 10.8781 10.7425 10.8931 11.4741 10.8931C12.1714 10.8931 12.3433 10.8781 12.7017 10.7783C14.4399 10.3041 15.7608 8.95152 16.2125 7.19961Z"
                        fill="#292929" />
                </svg>
            </div>
            <div class="container-top-title">
                Профіль
            </div>
        </div>
        <ul class="container-middle">
            <li class="container-middle-item" v-for="(item, idx) in profile" :key="idx">
                <div class="container-middle-item__name">
                    {{ item.name }}
                </div>
                <div class="container-middle-item__value">
                    {{ item.value }}
                </div>
            </li>
            <li class="container-middle-item__btn">
                <div class="container-middle-item__btn-title">
                    Редагувати
                </div>
                <div class="container-middle-item__btn-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M20 0.878906C19.1722 0.878906 18.3783 1.20776 17.7929 1.79312L8.29289 11.2931C8.16473 11.4213 8.07382 11.5819 8.02986 11.7577L7.02986 15.7577C6.94466 16.0985 7.04451 16.459 7.29289 16.7073C7.54127 16.9557 7.90176 17.0556 8.24254 16.9704L12.2425 15.9704C12.4184 15.9264 12.5789 15.8355 12.7071 15.7073L22.2071 6.20733C22.7925 5.62197 23.1213 4.82805 23.1213 4.00023C23.1213 3.1724 22.7925 2.37848 22.2071 1.79312C21.6217 1.20776 20.8278 0.878906 20 0.878906ZM19.2071 3.20733C19.4174 2.99705 19.7026 2.87891 20 2.87891C20.2974 2.87891 20.5826 2.99705 20.7929 3.20733C21.0032 3.41762 21.1213 3.70283 21.1213 4.00023C21.1213 4.29762 21.0032 4.58283 20.7929 4.79312L11.4888 14.0973L9.37437 14.6259L9.90296 12.5115L19.2071 3.20733Z"
                            fill="white" />
                        <path
                            d="M4 3C3.20435 3 2.44129 3.31607 1.87868 3.87868C1.31607 4.44129 1 5.20435 1 6V20C1 20.7957 1.31607 21.5587 1.87868 22.1213C2.44129 22.6839 3.20435 23 4 23H18C18.7957 23 19.5587 22.6839 20.1213 22.1213C20.6839 21.5587 21 20.7957 21 20V13C21 12.4477 20.5523 12 20 12C19.4477 12 19 12.4477 19 13V20C19 20.2652 18.8946 20.5196 18.7071 20.7071C18.5196 20.8946 18.2652 21 18 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V6C3 5.73478 3.10536 5.48043 3.29289 5.29289C3.48043 5.10536 3.73478 5 4 5H11C11.5523 5 12 4.55228 12 4C12 3.44772 11.5523 3 11 3H4Z"
                            fill="white" />
                    </svg>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            profile: [
                {
                    name: "Ім'я",
                    value: 'John Doe'
                },
                {
                    name: 'Пароль',
                    value: '********'
                },
                {
                    name: "Електронна пошта",
                    value: 'lorem*****@gmail.com'
                },
                {
                    name: 'Мобільний телефон',
                    value: '+380 (12) 345 67 89'
                },
                {
                    name: 'Кількість замовлень',
                    value: '99'
                }
            ]
        }
    }
}
</script>
<style lang="scss">
.container {
    border-radius: 10px;
    background: var(--gray-white, #FFF);
    box-shadow: 5px 5px 25px 0px rgba(0, 0, 0, 0.25);
    padding: 20px;

    &-top {
        display: flex;
        flex-direction: row;
        align-items: center;
        position: relative;
        padding-bottom: 20px;

        &-icon {
            margin-right: 20px;
        }

        &-title {
            color: #292929;
            font-family: '88';
            font-size: 20px;
            font-weight: 400;
            letter-spacing: 0.4px;
        }

        &::before {
            display: block;
            content: "";
            width: 100%;
            height: 1px;
            background: #DCDCDC;
            position: absolute;
            bottom: 0;

        }
    }

    &-middle {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        row-gap: 20px;
        position: relative;
        list-style: none;
        align-items: baseline;

        &-item {
            padding-top: 20px;
            display: flex;
            flex-direction: column;
            padding-bottom: 20px;

            &__name {
                margin-bottom: 16px;
                color: #292929;
                font-family: '88';
                font-size: 16px;
                font-weight: 400;
                letter-spacing: 0.32px;
            }

            &__value {
                color: #292929;
                font-family: '88';
                font-size: 20px;
                font-weight: 400;
                letter-spacing: 0.4px;
            }
            &__btn {
                border-radius: 10px;
                background: #EFCA00;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 10px 0;
                &-title {
                    margin-right: 8px;
                    font-size: 16px;
                    font-family: '88';
                    color: white;
                }
            }
        }
    }

    &-middle> :first-child::after,
    &-middle> :nth-child(2)::after,
    &-middle> :nth-child(3)::after {
        content: '';
        position: absolute;
        width: 780px;
        left: 50%;
        top: 50%;
        transform: translate(-50%);
        height: 1px;
        display: block;
        background: #dcdcdc;
    }

}
</style>