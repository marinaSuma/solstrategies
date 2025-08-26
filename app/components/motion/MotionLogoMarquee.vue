<template>
  <div ref="el" class="logomarquee">
    <div class="marquee__wrapper">
      <div class="marquee__group" :class="{ reverse: isReverse }">
        <div class="images">
          <div v-for="(item, index) in props.logos" :key="index" class="logo__item">
            <MediaImg class="image" :src="item.src" :alt="item.alt" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

if (import.meta.client) {
  gsap.registerPlugin(ScrollTrigger);
}

const props = defineProps({
  logos: {
    type: [Array, Object],
    required: true,
  },
  reverse: {
    type: Boolean,
    default: false,
  },
  scrollSpeed: {
    type: Number,
    default: 15,
  },
});

const calcDuration = computed(() => {
  return props.logos.length * 3.5;
});

const el = useTemplateRef('el');
const isReverse = ref(props.reverse);

let ctx: gsap.Context | null = null;
let roll1: gsap.core.Timeline | null = null;
let onscroll: gsap.core.Tween | null = null;
let scrollTriggerInstance: ScrollTrigger | null = null;
let clones: HTMLElement[] = [];

const cleanupMarquee = () => {
  if (roll1) {
    roll1.kill(); // Kill the timeline
    roll1 = null;
  }
  if (onscroll) {
    onscroll.kill(); // Kill the gsap
    onscroll = null;
  }
  if (scrollTriggerInstance) {
    scrollTriggerInstance.kill(); // Kill the ScrollTrigger instance
    scrollTriggerInstance = null;
  }
  if (ctx) {
    ctx.revert(); // Revert the context to clean up all animations created within it
    ctx = null;
  }

  // Remove cloned elements
  clones.forEach((clone) => {
    clone.remove();
  });
  clones = []; // Clear the clones array
};

const setupMarquee = () => {
  if (!el.value || !import.meta.client) return;

  // Always cleanup before setting up
  cleanupMarquee();

  ctx = gsap.context(() => {
    let direction = isReverse.value ? -1 : 1;

    roll1 = gsap.timeline({
      repeat: -1,
      onReverseComplete() {
        this.totalTime(this.rawTime() + this.duration() * 10);
      },
    });

    const elements = gsap.utils.toArray('.marquee__group') as HTMLElement[];
    clones = elements.map((el) => {
      const clone = el.cloneNode(true) as HTMLElement;
      el.parentNode?.appendChild(clone);
      return clone;
    });

    elements.forEach((el, i) => {
      gsap.set(clones[i], {
        position: 'absolute',
        overwrite: false,
        top: el.offsetTop,
        left: el.offsetLeft + (isReverse.value ? -el.offsetWidth : el.offsetWidth),
      });

      roll1!.to(
        [el, clones[i]],
        {
          xPercent: isReverse.value ? 100 : -100,
          duration: calcDuration.value,
          ease: 'none',
        },
        0,
      );
    });

    onscroll = gsap.to('.marquee__wrapper', {
      x: isReverse.value ? `+=${props.scrollSpeed}%` : `-=${props.scrollSpeed}%`,
      ease: 'none',
      duration: 2,
      scrollTrigger: {
        trigger: el.value,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    scrollTriggerInstance = ScrollTrigger.create({
      trigger: el.value,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
      onUpdate(self) {
        const newDirection = self.direction === -1 ? -1 : 1;

        if (newDirection !== direction) {
          direction = newDirection;
          roll1!.timeScale(direction);
        }
      },
    });
  }, el.value);
};

const reinitMarquee = () => {
  if (el.value) {
    cleanupMarquee();
    setupMarquee();
  }
};

onMounted(() => {
  setupMarquee();

  useWindowResize(reinitMarquee);
});

onUnmounted(() => {
  cleanupMarquee();
});
</script>

<style scoped lang="scss">
.logomarquee {
  position: relative;

  overflow: hidden;

  width: 100%;
  padding: 0;

  text-transform: none;
}

.marquee__wrapper {
  user-select: none;

  position: relative;

  display: flex;

  height: auto;

  white-space: nowrap;
}

.marquee__group {
  display: inline-block;
  flex-shrink: 0;
  min-width: 100%;
  padding-left: 0.25em;
}

.marquee .images {
  display: flex;
  align-items: center;
  justify-content: center;

  width: fit-content;
  max-width: none;
  margin: 0;

  line-height: normal;
  text-transform: none;
  white-space: nowrap;
}

.logo__item {
  display: inline-block;
  width: max-content;
  margin-right: fn.toVw(99);

  @include mx.mobile {
    margin-right: fn.toVw(60);
  }
}

.image {
  overflow: hidden;
  width: 100%;
  max-width: fn.toVw(169);
  height: fn.toVw(66);

  @include mx.mobile {
    max-width: fn.toVw(102);
    height: fn.toVw(32);
  }

  &:deep(img) {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>
