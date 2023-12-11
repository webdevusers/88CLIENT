<script>
import Catalog from '../ui/catalog.vue'
import regModal from './Authentication/regModal.vue'
import axios from 'axios'
export default {
    props: {
        burgerMenu: Boolean
    },
    data() {
        return {
            openCatalog: false,
            request: '',
            customers: false,
            contacts: false,
            window: {
                innerWidth: window.innerWidth
            },
            links: [
                {
                    src: 'https://firebasestorage.googleapis.com/v0/b/dropshipping-2afce.appspot.com/o/icons%2Fhome.svg?alt=media&token=3ed508e5-44f1-4303-b670-527c5c89ef51&_gl=1*vv8pwz*_ga*NDA0ODk5NjE2LjE2OTg2NzUwMzA.*_ga_CW55HF8NVT*MTY5ODc5MjU2NC4xMS4xLjE2OTg3OTM1NzYuNDUuMC4w',
                    name: 'Головна',
                    link: '/'
                },
                {
                    src: 'https://firebasestorage.googleapis.com/v0/b/dropshipping-2afce.appspot.com/o/icons%2Fcatalog.svg?alt=media&token=12b8ab7b-84ef-4c7a-87f2-6375df1b7ebf&_gl=1*i591lm*_ga*NDA0ODk5NjE2LjE2OTg2NzUwMzA.*_ga_CW55HF8NVT*MTY5ODc5MjU2NC4xMS4xLjE2OTg3OTM1OTUuMjYuMC4w',
                    name: 'Каталог товарів',
                    link: '/catalog'
                },
                {
                    src: 'https://firebasestorage.googleapis.com/v0/b/dropshipping-2afce.appspot.com/o/icons%2Fblack-liked.svg?alt=media&token=b8c53b48-2960-4121-bce6-501ec7746681&_gl=1*1bi8jy5*_ga*NDA0ODk5NjE2LjE2OTg2NzUwMzA.*_ga_CW55HF8NVT*MTY5ODc5MjU2NC4xMS4xLjE2OTg3OTM2NzQuNTIuMC4w',
                    name: 'Обране',
                    link: '/liked'
                },
                {
                    src: 'https://firebasestorage.googleapis.com/v0/b/dropshipping-2afce.appspot.com/o/icons%2Fblack-cart.svg?alt=media&token=3bec1003-7063-4cc2-b6cc-d2ab5a4704c8&_gl=1*3m3a13*_ga*NDA0ODk5NjE2LjE2OTg2NzUwMzA.*_ga_CW55HF8NVT*MTY5ODc5MjU2NC4xMS4xLjE2OTg3OTM2ODcuMzkuMC4w',
                    name: 'Кошик',
                    link: '/cart'
                }
            ],
            scrollStyle: {
                position: 'relative'
            },
            modalAuthentication: false
        }
    },
    methods: {
        updateRegModal() {
            this.modalAuthentication = false
        }
    },
    mounted() {
        window.addEventListener('resize', this.handleResize)
        window.addEventListener('scroll', this.handleScroll)
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.handleResize)
        window.removeEventListener('scroll', this.handleScroll)

    },
    methods: {
        handleResize() {
            this.window.innerWidth = window.innerWidth
        },
        handleScroll() {
            let appId = document.getElementById('app');
            let header = document.getElementsByClassName('header');
            const scrollPosition = window.scrollY;

            if (scrollPosition > (window.innerWidth > 980 ? 135 : 115)) {
                this.scrollStyle.position = 'fixed';
                appId.style.marginTop = window.innerWidth > 980 ? '258px' : '238px';
                header[0].style.display = 'none';
                this.scrollStyle.top = 0;
            } else {
                this.scrollStyle.position = 'relative';
                appId.style.marginTop = '0';
                header[0].style.display = 'block';
            }
        },
        updateCategories(val) {
            this.$emit('updateCategories', val)
            console.log(val)
        },
        search() {
            if (this.request.length > 0) {
                this.$router.push({
                    path: `/search/`,
                    query: { query: this.request },
                });
            }
        }
    },
    components: {
        Catalog,
        regModal
    },
}
</script>
<template>
    <div class="action" :style="scrollStyle" style="z-index: 10000;">
        <div class="wrap">
            <div class="items">
                <template v-if="window.innerWidth < 968">
                    <div class="item-catalog" @click="burgerMenu = !burgerMenu">
                        <div class="item-catalog-img">
                            <img src="https://firebasestorage.googleapis.com/v0/b/dropshipping-2afce.appspot.com/o/icons%2Fburger-menu.svg?alt=media&token=78d02bd1-7d5d-4482-b4c4-72f9ac71eb44&_gl=1*8qliw*_ga*NDA0ODk5NjE2LjE2OTg2NzUwMzA.*_ga_CW55HF8NVT*MTY5ODY5MzQ3OC4zLjEuMTY5ODY5MzUxMC4yOC4wLjA."
                                alt="" />
                        </div>
                        <div class="item-catalog-text">Каталог</div>
                    </div>
                </template>
                <template v-else>
                    <div @click="openCatalog = !openCatalog">
                        <div class="item-catalog">
                            <div class="item-catalog-img">
                                <img src="https://firebasestorage.googleapis.com/v0/b/dropshipping-2afce.appspot.com/o/icons%2Fburger-menu.svg?alt=media&token=78d02bd1-7d5d-4482-b4c4-72f9ac71eb44&_gl=1*8qliw*_ga*NDA0ODk5NjE2LjE2OTg2NzUwMzA.*_ga_CW55HF8NVT*MTY5ODY5MzQ3OC4zLjEuMTY5ODY5MzUxMC4yOC4wLjA."
                                    alt="" />
                            </div>
                            <div class="item-catalog-text">Каталог</div>
                        </div>
                    </div>
                </template>
                <div class="item-search">
                    <div class="item-search-input">
                        <input type="text" placeholder="Я хочу знайти..." v-model="request" @keyup.enter="search" />
                    </div>
                    <div class="item-search-icon" style="cursor: pointer" @click="search">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dropshipping-2afce.appspot.com/o/icons%2Fsearch.svg?alt=media&token=184c8d9c-e018-4e03-86c4-0954eb961a20&_gl=1*1bmk89y*_ga*NDA0ODk5NjE2LjE2OTg2NzUwMzA.*_ga_CW55HF8NVT*MTY5ODY5MzQ3OC4zLjEuMTY5ODY5MzQ5Ni40Mi4wLjA."
                            alt="" />
                    </div>
                </div>
                <div class="item-personal">
                    <div class="item-personal-icon profile" @click="modalAuthentication = !modalAuthentication">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dropshipping-2afce.appspot.com/o/icons%2Fpersonal.svg?alt=media&token=34d47753-03d1-4de5-9ecb-5bbb85cf3a2f&_gl=1*vcztn4*_ga*NDA0ODk5NjE2LjE2OTg2NzUwMzA.*_ga_CW55HF8NVT*MTY5ODY5MzQ3OC4zLjEuMTY5ODY5MzUyNC4xNC4wLjA."
                            alt="" />
                    </div>
                    <div class="item-personal-icon">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dropshipping-2afce.appspot.com/o/icons%2Fliked.svg?alt=media&token=84514119-702d-4b07-9be8-009277be6779&_gl=1*14lvitn*_ga*NDA0ODk5NjE2LjE2OTg2NzUwMzA.*_ga_CW55HF8NVT*MTY5ODY5MzQ3OC4zLjEuMTY5ODY5MzUzOC42MC4wLjA."
                            alt="" />
                    </div>
                    <router-link to="/cart" class="cart">
                        <div class="item-personal-icon">
                            <img src="https://firebasestorage.googleapis.com/v0/b/dropshipping-2afce.appspot.com/o/icons%2Fcart.svg?alt=media&token=0f861b5b-c2ff-4032-89d7-ddb78c69c635&_gl=1*z3m9i8*_ga*NDA0ODk5NjE2LjE2OTg2NzUwMzA.*_ga_CW55HF8NVT*MTY5ODY5MzQ3OC4zLjEuMTY5ODY5MzU0Ny41MS4wLjA."
                                alt="" />
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
    <div class="burger-menu" v-if="burgerMenu === true">
        <div class="burger-menu-logo">
            <img src="https://firebasestorage.googleapis.com/v0/b/dropshipping-2afce.appspot.com/o/icons%2Flogo.svg?alt=media&token=4f7b2228-5c40-4437-935e-2435c48deacd&_gl=1*1ytnyoy*_ga*NDA0ODk5NjE2LjE2OTg2NzUwMzA.*_ga_CW55HF8NVT*MTY5ODY3NTAzMC4xLjEuMTY5ODY3NTU5OC4xMS4wLjA."
                alt="" />
        </div>
        <div class="burger-menu-close">
            <img @click="burgerMenu = false"
                src="https://firebasestorage.googleapis.com/v0/b/dropshipping-2afce.appspot.com/o/icons%2Fclose.svg?alt=media&token=ed2a79ce-eeca-4259-998f-f3a1f0c77a81&_gl=1*1hi8n3w*_ga*NDA0ODk5NjE2LjE2OTg2NzUwMzA.*_ga_CW55HF8NVT*MTY5ODc3MTYzNi44LjEuMTY5ODc3MTY0Ny40OS4wLjA."
                id="showMobile" alt="" />
        </div>
        <div class="burger-menu-client">
            <div class="burger-menu-client-block">
                <div class="burger-menu-client-block-icon">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dropshipping-2afce.appspot.com/o/icons%2Fuser-mobile.svg?alt=media&token=9c6d81b4-abf6-4740-adba-eab2aa1a9d2b&_gl=1*7a0r61*_ga*NDA0ODk5NjE2LjE2OTg2NzUwMzA.*_ga_CW55HF8NVT*MTY5ODc5MjU2NC4xMS4xLjE2OTg3OTI2MTAuMTQuMC4w"
                        alt="" />
                </div>
                <div class="burger-menu-client-block-title">Увійти у профіль</div>
            </div>
        </div>
        <ul class="burger-menu-list">
            <router-link to="/">
                <li class="burger-menu-list-item">
                    <div class="burger-menu-list-item-img">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dropshipping-2afce.appspot.com/o/icons%2Fhome.svg?alt=media&token=3ed508e5-44f1-4303-b670-527c5c89ef51&_gl=1*vv8pwz*_ga*NDA0ODk5NjE2LjE2OTg2NzUwMzA.*_ga_CW55HF8NVT*MTY5ODc5MjU2NC4xMS4xLjE2OTg3OTM1NzYuNDUuMC4w"
                            alt="" />
                    </div>
                    <div class="burger-menu-list-item-text">
                        <p>Головна</p>
                    </div>
                </li>
            </router-link>
            <li class="burger-menu-list-item" @click="openCatalog = !openCatalog">
                <div class="burger-menu-list-item-img">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dropshipping-2afce.appspot.com/o/icons%2Fcatalog.svg?alt=media&token=12b8ab7b-84ef-4c7a-87f2-6375df1b7ebf&_gl=1*i591lm*_ga*NDA0ODk5NjE2LjE2OTg2NzUwMzA.*_ga_CW55HF8NVT*MTY5ODc5MjU2NC4xMS4xLjE2OTg3OTM1OTUuMjYuMC4w"
                        alt="" />
                </div>
                <div class="burger-menu-list-item-text">
                    <p>Каталог товарів</p>
                </div>
            </li>
        </ul>
        <div class="burger-menu-categories">
            <router-link to="/categories" class="burger-menu-categories-link">
                <div class="burger-menu-categories-link-img">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dropshipping-2afce.appspot.com/o/icons%2Fallcategories.svg?alt=media&token=b41908a5-f99b-4cb2-b7e6-69d22bfe6641&_gl=1*p4r2fj*_ga*NDA0ODk5NjE2LjE2OTg2NzUwMzA.*_ga_CW55HF8NVT*MTY5ODc5MjU2NC4xMS4xLjE2OTg3OTQ2ODUuNTEuMC4w"
                        alt="" />
                </div>
                <div class="burger-menu-categories-link-text">Усі категорії</div>
            </router-link>
            <router-link to="/discount" class="burger-menu-categories-link">
                <div class="burger-menu-categories-link-img">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dropshipping-2afce.appspot.com/o/icons%2Fdiscount.svg?alt=media&token=a4c6ad5e-f72f-4d11-b4ef-cab880dd559b&_gl=1*189xjxa*_ga*NDA0ODk5NjE2LjE2OTg2NzUwMzA.*_ga_CW55HF8NVT*MTY5ODc5MjU2NC4xMS4xLjE2OTg3OTQ3MzIuNC4wLjA."
                        alt="" />
                </div>
                <div class="burger-menu-categories-link-text">Бонуси</div>
            </router-link>
        </div>
        <div class="burger-menu-dropdown" @click="customers = !customers">
            <div class="burger-menu-dropdown-img">
                <img src="https://firebasestorage.googleapis.com/v0/b/dropshipping-2afce.appspot.com/o/icons%2Finformation.svg?alt=media&token=75d44ff5-cdd2-4655-8774-5eae43c16dfd&_gl=1*14ssxt9*_ga*NDA0ODk5NjE2LjE2OTg2NzUwMzA.*_ga_CW55HF8NVT*MTY5ODc5MjU2NC4xMS4xLjE2OTg3OTQ4ODAuNTAuMC4w"
                    alt="" />
            </div>
            <div class="burger-menu-dropdown-title">
                <p>Покупцям</p>
            </div>
            <div class="burger-menu-dropdown-arrow" :class="{ active: customers === true }">
                <img src="https://firebasestorage.googleapis.com/v0/b/dropshipping-2afce.appspot.com/o/icons%2Farrow.svg?alt=media&token=cedfac15-83e9-4e8a-9512-f6585e3b10b1&_gl=1*1jpm5qk*_ga*NDA0ODk5NjE2LjE2OTg2NzUwMzA.*_ga_CW55HF8NVT*MTY5ODc5MjU2NC4xMS4xLjE2OTg3OTUwMTEuNjAuMC4w"
                    alt="" />
            </div>
        </div>
        <template v-if="customers === true">
            <div class="burger-menu-links">
                <router-link to="/about">Про нас</router-link>
                <router-link to="/conditions">Умови</router-link>
                <router-link to="/help">Допомога</router-link>
            </div>
        </template>
        <div class="burger-menu-dropdown" @click="contacts = !contacts">
            <div class="burger-menu-dropdown-img">
                <img src="https://firebasestorage.googleapis.com/v0/b/dropshipping-2afce.appspot.com/o/icons%2Fphone.svg?alt=media&token=3157ef82-965d-4126-8774-74c80f10fa75&_gl=1*nlwska*_ga*NDA0ODk5NjE2LjE2OTg2NzUwMzA.*_ga_CW55HF8NVT*MTY5ODc5MjU2NC4xMS4xLjE2OTg3OTYyNTcuNC4wLjA."
                    alt="" />
            </div>
            <div class="burger-menu-dropdown-title">
                <p>Зв'язатися з нами</p>
            </div>
            <div class="burger-menu-dropdown-arrow" :class="{ active: contacts === true }">
                <img src="https://firebasestorage.googleapis.com/v0/b/dropshipping-2afce.appspot.com/o/icons%2Farrow.svg?alt=media&token=cedfac15-83e9-4e8a-9512-f6585e3b10b1&_gl=1*1jpm5qk*_ga*NDA0ODk5NjE2LjE2OTg2NzUwMzA.*_ga_CW55HF8NVT*MTY5ODc5MjU2NC4xMS4xLjE2OTg3OTUwMTEuNjAuMC4w"
                    alt="" />
            </div>
        </div>
        <template v-if="contacts === true">
            <div class="burger-menu-links">
                <a href="tel:">
                    <div class="burger-menu-links-img">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dropshipping-2afce.appspot.com/o/icons%2Fvodafone.svg?alt=media&token=28079247-1eb1-4830-bd55-993e73c1b686&_gl=1*1wp4p5i*_ga*NDA0ODk5NjE2LjE2OTg2NzUwMzA.*_ga_CW55HF8NVT*MTY5ODc5MjU2NC4xMS4xLjE2OTg3OTYyMTIuNDkuMC4w"
                            alt="" />
                    </div>
                    <div class="burger-menu-links-text">+380 (12) 345 67 89</div>
                </a>
                <a href="#">
                    <div class="burger-menu-links-img">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dropshipping-2afce.appspot.com/o/icons%2FTelegramIcon.svg?alt=media&token=d3bab36b-c6c3-4e79-b940-36d021dbc6d8&_gl=1*m4xq0o*_ga*NDA0ODk5NjE2LjE2OTg2NzUwMzA.*_ga_CW55HF8NVT*MTY5ODc5MjU2NC4xMS4xLjE2OTg3OTYyOTMuNjAuMC4w"
                            alt="" />
                    </div>
                    <div class="burger-menu-links-text">Telegram</div>
                </a>
                <a href="#">
                    <div class="burger-menu-links-img">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dropshipping-2afce.appspot.com/o/icons%2FWhatsappIcon.svg?alt=media&token=d05f1676-89c5-4582-9e68-e901a6fd0782&_gl=1*kxdudo*_ga*NDA0ODk5NjE2LjE2OTg2NzUwMzA.*_ga_CW55HF8NVT*MTY5ODc5MjU2NC4xMS4xLjE2OTg3OTYzMDYuNDcuMC4w"
                            alt="" />
                    </div>
                    <div class="burger-menu-links-text">Whatsapp</div>
                </a>
                <a href="#">
                    <div class="burger-menu-links-img">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dropshipping-2afce.appspot.com/o/icons%2FInstagramIcon.svg?alt=media&token=d51bf33b-e238-4c66-a245-5cf804250133&_gl=1*1dqifmk*_ga*NDA0ODk5NjE2LjE2OTg2NzUwMzA.*_ga_CW55HF8NVT*MTY5ODc5MjU2NC4xMS4xLjE2OTg3OTYzMjIuMzEuMC4w"
                            alt="" />
                    </div>
                    <div class="burger-menu-links-text">Instagram</div>
                </a>
                <a href="#">
                    <div class="burger-menu-links-img">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dropshipping-2afce.appspot.com/o/icons%2FViberIcon.svg?alt=media&token=4e49fcf3-44ea-4254-acb4-ae38d84cb860&_gl=1*1lu9vn2*_ga*NDA0ODk5NjE2LjE2OTg2NzUwMzA.*_ga_CW55HF8NVT*MTY5ODc5MjU2NC4xMS4xLjE2OTg3OTYzMzguMTUuMC4w"
                            alt="" />
                    </div>
                    <div class="burger-menu-links-text">Viber</div>
                </a>
                <div style="padding-top: 20px">
                    <button class="contact-button" @click="(modalContact = !modalContact), (contactDropdown = false)">
                        Зворотній дзвінок
                    </button>
                </div>
            </div>
        </template>
    </div>
    <div v-if="openCatalog">
        <div class="background" @click="openCatalog = false">

        </div>
        <Catalog @updateCategories="updateCategories" style="z-index: 10000;" :catalogModal="openCatalog" />
    </div>
    <template v-if="modalAuthentication">
        <regModal @regModal="updateRegModal" />
    </template>
