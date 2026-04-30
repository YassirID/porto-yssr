<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import ThemeToggle from '../ui/ThemeToggle.vue'
import { useCommandPalette } from '../../composables/useCommandPalette'

const { open: openPalette } = useCommandPalette()

const isOpen = ref(false)
const isScrolled = ref(false)
const activeSection = ref('home')
const dropdownOpen = ref(false)
const route = useRoute()

const isHome = computed(() => route.path === '/')

const scrollLinks = [
  { id: 'home', label: 'Beranda' },
  { id: 'about', label: 'Tentang' },
  { id: 'techstack', label: 'Skills' },
  { id: 'portfolio', label: 'Portfolio' },
]

const pageLinks = [
  { label: 'Sertifikasi', path: '/credentials', svgPath: 'M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z' },
  { label: 'IT Infra', path: '/it-infrastructure', svgPath: 'M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z' },
  { label: 'Digital Lab', path: '/lab', svgPath: 'M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0012 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 5.21c.14.519-.273 1.01-.814.99a41.39 41.39 0 01-8.39 0c-.54.02-.952-.471-.813-.99L12.8 16.1' },
]

const endScrollLinks = [
  { id: 'contact', label: 'Kontak' },
]

const isOnSubPage = computed(() => pageLinks.some(l => route.path === l.path))

function getScrollHref(id) {
  return isHome.value ? `#${id}` : `/#${id}`
}

function toggleMenu() { isOpen.value = !isOpen.value }
function closeMenu() { isOpen.value = false }
function closeDropdown() { dropdownOpen.value = false }

function onScroll() {
  isScrolled.value = window.scrollY > 50
  if (!isHome.value) return
  const allIds = [...scrollLinks, ...endScrollLinks].map(l => l.id)
  const sections = allIds.map(id => document.getElementById(id)).filter(Boolean)
  for (let i = sections.length - 1; i >= 0; i--) {
    if (sections[i].getBoundingClientRect().top <= 150) { activeSection.value = sections[i].id; break }
  }
}

