<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 5
      h1 Transporte intermodal
    .row.align-items-center.mb-5 
      .col-lg-7.p-4
        .bloque-texto-b.color__before--secundario.p-2.mb-5
          .bloque-texto-b__texto
            p.mb-0 Este tipo de transporte se caracteriza por utilizar unidades de carga para trasladar tanto mercancías como materiales de forma mucho más eficiente. El beneficio más significativo que tiene el transporte intermodal es que se aumenta la eficacia en cada operación, lo que se ve reflejado en la reducción y agilización en el transbordo de las mercancías que implica el uso de varios contratos de transporte.
        p.mb-5 En el siguiente video puede conocer más sobre el transporte intermodal. 
        a.anexo.mb-4.mb-lg-0(href="https://youtu.be/SV1SmPLOWkE" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p 
              b Enlace web.
              |  Xavi Mtz. (2013). ¿Qué es el transporte intermodal? [video]. YouTube.  https://youtu.be/SV1SmPLOWkE
      .col-lg-5.p-3(data-aos="fade-right")
        figure.mb-5
            img.mb-3(src='@/assets/curso/img110.svg', alt='Texto que describa la imagen')
    .tabla-a.color-secundario.mb-5 
      table
        thead
          tr
            th Ventajas
            th Desventajas
        tbody
          tr
            td: img.mb-3(src='@/assets/curso/img111.jpg', alt='Texto que describa la imagen') 
            td: img.mb-3(src='@/assets/curso/img112.jpg', alt='Texto que describa la imagen') 
          tr
            td Precios menos elevados.
            td Mayor lentitud.
          tr
            td Mayor agilidad.
            td Inversión alta en infraestructura.
          tr
            td Seguridad ampliada.
            td Embalaje de la mercancía
          tr
            td Menos intrusivo para el medio ambiente.
            td 
          tr
            td Fácil gestión.
            td 
          tr
            td Disminución de los tiempos.
            td 
    #t_5_1.titulo-segundo
      h2 5.1 Plan maestro de transporte intermodal (PMTI)
    .row.align-items-center.mb-5 
      .col-lg-7.p-4
        .bloque-texto-b.color__before--secundario.p-2.mb-5
          .bloque-texto-b__texto
            p.mb-0 Fortalece los avances del país en materia de vías, aeropuertos, puertos y ferrocarriles, identificando las necesidades de conectividad en cada uno de los 32 departamentos del país, con el fin de construir una metodología basada en criterios objetivos que brinden soluciones efectivas y eficientes.  Lo anterior, se puede consultar en la página de la ANI (Agencia Nacional de Infraestructura), no olvide revisar en detalle los anexos. 
        a.anexo.mb-4.mb-lg-0(href="https://www.ani.gov.co/article/plan-maestro-de-transporte-2015-2035-el-horizonte-de-colombia-vargas-lleras-21832" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto.texto-desbordado
            p 
              b Enlace web.
              | Agencia Nacional de Infraestructura. (2015). Plan maestro de transporte 2015-2035, el horizonte de Colombia: Vargas Lleras. 
      .col-lg-5.p-3(data-aos="fade-left")
        figure.mb-5
            img.mb-3(src='@/assets/curso/img113.svg', alt='Texto que describa la imagen')




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
