<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Tipos de carga y formas  de consolidación
    p.mb-5 A continuación, se describen los tipos de carga y formas de consolidación:
    TabsA.color-acento-contenido.mb-5
      .tarjeta.color__primario--claro.p-4(titulo="Carga general")
        .row
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/img50.jpg', alt='Texto que describa la imagen')
          .col-xl-6
            h4 Carga general
            p Su embalaje se realiza de manera individual. Existen dos clases de carga según el embalaje:
            ul.lista-ul--color
              li 
                i.fas.fa-check
                p 
                  b Carga general suelta: 
                  b-none se manipula de forma individual.

              li 
                i.fas.fa-check
                p 
                  b Carga general unitarizada o preparada: 
                  b-none varios paquetes constituyen un solo bulto en el pedido de un mismo cliente.
      .tarjeta.color__primario--claro.p-4(titulo="Carga a granel")
        .row
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/img51.jpg', alt='Texto que describa la imagen')
          .col-xl-6
            h4 Carga a granel
            p No utiliza ningún tipo de embalaje, se suelen transportar en contenedores para su fácil acomodación o movimiento.
      .tarjeta.color__primario--claro.p-4(titulo="Carga perecedera")
        .row
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/img52.jpg', alt='Texto que describa la imagen')
          .col-xl-6
            h4 Carga perecedera
            p Este tipo de carga tiene una vida útil determinada.  En la forma de transportarla lo más relevante es cumplir con ciertos tiempos establecidos, pues es de vital importancia debido a la delicadeza o período de vida del producto.
      .tarjeta.color__primario--claro.p-4(titulo="Carga frágil")
        .row
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/img53.jpg', alt='Texto que describa la imagen')
          .col-xl-6
            h4 Carga frágil
            p Se caracteriza según la naturaleza, debe ser manejada con demasiado cuidado y responsabilidad, ya que pueden presentarse daños o averías en el momento del transporte; lo más habitual es que este tipo de cargas siempre necesiten un tipo de embalaje adicional que amortigüe cualquier posible daño, golpe o impacto que sufra la mercancía durante su transporte.
      .tarjeta.color__primario--claro.p-4(titulo="Carga peligrosa")
        .row
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/img54.jpg', alt='Texto que describa la imagen')
          .col-xl-6
            h4 Carga peligrosa
            p Son elementos que por su naturaleza pueden poner en riesgo al personal que la manipula, de no hacerse de manera adecuada y cumpliendo con estrictos protocolos de seguridad. 
      .tarjeta.color__primario--claro.p-4(titulo="Consolidación de carga")
        .row
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/img55.jpg', alt='Texto que describa la imagen')
          .col-xl-6
            h4 Consolidación de carga
            p La consolidación de carga es una definición simple de un todo, cuando la carga es combinada en un mismo contenedor por varios embarcadores. La consolidación significa que los embarcadores deben pagar tarifas por volumen de carga, ya que la envían toda al mismo tiempo en vez de hacer pequeños embarques por separado.
    #t_2_1.titulo-segundo
      h2 2.1 Unitarización de cargas y contenedores
    p.mb-5 Tanto para el almacenamiento como distribución se utiliza el método de “unitarización” (agrupamiento de mercancías) de esta manera su traslado es más sencillo, seguro y rápido.
    h4 Contenedorización
    SlyderD.mb-5(:datos="datosSlyder")

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosSlyder: [
      {
        texto:
          'En este proceso se emplea una caja de acero rectangular (de igual forma, puede ser de madera o plástico) que permite el manejo de la carga en conjunto y  es más segura; protege las mercancías contra la inflexibilidad del tiempo, como a su vez de probables daños y riesgos propios durante la manipulación y transporte.',
        imagen: require('@/assets/curso/img56.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        texto:
          'Se presta de manera cómoda y fácil al transporte combinado, de sencilla transferencia, por ejemplo, buque, tren y camión, también se puede usar repetidas veces. El contenedor actúa como un embalaje adicional para la mercancía, por tanto, debe ser manejado como una única unidad.',
        imagen: require('@/assets/curso/img57.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        texto:
          'La ISO maneja, regula y estandariza las medidas de un contenedor. Existen algunos de 20 y 40 pies de largo, con un volumen interno de 33 m<sup>3</sup> y de 66 m<sup>3</sup>. Tienen una capacidad en peso desde 20 a 30 toneladas.',
        imagen: require('@/assets/curso/img58.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
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
