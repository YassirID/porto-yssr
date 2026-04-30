<script setup>
import { useMousePosition } from '../../composables/useMousePosition'
import { computed } from 'vue'

const { x, y } = useMousePosition()

const gradientStyle = computed(() => ({
  background: `
    radial-gradient(
      800px circle at ${x.value * 100}% ${y.value * 100}%,
      var(--color-accent-glow) 0%,
      transparent 50%
    ),
    radial-gradient(
      600px circle at ${(1 - x.value) * 100}% ${(1 - y.value) * 100}%,
      rgba(99, 102, 241, 0.12) 0%,
      transparent 50%
    )
  `
}))
</script>

<template>
  <div class="dynamic-bg" :style="gradientStyle"></div>
</template>

<style scoped>
.dynamic-bg {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  transition: background 0.15s ease;
  will-change: background;
}
</style>
