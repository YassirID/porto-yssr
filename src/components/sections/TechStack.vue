<script setup>
import { ref, watch, nextTick } from 'vue'
import SectionHeading from '../ui/SectionHeading.vue'
import TechIcon from '../ui/TechIcon.vue'
import { techStack } from '../../data/techStack'

const activeTab = ref('Software')
const isTransitioning = ref(false)

const gear = [
  { name: 'Laptop', detail: 'AMD Ryzen / Intel Core', svgPath: 'M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25' },
  { name: 'Mouse', detail: 'Gaming Mouse', svgPath: 'M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59' },
  { name: 'Keyboard', detail: 'Mechanical Keyboard', svgPath: 'M16.5 7.5h-9m9 0a2.25 2.25 0 012.25 2.25v.75m-11.25-3a2.25 2.25 0 00-2.25 2.25v.75m0 0h13.5m-13.5 0v3.75a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-3.75m-13.5 0h.008v.008H7.5v-.008zm3 0h.008v.008H10.5v-.008zm3 0h.008v.008H13.5v-.008z' },
  { name: 'Monitor', detail: 'FHD Display', svgPath: 'M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25' }
]

function switchTab(tab) {
  if (tab === activeTab.value) return
  isTransitioning.value = true
  setTimeout(() => {
    activeTab.value = tab
    nextTick(() => {
      setTimeout(() => { isTransitioning.value = false }, 50)
    })
  }, 250)
}
</script>
<template>
  <section id="techstack" class="py-24 md:py-16 relative transition-colors duration-400">
    <div class="w-full max-w-[1200px] mx-auto px-6 md:px-4">
      <SectionHeading label="// tech stack & gear" title="Tools & Teknologi" description="Peralatan dan teknologi yang saya gunakan — dari coding hingga hardware."/>
      <!-- Tabs -->
      <div class="flex justify-center gap-2 mb-10 scroll-hidden">
        <button v-for="tab in ['Software', 'Hardware & Gear']" :key="tab" @click="switchTab(tab)"
          class="font-mono text-sm font-medium px-5 py-2 rounded-lg cursor-pointer transition-all duration-300 border-2"
          :class="activeTab === tab ? 'bg-accent border-accent text-white shadow-[3px_3px_0px_var(--color-manga-border)]' : 'bg-surface border-divider text-text-secondary hover:border-accent hover:text-accent'">
          {{ tab }}
        </button>
      </div>
      <!-- Tab content wrapper with transition -->
      <div class="relative overflow-hidden">
        <!-- Software icons -->
        <div v-show="activeTab === 'Software'"
          class="flex flex-wrap justify-center gap-8 max-w-[700px] mx-auto transition-all duration-400 ease-out"
          :class="isTransitioning ? 'opacity-0 translate-y-4 scale-95' : 'opacity-100 translate-y-0 scale-100'">
          <TechIcon v-for="tech in techStack" :key="tech.name" :name="tech.name" :icon="tech.icon" :color="tech.color"/>
        </div>
        <!-- Hardware gear -->
        <div v-show="activeTab === 'Hardware & Gear'"
          class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-[700px] mx-auto transition-all duration-400 ease-out"
          :class="isTransitioning ? 'opacity-0 translate-y-4 scale-95' : 'opacity-100 translate-y-0 scale-100'">
          <div v-for="g in gear" :key="g.name" class="p-5 rounded-xl bg-surface border-[3px] border-manga-border text-center transition-all duration-300 hover:border-accent hover:-translate-y-1 group" style="box-shadow: 3px 3px 0px var(--color-manga-border);" @mouseenter="$el.style.boxShadow='5px 5px 0px var(--color-accent)'" @mouseleave="$el.style.boxShadow='3px 3px 0px var(--color-manga-border)'">
            <span class="block mb-2"><svg class="w-8 h-8 mx-auto text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path :d="g.svgPath"/></svg></span>
            <h4 class="font-display text-sm font-bold text-text-primary">{{ g.name }}</h4>
            <p class="font-mono text-[0.65rem] text-text-secondary mt-1">{{ g.detail }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
