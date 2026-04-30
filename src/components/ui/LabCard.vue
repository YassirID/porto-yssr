<script setup>
defineProps({ experiment: Object })
</script>
<template>
  <div class="rounded-xl bg-surface border-[3px] border-manga-border overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-accent group" style="box-shadow: 4px 4px 0px var(--color-manga-border);" @mouseenter="$el.style.boxShadow='6px 6px 0px var(--color-accent)'" @mouseleave="$el.style.boxShadow='4px 4px 0px var(--color-manga-border)'">
    <div class="h-36 flex items-center justify-center" :style="{ background: `linear-gradient(135deg, ${experiment.color}22, ${experiment.color}55)` }">
      <svg class="w-12 h-12 opacity-50" :style="{ color: experiment.color }" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 5.21c.14.519-.273 1.01-.814.99a41.39 41.39 0 01-8.39 0c-.54.02-.952-.471-.813-.99L12.8 16.1"/></svg>
    </div>
    <div class="p-5">
      <div class="flex flex-wrap gap-1.5 mb-3">
        <span v-for="tag in experiment.tags" :key="tag" class="font-mono text-[0.65rem] px-2 py-0.5 bg-accent-soft text-accent rounded font-medium">{{ tag }}</span>
      </div>
      <h3 class="font-display text-base font-bold text-text-primary mb-2">{{ experiment.title }}</h3>
      <p class="text-sm text-text-secondary leading-relaxed mb-4 line-clamp-2">{{ experiment.description }}</p>
      <button class="w-full py-2.5 rounded-lg bg-accent text-white font-body text-sm font-semibold transition-all duration-200 hover:bg-accent-light border-[3px] border-manga-border cursor-pointer flex items-center justify-center gap-1.5" style="box-shadow: 3px 3px 0px var(--color-manga-border);">
        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0012 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 5.21c.14.519-.273 1.01-.814.99a41.39 41.39 0 01-8.39 0c-.54.02-.952-.471-.813-.99L12.8 16.1"/></svg>
        Coba Sekarang
      </button>
    </div>
  </div>
</template>
