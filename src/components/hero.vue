<template>
  <li>
    <div v-if="editingHeroId !== hero.HeroId">
      <strong>{{ hero.Name }}</strong>
      <ul>
        <li>HP: {{ hero.MaxHP }}</li>
        <li>Dodge: {{ hero.Dodge }}</li>
        <li>Speed: {{ hero.Speed }}</li>
        <li>Crit: {{ hero.CriticChance }}%</li>
        <li>Damage: {{ hero.Damage }}</li>
      </ul>
      <button @click="$emit('edit', hero)">Modify Hero</button>
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
      <button @click="$emit('save', hero.HeroId, editForm)">Save</button>
      <button @click="$emit('cancel')">Cancel</button>
    </div>
  </li>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import type { Hero } from '@/types/Hero'

const props = defineProps<{
  hero: Hero
  editingHeroId: number | null
}>()

// Form local pour modifier
const editForm = ref<Partial<Hero>>({})

// mettre à jour le form quand on passe en mode edit
watch(
  () => props.editingHeroId,
  () => {
    if (props.editingHeroId === props.hero.HeroId) {
      editForm.value = { ...props.hero }
    }
  },
  { immediate: true }
)
</script>
