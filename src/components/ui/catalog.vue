<template>
    <template v-if="catalogModal">
        <div class="catalogModal">
            <aside class="catalogModal-aside">
                <ul>
                    <li v-for="category in categories" :key="category._id" @mouseover="showTabContent(category.name)">
                        <img :src="category.img" alt="">
                        <p>{{ category.name }}</p>
                        <svg style="max-width: 32px; width: 100%" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg" stroke="#333333">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path d="M7 10L12 15L17 10" stroke="#333333" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round"></path>
                            </g>
                        </svg>
                    </li>
                </ul>
            </aside>
            <div class="catalogModal-content">
                <div v-for="(category, index) in categories" :key="index" class="tab-content"
                    :class="{ active: showTab === category.name }">
                    <div v-if="showTab === category.name">
                        <h2 style="padding-top: 30px">{{ category.name }}</h2>
                        <img :src="category.img" alt="" id="categoryImg">
                    </div>
                    <template v-for="(item, index) in category.childCategories" :key="index">
                        <div class="catalogModal-content__grid">
                            <ul>
                                <li>
                                    <router-link :to="{ name: 'subcategory', params: { query: item._id } }">
                                        <p class="link-text">{{ item.name }}</p>
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </template>
</template>
  
<script>
import { ref, onBeforeMount } from "vue";
import { useApiStore } from "../../store/store";

export default {
    props: {
        catalogModal: Boolean,
    },
    data() {
        return {
            categories: [],
            showTab: 'Популярні категорії',
        };
    },
    methods: {
        showTabContent(tabTitle) {
            this.showTab = tabTitle;
        },
    },
    created() {
        const apiStore = useApiStore();
        const otherComponentData = ref([]);

        onBeforeMount(() => {
            this.categories = apiStore.dataArray;
        });

        return {
            otherComponentData,
        };
    },
    watch: {
        catalogModal(val) {
            this.$emit('catalogModal', val)
        }
    }
};
</script>
  
<style scoped lang="scss">
.catalogModal-content__grid {
    ul>li {
        list-style: none;
        a {
            text-decoration: none;
            p {
                color: #292929;
                &:hover {
                    color: #0027ab;
                }
            }
        }
    }
}
.catalogModal {
    max-width: 70%;
    width: 100%;
    position: fixed;
    top: 22%;
    background: #f8f8f8;
    box-shadow: 5px 5px 25px 0px rgba(0, 0, 0, 0.2);
    border-radius: 1rem;
    left: 50%;
    transform: translate(-50%);

    z-index: 10000;
    display: flex;
    flex-direction: row;

    &-aside {
        width: 28%;
        padding: 50px 0;

        ul {
            list-style: none;
            padding-left: 20px;

            li {
                cursor: pointer;
                display: flex;
                flex-direction: row;
                align-items: center;
                padding: 8px 5px;
                border-radius: .5rem;
                font-family: '88';

                p {
                    width: 300px;
                    font-size: 18px;
                }

                img {
                    max-width: 30px;
                    margin-right: 10px;
                }

                svg {
                    rotate: 270deg;
                }

                &:hover {
                    p {
                        color: #007bff;
                    }

                    background: #00000020;
                }
            }
        }
    }

    &-content {
        padding: 20px;
        max-width: 80%;
        width: 100%;
        z-index: 10;
        font-family: '88';
        position: relative;

        &__grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            grid-gap: 50px;
            margin: 2rem auto;
            padding: 0 1rem;

            &-title {
                font-size: 18px;
            }

            &-list {
                ul {
                    list-style: none;

                    a {
                        text-decoration: none;
                    }

                    li {
                        cursor: pointer;
                        color: #333;
                        margin-top: 15px;
                        border-radius: 10px;
                        font-size: 14px;
                        padding-bottom: 5px;
                        border-bottom: 1px solid transparent;

                        p {
                            padding-left: 5px;
                        }

                        &:hover {
                            border-bottom: 1px solid #000000;
                            background: #00000020;
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 1440px) {
        &-aside {
            ul {
                li {
                    margin-top: 10px;

                    p {
                        font-size: 14px;
                    }

                    img {
                        max-width: 24px;
                    }
                }
            }
        }

        &-content {
            &__grid {
                &-title {
                    font-size: 14px;
                }

                &-list {
                    ul li {
                        margin-top: 5px;
                        font-size: 12px;
                    }
                }
            }
        }
    }

    @media (max-width: 1200px) {
        max-width: 90%;
    }
}

#categoryImg {
    position: absolute;
    opacity: .3;
    right: 0;
    bottom: 0;
    max-width: 350px;
}

.tab-content {
    display: none;
}

.tab-content.active {
    display: block;
}

.catalog {
    @media (max-width: 920px) {
        display: none;
    }

    user-select: none;
    cursor: pointer;
    max-width: 190px;
    width: 100%;
    background: #333333;
    border-radius: .7rem;

    &-items {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 10px 0;

        img {
            width: 32px;
            margin-right: 10px;
        }

        p {
            font-size: 24px;
            color: white;
        }
    }

    @media (max-width: 1440px) {
        max-width: 140px;

        &-items {
            padding: 7.5px 0;

            img {
                width: 22px;
            }

            p {
                font-size: 14px;
            }
        }
    }
}
</style>