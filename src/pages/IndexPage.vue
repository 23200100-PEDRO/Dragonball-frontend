<template>
  <div class="page">

    <div class="header">
      <h1>🔥 Dragon Ball Explorer</h1>
      <p>Busca y descubre tus personajes favoritos</p>
    </div>

    <SearchBar @search="onSearch" />

    <!-- LOADING -->
    <div v-if="loading" class="loading">
      <q-spinner size="50px" color="orange" />
    </div>

    <!-- EMPTY STATE -->
    <div v-else-if="filtered.length === 0" class="empty">
      No se encontraron personajes 😢
    </div>

    <!-- LIST -->
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
const loading = ref(false)

const loadData = async () => {
  loading.value = true

  try {
    const data = await getCharacters()

    characters.value = data || []
    filtered.value = data || []

  } catch (error) {
    console.error('Error cargando personajes:', error)
    characters.value = []
    filtered.value = []
  } finally {
    loading.value = false
  }
}

const onSearch = (text) => {
  const query = text.trim().toLowerCase()

  if (!query) {
    filtered.value = characters.value
    return
  }

  filtered.value = characters.value.filter(c =>
    c.name.toLowerCase().includes(query)
  )
}

onMounted(loadData)
</script>

<style scoped>
.page {
  min-height: 100vh;
  padding: 20px;
  background: radial-gradient(circle at top, #1a1a2e, #000000);
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

/* NUEVO: empty state PRO */
.empty {
  text-align: center;
  margin-top: 40px;
  opacity: 0.7;
  font-size: 18px;
}
</style>