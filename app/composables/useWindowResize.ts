/**
 * Example usage:
 *
 * const handleResize = () => {
 *   init()
 * };
 *
 * useWindowResize(handleResize); // skipFirstInit defaults to true
 * useWindowResize(handleResize, false); // run on first init too
 */

export const useWindowResize = (callback: () => void, skipFirstInit = false) => {
  const hasBeenInitialized = ref(false);

  const wrappedCallback = () => {
    if (skipFirstInit && !hasBeenInitialized.value) {
      hasBeenInitialized.value = true;
      return;
    }
    callback();
  };

  const debouncedResize = useDebounceFn(wrappedCallback, 1000);

  const cleanup = useEventListener(window, 'resize', debouncedResize);

  return {
    cleanup,
  };
};
