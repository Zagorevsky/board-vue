<template>
  <section class="card">
    <card-button-img @click="$emit('remove', card)">Удалить</card-button-img>
    <div><img :src="card.link" class="img" @click="popup=true" /></div>
    <div>{{ card.title }}</div>
    <div>{{ card.body }}</div>
    <card-popup v-model:show="popup">
      <div><img :src="card.link" class="img-big" /></div>
      <div>{{ card.title }}</div>
      <div>{{ card.body }}</div>
    </card-popup>
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
data() {
    return {
      popup: false,
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
  width: 100%;
  height: 282px;
  background-size: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.img-big {
  width: 75vw;
  height: 75vh;
}
</style>
