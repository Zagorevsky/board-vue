<template>
  <div class="app">
    <card-form @create="createCard" />
    <card-list :cards="cards" />
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
    }
  },
  methods: {
    createCard(card) {
      this.cards.push(card)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
