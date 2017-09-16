<template>
  <div id="app">
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <a href="" class="navbar-brand">¿Dónde Comemos?</a>
        </div>
        <form class="navbar-form navbar-center" role="search">
          <div class="form-group">
            <input v-model="filtro_busqueda" type="text" class="form-control barra barra-cerrada barra-principal" placeholder="Search">
            <button v-on:click="buscar" type="submit" class="btn btn-default boton-search">
              <i class="fa fa-search" aria-hidden="true"></i>
            </button>
            <button class="btn btn-default boton-search-avanzado">
              <i class="fa fa-chevron-down" aria-hidden="true"></i>
            </button>
          </div>
          <br>
          <div class="grupo2 form-group">
            <input type='text' class='form-control barra input-presupuesto barra-cerrada' placeholder='Presupuesto'>
            <div class="grupo-extra">
              <input type='text' class='form-control barra input-presupuesto barra-cerrada' placeholder='Ubicación'>
              <button class="btn btn-default boton-gps input-presupuesto">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </nav>
    <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{

  },
  mounted(){
    var _this = this;
    $(document).ready(function(){
      //size del mapa relativo al navbar
      let navSize = $(".navbar").height();
      console.log($(".barra-principal").width());
      let barras = document.getElementsByClassName("barra");
      let avanzado = false;
      $(".boton-search-avanzado").click(function(){
        if (avanzado === false) {
          for (var i = 0; i < barras.length; i++) {
            $(barras[i]).animate({width: '+=380px'}, 300);
          }
          $(".navbar").animate({height: '+=80px'}, 200);
          $(".input-presupuesto").css("visibility","visible");
        }else if(avanzado === true){
          for (var i = 0; i < barras.length; i++) {
            $(barras[i]).animate({width: '-=380px'}, 300);
          }
          $(".navbar").animate({height: '-=80px'}, 200);
          $(".input-presupuesto").css("visibility","hidden");
        };
        avanzado = !avanzado;
        return false;
      });

      let searchClick = false;
      $(".barra-principal").focusin(function(){
        if (avanzado === false && searchClick === false) {
          $(".barra-principal").animate({width: '+=380px'}, 300);
        }
        searchClick = !searchClick;
      });

      $(".barra-principal").focusout(function(){
        if (avanzado === false && searchClick === true) {
          $(".barra-principal").animate({width: '-=380px'}, 300);
        }
        searchClick = !searchClick;
      });
    });
  }
}
</script>

<style>

html, body {
    max-width: 100%;
    overflow-x: hidden;
}

.navbar-center {
  position: absolute;
  left: 50%;
  transform: translatex(-50%);
  display: block !important;
}

input.barra{
  padding-left: 15px;
  width: 50%;
}

.navbar{
  height: 100%;
  margin-bottom: 0;
}

.input-presupuesto{
  visibility: hidden;
}

</style>
