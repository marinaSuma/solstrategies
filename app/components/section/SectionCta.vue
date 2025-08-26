<template>
  <section ref="el" class="cta">
    <div ref="elTextWrapper" class="text">
      <div class="bg">
        <MediaImg src="/cta-bg.png" alt="CTA Background" />
      </div>

      <Text class="title" variant="heading1light120" tag="h2" data-split data-linereveal> Take a stake <b>in Solana</b> </Text>
      <Text class="title is--clone" variant="heading1light120" tag="span" data-split data-linereveal> Take a stake <b>in Solana</b> </Text>
    </div>

    <div class="buttons">
      <ButtonCta class="cta" variant="black">Stake with Us</ButtonCta>
      <ButtonCta class="cta">Investor Relations</ButtonCta>
    </div>

    <MediaImg class="shift-bg left" src="/shift-blue.png" alt="Shift Blue" />
    <MediaImg class="shift-bg right" src="/shift-orange.png" alt="Shift Orange" />
  </section>
</template>

<script setup>
let ctx;

const el = useTemplateRef('el');

const elTextWrapper = useTemplateRef('elTextWrapper');

onMounted(() => {
  ctx = gsap.context(() => {
    gsap.to('.shift-bg ', {
      rotate: 360,
      repeat: -1,
      duration: 15,
      ease: 'none',
      transformOrigin: 'center center',
    });

    const tlLeft = gsap.timeline({
      repeat: -1,
      repeatRefresh: true,
      defaults: { ease: 'power4.out' },
    });

    tlLeft.to('.shift-bg.left ', { opacity: 0, duration: () => gsap.utils.random(1, 4) });
    tlLeft.to('.shift-bg.left ', { opacity: 1, duration: () => gsap.utils.random(1, 4) });

    const tlRight = gsap.timeline({
      repeat: -1,
      repeatRefresh: true,
      defaults: { ease: 'power4.out' },
    });

    tlRight.to('.shift-bg.right ', { opacity: 0, duration: () => gsap.utils.random(1, 4) });
    tlRight.to('.shift-bg.right ', { opacity: 1, duration: () => gsap.utils.random(1, 4) });

    const mouseTitleMove = () => {
      const xTo = gsap.quickTo('.title.is--clone', '--xpercent', {
        duration: 0.6,
        ease: 'sine.out',
      });

      const yTo = gsap.quickTo('.title.is--clone', '--ypercent', {
        duration: 0.6,
        ease: 'sine.out',
      });

      useEventListener(el.value, 'mousemove', (e) => {
        const bound = elTextWrapper.value?.getBoundingClientRect();
        if (!bound) return;

        const xPercent = gsap.utils.clamp(0, 100, gsap.utils.mapRange(bound.left, bound.right, 0, 100, e.clientX));
        const yPercent = gsap.utils.clamp(0, 100, gsap.utils.mapRange(bound.top, bound.bottom, 0, 100, e.clientY));

        xTo(xPercent);
        yTo(yPercent);
      });
    };

    if (!IS_MOBILE.value) {
      mouseTitleMove();
    }
  }, el.value);
});

onUnmounted(() => {
  ctx?.revert();
});
</script>

<style scoped lang="scss">
.cta {
  position: relative;

  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: fn.toVw(50);
  align-items: center;
  justify-content: center;

  padding-top: fn.toVw(307);
  padding-bottom: fn.toVw(223);

  text-align: center;

  @include mx.mobile {
    gap: fn.toVw(43);
    padding-top: fn.toVw(212);
    padding-bottom: fn.toVw(148);
  }
}

.text {
  position: relative;

  .bg {
    position: absolute;
    z-index: -1;
    bottom: fn.toVw(-90);
    left: fn.toVw(-80);

    width: fn.toVw(773);

    @include mx.mobile {
      bottom: fn.toVw(-70);
      left: fn.toVw(-53);
      width: fn.toVw(500);
      opacity: 0.8;
    }
  }

  .title {
    user-select: none;

    display: block;

    width: fn.toVw(650);

    line-height: 0.9;

    transition: transform $transition-default;

    @include mx.mobile {
      width: 100%;
    }

    b,
    &:deep(b) {
      font-weight: 500;
    }

    &.is--clone,
    &:deep(.is--clone) {
      --xpercent: 50%;
      --ypercent: 50%;

      position: absolute;
      top: 0;
      left: 0;

      width: fn.toVw(650);

      font-size: fn.toVw(120);
      color: #fffd98;

      mask-image: radial-gradient(circle at var(--xpercent) var(--ypercent), #000 20%, transparent 50%);

      @include mx.mobile {
        display: none;
      }
    }
  }
}

.buttons {
  display: flex;
  gap: fn.toVw(25);

  @include mx.mobile {
    gap: fn.toVw(20);
  }

  .cta {
    width: fn.toVw(175);

    @include mx.mobile {
      width: fn.toVw(140);
    }
  }

  &:deep(.btn) {
    padding: fn.toVw(16) 0;
  }
}

.shift-bg {
  position: absolute;
  z-index: -1;

  &.left {
    left: fn.toVw(320);

    @include mx.mobile {
      left: fn.toVw(0);
    }
  }

  &.right {
    right: fn.toVw(320);

    @include mx.mobile {
      right: 0;
    }
  }

  &.left,
  &.right {
    width: fn.toVw(628);
    height: auto;

    @include mx.mobile {
      width: fn.toVw(380);
    }
  }
}
</style>
