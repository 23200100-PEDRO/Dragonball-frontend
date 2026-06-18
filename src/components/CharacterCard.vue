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

/* SOLO UN HOVER (CORRECTO) */
.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(255, 165, 0, 0.4);
}

.image-container {
  height: 260px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
  padding: 10px;
}

/* FIX PRINCIPAL (NO PERSONAJES CORTADOS) */
img {
  width: 100%;
  height: 100%;
  object-fit: contain;
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