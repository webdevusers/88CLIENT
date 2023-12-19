<script setup>
import TheHeader from '../components/base/TheHeader.vue';
import TheAction from '../components/base/TheAction.vue';
import TheFooter from '../components/base/TheFooter.vue';
</script>
<template>
    <TheHeader />
    <TheAction />
    <div class="category">
        <div class="category__wrap wrap">
            <div class="categoryName">
                {{ name }}
            </div>
            <ul class="category-list">
                <li class="category-list__item" v-for="item in subcategories" :key="item._idx">
                    <router-link :to="{ name: 'subcategory', params: { query: item.id } }">
                        <div class="category-list__item-img">
                            <img :src="item.img" alt="">
                        </div>
                        <div class="category-list__item-title">
                            {{ item.name }}
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
    <TheFooter />
</template>
<script>
import axios from 'axios'
export default {
    name: 'category',
    data() {
        return {
            name: '',
            subcategories: []
        }
    },
    created() {
        const id = this.$route.query.query;
        console.log(id)
        axios.get(`https://88.cx.ua/item/getCategory/?id=${id}`)
            .then(response => {
                this.name = response.data.categoryName;
                this.subcategories = response.data.subcategories
            })
            .catch(error => {
                console.error('Error fetching subcategories', error);
            });
    }
}
</script>
<style lang="scss">
.categoryName {
    color: #292929;
    font-family: '88';
    font-size: 48px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 32px;
}

.category {
    &-list {
        list-style: none;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 16px;
        margin-bottom: 64px;

        li {
            min-width: 250px;
            margin: 0 auto;
            text-align: center;

            a {
                color: unset;
            }
        }

        &__item {
            border-radius: 10px;
            background: var(--gray-white, #FFF);
            box-shadow: 5px 5px 25px 0px rgba(0, 0, 0, 0.20);
            padding: 16px;
            min-width: 280px !important;
            &-img {
                img {
                    max-width: 160px;
                    margin: 0 auto;
                }
            }
            &-title {
                color: #292929;
                font-family: '88';
                font-size: 16px;
                font-weight: 500;
            }
        }
    }
}
</style>