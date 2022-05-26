<template>
  <select v-model="modeleValue" @change="changeOption">
    <option disabled value="">Выбирите из списка</option>
    <option v-for="option in options" :key="option.value" :value="option.value">{{ option.name }}</option>
  </select>
</template>

<script>

export default {
  name: 'card-select',
  props: {
    modelValue: {
      type: String
    },
    options: {
      type: Array,
      default: () => [],
    }
  },
  methods: {
    changeOption(event) {
      this.$emit('update:moduleValue', event)
    },
  }
}
</script>

<style scoped>
</style>
