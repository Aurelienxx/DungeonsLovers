<template>
  <div>
    <h1>Heroes</h1>
    <h2>List of heroes :</h2>

    <ul v-if="heroes.length > 0">
      <HeroItem
        v-for="hero in heroes"
        :key="hero.HeroId"
        :hero="hero"
        :editingHeroId="editingHeroId"
        @edit="startEditing"
        @save="saveHero"
        @cancel="cancelEditing"
      />
    </ul>

    <p v-else>Aucun héros trouvé.</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'
import hero from '@/components/hero.vue'
import type { Hero } from '@/types/Hero'

const heroes = ref<Hero[]>([])
const editingHeroId = ref<number | null>(null)

const startEditing = (hero: Hero) => {
  editingHeroId.value = hero.HeroId
}

const cancelEditing = () => {
  editingHeroId.value = null
}

const saveHero = async (heroId: number, editForm: Partial<Hero>) => {
  try {
    const index = heroes.value.findIndex(h => h.HeroId === heroId)
    if (index !== -1) {
      heroes.value[index] = { ...heroes.value[index], ...editForm } as Hero
    }
    cancelEditing()
  } catch (err) {
    console.error(err)
  }
}

onMounted(async () => {
  heroes.value = [
    { 
      HeroId: 1, 
      Name: 'Warrior', 
      MaxHP: 100, 
      Dodge: 5, 
      Protection: 10,
      Speed: 10, 
      AccuracyModifier: 0,
      CriticChance: 2, 
      Damage: 15,
      ResListId: 1,
      MiscellaneousId: 1
    },
    { 
      HeroId: 2, 
      Name: 'Ranger', 
      MaxHP: 80, 
      Dodge: 15, 
      Protection: 5,
      Speed: 14, 
      AccuracyModifier: 5,
      CriticChance: 10, 
      Damage: 12,
      ResListId: 2,
      MiscellaneousId: 2
    },
    { 
      HeroId: 3, 
      Name: 'Mage', 
      MaxHP: 60, 
      Dodge: 5, 
      Protection: 0,
      Speed: 9, 
      AccuracyModifier: 10,
      CriticChance: 20, 
      Damage: 25,
      ResListId: 3,
      MiscellaneousId: 3
    }
  ]
})
</script>
