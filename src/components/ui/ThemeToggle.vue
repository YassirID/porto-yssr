<script setup>
import { useTheme } from '../../composables/useTheme'
const { isDark, toggleTheme } = useTheme()
</script>
<template>
  <button class="p-1 flex items-center bg-transparent border-none cursor-pointer" @click="toggleTheme" :aria-label="isDark ? 'Light mode' : 'Dark mode'">
    <div class="w-[52px] h-7 rounded-full relative transition-colors duration-400 border-[3px] border-manga-border" :class="isDark ? 'bg-slate-700' : 'bg-slate-200'">
      <div class="absolute top-[2px] w-5 h-5 rounded-full transition-all duration-400 flex items-center justify-center shadow-sm" :class="isDark ? 'left-[26px] bg-slate-800' : 'left-[2px] bg-white'" style="transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);">
        <svg v-if="!isDark" class="w-3.5 h-3.5 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
        <svg v-else class="w-3.5 h-3.5 text-amber-300" viewBox="0 0 24 24" fill="currentColor"><path d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"/></svg>
      </div>
    </div>
  </button>
</template>
