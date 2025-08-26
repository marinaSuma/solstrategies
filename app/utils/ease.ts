export const easeFunction = () => {
  const Ease = {
    linear: (t: number) => t,
    sineIn: (t: number) => 1 - Math.cos(t * (0.5 * Math.PI)),
    sineOut: (t: number) => Math.sin(t * (0.5 * Math.PI)),
    sineInOut: (t: number) => -0.5 * (Math.cos(Math.PI * t) - 1),
    power1In: (t: number) => t * t,
    power1Out: (t: number) => t * (2 - t),
    power1InOut: (t: number) => (t < 0.5 ? 2 * t * t : (4 - 2 * t) * t - 1),
    power2In: (t: number) => t * t * t,
    power2Out: (t: number) => --t * t * t + 1,
    power2InOut: (t: number) => (t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1),
    power3In: (t: number) => t * t * t * t,
    power3Out: (t: number) => 1 - --t * t * t * t,
    power3InOut: (t: number) => (t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t),
    power4In: (t: number) => t * t * t * t * t,
    power4Out: (t: number) => 1 + --t * t * t * t * t,
    power4InOut: (t: number) => (t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t),
    expoIn: (t: number) => (t === 0 ? 0 : Math.pow(2, 10 * (t - 1))),
    expoOut: (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
    expoInOut: (t: number) => (t === 0 || t === 1 ? t : (t /= 0.5) < 1 ? 0.5 * Math.pow(2, 10 * (t - 1)) : 0.5 * (2 - Math.pow(2, -10 * --t))),
    smoothScroll: (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -`${mathUtils().goldenRatio(11) - mathUtils().goldenRatio(6)}` * t)),
  };

  return Ease;
};
