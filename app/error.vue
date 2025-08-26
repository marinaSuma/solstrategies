<template>
  <div class="bg">
    <div class="container">
      <div v-if="DEV" class="error-dev">
        <h2 class="statuscode">{{ props?.error?.statusCode }}</h2>
        <p class="message">{{ props?.error?.message }}</p>
        <pre v-if="props?.error?.stack" class="stack" v-html="props?.error?.stack" />
      </div>
      <section class="error">
        <!-- 500 -->
        <BaseError
          v-if="props?.error?.statusCode === 500"
          title="Internal Server Error"
          message="Oops! Something Went Wrong, Please try again later" />

        <!-- 404 -->
        <BaseError v-if="props?.error?.statusCode === 404" title="Page Not Found" message="Oops! Something Went Wrong, Please try again later" />

        <!-- 400 -->
        <BaseError v-if="props?.error?.statusCode === 400" title="Bad Request" message="Oops! Something Went Wrong, Please try again later" />

        <div class="cta">
          <a href="/">Go To Homepage</a>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { DEV } from '#imports';
import type { NuxtError } from '#app';

const props = defineProps({
  error: Object as () => NuxtError,
});
</script>

<style scoped lang="scss">
.bg {
  width: 100%;
  height: 100vh;
  min-height: 100%;
}

.error {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;
  min-height: 100%;
  margin: 0;

  text-align: center;

  &:deep(.animation) {
    max-width: 40rem;
    margin: 4rem auto;
  }

  &:deep(h1) {
    margin-bottom: 1rem;
    text-transform: none;
  }
}

.error-dev {
  width: 100%;
  margin-top: 2rem;
}

.statuscode {
  font-size: 3rem;
}

.message {
  margin-bottom: 1rem;
}

.stack {
  padding: 2rem;
  color: white;
  white-space: normal;
  background-color: black;
}

.cta {
  margin-top: 2rem;

  a {
    text-decoration: underline;
  }
}
</style>
