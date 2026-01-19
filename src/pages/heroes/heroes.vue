<template>
  <div>
    <h1>Heroes</h1>
    <h2>List of heroes :</h2>

    <ul v-if="store.heroes.length > 0">
      <HeroCard
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
import HeroCard from '@/components/hero.vue'
import { useHeroesStore } from '@/services/HeroStore'

const store = useHeroesStore()

onMounted(async () => {
  await store.fetchHeroes()

  if (store.heroes.length === 0) {
    store.heroes = [
      { HeroId: 1, Name: 'Warrior', MaxHP: 100, Dodge: 5, Protection: 10, Speed: 10, AccuracyModifier: 0, CriticChance: 2, Damage: 15, ResListId: 1, MiscellaneousId: 1 },
      { HeroId: 2, Name: 'Ranger', MaxHP: 80, Dodge: 15, Protection: 5, Speed: 14, AccuracyModifier: 5, CriticChance: 10, Damage: 12, ResListId: 2, MiscellaneousId: 2 },
      { HeroId: 3, Name: 'Mage', MaxHP: 60, Dodge: 5, Protection: 0, Speed: 9, AccuracyModifier: 10, CriticChance: 20, Damage: 25, ResListId: 3, MiscellaneousId: 3 }
    ]
  }
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
