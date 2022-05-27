<template>
  <section class="card">
    <div>
      <div><img :src="card.link" class="img"/></div>
      <div>Название: {{ card.title }}</div>
      <div>Описание: {{ card.body }}</div>
    </div>
    <div class="button">
      <card-button @click="$emit('remove', card)">Удалить</card-button>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    card: {
      type: Object,
      required: true,
    }
  },

}
</script>

<style scoped>
.card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  margin-top: 20px;
  border: 1px solid;
}
.img {
  max-width: 100%;
  width: 246px;
  height: 289px;
}
</style>
