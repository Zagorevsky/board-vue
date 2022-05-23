<template>
  <div class="card"
  v-for="card in cards" :key="card.id" >
    <div>Название{{ card.title }}</div>
    <div>Название{{ card.body }}</div>
  </div>
</template>

<script>
export default {
  props: {
    cards: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style scoped>
</style>
