<template>
  <div :class="$route.name">
    <SectionAboutSingleTeam />
    <SectionAboutSingleMeet />
    <SectionCta />
  </div>
</template>

<script setup>
import seo from '~~/config/seo.json';
let ctx;

onMounted(async () => {
  await nextTick(); // espera que todo el DOM del componente hijo esté renderizado
  const fadeinUp = document.querySelectorAll(".fadeinUp");

  gsap.set(fadeinUp, { opacity: 0, y: 40 });

  fadeinUp.forEach(el => {
    gsap.timeline({ scrollTrigger: { trigger: el, start:"top 80%" } })
        .to(el, { opacity: 1, y: 0, duration: 0.6 });
  });


});

onUnmounted(() => {
  ctx?.revert();
});

</script>



