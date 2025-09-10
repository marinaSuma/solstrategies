<template>
  <section ref="el" class="milestone">
    <div class="top">
      <div class="text-wrapper">
        <Text tag="h2" variant="heading2" data-split data-linereveal> Meet the team </Text>

        
      </div>

      <div class="navigation navigation-desktop">
        <div class="navigation__btn prev" @click="handlePrev">
          <ButtonIcon>
            <IconArrowslide />
          </ButtonIcon>
        </div>

        <div class="navigation__btn next" @click="handleNext">
          <ButtonIcon>
            <IconArrowslide />
          </ButtonIcon>
        </div>
      </div>
    </div>

    <div class="list fadeinUp">
      <MotionSlider ref="elSlider" :gap-desktop="32">

        <div class="team-item">
          <div class="team-item">
            <div class="img">
              <MediaImg src="/team2.png" alt="Max Kaplan" />
            </div>

            <div class="content">
              <div class="name-container">
                <Text tag="h6" variant="heading2"> Max Kaplan </Text>
                <div class="social">
                  <a href="#" target="_blank" class="social-link">
                    <MediaImg src="/linkedin.svg" alt="Linkedin" />
                  </a>
                  <a href="#" target="_blank" class="social-link">
                    <MediaImg src="/twitter.svg" alt="Twitter" />
                  </a>
                </div>
              </div>

              <!-- Descripción -->
              <div class="text">
                <Text tag="p"> Chief Technology Officer </Text>
              </div>
            </div>
          </div>
        </div>


        <div class="team-item">
          <div class="team-item">
            <div class="img">
              <MediaImg src="/team2.png" alt="Max Kaplan" />
            </div>

            <div class="content">
              <div class="name-container">
                <Text tag="h6" variant="heading2"> Max Kaplan </Text>
                <div class="social">
                  <a href="#" target="_blank" class="social-link">
                    <MediaImg src="/linkedin.svg" alt="Linkedin" />
                  </a>
                  <a href="#" target="_blank" class="social-link">
                    <MediaImg src="/twitter.svg" alt="Twitter" />
                  </a>
                </div>
              </div>

              <!-- Descripción -->
              <div class="text">
                <Text tag="p"> Chief Technology Officer </Text>
              </div>
            </div>
          </div>
        </div>

        



      </MotionSlider>
    </div>

    <div class="navigation navigation-mobile">
      <ButtonIcon class="prev" @click="handlePrev">
        <IconArrowslide />
      </ButtonIcon>

      <ButtonIcon class="next" @click="handleNext">
        <IconArrowslide />
      </ButtonIcon>
    </div>
  </section>
</template>

<script setup>
let ctx;

const el = useTemplateRef('el');
const elSlider = useTemplateRef('elSlider');

const handleNext = () => {
  elSlider.value?.next?.();
};

const handlePrev = () => {
  elSlider.value?.prev?.();
};

onMounted(() => {
  ctx = gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el.value,
      },
    });

    tl.from('.card-about', {
      opacity: 0,
      xPercent: 40,
      ease: 'power2.out',
      duration: 1.0,
      stagger: 0.15,
    });
  }, el.value);
});

onUnmounted(() => {
  ctx?.revert();
});
</script>



<style scoped lang="scss">
.milestone {
  position: relative;

  overflow: hidden;

  padding-top: fn.toVw(276);
  padding-right: fn.toVw($layout-container-desktop);
  padding-left: fn.toVw($layout-container-desktop);

  @include mx.mobile {
    padding-top: fn.toVw(200);
    padding-right: fn.toVw($layout-container-mobile);
    padding-left: fn.toVw($layout-container-mobile);
  }
}

.top {
  display: flex;
  gap: fn.toVw(5);
  justify-content: space-between;

  .text-wrapper {
    display: flex;
    gap: fn.toVw(5);
  }

  .shape {
    width: fn.toVw(140);
    margin-top: fn.toVw(-5);

    @include mx.mobile {
      width: fn.toVw(108);
      margin-top: fn.toVw(-8);
    }
  }
}

.list {
  margin-top: fn.toVw(57);

  @include mx.mobile {
    margin-top: fn.toVw(40);
  }
}

.navigation {
  display: flex;
  gap: fn.toVw(16);
  justify-content: flex-end;
  margin-top: fn.toVw(10);

  &.navigation-desktop {
    display: flex;

    @include mx.mobile {
      display: none;
    }
  }

  &.navigation-mobile {
    display: none;

    @include mx.mobile {
      display: flex;
    }
  }

  .next {
    transform: scaleX(-1);
  }
}
</style>
