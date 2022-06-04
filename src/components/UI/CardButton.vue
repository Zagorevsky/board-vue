<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'card-button'
}
</script>

<style scoped>
.btn {

  background-size: 358px 50px;
  background-color: #000000;
  border: 0;
  margin: 0;
  padding: 0;
  border-radius: 2px;
  font-size: 18px;
  line-height: 22px;
  color: #FFFFFF;
}
</style>
