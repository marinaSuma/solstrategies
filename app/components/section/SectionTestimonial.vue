<template>
  <section class="testimonial">
    <div class="bg">
      <MediaImg class="desktop" src="/testimonial-bg.png" alt="Overview Background" />
      <MediaImg class="mobile" src="/testimonial-bg-m.png" alt="Overview Background Mobile" />
    </div>

    <div class="content">
      <div class="quote">
        <IconQuote />
      </div>

      <div class="text">
        <Text class="text__quote" variant="uc" data-split data-linereveal reveal-delay="0.15">
          We believe Solana will be the future of programmable finance and one of the most disruptive technologies
          <b>transforming global trading.</b>”
        </Text>
      </div>

      <div class="profile">
        <MediaImg class="profile__img" src="/leah-wald.jpg" alt="Leah Wald" />
        <Text class="profile__name" variant="body26">Leah Wald</Text>
        <Text class="profile__role" variant="body16">Chief Executive Officer</Text>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.testimonial {
  position: relative;
  padding-top: fn.toVw(140);
  padding-bottom: fn.toVw(197);

  @include mx.mobile {
    padding-top: fn.toVw(104);
    padding-bottom: fn.toVw(102);
  }
}

.bg {
  pointer-events: none;

  position: absolute;
  z-index: -1;
  top: 0;
  right: 0;

  width: fn.toVw(1830);

  @include mx.mobile {
    top: fn.toVw(-200);
    width: 100%;
  }
}

.content {
  width: 100%;
  max-width: fn.toVw(711);
  margin: 0 auto;
  text-align: center;

  @include mx.mobile {
    padding: 0 fn.toVw($layout-container-mobile);
  }

  .quote {
    width: fn.toVw(64);
    margin: 0 auto;
    margin-bottom: fn.toVw(74);

    @include mx.mobile {
      width: fn.toVw(46);
      margin-bottom: fn.toVw(35);
    }
  }

  .text {
    .text__quote {
      font-weight: 300;
      text-transform: uppercase;

      b {
        font-weight: 500;
      }
    }
  }

  .profile {
    margin-top: fn.toVw(122);

    @include mx.mobile {
      margin-top: fn.toVw(60);
    }

    .profile__img {
      width: fn.toVw(200);
      margin: 0 auto;

      @include mx.mobile {
        width: fn.toVw(150);
      }
    }

    .profile__name {
      margin-top: fn.toVw(23);
      margin-bottom: fn.toVw(7);

      @include mx.mobile {
        margin-top: fn.toVw(17);
        margin-bottom: fn.toVw(10);
        font-size: fn.toVw(16);
      }
    }

    .profile__role {
      font-weight: 300;
      text-transform: uppercase;
    }
  }
}
</style>
