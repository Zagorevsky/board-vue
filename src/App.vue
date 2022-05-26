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
import CardForm from './components/CardForm'
import CardList from './components/CardList'

export default {
  components: {
    CardForm, CardList
  },
  data() {
    return {
      cards: [
        { id: 1, title: 'Card 1', body: '3 Body card 3' },
        { id: 2, title: 'ard 2', body: 'C Body card 2' },
        { id: 3, title: 'Card 3', body: 'A Body card 1' },
      ],
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

.top {
  display: flex;
  justify-content: space-between;
}
</style>