function onClickOutside(e) {
  if (dropdownOpen.value && !e.target.closest('.dropdown-explore')) {
    dropdownOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  document.addEventListener('click', onClickOutside)
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  document.removeEventListener('click', onClickOutside)
})
</script>
<template>
  <header class="fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-400"
    :class="isScrolled ? 'py-2 border-b border-divider' : ''"
    :style="isScrolled ? { background: 'var(--color-surface-glass)', backdropFilter: 'blur(20px) saturate(180%)', WebkitBackdropFilter: 'blur(20px) saturate(180%)' } : {}">
    <div class="w-full max-w-[1200px] mx-auto px-6 md:px-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <router-link to="/" class="font-mono text-xl font-bold text-text-primary flex items-center gap-0.5 transition-colors duration-300 hover:text-accent" @click="closeMenu">
          <span class="text-accent text-2xl">{</span><span class="mx-0.5">Yassir_ID</span><span class="text-accent text-2xl">}</span>
        </router-link>

        <!-- Desktop nav -->
        <nav class="hidden md:flex items-center gap-1">
          <!-- Scroll-based links -->
          <a v-for="link in scrollLinks" :key="link.id" :href="getScrollHref(link.id)"
            class="font-body text-sm font-medium px-3 py-1.5 rounded-lg transition-all duration-300 relative"
            :class="isHome && activeSection === link.id ? 'text-accent' : 'text-text-secondary hover:text-accent'">
            {{ link.label }}
            <span v-if="isHome && activeSection === link.id" class="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-[3px] bg-accent rounded-sm"></span>
          </a>

          <!-- Explore Dropdown -->
          <div class="relative dropdown-explore">
            <button @click="dropdownOpen = !dropdownOpen"
              class="font-body text-sm font-medium px-3 py-1.5 rounded-lg transition-all duration-300 relative flex items-center gap-1 cursor-pointer bg-transparent border-none"
              :class="isOnSubPage || dropdownOpen ? 'text-accent' : 'text-text-secondary hover:text-accent'">
              Explore
              <svg class="w-3.5 h-3.5 transition-transform duration-200" :class="dropdownOpen ? 'rotate-180' : ''" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>
              <span v-if="isOnSubPage" class="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-[3px] bg-accent rounded-sm"></span>
            </button>
            <!-- Dropdown menu -->
            <Transition name="fade">
              <div v-if="dropdownOpen" class="absolute top-full right-0 mt-2 w-52 rounded-xl bg-surface border-[3px] border-manga-border overflow-hidden" style="box-shadow: 5px 5px 0px var(--color-manga-border);">
                <router-link v-for="link in pageLinks" :key="link.path" :to="link.path" @click="closeDropdown"
                  class="flex items-center gap-3 px-4 py-3 text-sm font-medium transition-all duration-200 border-b border-divider last:border-b-0"
                  :class="route.path === link.path ? 'text-accent bg-accent-soft' : 'text-text-secondary hover:text-accent hover:bg-accent-soft'">
                  <svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path :d="link.svgPath"/></svg>
                  <span>{{ link.label }}</span>
                  <svg v-if="route.path === link.path" class="w-3.5 h-3.5 ml-auto text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 13l4 4L19 7"/></svg>
                </router-link>
              </div>
            </Transition>
          </div>

          <!-- End scroll links (Kontak) -->
          <a v-for="link in endScrollLinks" :key="link.id" :href="getScrollHref(link.id)"
            class="font-body text-sm font-medium px-3 py-1.5 rounded-lg transition-all duration-300 relative"
            :class="isHome && activeSection === link.id ? 'text-accent' : 'text-text-secondary hover:text-accent'">
            {{ link.label }}
            <span v-if="isHome && activeSection === link.id" class="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-[3px] bg-accent rounded-sm"></span>
          </a>

          <!-- Ctrl+K badge -->
          <button @click="openPalette" class="ml-1 flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-divider text-text-secondary/60 hover:border-accent hover:text-accent transition-all duration-200 cursor-pointer bg-transparent text-xs font-mono">
            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
            <kbd class="text-[0.6rem]">⌘K</kbd>
          </button>
          <ThemeToggle />
        </nav>

        <!-- Mobile hamburger -->
        <button class="flex md:hidden flex-col gap-[5px] bg-transparent border-none cursor-pointer p-2 z-[110]" @click="toggleMenu" aria-label="Menu">
          <span class="block w-6 h-[3px] bg-text-primary rounded-sm transition-all duration-300" :class="isOpen ? 'rotate-45 translate-y-2' : ''"></span>
          <span class="block w-6 h-[3px] bg-text-primary rounded-sm transition-all duration-300" :class="isOpen ? 'opacity-0' : ''"></span>
          <span class="block w-6 h-[3px] bg-text-primary rounded-sm transition-all duration-300" :class="isOpen ? '-rotate-45 -translate-y-2' : ''"></span>
        </button>
      </div>
    </div>

    <!-- Mobile nav -->
    <Transition name="slide-up">
      <nav v-if="isOpen" class="flex flex-col gap-1 px-6 py-4 pb-6 bg-surface border-b-[3px] border-accent md:hidden">
        <a v-for="link in scrollLinks" :key="link.id" :href="getScrollHref(link.id)" @click="closeMenu"
          class="text-base font-medium px-4 py-3 rounded-lg transition-all duration-200"
          :class="isHome && activeSection === link.id ? 'text-accent bg-accent-soft' : 'text-text-secondary hover:text-accent hover:bg-accent-soft'">
          {{ link.label }}
        </a>
        <!-- Page links (shown flat on mobile) -->
        <div class="mt-2 mb-1 px-4">
          <span class="font-mono text-[0.65rem] uppercase tracking-widest text-accent/60">Explore</span>
        </div>
        <router-link v-for="link in pageLinks" :key="link.path" :to="link.path" @click="closeMenu"
          class="flex items-center gap-2.5 text-base font-medium px-4 py-3 rounded-lg transition-all duration-200"
          :class="route.path === link.path ? 'text-accent bg-accent-soft' : 'text-text-secondary hover:text-accent hover:bg-accent-soft'">
          <svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path :d="link.svgPath"/></svg>
          <span>{{ link.label }}</span>
        </router-link>
        <a v-for="link in endScrollLinks" :key="link.id" :href="getScrollHref(link.id)" @click="closeMenu"
          class="text-base font-medium px-4 py-3 rounded-lg transition-all duration-200 text-text-secondary hover:text-accent hover:bg-accent-soft">
          {{ link.label }}
        </a>
        <div class="px-4 py-3"><ThemeToggle /></div>
      </nav>
    </Transition>
  </header>
</template>
