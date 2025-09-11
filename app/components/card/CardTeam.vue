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
      <div class="linkTeam">
        <a href="#" class="btn">
          Read bio
          <MediaImg class="bioArrow" src="/bio.svg" alt="Read bio" />
        </a>
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

