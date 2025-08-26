<template>
  <template v-if="props.href">
    <NuxtLink class="no-underline" :to="props.href" :class="{ 'w-full': widthfull }">
      <button
        class="btn"
        :type="props.type"
        :class="{
          [props.size]: props.size,
          fill: props.fill,
          [props.variant]: props.variant,
          'w-full': props.widthfull,
          'is--disabled': props.disable,
        }">
        <span ref="elTextWrapper" class="text-wrapper">
          <span ref="elText" class="text-inner">
            <slot />
          </span>
        </span>
      </button>
    </NuxtLink>
  </template>
  <template v-else>
    <button
      class="btn"
      :type="props.type"
      :class="{
        [props.size]: props.size,
        fill: props.fill,
        [props.variant]: props.variant,
        'w-full': props.widthfull,
        'is--disabled': props.disable,
      }">
      <span ref="elTextWrapper" class="text-wrapper">
        <span ref="elText" class="text-inner">
          <slot />
        </span>
      </span>
    </button>
  </template>
</template>

<script setup>
const props = defineProps({
  href: String,
  text: String,
  type: {
    type: String,
    default: 'button',
  },
  size: {
    type: String, // small, medium
  },
  fill: {
    type: Boolean,
    default: true,
  },
  widthfull: {
    type: Boolean,
    default: false,
  },
  variant: {
    type: String,
    default: 'white',
    validator: (value) => ['white', 'black'].includes(value),
  },
  disable: {
    type: Boolean,
    default: false,
  },
});

const elTextWrapper = useTemplateRef('elTextWrapper');
const elText = useTemplateRef('elText');

onMounted(() => {
  const clonedElement = elText.value.cloneNode(true);
  clonedElement.classList.add('is--clone');
  elTextWrapper.value.appendChild(clonedElement);
});
</script>

<style scoped lang="scss">
.btn {
  cursor: pointer;

  position: relative;

  overflow: hidden;
  display: flex;
  gap: fn.toVw(12);
  align-items: center;
  justify-content: center;

  padding: fn.toVw(16) fn.toVw(41);
  border: 1px solid currentcolor;
  border-radius: fn.toVw(10);

  transition: color 0.3s $transition-ease;

  @include mxt.font-body16;

  @include mx.mobile {
    padding: fn.toVw(12) fn.toVw(26);
  }

  &:hover {
    .text-wrapper {
      .text-inner {
        &:not(.is--clone) {
          transform: translateY(-100%);
        }

        &.is--clone {
          transform: translateY(0);
        }
      }
    }
  }

  :deep(svg) {
    max-height: calc(fn.toVw(35) - fn.toVw(16));
  }

  &.fill {
    border: none;
    background-color: $color-background;
  }

  &.black {
    color: $color-background;
    background-color: $color-black;
  }

  &.fill.white {
    border: 1px solid transparent;

    color: $color-text;

    background:
      linear-gradient(#ffffff, #ffffff) padding-box,
      linear-gradient(0deg, #f2f2f2 0%, #818181 80%, #ffffff 100%) border-box;
    backdrop-filter: blur(3.8px);
    box-shadow: 0 29.1911px 29.1911px rgb(0 0 0 / 3%);
  }

  .text-wrapper {
    position: relative;
    overflow: hidden;

    .text-inner {
      display: block;
      transition: transform $transition-default;

      &.is--clone,
      &:deep(.is--clone) {
        position: absolute;
        inset: 0;
        transform: translateY(100%);
      }
    }
  }
}
</style>
