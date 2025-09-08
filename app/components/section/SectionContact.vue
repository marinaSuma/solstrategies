<template>
  
  <section class="contactform">
    
    <div id="request">
      <div class="bgForm">
        <MediaImg class="bgTop" src="/ctc-bgTop.webp" alt="Contact Background" />
        <MediaImg class="bgBottom" src="/ctc-bgBot.webp" alt="Contact Background" />
      </div>
      <div class="cerrar cerrarmenu">
         <MediaImg src="/closeContact.svg" alt="Close Form" />
      </div>
      <div class="request-in">
        <div class="request-content">
          <Text tag="h2" variant="heading2" data-split data-linereveal><strong>Let's talk!</strong> <br>We're here to help</Text>
          <Text tag="p" variant="text1" data-split data-linereveal>Drop us a message</Text>
          <Text tag="p" variant="text2" data-split data-linereveal>Please provide your info and we'll connect with you soon.</Text>
          <div class="form mt-5">
            
            <div class="form-group floating-label col-sm-6">
              <input type="text" id="full_name" name="full_name" class="form-control" placeholder=" " required />
              <label for="full_name">
                  <span class="label-text">Full Name</span><span class="required">*</span>
              </label>
            </div>

            <div class="form-group floating-label col-sm-6">
              <input type="text" id="company_name" name="company_name" class="form-control" placeholder=" " required />
              <label for="company_name">
                  <span class="label-text">Company Name</span><span class="required">*</span>
              </label>
            </div>

             <div class="form-group floating-label col-sm-6">
              <input type="text" id="phone" name="phone" class="form-control" placeholder=" " required />
              <label for="phone">
                  <span class="label-text">Phone Number</span><span class="required">*</span>
              </label>
            </div>

             <div class="form-group floating-label col-sm-6">
              <input type="email" id="your_email" name="your_email" class="form-control" placeholder=" " required />
              <label for="your_email">
                  <span class="label-text">E-mail</span><span class="required">*</span>
              </label>
            </div>

            <div class="form-group floating-label col-sm-12">
              <input type="text" id="inquiry" name="inquiry" class="form-control" placeholder=" " />
              <label for="inquiry">
                  <span class="label-text">Type of Inquiry</span>
              </label>
            </div>

             <div class="form-group floating-label col-sm-12">
              <textarea name="your_message" cols="40" rows="7" class="form-control" placeholder=""></textarea>
              <label for="your_message">
                  <span class="label-text">Type your message</span>
              </label>
            </div>
            <div class="col-sm-12">
              <div class="form-group"><input id="enviar" type="submit" value="Submit" class="button" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bodycerrar"></div>
  </section>




</template>



<script setup>

let ctx;

import { onMounted } from 'vue';
import gsap from 'gsap';

let active = false;

onMounted(() => {
  const buttons = document.querySelectorAll(".btn-request, .cerrarmenu, .bodycerrar");
  const overlay = document.querySelector(".bodycerrar");
  const panel = document.querySelector("#request");

  // Configuración inicial
  gsap.set(panel, { right: "-100%" });
  gsap.set(overlay, { opacity: 0, zIndex: -1 });

  // Timeline para abrir
  const tl = gsap.timeline({ paused: true })
    .to(overlay, { opacity: 0.9, zIndex: 9, duration: 0.3 }, 0) // primero o al mismo tiempo
    .to(panel, { right: 0, duration: 0.5, ease: "power2.out" }, 0); // animación del panel

  // Timeline para cerrar
  const tlClose = gsap.timeline({ paused: true })
    .to(panel, { right: "-100%", duration: 0.5, ease: "power2.in" }, 0)
    .to(overlay, { opacity: 0, zIndex: -1, duration: 0.3 }, 0);

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (active) {
        active = false;
        tlClose.restart();
      } else {
        active = true;
        tl.restart();
      }
    });
  });
});

</script>







