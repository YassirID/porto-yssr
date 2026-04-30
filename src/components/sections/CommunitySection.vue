<script setup>
import SectionHeading from '../ui/SectionHeading.vue'
const communities = [
  { name: 'Codepolitan', url: 'https://www.codepolitan.com/', initial: 'CP' },
  { name: 'GDG Bandung', url: 'https://gdgbandung.com/', initial: 'GDG' },
  { name: 'GDG Cloud Bandung', url: 'https://gdg.community.dev/gdg-cloud-bandung/', initial: 'GC' },
  { name: 'Dicoding', url: 'https://dicoding.com/', initial: 'DC' }
]
const achievements = [
  { title: 'Peserta LKS IT Networking', year: '2024', desc: 'Mengikuti Lomba Kompetensi Siswa bidang IT Networking Support tingkat kota.' },
  { title: 'Top Student Dicoding', year: '2024', desc: 'Menyelesaikan learning path Front-End Web Developer dengan nilai sempurna.' },
  { title: 'Panitia Workshop GDG', year: '2025', desc: 'Menjadi panitia workshop "Build with AI" yang diselenggarakan GDG Bandung.' }
]
</script>
<template>
  <section class="py-24 md:py-16 relative bg-surface transition-colors duration-400">
    <div class="w-full max-w-[1200px] mx-auto px-6 md:px-4">
      <SectionHeading label="// komunitas & pencapaian" title="Community & Achievement" description="Tumbuh bersama komunitas dan meraih pencapaian di perjalanan."/>
      <!-- Communities -->
      <div class="flex flex-wrap justify-center gap-6 mb-16 stagger-children">
        <a v-for="com in communities" :key="com.name" :href="com.url" target="_blank" :title="com.name"
          class="flex flex-col items-center gap-3 px-8 py-7 rounded-2xl bg-surface-alt border-[3px] border-manga-border transition-all duration-300 min-w-[140px] text-center grayscale opacity-75 hover:grayscale-0 hover:opacity-100 hover:-translate-y-1.5 hover:border-accent group" style="box-shadow: 4px 4px 0px var(--color-manga-border); transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);" @mouseenter="$el.style.boxShadow='6px 6px 0px var(--color-accent)'" @mouseleave="$el.style.boxShadow='4px 4px 0px var(--color-manga-border)'">
          <div class="w-14 h-14 flex items-center justify-center bg-accent-soft text-accent font-display text-xl font-bold rounded-xl border-2 border-accent">{{ com.initial }}</div>
          <span class="font-mono text-[0.78rem] font-medium text-text-secondary group-hover:text-accent transition-colors">{{ com.name }}</span>
        </a>
      </div>
      <!-- Achievements -->
      <h3 class="font-display text-2xl font-bold text-text-primary text-center mb-8 scroll-hidden flex items-center justify-center gap-2">
        <svg class="w-7 h-7 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.023 6.023 0 01-3.77 1.522m3.77-1.522a6.024 6.024 0 01-3.77 1.522m0 0c-1.326 0-2.558-.427-3.77-1.522"/></svg>
        Pencapaian
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[900px] mx-auto stagger-children">
        <div v-for="a in achievements" :key="a.title" class="p-5 rounded-xl bg-surface-alt border-[3px] border-manga-border transition-all duration-300 hover:border-accent hover:-translate-y-1" style="box-shadow: 3px 3px 0px var(--color-manga-border);" @mouseenter="$el.style.boxShadow='5px 5px 0px var(--color-accent)'" @mouseleave="$el.style.boxShadow='3px 3px 0px var(--color-manga-border)'">
          <span class="font-mono text-xs font-semibold text-accent bg-accent-soft px-2 py-0.5 rounded">{{ a.year }}</span>
          <h4 class="font-display text-base font-bold text-text-primary mt-2 mb-1">{{ a.title }}</h4>
          <p class="text-sm text-text-secondary leading-relaxed">{{ a.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
