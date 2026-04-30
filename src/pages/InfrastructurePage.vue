<script setup>
import { ref, computed, onMounted, nextTick } from 'vue'
import { useScrollAnimation } from '../composables/useScrollAnimation'
import FilterTabs from '../components/ui/FilterTabs.vue'
import InfraCard from '../components/ui/InfraCard.vue'
import { hardwareSkills, infraCategories } from '../data/infrastructure'

const { refresh } = useScrollAnimation()
onMounted(() => nextTick(() => refresh()))

const activeCategory = ref('Semua')
const filtered = computed(() => {
  if (activeCategory.value === 'Semua') return hardwareSkills
  return hardwareSkills.filter(s => s.category === activeCategory.value)
})
</script>
<template>
  <div class="min-h-screen">
    <!-- Hero banner -->
    <div class="pt-28 pb-16 bg-surface-alt transition-colors duration-400">
      <div class="w-full max-w-[1200px] mx-auto px-6 md:px-4 text-center">
        <span class="font-mono text-xs font-medium tracking-widest uppercase text-accent scroll-hidden">// IT infrastructure</span>
        <h1 class="font-display font-bold mt-3 tracking-tight text-text-primary scroll-hidden" style="font-size: clamp(2rem, 5vw, 3rem);">IT Infrastructure & Hardware</h1>
        <p class="mt-4 text-base text-text-secondary max-w-lg mx-auto text-center scroll-hidden lg:text-lg">Pengalaman di luar coding — dari merakit PC, troubleshooting hardware, hingga konfigurasi jaringan.</p>
      </div>
    </div>
    <!-- Content -->
    <div class="py-16 bg-surface transition-colors duration-400">
      <div class="w-full max-w-[1200px] mx-auto px-6 md:px-4">
        <FilterTabs :categories="infraCategories" :active="activeCategory" @select="activeCategory = $event"/>
        <TransitionGroup name="project-list" tag="div" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          <InfraCard v-for="skill in filtered" :key="skill.id" :skill="skill"/>
        </TransitionGroup>
      </div>
    </div>
  </div>
</template>
