<template>
  <section class="card">
    <div>
      <div>Название: {{ card.title }}</div>
      <div>Описание: {{ card.body }}</div>
    </div>
    <div class="button">
      <card-button>Удалить</card-button>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    card: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>
.card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  margin-top: 20px;
  border: 1px solid;

}
</style>
