<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Sectores y rutas económicas del país
    p.mb-5 Cuando se habla de las rutas y sectores económicos que dinamizan la economía nacional se debe tener presente el análisis del desarrollo de la infraestructura por donde se mueven y transportan las cargas a los diferentes lugares de la geografía nacional.
    h4 Sectores económicos
    .row.justify-content-center.mb-5
      .col-lg-8
        figure.mb-5
          img(src='@/assets/curso/img59.svg', alt='Texto que describa la imagen')
    p.mb-5 Para un país es de vital importancia conocer e identificar la estructura de sus actividades productivas, ya que así puede determinar su tendencia económica, es decir, su especialización y aquello en que tiene más fortalezas.   
      br
      br
      |Se entiende por sector la parte de la actividad económica cuyos elementos tienen particularidades comunes; son identificados como sectores económicos, sectores productivos, sectores de producción o simplemente sectores de la economía.
      br
      br
      |Los sectores económicos permiten el análisis y estudio de la producción económica, ya que posibilitan clasificar actividades similares que compiten entre sí o se complementan, cada sector tiene subdivisiones adicionales estandarizadas.
    h4 Sector primario o agropecuario
    .row.justify-content-center.mb-5.bs
      .col-lg-5
        img(src='@/assets/curso/img60.jpg', alt='Texto que describa la imagen')
      .col-lg-5
        .contenedor-texto.color__borde--contenido.p-5.align-items-center.d-flex
          h4.my-auto En este sector todas las actividades económicas se obtienen directamente de la naturaleza y no existe ningún cambio en el bien o producto obtenido. 
    p.mb-5 Las principales actividades del sector primario de la economía son:
    .row.mb-5
      .col-md-2.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/img62.svg' alt='AvatarTop').img2
          img(src='@/assets/curso/img61.svg' alt='AvatarTop').img1
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color__claro--primario.wf
            .p-4
              h4.text-center Agricultura
      .col-md-2.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/img64.svg' alt='AvatarTop').img2
          img(src='@/assets/curso/img63.svg' alt='AvatarTop').img1
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color__claro--primario.wf
            .p-4
              h4.text-center Ganadería
      .col-md-2.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/img66.svg' alt='AvatarTop').img2
          img(src='@/assets/curso/img65.svg' alt='AvatarTop').img1
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color__claro--primario.wf
            .p-4
              h4.text-center Pesca
      .col-md-2.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/img68.svg' alt='AvatarTop').img2
          img(src='@/assets/curso/img67.svg' alt='AvatarTop').img1
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color__claro--primario.wf
            .p-4
              h4.text-center Explotación de los recursos forestales
      .col-md-2.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/img70.svg' alt='AvatarTop').img2
          img(src='@/assets/curso/img69.svg' alt='AvatarTop').img1
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color__claro--primario.wf
            .p-4
              h4.text-center Minería
    h4.mb-3 Sector secundario
    .row.justify-content-center.mb-5.bs
      .col-lg-5
        img(src='@/assets/curso/img71.jpg', alt='Texto que describa la imagen')
      .col-lg-5
        .contenedor-texto.color__borde--contenido.p-4.align-items-center.d-flex
          h4.my-auto Se entiende como sector secundario de la economía el grupo de actividades en el que las materias primas son transformadas en productos manufacturados de consumo.
            br
            br
            |Las actividades económicas que se presentan en el sector secundario son aquellas que se relacionan con la industria; estas realizan ciertas transformaciones y/o procedimientos industriales a materias primas, bienes o mercancías en bienes de equipo o productos que puedan ser consumidos.
    p.mb-5 Las actividades que integran este grupo son: 
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row(titulo="Industria").align-items-center.d-flex
        .col-md-6
          figure
            img(src='@/assets/curso/img72.svg', alt='Texto que describa la imagen')
        .col-md-6.mb-4.mb-md-0
          h4 Industria
          p Están incluidas las actividades manufactureras (talleres o fábricas) y por esta razón, suele denominarse “sector industrial”.
      .row(titulo="Construcción").align-items-center.d-flex
        .col-md-6
          figure
            img(src='@/assets/curso/img73.svg', alt='Texto que describa la imagen')
        .col-md-6.mb-4.mb-md-0
          h4 Construcción
          p Comprende todo tipo de actividad dedicada a formar una estructura independientemente del tamaño, puede ser un puente en un río, una casa o un inmenso túnel de montaña.
      .row(titulo="Energía").align-items-center.d-flex
        .col-md-6
          figure
            img(src='@/assets/curso/img74.svg', alt='Texto que describa la imagen')
        .col-md-6.mb-4.mb-md-0
          h4 Energía
          p Son actividades destinadas a generar electricidad por medio de la conversión de energía primaria.
    h4 Sector terciario
    .row.justify-content-center.mb-5.bs
      .col-lg-5
        img(src='@/assets/curso/img75.jpg', alt='Texto que describa la imagen')
      .col-lg-5
        .contenedor-texto.color__borde--contenido.p-4.align-items-center.d-flex
          h4.my-auto En este sector se producen productos conocidos como servicios, los cuales ayudan a cubrir las necesidades de los seres humanos. 
    p.mb-5 Las actividades que integran este grupo son: 
    .row.mb-5 
      .col-lg-6.mb-3 
        .contenedor-hover.color__botones.align-items-center.p-3.d-flex
            img(src='@/assets/curso/img76.svg', alt='Texto que describa la imagen')
            h4.mb-0.ms-4 Comercio (mayorista y minorista).
      .col-lg-6.mb-3 
        .contenedor-hover.color__botones.align-items-center.p-3.d-flex
            img(src='@/assets/curso/img77.svg', alt='Texto que describa la imagen')
            h4.mb-0.ms-4 Transporte.
      .col-lg-6.mb-3 
        .contenedor-hover.color__botones.align-items-center.p-3.d-flex
            img(src='@/assets/curso/img78.svg', alt='Texto que describa la imagen')
            h4.mb-0.ms-4 Servicios financieros.
      .col-lg-6.mb-3 
        .contenedor-hover.color__botones.align-items-center.p-3.d-flex
            img(src='@/assets/curso/img79.svg', alt='Texto que describa la imagen')
            h4.mb-0.ms-4 Servicios públicos (seguridad y defensa, bomberos).
      .col-lg-6.mb-3 
        .contenedor-hover.color__botones.align-items-center.p-3.d-flex
            img(src='@/assets/curso/img80.svg', alt='Texto que describa la imagen')
            h4.mb-0.ms-4 Servicios jurídicos y legales.
      .col-lg-6.mb-3 
        .contenedor-hover.color__botones.align-items-center.p-3.d-flex
            img(src='@/assets/curso/img81.svg', alt='Texto que describa la imagen')
            h4.mb-0.ms-4 Ocio y cultura (espectáculos, conciertos, teatro, etc.).
      .col-lg-6.mb-3 
        .contenedor-hover.color__botones.align-items-center.p-3.d-flex
            img(src='@/assets/curso/img82.svg', alt='Texto que describa la imagen')
            h4.mb-0.ms-4 Turismo y hostelería.
      .col-lg-6.mb-3 
        .contenedor-hover.color__botones.align-items-center.p-3.d-flex
            img(src='@/assets/curso/img83.svg', alt='Texto que describa la imagen')
            h4.mb-0.ms-4 Medios de comunicación.
      .col-lg-6.mb-3 
        .contenedor-hover.color__botones.align-items-center.p-3.d-flex
            img(src='@/assets/curso/img84.svg', alt='Texto que describa la imagen')
            h4.mb-0.ms-4 Educación.
      .col-lg-6.mb-3 
        .contenedor-hover.color__botones.align-items-center.p-3.d-flex
            img(src='@/assets/curso/img85.svg', alt='Texto que describa la imagen')
            h4.mb-0.ms-4 Servicios de telecomunicaciones.
      .col-lg-6.mb-3 
        .contenedor-hover.color__botones.align-items-center.p-3.d-flex
            img(src='@/assets/curso/img86.svg', alt='Texto que describa la imagen')
            h4.mb-0.ms-4 Sanidad.











</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
