export default function useResizeReload() {
  if (DEV) return;
  watch(useScreenQuery().isDesktop, () => {
    window.location.reload();
  });
}
