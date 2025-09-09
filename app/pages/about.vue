<template>
  <div :class="$route.name">
    <SectionHeroAbout />
    <SectionAboutProgramable />
    <SectionTeam />
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

onMounted(() => {
  ctx = gsap.context(() => {
    const fadeinUp = document.querySelectorAll(".fadeinUp");

    gsap.set(fadeinUp, { opacity: 0, y: 40 });

    fadeinUp.forEach((el) => {
      gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start:"top 80%",
          end:"bottom 70%",
          toggleActions:"play none none reverse",
        }
      }).to(el, { opacity: 1, y: 0, duration: 0.6 });
    });
  });
});

onUnmounted(() => {
  ctx?.revert();
});
</script>



