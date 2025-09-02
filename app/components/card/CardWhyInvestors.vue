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

.card {
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: fn.toVw(615);
  padding: 20px 30px;
  border-radius: fn.toVw(55);
  color: $color-white;
  background-color: #ef8268;

  @include mx.mobile {
    height: fn.toVw(438);
    padding: 20px 30px;
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
  z-index: 0;
  inset: 0;

  width: 100%;
  height: 100%;
}

.media-img.logo img {
  object-fit: contain;
  height: 50px;
  margin: 0;
}



.card.content:first-child {
  position: relative;
  text-align: left;
  align-items: flex-start;
}


.card.content{
  h1.title {
    color: #000;
    font-size: 80px;
    font-weight: 200;
  }

  p {
    color: #000;
    font-size: 19.893px;
    font-style: normal;
    font-weight: 400;
    line-height: 86%;
  }


  .buttons {
    display: flex;
    gap: 30px;


    .btn.fill {
      text-transform: uppercase;
      border-radius: 30px;
      .white {
        border: 1px solid #000;
        background: #F5F5F5;
        color: #000;
      }

      .black {
        border: 1px solid #000;
        background: #000;
      }
    }

  }



}


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
