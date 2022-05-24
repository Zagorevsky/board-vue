<template>
  <div>
    <card-item class="card" :card="card" v-for="card in cards" :key="card.id" />
  </div>
</template>

<script>
import CardItem from './CardItem'

export default {
  components: {
    CardItem
  },
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
