export const mathUtils = () => {
  const R = {
    iLerp: (a: number, b: number, t: number): number => R.clamp((t - a) / (b - a), 0, 1),

    lerp: (a: number, b: number, t: number): number => a * (1 - t) + b * t,

    damp: (a: number, b: number, lambda: number, dt: number): number => {
      const t = 1 - Math.exp(-lambda * dt);
      return a + (b - a) * t;
    },

    remap: (inMin: number, inMax: number, outMin: number, outMax: number, value: number): number =>
      R.lerp(outMin, outMax, R.iLerp(inMin, inMax, value)),

    clamp: (value: number, min: number, max: number): number => Math.max(min, Math.min(max, value)),

    clone: <T>(obj: T): T => (structuredClone ? structuredClone(obj) : JSON.parse(JSON.stringify(obj))),

    dist: (x: number, y: number): number => Math.hypot(x, y),

    goldenRatio: (step = 6, base = 0.1): number => {
      if (step < 1 || step > 12) throw new Error('Step must be between 1 and 12');
      return base * Math.pow(1.61803398875, step - 1);
      // 1 = 0.100
      // 2 = 0.162
      // 3 = 0.262
      // 4 = 0.424
      // 5 = 0.686
      // 6 = 1.109 - default
      // 7 = 1.795
      // 8 = 2.904
      // 9 = 4.703
      // 10 = 7.608
      // 11 = 12.296
      // 12 = 19.895
    },
  };

  return R;
};
