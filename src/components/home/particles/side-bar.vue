<template>
  <div class="absolute">
    <aside class="list">
      <div>
        <ul class="items" @mouseenter="active = true" @mouseleave="active = false" :class="{ active: active === true }">
          <li v-for="(i, idx) in categories" :key="idx" class="items-item">
            <router-link :to="{ name: 'category', query: { query: i._id || 123 } }">
              <div class="items-item-img">
                <img :src="i.icon" alt="" />
              </div>
              <div class="items-item-text">
                {{ i.name }}
              </div>
            </router-link>
          </li>
        </ul>
      </div>
      <img class="arrow" v-if="active === false"
        src="https://firebasestorage.googleapis.com/v0/b/dropshipping-2afce.appspot.com/o/icons%2Farrow.svg?alt=media&token=cedfac15-83e9-4e8a-9512-f6585e3b10b1&_gl=1*4en2jc*_ga*NDA0ODk5NjE2LjE2OTg2NzUwMzA.*_ga_CW55HF8NVT*MTY5ODcwNzE0OS42LjAuMTY5ODcwNzE0OS42MC4wLjA."
        alt="" />
    </aside>
  </div>
</template>

<script>
import {useItemsStore} from '@/store/categories'

export default {
  data() {
    return {
      active: false,
      categories: [],
    };
  },
  computed: {
    categories() {
      const store = useItemsStore();
      return store.categories;
    }
  },
  watch: {
    categories(val) {
      this.$emit('updateCategories', val)
    }
  }
};

</script>


<style lang="scss" scoped>
a {
  color: #292929 !important;
}

.absolute {
  position: relative;

  .list {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
  }
}

.list {
  position: relative;

  .arrow {
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translate(-50%);
  }
}

.items {
  background: white;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 5px 5px 25px 0px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  height: 365px;
  transition: 0.7s;

  &.active {
    height: 450px;
  }

  &-item {
    display: flex;
    padding: 7.5px;
    flex-direction: row;
    align-items: center;
    border-radius: 10px;
    cursor: pointer;
    user-select: none;

    a {
      flex-direction: row;
      align-items: center;
      display: flex;
    }

    &-img {
      max-width: 24px;
      width: 100%;
      margin-right: 20px;

      img {
        width: 100%;
      }
    }

    &-text {
      font-size: 16px;
      font-family: '88';
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
}
</style>
