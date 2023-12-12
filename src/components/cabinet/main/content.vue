<script setup>
import userInfo from './particles/userInfo.vue'
import favorites from './particles/favorites.vue'
import orders from './particles/orders.vue'
import delivery from './particles/delivery.vue'
import visited from './particles/visited.vue'
import reviews from './particles/reviews.vue'

import { computed } from 'vue'

const props = defineProps({
    currentPage: String
})

const getContentComponent = computed(() => {
    if (props.currentPage === 'userInfo') {
        return userInfo
    } else if (props.currentPage === 'favorites') {
        return favorites
    } else if (props.currentPage === 'orders') {
        return orders
    } else if (props.currentPage === 'delivery') {
        return delivery
    } else if (props.currentPage === 'visited') {
        return visited
    } else if (props.currentPage === 'reviews') {
        return reviews
    } else {
        return null
    }
})
</script>

<template>
    <div class="content-block">
        <component :is="getContentComponent" />
    </div>
    <template v-if="!getContentComponent">
        Ди нахуй
    </template>
</template>