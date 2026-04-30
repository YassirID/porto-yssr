<script setup>
import { onMounted, nextTick } from 'vue'
import { useScrollAnimation } from '../composables/useScrollAnimation'
import HeroSection from '../components/sections/HeroSection.vue'
import AboutSection from '../components/sections/AboutSection.vue'
import TechStack from '../components/sections/TechStack.vue'
import WorkflowSection from '../components/sections/WorkflowSection.vue'
import PortfolioSection from '../components/sections/PortfolioSection.vue'
import BentoStatsSection from '../components/sections/BentoStatsSection.vue'
import FeaturedSection from '../components/sections/FeaturedSection.vue'
import TimelineSection from '../components/sections/TimelineSection.vue'
import CommunitySection from '../components/sections/CommunitySection.vue'
import BlogSection from '../components/sections/BlogSection.vue'
import ContactSection from '../components/sections/ContactSection.vue'

const { refresh } = useScrollAnimation()
onMounted(() => nextTick(() => refresh()))
</script>
<template>
  <div>
    <HeroSection />
    <AboutSection />
    <TechStack />
    <WorkflowSection />
    <PortfolioSection />
    <BentoStatsSection />
    <FeaturedSection />
    <TimelineSection />
    <CommunitySection />
    <BlogSection />
    <ContactSection />
  </div>
</template>
