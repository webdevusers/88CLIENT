<template>
    <div class="container">
        <div class="container-top">
            <div class="container-top-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M9.97191 8.13979C10.2649 8.00054 10.6987 7.83344 10.9297 7.77217C11.5156 7.62734 12.4508 7.62177 13.048 7.77217C13.2902 7.83344 13.7353 8.00054 14.0282 8.14536C14.4846 8.3626 14.6423 8.47957 15.1043 8.93632C15.5663 9.39306 15.6846 9.54903 15.9043 10.0002C16.2649 10.7132 16.3944 11.259 16.3944 12.0054C16.3944 12.7518 16.2649 13.2977 15.9043 14.0107C15.679 14.4619 15.5663 14.6178 15.1043 15.069C14.5071 15.6594 14.017 15.9491 13.2395 16.1942C12.879 16.3056 12.6987 16.3223 12.0001 16.3223C11.3015 16.3223 11.1212 16.3056 10.7606 16.1942C9.98318 15.9491 9.49304 15.6594 8.89585 15.069C8.43388 14.6178 8.32121 14.4619 8.09585 14.0107C7.73529 13.2977 7.60571 12.7518 7.60571 12.0054C7.60571 11.259 7.73529 10.7132 8.09585 10.0002C8.31557 9.54903 8.43388 9.39306 8.89585 8.93632C9.35783 8.47957 9.51557 8.3626 9.97191 8.13979ZM14.3944 9.63258C13.8761 9.12013 13.3522 8.82491 12.693 8.69123C12.2198 8.59097 11.7466 8.59097 11.2677 8.6968C10.0113 8.96417 8.91839 10.0559 8.64797 11.3203C8.48459 12.0667 8.58036 12.763 8.93529 13.4982C9.22825 14.0998 9.88177 14.7459 10.4902 15.0356C10.9747 15.2639 11.5381 15.4032 12.0001 15.4032C12.4621 15.4032 13.0254 15.2639 13.5099 15.0356C14.1184 14.7459 14.7719 14.0998 15.0649 13.4982C15.7297 12.128 15.4818 10.7076 14.3944 9.63258Z"
                        :fill="this.activeItem === 'Переглянуті товари' ? 'white' : '#292929'" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M7.66197 6.01749C8.72113 5.53847 10.169 5.13185 11.1831 5.02045C11.7577 4.95918 13.1099 5.04273 13.7746 5.17641C16.7099 5.77798 20.1296 7.88348 23.2563 11.0139C23.9775 11.7436 24 11.7714 24 12.0053C24 12.2393 23.9775 12.2671 23.2563 12.9968C20.0676 16.1885 16.6479 18.2717 13.6338 18.8621C12.7099 19.046 11.2901 19.046 10.3662 18.8621C7.35775 18.2717 3.91549 16.1718 0.749296 12.9968C0.0225352 12.2671 0 12.2393 0 12.0053C0 11.7714 0.0225352 11.7436 0.743662 11.0139C2.95211 8.80811 5.37465 7.05353 7.66197 6.01749ZM22.0563 11.2367C18.8732 8.16198 15.493 6.28486 12.6254 5.99521C12.3042 5.96179 11.9775 5.93951 11.893 5.93951C9.71831 6.05091 7.44789 6.96441 4.94085 8.74127C3.85915 9.50438 2.59155 10.5738 1.66197 11.4985L1.15493 12.0053L1.66197 12.5122C3.01972 13.8658 4.74366 15.2193 6.32113 16.1718C7.41972 16.8346 8.37746 17.2747 9.46479 17.6256C11.8197 18.3775 13.938 18.1213 16.6197 16.7622C18.4113 15.8599 20.6986 14.1554 22.338 12.5067L22.8451 11.9998L22.0563 11.2367Z"
                        :fill="this.activeItem === 'Переглянуті товари' ? 'white' : '#292929'" />
                </svg>
            </div>
            <div class="container-top-title">
                Переглянуті товари
            </div>
        </div>
        <div class="container-items">
            <div class="container-items-item" v-for="(item, idx) in products" :key="idx">
                <pc :id="item._id" :title="item.name" :price="item.price" :oldprice="item.oldPrice" :srcImage="item.img"
                    :discount="item.discount" :ratingVoid="5" :countRating="49" :stock_quantity="499" />
            </div>
        </div>
    </div>
</template>
<script>
import pc from '@/components/ui/product-card.vue'
export default {
    data() {
        return {
            products: [
                {
                    _id: "test",
                    name: "Iphone 13 pro max",
                    price: 19999,
                    oldPrice: 29999,
                    img: '/images/iphone.png',
                    liked: 12,
                    discount: true,
                    reviews: [
                        {

                        },
                        {

                        }
                    ],
                },
                {
                    _id: "test",
                    name: "Iphone 13 pro max",
                    price: 19999,
                    oldPrice: 29999,
                    img: '/images/iphone.png',
                    liked: 12,
                    discount: true,
                    reviews: [
                        {

                        },
                        {

                        }
                    ],
                },
            ]
        }
    },
    components: {
        pc
    }
}
</script>
<style lang="scss">
.container-items {
    padding: 20px 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
}

</style>