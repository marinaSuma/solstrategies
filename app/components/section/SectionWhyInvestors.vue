<template>
  <section ref="el" class="why">
    <div ref="elText" class="text">
      <Text class="title" variant="heading1medium60" data-split data-linereveal> Why <b>Solana Matters</b> </Text>
      <Text class="desc color-gray" data-split data-linereveal reveal-delay="0.15"> The infrastructure layer of tomorrow's finance </Text>
    </div>

    <div ref="elList" class="list">
      <CardWhyInvestors class="content" background="/invcard1.webp">
          <div class="top">
             <MediaImg src="SolLogo.svg" class="logo" alt="Logo" />
          </div>
          <div class="center">
            <div class="title-wrapper">
              <div class="title__text">
                <Text class="title" tag="h1" data-split> Solana <br> meets Wall Street </Text>
              </div>
            </div>
            <Text class="text" data-split>Innovation Built for Long-Term</Text>
          </div>
          <div class="bottom">
            <div class="buttons">
              <ButtonCta class="cta">solstrategies.io</ButtonCta>
              <ButtonCta class="cta" variant="black">JUNE 2025</ButtonCta>
            </div>
            <Text tag="p" class="small" data-split>solstrategies.io</Text>
          </div>
  
      </CardWhyInvestors>


      <CardWhyInvestors class="content" background="/invcard2.webp">
          <div class="top">
             <MediaImg src="logo.png" class="iso" alt="Logo" />
          </div>
          <div class="center">
            <div class="title-wrapper">
              <div class="title__text">
                <Text class="title" tag="h1" data-split> Thank you for subscribing! </Text>
              </div>
            </div>
            <Text tag="p" class="text" data-split>Please check your email to confirm your subscription.</Text>
          </div>
      </CardWhyInvestors>


      <CardWhyInvestors class="content" background="/invcard3.webp">
          <div class="top">
              <div class="title-wrapper">
                <div class="title__text">
                  <Text class="title" tag="h1" data-split>Sign up to receiveSol Strategies updates </Text>
                </div>
              </div>
          </div>
          <div class="bottom">
           
            <Text tag="p" class="text" data-split>Form</Text>
          </div>
          
      </CardWhyInvestors>
    </div>
  </section>
</template>

<script setup>
let ctx;

const el = useTemplateRef('el');
const elText = useTemplateRef('elText');

const isSplitTextDone = useSplitTextDone();

onMounted(() => {
  ctx = gsap.context(() => {
    const slides = el.value.querySelectorAll('.content');

    const getHeightText = elText.value.offsetHeight;

    const tl = gsap.timeline({
      defaults: {
        ease: 'power2.out',
      },
      scrollTrigger: {
        trigger: el.value,
        start: IS_MOBILE.value ? `center+=${getHeightText / 2}px center` : 'top top+=3%',
        end: `+=${(slides.length - 1) * 100}%`,
        pin: true,
        scrub: 0.5,
        invalidateOnRefresh: true,
      },
    });

    slides.forEach((slide, index) => {
      if (index === 0) {
        watchTriggerable(isSplitTextDone, (value) => {
          if (value) {
            const lines = slides[0].querySelectorAll('.line');
            gsap.to(lines, {
              y: 0,
              duration: 1.4,
              stagger: 0.15,
              scrollTrigger: {
                trigger: slides[0],
              },
            });
          }
        });
      } else {
        tl.to(slide, {
          y: `${index * 10}%`,
          onStart: () => {
            const lines = slide.querySelectorAll('.line');
            gsap.delayedCall(0.3, () => {
              gsap.to(lines, {
                y: 0,
                duration: 1.4,
                stagger: 0.15,
                onStart: () => {
                  if (slide.classList.contains('active')) return;
                  slide.classList.add('active');
                },
              });
            });
          },
        });
      }
    });
  }, el.value);
});

onUnmounted(() => {
  ctx?.revert();
});
</script>
