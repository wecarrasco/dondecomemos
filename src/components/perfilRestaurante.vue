<template lang="html">
  <div class="perfilRestaurante">
    <div class="section row" id="section1">
      <div class="col-lg-4 izquierda">
        <img src="./assets/dondecomemosLogo.jpg" alt="Logo" class="logo">
        <h1>¿Dónde Comemos?</h1>
      </div>
      <div class="col-lg-8 derecha">
        <div class="div-mapa" id="basic_map"></div>
      </div>
    </div>
    <div class="section" id="section2">
      <h1 class="descripcion">Las mejores carnitas, en un solo lugar.</h1>
    </div>
    <div class="section row" id="section3">
      <div class="col-lg-2 animated fadeInLeft ribbon">
        <h1 class="rating ribbon3 ribbon-iz"><span class="big">4 </span> <span class="little">/ 5  </span><i class="fa fa-star" aria-hidden="true"></i></h1>
      </div>
      <div class="col-lg-3 sectionIcon sectionHeart">
        <svg class="heart iconoPrincipal" viewBox="0 0 32 29.6" v-on:click="heartClick" v-bind:class="{'heart-pulse': isLike}">
          <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
          c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
        </svg>
        <h3 class="likeText">Like</h3>
      </div>
      <div class="col-lg-2 sectionIcon sectionCheckin">
        <img src="../static/noCheckIn.svg" alt="noCheckIn icon" class="iconoPrincipal checkinIcon checkOff">
        <img src="../static/checkIn.svg" alt="checkIn icon" class="iconoPrincipal checkinIcon oculto">
        <h3 class="checkText">Check In</h3>
      </div>
      <div class="col-lg-3 sectionIcon sectionShare">
        <img src="../static/share.svg" alt="share icon" class="iconoPrincipal shareIcon">
        <h3 class="shareText">Share</h3>
      </div>
      <div class="col-lg-2 animated fadeInRight ribbon">
        <h1 class="likes ribbon3 ribbon-der"><span class="big">400 </span> <span class="little"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i></span></h1>
      </div>
    </div>
    <div class="section" id="section4">

      <div class="carrusel-peque">
        <div class="centrar-carruel">
          <figure class="snip1132">
            <img src="http://lorempixel.com/400/200/food/1/" alt="">
            <figcaption>
              <div class="heading">
                <h3>¿Dónde <span> Comemos?</span></h3>
              </div>
              <div class="caption">
                <p>¿Dónde Comemos?</p>
              </div>
            </figcaption>
          </figure>
        </div>
        <div class="centrar-carruel">
          <figure class="snip1132">
            <img src="http://lorempixel.com/400/200/food/2/" alt="">
            <figcaption>
              <div class="heading">
                <h3>¿Dónde <span> Comemos?</span></h3>
              </div>
              <div class="caption">
                <p>¿Dónde Comemos?</p>
              </div>
            </figcaption>
          </figure>
        </div>
        <div class="centrar-carruel">
          <figure class="snip1132">
            <img src="http://lorempixel.com/400/200/food/3/" alt="">
            <figcaption>
              <div class="heading">
                <h3>¿Dónde <span> Comemos?</span></h3>
              </div>
              <div class="caption">
                <p>¿Dónde Comemos?</p>
              </div>
            </figcaption>
          </figure>
        </div>
        <div class="centrar-carruel">
          <figure class="snip1132">
            <img src="http://lorempixel.com/400/200/food/4/" alt="">
            <figcaption>
              <div class="heading">
                <h3>¿Dónde <span> Comemos?</span></h3>
              </div>
              <div class="caption">
                <p>¿Dónde Comemos?</p>
              </div>
            </figcaption>
          </figure>
        </div>
        <div class="centrar-carruel">
          <figure class="snip1132">
            <img src="http://lorempixel.com/400/200/food/5/" alt="">
            <figcaption>
              <div class="heading">
                <h3>¿Dónde <span> Comemos?</span></h3>
              </div>
              <div class="caption">
                <p>¿Dónde Comemos?</p>
              </div>
            </figcaption>
          </figure>
        </div>
        <div class="centrar-carruel">
          <figure class="snip1132">
            <img src="http://lorempixel.com/400/200/food/6/" alt="">
            <figcaption>
              <div class="heading">
                <h3>¿Dónde <span> Comemos?</span></h3>
              </div>
              <div class="caption">
                <p>¿Dónde Comemos?</p>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
    <div class="section" id="section5">
      <button id="botonIzquierda" class="botonNextPrev"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>
      <figure class="snip1132 figBig">
        <img src="" alt="" class="imagen-grande">
        <figcaption>
          <div class="heading">
            <h3>¿Dónde <span> Comemos?</span></h3>
          </div>
          <div class="caption">
            <p>¿Dónde Comemos?</p>
          </div>
        </figcaption>
      </figure>
      <button id="botonDerecha" class="botonNextPrev"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>
    </div>
    <div class="section" id="section6">
      <div class="row-fluid">
        <div class="col-lg-12">
          <h3 class="inline sucursal">Sucursal: </h3>
          <div class="dropdown inline">
            <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Tegucigalpa
              <span class="caret"></span></button>
              <ul class="dropdown-menu">
                <li><a>HTML</a></li>
                <li><a>CSS</a></li>
                <li><a>JavaScript</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 section6-izq">
            <h3><span class="mediano">Dirección: </span>Col. Bella Oriente</h3>
            <h3><span class="mediano">Telefono: </span>+504 22552255</h3>
          </div>
        </div>
      </div>
    </div>
  </template>

  <script>
  import slick from 'slick-carousel';
  export default {
    data(){
      return{
        map,
        imagenes:['checkIn', 'noCheckIn'],
        checkIneado: false,
        isLike: true,
        test: 'test'
      }
    },methods:{
      heartClick: function(){
        //alert(this.isLike+"-"+this.checkIneado+"-"+this.test);
        console.log(this.isLike+"-"+this.checkIneado+"-"+this.test);
        if (this.isLike === true) {
          this.isLike = false;
        }else{
          this.isLike = true;
        }
      }
    }, mounted(){
      this.isLike = true;
      var _this = this;
      var mapaThis = _this.mapa;
      _this.mapa = new GMaps({
        el: '#basic_map',
        lat: 51.5073346,
        lng: -0.1276831,
        zoom: 16,
        zoomControl : true,
        zoomControlOpt: {
          style : 'SMALL',
          position: 'TOP_LEFT'
        },
        panControl : false,
        styles: [
          {
            "featureType": "poi.attraction",
            "stylers": [{"visibility": "off"}]
          },
          {
            "featureType": "poi.business",
            "stylers": [{"visibility": "off"}]
          },
          {
            "featureType": "poi.government",
            "stylers": [{"visibility": "off"}]
          },
          {
            "featureType": "poi.medical",
            "stylers": [{"visibility": "off"}]
          },
          {
            "featureType": "poi.place_of_worship",
            "stylers": [{"visibility": "off"}]
          },
          {
            "featureType": "poi.school",
            "stylers": [{"visibility": "on"}]
          },
          {
            "featureType": "poi.sports_complex",
            "stylers": [{"visibility": "off"}]
          }
        ]
      });

      google.maps.event.trigger(_this.mapa, 'resize');
      $(document).ready(function(){
        $('.carrusel-peque').slick({
          centerMode: true,
          slidesToShow: 3,
          focusOnSelect: true,
          dots: true,
          arrows: true,
          centerPadding: '50px',
          pauseOnHover: true,
          autoplay: true,
          prevArrow: document.getElementById('botonIzquierda'),
          nextArrow: document.getElementById('botonDerecha'),
          responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '50px',
                slidesToShow: 3
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '50px',
                slidesToShow: 1
              }
            }
          ]
        });

        $(".slick-slider").on("afterChange", function(){
          let imagenCentroSrc = $(".slick-center").children("figure").children("img").attr("src");
          // alert(imagenCentroSrc)
          $(".imagen-grande").attr("src", imagenCentroSrc);
        });

        let imagenCentroSrc = $(".slick-center").children("figure").children("img").attr("src");
        // alert(imagenCentroSrc)
        $(".imagen-grande").attr("src", imagenCentroSrc);


        //v-on:click
        // $(".heart").click(function(){
        //   //$(".heart").css("animation", "pulse 1s ease infinite");
        //   if ($(".heart").hasClass("heart-pulse")) {
        //     $(".heart").removeClass("heart-pulse");
        //   }else{
        //     $(".heart").addClass("heart-pulse");
        //   }
        // });

        //v-on:click
        // $(".checkinIcon").click(function(){
        //   if($(".checkinIcon").hasClass("checkOff")){
        //     $(".oculto").addClass("checkOn").removeClass("oculto")
        //     $(".checkOff").addClass("oculto");
        //   }
        // });


        //afterCreate
        let section3Height = $("#section3").height()/6;
        $(".sectionHeart").css("margin-top",section3Height);
        $(".sectionShare").css("margin-top",section3Height);
        $(".sectionCheckin").css("margin-top",section3Height);

        let heartWidth = $(".heart").width()/4;
        $(".likeText").css("margin-right", heartWidth);
        $(window).resize(function(){
          let sectionHeight = $("#section3").height()/4;
          $(".sectionHeart").css("margin-top",sectionHeight);
          $(".sectionShare").css("margin-top",sectionHeight);
          $(".sectionCheckin").css("margin-top",sectionHeight);
        });
      });
    }
  }
  </script>

  <style lang="css" scoped>
  html{
    overflow-y: scroll;
    overflow-x: hidden;
  }

  .inline{
    display: inline-block;
  }

  .wrapper-col{
    padding: 0;
  }

  .logo{
    width: 300px;
    height: 300px;
    border-radius: 150px;
    -webkit-border-radius: 150px;
    -moz-border-radius: 150px;
    margin-top: 5px;
  }

  .izquierda{
    /*background-color: red;*/
    text-align: center;
  }

  .derecha{
    /*background-color: blue;*/
  }

  .div-mapa{
    height: 350px;
    width: 900px;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  #section2{
    text-align: center;
  }

  .rating{
    /*border-top: 2px solid black;
    border-bottom: 2px solid black;
    border-right: 2px solid black;*/
    text-align: center;
  }

  .likes{
    /*border-top: 2px solid black;
    border-bottom: 2px solid black;
    border-left: 2px solid black;*/
    text-align: center;
  }

  .big{
    font-size: 50px;
  }

  .mediano{
    font-size: 35px;
  }

  .heart {
    fill: grey;
    position: relative;
    /*top: 5px;*/
    width: 50px;
  }

  .shareIcon{

  }

  .heart-pulse{
    animation: pulse 1s ease infinite;
    fill: #ff781e;
  }

  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.3); }
    100% { transform: scale(1); }
  }

  .iconoPrincipal{
    width: 80px;
    height: 77px;
  }

  .sectionHeart{
    text-align: right;
  }

  .sectionCheckin{
    text-align: center;
    /*border-left: 2px solid black;
    border-right: 2px solid black;*/
  }

  .sectionShare{
    text-align: left;
  }

  .likeText{
    display: block;
    margin-right: 18px !important;
  }

  .shareText{
    display: block;
    margin-left: 10px !important;
  }

  .sectionIcon{
    vertical-align: top;
    display: inline-block;
  }

  .oculto{
    display: none;
  }
  #section1{
    margin-top: 1%;
  }

  #section3{
    margin-top: 5%;
  }

  #section4{
    margin-top: 5%;
  }

  #section5{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #section6{
    margin-top: 5%;
  }

  /*.row{
  border: 2px solid black;
  }*/

  .slick-center>img{

  }

  .centro{
    margin: 0 auto;
    width: 100%;
  }

  .centrar-carruel{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  figure.snip1132 {
    font-family: 'Raleway', Arial, sans-serif;
    position: relative;
    float: left;
    overflow: hidden;
    margin: 10px 1%;
    min-width: 220px;
    max-width: 400px;
    max-height: 220px;
    width: 100%;
    background: #000000;
    color: #ffffff;
    text-align: center;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  }

  figure.figBig {
    max-width: 50%;
    max-height: 500px;
  }

  figure.snip1132 * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition: all 0.45s ease-in-out;
    transition: all 0.45s ease-in-out;
  }

  figure.snip1132 img {
    max-width: 100%;
    position: relative;
    opacity: 1;
  }

  figure.snip1132 figcaption {
    position: absolute;
    top: 20px;
    left: 20px;
    right: 20px;
    bottom: 20px;
    border: 1px solid white;
    border-width: 0 1px;
  }

  figure.snip1132 .heading {
    overflow: hidden;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  figure.snip1132 .caption {
    overflow: hidden;
    -webkit-transform: translateY(50%);
    transform: translateY(50%);
    position: absolute;
    width: 100%;
    bottom: 0;
  }

  figure.snip1132 h3,
  figure.snip1132 p {
    display: table;
    margin: 0 auto;
    padding: 0 10px;
    position: relative;
    text-align: center;
    width: auto;
    text-transform: uppercase;
    font-weight: 400;
  }

  figure.snip1132 h3{
    font-size: 1.5em;
  }

  figure.figBig h3{
    font-size: 2.5em;
  }

  figure.snip1132 h3 span,
  figure.snip1132 p span {
    font-weight: 800;
  }

  figure.snip1132 h3:before,
  figure.snip1132 p:before,
  figure.snip1132 h3:after,
  figure.snip1132 p:after {
    position: absolute;
    display: block;
    width: 1000%;
    height: 1px;
    content: '';
    background: white;
  }

  figure.snip1132 h3:before,
  figure.snip1132 p:before {
    left: -1000%;
  }

  figure.snip1132 h3:after,
  figure.snip1132 p:after {
    right: -1000%;
  }

  figure.snip1132 h3:before,
  figure.snip1132 h3:after {
    top: 50%;
  }

  figure.snip1132 p {
    font-size: 0.8em;
    font-weight: 500;
  }

  figure.figBig p {
    font-size: 1.5em;
    font-weight: 500;
  }

  figure.snip1132 p:before,
  figure.snip1132 p:after {
    bottom: 50%;
  }

  figure.snip1132 a {
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    position: absolute;
    z-index: 1;
  }

  figure.snip1132:hover img,
  figure.snip1132.hover img {
    opacity: 0.5;
    -webkit-transform: scale(1.15);
    transform: scale(1.15);
  }

  .imagen-grande{
    width: 100% !important;
  }

  .botonNextPrev{
    background: transparent;
    border: none;
    font-size: 3em;
  }

  .ribbon {
    /*position: relative;*/
    /*color: white;*/
  }

  .ribbon3 {
    width: 150px;
    height: 70px;
    line-height: 70px;
    padding-left: 15px;
    position: absolute;
    /*left: -8px;*/
    top: 20px;
    background: #ff781e;
  }

  .ribbon-der{
    right: 15px;
  }
  .ribbon3:before, .ribbon3:after {
    content: "";
    position: absolute;
  }
  .ribbon3:before {
    height: 0;
    width: 0;
    top: -8.5px;
    left: 0.1px;
    border-bottom: 9px solid transparent;
    border-left: 9px solid transparent;
  }
  .ribbon-iz:after {
    float:right !important;
    height: 0;
    width: 0;
    right: -14.5px;
    border-top: 35px solid transparent;
    border-bottom: 35px solid transparent;
    border-left: 15px solid #ff781e;
    /*border-right: 35px solid #ff781e;*/
  }

  .ribbon-der:after {
    height: 0;
    width: 0;
    right: 100%;
    border-top: 35px solid transparent;
    border-bottom: 35px solid transparent;
    /*border-left: 35px solid #ff781e;*/
    border-right: 35px solid #ff781e;
  }

  .sucursal{
    margin-left: 45%;
  }

  .dropdown{
    top: -5px;
  }

  .section6-izq{
    border-right: 3px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .section6-izq h3{
    display: inline-block;
  }
  </style>
