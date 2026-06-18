<template>
  <div class="page">

    <!-- HEADER -->
    <div class="header">
      <h1>🔥 Dragon Ball Explorer</h1>
      <p>Busca y descubre tus personajes favoritos</p>
    </div>

    <!-- SEARCH -->
    <SearchBar @search="onSearch" />

    <!-- LOADING -->
    <div v-if="loading" class="loading">
      <q-spinner size="50px" color="orange" />
    </div>

    <!-- EMPTY STATE -->
    <div v-else-if="filtered.length === 0" class="empty">
      😢 No se encontraron personajes
    </div>

    <!-- INFO -->
    <div v-else class="info">
      Mostrando {{ filtered.length }} personajes
    </div>

    <!-- LIST -->
    <CharacterList
      v-if="!loading && filtered.length > 0"
      :characters="filtered"
    />

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// ✅ IMPORTS PRO QUASAR (IMPORTANTE PARA VERCEL)
import SearchBar from '../components/SearchBar.vue'
import CharacterList from '../components/CharacterList.vue'
import { getCharacters } from '../services/dragonball'
const characters = ref([])
const filtered = ref([])
const loading = ref(true)

/* =========================
   LOAD DATA
========================= */
const loadData = async () => {
  loading.value = true

  try {
    const data = await getCharacters()

    characters.value = Array.isArray(data) ? data : []
    filtered.value = characters.value

  } catch (error) {
    console.error('Error cargando personajes:', error)
    characters.value = []
    filtered.value = []
  } finally {
    loading.value = false
  }
}

/* =========================
   SEARCH SAFE (PRO)
========================= */
const onSearch = (text) => {
  const query = (text || '').trim().toLowerCase()

  if (!query) {
    filtered.value = characters.value
    return
  }

  filtered.value = characters.value.filter(c =>
    (c.name || '').toLowerCase().includes(query)
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

/* HEADER */
.header {
  text-align: center;
  margin-bottom: 20px;
}

.header h1 {
  color: orange;
  font-size: 36px;
}

/* LOADING */
.loading {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}

/* EMPTY STATE */
.empty {
  text-align: center;
  margin-top: 40px;
  opacity: 0.7;
  font-size: 18px;
}

/* INFO TEXT */
.info {
  text-align: center;
  margin-bottom: 10px;
  opacity: 0.8;
  font-size: 14px;
}
</style>