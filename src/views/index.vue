<template>
  <div class="idx">
    <PageContent @updateCategories="update"/>
  </div>
</template>
<script>
export default {
  methods: {
    update(val) {
      console.log(val)
      this.$emit('updateCategories', val)
    }
  }
}
</script>
<script setup>
import PageContent from '../components/home/page-content.vue'
</script>

<style lang="scss" scoped></style>
