<template>
<section ref="el" class="press">
  <div class="container">

		<div class="press-grid">
			<div class="press-results">	
        
        <div class="title">
          <Text tag="h2" variant="heading2" data-split data-linereveal>Latest Financial Results & Investor Information</Text>
        </div>
        <div class="press-list">
          
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

				<a href="#">
          <div class="buttons">
            <ButtonCta class="cta" variant="black">View All</ButtonCta>
          </div>
				</a>
			</div>


      <div class="press-press">	
        
        <div class="title">
          <Text tag="h2" variant="heading2" data-split data-linereveal>Press Releases</Text>
        </div>
        <div class="press-list">
          
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

				<a href="#">
          <div class="buttons">
            <ButtonCta class="cta" variant="grey">See all press</ButtonCta>
          </div>
				</a>
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
