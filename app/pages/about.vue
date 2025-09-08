<template>
  <div :class="$route.name">
    <SectionHeroAbout />
    <SectionCta />
  </div>
</template>

<script setup>
import seo from '~~/config/seo.json';
import '~/assets/styles/aboutStyles.scss' 

useHead({
  titleTemplate: null,
});

const title = seo.title;

useSeoMeta({
  title: title,
  ogTitle: title,
});
</script>
