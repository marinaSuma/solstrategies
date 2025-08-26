import config from '~~/config/variables.json';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (import.meta.client) {
  gsap.registerPlugin(ScrollTrigger, SplitText);
}

export default defineNuxtPlugin({
  name: 'splittext',
  parallel: true,
  async setup(nuxtApp) {
    const isFontDone = useFontDone();
    const isSplitTextDone = useSplitTextDone();

    const splitTextInstances = [];

    const loadFontsAndProcess = () => {
      return new Promise<void>((resolve) => {
        if (document.fonts && document.fonts.ready) {
          document.fonts.ready.then(() => {
            isFontDone.value = true;
            resolve();
          });
        } else {
          // Fallback for older browsers - wait a bit for fonts to load
          setTimeout(() => {
            isFontDone.value = true;
            resolve();
          }, 100);
        }
      });
    };

    const selector = 'data-split';

    const processSplitText = () => {
      gsap.utils.toArray(`[${selector}]`).forEach((el: HTMLElement) => {
        const isWords = el.hasAttribute('split-words');

        const elSplit = SplitText.create(el, {
          type: isWords ? 'lines,words' : 'lines',
          linesClass: 'line',
          wordsClass: 'word',
          smartWrap: true,
          autoSplit: true,
          mask: 'lines',
        });

        splitTextInstances.push(elSplit);

        // Remove data attributes to keep DOM clean
        el.removeAttribute(selector);
        if (isWords) {
          el.removeAttribute('split-words');
        }

        isSplitTextDone.value = true;
      });
    };

    const cleanupSplitText = () => {
      splitTextInstances.forEach((instance) => instance.revert());
      splitTextInstances.length = 0;
    };

    if (config.component.preloaderfont) {
      await loadFontsAndProcess();
    } else {
      processSplitText();
    }

    const { trigger } = watchTriggerable(isSplitTextDone, () => {
      processSplitText();
    });

    nuxtApp.hook('page:start', async () => {
      isSplitTextDone.value = false;
    });

    nuxtApp.hook('page:finish', async () => {
      callOnce(() => {
        cleanupSplitText();
        trigger();
      });
    });

    nuxtApp.hook('page:transition:finish', async () => {
      cleanupSplitText();
      trigger();
    });
  },
});
