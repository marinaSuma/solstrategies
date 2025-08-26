// Server vs Browser
// See: https://github.com/vercel/next.js/issues/5354#issuecomment-520305040
export const IS_SERVER = import.meta.server;
export const IS_BROWSER = import.meta.client;

// for device detection use useDevice().isMobile // isDesktop
export const IS_DESKTOP = useScreenQuery().isDesktop;
export const IS_MOBILE = useScreenQuery().isMobile;

// Environment Constants
export const DEV = process.env.NODE_ENV === 'development';
export const PROD = process.env.NODE_ENV !== 'development';
