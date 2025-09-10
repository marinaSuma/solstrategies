<template>
  <div :class="$route.name">
    <SectionAboutHero />
    <SectionAboutProgramable />
    <SectionAboutTeam />
    <SectionCta />
  </div>
</template>

<script setup>
import seo from '~~/config/seo.json';

useHead({ titleTemplate: null });

const title = seo.title;
useSeoMeta({
  title,
  ogTitle: title,
});

// Animación global fadeinUp
let ctx;

import { nextTick } from 'vue';

onMounted(async () => {
  await nextTick(); // espera que todo el DOM del componente hijo esté renderizado
  const fadeinLeft = document.querySelectorAll(".fadeinLeft");
  const fadeinUp = document.querySelectorAll(".fadeinUp");

  gsap.set(fadeinUp, { opacity: 0, y: 40 });
  gsap.set(fadeinLeft, { opacity: 0, x: -40 });

  fadeinUp.forEach(el => {
    gsap.timeline({ scrollTrigger: { trigger: el, start:"top 80%" } })
        .to(el, { opacity: 1, y: 0, duration: 0.6 });
  });

  fadeinLeft.forEach(el => {
    gsap.timeline({ scrollTrigger: { trigger: el, start:"top 80%" } })
        .to(el, { opacity: 1, x: 0, duration: 0.6 });
  });
});

onUnmounted(() => {
  ctx?.revert();
});
</script>



