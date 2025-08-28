<template>


    <div id="hero">
        <div class="container">
            <div class="w-l center text-center">
                <Text tag="h1" variant="heading1" data-split data-linereveal>Our Blog </Text> 

                <Text class="description color-gray" data-split data-linereveal reveal-delay="0.6">
                 tay in the loop with the latest in crypto, plus exclusive updates <br> on what we’re building.
                </Text>
            </div>
        </div>
    </div>     
    <section class="blog">
        <div class="container">
            <div class="w-l center">
              <div class="row">
                <div
                  v-for="(post, index) in posts"
                  :key="post.id"
                  class="col-sm-4 post aos-init"
                  data-aos="fade-up"
                  :data-aos-delay="index * 150"
                  data-aos-duration="800"
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
const posts = [
  { date: 'May 20th 2025', title: 'How Crypto is Transforming Traditional Finance', img: '', url: '#' },
  { date: 'May 20th 2025', title: 'How Crypto is Transforming Traditional Finance', img: '', url: '#' },
  { date: 'May 20th 2025', title: 'How Crypto is Transforming Traditional Finance', img: '', url: '#' },
  { date: 'May 20th 2025', title: 'How Crypto is Transforming Traditional Finance', img: '', url: '#' },
  { date: 'May 20th 2025', title: 'How Crypto is Transforming Traditional Finance', img: '', url: '#' },
  { date: 'May 20th 2025', title: 'How Crypto is Transforming Traditional Finance', img: '', url: '#' }
]
</script>


