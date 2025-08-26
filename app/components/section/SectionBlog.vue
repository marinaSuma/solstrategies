<template>
  <section class="blog grid">
    <div class="container">
      <div class="w-l center">
        <div class="row">
          <div 
            class="col-sm-4" 
            v-for="(post, index) in posts" 
            :key="index"
          >
            <div class="grid-box fadeinUp">
              <div class="img">
                <img :src="post.img" :alt="post.title" />
              </div>
              <div class="content">
                <div class="meta">{{ post.date }}</div>
                <h6>{{ post.title }}</h6>
                <div class="border-gradient">
                  <a :href="post.link" class="btn">View Article</a>
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
  {
    img: '', // si no hay imagen, el CSS la oculta
    date: 'May 20th 2025',
    title: 'How Crypto is Transforming Traditional Finance',
    link: '/blog/single',
  },
  {
    img: '',
    date: 'May 20th 2025',
    title: 'How Crypto is Transforming Traditional Finance',
    link: '/blog/single',
  },
  {
    img: '',
    date: 'May 20th 2025',
    title: 'How Crypto is Transforming Traditional Finance',
    link: '/blog/single',
  },
  {
    img: '',
    date: 'May 20th 2025',
    title: 'How Crypto is Transforming Traditional Finance',
    link: '/blog/single',
  },
  {
    img: '',
    date: 'May 20th 2025',
    title: 'How Crypto is Transforming Traditional Finance',
    link: '/blog/single',
  },
  {
    img: '',
    date: 'May 20th 2025',
    title: 'How Crypto is Transforming Traditional Finance',
    link: '/blog/single',
  },
];
</script>

<style scoped lang="scss">
section.blog.grid {
  margin-bottom: 130px;
}

.blog.grid .row {
  row-gap: 50px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
}

.grid-box .img {
  background-color: #EFEFEF;
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

.border-gradient {
  margin-top: 30px;
  border-radius: 20px;
  display: inline-block;
  background: linear-gradient(to right, #BF35A8, #FA974C) border-box;
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
  background: linear-gradient(to right, #BF35A8, #FA974C) border-box;
  color: #fff;
}

.meta {
  font-size: 14px;
  margin-bottom: 15px;
}
</style>
