<template>
  <div class="app">
    <div class="top">
      <card-button @click="openPopup">Создать</card-button>
      <card-select v-model="selectedSort" :options="sortOptions" />
    </div>
    <card-popup v-model:show="popup">
      <card-form @create="createCard" />
    </card-popup>
    <card-list :cards="sortedCards" @remove="removeCard" />
  </div>
</template>

<script>
import {initialCards} from './components/utils/utils'
import CardForm from './components/CardForm'
import CardList from './components/CardList'

export default {
  components: {
    CardForm, CardList
  },
  data() {
    return {
      cards: initialCards,
      popup: false,
      selectedSort: '',
      sortOptions: [
        { value: 'title', name: 'По нзванию' },
        { value: 'body', name: 'По строке' },
      ]
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
    },
  },
  computed: {
    sortedCards() {
      return [...this.cards].sort((card1, card2) => card1[this.selectedSort]?.localeCompare(card2[this.selectedSort]))
    }
  }
}
</script>

<style>
.body {
  margin: 0;
  padding: 0;
  display: grid;
  max-width: 100vw;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-color: #000000;
  color: #FFFFFF;
  font-weight: normal;
  margin: 0;
  padding: 50px 20px 50px 20px;
}

.top {
  display: flex;
  justify-content: space-between;
}
</style>
