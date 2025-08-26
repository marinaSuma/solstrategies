<template>
  <div :class="$route.name">
    <SectionHeroBlog />
    <SectionBlog />
    <SectionCta />
  </div>
</template>

<script setup>
import seo from '~~/config/seo.json';
import { useHead } from '#imports'

// Configuración de SEO
useHead({
  titleTemplate: null,
  // Agregamos Bootstrap CSS y JS solo para esta página
  link: [
    {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css'
    }
  ],
  script: [
    {
      src: 'https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.bundle.min.js',
      defer: true
    }
  ]
})

const title = seo.title;

useSeoMeta({
  title: title,
  ogTitle: title,
});
</script>
