<template>
    <input :value="modelValue" @input="onInput" class="input" />
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
