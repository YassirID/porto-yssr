<script setup>
import { credentials } from '../../data/credentials'
const featured = credentials.slice(0, 3)
</script>
<template>
  <section class="py-24 md:py-16 relative bg-surface-alt transition-colors duration-400">
    <div class="w-full max-w-[1200px] mx-auto px-6 md:px-4">
      <div class="text-center mb-12 scroll-hidden">
        <span class="font-mono text-xs font-medium tracking-widest uppercase text-accent">// featured</span>
        <h2 class="font-display font-bold mt-2 tracking-tight text-text-primary" style="font-size: clamp(1.8rem, 4vw, 2.8rem);">Sertifikasi & IT Skills</h2>
        <p class="mt-3 text-base text-text-secondary max-w-lg mx-auto">Beberapa kredensial terbaru dan keahlian IT yang dimiliki.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10 stagger-children">
        <div v-for="cert in featured" :key="cert.id" class="p-5 rounded-xl bg-surface border-[3px] border-manga-border transition-all duration-300 hover:-translate-y-1 hover:border-accent" style="box-shadow: 4px 4px 0px var(--color-manga-border);" @mouseenter="$el.style.boxShadow='6px 6px 0px var(--color-accent)'" @mouseleave="$el.style.boxShadow='4px 4px 0px var(--color-manga-border)'">
          <div class="flex items-center gap-2 mb-3">
            <div class="w-3 h-3 rounded-full" :style="{ background: cert.color }"></div>
            <span class="font-mono text-[0.7rem] text-accent font-medium">{{ cert.issuer }}</span>
          </div>
          <h3 class="font-display text-base font-bold text-text-primary mb-2 leading-tight">{{ cert.title }}</h3>
          <p class="text-sm text-text-secondary leading-relaxed line-clamp-2">{{ cert.description }}</p>
        </div>
      </div>
      <!-- CTAs -->
      <div class="flex flex-wrap justify-center gap-4 scroll-hidden">
        <router-link to="/credentials" class="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-body text-sm font-semibold rounded-xl border-[3px] border-manga-border transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5" style="box-shadow: 3px 3px 0px var(--color-manga-border);">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"/></svg>
          Lihat Semua Sertifikasi
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="16" height="16"><path d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
        </router-link>
        <router-link to="/it-infrastructure" class="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-text-primary font-body text-sm font-semibold border-2 border-divider rounded-xl transition-all duration-300 hover:border-accent hover:text-accent">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z"/></svg>
          IT Infrastructure
        </router-link>
        <router-link to="/lab" class="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-text-primary font-body text-sm font-semibold border-2 border-divider rounded-xl transition-all duration-300 hover:border-accent hover:text-accent">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0012 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 5.21c.14.519-.273 1.01-.814.99a41.39 41.39 0 01-8.39 0c-.54.02-.952-.471-.813-.99L12.8 16.1"/></svg>
          Digital Lab
        </router-link>
      </div>
    </div>
  </section>
</template>
