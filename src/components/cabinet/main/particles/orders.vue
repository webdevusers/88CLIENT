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
                <div class="container-middleOrder-orderItem__header">
                    <div class="container-middleOrder-orderItem__header-status">
                        <template v-if="item.status === 'process'">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="12" r="12" fill="#FFA500" />
                            </svg>
                        </template>
                        <template v-else-if="item.status === 'succeffully'">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="12" r="12" fill="#57AE01" />
                            </svg>
                        </template>
                        <template v-else-if="item.status === 'cancel'">
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path
                                d="M0.751468 3.03486C0.469668 3.13788 0.216047 3.38512 0.0751472 3.69417C0.00939375 3.84182 3.97164e-07 3.91394 3.83505e-07 4.22642C3.69096e-07 4.55607 0.0062626 4.60415 0.0876716 4.77584C0.162818 4.93037 0.845402 5.69612 3.73542 8.86903C6.69119 12.1141 7.32681 12.794 7.48337 12.8867C7.66184 12.9931 7.68689 13 8 13C8.31311 13 8.33816 12.9931 8.51663 12.8867C8.67632 12.794 9.30568 12.1175 12.2771 8.85187C15.1108 5.74076 15.8622 4.89603 15.9249 4.75867C15.9906 4.61102 16 4.5389 16 4.22642C16 3.89677 15.9906 3.84869 15.9092 3.67013C15.7996 3.43319 15.618 3.23403 15.3894 3.10354C15.2329 3.01769 15.1859 3.00739 14.9041 3.00739C14.3562 3.00739 14.6693 2.70864 11.1249 6.59237L8 10.0125L4.87828 6.59237C1.3683 2.75328 1.64697 3.01769 1.14286 3.00052C0.986302 2.99709 0.826615 3.01082 0.751468 3.03486Z"
                                fill="#292929" />
                        </svg>
                    </div>
                </div>
                <div class="container-middleOrder-orderItem__body">
                    <div class="container-middleOrder-orderItem__body-main">
                        <li><img src="../../../../../public/images/iphone.png" alt=""></li>
                        <li></li>
                        <li></li>
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
                    status: 'process',
                    date: '31.10.2023',
                    name: 'Iphone 13 pro max',
                }
            ]
        }
    }
}
</script>
<style lang="scss">
.orders {
    .container-top {
        margin-bottom: 20px;
    }

    .container-middleOrder> :first-child::after,
    .container-middleOrder> :nth-child(2)::after,
    .container-middleOrder> :nth-child(3)::after {
        display: none !important;
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

            &::after {
                display: block;
                content: "";
                width: 100%;
                height: 1px;
                background: #DCDCDC;
                position: absolute;
                bottom: 0;
            }
        }
    }
}</style>