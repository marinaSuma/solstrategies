<template>
  <section ref="el" class="team">
    <div class="bg-bottom">
      <MediaImg src="/about-bgTop.png" alt="About Background" />
      <!-- <MediaImg :provider="false" src="/thumbnail.jpg" alt="Logo" /> -->
    </div>




    
    <div class="container">
      <div class="about-grid">
        <div class="title-container">
                <Text class="titleTeam" data-split data-linereveal reveal-notrigger reveal-waitpreloader reveal-delay="0.15">  <span class="num yellow">01</span>
                  Leadership Team
                </Text>
        </div>
        <div class="team-container" ref="teamSection">
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
                    <a v-if="team.insta" :href="team.insta" class="social-link">IG</a>
                    <a v-if="team.twitter" :href="team.twitter" class="social-link">TW</a>
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

      <div class="about-grid">
        <div class="title-container">
                <Text class="titleTeam" data-split data-linereveal reveal-notrigger reveal-waitpreloader reveal-delay="0.15">  <span class="num red">01</span>
                  Leadership Team
                </Text>
        </div>
        <div class="team-container" ref="teamSection">
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
                    <a v-if="team.insta" :href="team.insta" class="social-link">IG</a>
                    <a v-if="team.twitter" :href="team.twitter" class="social-link">TW</a>
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
    </div>

  </section>
</template>

<script setup>


const el = useTemplateRef('el');

let ctx;


const teams = [
{ 
    title: 'Leah Wald',
    description: 'Chief Executive Officer and Board Member',
    img: '/team1.png',
    url: '#',
    insta: 'https://instagram.com/',
    twitter: 'https://twitter.com/' 
},
{ 
  title: 'Max Kaplan', 
  description: 'Chief Technology Officer', 
  img: '/team2.png', 
  url: '#' ,
  insta: 'https://instagram.com/',
  twitter: 'https://twitter.com/' 
},
{ 
  title: 'Doug Harris', 
  description: 'Chief Financial Officer', 
  img: '/team3.png', 
  url: '#',
  insta: 'https://instagram.com/',
  twitter: 'https://twitter.com/' 
 },
{ 
  title: 'Michael Hubbard', 
  description: 'Chief Strategy Officer and Board Member', 
  img: '/team4.png', 
  url: '#',
  insta: 'https://instagram.com/',
  twitter: 'https://twitter.com/' 
 },
{ 
  title: 'Andrew McDonald', 
  description: 'Director of Operations', 
  img: '/team5.png', 
  url: '#',
  insta: 'https://instagram.com/',
  twitter: 'https://twitter.com/' 
 }
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
    gap: 20px;
    .team-item {
      flex: 0 0 calc(33.333% - 20px); 
      box-sizing: border-box;
      padding: 10px;
  }

}









</style>
