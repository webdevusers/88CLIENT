<template>
  <div class="items">
    <div class="items__wrap wrap">
      <template v-for="(item, index) in categories" :key="index">
        <router-link :to="item._id" class="items-item" :class="getItemSize(index)">
          <div class="items-item-title">
            {{ item.name }}
          </div>
          <div class="items-item-img">
            <img :src="item.img" :alt="item.img" />
          </div>
        </router-link>
      </template>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      categories: []
    }
  },
  methods: {
    getItemSize(index) {
      if (index < 2) {
        return 'big'
      } else if (index < 5) {
        return 'medium'
      } else {
        return 'small'
      }
    }
  },
  created() {
    axios.get('http://88.cx.ua:3000/item/all').then((response) => this.categories = response.data)
  }
}
</script>

<style lang="scss" scoped>
.items {
  margin-bottom: 64px;

  &__wrap {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-row-gap: 40px;
    grid-column-gap: 20px;

    @media (max-width: 1024px) {
      grid-row-gap: 20px;
    }

    @media (max-width: 743px) {
      grid-row-gap: 10px;
      grid-column-gap: 10px;
    }
  }

  &-item {
    color: #292929;
    text-decoration: none;

    user-select: none;
    border-radius: 10px;
    background: #fff;

    box-shadow: 5px 5px 25px 0px rgba(0, 0, 0, 0.2);

    @media (max-width: 440px) {
      text-align: center;
    }

    &.big {
      grid-column: span 3;
      display: flex;
      flex-direction: row;
      align-items: center;
      font-size: 2rem;
      font-family: '88';
      padding: 24px;

      @media (max-width: 1024px) {
        grid-column: span 6;
        justify-content: space-evenly;
        min-height: 296px;
      }

      @media (max-width: 620px) {
        min-height: 220px;
        font-size: 24px;

        .items-item-img {
          max-width: 145px !important;
        }
      }

      @media (max-width: 440px) {
        flex-direction: column !important;
        font-size: 20px;

        .items-item-img {
          max-width: 130px !important;
        }
      }

      .items-item-text {
        max-width: 300px;
      }

      .items-item-img {
        max-width: 240px;
        width: 100%;

        img {
          width: 100%;
        }
      }
    }

    &.medium {
      padding: 16px;
      grid-column: span 2;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      font-size: 1.2rem;
      font-family: '88';
      padding: 24px;

      @media (max-width: 1024px) {
        flex-direction: column;
      }

      @media (max-width: 620px) {
        font-size: 16px;

        .items-item-img {
          max-width: 85px !important;
        }

        .items-item-title {
          margin-bottom: 15px;
        }
      }

      @media (max-width: 440px) {
        grid-column: span 3;
        font-size: 14px;
        padding: 15px 0px !important;

        .items-item-img {
          max-width: 64px !important;
        }
      }

      .items-item-img {
        max-width: 150px;
        width: 100%;

        img {
          width: 100%;
        }
      }
    }

    &.small {
      padding: 50px 40px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      font-size: 1rem;
      font-family: '88';
      padding: 24px;

      @media (max-width: 440px) {
        grid-column: span 3 !important;
        font-size: 14px;
        padding: 15px 5px !important;

        .items-item-img {
          max-width: 64px !important;
        }
      }

      .items-item-img {
        padding-top: 20px;
        max-width: 110px;
        width: 100%;

        img {
          width: 100%;
        }
      }

      @media (max-width: 1024px) {
        grid-column: span 2;
      }
    }
  }
}
</style>
