<template>
  <section class="card">
    <card-button @click="$emit('remove', card)">Удалить</card-button>
    <div><img :src="card.link" class="img"
    @click="$router.push(`/card/${card.id}`)"

    /></div>
    <div>{{ card.title }}</div>
    <div>{{ card.body }}</div>
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
  max-width: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  position: relative;
}

.img {
  max-width: 100%;
  width: 246px;
  height: 289px;
}
</style>
