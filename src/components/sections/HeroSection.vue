<script setup>
import { ref, onMounted } from 'vue'
import { socialLinks } from '../../data/socialLinks'
import profileImg from '../../assets/orang.png'

const typedText = ref('')
const roles = ['Front-End Developer', 'Anime Enthusiast', 'IT Enthusiast', 'Student']
let roleIndex = 0, charIndex = 0, isDeleting = false
function typeEffect() {
  const current = roles[roleIndex]
  if (!isDeleting) { typedText.value = current.substring(0, charIndex + 1); charIndex++; if (charIndex === current.length) { isDeleting = true; setTimeout(typeEffect, 2000); return } }
  else { typedText.value = current.substring(0, charIndex - 1); charIndex--; if (charIndex === 0) { isDeleting = false; roleIndex = (roleIndex + 1) % roles.length } }
  setTimeout(typeEffect, isDeleting ? 50 : 100)
}
onMounted(() => setTimeout(typeEffect, 800))
</script>
<template>
  <section id="home" class="min-h-screen flex items-center relative pt-24 pb-16 overflow-hidden">
    <!-- Speed lines -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.06]">
      <div v-for="i in 8" :key="i" class="absolute w-0.5 h-20 bg-accent -rotate-[35deg]" :style="{ right: `calc(${i} * 5% + 10%)`, top: `calc(${i} * 8% + 5%)`, animation: `speedline 3s ease-in-out infinite`, animationDelay: `${i * 0.2}s` }"></div>
    </div>
    <div class="w-full max-w-[1200px] mx-auto px-6 md:px-4">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Left -->
        <div class="flex flex-col gap-4 text-center lg:text-left items-center lg:items-start">
          <span class="font-mono text-xs font-medium tracking-widest uppercase text-accent scroll-hidden flex items-center gap-1.5 justify-center lg:justify-start">// hallo semua <svg class="w-4 h-4 inline-block" style="animation: wave 2s ease-in-out infinite;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3.15m3.15-3.15v-1.575a1.575 1.575 0 013.15 0v1.575m-3.15 0l-.075 5.925m3.075-5.775a1.575 1.575 0 013.15 0V9m-3.15-3.075v1.575a1.575 1.575 0 013.15 0V9M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.3 6.3 0 006.3 6.3h2.1a6.3 6.3 0 006.3-6.3V9a1.575 1.575 0 00-3.15 0v-.675"/></svg></span>
          <h1 class="font-display font-bold tracking-tight leading-none text-text-primary scroll-hidden" style="font-size: clamp(2.5rem, 6vw, 4rem);">
            Saya <span class="text-accent relative"><span class="relative z-1">Yassir</span><span class="absolute bottom-1 left-0 right-0 h-2 bg-accent-glow rounded z-0"></span></span>
          </h1>
          <div class="font-mono text-lg flex items-center gap-2 text-text-secondary scroll-hidden">
            <span class="text-accent font-bold">></span>
            <span class="text-text-primary font-medium">{{ typedText }}</span>
            <span class="text-accent" style="animation: blink 0.8s step-end infinite;">|</span>
          </div>
          <p class="text-base max-w-md mt-2 leading-relaxed text-text-secondary scroll-hidden lg:text-lg">
            Seorang pelajar yang sedang mendalami dunia web development.
            Menciptakan pengalaman web yang <strong class="text-text-primary">menarik</strong>,
            <strong class="text-text-primary">interaktif</strong>, dan <strong class="text-text-primary">bermakna</strong>.
          </p>
          <div class="flex gap-4 mt-4 flex-wrap justify-center lg:justify-start scroll-hidden">
            <a href="#portfolio" class="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-white font-body text-base font-semibold rounded-xl border-[3px] border-manga-border transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5" style="box-shadow: 4px 4px 0px var(--color-manga-border);">
              <span>Lihat Karya</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="18" height="18"><path d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </a>
            <a href="#contact" class="inline-flex items-center px-7 py-3.5 bg-transparent text-text-primary font-body text-base font-semibold border-2 border-divider rounded-xl transition-all duration-300 hover:border-accent hover:text-accent">Hubungi Saya</a>
          </div>
          <div class="flex gap-2.5 mt-2 justify-center lg:justify-start scroll-hidden">
            <a v-for="link in socialLinks" :key="link.name" :href="link.url" target="_blank" :title="link.name"
              class="w-10 h-10 flex items-center justify-center border-2 border-divider rounded-xl text-text-secondary transition-all duration-300 hover:text-accent hover:border-accent hover:bg-accent-soft hover:-translate-y-0.5" style="box-shadow: none;" @mouseenter="$el.style.boxShadow='3px 3px 0px var(--color-manga-border)'" @mouseleave="$el.style.boxShadow='none'">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path :d="link.icon"/></svg>
            </a>
          </div>
        </div>
        <!-- Right -->
        <div class="flex justify-center relative scroll-hidden scale-in">
          <div class="relative w-full max-w-[420px]">
            <!-- Z-1: Rotating blob (background) -->
            <div class="relative z-1">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto opacity-85" style="animation: blob-rotate 12s linear infinite;">
                <path fill="var(--color-accent)" d="M69,-24.2C75.4,-2.7,56.9,25.1,34.4,39.6C11.9,54.1,-14.6,55.3,-35.8,41.7C-57,28.1,-72.8,-0.4,-66,-22.5C-59.1,-44.5,-29.6,-60.3,0.9,-60.6C31.3,-60.8,62.6,-45.7,69,-24.2Z" transform="translate(100 100) scale(1.1)"/>
              </svg>
            </div>
            <!-- Z-5: Profile photo (in front of blob, behind code card) -->
            <div class="absolute inset-0 z-5 flex items-center justify-center pointer-events-none">
              <img :src="profileImg" alt="Yassir" class="w-[70%] h-[70%] object-contain drop-shadow-2xl select-none" style="filter: drop-shadow(0 10px 30px rgba(0,0,0,0.3));" />
            </div>
            <!-- Z-10: Code card (foreground) -->
            <div class="absolute -bottom-5 -right-5 bg-surface rounded-xl p-4 z-10 border-[3px] border-manga-border min-w-[260px] transition-all duration-400" style="box-shadow: 5px 5px 0px var(--color-manga-border);">
              <div class="flex gap-1.5 mb-3"><span class="w-2.5 h-2.5 rounded-full bg-red-500"></span><span class="w-2.5 h-2.5 rounded-full bg-amber-500"></span><span class="w-2.5 h-2.5 rounded-full bg-green-500"></span></div>
              <pre class="m-0 font-mono text-xs leading-relaxed text-text-secondary"><code class="bg-transparent p-0 block text-inherit" style="font-size: inherit;"><span class="text-purple-400">const</span> <span class="text-accent">yassir</span> = {
  <span class="text-blue-400">role</span>: <span class="text-emerald-400">"developer"</span>,
  <span class="text-blue-400">passion</span>: <span class="text-emerald-400">"creating"</span>,
  <span class="text-blue-400">coffee</span>: <span class="text-amber-400">true</span>,
  <span class="text-blue-400">anime</span>: <span class="text-amber-400">true</span>
};</code></pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Scroll indicator -->
    <div class="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-secondary font-mono text-[0.7rem] opacity-60 hidden lg:flex" style="animation: bounce-scroll 2s ease infinite;">
      <div class="w-[22px] h-[34px] border-2 border-text-secondary rounded-[11px] relative">
        <div class="w-1 h-2 bg-accent rounded-sm absolute top-1.5 left-1/2 -translate-x-1/2" style="animation: scroll-wheel 1.5s ease infinite;"></div>
      </div>
      <span>Scroll</span>
    </div>
  </section>
</template>
