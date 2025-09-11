<template>
  <!-- <div class="card-about">
    <div class="img">
      <slot name="img"></slot>
    </div>

    <div class="content">
      <div class="name-container">
        <h6><slot name="title"></slot></h6>
        <div class="social">
          <a v-if="linkedin" :href="linkedin" target="_blank" class="social-link">
            <MediaImg src="/linkedin.svg" alt="Linkedin" />
          </a>
          <a v-if="twitter" :href="twitter" target="_blank" class="social-link">
            <MediaImg src="/twitter.svg" alt="Twitter" />
          </a>
        </div>
      </div>

      <div class="text">
        <slot name="desc"></slot>
      </div>
    </div>
  </div>
 -->

  <div class="team-item">
    <div class="img">
       <slot name="img"></slot>
    </div>

    <div class="content">
      <div class="name-container">
        <slot name="title"></slot>
        <div class="social">
          <a v-if="linkedin" :href="linkedin" target="_blank" class="social-link">
            <MediaImg src="/linkedin.svg" alt="Linkedin" />
          </a>
          <a v-if="twitter" :href="twitter" target="_blank" class="social-link">
            <MediaImg src="/twitter.svg" alt="Twitter" />
          </a>
        </div>
      </div>

      <!-- Descripción -->
      <div class="text">
         <slot name="desc"></slot>
      </div>
    </div>
  </div>




</template>

<script setup lang="ts">
const props = defineProps({
  linkedin: String,
  twitter: String,
})

const slots = defineSlots()
</script>

<!-- <style scoped lang="scss">
.card-about {
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: fn.toVw(506);
  height: fn.toVw(400);
  padding: fn.toVw(39);
  border-radius: fn.toVw(30);
  background-color: #f8f8f8;

  @include mx.mobile {
    width: fn.toVw(395);
    height: fn.toVw(313);
    padding: fn.toVw(30) fn.toVw(15);
    border-radius: fn.toVw(23);
  }

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

    .social {
      display: flex;
      gap: 16px;
    }
  }

  .text {
    color: #828282;
    font-size: 16px;
  }
}
</style> -->