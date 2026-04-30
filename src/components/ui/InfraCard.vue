<script setup>
defineProps({ skill: Object })
</script>
<template>
  <div class="rounded-xl bg-surface border-[3px] border-manga-border p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent group" style="box-shadow: 4px 4px 0px var(--color-manga-border);" @mouseenter="$el.style.boxShadow='6px 6px 0px var(--color-accent)'" @mouseleave="$el.style.boxShadow='4px 4px 0px var(--color-manga-border)'">
    <div class="w-10 h-10 flex items-center justify-center rounded-lg bg-accent-soft text-accent mb-3">
      <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path :d="skill.icon"/></svg>
    </div>
    <span class="font-mono text-[0.68rem] font-semibold text-accent bg-accent-soft px-2 py-0.5 rounded uppercase">{{ skill.category }}</span>
    <h3 class="font-display text-lg font-bold text-text-primary mt-3 mb-2">{{ skill.title }}</h3>
    <p class="text-sm text-text-secondary leading-relaxed mb-4">{{ skill.description }}</p>
    <div class="flex flex-wrap gap-1.5">
      <span v-for="s in skill.skills" :key="s" class="font-mono text-[0.65rem] px-2 py-0.5 rounded border border-divider text-text-secondary transition-colors duration-200 group-hover:border-accent/30 group-hover:text-accent/80">{{ s }}</span>
    </div>
  </div>
</template>
