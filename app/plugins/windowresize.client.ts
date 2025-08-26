import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (import.meta.client) {
  gsap.registerPlugin(ScrollTrigger);
}

export default defineNuxtPlugin({
  name: 'windowresize',
  parallel: true,
  async setup() {
    // Use reactive window height
    const { height } = useWindowSize();
    let lastWindowHeight = height.value;

    const ev = new Event('resize', {
      bubbles: false,
      cancelable: false,
    });

    const resizeInit = (newHeight: number) => {
      ScrollTrigger.refresh();
      window.dispatchEvent(ev);
      lastWindowHeight = newHeight;
    };

    watchDebounced(
      height,
      () => {
        const currentHeight = height.value;

        // On mobile: only trigger on significant height change to prevent address bar issues
        // On desktop: trigger on any height change (which already happened since we're in the callback)
        const significantHeightChange = Math.abs(currentHeight - lastWindowHeight) > 100;

        if (useDevice().isMobile) {
          if (significantHeightChange) {
            resizeInit(currentHeight);
          }
        } else {
          // Desktop: height has already changed (that's why we're here), so always trigger
          resizeInit(currentHeight);
        }
      },
      { debounce: 100, maxWait: 1000 },
    );
  },
});
