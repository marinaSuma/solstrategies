<script setup>
import variables from '~~/config/variables.json';
import seo from '~~/config/seo.json';

const lenis = useNuxtApp().$lenis;

onMounted(() => {
  useResizeReload();

  lenis.scrollTo(0, {
    duration: 0,
    force: true,
    immediate: true,
  });
});

const titleSite = seo.title;
const descriptionSite = seo.description;
const imageSite = seo.thumbnail;

useHead({
  titleTemplate: `%s ― ${titleSite}`,
});

useSeoMeta({
  title: titleSite || seo.title,
  ogTitle: titleSite || seo.title,
  description: descriptionSite || seo.description,
  ogDescription: descriptionSite || seo.description,
  ogImage: imageSite || seo.thumbnail,
  twitterCard: 'summary_large_image',
});
</script>

<template>
  <Html>
    <Body>
      <BaseHeader />

      <BaseIndicator />

      <BasePreloader />

      <PopupCookies />

      <!-- Layout -->
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>

      <!-- Footer -->
      <BaseFooter />
    </Body>
  </Html>
</template>
