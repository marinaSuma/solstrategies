<template>
<section ref="el" class="events">
  <div class="container">

     <div class="title">
      <Text tag="h2" variant="heading1" data-split data-linereveal> Upcoming Events</Text>
    </div>


		<div class="financial-grid">
			<div class="financials">				
        <div class="new-latest-financials__list">
          
        
          <div class="new-latest-financials__item first fadeinUp">
            <Text class="title" tag="h4" data-split data-linereveal reveal-notrigger reveal-waitpreloader>Event Details</Text>
            <Text class="title" tag="h2" data-split data-linereveal reveal-notrigger reveal-waitpreloader>SOL Strategies First Quarter 2025 Financial Results Webcast and Conference Call</Text>
            
            <Text tag="p" class="text">SOL Strategies Inc. (CSE: HODL) (OTCQX: CYFRF) (formerly, Cypherpunk Holdings Inc, “SOL Strategies” or the “Company”), a publicly traded Canadian company dedicated to investing in and providing infrastructure for the Solana blockchain ecosystem, today announced it will release its financial results for the first quarter of 2025 on Monday, March 3, 2025, at 4:30 PM EST.</Text>
          </div>

          <div class="new-latest-financials__item fadeinUp"> 
            <div class="title">
              <Text tag="p" class="title">WEBCAST DATE</Text>
            </div>  
            <div class="date">
              <Text tag="p" class="text">Monday, March 3, 2025, at 4:30 PM EST</Text>
            </div>         
            
          </div>
          <div class="new-latest-financials__item fadeinUp"> 
            <div class="title">
              <Text tag="p" class="title">WEBCAST DATE</Text>
            </div>  
            <div class="date">
              <Text tag="p" class="text">Monday, March 3, 2025, at 4:30 PM EST</Text>
            </div>         
            
          </div>
          <div class="new-latest-financials__item fadeinUp"> 
            <div class="title">
              <Text tag="p" class="title">WEBCAST DATE</Text>
            </div>  
            <div class="date">
              <Text tag="p" class="text">Monday, March 3, 2025, at 4:30 PM EST</Text>
            </div>         
            
          </div>

        </div>

				<a href="/financials">
          <div class="buttons">
            <ButtonCta class="cta" variant="violet">Webcast Link</ButtonCta>
          </div>
				</a>
			</div>

      <div class="press">

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
   h2.heading1 {
    color: #000;
    font-weight: 200;
    font-size: 30px;
    font-weight: 300;
  }

</style>
