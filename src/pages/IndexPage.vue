<template>
  <div class="page">

    <div class="header">
      <h1>🔥 Dragon Ball Explorer</h1>
      <p>Busca y descubre tus personajes favoritos</p>
    </div>

    <SearchBar @search="onSearch" />

    <div v-if="loading" class="loading">
      <q-spinner size="50px" color="orange" />
    </div>

    <CharacterList v-else :characters="filtered" />

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import SearchBar from '../components/SearchBar.vue'
import CharacterList from '../components/CharacterList.vue'
import { getCharacters } from '../services/dragonball'

const characters = ref([])
const filtered = ref([])
const loading = ref(true)

const loadData = async () => {
  loading.value = true
  characters.value = await getCharacters()
  filtered.value = characters.value
  loading.value = false
}

const onSearch = (text) => {
  filtered.value = characters.value.filter(c =>
    c.name.toLowerCase().includes(text.toLowerCase())
  )
}

onMounted(loadData)
</script>

<style scoped>
.page {
  min-height: 100vh;
  padding: 20px;
  background: radial-gradient(circle, #1a1a2e, #0f0f1a);
  color: white;
}

.header {
  text-align: center;
  margin-bottom: 20px;
}

.header h1 {
  color: orange;
}

.loading {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}
</style>