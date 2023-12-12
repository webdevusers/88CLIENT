<script setup>
import TheHeader from '../../components/base/TheHeader.vue';
import TheAction from '../../components/base/TheAction.vue';
import TheFooter from '../../components/base/TheFooter.vue';
</script>
<template>
    <div class="container-error">
        <TheHeader />
        <TheAction />
        <div class="error">
            <div class="error__wrap wrap">
                <div class="error-title">
                    <p>4</p><span>0</span>
                    <p>4</p>
                </div>
                <div class="error-desc">
                    На жаль, ця сторінка недоступна
                </div>
                <router-link to="/" class="error-button">
                    Повернутись на головну
                </router-link>
            </div>
        </div>
        <TheFooter />
    </div>
</template>
<style lang="scss">
.container-error {
    .action {
        margin-bottom: 0 !important;
    }
}

.error {
    background: url("https://firebasestorage.googleapis.com/v0/b/eshop-5be01.appspot.com/o/bbb-1.webp?alt=media&token=d969f4d9-52dc-4090-b062-f9454f776a78");
    padding-bottom: 64px;

    &-title {
        display: flex;
        justify-content: center;
        color: white;
        font-family: '88';
        font-size: 240px;
        letter-spacing: 24px;
        margin-bottom: 40px;

        span {
            color: #EFCA00;
        }
    }

    &-desc {
        text-align: center;
        color: var(--gray-white, #FFF);
        font-family: '88';
        font-size: 48px;
        font-style: normal;
        font-weight: 500;
        line-height: 140%;
        letter-spacing: 2.4px;
        margin-bottom: 40px;
    }

    &-button {
        padding: 16px 48px;
        border-radius: 10px;
        background: #EFCA00;
        color: white;
        color: var(--gray-white, #FFF);
        font-family: '88';
        font-size: 20px;
        font-weight: 500;
        letter-spacing: 1px;
        display: flex;
        max-width: 340px;
        margin: 0 auto;
    }
}
@media (max-width: 1024px) {
    .error {
        &-title {
            font-size: 180px;
        }
    }
}
@media (max-width: 540px) {
    .error {
        &-desc {
            font-size: 32px;
        }
    }
}
</style>