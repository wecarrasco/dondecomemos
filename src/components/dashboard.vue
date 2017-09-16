<template>
  <div class="cuerpo">
    <div class="row">
      <div class="col-lg-3 wrapper-col">
        <div class="restaurantes-en-mapa">
          <div class="bloque"></div>
          <div class="bloque"></div>
          <div class="bloque"></div>
          <div class="bloque"></div>
          <div class="bloque"></div>
        </div>
        <div class="restaurantes-favoritos">
          <div class="bloque2"></div>
          <div class="bloque2"></div>
          <div class="bloque2"></div>
          <div class="bloque2"></div>
          <div class="bloque2"></div>
        </div>
      </div>
      <div class="col-lg-9 wrapper-col">
        <div class="div-mapa" id="basic_map"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      marcadores: [],
      map,
      filtro_busqueda: null
    }
  },methods:{
    simon:function(){
      alert("simon")
    },
    traerRestaurantes:function(){
      this.$http.get("http://localhost:8000/marcadores/restaurantes").then((res)=>{
        var restaurantes = res.body;
        for (var i = 0; i < restaurantes.length; i++) {
          var direcciones = restaurantes[i].Direcciones;
          let nombre = restaurantes[i].Nombre;
          for (var j = 0; j < direcciones.length; j++) {
            this.$http.get("http://localhost:8000/marcadores/direcciones?id="+direcciones[j]).then((res)=>{
              var dir = res.body;
              for (var k = 0; k < dir.length; k++) {
                let lati = dir[k].Latitud;
                let lon = dir[k].Longitud;
                this.mapa.addMarker({
                  lat: lati,
                  lng: lon,
                  title: nombre
                });
              }
            });

          }
        }
      });
    },
    buscar:function(event){
      let _this = this;
      _this.mapa.removeMarkers();
      GMaps.geolocate({
        success: function(position){
            _this.mapa.setCenter(position.coords.latitude, position.coords.longitude);
            _this.mapa.addMarker({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            title: "You",
            icon: "src/assets/marker_you.png"
          })
        },error: function(error) {
          alert('Geolocation failed: '+error.message);
        },not_supported: function() {
          alert("Your browser does not support geolocation");
        }
      });

      this.$http.get("http://localhost:8000/marcadores/restaurantes").then((res)=>{
        var restaurantes = res.body;
        for (var i = 0; i < restaurantes.length; i++) {
          var direcciones = restaurantes[i].Direcciones;
          let nombre = restaurantes[i].Nombre;
          let stringTags = "";
          let tags = restaurantes[i].Tags;
          if (typeof tags !== "undefined") {
            for (var l = 0; l < tags.length; l++) {
              stringTags += tags[l];
            }
          }
          stringTags += nombre
          if (stringTags.toUpperCase().indexOf(_this.filtro_busqueda.toUpperCase()) > -1) {
            for (var j = 0; j < direcciones.length; j++) {
              this.$http.get("http://localhost:8000/marcadores/direcciones?id="+direcciones[j]).then((res)=>{
                var dir = res.body;
                for (var k = 0; k < dir.length; k++) {
                  let lati = dir[k].Latitud;
                  let lon = dir[k].Longitud;
                  this.mapa.addMarker({
                    lat: lati,
                    lng: lon,
                    title: nombre
                  });
                }
              });
            }
          }
        }
      });
    return false;
    }
  },mounted(){
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

    GMaps.geolocate({
      success: function(position){
          _this.mapa.setCenter(position.coords.latitude, position.coords.longitude);
          _this.mapa.addMarker({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          title: "You",
          icon: "src/assets/marker_you.png"
        })
      },error: function(error) {
        alert('Geolocation failed: '+error.message);
      },not_supported: function() {
        alert("Your browser does not support geolocation");
      }
    });

    _this.traerRestaurantes();
    // $(document).ready(function(){
    //   //size del mapa relativo al navbar
    //   let navSize = $(".navbar").height();
    //   $(".div-mapa").css("height", "100vh").css("height", "-="+navSize);
    //
    //   let barras = document.getElementsByClassName("barra");
    //   let avanzado = false;
    //   $(".boton-search-avanzado").click(function(){
    //     if (avanzado === false) {
    //       for (var i = 0; i < barras.length; i++) {
    //         $(barras[i]).animate({width: '+=380px'}, 300);
    //       }
    //       $(".navbar").animate({height: '+=80px'}, 200);
    //       $(".input-presupuesto").css("visibility","visible");
    //     }else if(avanzado === true){
    //       for (var i = 0; i < barras.length; i++) {
    //         $(barras[i]).animate({width: '-=380px'}, 300);
    //       }
    //       $(".navbar").animate({height: '-=80px'}, 200);
    //       $(".input-presupuesto").css("visibility","hidden");
    //     };
    //     avanzado = !avanzado;
    //     return false;
    //   });
    //
    //   let searchClick = false;
    //   $(".barra-principal").focusin(function(){
    //     if (avanzado === false && searchClick === false) {
    //       $(".barra-principal").animate({width: '+=380px'}, 300);
    //     }
    //     searchClick = !searchClick;
    //   });
    //
    //   $(".barra-principal").focusout(function(){
    //     if (avanzado === false && searchClick === true) {
    //       $(".barra-principal").animate({width: '-=380px'}, 300);
    //     }
    //     searchClick = !searchClick;
    //   });
    //
    //
    //   $(window).resize(function() {
    //     google.maps.event.trigger(_this.mapa, 'resize');
    //     let navSize = $(".navbar").height();
    //     $(".div-mapa").css("height", "100vh").css("height", "-="+navSize);
    //   });
    //   let heighentre2 = $(".navbar").height()/2;
    //   $(".restaurantes-en-mapa").css("height", "50vh").css("height", "-="+heighentre2);
    //   $(".restaurantes-favoritos").css("height", "50vh").css("height", "-="+heighentre2);
    //   google.maps.event.trigger(_this.mapa, 'resize');
    // });
  }
};
</script>

<style lang="css" scoped>

htlm{
  overflow: hidden;
}

.wrapper-col{
  padding: 0;
}

.restaurantes-en-mapa{
  height: 50vh;
  background-color: red;
  overflow-y: scroll;
}

.restaurantes-favoritos{
  height: 50vh;
  background-color: red;
  overflow-y: scroll;
}

.bloque{
  height: 130px;
  background-color: blue;
  border: 2px solid black;
}

.bloque2{
  height: 130px;
  background-color: red;
  border: 2px solid black;
}

.div-mapa{
  height: 100vh;
}

.cuerpo{
  overflow: hidden;
  height: 100%;
  min-height: 100%;
}



</style>
