<script setup>
import SectionHeading from '../ui/SectionHeading.vue'
const steps = [
  { svgPath: 'M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18', title: 'Ide & Riset', description: 'Memahami masalah, kebutuhan, dan referensi solusi terbaik.' },
  { svgPath: 'M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42', title: 'Desain', description: 'Wireframe dan mockup di Figma. UI/UX yang intuitif.' },
  { svgPath: 'M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5', title: 'Development', description: 'Menulis kode dengan Vue.js. Clean code & komponen reusable.' },
  { svgPath: 'M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0012 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 5.21c.14.519-.273 1.01-.814.99a41.39 41.39 0 01-8.39 0c-.54.02-.952-.471-.813-.99L12.8 16.1', title: 'Testing', description: 'Responsivitas, performa, dan kompatibilitas multi-device.' },
  { svgPath: 'M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.841m2.699-2.563l-2.7 2.563m0 0L8.25 21l-1.5-1.5 2.563-2.7m0 0L6.75 14.25', title: 'Deploy', description: 'Push ke production. Monitoring dan iterasi berkelanjutan.' }
]
</script>
<template>
  <section class="py-24 md:py-16 relative bg-surface-alt transition-colors duration-400">
    <div class="w-full max-w-[1200px] mx-auto px-6 md:px-4">
      <SectionHeading label="// workflow" title="Bagaimana Saya Bekerja" description="Proses dari ide awal hingga deploy ke production."/>
      <div class="flex flex-col md:flex-row gap-4 overflow-x-auto pb-4 stagger-children">
        <div v-for="(step, i) in steps" :key="i" class="flex-1 min-w-[180px] text-center relative px-2 group">
          <div v-if="i < steps.length - 1" class="hidden md:block absolute top-8 left-[60%] h-[3px] z-0" style="width: calc(100% - 20%); background: repeating-linear-gradient(90deg, var(--color-accent) 0px, var(--color-accent) 8px, transparent 8px, transparent 14px);"></div>
          <div class="w-16 h-16 flex items-center justify-center rounded-2xl bg-surface mx-auto mb-3 border-[3px] border-manga-border relative z-1 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-accent group-hover:-rotate-[5deg]" style="box-shadow: 3px 3px 0px var(--color-manga-border); transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);" @mouseenter="$el.style.boxShadow='5px 5px 0px var(--color-accent)'" @mouseleave="$el.style.boxShadow='3px 3px 0px var(--color-manga-border)'">
            <svg class="w-7 h-7 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path :d="step.svgPath"/></svg>
          </div>
          <div class="font-mono text-[0.7rem] text-accent mb-1.5">0{{ i + 1 }}</div>
          <h3 class="font-display text-base font-bold text-text-primary mb-2">{{ step.title }}</h3>
          <p class="text-xs leading-relaxed text-text-secondary">{{ step.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
