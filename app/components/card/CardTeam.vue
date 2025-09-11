<template>

  <div class="team-item">
    <div class="img">
       <slot name="img"></slot>
    </div>

    <div class="content">
      <div class="name-container">
        <slot name="title"></slot>
        <div class="social">
          <a v-if="linkedin" :href="linkedin" target="_blank" class="social-link">
            <MediaImg src="/linkedin.svg" alt="Linkedin" />
          </a>
          <a v-if="twitter" :href="twitter" target="_blank" class="social-link">
            <MediaImg src="/twitter.svg" alt="Twitter" />
          </a>
        </div>
      </div>

      <!-- Descripción -->
      <div class="text">
         <slot name="desc"></slot>
      </div>
      <div class="linkTeam">
        <a href="#" class="btn">
          Read bio
          <MediaImg class="bioArrow" src="/bio.svg" alt="Read bio" />
        </a>
      </div>
    </div>
  </div>




</template>

<script setup lang="ts">
const props = defineProps({
  linkedin: String,
  twitter: String,
})

const slots = defineSlots()
</script>



<style scoped lang="scss">

  .list {
  margin-top: fn.toVw(57);
  .section-slider {
    padding-left: 160px;
  }

  @include mx.mobile {
    margin-top: fn.toVw(40);
  }
}

.navigation {
  display: flex;
  gap: fn.toVw(16);
  justify-content: flex-end;
  margin-top: fn.toVw(10);

  &.navigation-desktop {
    display: flex;

    @include mx.mobile {
      display: none;
    }
  }

  &.navigation-mobile {
    display: none;

    @include mx.mobile {
      display: flex;
    }
  }

  .next {
    transform: scaleX(-1);
  }
}



.team-item {
    flex: 0 0 calc(16% - 20px);
    box-sizing: border-box;
    @include mx.mobile {
      &:not(:first-child) {
        border-top: 1px solid #D0D0D0;
        padding-top: 50px;
      }
      
    }
    .img {
      border-radius: 6px;
      overflow: hidden;
      background: #d3d3d3 50% / cover no-repeat;
      background-blend-mode: luminosity;
      filter: grayscale(1);
      a {
        display: block;
        -webkit-transition: 0.4s;
        -moz-transition: 0.4s;
        -o-transition: 0.4s;
        transition: 0.4s;
        overflow: hidden;

        &:hover {
          transform: scale(1.1);
        } 
      }
    }
    .content {
      padding-top: 15px;
      .name-container {
        display: flex;
        gap: 30px;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
        h6 {
          color: #171717;
          font-size: 30px;
          flex: 0 0 60%;
        }
        .social {
          display: flex;
          gap: 16px;
        }
      }

      .text , .text p{
        color: #828282;
        font-size: 16px;
      }
      .linkTeam {
        margin-top: 15px;
        a.btn {
          display: flex;
          overflow: visible;
          gap: 7px;
          .bioArrow {
            width: 12px;
            height: 11px;
            transform-origin: center bottom;
            display: block;
            overflow: visible;
            -webkit-transition: 0.4s;
            -moz-transition: 0.4s;
            -o-transition: 0.4s;
            transition: 0.4s;
          }
          &:hover{
            .bioArrow {
              transform: rotate(45deg);
            }
          }
        }
      }
    }
  


}


</style>