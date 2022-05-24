<template>
  <form @submit.prevent>
    <h3>Создать объявление</h3>
    <input v-model="card.title" type="text">
    <input v-model="card.body" type="text">
    <card-button @click="createCard">Создать</card-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      card: {
        title: '',
        bodt: '',
      }
    }
  },
  methods: {
    createCard() {
      this.card.id = Date.now();
      this.$emit('create', this.card)
      this.card = {
        title: '',
        body: '',
      }
    },
  }
}
</script>

<style scoped>
</style>
