<script setup>
import { ref, onMounted } from 'vue'
import SectionHeading from '../ui/SectionHeading.vue'

const statIcons = {
  code: 'M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5',
  clock: 'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z',
  cup: 'M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z',
  rocket: 'M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.841m2.699-2.563l-2.7 2.563m0 0L8.25 21l-1.5-1.5 2.563-2.7m0 0L6.75 14.25',
  fire: 'M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z',
  chart: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z'
}

const stats = ref([
  { label: 'Lines of Code', value: 0, target: 25000, suffix: '+', iconKey: 'code' },
  { label: 'Jam Coding', value: 0, target: 1200, suffix: 'h', iconKey: 'clock' },
  { label: 'Cups of Coffee', value: 0, target: 500, suffix: '+', iconKey: 'cup' },
  { label: 'Project Selesai', value: 0, target: 10, suffix: '+', iconKey: 'rocket' },
  { label: 'Coding Streak', value: 0, target: 30, suffix: ' hari', iconKey: 'fire' },
])

const weeks = Array.from({ length: 20 }, () =>
  Array.from({ length: 7 }, () => Math.random() > 0.3 ? Math.floor(Math.random() * 4) + 1 : 0)
)

function getContribColor(level) {
  if (level === 0) return 'bg-surface-alt border border-divider/30'
  if (level === 1) return 'bg-accent/20 border border-accent/20'
  if (level === 2) return 'bg-accent/40 border border-accent/30'
  if (level === 3) return 'bg-accent/70 border border-accent/40'
  return 'bg-accent border border-accent/60'
}

function animateCounters() {
  stats.value.forEach((stat) => {
    let start = 0
    const duration = 2000
    const increment = stat.target / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= stat.target) { stat.value = stat.target; clearInterval(timer) }
      else stat.value = Math.floor(start)
    }, 16)
  })
}

onMounted(() => {
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) { animateCounters(); observer.disconnect() }
  }, { threshold: 0.3 })
  const section = document.getElementById('bento-stats')
  if (section) observer.observe(section)
})
</script>
<template>
  <section id="bento-stats" class="py-24 md:py-16 relative transition-colors duration-400">
    <div class="w-full max-w-[1200px] mx-auto px-6 md:px-4">
      <SectionHeading label="// statistik" title="Bento Dashboard" description="Statistik coding dan aktivitas saya — disajikan dalam Bento Box layout."/>
      
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 scroll-hidden">
        <!-- GitHub Activity Graph -->
        <div class="col-span-2 md:col-span-4 lg:col-span-4 p-5 rounded-xl bg-surface border-[3px] border-manga-border transition-all duration-300 hover:border-accent" style="box-shadow: 4px 4px 0px var(--color-manga-border);" @mouseenter="$el.style.boxShadow='6px 6px 0px var(--color-accent)'" @mouseleave="$el.style.boxShadow='4px 4px 0px var(--color-manga-border)'">
          <div class="flex items-center gap-2 mb-4">
            <svg class="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path :d="statIcons.chart"/></svg>
            <h3 class="font-mono text-xs font-semibold text-accent uppercase tracking-wider">GitHub Activity</h3>
          </div>
          <div class="flex gap-[3px] overflow-x-auto pb-1">
            <div v-for="(week, wi) in weeks" :key="wi" class="flex flex-col gap-[3px]">
              <div v-for="(day, di) in week" :key="di" class="w-3 h-3 rounded-sm transition-colors duration-200" :class="getContribColor(day)"></div>
            </div>
          </div>
          <div class="flex items-center gap-1.5 mt-3 justify-end">
            <span class="font-mono text-[0.6rem] text-text-secondary/60">Less</span>
            <div class="w-3 h-3 rounded-sm bg-surface-alt border border-divider/30"></div>
            <div class="w-3 h-3 rounded-sm bg-accent/20 border border-accent/20"></div>
            <div class="w-3 h-3 rounded-sm bg-accent/40 border border-accent/30"></div>
            <div class="w-3 h-3 rounded-sm bg-accent/70 border border-accent/40"></div>
            <div class="w-3 h-3 rounded-sm bg-accent border border-accent/60"></div>
            <span class="font-mono text-[0.6rem] text-text-secondary/60">More</span>
          </div>
        </div>

        <!-- Coffee & Streak -->
        <div v-for="stat in [stats[2], stats[4]]" :key="stat.label" class="col-span-1 p-5 rounded-xl bg-surface border-[3px] border-manga-border text-center transition-all duration-300 hover:border-accent hover:-translate-y-1" style="box-shadow: 3px 3px 0px var(--color-manga-border);" @mouseenter="$el.style.boxShadow='5px 5px 0px var(--color-accent)'" @mouseleave="$el.style.boxShadow='3px 3px 0px var(--color-manga-border)'">
          <svg class="w-6 h-6 text-accent mx-auto mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path :d="statIcons[stat.iconKey]"/></svg>
          <div class="font-display text-2xl font-bold text-accent" style="animation: count-up 0.6s ease forwards;">{{ stat.value.toLocaleString() }}{{ stat.suffix }}</div>
          <span class="font-mono text-[0.65rem] text-text-secondary mt-1 block">{{ stat.label }}</span>
        </div>

        <!-- Lines, Hours, Projects -->
        <div v-for="stat in [stats[0], stats[1], stats[3]]" :key="stat.label" class="col-span-1 md:col-span-2 p-5 rounded-xl bg-surface border-[3px] border-manga-border text-center transition-all duration-300 hover:border-accent hover:-translate-y-1" style="box-shadow: 3px 3px 0px var(--color-manga-border);" @mouseenter="$el.style.boxShadow='5px 5px 0px var(--color-accent)'" @mouseleave="$el.style.boxShadow='3px 3px 0px var(--color-manga-border)'">
          <svg class="w-7 h-7 text-accent mx-auto mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path :d="statIcons[stat.iconKey]"/></svg>
          <div class="font-display text-3xl font-bold text-accent">{{ stat.value.toLocaleString() }}{{ stat.suffix }}</div>
          <span class="font-mono text-[0.65rem] text-text-secondary mt-1 block">{{ stat.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
