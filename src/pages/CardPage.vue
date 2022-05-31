<template>
  <div>Объявлени детально</div>
   <card-item />
</template>

<script>
import CardItem from '@/components/CardItem'

export default {
  components: {
    CardItem
  },
  props: {
    card: {
      type: Object,
      required: true,
    }
  },
}
</script>

<style>

</style>
