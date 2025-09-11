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
          <template #img> 
            <a href="#"><MediaImg src="/team2.png" alt="Max Kaplan" /></a>
          </template> 
          <template #title> Max Kaplan </template> 
          <template #desc> Chief Technology Officer </template> 
        </CardTeam> 

        <CardTeam linkedin="https://linkedin.com/in/" twitter="https://twitter.com/"> 
          <template #img>   <a href="#"><MediaImg src="/team3.png" alt="Max Kaplan" /></a> </template> 
          <template #title> Doug Harris </template> 
          <template #desc> Chief Technology Officer </template> 
        </CardTeam> 

        <CardTeam linkedin="https://linkedin.com/in/" twitter="https://twitter.com/"> 
          <template #img>   <a href="#"><MediaImg src="/team4.png" alt="Max Kaplan" /></a> </template> 
          <template #title>Michael Hubbard </template> 
          <template #desc> Chief Strategy Officer and Board Member </template> 
        </CardTeam> 

        <CardTeam linkedin="https://linkedin.com/in/" twitter="https://twitter.com/"> 
          <template #img>   <a href="#"><MediaImg src="/team5.png" alt="Max Kaplan" /></a> </template> 
          <template #title> Andrew McDonald </template> 
          <template #desc> Director of Operations </template> 
        </CardTeam> 

         <CardTeam linkedin="https://linkedin.com/in/" twitter="https://twitter.com/"> 
          <template #img>   <a href="#"><MediaImg src="/team2.png" alt="Max Kaplan" /></a> </template> 
          <template #title> Doug Harris </template> 
          <template #desc> Chief Technology Officer </template> 
        </CardTeam> 

        <CardTeam linkedin="https://linkedin.com/in/" twitter="https://twitter.com/"> 
          <template #img>   <a href="#"><MediaImg src="/team3.png" alt="Max Kaplan" /></a> </template> 
          <template #title>Michael Hubbard </template> 
          <template #desc> Chief Strategy Officer and Board Member </template> 
        </CardTeam> 

        <CardTeam linkedin="https://linkedin.com/in/" twitter="https://twitter.com/"> 
          <template #img>  <a href="#"><MediaImg src="/team4.png" alt="Max Kaplan" /></a> </template> 
          <template #title> Andrew McDonald </template> 
          <template #desc> Director of Operations </template> 
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



  .list {
  margin-top: fn.toVw(57);
  .section-slider {
    padding-left: 160px;
  }

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



.team-item {
    flex: 0 0 calc(14% - 20px);
    box-sizing: border-box;
    @include mx.mobile {
      &:not(:first-child) {
        border-top: 1px solid #D0D0D0;
        padding-top: 50px;
      }
      
    }
    ::v-deep(.img) {
      border-radius: 6px;
      overflow: hidden;
      background: #d3d3d3 50% / cover no-repeat;
      background-blend-mode: luminosity;
      filter: grayscale(1);
      a {
        display: block;
        -webkit-transition: 0.4s;
        -moz-transition: 0.4s;
        -o-transition: 0.4s;
        transition: 0.4s;
        overflow: hidden;

        &:hover {
          transform: scale(1.1);
        } 
      }
    }
    ::v-deep(.content) {
      padding-top: 15px;
       ::v-deep(.name-container) {
        display: flex;
        gap: 30px;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
         ::v-deep(h6) {
          color: #171717;
          font-size: 30px;
          flex: 0 0 60%;
        }
         ::v-deep(.social) {
          display: flex;
          gap: 16px;
        }
      }

       ::v-deep(.text , .text p){
        color: #828282;
        font-size: 16px;
      }
       ::v-deep(.linkTeam) {
        margin-top: 15px;
         ::v-deep(a.btn) {
          display: flex;
          overflow: visible;
          gap: 7px;
           ::v-deep(.bioArrow) {
            width: 12px;
            height: 11px;
            transform-origin: center bottom;
            display: block;
            overflow: visible;
            -webkit-transition: 0.4s;
            -moz-transition: 0.4s;
            -o-transition: 0.4s;
            transition: 0.4s;
          }
          &:hover{
            .bioArrow {
              transform: rotate(45deg);
            }
          }
        }
      }
    }
  


}

</style>
