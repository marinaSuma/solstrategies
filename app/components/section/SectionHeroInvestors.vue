<template>
  <section ref="el" class="hero">
    <div class="bg">
      <!-- <MediaImg :provider="false" src="/thumbnail.jpg" alt="Logo" /> -->
        <MediaImg src="/hInv.webp" class="bgA" alt="Background" />
        <!-- <MediaImg src="/hInv2.svg" class="bg2" alt="Background" /> -->
    </div>

    <div class="container">
      <div class="wrapper">
        <div class="title-wrapper">
          <div class="title__text">
            <Text class="title" tag="h1" data-split data-linereveal reveal-notrigger reveal-waitpreloader> Building <strong>Solana’s</strong> <br>Future </Text>
          </div>
        </div>

        <div class="description">
          <div class="description__text">
            <Text class="color-gray" tag="p" variant="body22" data-split data-linereveal reveal-notrigger reveal-waitpreloader reveal-delay="0.15">
              Get insights into our fast-growing Solana infrastructure company
            </Text>
          </div>

          <div class="buttons">
            <ButtonCta class="cta" variant="black">Stay Informed <span class="arrow"><MediaImg src="/arrow-white.svg" alt="Arrow" /></span></ButtonCta>
          </div>
          <div class="small">
            <Text class="color-gray"  data-split data-linereveal reveal-notrigger reveal-waitpreloader reveal-delay="0.18">Subscribe to receive the latest SOL Strategies news and developments.</Text>
          </div>
        </div>
      </div>
    </div>

    
  </section>
</template>

<script setup>

const el = useTemplateRef('el');

let ctx;

const isPreloadDone = usePreloadDone();

onMounted(() => {
  ctx = gsap.context(() => {
    const tlIntro = gsap.timeline({
      paused: !isPreloadDone.value,
    });

    tlIntro.from('.buttons .cta, .logo', {
      y: 40,
      opacity: 0,
      stagger: 0.15,
      willChange: 'transform',
    });

    tlIntro.from(
      '.bg',
      {
        opacity: 0,
        ease: 'sine.out',
        duration: 1.4,
      },
      0,
    );

    const { trigger } = watchTriggerable(isPreloadDone, (value) => {
      if (value) {
        tlIntro.play();
      }
    });

    trigger();
  }, el.value);
});

onUnmounted(() => {
  ctx?.revert();
});
</script>
