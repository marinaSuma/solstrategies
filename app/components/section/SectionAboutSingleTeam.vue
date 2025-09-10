<template>
  <section ref="el" class="team">
    <div class="container">
      <div class="singleTeam">
        <div class="img">
          <MediaImg src="/bio.svg" alt="Leah Wald" />
        </div>
        
        <div class="content">
          <Text tag="h3" data-split data-linereveal>Leah Wald</Text>
          <Text tag="h6" class="titleDown" data-split data-linereveal>President / CEO</Text>
          <Text tag="p" class="text"  data-split data-linereveal reveal-notrigger reveal-waitpreloader reveal-delay="0.18"></Text>
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
section.team {
   @include mx.mobile {
  }
}

</style>
