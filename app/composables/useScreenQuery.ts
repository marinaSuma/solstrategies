import variables from '~~/config/variables.json';

export const useScreenQuery = () => {
  const breakpoints = useBreakpoints(
    {
      mobile: 0,
      desktop: variables.base.query,
    },
    // { ssrWidth: variables.base.query },
  );

  // for device detection use useDevice().isMobile // isDesktop
  const isMobile = breakpoints.smallerOrEqual('desktop');
  const isDesktop = breakpoints.greater('desktop');

  return {
    breakpoints,
    isMobile,
    isDesktop,
  };
};
