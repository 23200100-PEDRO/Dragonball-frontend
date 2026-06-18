<template>
  <div class="search-box">
    <q-input
      v-model="text"
      label="🔍 Buscar personaje"
      outlined
      dense
      debounce="500"
      @update:model-value="onSearch"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['search'])
const text = ref('')

const onSearch = (val) => {
  emit('search', val || '')
}
</script>

<style scoped>
.search-box {
  max-width: 500px;
  margin: 0 auto 25px auto;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  border-radius: 12px;
  padding: 8px;
  border: 1px solid rgba(255, 165, 0, 0.3);
}
</style>