<template>
    <TheHeader />
    <TheAction />
    <div class="content">
        <div class="content__wrap wrap">
            <CategoryItems />
        </div>
    </div>
    <TheFooter />
</template>

<script setup>
import TheHeader from '../components/base/TheHeader.vue'
import TheAction from '../components/base/TheAction.vue'
import TheFooter from '../components/base/TheFooter.vue'
import CategoryItems from '../components/home/particles/category-items.vue'
</script>

<style lang="scss" scoped>

</style>