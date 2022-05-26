<template>
  <div class="popup" v-if="show" @click="closePopup">
    <div class="popup__content" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card-popup',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closePopup() {
      this.$emit('update:show', false)
    }
  }
}
</script>

<style scoped>

.popup {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  background-color: rgba(0, 0, 0, .5);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  color: #000000;
  transition: opacity 0.5s, visibility 0s linear 0.5s;
  z-index: 2;
  padding: 0;
  margin: 0;
}

.popup__content {
  margin: auto;
  background: white;
  border-radius: 10px;
  min-height: 50px;
  min-width: 300px;
  padding: 20px;
}

</style>
