<script setup>
defineProps({ cert: Object })
defineEmits(['view'])
</script>
<template>
  <div class="rounded-xl overflow-hidden bg-surface border-[3px] border-manga-border transition-all duration-300 hover:-translate-y-1.5 hover:border-accent group cursor-pointer" style="box-shadow: 4px 4px 0px var(--color-manga-border);" @mouseenter="$el.style.boxShadow='6px 6px 0px var(--color-accent)'" @mouseleave="$el.style.boxShadow='4px 4px 0px var(--color-manga-border)'" @click="$emit('view', cert)">
    <!-- Color banner -->
    <div class="h-32 flex items-center justify-center relative" :style="{ background: `linear-gradient(135deg, ${cert.color}44, ${cert.color}88)` }">
      <svg class="w-12 h-12 opacity-40" :style="{ color: cert.color }" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"/></svg>
      <div class="absolute top-3 right-3">
        <span class="font-mono text-[0.65rem] font-semibold px-2 py-1 rounded-md text-white" :style="{ background: cert.color }">{{ cert.date }}</span>
      </div>
    </div>
    <!-- Content -->
    <div class="p-5">
      <p class="font-mono text-[0.7rem] text-accent font-medium mb-1">{{ cert.issuer }}</p>
      <h3 class="font-display text-base font-bold text-text-primary mb-2 leading-tight">{{ cert.title }}</h3>
      <p class="text-sm text-text-secondary leading-relaxed line-clamp-2 mb-4">{{ cert.description }}</p>
      <div class="flex items-center gap-2">
        <button class="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-accent-soft text-accent font-mono text-xs font-semibold transition-all duration-200 hover:bg-accent hover:text-white border-none cursor-pointer">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"/><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
          Lihat
        </button>
        <a :href="cert.verifyUrl" target="_blank" @click.stop class="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg border-2 border-divider text-text-secondary font-mono text-xs font-semibold transition-all duration-200 hover:border-accent hover:text-accent">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"/></svg>
          Verify
        </a>
      </div>
    </div>
  </div>
</template>
