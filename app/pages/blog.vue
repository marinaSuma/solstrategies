<template>
  <div :class="$route.name">
    <div class="blog-bootstrap-wrapper page-blog">
      <SectionBlog />
    </div>
    <SectionCta />
  </div>
</template>

<script setup>
import SectionBlog from '~/components/section/SectionBlog.vue'
import SectionCta from '~/components/section/SectionCta.vue'
import seo from '~~/config/seo.json'
import '~/assets/styles/blogstyles.scss' 

const title = seo.title

useSeoMeta({
  title: title,
  ogTitle: title,
})
</script>

