type ElementMap = {
  [key: string]: Ref<HTMLElement | null>;
};

const elementsMap = reactive<ElementMap>({});

export function useElement(key: string, elementRef?: Ref<HTMLElement | null>) {
  if (elementRef) {
    elementsMap[key] = elementRef;

    watch(elementRef, (newVal) => {
      elementsMap[key] = ref(newVal);
    });

    onUnmounted(() => {
      if (elementsMap[key] === elementRef) {
        // Manually reconstruct the object without the key
        const newMap: ElementMap = {};
        for (const k in elementsMap) {
          if (k !== key) {
            newMap[k] = elementsMap[k];
          }
        }
        // Reassign the reactive object to trigger reactivity
        Object.assign(elementsMap, newMap);
      }
    });
  }

  return elementsMap[key] || ref(null);
}
