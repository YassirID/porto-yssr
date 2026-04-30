<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const visible = ref(false)
function onScroll() { visible.value = window.scrollY > 400 }
function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }) }
onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>
<template>
  <Transition name="fade">
    <button v-if="visible" @click="scrollToTop" aria-label="Back to top"
      class="fixed bottom-6 right-6 z-40 w-12 h-12 flex items-center justify-center rounded-xl bg-accent text-white border-[3px] border-manga-border cursor-pointer transition-all duration-200 hover:bg-accent-light hover:-translate-y-0.5"
      style="box-shadow: 4px 4px 0px var(--color-manga-border);">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" width="18" height="18"><path d="M18 15l-6-6-6 6"/></svg>
    </button>
  </Transition>
</template>
