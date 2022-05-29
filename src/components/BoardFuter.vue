<template>
  <div class="card-item">
    <card-item :card="card" v-for="card in cards" :key="card.id" @remove="$emit('remove', card)" />
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.card-item {
  display: grid;
  max-width: 880px;
  grid-template-columns: repeat(auto-fill, 282px);
  justify-content: center;
  list-style-type: none;
  column-gap: 17px;
  row-gap: 20px;
  padding: 0;
  margin: 50px auto 0 auto;
}
</style>
