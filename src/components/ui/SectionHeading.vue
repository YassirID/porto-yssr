<script setup>
defineProps({ label: String, title: String, description: String, align: { type: String, default: 'center' } })
</script>
<template>
  <div class="scroll-hidden mb-14" :class="align === 'center' ? 'text-center mx-auto' : 'text-left'" style="max-width: 640px;">
    <span class="font-mono text-xs font-medium tracking-widest uppercase text-accent">{{ label }}</span>
    <h2 class="font-display font-bold mt-2 tracking-tight leading-tight text-text-primary transition-colors duration-400" style="font-size: clamp(1.8rem, 4vw, 2.8rem);">{{ title }}</h2>
    <p v-if="description" class="mt-4 text-base leading-relaxed text-text-secondary lg:text-lg">{{ description }}</p>
  </div>
</template>
