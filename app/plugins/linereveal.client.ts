import config from '~~/config/variables.json';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (import.meta.client) {
  gsap.registerPlugin(ScrollTrigger);
}

export default defineNuxtPlugin({
  name: 'linereveal',
  dependsOn: ['splittext'],
  async setup(nuxtApp) {
    const isSplitTextDone = useSplitTextDone();
    const isPreloadDone = usePreloadDone();

    const selector = 'data-linereveal';

    const runLineReveal = () => {
      gsap.utils.toArray(`[${selector}]`).forEach((el: Element) => {
        const lines = el.querySelectorAll('.line');

        const delay = Number(el.getAttribute('reveal-delay'));
        const trigger = el.hasAttribute('reveal-notrigger');
        const isPreload = el.hasAttribute('reveal-waitpreloader');
        const isWords = el.hasAttribute('reveal-words');

        let words: any;
        if (isWords) {
          words = el.querySelectorAll('.word');
        }

        const animProperty = {
          yPercent: 105,
          stagger: 0.15,
          delay: delay,
          duration: 1.4,
          scrollTrigger: {
            trigger: trigger ? null : el,
          },
        };

        if (!trigger) {
          animProperty.scrollTrigger.trigger = el;
        } else {
          delete animProperty.scrollTrigger;
        }

        if (config.component.preloaderfont && isPreload) {
          const tlPreload = gsap.timeline({
            paused: config.component.preloaderfont ? true : false,
          });

          tlPreload.from(isWords ? words : lines, {
            ...animProperty,
          });

          if (!config.component.preloaderfont) return;
          if (!isPreloadDone.value) {
            watch(isPreloadDone, (value) => {
              if (value) {
                tlPreload.play();
              }
            });
          } else {
            tlPreload.play();
          }
        } else {
          gsap.from(isWords ? words : lines, {
            ...animProperty,
          });
        }

        // Remove data attributes to keep DOM clean after animation setup
        el.removeAttribute(selector);
        if (delay) el.removeAttribute('reveal-delay');
        if (trigger) el.removeAttribute('reveal-notrigger');
        if (isPreload) el.removeAttribute('reveal-waitpreloader');
        if (isWords) el.removeAttribute('reveal-words');
      });
    };

    const cleanupAnimations = () => {
      gsap.killTweensOf('[data-split] .line, [data-split] .word');
    };

    const { trigger } = watchTriggerable(isSplitTextDone, (value) => {
      if (value) {
        runLineReveal();
      }
    });

    nuxtApp.hook('page:finish', async () => {
      callOnce(() => {
        cleanupAnimations();
        trigger();
      });
    });

    nuxtApp.hook('page:transition:finish', async () => {
      cleanupAnimations();
      trigger();
    });
  },
});
