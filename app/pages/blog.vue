<template>
  <div :class="$route.name">
    <!-- Wrapper donde se aplica Bootstrap -->
    <div class="blog-bootstrap-wrapper">
      <SectionHeroBlog />
      <SectionBlog />
    </div>

    <!-- Sección CTA fuera del wrapper de Bootstrap -->
    <SectionCta />
  </div>
</template>

<script setup>
import SectionHeroBlog from '~/components/section/SectionHeroBlog.vue';
import SectionBlog from '~/components/section/SectionBlog.vue';
import SectionCta from '~/components/section/SectionCta.vue';

import seo from '~~/config/seo.json';
import { useHead } from '#imports';

// Solo la grilla de Bootstrap, sin afectar header/footer
import 'bootstrap/dist/css/bootstrap-grid.min.css';

const title = seo.title;

useHead({
  titleTemplate: null,
});

useSeoMeta({
  title: title,
  ogTitle: title,
});
</script>

<style scoped>
/* Aquí solo puedes poner ajustes globales dentro del wrapper si es necesario */
.blog-bootstrap-wrapper {
  /* ejemplo: padding extra para la sección */
}
</style>
