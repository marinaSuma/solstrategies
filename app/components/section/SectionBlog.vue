<template>


    <div id="hero">
        <div class="container">
            <div class="w-l center text-center">
                <h1 class="fadeinUp mb-5">Our Blog</h1>
                <div class="w-s center text fadeinUp">
                    <p>Stay in the loop with the latest in crypto, plus exclusive updates <br> on what we’re building.</p>
                </div>
            </div>
        </div>
    </div>     
      <section class="blog">
        <div class="container">
            <div class="w-l center">
                <div class="row">
                  <div
                    v-for="(post, index) in posts"
                    :key="index"
                    class="col-sm-4 fadeinUp"
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

<style scoped>

/* Hero */
.page-blog #hero {
  height: 540px;
  display: flex;
  align-items: center;
  padding-top: 80px;
}

/* Tipografía */
h1, h2, h3, h4, h5, h6 {
  font-weight: 300;
}
h1 { font-size: 70px; line-height: 106%; }
h2 { font-size: 60px; line-height: 100%; }
h3 { font-size: 52px; line-height: 100%; }
h4 { font-size: 48px; line-height: 122%; }
h5 { font-size: 35px; line-height: 122%; }
h6 { font-size: 28px; line-height: 122%; }

p, div, li, a {
  font-size: 17px;
  font-weight: 400;
  line-height: 164%;
}

a, a.btn, input[type='submit'] {
    text-decoration: none;
    -webkit-transition: 0.4s;
    -moz-transition: 0.4s;
    -o-transition: 0.4s;
    transition: 0.4s;
}

/* Grid */
.page-blog .blog .row {
  row-gap: 50px;
}

.grid-box .img {
  background-color: #efefef;
  width: 100%;
  aspect-ratio: 5 / 4;
  border-radius: 9px;
  margin-bottom: 20px;
}

.grid-box .img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.grid-box .img img[src=''] {
  display: none;
}

/* Botones con borde degradado */
.border-gradient {
  margin-top: 30px;
  border-radius: 20px;
  display: inline-block;
  background: linear-gradient(to right, #bf35a8, #fa974c) border-box;
  padding: 1px;
}

.border-gradient a {
  background-color: #fff;
  display: inline-block;
  font-size: 15px;
  color: #212529;
  text-align: center;
  padding: 4px 20px;
  line-height: 164%;
  border-radius: 20px;
  transition: 0.2s;
}

.border-gradient a:hover {
  background: linear-gradient(to right, #bf35a8, #fa974c) border-box;
  color: #fff;
}

.meta {
  font-size: 14px;
  margin-bottom: 15px;
}
</style>
