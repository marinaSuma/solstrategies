<template>
  <section ref="el" class="singlemeet">
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
         <CardTeam linkedin="https://linkedin.com/in/" twitter="https://twitter.com/"> 
          <template #img>  <MediaImg src="/team2.png" alt="Max Kaplan" /> </template> 
          <template #title> Max Kaplan </template> 
          <template #desc> Chief Technology Officer </template> 
        </CardTeam> 

        <CardTeam linkedin="https://linkedin.com/in/" twitter="https://twitter.com/"> 
          <template #img>  <MediaImg src="/team3.png" alt="Max Kaplan" /> </template> 
          <template #title> Doug Harris </template> 
          <template #desc> Chief Technology Officer </template> 
        </CardTeam> 

        <CardTeam linkedin="https://linkedin.com/in/" twitter="https://twitter.com/"> 
          <template #img>  <MediaImg src="/team4.png" alt="Max Kaplan" /> </template> 
          <template #title>Michael Hubbard </template> 
          <template #desc> Chief Technology Officer </template> 
        </CardTeam> 

        <CardTeam linkedin="https://linkedin.com/in/" twitter="https://twitter.com/"> 
          <template #img>  <MediaImg src="/team5.png" alt="Max Kaplan" /> </template> 
          <template #title> Andrew McDonald </template> 
          <template #desc> Chief Technology Officer </template> 
        </CardTeam> 

        <CardTeam linkedin="https://linkedin.com/in/" twitter="https://twitter.com/"> 
          <template #img>  <MediaImg src="/team2.png" alt="Max Kaplan" /> </template> 
          <template #title> Max Kaplan </template> 
          <template #desc> Chief Technology Officer </template> 
        </CardTeam> 


        <CardTeam linkedin="https://linkedin.com/in/" twitter="https://twitter.com/"> 
          <template #img>  <MediaImg src="/team3.png" alt="Max Kaplan" /> </template> 
          <template #title> Doug Harris </template> 
          <template #desc> Chief Technology Officer </template> 
        </CardTeam> 

        <CardTeam linkedin="https://linkedin.com/in/" twitter="https://twitter.com/"> 
          <template #img>  <MediaImg src="/team4.png" alt="Max Kaplan" /> </template> 
          <template #title>Michael Hubbard </template> 
          <template #desc> Chief Technology Officer </template> 
        </CardTeam> 



        <!-- <div class="team-item">
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

            <div class="text">
              <Text tag="p"> Chief Technology Officer </Text>
            </div>
          </div>
        </div> -->




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
.singlemeet {
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
}









</style>
