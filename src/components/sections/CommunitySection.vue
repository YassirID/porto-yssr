<script setup>
import SectionHeading from '../ui/SectionHeading.vue'
const communities = [
  { name: 'Codepolitan', url: 'https://www.codepolitan.com/', initial: 'CP' },
  { name: 'GDG Bandung', url: 'https://gdgbandung.com/', initial: 'GDG' },
  { name: 'GDG Cloud Bandung', url: 'https://gdg.community.dev/gdg-cloud-bandung/', initial: 'GDG x' },
  { name: 'Dicoding', url: 'https://dicoding.com/', initial: 'DCD' }
]
const achievements = [
  { title: 'Peserta ', year: '2024', desc: 'Mengikuti Lomba Kompetensi Siswa bidang IT Networking Support tingkat kota.' },
  { title: 'Top Student Dicoding', year: '2024', desc: 'Menyelesaikan learning path Front-End Web Developer dengan nilai sempurna.' },
  { title: 'Best Student in School', year: '2025', desc: 'Mendapatkan penghargaan sebagai siswa terbaik di sekolah.' }
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
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
</svg>

        Pencapaian
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mt-3 max-w-[900px] mx-auto stagger-children">
        <div v-for="a in achievements" :key="a.title" class="p-5 rounded-xl bg-surface-alt border-[3px] border-manga-border transition-all duration-300 hover:border-accent hover:-translate-y-1" style="box-shadow: 3px 3px 0px var(--color-manga-border);" @mouseenter="$el.style.boxShadow='5px 5px 0px var(--color-accent)'" @mouseleave="$el.style.boxShadow='3px 3px 0px var(--color-manga-border)'">
          <span class="font-mono text-xs font-semibold text-accent bg-accent-soft px-2 py-0.5 rounded">{{ a.year }}</span>
          <h4 class="font-display text-base font-bold text-text-primary mt-2 mb-1">{{ a.title }}</h4>
          <p class="text-sm text-text-secondary leading-relaxed">{{ a.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
