<template>
  <div class="app">
    <card-button @click="openPopup">Создать</card-button>
    <card-popup v-model:show="popup">
      <card-form @create="createCard" />
    </card-popup>
    <card-list :cards="cards" @remove="removeCard"/>
  </div>
</template>

<script>
import CardForm from './components/CardForm'
import CardList from './components/CardList'

export default {
  components: {
    CardForm, CardList
  },
  data() {
    return {
      cards: [
        { id: 1, title: 'Card 1', body: 'Body card 1' },
        { id: 2, title: 'Card 2', body: 'Body card 2' },
        { id: 3, title: 'Card 3', body: 'Body card 3' },
      ],
      popup: false,
    }
  },
  methods: {
    createCard(card) {
      this.cards.push(card);
    },
    removeCard(card) {
      this.cards = this.cards.filter(p => p.id !== card.id);
    },
    openPopup() {
      this.popup = true;
    }
  }
}
</script>

<style>
.body {
  margin: 0;
  padding: 0;
  display: flex;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-color: #000000;
  color: #FFFFFF;
  font-weight: normal;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 50px 20px 50px 20px;
}
</style>
