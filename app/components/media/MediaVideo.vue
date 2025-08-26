<template>
  <div class="media-video" :class="{ 'n-a': !props.aspect }">
    <div v-if="props.aspect" class="ar" />
    <video
      ref="elVideo"
      :controls="props.controls"
      :loop="props.loop"
      :muted="props.muted"
      :playsinline="props.playsinline || undefined"
      :preload="props.preload"
      :poster="props.poster"
      :autoplay="props.autoplay">
      <source :src="props.src" :type="props.type" >
      <p>Your browser does not support the video element. Please consider updating to a modern browser.</p>
    </video>
  </div>
</template>

<script setup>
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

if (import.meta.client) {
  gsap.registerPlugin(ScrollTrigger);
}

const props = defineProps({
  type: {
    type: String,
    default: 'video/mp4',
  },
  src: {
    type: String,
    required: true,
  },
  poster: {
    type: String,
  },
  preload: {
    type: String,
    default: 'metadata',
  },
  loop: {
    type: Boolean,
    default: true,
  },
  controls: {
    type: Boolean,
    default: false,
  },
  muted: {
    type: Boolean,
    default: true,
  },
  autoplay: {
    type: Boolean,
    default: false,
  },
  playsinline: {
    type: Boolean,
    default: true,
  },
  aspect: {
    type: String,
  },
  aspectM: {
    type: String,
  },
  scrollTrigger: {
    type: Boolean,
    default: true,
  },
});

const elVideo = useTemplateRef('elVideo');

// Aspect calculation
const aspectCalc = ref();
let aspectW, aspectH;

if (props.aspect) {
  [aspectW, aspectH] = props.aspect.split('/').map(Number);
}

if (useDevice().isMobile && props.aspectM) {
  [aspectW, aspectH] = props.aspectM.split('/').map(Number);
}

if (aspectW && aspectH) {
  aspectCalc.value = ((aspectH / aspectW) * 100).toFixed(2);
}

const aspectPercent = computed(() => (props.aspect ? `${aspectCalc.value}%` : null));

let st;

onMounted(() => {
  if (!props.scrollTrigger) return;
  st = ScrollTrigger.create({
    trigger: elVideo.value,
    start: 'top bottom',
    onEnter: () => elVideo.value.play(),
    onEnterBack: () => elVideo.value.play(),
    onLeave: () => elVideo.value.pause(),
    onLeaveBack: () => elVideo.value.pause(),
  });
});

onUnmounted(() => {
  if (!props.scrollTrigger) return;
  st?.kill();
});

defineExpose({
  play: () => elVideo.value.play(),
  pause: () => elVideo.value.pause(),
});
</script>

<style scoped lang="scss">
.media-video {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;

  &:not(.n-a) {
    video {
      position: absolute;
      inset: 0;
    }
  }

  video {
    width: 100%;
    height: 100%;
  }

  .ar {
    padding-top: v-bind('aspectPercent');
  }
}
</style>
