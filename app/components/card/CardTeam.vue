<template>
  <div class="card-bout">
    <div class="img">
      <MediaImg src="/team1.png" alt="Leah Wald" />
    </div>

    <Text class="title" tag="h3" variant="heading1" data-split data-linereveal>
      Leah Wald
    </Text>

    <template v-if="!props.isDownload">
      <Text class="desc" variant="body28" data-split data-linereveal>
        Leah Wald is an accomplished entrepreneur with deep expertise in alternative asset management and disruptive technologies. As Co-Founder and CEO of Valkyrie Investments, she led the firm to over $1.3 billion in AUM through cryptocurrency trusts, hedge funds, and ETFs. Valkyrie’s advisory business was acquired by CoinShares, and its private trust division by Abra Capital in 2024. Previously, Leah spearheaded multi-billion-dollar investment strategies at Vital Financial and served as a Partner at Lucid Investment Strategies. Ms. Wald is a contributing writer for Forbes and co-authored the book Hyperwave Theory: The Rogue Waves of Financial Markets. She holds an MS from IE Business School and a BA from Pitzer College.
      </Text>
    </template>

  </div>
</template>

<script setup>
const props = defineProps({
  desc: {
    type: String,
  },

});
</script>

<style scoped lang="scss">
.card-about {
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


</style>