<style scoped lang="scss">
.bgForm {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
}



  #request{
    padding: 0;
    position: fixed;
    width: 740px;
    height: 100vh;
    overflow: auto;
    top: 0;
    right: 0;
    background: #fff;
    border-radius: 30px 0px 0px 30px;
    right: -100%;
    transition: all 0.5s;
    z-index: 99999;
    box-shadow: 0px 25px 55px 0px rgba(0, 0, 0, 0.05);
    overflow: auto;
    -webkit-transition: 0.4s;
    -moz-transition: 0.4s;
    -o-transition: 0.4s;
    transition: 0.4s;

    @include mx.mobile {
     width: 93%;
    }
  }




  #request.show {
      right: 0;
      transition: all 0.3s;
  }


  #request .cerrar{
    position: absolute;
    top: 66px;
    right: 40px;
    z-index: 3;
    width: 24px;
  }

  #request .cerrar:hover{
    cursor: pointer;
  }



  #request .request-in{
    padding-left: 76px;
    padding-right: 90px;
    padding-top: 60px;
    padding-bottom: 60px;
    margin-top: 0;
    display: flex;
    align-items: center;
    min-height: 100%;
    overflow: auto;
    @include mx.mobile {
      padding: 60px 30px;
    }
  }

  #request .request-content {
    height: auto;
  }


  #request h2 {
    margin-bottom: 7px;
    color: #000;
    font-size: 60px;
    font-style: normal;
    font-weight: 300;
    line-height: 99%;
    @include mx.mobile {
      font-size: 45px;
    }
  }


  #request h2 strong{
    font-weight: 500;
  }




  p.font-text1 {
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 6px;
    @include mx.mobile {
      font-size: 18px;
    }
  }

  p.font-text2 {
    font-size: 18px;
    color: #686868;
    @include mx.mobile {
      font-size: 16px;
    }
  }




  body.formopen {
    overflow: hidden;
    position: relative;
  }
  header.menuopen {
  /*    transform: translateX(-20%);*/
  }

  #smooth-wrapper.menuopen {
  /*    transform: translateX(-20%);*/
  }


  body .bodycerrar{
    background-color: #696969;
    mix-blend-mode: multiply;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    opacity: 0;
    z-index: -1;
    transition: all 0.3s ease-out;
  }


  body.formopen .bodycerrar{
    opacity: 0.9;
    z-index: 9;
    transition: all 0.3s ease-out;
  }



.form {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 30px -10px 0;
}

  .form-group {
    margin-bottom: 22px;
    @include mx.mobile {
     margin-bottom: 10px;
    }
  }


  .col-sm-6.floating-label {
    flex-basis: 1;
    -ms-flex-preferred-size: 0;
    flex-basis: 50%;
    -ms-flex-positive: 1;
    flex-grow: 0;
    padding: 0 5px;
    @include mx.mobile {
     flex-basis: 100%;
    }
  }

  .col-sm-12.floating-label {
    flex-basis: 1;
    -ms-flex-preferred-size: 0;
    flex-basis: 100%;
    -ms-flex-positive: 1;
    flex-grow: 0;
    padding: 0 5px;
  }

  .form-group.boton {
    margin-bottom: 0px;
  }

  .form-control {
    height: 41px;
    line-height: 160.5%;
    padding: 0 21px;
    border-radius: 10px;
    border: 1px solid #DFDFDF;
    background: #FFF;
    width: 100%;
  }

  input#enviar {
    background: #000;
    background-position: 49px 18px;
    background-repeat: no-repeat;
    background-size: auto;
    border: none;
    border-radius: 10px;
    color: #fff;
    font-size: 16px;
    height: 41px;
    padding: 0 50px;
    transition: .4s;
  }


  input#enviar:hover {
    background-color: #111;

  }

  .form-control::-webkit-input-placeholder{
    color:#7E7E7E;
    }

  .form-control:-moz-placeholder{ /* Firefox 18- */
    color:#7E7E7E; 
    }

  .form-control::-moz-placeholder{  /* Firefox 19+ */
    color:#7E7E7E; 
    }

  .form-control:-ms-input-placeholder{  
    color:#7E7E7E;
    }







  .form-control:focus::-webkit-input-placeholder{
      color:transparent;
    }

  .form-control:focus:-moz-placeholder{ /* Firefox 18- */
      color:transparent; 
    }

  .form-control:focus::-moz-placeholder{  /* Firefox 19+ */
      color:transparent; 
    }

  .form-control:focus:-ms-input-placeholder{  
      color:transparent;
    }




  .floating-label {
    position: relative;
    flex-basis: 1;
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -ms-flex-positive: 1;
    flex-grow: 1;
  }

  .floating-label label {
    color: #9F9F9F;
    font-size: 16px;
    padding: 0 17px;
    position: absolute;
    top: 10px;
    left: 0;
  }

  .floating-label label span.required {
    color: #F00;
  }


  .floating-label input:focus + label,
  .floating-label input:not(:placeholder-shown) + label {
    display: none;
  }


  textarea.form-control {
    resize: none;
    height: 140px;
    @include mx.mobile {
      height: 120px;
    }
  }

  .cerrarmenu{}

  .cerrarmenu img{}

</style>