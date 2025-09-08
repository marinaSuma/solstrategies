<template>
  <section class="contactform" id="request" ref="el">
    <div id="request">
      <div class="cerrar cerrarmenu">
        <p>CERRAR MENU</p>
      </div>
      <div class="request-in">
        <div class="request-content">
          <h2><strong>Get in touch</strong> with us</h2>
          <p>Please provide your info and we’ll connect with you soon.</p>
          <div class="form mt-5">
            FORMULARIO
          </div>
        </div>
      </div>
    </div>
    <div class="bodycerrar"></div>
  </section>




</template>



<script setup>

const el = useTemplateRef('el');
let ctx;

	let active = false;

	const buttons = document.querySelectorAll(".btn-request, .cerrarmenu, .bodycerrar");

	gsap.set("#request", {
	  right: "-100%" // Inicialmente, la caja está fuera de la pantalla
	});

	buttons.forEach((button) => {
	  button.addEventListener("click", () => {
		if (active) {
		  // close
		  active = false;
		  gsap.to("#request", {
			right: "-100%" // Cuando se cierra, la caja vuelve a estar fuera de la pantalla
		  }, "0");
			 document.body.classList.remove("formopen");
		} else {
		  // open
		  active = true;
		  gsap.to("#request", {
			right: 0, // Cuando se abre, la caja se mueve a la posición 0 desde la derecha
		  }, "0");
		  // Agrega la clase ".menuopen" al body cuando se abre la caja
		  document.body.classList.add("formopen");
		}
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


  body.menuopen header .navbar ul li.menu-has-dropdown .dropdown{
	  opacity: 0; 
    visibility: hidden;
  }


  .btn-request:hover{
    cursor: pointer;
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
    z-index: 999;
    box-shadow: 0px 25px 55px 0px rgba(0, 0, 0, 0.05);
    overflow: auto;
    -webkit-transition: 0.4s;
    -moz-transition: 0.4s;
    -o-transition: 0.4s;
    transition: 0.4s;
  }




  #request.show {
      right: 0;
      transition: all 0.5s;
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


  #request .text.blue {
    color: #2151C5;
    margin-bottom: 25px;
    max-width: 390px;
  }

  #request h2 {
    margin-bottom: 7px;
  }


  #request h2 strong{
    color: var(--red)
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


  body .bodycerrar, body .teamcerrar {
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


  body.formopen .bodycerrar, body.menuopen .teamcerrar{
    opacity: 0.9;
    z-index: 9;
    transition: all 0.3s ease-out;
  }



  .form{}

  .form-group {
    margin-bottom: 22px;
  }


  .form-group.boton {
    margin-bottom: 0px;
  }

  .form-control {
    border: 0.5px solid #2d2d2d;
    border-radius: 58px;
    height: 51px;
    padding: 0 21px;
    color: #7E7E7E;
    font-family: 'Inter';
    font-size: 14px;
    font-weight: 400;
    line-height: 160.5%;
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





  .wpcf7-not-valid-tip {
    color:  var(--red);
    font-size: 12px;
    font-weight: normal;
    display: block;
    position: relative;
    top: 4px;
    left: 5px;
  }


  .wpcf7-validation-errors, .wpcf7-mail-sent-ok,
  .wpcf7 form.invalid .wpcf7-response-output, .wpcf7 form.unaccepted .wpcf7-response-output,
  .wpcf7 form.sent .wpcf7-response-output,
  .wpcf7 form.invalid .wpcf7-response-output, .wpcf7 form.unaccepted .wpcf7-response-output, .wpcf7 form.payment-required .wpcf7-response-output, .wpcf7 form .wpcf7-response-output{
    border: none !important;
    }


  .form-control.wpcf7-not-valid {
    border-color: var(--red);
  }




  .form form{
  /*	position: relative;*/
  }
  .wpcf7 form.sent .wpcf7-response-output {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    margin: 0;
    justify-content: center;
    align-items: center;
    display: flex;
    font-style: normal;
    font-weight: 400;
    font-size: 35px;
    line-height: 42px;
    text-align: center;
    color: #000000;
    padding-top: 90px;
    padding-bottom: 40px;
  }

  .wpcf7 form.sent .wpcf7-response-output:before {
    content: '';
    display: block;
    position: absolute;
    width: 61px;
    height: 64px;
    background-image: url(images/check.png);
    margin: auto;
    top: 23%;
  }








  select.wpcf7-form-control.wpcf7-select.wpcf7-validates-as-required.form-control.select-hidden,
  select.wpcf7-form-control.wpcf7-select.form-control.select-hidden{
    display: none;
  }

  .select-styled {
    border: 0.5px solid #2d2d2d;
    border-radius: 58px;
    height: 51px;
    color: #7E7E7E;
    padding: 0 21px;
    font-family: 'Inter';
    line-height: 51px;
    font-size: 14px;
  }

  ul.select-options {
    background-color: #fff;
    position: absolute;
    width: 100%;
    height: auto;
    top: 0;
    height: auto;
    color: #7E7E7E;
    padding: 0 21px;
    font-family: 'Inter';
    line-height: 51px;
    border: 0.5px solid #2d2d2d;
    border-radius: 23px;
    z-index: 2;
    padding-top: 13px;
    padding-bottom: 25px;
  }

  ul.select-options li {
    font-size: 14px;
    line-height: 25px;
    position: relative;
    padding-left: 23px;
  }

  ul.select-options li:first-child {
    /* visibility: hidden; */
    padding-bottom: 18px;
    font-size: 14px;
    padding-left: 0;
  }

  ul.select-options li:before {
    position: absolute;
    left: 0;
    top: 6px;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    content: '';
    background-color: #D9D9D9;
  }

  ul.select-options li:first-child:before {
    display: none;
  }


  ul.select-options li:hover:before {
    background-color: var(--red);
    cursor: pointer;
  }

  .select-styled:after {
    position: absolute;
    top: 0;
    right: 16px;
    content: '';
    font-size: 21px;
    width: 18px;
    height: 100%;
    background-image: url(images/select.svg);
    background-repeat: no-repeat;
    background-position: center;
  }

</style>