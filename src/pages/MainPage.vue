<template>
  <div>
    <card-input class="input" placeholder="Поиск" v-model="search" type="text" />
    <div class="top">
      <card-button @click="openPopup">Создать</card-button>
      <card-select v-model="selectedSort" :options="sortOptions" />
    </div>
    <card-popup v-model:show="popup">
      <card-form @create="createCard" />
    </card-popup>
    <card-list :cards="searchSortedCards" @remove="removeCard" />
  </div>
</template>

<script>
import { initialCards } from '@/components/utils/utils'
import CardForm from '@/components/CardForm'
import CardList from '@/components/CardList'

export default {
  components: {
    CardForm, CardList
  },
  data() {
    return {
      cards: initialCards,
      popup: false,
      selectedSort: '',
      search: '',
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
      return [...this.cards].sort((card1, card2) =>
        card1[this.selectedSort]?.localeCompare(card2[this.selectedSort]))
    },
    searchSortedCards() {
      return this.sortedCards.filter(card =>
        card.title.toLowerCase().includes(this.search.toLowerCase()) ||
        card.body.toLowerCase().includes(this.search.toLowerCase())
      )
    }
  }
}
</script>

<style>

.top {
  display: flex;
  justify-content: space-between;
  max-width: 880px;
}

.input {
  border: 0;
  margin: 20px 0 20px 0;
  outline: none;
  color: rgba(160, 160, 160, 1);
  font-size: 13px;
  line-height: 17px;
  width: 100%;
}
</style>
