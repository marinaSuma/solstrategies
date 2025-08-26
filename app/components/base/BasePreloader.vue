<template>
  <div v-if="!isPreloadDone" ref="el" class="preloader">
    <div class="preloader__inner">
      <div class="preloader__text-wrapper masking-text">
        <p ref="elText" class="preloader__text">{{ integerNumber }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import variables from '~~/config/variables.json';

const isPreloadDone = usePreloadDone();
const mediaStore = useMediaStore();
const preloaderItems = usePreloaderItems();
const preloadProgress = usePreloadProgress();

// Remove duplicates and add images to preloader items
const uniqueImages = [...new Set(mediaStore.images.value)];
const existingImageSrcs = new Set(preloaderItems.value.filter((item) => item.type === 'image').map((item) => item.src));
const newImages = uniqueImages.filter((img) => !existingImageSrcs.has(img));
preloaderItems.value.push(...newImages.map((img) => ({ src: img, type: 'image' })));

// Get font families from variables.json and add to preloader items (only if preloaderfont is enabled)
if (variables.component.preloaderfont) {
  const fontNames = new Set();
  for (const value of Object.values(variables.font.family)) {
    const fontName = value.split(',')[0].replace(/['"]/g, '').trim();
    fontNames.add(fontName);
  }

  const existingFontIds = new Set(preloaderItems.value.filter((item) => item.type === 'font').map((item) => item.id));
  for (const fontName of fontNames) {
    if (!existingFontIds.has(fontName)) {
      const fontObject = {
        id: fontName,
        type: 'font',
      };

      preloaderItems.value.push(fontObject);
    }
  }
}

const el = useTemplateRef('el');
const elText = useTemplateRef('elText');

const loadedCount = ref(0);
const totalItems = ref(0);

const integerNumber = computed(() => Math.floor(preloadProgress.value));

const updateProgress = () => {
  if (totalItems.value === 0) return;

  const targetProgress = (100 * loadedCount.value) / totalItems.value;
  gsap.to(preloadProgress, {
    value: targetProgress,
    duration: 0.1,
    ease: 'none',
    onUpdate: () => {
      preloadProgress.value = Number(preloadProgress.value.toFixed(0));
    },
  });
};

const loadImage = (src) => {
  return new Promise((resolve) => {
    const img = new Image();

    const handleComplete = () => {
      loadedCount.value++;
      updateProgress();
      resolve(img);
    };

    img.onload = handleComplete;
    img.onerror = () => {
      if (DEV) {
        console.error(`Failed to load image: ${src}`);
      }
      handleComplete();
    };

    img.src = src;
  });
};

const loadFont = () => {
  return new Promise((resolve) => {
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready
        .then(() => {
          loadedCount.value++;
          updateProgress();
          resolve();
        })
        .catch(() => {
          // Fallback if fonts.ready fails
          loadedCount.value++;
          updateProgress();
          resolve();
        });
    } else {
      // Fallback for older browsers
      requestAnimationFrame(() => {
        loadedCount.value++;
        updateProgress();
        resolve();
      });
    }
  });
};

const loadItem = (item) => {
  if (item.type === 'image') {
    return loadImage(item.src);
  } else if (item.type === 'font') {
    return loadFont();
  }

  // Fallback for unknown types
  return new Promise((resolve) => {
    loadedCount.value++;
    updateProgress();
    resolve();
  });
};

const leave = () => {
  gsap.to(preloadProgress, {
    value: 100,
    duration: 0.1,
    ease: 'none',
    onUpdate: () => {
      preloadProgress.value = Number(preloadProgress.value.toFixed(0));
    },
  });

  const tl = gsap.timeline({
    onComplete: () => {
      isPreloadDone.value = true;
    },
  });

  tl.to(elText.value, {
    yPercent: -101,
    duration: 0.5,
  });

  tl.to(
    el.value,
    {
      opacity: 0,
      duration: 0.5,
    },
    '<=50%',
  );
};

const afterDone = () => {
  ScrollTrigger.refresh();
};

watch(isPreloadDone, (value) => {
  if (value) {
    afterDone();
  }
});

const lenis = useNuxtApp().$lenis;

onMounted(() => {
  if (isPreloadDone.value) return;

  lenis.scrollTo(0, {
    duration: 0,
    force: true,
    immediate: true,
  });

  const preload = () => {
    // Calculate total items from preloaderItems array
    totalItems.value = preloaderItems.value.length;

    // If no items to preload, immediately complete
    if (totalItems.value === 0) {
      totalItems.value = 1;
      loadedCount.value = 1;
      updateProgress();
      leave();
      return;
    }

    // Load all items from preloaderItems array
    const loadPromises = preloaderItems.value.map((item) => loadItem(item));

    Promise.all(loadPromises).finally(() => {
      leave();
    });
  };

  preload();
});
</script>

<style scoped lang="scss">
.preloader {
  position: fixed;
  z-index: 9999;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;

  color: $color-text;

  background-color: $color-background;
}

.preloader__inner {
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  padding: fn.toVw(20);

  @include mx.mobile {
    height: calc(100vh - var(--vhmobilebar));
    padding: fn.toVw(20);
  }
}

.preloader__text {
  font-size: 14px;
  transition: transform 0.5s $transition-ease;
}
</style>
