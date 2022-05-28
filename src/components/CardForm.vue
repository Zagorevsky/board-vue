<template>
  <form @submit.prevent class="form">
    <h3>Создать объявление</h3>
    <card-input v-model="card.title" type="text"/>
    <card-input v-model="card.body" type="text"/>
    <card-input v-model="card.link" type="url"/>
    <card-button @click="createCard">Сохранить</card-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      card: {
        title: '',
        body: '',
        link:'',
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
        link:'',
      }
    },
  }
}
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
}
</style>
