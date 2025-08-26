<template>
  <div :class="$route.name">
    <!-- Solo se aplica Bootstrap dentro de este wrapper -->
    <div class="blog-bootstrap-wrapper">
      <SectionHeroBlog />
      <SectionBlog />
    </div>

    <SectionCta />
  </div>
</template>

<script setup>
import SectionHeroBlog from '~/components/section/SectionHeroBlog.vue';
import SectionBlog from '~/components/section/SectionBlog.vue';
import SectionCta from '~/components/section/SectionCta.vue';
import seo from '~~/config/seo.json';

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
/* Opcional: estilos globales solo para el wrapper de blog */
.blog-bootstrap-wrapper {
  /* si quieres padding extra o fondo */
}
</style>
