<template>
  <div v-if="props.src" class="media-img" :class="{ 'pointer-events': props.pointerEvents, 'n-a': !props.aspect }">
    <div v-if="props.aspect" class="ar" />
    <NuxtPicture
      v-if="props.type === 'picture'"
      :provider="props.provider ? variables.system.cms : null"
      :src="props.src"
      :alt="props.alt"
      :loading="props.lazy ? 'lazy' : null"
      :decoding="props.lazy ? null : 'async'"
      :img-attrs="{ draggable: false }"
      :sizes="props.sizes" />
    <NuxtImg
      v-if="props.type === 'img'"
      :provider="props.provider ? variables.system.cms : null"
      :src="props.src"
      :alt="props.alt"
      :loading="props.lazy ? 'lazy' : null"
      :decoding="props.lazy ? null : 'async'"
      draggable="false"
      :sizes="props.sizes" />
  </div>
</template>

<script setup>
import variables from '~~/config/variables.json';

const props = defineProps({
  type: {
    type: String,
    default: 'picture',
    validator: (value) => ['picture', 'img'].includes(value),
  },
  provider: {
    type: Boolean,
    default: false,
  },
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
  pointerEvents: {
    type: Boolean,
    default: false,
  },
  og: {
    type: Boolean,
    default: false,
  },
  sizes: {
    type: String,
  },
  aspect: {
    type: String,
  },
  aspectM: {
    type: String,
  },
  lazy: {
    type: Boolean,
    default: false,
  },
});

// Media store
const mediaStore = useMediaStore();
mediaStore.addImage(props.src);

// Aspect calc
const aspectCalc = ref();
let aspectW;
let aspectH;

if (props.aspect) {
  aspectW = Number(props.aspect.split('/')[0]);
  aspectH = Number(props.aspect.split('/')[1]);
}

if (useDevice().isMobile && props.aspectM) {
  aspectW = Number(props.aspectM.split('/')[0]);
  aspectH = Number(props.aspectM.split('/')[1]);
}

aspectCalc.value = ((aspectH / aspectW) * 100).toFixed(2);

const aspectPercent = computed(() => (props.aspect ? `${aspectCalc.value}%` : null));

if (props.og) {
  useSeoMeta({
    ogImage: props.src,
  });
}
</script>

<style scoped lang="scss">
.media-img {
  position: relative;
  width: 100%;
  height: 100%;

  &:not(.pointer-events) {
    pointer-events: none;
    user-select: none;
  }

  &:not(.n-a) {
    &:deep(img) {
      position: absolute;
      inset: 0;
    }
  }

  &:deep(img) {
    width: 100%;
    height: 100%;
  }

  .ar {
    padding-top: v-bind('aspectPercent');
  }
}
</style>
