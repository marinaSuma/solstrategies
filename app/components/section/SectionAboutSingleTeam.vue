<template>
  <section ref="el" class="team">
    <div class="bg">
      <MediaImg src="/teamSingleBG.png" alt="Team Background" />
    </div>

    <div class="container">
      <div class="singleTeam">
        <div class="img">
          <MediaImg src="/team1.png" alt="Leah Wald" />
        </div>
        
        <div class="content">
          <Text tag="h3" data-split data-linereveal>Leah Wald</Text>
          <Text tag="h6" class="titleDown" data-split data-linereveal reveal-notrigger reveal-waitpreloader reveal-delay="0.18">President / CEO</Text>
          <Text tag="p" class="text"  data-split data-linereveal>
            Leah Wald is an accomplished entrepreneur with deep expertise in alternative asset management and disruptive technologies. As Co-Founder and CEO of Valkyrie Investments, she led the firm to over $1.3 billion in AUM through cryptocurrency trusts, hedge funds, and ETFs. Valkyrie’s advisory business was acquired by CoinShares, and its private trust division by Abra Capital in 2024. Previously, Leah spearheaded multi-billion-dollar investment strategies at Vital Financial and served as a Partner at Lucid Investment Strategies. Ms. Wald is a contributing writer for Forbes and co-authored the book Hyperwave Theory: The Rogue Waves of Financial Markets. She holds an MS from IE Business School and a BA from Pitzer College.
          </Text>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>


const el = useTemplateRef('el');

let ctx;


</script>

<style scoped lang="scss">
.bg {
  top: 0;
  left: 0;
  position: absolute;
  z-index: 0;
  opacity: 0.8;
}


.singleTeam {
    align-items: center;
    display: flex;
    min-height: 100vh;
    overflow: hidden;
    position: relative;
    width: 100%;
    gap: 50px;
    /* flex-wrap: wrap; */
    .img {
      flex: 0 0 400px;
      background: #d3d3d3 50% / cover no-repeat;
      background-blend-mode: luminosity;
      border-radius: 15px;
      filter: grayscale(1);
      overflow: hidden;
    }
    .content {
      flex: 1;
      max-width: 599px;
      h3 {
        font-size: 60px;
      }
      h6 {
        font-size: 24px;
        margin-bottom: 40px;
      }
      p.text {
        font-size: 18px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
      }
    }
    @include mx.mobile {
    }
}










</style>
