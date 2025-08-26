export const useHeaderHidden = () => useState<boolean>('stateheaderHidden', () => false);
export const usePreloaderItems = () => useState<any[]>('statePreloaderItems', () => []);
export const useTransitionComplete = () => useState<boolean>('stateTransitionComplete', () => false);
export const useFontDone = () => useState<boolean>('stateFontDone', () => false);
export const useSplitTextDone = () => useState<boolean>('stateSplitTextDone', () => false);
export const usePreloadDone = () => useState<boolean>('statePreloadDone', () => false);
export const usePreloadProgress = () => useState<number>('statePreloadProgress', () => 0);
export const useCursor = () =>
  useState('stateCursor', () => ({
    show: false,
    clicked: false,
  }));
