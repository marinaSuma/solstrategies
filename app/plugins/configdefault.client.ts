import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CustomEase } from 'gsap/CustomEase';
import config from '~~/config/variables.json';

if (import.meta.client) {
  gsap.registerPlugin(ScrollTrigger, CustomEase);
}

export default defineNuxtPlugin({
  name: 'configdefault',
  parallel: true,
  async setup() {
    // Config GSAP
    gsap.config({
      nullTargetWarn: DEV,
    });

    CustomEase.create(config.transition.name, config.transition.ease.match(/cubic-bezier\(([^)]+)\)/)[1]);

    gsap.defaults({
      ease: config.transition.name,
      duration: config.transition.duration,
    });

    ScrollTrigger.defaults({
      start: useDevice().isMobile ? 'top bottom' : `top bottom-=${config.transition.scrolloffset}%`,
    });

    // ScrollTrigger.normalizeScroll(true);
    ScrollTrigger.config({ ignoreMobileResize: true });

    ScrollTrigger.clearScrollMemory('manual');
  },
});
