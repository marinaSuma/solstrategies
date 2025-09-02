<template>
  <div class="card">
    <div v-if="props.background" class="bg">
      <MediaImg :src="props.background" alt="Background of card" />
    </div>

    <!-- <div class="top">
      <Text class="title" variant="heading1medium60" data-split>{{ props.title }}</Text>
      <Text class="number" variant="heading1medium60" data-split>(0{{ props.number }})</Text>
    </div>

    <div class="bottom">
      <Text class="desc" variant="heading1medium60" tag="span">
        <slot name="desc" />
      </Text>
    </div> -->
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  number: String,
  desc: String,
  background: String,
});
</script>


<style scoped lang="scss">
.card {
  position: relative;

  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: fn.toVw(615);
  padding: fn.toVw(85) fn.toVw(115) fn.toVw(92) fn.toVw(109);
  border-radius: fn.toVw(55);

  color: $color-white;

  background-color: #ef8268;

  @include mx.mobile {
    height: fn.toVw(438);
    padding: fn.toVw(67) fn.toVw(26) fn.toVw(63) fn.toVw(28);
    border-radius: fn.toVw(24);
  }

  &.active {
    .bottom {
      .desc {
        ul,
        &:deep(ul) {
          li {
            &::before {
              transform: scale(1);
            }
          }
        }
      }
    }
  }
}

.bg {
  position: absolute;
  z-index: 1;
  inset: 0;

  width: 100%;
  height: 100%;
}

.top {
  position: relative;
  z-index: 2;

  display: flex;
  justify-content: space-between;

  font-weight: 400;

  .title,
  .number {
    font-weight: inherit;

    @include mx.mobile {
      font-size: fn.toVw(32);
    }
  }

  .title {
    max-width: fn.toVw(428);

    @include mx.mobile {
      max-width: fn.toVw(222);
      font-weight: 400;
    }
  }

  .number {
    @include mx.mobile {
      font-weight: 300;
    }
  }
}

.bottom {
  position: relative;
  z-index: 2;
  max-width: fn.toVw(478);

  .desc {
    @include mxt.font-body22;

    ul,
    &:deep(ul) {
      li {
        position: relative;
        padding-left: 1em;

        &::before {
          content: '•';

          position: absolute;
          top: 0;
          left: 0;
          transform: scale(0);

          transition: transform $transition-default;
          transition-delay: 0.35s;
        }
      }
    }
  }
}
</style>
