<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row
      .col-lg-6
        p.mb-5 A través del tiempo el hombre ha desarrollado diferentes alternativas de modos y medios de transporte para satisfacer las necesidades que el entorno cambiante del mundo exige.
        .cajon.color-primario.color__primario--claro.p-5.mb-4
          .h3 Los medios de transporte forman parte fundamental de la vida social, cultural y económica de un país o región.
        p Las empresas que importan o exportan mercancías requieren diferentes alternativas de transporte para comercializar sus productos y así conseguir el dinamismo de la economía y, cumplir con los objetivos que demanda el mercado.
      .col-lg-6
        figure
          img(src='@/assets/curso/img1.jpg', alt='Texto que describa la imagen')
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
