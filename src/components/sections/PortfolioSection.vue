<script setup>
import { ref, computed } from 'vue'
import SectionHeading from '../ui/SectionHeading.vue'
import FilterTabs from '../ui/FilterTabs.vue'
import ProjectCard from '../ui/ProjectCard.vue'
import { projects, categories } from '../../data/projects'
const activeCategory = ref('Semua')
const filteredProjects = computed(() => activeCategory.value === 'Semua' ? projects : projects.filter(p => p.category === activeCategory.value))
</script>
<template>
  <section id="portfolio" class="py-24 md:py-16 relative bg-surface transition-colors duration-400">
    <div class="w-full max-w-[1200px] mx-auto px-6 md:px-4">
      <SectionHeading label="// portfolio" title="Project Terbaru" description="Beberapa project sebagai bagian dari pengembangan skill dan eksplorasi teknologi."/>
      <FilterTabs :categories="categories" :active="activeCategory" @select="activeCategory = $event"/>
      <TransitionGroup name="project-list" tag="div" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7 relative">
        <ProjectCard v-for="project in filteredProjects" :key="project.id" :project="project"/>
      </TransitionGroup>
    </div>
  </section>
</template>
