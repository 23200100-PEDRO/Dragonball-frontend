<template>
  <div class="search-box">
    <q-input
      v-model="text"
      label="🔍 Buscar personaje"
      outlined
      dense
      clearable
      debounce="300"
      @update:model-value="emitSearch"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['search'])
const text = ref('')

const emitSearch = (val) => {
  emit('search', val || '')
}
</script>

<style scoped>
.search-box {
  max-width: 500px;
  margin: 0 auto 20px auto;
}
</style>