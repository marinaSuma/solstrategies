<template>
  <component :is="tag" :class="variantClass">
    <slot />
  </component>
</template>

<script setup lang="ts">
import type variables from '~~/config/variables.json';

type Variant = keyof typeof variables.font;

const { tag = 'p', variant = 'body1' } = defineProps<{
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  variant?: Variant;
}>();

const variantClass = computed(() => {
  return tag === 'p' && variant === 'body1' ? '' : `font-${variant}`;
});
</script>
