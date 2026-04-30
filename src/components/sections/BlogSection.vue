<script setup>
import SectionHeading from '../ui/SectionHeading.vue'
import { blogs } from '../../data/blogs'
</script>
<template>
  <section id="blog" class="py-24 md:py-16 relative bg-surface-alt transition-colors duration-400">
    <div class="w-full max-w-[1200px] mx-auto px-6 md:px-4">
      <SectionHeading label="// blog" title="Tulisan Terbaru" description="Tulisan terbaru — mulai dari coding, musik, sampai cerita random!"/>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 stagger-children">
        <article v-for="blog in blogs" :key="blog.slug" class="rounded-xl overflow-hidden bg-surface border-[3px] border-manga-border transition-all duration-300 hover:-translate-y-1.5 hover:border-accent group" style="box-shadow: 5px 5px 0px var(--color-manga-border);" @mouseenter="$el.style.boxShadow='7px 7px 0px var(--color-accent)'" @mouseleave="$el.style.boxShadow='5px 5px 0px var(--color-manga-border)'">
          <div class="h-36 flex items-start justify-between p-4" :style="{ background: `linear-gradient(135deg, ${blog.color}33, ${blog.color}77)` }">
            <span class="font-mono text-[0.7rem] font-semibold px-3 py-1 rounded-md text-white uppercase" :style="{ background: blog.color }">{{ blog.category }}</span>
            <span class="font-mono text-[0.72rem] text-white/80">{{ blog.readTime }}</span>
          </div>
          <div class="p-6">
            <h3 class="font-display text-lg font-bold text-text-primary mb-2.5 leading-tight">{{ blog.title }}</h3>
            <p class="text-sm text-text-secondary leading-relaxed mb-4 line-clamp-3">{{ blog.excerpt }}</p>
            <router-link :to="`/blog/${blog.slug}`" class="font-mono text-[0.82rem] font-semibold text-accent inline-flex items-center gap-1.5 transition-[gap] duration-300 hover:gap-3">
              Baca Selengkapnya
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </router-link>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
