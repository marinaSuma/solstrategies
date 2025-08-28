<template>
  <div id="hero">
    <div class="container">
      <div class="w-l center text-center">
        <Text tag="h1" variant="heading1" data-split data-linereveal>Our Blog</Text>

        <Text class="description color-gray" data-split data-linereveal reveal-delay="0.6">
          Stay in the loop with the latest in crypto, plus exclusive updates <br> on what we’re building.
        </Text>
      </div>
    </div>
  </div>

  <section ref="blogSection" class="blog">
    <div class="container">
      <div class="w-l center">
        <div class="row">
          <div
            v-for="(post, index) in posts"
            :key="post.id"
            class="col-sm-4 post"
          >
            <div class="grid-box">
              <div class="img">
                <img :src="post.img" :alt="post.title" />
              </div>
              <div class="content">
                <div class="meta">{{ post.date }}</div>
                <h6>{{ post.title }}</h6>
                <div class="border-gradient">
                  <a :href="post.url" class="btn">View Article</a>
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
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const posts = [
  { date: 'May 20th 2025', title: 'How Crypto is Transforming Traditional Finance', img: '', url: '#' },
  { date: 'May 20th 2025', title: 'How Crypto is Transforming Traditional Finance', img: '', url: '#' },
  { date: 'May 20th 2025', title: 'How Crypto is Transforming Traditional Finance', img: '', url: '#' },
  { date: 'May 20th 2025', title: 'How Crypto is Transforming Traditional Finance', img: '', url: '#' },
  { date: 'May 20th 2025', title: 'How Crypto is Transforming Traditional Finance', img: '', url: '#' },
  { date: 'May 20th 2025', title: 'How Crypto is Transforming Traditional Finance', img: '', url: '#' }
]

import { ref, onMounted, onUnmounted } from 'vue'
const blogSection = ref(null)
let ctx

onMounted(() => {
  ctx = gsap.context(() => {
    gsap.from('.grid-box', {
      y: 50,          // empieza 50px abajo
      opacity: 0,     // empieza invisible
      duration: 0.8,
      stagger: 0.15,  // escalonado
      ease: 'power2.out',
      scrollTrigger: {
        trigger: blogSection.value,
        start: 'top 80%',  // cuando la sección entra en la pantalla
        end: 'bottom top',
        toggleActions: 'play none none reverse',
      }
    })
  }, blogSection.value)
})

onUnmounted(() => {
  ctx?.revert()
})
</script>
