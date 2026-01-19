<template>
  <div>
    <h1>Heroes</h1>
    <h2>List of heroes :</h2>

    <ul v-if="store.heroes.length > 0">
      <HeroItem
        v-for="hero in store.heroes"
        :key="hero.HeroId"
        :hero="hero"
      />
    </ul>

    <p v-else>Aucun héros trouvé.</p>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import HeroItem from '@/components/hero.vue'
import { useHeroesStore } from '@/services/HeroStore'

const store = useHeroesStore()

onMounted(() => {
  store.fetchHeroes() // récupère les héros depuis le backend
})
</script>

<style scoped>
input {
  width: 60px;
}
button {
  margin-right: 5px;
  margin-top: 5px;
}
</style>
