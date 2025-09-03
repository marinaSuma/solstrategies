<template>
  <section ref="el" class="why">
    <!-- <div ref="elText" class="text">
      <Text class="title" variant="heading1medium60" data-split data-linereveal> Why <b>Solana Matters</b> </Text>
      <Text class="desc color-gray" data-split data-linereveal reveal-delay="0.15"> The infrastructure layer of tomorrow's finance </Text>
    </div> -->

    <div ref="elList" class="list">
      <CardWhyInvestors class="content" background="/invcard1.webp">
          <div class="top">
             <MediaImg src="SolLogo.svg" class="logo" alt="Logo" />
          </div>
          <div class="center">
            <div ref="elText" class="text">
              <Text class="title" tag="h1" data-split data-linereveal>  Solana <br> meets Wall Street </Text>
              <Text class="desc color-gray" data-split data-linereveal reveal-delay="0.15"> Innovation Built for Long-Term </Text>
            </div>
          </div>
          <div class="bottom">
            <div class="buttons">
              <ButtonCta class="cta">solstrategies.io</ButtonCta>
              <ButtonCta class="cta" variant="black">JUNE 2025</ButtonCta>
            </div>
            <Text tag="p" class="small">solstrategies.io</Text>
          </div>
  
      </CardWhyInvestors>


      <CardWhyInvestors class="content" background="/invcard2.webp">
          <div class="top">
             <MediaImg src="logo.png" class="iso" alt="Logo" />
          </div>
          <div class="center">
            <div ref="elText" class="text">
              <Text class="title" tag="h1" data-split> <strong>Thank you</strong> for subscribing! </Text>
              <Text class="desc color-gray" data-split > Please check your email to confirm your subscription. </Text>
            </div>
            
          </div>
      </CardWhyInvestors>


      <CardWhyInvestors class="content" background="/invcard3.webp">
          <div class="top">
            <div ref="elText" class="text">
              <Text class="title" tag="h1Open Keyboard Shortcuts (JSON)" data-split>Sign up to receiveSol Strategies updates </Text>
              <Text class="desc color-gray" data-split > Form </Text>
            </div>
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




<style scoped lang="scss">


.card {
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: fn.toVw(615);
  padding: 50px;
  border-radius: fn.toVw(55);
  color: $color-white;
  background-color: #ef8268;

  @include mx.mobile {
    height: fn.toVw(438);
    padding: 20px 30px;
    border-radius: fn.toVw(24);
  }


  &.active {
    .bottom {
      .desc {
        ul,
        &:deep(ul) {
          li {
            &::before {
              transform: scale(1);
            }
          }
        }
      }
    }
  }


  h1.title {
    color: #000;
    font-weight: 200;
  }

  p {
    color: #000;
    font-size: 19.893px;
    font-style: normal;
    font-weight: 400;
    line-height: 86%;
    margin-top: 20px;

    &.small{
      font-size: 16px;
    }
  }

  .bottom {
  width: 100%;
  display: flex;
  justify-content: space-between;

    .buttons {
      display: flex;
      gap: 30px;

      .btn.fill {
        text-transform: uppercase;
        border-radius: 30px;
        &.white {
          border: 1px solid #000;
          background: #F5F5F5;
          color: #000;
        }

        &.black {
          border: 1px solid #000;
          background: #000;
        }
      }

    }
  }




}


.card.content:first-child {
  position: relative;
  text-align: left;
  align-items: flex-start;

    h1.title {
    font-size: 70px;
    line-height: 80%;
  }
}

.card.content:not(:first-child) {
  justify-content: flex-start;
  gap: 60px;
  
    h1.title {
    font-size: 53px;
    line-height: 110%;
    font-weight: 300;
    color:#000;
    
  }


  p{
    font-size: 16px;
    color: #000;
  }

}

.card.content:nth-child(2) {
  align-items: center;
  
    h1.title {
    text-align: center;
    text-align: center;
    
  }


  p{
    text-align: center;
  }

}


.card.content:last-child, .card.content:last-child h1 {
  align-items: self-start;
  text-align: left;
}

</style>
