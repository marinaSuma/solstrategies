<template>
  <div :class="$route.name">
    <SectionHero />
    <SectionOverview />
    <SectionGrowth />
    <SectionTestimonial />
    <SectionWhy />
    <SectionMilestones />
    <SectionCta />
  </div>
</template>

<script setup>
import seo from '~~/config/seo.json';

useHead({
  titleTemplate: null,
});

const title = seo.title;

useSeoMeta({
  title: title,
  ogTitle: title,
});
</script>
