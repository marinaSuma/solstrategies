<template>
  <section ref="el" class="hero">
    <div class="bg-bottom">
      <MediaImg src="/about-bgTop.png" alt="About Background" />
      <!-- <MediaImg :provider="false" src="/thumbnail.jpg" alt="Logo" /> -->
    </div>




    
    <div class="container">
      <div class="about-grid">
        <div class="title-container">

        </div>
        <div class="team-container">
           <div class="description">
              <div class="description__text">
                <Text class="color-gray" variant="body22" data-split data-linereveal reveal-notrigger reveal-waitpreloader reveal-delay="0.15">
                  First publicly listed on the Canadian Securities Exchange (CSE) in 2018 under the ticker $HODL, Cypherpunk Holdings was a trailblazer in blockchain innovation and digital asset investment, originally focusing on privacy-focused cryptocurrencies and technology.
                </Text>
              </div>
              <div class="description__text">
                <Text class="color-gray" variant="body22" data-split data-linereveal reveal-notrigger reveal-waitpreloader reveal-delay="0.22">
                  Now, at SOL Strategies, we are dedicated to investing in the Solana ecosystem, managing staking validators, and driving value through strategic engagement in decentralized finance.
                </Text>
              </div>
          </div>

          
          <div
          v-for="(team, index) in teams"
            :key="team.id"
            class="team-item"
          >
            <div class="img">
              <img :src="team.img" :alt="team.title" />
            </div>
            <div class="content">
              <div class="name-container">
                <h6>{{ team.title }}</h6>
                <div class="social">
                  <a :href="insta.url" class="social-link"></a>
                  <a :href="twit.url" class="social-link"></a>
                </div>
              </div>
              
              <div class="description">{{ team.description }}</div>
              <div class="linkTeam">
                <a :href="team.url" class="btn">Read bio</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>


const el = useTemplateRef('el');

let ctx;


const teams = [
{ title: 'Leah Wald', description: 'Chief Executive Officer and Board Member', img: '/team1.png', url: '#' },
{ title: 'Max Kaplan', description: 'Chief Technology Officer', img: '/team2.png', url: '#' },
{ title: 'Doug Harris', description: 'Chief Financial Officer', img: '/team3.png', url: '#' },
{ title: 'Michael Hubbard', description: 'Chief Strategy Officer and Board Member', img: '/team4.png', url: '#' },
{ title: 'Andrew McDonald', description: 'Director of Operations', img: '/team5.png', url: '#' }
]

const teamSection = ref(null)

onMounted(() => {
  const boxes = teamSection.value.querySelectorAll('.team-item')
  
  boxes.forEach((box, index) => {
    gsap.from(box, {
      y: 70,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: box,
        start: 'top 90%',    // cuando cada caja entra en pantalla
        end: 'bottom top',
        toggleActions: 'play none none reverse',
      },
      delay: index * 0.15     // escalonado relativo
    })
  })
})

</script>

<style scoped lang="scss">
.hero {
  position: relative;

  overflow: hidden;
  display: flex;
  align-items: center;

  width: 100%;
  min-height: 100vh;

  @include mx.mobile {
    flex-direction: column;
    min-height: auto;
    padding-top: fn.toVw(160);
  }

  .container {
    @include mx.desktop {
      margin-top: fn.toVw(-100);
    }
  }
}


.bg-right {
    pointer-events: none;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: -1;
}

.wrapper {
  display: flex;
  max-width: 1110px;

  @include mx.mobile {
    flex-direction: column;
    gap: fn.toVw(14);
  }

  .title-wrapper {
    flex-shrink: 0;
    width: 100%;
    max-width: fn.toVw(900);
    align-self: flex-start;

    .title__text {
      width: 100%;
    }

    .title {
      font-size: 70px;
      font-weight: 300;
      line-height: 1.008;

      @include mx.mobile {
        font-size: 60px;
      }

      b {
        font-weight: 500;
      }
    }
  }

  .description {
    display: flex;
    flex-direction: column;
    gap: fn.toVw(67);
    align-self: end;

    @include mx.mobile {
      gap: fn.toVw(40);
    }

    .description__text {
      // max-width: 360px;
      width: 100%;

      // p + p {
      //   margin-top: 20px;
      // }
    }

  }
}



.w-medium {
  max-width: 360px;
}

</style>
