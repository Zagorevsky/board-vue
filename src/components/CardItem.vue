<template>
  <section class="card">
    <card-button-img @click="popupgDelitCard =true"></card-button-img>
    <card-popup v-model:show="popupgDelitCard">
      <card-button @click="$emit('remove', card)">Удалить</card-button>
    </card-popup>
    <div class="img"><img :src="card.link" class="img" @click="popupgImgBig = true" /></div>
    <div class="card-block-txt">
      <div class="card-txt">{{ card.title }}</div>
      <div class="card-txt">{{ card.body }}</div>
    </div>
    <card-popup v-model:show="popupgImgBig">
      <div><img :src="card.link" class="img-big" /></div>
      <div>{{ card.title }}</div>
      <div>{{ card.body }}</div>
    </card-popup>
  </section>
</template>
<script>
export default {
  props: {
    card: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      popupgImgBig: false,
      popupgDelitCard: false,
    }
  },
}
</script>

<style scoped>
.card {
  max-width: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  position: relative;
}

.card-block-txt {
  font-size: 24px;
  line-height: 29px;
  font-weight: 900;
  padding: 0;
  margin: 0;
  color: #000000;
  background-color: #FFFFFF;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.card-txt {
  margin: 10px 0 10px 0;
  padding: 0;
  width: 100%;
}

.img {
  max-width: 100%;
  width: 100%;
  height: 282px;
  background-size: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.img-big {
  width: 75vw;
  height: 75vh;
}
</style>
