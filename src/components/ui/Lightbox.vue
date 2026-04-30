<script setup>
defineProps({ show: Boolean, title: String, color: String })
defineEmits(['close'])
</script>
<template>
  <Teleport to="body">
    <Transition name="overlay">
      <div v-if="show" class="fixed inset-0 z-[998] bg-black/70 backdrop-blur-md flex items-center justify-center p-6" @click.self="$emit('close')">
        <Transition name="modal">
          <div v-if="show" class="w-full max-w-2xl rounded-xl bg-surface border-[3px] border-manga-border overflow-hidden" style="box-shadow: 8px 8px 0px var(--color-manga-border);">
            <div class="flex items-center justify-between px-5 py-3 border-b-2 border-divider">
              <h3 class="font-display font-bold text-text-primary text-lg">{{ title }}</h3>
              <button @click="$emit('close')" class="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface-alt transition-colors cursor-pointer border-none bg-transparent text-text-secondary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="18" height="18"><path d="M18 6L6 18M6 6l12 12"/></svg>
              </button>
            </div>
            <div class="p-6">
              <div class="w-full aspect-[4/3] rounded-lg flex items-center justify-center" :style="{ background: `linear-gradient(135deg, ${color}33, ${color}77)` }">
                <div class="text-center">
                  <svg class="w-16 h-16 mx-auto mb-3 opacity-50" :style="{ color: color }" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"/></svg>
                  <p class="font-mono text-sm text-text-secondary">Preview Sertifikat</p>
                </div>
              </div>
              <slot></slot>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>
