<template>
  <section ref="el" class="team">
    <div class="bg-bottom">
      <MediaImg src="/team-bg.png" alt="Team Background" />
    </div>

    <div class="container">
     
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
