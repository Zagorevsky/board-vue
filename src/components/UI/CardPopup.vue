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
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  position: fixed;
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
