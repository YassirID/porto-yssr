<script setup>
import SectionHeading from '../ui/SectionHeading.vue'
import TimelineItem from '../ui/TimelineItem.vue'
import { timeline } from '../../data/timeline'
</script>
<template>
  <section id="timeline" class="py-24 md:py-16 relative bg-surface-alt transition-colors duration-400">
    <div class="w-full max-w-[1200px] mx-auto px-6 md:px-4">
      <SectionHeading label="// perjalanan" title="Milestone & Journey" description="Dari awal belajar hingga sekarang — timeline pertumbuhan saya sebagai developer."/>
      <div class="max-w-[700px] mx-auto relative pl-8 md:pl-8">
        <div class="absolute left-[55px] md:left-[55px] top-0 bottom-0 w-[3px] rounded-sm" style="background: linear-gradient(to bottom, var(--color-accent), var(--color-accent-glow), transparent);"></div>
        <TimelineItem v-for="(item, i) in timeline" :key="i" :item="item" :index="i" :isLeft="i % 2 === 0"/>
      </div>
    </div>
  </section>
</template>
