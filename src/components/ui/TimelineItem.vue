<script setup>
defineProps({ item: Object, index: Number, isLeft: Boolean })
</script>
<template>
  <div class="flex items-start gap-5 mb-10 relative scroll-hidden" :class="isLeft ? 'from-left' : 'from-right'">
    <div class="shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center border-[3px] border-manga-border z-2" style="box-shadow: 3px 3px 0px var(--color-manga-border);">
      <svg class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path :d="item.icon"/></svg>
    </div>
     <div class="flex-1 p-5 rounded-xl bg-surface border-[3px] border-manga-border transition-all duration-300 hover:border-accent hover:-translate-x-0.5 hover:-translate-y-0.5" style="box-shadow: 4px 4px 0px var(--color-manga-border);">
      <div class="flex items-center gap-2 flex-wrap">
        <span class="font-mono text-xs font-semibold text-accent bg-accent-soft px-2.5 py-0.5 rounded">{{ item.year }}</span>
        <span class="flex items-center gap-1 font-mono text-[0.72rem] text-text-secondary">
          <svg v-if="item.type === 'education'" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"/></svg>
          <svg v-else class="w-3.5 h-3.5"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.023 6.023 0 01-3.77 1.522m3.77-1.522a6.024 6.024 0 01-3.77 1.522m0 0c-1.326 0-2.558-.427-3.77-1.522"/></svg>
          {{ item.type === 'education' ? 'Belajar' : 'Pencapaian' }}
        </span>
      </div>
      <h3 class="font-display text-lg font-bold text-text-primary mt-2.5 mb-1.5">{{ item.title }}</h3>
      <p class="text-sm text-text-secondary leading-relaxed">{{ item.description }}</p>
    </div>
  </div>
</template>
