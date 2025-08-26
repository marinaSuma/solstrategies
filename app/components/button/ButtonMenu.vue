<template>
  <button class="menu-toggle" :class="{ active: props.activeClass }" type="button" aria-label="Toggle menu">
    <span class="menu-toggle__icon">
      <svg class="hamburger" width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="0.406738" y1="0.355115" x2="19.0165" y2="0.355115" stroke="black" stroke-width="0.443089" />
        <line x1="0.406494" y1="4.78608" x2="19.0163" y2="4.78608" stroke="black" stroke-width="0.443089" />
        <line x1="0.406494" y1="9.21699" x2="19.0163" y2="9.21699" stroke="black" stroke-width="0.443089" />
      </svg>

      <svg class="close" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="0.823223" y1="14.0835" x2="13.9823" y2="0.924392" stroke="black" stroke-width="0.5" />
        <line
          y1="-0.25"
          x2="18.6098"
          y2="-0.25"
          transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 14 14.2607)"
          stroke="black"
          stroke-width="0.5" />
      </svg>
    </span>
    <span class="menu-toggle__label">Menu</span>
  </button>
</template>

<script setup>
const props = defineProps({
  activeClass: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped lang="scss">
.menu-toggle {
  display: none;
  align-items: center;

  font-size: fn.toVw(14);
  line-height: 1;
  color: inherit;

  @include mx.mobile {
    display: inline-flex;
  }

  &:deep(svg) {
    width: fn.toVw(19);
    max-height: fn.toVw(13);
    transition: opacity 0.3s ease;
  }

  &.active {
    .menu-toggle__icon {
      background-color: #f1f1f1;

      .hamburger {
        line {
          stroke-dashoffset: 60;
          transition-delay: 0s;

          &:nth-of-type(2) {
            transition-delay: 0.1s;
          }

          &:nth-of-type(3) {
            transition-delay: 0.2s;
          }
        }
      }

      .close {
        line {
          stroke-dashoffset: 0;
          transition-delay: 0.5s;

          &:nth-of-type(2) {
            transition-delay: 0.6s;
          }
        }
      }
    }

    .menu-toggle__label {
      background-color: $color-neutral;
    }
  }

  .menu-toggle__icon {
    position: relative;
    z-index: 1;

    overflow: hidden;

    width: 100%;
    max-width: none;
    margin-right: fn.toVw(-27);
    padding: fn.toVw(13) fn.toVw(15);
    padding-right: calc(fn.toVw(27) + fn.toVw(9));
    border-radius: fn.toVw(10);

    background: #edf1f9;

    transition: background-color 0.3s ease;

    .hamburger {
      line {
        stroke-dasharray: 20;
        stroke-dashoffset: 0;
        transition: stroke-dashoffset $transition-default;
        transition-delay: 0.4s;

        &:nth-of-type(2) {
          transition-delay: 0.5s;
        }

        &:nth-of-type(3) {
          transition-delay: 0.6s;
        }
      }
    }

    .close {
      position: absolute;
      z-index: 2;
      top: 50%;
      left: 50%;
      transform: translate(-100%, -50%);

      line {
        stroke-dasharray: 20;
        stroke-dashoffset: 20;
        transition: stroke-dashoffset $transition-default;
        transition-delay: 0s;

        &:nth-of-type(2) {
          transition-delay: 0.075s;
        }
      }
    }
  }

  .menu-toggle__label {
    position: relative;
    z-index: 2;

    padding: fn.toVw(13) fn.toVw(15);
    border-radius: fn.toVw(10);

    font-size: fn.toVw(13);
    font-weight: 300;
    text-transform: uppercase;

    background: $color-background;

    transition: background-color 0.3s ease;
  }
}
</style>
