<template>
  <q-card class="card">
    <div class="image-container">
      <img :src="character.image" />
    </div>

    <q-card-section>
      <div class="name">{{ character.name }}</div>
      <div class="info">Raza: {{ character.race }}</div>
      <div class="info">Ki: {{ character.ki }}</div>
    </q-card-section>
  </q-card>
</template>

<script setup>
defineProps({
  character: Object
})
</script>

<style scoped>
.card {
  width: 220px;
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  background: #111;
  color: white;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 25px rgba(255, 140, 0, 0.5);
}

.image-container {
  height: 220px;
  overflow: hidden;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.name {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
}

.info {
  font-size: 12px;
  opacity: 0.8;
}
</style>