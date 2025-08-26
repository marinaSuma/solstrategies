import config from '~~/config/variables.json';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (import.meta.client) {
  gsap.registerPlugin(ScrollTrigger);
}

// Define types for enhanced Lenis instance
interface EnhancedLenis extends Lenis {
  pause: () => void;
  resume: () => void;
}

declare module '#app' {
  interface NuxtApp {
    $lenis: EnhancedLenis;
  }
}

export default defineNuxtPlugin({
  name: 'lenis',
  parallel: true,
  async setup(nuxtApp) {
    if (!config.component.smoothscroll) return;

    // const isPreloadDone = usePreloadDone();

    const lenisInstance = new Lenis({
      // content: document.querySelector(elScroller),
      duration: mathUtils().goldenRatio(6) - mathUtils().goldenRatio(2),
      easing: easeFunction().smoothScroll,
      orientation: 'vertical', // vertical, horizontal
      gestureOrientation: 'vertical', // vertical, horizontal, both
    });

    // if (config.component.preloader) {
    //   lenisInstance.stop();

    //   watch(isPreloadDone, (value) => {
    //     if (value) {
    //       lenisInstance.start();
    //     }
    //   });
    // }

    lenisInstance.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenisInstance.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    nuxtApp.hook('page:transition:finish', () => {
      lenisInstance.start();

      lenisInstance.scrollTo(0, {
        force: true,
        immediate: true,
      });
    });

    // Add helper methods directly to the Lenis instance
    const enhancedLenis = Object.assign(lenisInstance, {
      pause() {
        lenisInstance.stop();
        // document.documentElement.style.setProperty('overflow', 'hidden');
      },
      resume() {
        lenisInstance.start();
        // document.documentElement.style.removeProperty('overflow');
      },
    }) as EnhancedLenis;

    // Provide the enhanced instance directly
    nuxtApp.provide('lenis', enhancedLenis);
  },
});