</template>
<style lang="scss" scoped>
.background {
    position: fixed;
    width: 100%;
    height: 100%;
    background: #00000050;
    top: 0;
    z-index: 9999;

    @media (max-width: 968px) {
        display: none;
        visibility: none;
    }
}

.contact-button {
    max-width: 200px;
    width: 100%;
    margin: 0 auto;
    height: 44px;
    border-radius: 10px;
    outline: none;
    border: none;
    color: white;
    font-weight: 400;
    font-family: '88';
    font-size: 16px;
    background: #efce00;
}

.burger-menu {
    position: fixed;
    overflow-y: auto;
    top: 0;
    left: 0;
    animation: open 0.7s;
    z-index: 10001;
    box-shadow: 5px 5px 25px 0px rgba(0, 0, 0, 0.2);
    height: 100%;
    padding-bottom: 40px;
    background: #ffffff;

    &-links {
        padding-left: 72px;
        display: flex;
        flex-direction: column;

        a {
            text-decoration: none;
            color: #292929;
            margin-top: 15px;
            font-family: '88';
            font-size: 16px;

            display: flex;
            flex-direction: row;
        }

        &-text {
            margin-left: 20px;
        }
    }

    &-dropdown {
        padding-top: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding-left: 24px;

        &-img {
            margin-right: 16px;
        }

        &-title {
            min-width: 200px;
            font-size: 16px;
            font-family: '88';
        }

        &-arrow {
            transition: 0.3s;

            &.active {
                transform: rotate(180deg);
            }
        }
    }

    &-categories {
        display: flex;
        flex-direction: column;
        padding-left: 24px;

        &-link {
            margin-top: 20px;
            display: flex;
            flex-direction: row;
            align-items: center;
            text-decoration: none;

            &-img {
                margin-right: 16px;
            }

            &-text {
                font-family: '88';
                color: #292929;
            }
        }
    }

    &-logo {
        padding-top: 16.5px;
        max-width: 55px;
        width: 100%;
        margin-left: 20px;
        margin-bottom: 17px;

        @media (max-width: 620px) {
            margin-left: 10px;
        }

        img {
            width: 100%;
        }
    }

    &-close {
        position: absolute;
        right: 10px;
        top: 10px;
        z-index: 1;
    }

    &-client {
        background: #292929;
        width: 300px;
        height: 60px;

        &-block {
            display: flex;
            flex-direction: row;
            align-items: center;
            padding-left: 24px;
            padding-top: 10px;

            &-icon {
                margin-right: 16px;
            }

            &-title {
                color: white;
                font-family: '88';
                padding-bottom: 5px;
            }
        }
    }

    &-list {
        padding-left: 24px;
        padding-top: 20px;
        padding-bottom: 20px;
        position: relative;

        a {
            text-decoration: none;
            color: #292929;
        }

        li {
            display: flex;
            flex-direction: row;
            align-items: center;
        }

        &::before {
            display: block;
            content: '';
            width: 300px;
            height: 1px;
            background: #dcdcdc;
            position: absolute;
            bottom: 10px;
            left: 0;
        }

        &-item {
            margin-bottom: 20px;

            &-img {
                margin-right: 16px;
            }

            &-text {
                font-family: '88';
            }
        }
    }
}

