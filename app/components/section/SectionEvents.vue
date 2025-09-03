<template>
<section ref="el" class="events">
  <div class="container">

     <div class="title">
      <Text tag="h2" variant="heading2" data-split data-linereveal> Upcoming Events</Text>
    </div>


		<div class="financial-grid">
			<div class="financials">				
        <div class="new-latest-financials__list">
          
        
          <div class="new-latest-financials__item first ">
            <Text class="title" tag="h4" data-split data-linereveal reveal-notrigger reveal-waitpreloader reveal-delay="0.18">Event Details</Text>
            <Text class="title" tag="h2" data-split data-linereveal reveal-notrigger reveal-waitpreloader reveal-delay="0.22">SOL Strategies First Quarter 2025 Financial Results Webcast and Conference Call</Text>
            
            <Text tag="p" class="text"  data-split data-linereveal reveal-notrigger reveal-waitpreloader reveal-delay="0.18">SOL Strategies Inc. (CSE: HODL) (OTCQX: CYFRF) (formerly, Cypherpunk Holdings Inc, “SOL Strategies” or the “Company”), a publicly traded Canadian company dedicated to investing in and providing infrastructure for the Solana blockchain ecosystem, today announced it will release its financial results for the first quarter of 2025 on Monday, March 3, 2025, at 4:30 PM EST.</Text>
          </div>

          <div class="new-latest-financials__item "> 
            <div class="title">
              <Text tag="p" class="title">WEBCAST DATE</Text>
            </div>  
            <div class="date">
              <Text tag="p" class="text">Monday, March 3, 2025, at 4:30 PM EST</Text>
            </div>         
            
          </div>
          <div class="new-latest-financials__item "> 
            <div class="title">
              <Text tag="p" class="title">LIVE CALL</Text>
            </div>  
            <div class="date">
              <Text tag="p" class="text">(800) 579-2543 Primary (US) or (785) 424-1789 (International)</Text>
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
        <div class="border">
          <div class="top"><MediaImg src="press-top.svg" alt="border" /></div>
          <div class="bottom"><MediaImg src="press-bottom.svg" alt="border" /></div>
        </div>
        <div class="top">
            <MediaImg src="SolLogo.svg" class="logo" alt="Logo" />
            <Text tag="p" class="small"  data-split data-linereveal reveal-notrigger reveal-waitpreloader reveal-delay="0.18"> solstrategies.io </Text>
        </div>
        <Text class="title" tag="h4" data-split data-linereveal reveal-notrigger reveal-waitpreloader reveal-delay="0.18">First Quarter 2025 Financial Results </Text>
        <div class="tags">
          <ButtonCta class="tag" variant="brown" data-split data-linereveal reveal-notrigger reveal-waitpreloader reveal-delay="0.18">Webcast</ButtonCta>
          <ButtonCta class="tag" variant="yell" data-split data-linereveal reveal-notrigger reveal-waitpreloader reveal-delay="0.25">conference call</ButtonCta>
        </div>
        <Text tag="p" class="text" data-split data-linereveal reveal-notrigger reveal-waitpreloader reveal-delay="0.18">CEO Leah Wald, CFO Doug Harris and CTO Max Kaplan will host a webcast and conference call to discuss the results following the release. Participants will have the opportunity to ask questions during the call.</Text>
        <div class="meta">
          <Text tag="p" class="date"> <MediaImg src="icon-calendar.svg" class="icon" alt="Icon" /> 03.03.2025 </Text>
          <Text tag="p" class="clock"> <MediaImg src="icon-clock.svg" class="icon" alt="Icon" /> 4:30 PM EST </Text>
        </div>
      
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
