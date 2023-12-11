<template>
  <header class="header">
    <div class="header__wrap wrap">
      <router-link to="/" class="header-logo">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/dropshipping-2afce.appspot.com/o/icons%2Flogo.svg?alt=media&token=4f7b2228-5c40-4437-935e-2435c48deacd&_gl=1*1ytnyoy*_ga*NDA0ODk5NjE2LjE2OTg2NzUwMzA.*_ga_CW55HF8NVT*MTY5ODY3NTAzMC4xLjEuMTY5ODY3NTU5OC4xMS4wLjA."
          alt=""
        />
      </router-link>
      <div class="header-links" id="hideMobile">
        <router-link :to="item.link" v-for="(item, idx) in links" :key="idx">{{
          item.name
        }}</router-link>
      </div>
      <div class="header-contact" :class="{ active: contactDropdown === true }" style="z-index: 10001;">
        <div
          class="header-contact-block"
          id="hideMobile"
          @mouseenter="contactDropdown = true"
          @mouseleave="contactDropdown = false"
        >
          <div class="header-contact-block-img">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/dropshipping-2afce.appspot.com/o/icons%2Fphone.svg?alt=media&token=3157ef82-965d-4126-8774-74c80f10fa75&_gl=1*tafkef*_ga*NDA0ODk5NjE2LjE2OTg2NzUwMzA.*_ga_CW55HF8NVT*MTY5ODcwNzE0OS42LjEuMTY5ODcwNzE2MS40OC4wLjA."
              alt=""
            />
          </div>
          <div class="header-contact-block-text">Зв'язатися з нами</div>
          <div class="header-contact-block-img">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/dropshipping-2afce.appspot.com/o/icons%2Farrow.svg?alt=media&token=cedfac15-83e9-4e8a-9512-f6585e3b10b1&_gl=1*4en2jc*_ga*NDA0ODk5NjE2LjE2OTg2NzUwMzA.*_ga_CW55HF8NVT*MTY5ODcwNzE0OS42LjAuMTY5ODcwNzE0OS42MC4wLjA."
              alt=""
            />
          </div>
        </div>
        <div class="header-contact-img" id="showMobile" @click="contactDropdown = true">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/dropshipping-2afce.appspot.com/o/icons%2Ftheme-phone.svg?alt=media&token=52908b00-bcaa-41d5-891b-bacec5df26d2&_gl=1*1pydb1p*_ga*NDA0ODk5NjE2LjE2OTg2NzUwMzA.*_ga_CW55HF8NVT*MTY5ODcwOTI4Ni43LjEuMTY5ODcwOTI5Mi41NC4wLjA."
            alt=""
          />
        </div>
        <ul
          class="header-contact-list"
          v-if="contactDropdown === true"
          @mouseenter="contactDropdown = true"
          @mouseleave="contactDropdown = false"
        >
          <img
            @click="contactDropdown = false"
            src="https://firebasestorage.googleapis.com/v0/b/dropshipping-2afce.appspot.com/o/icons%2Fclose.svg?alt=media&token=ed2a79ce-eeca-4259-998f-f3a1f0c77a81&_gl=1*1hi8n3w*_ga*NDA0ODk5NjE2LjE2OTg2NzUwMzA.*_ga_CW55HF8NVT*MTY5ODc3MTYzNi44LjEuMTY5ODc3MTY0Ny40OS4wLjA."
            id="showMobile"
            alt=""
          />
          <p class="contact-text" id="showMobile">Контакти</p>
          <li class="header-contact-list__item" v-for="(item, idx) in contacts" :key="idx">
            <a :href="item.link">
              <div class="header-contact-list__item-img">
                <img :src="item.src" alt="" />
              </div>
              <div class="header-contact-list__item-text">
                <p>{{ item.name }}</p>
              </div>
            </a>
          </li>
          <div class="showedMobile" style="padding-top: 20px">
            <button
              class="contact-button"
              @click="(modalContact = !modalContact), (contactDropdown = false)"
            >
              Зворотній дзвінок
            </button>
          </div>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { name: 'Головна', link: '/' },
        { name: 'Бонуси', link: '/discounts' },
        { name: 'О нас', link: '/about' },
        { name: 'Умови', link: '/conditions' },
        { name: 'Допомога', link: '/help' }
      ],
      contactDropdown: false,
      contacts: [
        {
          name: '+380 (12) 345 6789',
          link: 'tel:',
          src: 'https://firebasestorage.googleapis.com/v0/b/dropshipping-2afce.appspot.com/o/icons%2Fphone.svg?alt=media&token=3157ef82-965d-4126-8774-74c80f10fa75&_gl=1*d3k196*_ga*NDA0ODk5NjE2LjE2OTg2NzUwMzA.*_ga_CW55HF8NVT*MTY5ODY3NTAzMC4xLjEuMTY5ODY3NjI2My40Ny4wLjA.'
        },
        {
          name: 'Telegram',
          link: '#',
          src: 'https://firebasestorage.googleapis.com/v0/b/dropshipping-2afce.appspot.com/o/icons%2FTelegramIcon.svg?alt=media&token=d3bab36b-c6c3-4e79-b940-36d021dbc6d8&_gl=1*deemtk*_ga*NDA0ODk5NjE2LjE2OTg2NzUwMzA.*_ga_CW55HF8NVT*MTY5ODcwNDM1OC41LjEuMTY5ODcwNDU0Mi42MC4wLjA.'
        },
        {
          name: 'Whatsapp',
          link: '#',
          src: 'https://firebasestorage.googleapis.com/v0/b/dropshipping-2afce.appspot.com/o/icons%2FWhatsappIcon.svg?alt=media&token=d05f1676-89c5-4582-9e68-e901a6fd0782&_gl=1*k0oc4z*_ga*NDA0ODk5NjE2LjE2OTg2NzUwMzA.*_ga_CW55HF8NVT*MTY5ODcwNDM1OC41LjEuMTY5ODcwNDU1My40OS4wLjA.'
        },
        {
          name: 'Instagram',
          link: '#',
          src: 'https://firebasestorage.googleapis.com/v0/b/dropshipping-2afce.appspot.com/o/icons%2FInstagramIcon.svg?alt=media&token=d51bf33b-e238-4c66-a245-5cf804250133&_gl=1*1gt0bac*_ga*NDA0ODk5NjE2LjE2OTg2NzUwMzA.*_ga_CW55HF8NVT*MTY5ODcwNDM1OC41LjEuMTY5ODcwNDU2My4zOS4wLjA.'
        },
        {
          name: 'Viber',
          link: '#',
          src: 'https://firebasestorage.googleapis.com/v0/b/dropshipping-2afce.appspot.com/o/icons%2FViberIcon.svg?alt=media&token=4e49fcf3-44ea-4254-acb4-ae38d84cb860&_gl=1*1nv42sz*_ga*NDA0ODk5NjE2LjE2OTg2NzUwMzA.*_ga_CW55HF8NVT*MTY5ODcwNDM1OC41LjEuMTY5ODcwNDU3OC4yNC4wLjA.'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
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
.showedMobile {
  display: none;
  padding-top: 20px;
  @media (max-width: 968px) {
    padding-top: 20px;
    display: block;
  }
}
.contact-text {
  position: absolute;
  left: 15px;
  padding-top: 5px;
  font-size: 20px;
  font-family: '88';
  max-width: 100px;
}
.header {
  &__wrap {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-top: 15px;
    padding-bottom: 15px;
    position: relative;
  }

  &-links {
    margin-right: -40px;

    a {
      text-decoration: none;
      color: #292929;
      font-size: 16px;
      font-family: '88';
      margin-right: 50px;

      &:last-child {
        margin-right: 0;
      }

      &:hover {
        font-weight: 600;
      }
    }
  }

  &-contact {
    padding: 20px 16px;
    position: relative;
    z-index: 10001;

    &.active {
      background: #fff;
      border-radius: 10px 10px 0 0;
    }

    &-block {
      display: flex;
      flex-direction: row;
      align-items: center;
      user-select: none;
      cursor: pointer;
      width: 197px;

      &-text {
        padding-bottom: 5px;
        margin: 0 12px;
        font-family: '88';
        font-size: 16px;
        font-weight: 600;
      }
    }

    &-list {
      position: absolute;
      background: #fff;
      width: 229px;
      padding-left: 16px;
      z-index: 10002;
      left: 0;
      border-radius: 0 0 10px 10px;
      padding-top: 50px;

      &__item {
        list-style: none;
        padding: 10px 0;
        a {
          display: flex;
          flex-direction: row;
          align-items: center;
          text-decoration: none;
          font-family: '88';
          color: #292929;
          position: relative;
        }

        &::before {
          top: -7px;
          left: 45px;
          display: block;
          content: '';
          background: #dcdcdc;
          position: relative;
          max-width: 45%;
          height: 1px;
        }

        &-text {
          margin-left: 20px;
        }
      }
    }
  }
}

@media (max-width: 968px) {
  .header {
    &-logo {
      max-width: 55px;

      img {
        width: 100%;
      }
    }

    &-contact {
      z-index: 123123;
      &.active {
        background: transparent;
      }

      &-list {
        position: fixed;
        right: 0;
        margin-left: auto;
        height: 100%;
        top: 0;
        z-index: 10001 !important;
        background: #fff;
        animation: showed 0.7s;

        #showMobile {
          position: absolute;
          right: 10px;
          top: 10px;
        }

        &__item {
          &::after {
            top: 9px;
            left: 45px;
            display: block;
            content: '';
            background: #dcdcdc;
            position: relative;
            max-width: 45%;
            height: 1px;
          }

          &::before {
            top: -7px;
            left: 45px;
            display: none;
            content: '';
            background: #dcdcdc;
            position: relative;
            max-width: 45%;
            height: 1px;
          }
        }
      }
    }
  }
}

@keyframes showed {
  from {
    right: -270px;
  }

  to {
    right: 0;
  }
}
</style>
