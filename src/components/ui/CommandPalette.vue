<script setup>
import { ref, watch, nextTick } from 'vue'
import { useCommandPalette } from '../../composables/useCommandPalette'
const { isOpen, query, selectedIndex, close, getFiltered, execute } = useCommandPalette()
const inputRef = ref(null)
watch(isOpen, (val) => { if (val) nextTick(() => inputRef.value?.focus()) })
</script>
<template>
  <Teleport to="body">
    <Transition name="overlay">
      <div v-if="isOpen" class="fixed inset-0 z-[999] bg-black/50 backdrop-blur-sm flex items-start justify-center pt-[20vh]" @click.self="close">
        <Transition name="modal">
          <div v-if="isOpen" class="w-full max-w-lg mx-4 rounded-xl bg-surface border-[3px] border-manga-border overflow-hidden" style="box-shadow: 8px 8px 0px var(--color-manga-border);">
            <!-- Search input -->
            <div class="flex items-center gap-3 px-4 py-3 border-b-2 border-divider">
              <svg class="w-5 h-5 text-text-secondary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
              <input ref="inputRef" v-model="query" placeholder="Cari halaman atau navigasi..." class="flex-1 bg-transparent border-none outline-none font-mono text-sm text-text-primary placeholder:text-text-secondary/50" @keydown.down.prevent="selectedIndex = Math.min(selectedIndex + 1, getFiltered().length - 1)" @keydown.up.prevent="selectedIndex = Math.max(selectedIndex - 1, 0)" @keydown.enter.prevent="execute(getFiltered()[selectedIndex])" @keydown.esc="close">
              <kbd class="hidden sm:inline-flex items-center px-1.5 py-0.5 text-[0.65rem] font-mono text-text-secondary bg-surface-alt rounded border border-divider">ESC</kbd>
            </div>
            <!-- Results -->
            <div class="max-h-72 overflow-y-auto p-2">
              <div v-if="getFiltered().length === 0" class="px-4 py-8 text-center text-text-secondary text-sm">Tidak ditemukan</div>
              <button v-for="(cmd, i) in getFiltered()" :key="cmd.label" @click="execute(cmd)" @mouseenter="selectedIndex = i"
                class="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors duration-150 cursor-pointer border-none"
                :class="i === selectedIndex ? 'bg-accent-soft text-accent' : 'text-text-secondary hover:bg-surface-alt'">
                <svg class="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path :d="cmd.svgPath"/></svg>
                <span class="flex-1 font-body text-sm font-medium">{{ cmd.label }}</span>
                <span class="font-mono text-[0.65rem] text-text-secondary/60 uppercase">{{ cmd.category }}</span>
              </button>
            </div>
            <!-- Footer -->
            <div class="px-4 py-2 border-t border-divider flex items-center gap-4 text-[0.65rem] font-mono text-text-secondary/60">
              <span>↑↓ navigasi</span><span>↵ pilih</span><span>esc tutup</span>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>
