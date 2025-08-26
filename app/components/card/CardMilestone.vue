<template>
  <div class="card-milestone">
    <div v-if="props.background" class="bg">
      <MediaImg :src="props.background" alt="Background of card" />
    </div>

    <Text class="title" tag="h3" variant="heading1" data-split data-linereveal>
      <slot name="title" />
    </Text>

    <template v-if="!props.isDownload">
      <Text class="desc" variant="body28" data-split data-linereveal>
        {{ props.desc }}
      </Text>
    </template>
    <template v-else>
      <div class="desc-wrapper">
        <Text class="desc" variant="body28" data-split data-linereveal>
          {{ props.desc }}
        </Text>

        <div class="download">
          <NuxtLink to="https://apps.apple.com/us/app/orangefin-solana-staking/id6743318259" :external="true" target="_blank">
            <IconGoogleplay class="googleplay" />
          </NuxtLink>
          <NuxtLink to="https://play.google.com/store/apps/details?id=ventures.orangefin.staking" :external="true" target="_blank">
            <IconAppstore class="appstore" />
          </NuxtLink>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
const props = defineProps({
  desc: {
    type: String,
  },
  background: {
    type: String,
  },
  isDownload: {
    type: Boolean,
  },
});
</script>

<style scoped lang="scss">
.card-milestone {
  position: relative;

  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: fn.toVw(506);
  height: fn.toVw(400);
  padding: fn.toVw(39);
  border-radius: fn.toVw(30);

  background-color: #f8f8f8;

  @include mx.mobile {
    width: fn.toVw(395);
    height: fn.toVw(313);
    padding: fn.toVw(30) fn.toVw(15);
    border-radius: fn.toVw(23);
  }
}

.bg {
  position: absolute;
  z-index: 1;
  inset: 0;

  width: 100%;
  height: 100%;
}

.title,
.desc {
  position: relative;
  z-index: 2;
}

.title {
  width: 100%;
  max-width: fn.toVw(380);
  font-weight: 300;
  line-height: 1;

  @include mx.mobile {
    font-size: fn.toVw(44);
  }

  b,
  &:deep(b) {
    font-weight: 500;
  }
}

.desc {
  width: 100%;
  max-width: fn.toVw(280);

  @include mx.mobile {
    max-width: fn.toVw(200);
  }
}

.desc-wrapper {
  position: relative;
  z-index: 2;

  display: flex;
  flex-direction: column;
  gap: fn.toVw(5.5);

  .download {
    display: flex;
    gap: fn.toVw(7);

    &:deep(svg) {
      height: fn.toVw(37);
    }
  }
}
</style>
