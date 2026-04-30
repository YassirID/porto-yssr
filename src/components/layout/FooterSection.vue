<script setup>
import { socialLinks } from '../../data/socialLinks'
</script>
<template>
  <footer class="bg-surface-alt border-t-[3px] border-manga-border pt-16 pb-6 transition-colors duration-400">
    <div class="w-full max-w-[1200px] mx-auto px-6 md:px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
        <!-- Brand -->
        <div>
          <h2 class="font-mono text-2xl font-bold text-text-primary mb-3"><span class="text-accent">{</span> Yassir_ID <span class="text-accent">}</span></h2>
          <p class="text-sm text-text-secondary max-w-xs leading-relaxed">Student & Front-End Developer yang terus belajar dan berkembang di dunia web development.</p>
        </div>
        <!-- Links -->
        <div class="flex flex-col gap-2">
          <h3 class="font-mono text-xs font-semibold text-accent uppercase tracking-wider mb-3">Navigasi</h3>
          <router-link to="/" class="text-sm text-text-secondary hover:text-accent transition-colors">Beranda</router-link>
          <router-link to="/credentials" class="text-sm text-text-secondary hover:text-accent transition-colors">Sertifikasi</router-link>
          <router-link to="/it-infrastructure" class="text-sm text-text-secondary hover:text-accent transition-colors">IT Infrastructure</router-link>
          <router-link to="/lab" class="text-sm text-text-secondary hover:text-accent transition-colors">Digital Lab</router-link>
        </div>
        <!-- Contact -->
        <div>
          <h3 class="font-mono text-xs font-semibold text-accent uppercase tracking-wider mb-3">Hubungi</h3>
          <p class="text-sm text-text-secondary mb-1">Cimahi, Indonesia</p>
          <p class="text-sm text-text-secondary">yassir.dev@email.com</p>
        </div>
      </div>
      <!-- Bottom -->
      <div class="border-t border-divider pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div class="flex gap-2">
          <a v-for="link in socialLinks" :key="link.name" :href="link.url" target="_blank" :title="link.name"
            class="w-9 h-9 flex items-center justify-center border-2 border-divider rounded-lg text-text-secondary transition-all duration-300 hover:border-accent hover:text-accent hover:bg-accent-soft hover:-translate-y-0.5" style="box-shadow: none;" @mouseenter="$el.style.boxShadow='3px 3px 0px var(--color-manga-border)'" @mouseleave="$el.style.boxShadow='none'">
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path :d="link.icon"/></svg>
          </a>
        </div>
        <p class="text-xs text-text-secondary text-center">
          Dibuat dengan <svg class="w-4 h-4 inline-block text-red-500" style="animation: heartbeat 1.5s ease infinite;" viewBox="0 0 24 24" fill="currentColor"><path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"/></svg> oleh
          <a href="https://instagram.com/yassir_id1945" target="_blank" class="text-accent font-semibold">Yassir_ID</a> · Powered by
          <a href="https://vuejs.org" target="_blank" class="text-[#42b883] font-semibold">Vue.js</a>
        </p>
      </div>
    </div>
  </footer>
</template>
