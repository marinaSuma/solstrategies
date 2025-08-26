<template>
  <div :class="$route.name">
    <div class="blog-bootstrap-wrapper">
      <SectionBlog />
    </div>
    <SectionCta />
  </div>
</template>

<script setup>
import SectionHeroBlog from '~/components/section/SectionHeroBlog.vue'
import SectionBlog from '~/components/section/SectionBlog.vue'
import SectionCta from '~/components/section/SectionCta.vue'
import seo from '~~/config/seo.json'

const title = seo.title

useSeoMeta({
  title: title,
  ogTitle: title,
})
</script>

<style scoped>
/* Aquí puedes poner estilos que solo afecten al wrapper */
.blog-bootstrap-wrapper {
  /* padding o margen si lo necesitas */
}
</style>