.action {
    background: #292929;
    margin-bottom: 64px;
    position: relative;
    z-index: 999;
    width: 100%;

    .items {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 8px 0;
        padding-right: 10px;

        .item-personal {
            display: flex;
            flex-direction: row;
            align-items: center;
            cursor: pointer;

            &-icon {
                padding: 7px 12px;
                border-radius: 8px;
                transition: 0.3s;
                user-select: none;
                margin-right: 7.5px;

                &:last-child {
                    margin-right: 0;
                }

                &:hover {
                    transform: scale(1.2);
                    background: #b9b9b920;
                }
            }
        }

        .item-catalog {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            border-radius: 10px;
            background: #b9b9b920;
            cursor: pointer;
            user-select: none;
            height: 44px;
            width: 145px;

            &-text {
                margin-left: 12px;
                color: white;
                font-family: '88';
                font-size: 20px;
            }
        }

        .item-search {
            position: relative;

            &-input {
                input {
                    border-radius: 10px;
                    background: #fafafa;
                    height: 44px;
                    width: 500px;
                    outline: none;
                    border: 1px solid transparent;
                    padding-left: 16px;
                    font-size: 14px;
                }
            }

            &-icon {
                position: absolute;
                top: 10px;
                right: 10px;
            }
        }
    }
}

@keyframes open {
    from {
        left: -300px;
    }

    to {
        left: 0;
    }
}

@media (max-width: 968px) {
    .action {
        .items {
            .item-catalog {
                &-text {
                    font-size: 18px;
                }
            }

            .item-search {
                &-input {
                    input {
                        width: 400px;
                    }
                }
            }

            .item-personal {
                &-icon {
                    padding: 6px 7px;
                }
            }
        }
    }
}

@media (max-width: 720px) {
    .action {
        .items {
            .item-search {
                &-input {
                    input {
                        width: 300px;
                    }
                }
            }
        }
    }
}

@media (max-width: 620px) {
    .action {
        .items {
            .item-catalog {
                width: 50px;

                &-text {
                    display: none;
                }
            }

            .item-personal {
                &-icon {
                    &:nth-child(2) {
                        display: none;
                    }
                }
            }
        }
    }
}

@media (max-width: 480px) {
    .action {
        .items {
            .item-search {
                &-input {
                    input {
                        width: 216px;
                    }
                }
            }
        }
    }

    .profile {
        display: none !important;
    }
}
</style>
