<template>
  <div>
    <h1>Heroes</h1>
    <h2>List of heroes :</h2>

    <ul v-if="heroes.length > 0">
      <li v-for="hero in heroes" :key="hero.HeroId">
        <div v-if="editingHeroId !== hero.HeroId">
          <strong>{{ hero.Name }}</strong>
          <ul>
            <li>HP: {{ hero.MaxHP }}</li>
            <li>Dodge: {{ hero.Dodge }}</li>
            <li>Speed: {{ hero.Speed }}</li>
            <li>Crit: {{ hero.CriticChance }}%</li>
            <li>Damage: {{ hero.Damage }}</li>
          </ul>
          <button @click="startEditing(hero)">Modify Hero</button>
        </div>

        <div v-else>
          <strong>{{ hero.Name }} (editing)</strong>
          <ul>
            <li>
              HP: <input type="number" v-model.number="editForm.MaxHP" />
            </li>
            <li>
              Dodge: <input type="number" v-model.number="editForm.Dodge" />
            </li>
            <li>
              Speed: <input type="number" v-model.number="editForm.Speed" />
            </li>
            <li>
              Crit: <input type="number" v-model.number="editForm.CriticChance" />
            </li>
            <li>
              Damage: <input type="number" v-model.number="editForm.Damage" />
            </li>
          </ul>
          <button @click="saveHero(hero.HeroId)">Save</button>
          <button @click="cancelEditing">Cancel</button>
        </div>
      </li>
    </ul>

    <p v-else>Aucun héros trouvé.</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'
import type { Hero } from '../types/Hero'

const heroes = ref<Hero[]>([])

// Pour gérer l’édition
const editingHeroId = ref<number | null>(null)
const editForm = ref<Partial<Hero>>({})

const startEditing = (hero: Hero) => {
  editingHeroId.value = hero.HeroId
  // copie des stats actuelles dans le formulaire
  editForm.value = { ...hero }
}

const cancelEditing = () => {
  editingHeroId.value = null
  editForm.value = {}
}

const saveHero = async (heroId: number) => {
  try {
    // Envoi des nouvelles stats au backend
    const res = await axios.put(`http://localhost:3000/heroes/updateHero/${heroId}`, editForm.value)
    // Met à jour la liste localement
    const index = heroes.value.findIndex(h => h.HeroId === heroId)
    if (index !== -1) {
      heroes.value[index] = { ...heroes.value[index], ...editForm.value } as Hero
    }
    cancelEditing()
  } catch (err) {
    console.error('Erreur lors de la mise à jour du héros :', err)
  }
}

// Récupération des héros au montage
onMounted(async () => {
  try {
    const res = await axios.get<Hero[]>('http://localhost:3000/heroes/getHeroes')
    heroes.value = res.data
  } catch (err) {
    console.error('Erreur lors de la récupération des héros :', err)
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
