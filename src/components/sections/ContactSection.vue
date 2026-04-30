<script setup>
import { ref } from 'vue'
import SectionHeading from '../ui/SectionHeading.vue'
const form = ref({ name: '', email: '', message: '' })
const focused = ref({ name: false, email: false, message: false })
function handleSubmit() { alert('Terima kasih! Pesan Anda telah terkirim. 🎉'); form.value = { name: '', email: '', message: '' } }
</script>
<template>
  <section id="contact" class="py-24 md:py-16 relative bg-surface transition-colors duration-400">
    <div class="w-full max-w-[1200px] mx-auto px-6 md:px-4">
      <SectionHeading label="// kontak" title="Hubungi Saya" description="Punya pertanyaan, kerja sama, atau ingin ngobrol seputar project? Jangan ragu menghubungi saya."/>
      <form @submit.prevent="handleSubmit" class="max-w-[600px] mx-auto flex flex-col gap-6 scroll-hidden">
        <div v-for="field in ['name', 'email']" :key="field">
          <label :for="`contact-${field}`" class="font-mono text-xs font-semibold block mb-2 transition-colors duration-300" :class="focused[field] || form[field] ? 'text-accent' : 'text-text-secondary'">{{ field === 'name' ? 'Nama' : 'Email' }}</label>
          <input :id="`contact-${field}`" v-model="form[field]" :type="field === 'email' ? 'email' : 'text'" required @focus="focused[field] = true" @blur="focused[field] = false"
            class="w-full px-4 py-3.5 bg-surface-alt text-text-primary font-body text-base rounded-xl outline-none border-[3px] border-manga-border transition-all duration-300 focus:border-accent focus:bg-surface" style="box-shadow: 3px 3px 0px transparent;" @focusin="$el.style.boxShadow='4px 4px 0px var(--color-accent)'" @focusout="$el.style.boxShadow='3px 3px 0px transparent'">
        </div>
        <div>
          <label for="contact-message" class="font-mono text-xs font-semibold block mb-2 transition-colors duration-300" :class="focused.message || form.message ? 'text-accent' : 'text-text-secondary'">Pesan</label>
          <textarea id="contact-message" v-model="form.message" rows="5" required @focus="focused.message = true" @blur="focused.message = false"
            class="w-full px-4 py-3.5 bg-surface-alt text-text-primary font-body text-base rounded-xl outline-none border-[3px] border-manga-border transition-all duration-300 focus:border-accent focus:bg-surface resize-y min-h-[120px]" style="box-shadow: 3px 3px 0px transparent;" @focusin="$el.style.boxShadow='4px 4px 0px var(--color-accent)'" @focusout="$el.style.boxShadow='3px 3px 0px transparent'"></textarea>
        </div>
        <button type="submit" class="w-full inline-flex items-center justify-center gap-2.5 py-4 px-8 bg-accent text-white font-body text-base font-semibold rounded-xl border-[3px] border-manga-border cursor-pointer transition-all duration-200 hover:bg-accent-light hover:-translate-x-0.5 hover:-translate-y-0.5" style="box-shadow: 4px 4px 0px var(--color-manga-border);">
          <span>Kirim Pesan</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="18" height="18"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
        </button>
      </form>
    </div>
  </section>
</template>
