<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { useScrollAnimation } from '../composables/useScrollAnimation'
import LabCard from '../components/ui/LabCard.vue'
import { labExperiments } from '../data/labExperiments'

const { refresh } = useScrollAnimation()
onMounted(() => nextTick(() => refresh()))

// Simple interactive counter demo
const count = ref(0)
const colors = ref([])
function generateColors() {
  colors.value = Array.from({ length: 5 }, () => {
    const h = Math.floor(Math.random() * 360)
    return { hsl: `hsl(${h}, 70%, 60%)`, hex: `#${Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')}` }
  })
}
generateColors()
function copyColor(hex) { navigator.clipboard.writeText(hex); }
</script>
<template>
  <div class="min-h-screen">
    <!-- Hero banner -->
    <div class="pt-28 pb-16 bg-surface-alt transition-colors duration-400">
      <div class="w-full max-w-[1200px] mx-auto px-6 md:px-4 text-center">
        <span class="font-mono text-xs font-medium tracking-widest uppercase text-accent scroll-hidden">// digital lab</span>
        <h1 class="font-display font-bold mt-3 tracking-tight text-text-primary scroll-hidden" style="font-size: clamp(2rem, 5vw, 3rem);">Digital Lab / Playground</h1>
        <p class="mt-4 text-base text-text-secondary max-w-lg mx-auto text-center scroll-hidden lg:text-lg">Eksperimen kecil dan micro-apps — tempat bermain dengan kode dan ide-ide kreatif.</p>
      </div>
    </div>
    <!-- Live Demos -->
    <div class="py-16 bg-surface transition-colors duration-400">
      <div class="w-full max-w-[1200px] mx-auto px-6 md:px-4">
        <div class="text-center mb-10 scroll-hidden">
          <h2 class="font-display text-2xl font-bold text-text-primary flex items-center justify-center gap-2">
            <svg class="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"/></svg>
            Live Demo
          </h2>
          <p class="text-sm text-text-secondary mt-2">Coba langsung beberapa mini-app interaktif.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <!-- Counter Demo -->
          <div class="rounded-xl bg-surface border-[3px] border-manga-border p-6 transition-all duration-300 hover:border-accent" style="box-shadow: 4px 4px 0px var(--color-manga-border);" @mouseenter="$el.style.boxShadow='6px 6px 0px var(--color-accent)'" @mouseleave="$el.style.boxShadow='4px 4px 0px var(--color-manga-border)'">
            <div class="flex items-center gap-2 mb-4">
              <svg class="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z"/></svg>
              <h3 class="font-display font-bold text-text-primary">Interactive Counter</h3>
            </div>
            <div class="text-center py-6">
              <div class="font-display text-6xl font-bold text-accent mb-6 transition-all duration-200" :style="{ transform: `scale(${1 + Math.abs(count) * 0.005})` }">{{ count }}</div>
              <div class="flex gap-3 justify-center">
                <button @click="count--" class="px-6 py-2.5 rounded-lg bg-red-500/10 text-red-500 font-mono text-lg font-bold border-2 border-red-500/30 hover:bg-red-500/20 transition-all cursor-pointer">−</button>
                <button @click="count = 0" class="px-6 py-2.5 rounded-lg bg-surface-alt text-text-secondary font-mono text-sm font-semibold border-2 border-divider hover:border-accent hover:text-accent transition-all cursor-pointer">Reset</button>
                <button @click="count++" class="px-6 py-2.5 rounded-lg bg-green-500/10 text-green-500 font-mono text-lg font-bold border-2 border-green-500/30 hover:bg-green-500/20 transition-all cursor-pointer">+</button>
              </div>
            </div>
            <p class="font-mono text-xs text-text-secondary/60 text-center mt-3">Vue.js Reactivity Demo</p>
          </div>
          <!-- Color Palette Demo -->
          <div class="rounded-xl bg-surface border-[3px] border-manga-border p-6 transition-all duration-300 hover:border-accent" style="box-shadow: 4px 4px 0px var(--color-manga-border);" @mouseenter="$el.style.boxShadow='6px 6px 0px var(--color-accent)'" @mouseleave="$el.style.boxShadow='4px 4px 0px var(--color-manga-border)'">
            <div class="flex items-center gap-2 mb-4">
              <svg class="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z"/></svg>
              <h3 class="font-display font-bold text-text-primary">Color Palette Generator</h3>
            </div>
            <div class="flex gap-2 mb-4">
              <div v-for="(c, i) in colors" :key="i" @click="copyColor(c.hex)" class="flex-1 h-20 rounded-lg cursor-pointer transition-all duration-200 hover:scale-105 hover:-translate-y-1 flex items-end justify-center pb-2 shadow-sm" :style="{ background: c.hsl }" :title="`Click to copy ${c.hex}`">
                <span class="font-mono text-[0.55rem] text-white/80 bg-black/30 px-1.5 py-0.5 rounded">{{ c.hex }}</span>
              </div>
            </div>
            <button @click="generateColors" class="w-full py-2.5 rounded-lg bg-accent text-white font-mono text-sm font-semibold border-[3px] border-manga-border transition-all duration-200 hover:bg-accent-light cursor-pointer flex items-center justify-center gap-2" style="box-shadow: 3px 3px 0px var(--color-manga-border);">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"/></svg>
              Generate Palette
            </button>
            <p class="font-mono text-xs text-text-secondary/60 text-center pt-3">Click warna untuk copy hex code</p>
          </div>
        </div>
        <!-- Experiment Cards -->
        <div class="text-center mb-10 scroll-hidden">
          <h2 class="font-display text-2xl font-bold text-text-primary flex items-center justify-center gap-2">
            <svg class="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0012 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 5.21c.14.519-.273 1.01-.814.99a41.39 41.39 0 01-8.39 0c-.54.02-.952-.471-.813-.99L12.8 16.1"/></svg>
            Eksperimen Lainnya
          </h2>
          <p class="text-sm text-text-secondary mt-2">Micro-apps dan eksperimen kode yang sedang dikerjakan.</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          <LabCard v-for="exp in labExperiments" :key="exp.id" :experiment="exp"/>
        </div>
      </div>
    </div>
  </div>
</template>
