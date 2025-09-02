<template>
  <div class="card">
    <div v-if="props.background" class="bg">
      <MediaImg :src="props.background" alt="Background of card" />
    </div>
    <slot />
  </div>
</template>



<script setup>
const props = defineProps({
  background: String
});
</script>

<style scoped lang="scss">



// .top {
//   position: relative;
//   z-index: 2;

//   display: flex;
//   justify-content: space-between;

//   font-weight: 400;

// }

// .bottom {
//   position: relative;
//   z-index: 2;
//   max-width: fn.toVw(478);

//   .desc {
//     @include mxt.font-body22;

//     ul,
//     &:deep(ul) {
//       li {
//         position: relative;
//         padding-left: 1em;

//         &::before {
//           content: '•';

//           position: absolute;
//           top: 0;
//           left: 0;
//           transform: scale(0);

//           transition: transform $transition-default;
//           transition-delay: 0.35s;
//         }
//       }
//     }
//   }
// }
</style>
