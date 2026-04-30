<script setup>
import { ref, computed, onMounted, nextTick } from 'vue'
import { useScrollAnimation } from '../composables/useScrollAnimation'
import FilterTabs from '../components/ui/FilterTabs.vue'
import CertificateCard from '../components/ui/CertificateCard.vue'
import Lightbox from '../components/ui/Lightbox.vue'
import { credentials, credentialCategories } from '../data/credentials'

const { refresh } = useScrollAnimation()
onMounted(() => nextTick(() => refresh()))

const activeCategory = ref('Semua')
const selectedCert = ref(null)
const showLightbox = ref(false)

const filtered = computed(() => {
  if (activeCategory.value === 'Semua') return credentials
  return credentials.filter(c => c.category === activeCategory.value)
})

function openLightbox(cert) { selectedCert.value = cert; showLightbox.value = true }
function closeLightbox() { showLightbox.value = false; selectedCert.value = null }
</script>
<template>
  <div class="min-h-screen">
    <!-- Hero banner -->
    <div class="pt-28 pb-16 bg-surface-alt transition-colors duration-400">
      <div class="w-full max-w-[1200px] mx-auto px-6 md:px-4 text-center">
        <span class="font-mono text-xs font-medium tracking-widest uppercase text-accent scroll-hidden">// sertifikasi</span>
        <h1 class="font-display font-bold mt-3 tracking-tight text-text-primary scroll-hidden" style="font-size: clamp(2rem, 5vw, 3rem);">Sertifikasi & Kredensial</h1>
        <p class="mt-4 text-base text-text-secondary max-w-lg mx-auto text-center scroll-hidden lg:text-lg">Koleksi sertifikat dari perjalanan belajar saya — dari web development hingga networking.</p>
      </div>
    </div>
    <!-- Content -->
    <div class="py-16 bg-surface transition-colors duration-400">
      <div class="w-full max-w-[1200px] mx-auto px-6 md:px-4">
        <FilterTabs :categories="credentialCategories" :active="activeCategory" @select="activeCategory = $event"/>
        <TransitionGroup name="project-list" tag="div" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          <CertificateCard v-for="cert in filtered" :key="cert.id" :cert="cert" @view="openLightbox"/>
        </TransitionGroup>
      </div>
    </div>
    <!-- Lightbox -->
    <Lightbox :show="showLightbox" :title="selectedCert?.title || ''" :color="selectedCert?.color || '#0d9488'" @close="closeLightbox">
      <div v-if="selectedCert" class="mt-5 space-y-3">
        <div class="flex items-center gap-2">
          <div class="w-3 h-3 rounded-full" :style="{ background: selectedCert.color }"></div>
          <span class="font-mono text-sm text-accent font-medium">{{ selectedCert.issuer }}</span>
          <span class="font-mono text-xs text-text-secondary ml-auto">{{ selectedCert.date }}</span>
        </div>
        <p class="text-base text-text-secondary leading-relaxed">{{ selectedCert.description }}</p>
        <a :href="selectedCert.verifyUrl" target="_blank" class="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white font-mono text-sm font-semibold rounded-lg transition-all duration-200 hover:bg-accent-light border-[3px] border-manga-border" style="box-shadow: 3px 3px 0px var(--color-manga-border);">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"/></svg>
          Verifikasi Kredensial
        </a>
      </div>
    </Lightbox>
  </div>
</template>
