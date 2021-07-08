<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Movilizaciones de las cargas en el país
    .row.justify-content-center.mb-5
      .col-lg-8
        .cajon.color-secundario.p-5.mb-4
          p En Colombia existen corredores logísticos por donde se movilizan las cargas tanto del comercio exterior como del interno, que se distribuyen por toda la geografía colombiana; son medios físicos que proporcionan el intercambio y desarrollo del comercio a nivel general. En la siguiente resolución se podrá conocer con detalle lo anterior: 
      .col-lg-7
        a.anexo.mb-4.mb-lg-0(:href="obtenerLink('/downloads/RESOLUCION_0000164-2015.pdf')" target="_blank" type="application/pdf")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p 
              b Enlace web. 
              |Resolución 0000164 de 2015. [Ministerio de Transporte]. Por medio de la cual se establecen los corredores logísticos de importancia estratégica para el país y se dictan otras disposiciones. Febrero 5 de 2015.
    #t_4_1.titulo-segundo
      h2 4.1 Estadísticas de carga
    p.mb-5 La movilización de mercancías es uno de los datos más importantes en el estudio y revisión del desarrollo económico de un país. A continuación, se presentan algunas de estas cifras:
    .titulo-sexto.color-acento-contenido
      h5 Carga
    figure.mb-5
      img.mb-3(src='@/assets/curso/img87.svg', alt='Texto que describa la imagen')
      figcaption Nota. Adaptado del Ministerio de Transporte (2019).
    .row.mb-5
      .col-lg-7
        a.anexo.mb-4.mb-lg-0(href="https://www.mintransporte.gov.co/publicaciones/9443/transporte-en-cifras/" target="_blank").h-100
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto.texto-desbordado
            p 
              b Enlace web. 
              | Nota. Adaptado del Ministerio de Transporte (2019).https://www.mintransporte.gov.co/publicaciones/9443/transporte-en-cifras/
    .titulo-sexto.color-acento-contenido
      h5 Movimiento promedio de carga en Colombia por año %
    .row.justify-content-center.mb-5
      .col-lg-8
        figure
          img.mb-3(src='@/assets/curso/img88.svg', alt='Texto que describa la imagen')
    #t_4_2.titulo-segundo
      h2 4.2 Exportaciones e importaciones
    .row.mb-5 
      .col-lg-5
        .cajon.color-secundario.p-4.mb-4
          p Las exportaciones son el grupo de bienes y servicios que se comercializan por un país en territorio extranjero para su uso y empleo, es decir, se envía ya sea una mercancía o servicio a un tercero (importador) para su compra y uso.
        p El ente físico encargado de este trámite es directamente la aduana, tanto la mercancía que sale como la que entra debe pasar por esta entidad. Es importante aclarar que estas transacciones entre diferentes Estados generalmente presentan un importante grado de dificultad a nivel legal y fiscal, pues varían evidentemente de un país a otro.
      .col-lg-7
        figure.mb-5
          img.mb-3(src='@/assets/curso/img89.jpg', alt='Texto que describa la imagen')
    #t_4_3.titulo-segundo
      h2 4.3 Tipos de empaque y embalaje de carga
    p.mb-5 Cabe anotar que las palabras empaque y embalaje suelen ser muy fáciles de confundir, ya que las dos pertenecen a una misma categoría o sector, pero son diferentes, el empaque es la presentación comercial de un producto, mientras el embalaje es la función de almacenar, proteger, conservar y transportar varias unidades del mismo producto en grandes cantidades.
    .row.mb-5 
      .col-lg-2
        figure.mb-5
          img.mb-3(src='@/assets/curso/img90.svg', alt='Texto que describa la imagen')
      .col-lg-10
        h5 Empaque 
        p Existen diferentes tipos de empaques para los productos que van a ser movidos en una carga de un lugar a otro, y se caracterizan por el material del que están hechos. A continuación, se presentan cada tipo de empaque.
    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Empaque de vidrio" :icono="require('@/assets/curso/img91.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Empaque de vidrio
            p Existen envases de este tipo muy usados en farmacias y en el mundo de la cosmética. Generan un bajo impacto ambiental gracias a que pueden ser reutilizados varias veces; ofrecen una buena protección a los contenidos y, es fácil de observar el contenido. La fragilidad y peso son su mayor desventaja.
          .col-md-6
            figure
              img(src='@/assets/curso/img97.jpg', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Empaque de metal" :icono="require('@/assets/curso/img92.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Empaque de metal
            p Se utilizan varios metales dependiendo del producto a empacar. Para las gaseosas el más adecuado es el aluminio; cuando se trata de alimentos el empaque ideal es el acero. 
              br
              br
              |Estos embalajes brindan una buena protección al producto. Igualmente, son reutilizables y se reciclan sin ningún problema, pero su característica poco favorable es que son por lo general grandes, pesados y costosos. 
          .col-md-6
            figure
              img(src='@/assets/curso/img98.jpg', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Empaque textil" :icono="require('@/assets/curso/img93.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Empaque textil
            p Son bolsas y sacos que resultan económicos y poco contaminantes.
          .col-md-6
            figure
              img(src='@/assets/curso/img99.jpg', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Empaque de papel y cartón" :icono="require('@/assets/curso/img94.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Empaque de papel y cartón
            p Generalmente se utilizan para recubrir otros embalajes; es un material reciclable y económico, pero frágil.
          .col-md-6
            figure
              img(src='@/assets/curso/img100.jpg', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Empaque de madera" :icono="require('@/assets/curso/img95.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Empaque de madera
            p Su uso es de gran importancia para el transporte de largas distancias, productos de grandes tamaños y pesados; es un embalaje muy resistente que permite la protección del contenido; sin embargo, es un empaque de alto costo.

          .col-md-6
            figure
              img(src='@/assets/curso/img101.jpg', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Empaque plástico" :icono="require('@/assets/curso/img96.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Empaque plástico 
            p Nada sustentable debido a su poca capacidad de reciclaje; sin embargo, gracias a su resistencia se puede utilizar varias veces. Es muy usado para empacar alimentos, aceites, productos de limpieza y de belleza.

          .col-md-6
            figure
              img(src='@/assets/curso/img102.jpg', alt='Texto que describa la imagen')
    .row.mb-5 
      .col-lg-2
        figure.mb-5
          img.mb-3(src='@/assets/curso/img103.svg', alt='Texto que describa la imagen')
      .col-lg-10
        h5 Embalaje
        p Esta actividad es necesaria para organizar los productos para protegerlos o agruparlos de forma temporal, pensando en su manipulación, transporte y almacenamiento. Gracias al embalaje se puede preservar la calidad de la carga y a su vez, se mantiene en óptimas condiciones y a salvo de cualquier daño o deterioro, en todas aquellas operaciones en la que se ve envuelta durante el trayecto entre el exportador y el importador.
    h4 Tipos de embalaje
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-acento-botones.p-5
        .row.justify-content-center.mb-4
          .col-6.justify-content-center
            .imagenes-hover
              .imagenes-hover_img1(@mouseover="mostrarIndicador=false")
                .indicador--hover(v-if="mostrarIndicador")
                img(src='@/assets/curso/img104.svg', alt='Texto que describa la imagen')
              .imagenes-hover_img2
                img(src='@/assets/curso/img105.svg', alt='Texto que describa la imagen')
          
        h3.text-center Embalaje primario
        p.text-center Contiene, guarda y protege el producto, manteniéndolo en óptimas condiciones. Es de suma importancia que este tipo de empaquetado sea atractivo, ya que es con el que lo recibirá el cliente.
      .col-md.tarjeta.color-acento-contenido.p-5
        .row.justify-content-center.mb-4
          .col-6.justify-content-center
            .imagenes-hover
              .imagenes-hover_img1
                img(src='@/assets/curso/img106.svg', alt='Texto que describa la imagen')
              .imagenes-hover_img2
                img(src='@/assets/curso/img107.svg', alt='Texto que describa la imagen')
          
        h3.text-center Embalaje secundario
        p.text-center Brinda protección y facilita la comercialización del producto a una mayor escala. Generalmente se usan cajas de cartón (en algunos casos de plástico), como ejemplo está la leche; un brik individual sería el embalaje primario y la caja de cartón que contiene el six pack representaría el embalaje secundario. 


      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-6.justify-content-center
            .imagenes-hover
              .imagenes-hover_img1
                img(src='@/assets/curso/img108.svg', alt='Texto que describa la imagen')
              .imagenes-hover_img2
                img(src='@/assets/curso/img109.svg', alt='Texto que describa la imagen')
          
        h3.text-center Embalaje terciario
        p.text-center Contiene, guarda y protege el producto, manteniéndolo en óptimas condiciones. Es de suma importancia que este tipo de empaquetado sea atractivo, ya que es con el que lo recibirá el cliente. 













</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    mostrarIndicador: true,
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
