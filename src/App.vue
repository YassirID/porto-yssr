<script setup>
import { ref } from 'vue'
import { useTheme } from './composables/useTheme'
import DynamicBackground from './components/ui/DynamicBackground.vue'
import NavBar from './components/layout/NavBar.vue'
import FooterSection from './components/layout/FooterSection.vue'
import BackToTop from './components/layout/BackToTop.vue'
import CommandPalette from './components/ui/CommandPalette.vue'

useTheme()
const paletteOpen = ref(false)
</script>
<template>
  <div class="relative z-1 font-body bg-surface text-text-secondary transition-colors duration-400">
    <DynamicBackground />
    <NavBar @openPalette="paletteOpen = true" />
    <main class="relative z-1">
      <RouterView />
    </main>
    <FooterSection />
    <BackToTop />
    <CommandPalette />
  </div>
</template>
