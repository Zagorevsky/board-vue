<template>
    <button class="btn-img"></button>
</template>

<script>
export default {
  name: 'card-button-img'
}
</script>

<style scoped>

.btn-img {
  width: 18px;
  height: 19px;
  background-image: url(@/assets/trash.svg);
  background-color: transparent;
  border: 0;
  margin: 0;
  padding: 0;
  position: absolute;
  right: 15px;
  top: 18px;
  z-index: 1;
}
</style>
