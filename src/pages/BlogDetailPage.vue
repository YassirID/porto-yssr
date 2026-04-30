<script setup>
import { computed, onMounted, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useScrollAnimation } from '../composables/useScrollAnimation'
import { blogs } from '../data/blogs'

const route = useRoute()
const router = useRouter()
const { refresh } = useScrollAnimation()
onMounted(() => nextTick(() => refresh()))

const blog = computed(() => blogs.find(b => b.slug === route.params.slug))

function goBack() { router.push('/#blog') }
</script>
<template>
  <div class="min-h-screen">
    <!-- Hero banner -->
    <div class="pt-28 pb-16 transition-colors duration-400" :style="blog ? { background: `linear-gradient(135deg, ${blog.color}15, ${blog.color}35)` } : {}">
      <div class="w-full max-w-[800px] mx-auto px-6 md:px-4">
        <button @click="goBack" class="inline-flex items-center gap-2 font-mono text-sm text-text-secondary hover:text-accent transition-colors mb-6 cursor-pointer bg-transparent border-none scroll-hidden">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
          Kembali
        </button>
        <template v-if="blog">
          <div class="flex items-center gap-3 mb-4 scroll-hidden">
            <span class="font-mono text-[0.72rem] font-semibold px-3 py-1 rounded-md text-white uppercase" :style="{ background: blog.color }">{{ blog.category }}</span>
            <span class="font-mono text-sm text-text-secondary">{{ blog.readTime }}</span>
            <span class="font-mono text-sm text-text-secondary ml-auto">{{ blog.date }}</span>
          </div>
          <h1 class="font-display font-bold tracking-tight text-text-primary scroll-hidden" style="font-size: clamp(2rem, 5vw, 3rem);">{{ blog.title }}</h1>
          <p class="mt-4 text-base text-text-secondary max-w-lg scroll-hidden lg:text-lg">{{ blog.excerpt }}</p>
        </template>
        <div v-else class="text-center py-20">
          <h1 class="font-display text-2xl font-bold text-text-primary">Artikel tidak ditemukan</h1>
          <p class="text-text-secondary mt-2">Artikel yang Anda cari tidak ada.</p>
        </div>
      </div>
    </div>
    <!-- Content -->
    <div v-if="blog" class="py-16 bg-surface transition-colors duration-400">
      <article class="w-full max-w-[800px] mx-auto px-6 md:px-4 scroll-hidden">
        <div class="prose-content">
          <div v-for="(block, i) in blog.content.split('\n\n')" :key="i" class="mb-5">
            <h2 v-if="block.startsWith('## ')" class="font-display text-2xl font-bold text-text-primary mt-10 mb-4 flex items-center gap-2">
              <span class="w-1 h-7 bg-accent rounded-sm"></span>
              {{ block.replace('## ', '') }}
            </h2>
            <h3 v-else-if="block.startsWith('### ')" class="font-display text-lg font-bold text-text-primary mt-6 mb-2">{{ block.replace('### ', '') }}</h3>
            <ul v-else-if="block.startsWith('- ')" class="space-y-2 ml-1">
              <li v-for="(item, j) in block.split('\n')" :key="j" class="flex items-start gap-2 text-base text-text-secondary leading-relaxed">
                <span class="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0"></span>
                <span v-html="item.replace(/^- /, '').replace(/\*\*(.*?)\*\*/g, '<strong class=\'text-text-primary\'>$1</strong>').replace(/`(.*?)`/g, '<code class=\'text-accent bg-accent-soft px-1.5 py-0.5 rounded text-sm font-mono\'>$1</code>')"></span>
              </li>
            </ul>
            <p v-else class="text-base text-text-secondary leading-relaxed" v-html="block.replace(/\*\*(.*?)\*\*/g, '<strong class=\'text-text-primary\'>$1</strong>').replace(/`(.*?)`/g, '<code class=\'text-accent bg-accent-soft px-1.5 py-0.5 rounded text-sm font-mono\'>$1</code>')"></p>
          </div>
        </div>
        <!-- Back button -->
        <div class="mt-16 pt-8 border-t border-divider">
          <button @click="goBack" class="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-body text-sm font-semibold rounded-xl border-[3px] border-manga-border transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 cursor-pointer" style="box-shadow: 3px 3px 0px var(--color-manga-border);">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
            Kembali ke Beranda
          </button>
        </div>
      </article>
    </div>
  </div>
</template>
