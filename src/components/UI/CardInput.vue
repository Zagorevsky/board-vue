<template>
    <input :value="modelValue" @input="onInput"/>
</template>

<script>
export default {
  name: 'card-input',
  props: {
    modelValue: [String, Number]
  },
  methods: {
    onInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>
</style>
