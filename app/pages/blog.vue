<template>
  <div :class="$route.name">
    <SectionHeroBlog />
    <SectionBlog />
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

