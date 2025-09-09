<template>
  <section ref="el" class="team">
    <div class="bg-bottom">
      <MediaImg src="/team-bg.png" alt="Team Background" />
      <!-- <MediaImg :provider="false" src="/thumbnail.jpg" alt="Logo" /> -->
    </div>




    
    <div class="container">
      <div class="about-grid">
        <div class="title-container">
                <Text class="titleTeam" data-split data-linereveal reveal-notrigger reveal-waitpreloader reveal-delay="0.15">  <span class="num yellow">01</span>
                  Leadership Team
                </Text>
        </div>
        <div class="team-container" ref="el => teamSections.value.push(el)">
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

          <div class="team-grid">
            <div
              v-for="(team, index) in teams"
              :key="team.title"
              class="team-item"
            >
              <div class="img">
                <img :src="team.img" :alt="team.title" />
              </div>
              <div class="content">
                <div class="name-container">
                  <h6>{{ team.title }}</h6>
                  <div class="social">
                    <a v-if="team.linkedin" :href="team.linkedin" class="social-link"><MediaImg src="/linkedin.svg" alt="Linkedin" /></a>
                    <a v-if="team.twitter" :href="team.twitter" class="social-link"><MediaImg src="/twitter.svg" alt="Twitter" /></a>
                  </div>
                </div>
                
                <div class="text">{{ team.description }}</div>
                <div class="linkTeam">
                  <a :href="team.url" class="btn">Read bio <MediaImg class="bioArrow" src="/bio.svg" alt="Read bio" /></a>
                </div>
              </div>
              </div>
          </div>
          
        </div>
      </div>

      <div class="about-grid">
        <div class="title-container fadeinLeft">
                <Text class="titleTeam" data-split data-linereveal reveal-notrigger reveal-waitpreloader reveal-delay="0.15">  <span class="num red">02</span>
                  Board of Directors
                </Text>
        </div>
        <div class="team-container" ref="el => teamSections.value.push(el)">
           <div class="description fadeinUp">
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

          <div class="team-grid">
            <div
              v-for="(team, index) in teams"
              :key="team.title"
              class="team-item"
            >
              <div class="img">
                <a :href="team.url"><img :src="team.img" :alt="team.title" /></a>
              </div>
              <div class="content">
                <div class="name-container">
                  <a :href="team.url"><h6>{{ team.title }}</h6></a>
                  <div class="social">
                    <a v-if="team.linkedin" :href="team.linkedin" class="social-link"><MediaImg src="/linkedin.svg" alt="Linkedin" /></a>
                    <a v-if="team.twitter" :href="team.twitter" class="social-link"><MediaImg src="/twitter.svg" alt="Twitter" /></a>
                  </div>
                </div>
                
                <!-- <a class="text" :href="team.url">{{ team.description }}</a> -->
                <a class="text" :href="team.url" v-html="team.description"></a>
                <div class="linkTeam">
                  <a :href="team.url" class="btn">Read bio <MediaImg class="bioArrow" src="/bio.svg" alt="Read bio" /></a>
                </div>
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
{ 
    title: 'Leah Wald',
    description: 'Chief Executive Officer <br> and Board Member',
    img: '/team1.png',
    url: '#',
    linkedin: 'https://linkedin.com/',
    twitter: 'https://twitter.com/' 
},
{ 
  title: 'Max Kaplan', 
  description: 'Chief Technology Officer', 
  img: '/team2.png', 
  url: '#' ,
  linkedin: 'https://linkedin.com/',
  twitter: 'https://twitter.com/' 
},
{ 
  title: 'Doug Harris', 
  description: 'Chief Financial Officer', 
  img: '/team3.png', 
  url: '#',
  linkedin: 'https://linkedin.com/',
  twitter: 'https://twitter.com/' 
 },
{ 
  title: 'Michael Hubbard', 
  description: 'Chief Strategy Officer and Board Member', 
  img: '/team4.png', 
  url: '#',
  linkedin: 'https://linkedin.com/',
  twitter: 'https://twitter.com/' 
 },
{ 
  title: 'Andrew McDonald', 
  description: 'Director of Operations', 
  img: '/team5.png', 
  url: '#',
  linkedin: 'https://linkedin.com/',
  twitter: 'https://twitter.com/' 
 }
]

import { ref, onMounted, nextTick } from 'vue'

const teamSectionsRef = ref(null)
const teamSections = ref([])

onMounted(async () => {
  await nextTick() // espera que el DOM esté montado
  // seleccionamos todos los team-container
  teamSections.value = document.querySelectorAll('.team-container')

  teamSections.value.forEach(section => {
    const boxes = section.querySelectorAll('.team-item')
    boxes.forEach((box, index) => {
      gsap.from(box, {
        y: 70,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: box,
          start: 'top 90%',
          end: 'bottom top',
          toggleActions: 'play none none reverse',
        },
        delay: index * 0.15
      })
    })
  })
})

</script>

<style scoped lang="scss">
section.team {
  padding: 130px 0;
  position: relative;
}
.bg-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -1;
}

.about-grid {
  display: flex;
  border-top: 1px solid #D0D0D0;
  padding-top: 34px;
  .title-container {
    flex: 0 0 28%;
  }
  + .about-grid{
    margin-top: 130px;
  }
}



.team-container {
  flex: 1;
  padding-left: 40px;
  .description {
    display: flex;
    justify-content: space-between;
    margin-left: -15px;
    margin-right: -15px;
    margin-bottom: 55px;
    .description__text {
      flex: 0 0 50%;
      padding: 0 15px;
      p {
        color: #000;
        font-size: 16px;
        font-weight: 400;
      }
    }
  }
}


.team-grid {
    display: flex;
    flex-wrap: wrap;   /* permite que los items salten de línea */
    gap: 50px 20px;
    .team-item {
      flex: 0 0 calc(33.333% - 20px); 
      box-sizing: border-box;
      .img {
        border-radius: 6px;
        overflow: hidden;
        background: #d3d3d3 50% / cover no-repeat;
        background-blend-mode: luminosity;
        filter: grayscale(1);
      }
      .content {
        padding-top: 15px;
      }
      .name-container {
        display: flex;
        gap: 30px;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
        h6 {
          color: #171717;
          font-size: 30px;
          flex: 0 0 50%;
        }
        .text {
          color: #828282;
          font-size: 16px;
        }
        .social {
          display: flex;
          gap: 16px;
        }
      }
      .linkTeam {
        margin-top: 15px;
        a.btn {
          display: flex;
          overflow: visible;
          gap: 7px;
          .bioArrow {
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

p.titleTeam {
    font-size: 20px;
    color: #686868;
}

span.num {
    border-radius: 5px;
    width: 40px;
    height: 40px;
    display: inline-block;
    line-height: 40px;
    text-align: center;
    margin-right: 10px;
    &.red{
      background: rgba(255, 151, 81, 0.21);
    }
    &.yellow{
      background: rgba(255, 252, 117, 0.34);
    }
}









</style>
