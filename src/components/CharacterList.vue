<template>
  <div class="grid">
    <CharacterCard
      v-for="c in characters"
      :key="c.id"
      :character="c"
    />
  </div>
</template>

<script setup>
import CharacterCard from './CharacterCard.vue'

defineProps({
  characters: Array
})
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  justify-items: center;
}
</style>