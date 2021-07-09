<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 6
      h1 Transporte 
    figure.mb-5
      img.mb-3(src='@/assets/curso/img114.jpg', alt='Texto que describa la imagen')
    p.mb-5 Es aquel que se realiza con el uso de al menos dos modos de transporte diferentes, llevando materiales, insumos o productos de forma rápida y eficaz, se pueden combinar no solo varios medios de transporte, sino también varias unidades de medida.
      br
      br
      |No se debe dividir o separar las cargas durante el transporte multimodal, debe llegar al destino exactamente la misma carga que partió desde el punto de origen; para ello, es necesario un solo documento el FBL (Fiata Bill of Landing).
    .row.justify-content-center.mb-5 
      .col-lg-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/img115.svg', alt='Texto que describa la imagen')
      .col-lg-7(data-aos="fade-left")
        h4 Características más comunes de este tipo de transporte
        ol.lista-ol--cuadro.mb-5
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Se utiliza dos o más tipos de transportes para trasladar una carga.

          li 
            .lista-ol--cuadro__vineta
              span 2
            | El traslado se realiza a nivel nacional o internacional.

          li 
            .lista-ol--cuadro__vineta
              span 3
            | Se utilizan vehículos de transporte marítimo, aéreo o terrestre, combinados o de un mismo tipo.

          li 
            .lista-ol--cuadro__vineta
              span 4
            | Se pueden trasladar materiales o mercancías, haciendo uso de un solo contrato.

          li 
            .lista-ol--cuadro__vineta
              span 5
            | Las distancias pueden variar (largas o cortas).

          li 
            .lista-ol--cuadro__vineta
              span 6
            | Seguimiento de la carga a través de los sistemas satelitales.
    br
    br
    .tabla-a.color-acento-contenido.mb-5 
      table
        thead
          tr
            th Ventajas
            th Desventajas
        tbody
          tr
            td: img.mb-3(src='@/assets/curso/img116.jpg', alt='Texto que describa la imagen') 
            td: img.mb-3(src='@/assets/curso/img117.jpg', alt='Texto que describa la imagen') 
          tr
            td Reducción de los costos y los tiempos de viaje.
            td La mercancía puede encontrarse con limitaciones operativas y legales cuando se aplica la normativa internacional.
          tr
            td El usuario tiene menos riesgo de pérdida o hurto de la mercancía, ya que únicamente cuenta con un interlocutor.
            td Falta infraestructura para realizar este tipo de transporte con todas las garantías y beneficios.
          tr
            td La FBL tiene preferencia de ingreso y paso en las aduanas, la autorización se debe realizar el mismo día.
            td 
          tr
            td La programación global de la ruta y los costes económicos, humanos y logísticos son más sencillos
            td 







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
