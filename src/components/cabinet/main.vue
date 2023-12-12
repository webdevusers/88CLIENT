<template>
    <div class="content">
        <div class="content-title">
            Особисті дані
        </div>
        <div class="content__wrap wrap">
            <aside class="content-aside">
                <side @loadPage="updateCurrentPage" />
            </aside>
            <div class="content-block">
                <content :currentPage="currentPage" />
            </div>
        </div>
    </div>
</template>
  
<script>
import side from './aside/aside.vue'
import content from './main/content.vue'
export default {
    components: {
        side,
        content
    },
    data() {
        return {
            currentPage: 'userInfo'
        }
    },
    methods: {
        updateCurrentPage(page) {
            this.currentPage = page
        }
    }
}
</script>
<style lang="scss" scoped>
.content {
    &__wrap {
        display: grid;
        grid-template-columns: 30% 70%;
        grid-gap: 120px;
    }

    &-aside {
        border-radius: 10px;
        background: var(--gray-white, #FFF);
        box-shadow: 5px 5px 25px 0px rgba(0, 0, 0, 0.20);
        max-height: 405px;
    }

    &-title {
        color: #292929;
        text-align: center;
        font-family: '88';
        font-size: 48px;
        letter-spacing: 1.44px;
    }
}

#components-layout-demo-side .logo {
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
    background: #fff;
}

[data-theme='dark'] .site-layout .site-layout-background {
    background: #141414;
}
</style>
  