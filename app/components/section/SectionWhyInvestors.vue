<template>
  <section ref="el" class="why">
    <div ref="elText" class="text">
      <Text class="title" variant="heading1medium60" data-split data-linereveal> Why <b>Solana Matters</b> </Text>
      <Text class="desc color-gray" data-split data-linereveal reveal-delay="0.15"> The infrastructure layer of tomorrow's finance </Text>
    </div>

    <div ref="elList" class="list">
      <CardWhyInvestors class="content" background="/invcard1.webp">
        <template #desc>
          <p data-split>Solanameets Wall Street</p>
        </template>
      </CardWhyInvestors>
      <CardWhyInvestors class="content" background="/invcard2.webp">
        <template #desc>
          <p data-split>Thank you for subscribing! </p>
        </template>
      </CardWhyInvestors>
      <CardWhyInvestors class="content" background="/invcard3.webp">
        <template #desc>
          <p data-split>Sign up to receiveSol Strategies updates </p>
          
          <ul>
            <li data-split>$160B Solana DEX volume (May 2025)</li>
            <li data-split>Digital asset market growth: $3.3T → $11.7T by 2030</li>
            <li data-split>Key tokenization catalysts emerge.</li>
          </ul>
        </template>
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
