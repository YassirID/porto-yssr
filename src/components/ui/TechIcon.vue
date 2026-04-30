<script setup>
defineProps({ name: String, icon: String, color: String })
</script>
<template>
  <div class="flex flex-col items-center gap-2.5 cursor-default group" :title="name">
    <div class="w-16 h-16 flex items-center justify-center rounded-2xl bg-surface border-[3px] border-manga-border transition-all duration-300 group-hover:-translate-y-1.5 group-hover:scale-108 group-hover:border-accent" :style="{ '--glow': color }" style="box-shadow: 3px 3px 0px var(--color-manga-border); transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);">
      <svg viewBox="0 0 24 24" class="w-8 h-8 transition-transform duration-300 group-hover:scale-110" :style="{ fill: color }"><path :d="icon"/></svg>
    </div>
    <span class="font-mono text-[0.72rem] font-medium text-text-secondary transition-colors duration-300 group-hover:text-accent text-center">{{ name }}</span>
  </div>
</template>
