<template>
  <div :class="$route.name">
    <SectionHeroInvestors />
    <SectionWhyInvestors />
    <SectionOverviewInvestors />
    <SectionMilestonesInvestors />
    <SectionCta />
  </div>
</template>

<script setup>
import seo from '~~/config/seo.json';
import '~/assets/styles/investorStyles.scss' 

useHead({
  titleTemplate: null,
});

const title = seo.title;

useSeoMeta({
  title: title,
  ogTitle: title,
});
</script>
