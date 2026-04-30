<script setup>
defineProps({ categories: Array, active: String })
defineEmits(['select'])
</script>
<template>
  <div class="flex flex-wrap gap-2.5 justify-center mb-10 scroll-hidden">
    <button v-for="cat in categories" :key="cat" @click="$emit('select', cat)"
      class="font-mono text-[0.82rem] font-medium px-5 py-2 rounded-lg cursor-pointer transition-all duration-300 border-2"
      :class="active === cat
        ? 'bg-accent border-accent text-white shadow-[3px_3px_0px_var(--color-manga-border)] -translate-x-px -translate-y-px'
        : 'bg-surface border-divider text-text-secondary hover:border-accent hover:text-accent'">
      {{ cat }}
    </button>
  </div>
</template>
