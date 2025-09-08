<template>
  
  <section class="contactform">
    <div id="request">
      <div class="cerrar cerrarmenu">
        <p>CERRAR MENU</p>
      </div>
      <div class="request-in">
        <div class="request-content">
          <h2><strong>Let's talk!</strong> <br>We're here to help</h2>
          <p><strong>Drop us a message</strong><br>Please provide your info and we’ll connect with you soon.</p>
          <div class="form mt-5">
            
            <div class="col-md-6 form-group floating-label">
              <input type="text" id="first_name" name="first_name" class="form-control" placeholder=" " required />
              <label for="first_name">
                  <span class="label-text">Full Name</span><span class="required">*</span>
              </label>
            </div>

             <div class="col-md-6 form-group floating-label">
              <input type="text" id="company_name" name="company_name" class="form-control" placeholder=" " required />
              <label for="company_name">
                  <span class="label-text">Company Name</span><span class="required">*</span>
              </label>
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
  .bg {
    top: 0;
    left: 0;
    pointer-events: none;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;

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
  }


  #request h2 strong{
    font-weight: 500;
  }


  /*

  body.page-dealers{
    transition: all 0.5s ease-out;
  }
  */


  body.formopen {
    overflow: hidden;
    position: relative;
  /*
    
    height: 100%!important;
  */
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
    gap: 10px;
    flex-wrap: wrap;
    margin: 30px 0 0;
}

  .form-group {
    margin-bottom: 22px;
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
    background: var(--red);
    border-radius: 100px;
    height: 49px;
    padding: 0 50px;
    padding-left: 70px;
    font-size: 16px;
    color: #fff;
    background-position: 49px 18px;
    background-size: auto;
    background-repeat: no-repeat;
    background-image: url(images/enviar.svg);
    -webkit-transition: 0.4s;
    -moz-transition: 0.4s;
    -o-transition: 0.4s;
    transition: 0.4s;
    border: none;
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
    padding: 0 12px;
    position: absolute;
    top: 27%;
    left: 0;
  }

  .floating-label label span.required {
    color: #F00;
  }


  .floating-label input:focus + label,
  .floating-label input:not(:placeholder-shown) + label {
    display: none;
  }



</style>