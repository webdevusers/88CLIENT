<template>
    <div ref="burgerMenuOff">
        <TheHeader />
        <TheAction :burgerMenu="showBurgerMenu" />
        <div ref="burgerMenu">

            <main class="main">
                <div class="main__wrap wrap">
                    <div class="welcome">
                        <aside class="hide">
                            <sideBar @updateCategories="updateCategories" />
                        </aside>
                        <div>
                            <TheBanner />
                        </div>
                    </div>
                    <div class="padding btn btn-catalog centered" @click="openModal = !openModal">
                        Каталог товарів
                    </div>
                    <popularCategories :updatedCategories="categories" />
                    <newItems :updatedCategories="categories" />
                    <categoriesItems :updatedCategories="categories" />
                </div>
            </main>
        </div>
        <catalog :catalog-modal="openModal" />
        <TheFooter />
    </div>
</template>
<script>
import Hammer from 'hammerjs';
import catalog from '../ui/catalog.vue'
export default {
    mounted() {
        this.hammer = new Hammer(this.$refs.burgerMenu);
        this.hammer.on('swiperight', this.handleSwipeRight);
        this.hammer = new Hammer(this.$refs.burgerMenuOff)
        this.hammer.on('swipeleft', this.handleSwipeLeft)
    },
    beforeUnmount() {
        this.hammer.off('swiperight', this.handleSwipeRight);
        this.hammer.off('swiperleft', this.handleSwipeLeft)
    },
    data() {
        return {
            categories: [],
            showBurgerMenu: false,
            openModal: false,
        }
    },
    methods: {
        updateCategories(val) {
            this.categories = val
        },
        handleSwipeRight() {
            console.log('Свайп слева вправо');
            if (window.innerWidth < 968) {
                this.showBurgerMenu = true
            }
        },
        handleSwipeLeft() {
            console.log('Свайп справа в лево')
            if (window.innerWidth < 968) {
                this.showBurgerMenu = false
            }
        },
    },
}
</script>
<script setup>
import TheHeader from '../base/TheHeader.vue'
import TheAction from '../base/TheAction.vue'
import TheBanner from '../base/TheBanner.vue'
import sideBar from './particles/side-bar.vue'
import newItems from './particles/newItems.vue'
import categoriesItems from './particles/category-items.vue'
import popularCategories from './particles/popular-categories.vue'
import TheFooter from '../base/TheFooter.vue'
</script>
<style lang="scss" scoped>
.padding {
    padding: 0 20px;

    @media (max-width: 440px) {
        padding: 0 10px;
    }
}

.btn {
    user-select: none;
    cursor: pointer;
    text-decoration: none;
    margin-bottom: 32px;

    &-catalog {
        border-radius: 10px;
        background: #efca00;
        color: white;
        padding: 15px;
        font-size: 20px;
        font-family: '88';
        display: none;

        @media (max-width: 968px) {
            font-size: 16px;
            display: block;
        }
    }

    &.centered {
        text-align: center;
    }
}

@media (max-width: 1024px) {
    .hide {
        display: none;
    }

    .welcome {
        display: block !important;
    }
}

.main {
    .welcome {
        display: grid;
        padding: 0;
        grid-template-columns: 30% 70%;
        grid-gap: 30px;
        justify-content: space-between;
        margin-bottom: 64px;

        @media (max-width: 968px) {
            margin-bottom: 32px;
        }
    }
}
</style>
