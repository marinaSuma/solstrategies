<template>
  <section ref="el" class="team">
    <div class="bg-bottom">
      <MediaImg src="/team-bg.png" alt="Team Background" />
    </div>

    <div class="container">
      <!-- Iteramos sobre los grupos -->
      <div v-for="(group, gIndex) in teamGroups" :key="gIndex" class="about-grid">
        
        <!-- Título dinámico -->
        <div class="title-container fadeinUp">
          <Text
            class="titleTeam"
            data-split
            data-linereveal
            reveal-notrigger
            reveal-waitpreloader
            :reveal-delay="0.15"
          >
            <span class="num" :class="group.color">{{ group.num }}</span>
            {{ group.title }}
          </Text>
        </div>

        <div class="team-container" ref="teamSections">
          
          <!-- Descripción solo si existe -->
          <div v-if="group.description && group.description.length" class="description fadeinUp">
            <div
              v-for="(desc, dIndex) in group.description"
              :key="dIndex"
              class="description__text"
            >
              <Text
                class="color-gray"
                variant="body22"
                data-split
                data-linereveal
                reveal-notrigger
                reveal-waitpreloader
                :reveal-delay="0.15 + dIndex * 0.07"
              >
                {{ desc }}
              </Text>
            </div>
          </div>

          <!-- Miembros -->
          <div class="team-grid">
            <div
              v-for="(member, mIndex) in group.members"
              :key="member.title"
              class="team-item"
            >
              <div class="img">
                <a :href="member.url"><img :src="member.img" :alt="member.title" /></a>
              </div>
              <div class="content">
                <div class="name-container">
                  <h6><a :href="member.url">{{ member.title }}</a></h6>
                  <div class="social">
                    <a
                      v-if="member.linkedin"
                      :href="member.linkedin"
                      class="social-link"
                    >
                      <MediaImg src="/linkedin.svg" alt="Linkedin" />
                    </a>
                    <a
                      v-if="member.twitter"
                      :href="member.twitter"
                      class="social-link"
                    >
                      <MediaImg src="/twitter.svg" alt="Twitter" />
                    </a>
                  </div>
                </div>

                <!-- Descripción -->
                <a class="text" :href="member.url" v-html="member.description"></a>

                <!-- Botón bio -->
                <div class="linkTeam">
                  <a :href="member.url" class="btn">
                    Read bio
                    <MediaImg class="bioArrow" src="/bio.svg" alt="Read bio" />
                  </a>
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

import { ref, onMounted, nextTick } from "vue";

gsap.registerPlugin(ScrollTrigger);

const teamSections = ref([]);

// El mismo teamGroups que ya tienes
const teamGroups = [
  {
    num: "01",
    title: "Leadership Team",
    color: "yellow",
    description: [
      "First publicly listed on the Canadian Securities Exchange (CSE) in 2018 under the ticker $HODL, Cypherpunk Holdings was a trailblazer in blockchain innovation and digital asset investment, originally focusing on privacy-focused cryptocurrencies and technology.",
      "Now, at SOL Strategies, we are dedicated to investing in the Solana ecosystem, managing staking validators, and driving value through strategic engagement in decentralized finance."
    ],
    members: [
      { title: 'Leah Wald', description: 'Chief Executive Officer <br> and Board Member', img: '/team1.png', url: '#', linkedin: 'https://linkedin.com/', twitter: 'https://twitter.com/' },
      { title: 'Max Kaplan', description: 'Chief Technology Officer', img: '/team2.png', url: '#', linkedin: 'https://linkedin.com/', twitter: 'https://twitter.com/' },
      { title: 'Doug Harris', description: 'Chief Financial Officer', img: '/team3.png', url: '#', linkedin: 'https://linkedin.com/', twitter: 'https://twitter.com/' },
      { title: 'Michael Hubbard', description: 'Chief Strategy Officer and Board Member', img: '/team4.png', url: '#', linkedin: 'https://linkedin.com/', twitter: 'https://twitter.com/' },
      { title: 'Andrew McDonald', description: 'Director of Operations', img: '/team5.png', url: '#', linkedin: 'https://linkedin.com/', twitter: 'https://twitter.com/' }
    ]
  },
  {
    num: "02",
    title: "Board of Directors",
    color: "red",
    description: [],
    members: [
      { title: 'Luis Berruga', description: 'Chairman of the Board', img: '/team6.png', url: '#', linkedin: 'https://linkedin.com/', twitter: 'https://twitter.com/' },
      { title: 'Ungad Chadda', description: 'Director', img: '/team7.png', url: '#', linkedin: 'https://linkedin.com/', twitter: 'https://twitter.com/' },
      { title: 'Rubsun Ho', description: 'Director', img: '/team8.png', url: '#', linkedin: 'https://linkedin.com/', twitter: 'https://twitter.com/' },
      { title: 'Jose Calderon', description: 'Director', img: '/team9.png', url: '#', linkedin: 'https://linkedin.com/', twitter: 'https://twitter.com/' },
      { title: 'Leah Wald', description: 'Chief Executive Officer <br> and Board Member', img: '/team1.png', url: '#', linkedin: 'https://linkedin.com/', twitter: 'https://twitter.com/' },
      { title: 'Jon Matonis', description: 'Chief Economist <br> and Board Member', img: '/team11.png', url: '#', linkedin: 'https://linkedin.com/', twitter: 'https://twitter.com/' },
      { title: 'Michael Hubbard', description: 'Chief Strategy Officer and Board Member', img: '/team4.png', url: '#', linkedin: 'https://linkedin.com/', twitter: 'https://twitter.com/' }
    ]
  }
];

// ----------------- Animación GSAP -----------------
onMounted(async () => {
  await nextTick();

  // Seleccionamos todos los contenedores de equipo
  teamSections.value = document.querySelectorAll(".team-container");

  teamSections.value.forEach(section => {
    const boxes = section.querySelectorAll(".team-item");

    boxes.forEach((box, index) => {
      gsap.from(box, {
        y: 70,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: index * 0.15,
        scrollTrigger: {
          trigger: box,
          start: "top 90%",
          end: "bottom top",
          toggleActions: "play none none reverse"
        }
      });
    });
  });
});
</script>

<style scoped lang="scss">
section.team {
  padding: 130px 0;
  position: relative;
  background-color: #FDFCFC;
}
.bg-bottom {
  bottom: -240px;
  left: 0;
  position: absolute;
  z-index: 0;
  opacity: 0.5;
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
 @include mx.mobile {
    flex-direction: column;
    row-gap: 30px;
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
    @include mx.mobile {
      flex-direction: column;
      row-gap: 20px;
    }
  }

  @include mx.mobile {
   padding-left: 10px;
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

       a.text {
        color: #828282;
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

  @include mx.mobile {
    flex-direction: column;
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
