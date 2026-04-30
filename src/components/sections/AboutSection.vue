<script setup>
import SectionHeading from '../ui/SectionHeading.vue'
</script>
<template>
  <section id="about" class="py-24 md:py-16 relative bg-surface-alt transition-colors duration-400">
    <div class="w-full max-w-[1200px] mx-auto px-6 md:px-4">
      <SectionHeading label="// tentang saya" title="Dari Rasa Ingin Tahu Menjadi Karya Nyata" align="left"/>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <!-- Left -->
        <div class="flex flex-col gap-4 scroll-hidden from-left">
          <p class="text-base leading-relaxed lg:text-lg">Halo! Saya <strong class="text-text-primary">Yassir</strong>, seorang pelajar dan pengembang front-end yang mencintai dunia pemrograman. Saya percaya bahwa setiap baris kode adalah langkah kecil menuju solusi besar.</p>
          <p class="text-base leading-relaxed lg:text-lg">Saya suka belajar hal baru, mengeksplorasi teknologi, dan menciptakan tampilan web yang tidak hanya menarik, tapi juga bermanfaat. Di luar coding, saya juga aktif di bidang IT infrastructure dan hardware.</p>
          <div class="flex gap-4 mt-6 flex-col sm:flex-row stagger-children">
            <div class="flex-1 p-5 rounded-xl bg-surface text-center border-[3px] border-manga-border transition-all duration-300 hover:border-accent hover:-translate-y-0.5" style="box-shadow: 5px 5px 0px var(--color-manga-border);" @mouseenter="$el.style.boxShadow='7px 7px 0px var(--color-accent)'" @mouseleave="$el.style.boxShadow='5px 5px 0px var(--color-manga-border)'">
              <span class="font-display text-3xl font-bold text-accent block">10+</span>
              <span class="font-mono text-[0.72rem] uppercase text-text-secondary">Projects</span>
            </div>
            <div class="flex-1 p-5 rounded-xl bg-surface text-center border-[3px] border-manga-border transition-all duration-300 hover:border-accent hover:-translate-y-0.5" style="box-shadow: 5px 5px 0px var(--color-manga-border);" @mouseenter="$el.style.boxShadow='7px 7px 0px var(--color-accent)'" @mouseleave="$el.style.boxShadow='5px 5px 0px var(--color-manga-border)'">
              <span class="font-display text-3xl font-bold text-accent block">8+</span>
              <span class="font-mono text-[0.72rem] uppercase text-text-secondary">Sertifikat</span>
            </div>
            <div class="flex-1 p-5 rounded-xl bg-surface text-center border-[3px] border-manga-border transition-all duration-300 hover:border-accent hover:-translate-y-0.5" style="box-shadow: 5px 5px 0px var(--color-manga-border);" @mouseenter="$el.style.boxShadow='7px 7px 0px var(--color-accent)'" @mouseleave="$el.style.boxShadow='5px 5px 0px var(--color-manga-border)'">
              <span class="font-display text-3xl font-bold text-accent block">3+</span>
              <span class="font-mono text-[0.72rem] uppercase text-text-secondary">Tahun Belajar</span>
            </div>
          </div>
        </div>
        <!-- Right - personality.json card -->
        <div class="scroll-hidden from-right">
          <div class="rounded-xl overflow-hidden bg-surface border-[3px] border-manga-border transition-all duration-400 hover:border-accent" style="box-shadow: 6px 6px 0px var(--color-manga-border);" @mouseenter="$el.style.boxShadow='8px 8px 0px var(--color-accent)'" @mouseleave="$el.style.boxShadow='6px 6px 0px var(--color-manga-border)'">
            <div class="flex items-center gap-3 px-4 py-3 border-b-2 border-divider">
              <div class="flex gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-red-500"></span><span class="w-2.5 h-2.5 rounded-full bg-amber-500"></span><span class="w-2.5 h-2.5 rounded-full bg-green-500"></span></div>
              <span class="font-mono text-[0.72rem] font-medium tracking-widest uppercase text-accent">personality.json</span>
            </div>
            <pre class="p-5 m-0 font-mono text-sm leading-relaxed text-text-secondary overflow-x-auto"><code class="bg-transparent p-0 block text-inherit" style="font-size: inherit;">{
  <span class="text-blue-400">"name"</span>: <span class="text-emerald-400">"Yassir"</span>,
  <span class="text-blue-400">"role"</span>: <span class="text-emerald-400">"Student &amp; Developer"</span>,
  <span class="text-blue-400">"location"</span>: <span class="text-emerald-400">"Cimahi, Indonesia"</span>,
  <span class="text-blue-400">"skills"</span>: [
    <span class="text-emerald-400">"Web Development"</span>,
    <span class="text-emerald-400">"IT Infrastructure"</span>,
    <span class="text-emerald-400">"Networking"</span>
  ],
  <span class="text-blue-400">"currentFocus"</span>: <span class="text-emerald-400">"Vue.js"</span>,
  <span class="text-blue-400">"funFact"</span>: <span class="text-emerald-400">"Desain saya terinspirasi anime &amp; manga"</span>
}</code></pre>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
