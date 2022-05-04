<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    //- El componente "Muestras" tiene las aplicaciones de todos los componentes de la base
    //- se encuentra en src/components/Muestras.vue
    //- Una vez el componente "Muestras" no se necesite 
    //- Se debe borrar el "import Muestras from '../components/Muestras'" y en "components" en "<script"
    //- esto evitará que se compile en la carpeta final de distribución
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Modos y medios de transporte
    p.mb-5 Existen diferentes opciones, modos y medios de transporte por los cuales se realiza el movimiento de personas y bienes. Se hace necesario conocer sus principales características y, las ventajas y desventajas que cada uno de ellos ofrece al momento de tomar una decisión para su selección.
    #t_1_1.titulo-segundo
      h2 1.1  Diferencias
    p.mb-5 Los modos de transporte pueden ser de carácter aéreo, marítimo, terrestre, ferroviario, entre otros, mientras que los medios de transporte hacen referencia a los vehículos necesarios para el transporte según el modo escogido (avión, barco, camión y ferrocarril), tal como se muestra en la siguiente infografía:
    .titulo-quinto.color-acento-contenido
    h4 Modos y medios de transporte
    .row.mb-5
      .col-lg-6
        .tarjeta--adorno-superior_izquierdo.color__borde--secundario.p-4.mb-5
          h3 Modos de transporte
          p Sistema o procedimiento con el que se genera un traslado de un objeto o mercancía de un punto a otro.  Los modos de transporte pueden ser de carácter aéreo, marítimo, terrestre y la combinación de estos se denomina multimodal.
      .col-lg-6
        .tarjeta--adorno-superior_derecho.color__borde--contenido.p-4
          h3 Medios de transporte
          p Los medios de transporte son la forma o vehículo en el cual se lleva a cabo la acción de la transportación. Existen diferentes medios de transporte.
          ul.lista-ul--color
            li 
              i.fas.fa-check
              | Medio aéreo (avión o helicóptero).

            li 
              i.fas.fa-check
              | Medio terrestre (camión, tractomula).  

            li 
              i.fas.fa-check
              | Medio marítimo (lancha, buque).

            li 
              i.fas.fa-check
              | Medio ferroviario (tren, ferrocarril).
    .row.mb-4
      .col-lg-6
        .tarjeta-hover-imagenes  
          .contenedor__texto--izquierda 
            h6.mb-0.px-3.py-1.text-white Cielo   
          .tarjeta-hover-imagenes__textos.color__secundario.justify-content-center.align-items-center.p-5.d-flex
            .elementos(@mouseover="mostrarIndicador=false")
              img(src='@/assets/curso/img3.svg', alt='Texto que describa la imagen').mb-2
              h4.text-center Modo
              .indicador--hover(v-if="mostrarIndicador" ) 
          .tarjeta-hover-imagenes__imagen: img(src='@/assets/curso/img11.jpg', alt='Texto que describa la imagen')
      .col-lg-6
        .tarjeta-hover-imagenes  
          .contenedor__texto--derecha 
            h6.mb-0.px-3.py-1.text-white Avión o Helicóptero    
          .tarjeta-hover-imagenes__imagen: img(src='@/assets/curso/img12.jpg', alt='Texto que describa la imagen')
          .tarjeta-hover-imagenes__textos.color__contenido.d-flex.justify-content-center.align-items-center.p-5
            .elementos
              img(src='@/assets/curso/img4.svg', alt='Texto que describa la imagen').mb-2
              h4.text-center Medio
    .row.mb-4
      .col-lg-6
        .tarjeta-hover-imagenes  
          .contenedor__texto--izquierda 
            h6.mb-0.px-3.py-1.text-white Marítimo 
          .tarjeta-hover-imagenes__imagen: img(src='@/assets/curso/img13.jpg', alt='Texto que describa la imagen')
          .tarjeta-hover-imagenes__textos.color__secundario.justify-content-center.align-items-center.p-5.d-flex
            .elementos
              img(src='@/assets/curso/img5.svg', alt='Texto que describa la imagen').mb-2
              h4.text-center Modo
      .col-lg-6
        .tarjeta-hover-imagenes  
          .contenedor__texto--derecha 
            h6.mb-0.px-3.py-1.text-white Lancha, buque  
          .tarjeta-hover-imagenes__imagen
            img(src='@/assets/curso/img14.jpg', alt='Texto que describa la imagen')
          .tarjeta-hover-imagenes__textos.color__contenido.d-flex.justify-content-center.align-items-center.p-5
            .elementos
              img(src='@/assets/curso/img6.svg', alt='Texto que describa la imagen').mb-2
              h4.text-center Medio
    .row.mb-4
      .col-lg-6
        .tarjeta-hover-imagenes  
          .contenedor__texto--izquierda 
            h6.mb-0.px-3.py-1.text-white Terrestre   
          .tarjeta-hover-imagenes__imagen: img(src='@/assets/curso/img15.jpg', alt='Texto que describa la imagen')
          .tarjeta-hover-imagenes__textos.color__secundario.justify-content-center.align-items-center.p-5.d-flex
            .elementos
              img(src='@/assets/curso/img7.svg', alt='Texto que describa la imagen').mb-2
              h4.text-center Modo
      .col-lg-6
        .tarjeta-hover-imagenes  
          .contenedor__texto--derecha 
            h6.mb-0.px-3.py-1.text-white Camión, tractomula    
          .tarjeta-hover-imagenes__imagen
            img(src='@/assets/curso/img16.jpg', alt='Texto que describa la imagen')
          .tarjeta-hover-imagenes__textos.color__contenido.d-flex.justify-content-center.align-items-center.p-5
            .elementos
              img(src='@/assets/curso/img8.svg', alt='Texto que describa la imagen').mb-2
              h4.text-center Medio
          
    .row.mb-5
      .col-lg-6
        .tarjeta-hover-imagenes  
          .contenedor__texto--izquierda 
            h6.mb-0.px-3.py-1.text-white Ferroviario  
          .tarjeta-hover-imagenes__imagen: img(src='@/assets/curso/img17.jpg', alt='Texto que describa la imagen')
          .tarjeta-hover-imagenes__textos.color__secundario.justify-content-center.align-items-center.p-5.d-flex
            .elementos
              img(src='@/assets/curso/img9.svg', alt='Texto que describa la imagen').mb-2
              h4.text-center Modo
      .col-lg-6
        .tarjeta-hover-imagenes  
          .contenedor__texto--derecha 
            h6.mb-0.px-3.py-1.text-white Tren, ferrocarril    
          .tarjeta-hover-imagenes__imagen
            img(src='@/assets/curso/img18.jpg', alt='Texto que describa la imagen')
          .tarjeta-hover-imagenes__textos.color__contenido.d-flex.justify-content-center.align-items-center.p-5
            .elementos
              img(src='@/assets/curso/img10.svg', alt='Texto que describa la imagen').mb-2
              h4.text-center Medio
    .tarjeta.color-acento-botones.p-4.p-md-5.mb-5
        .row.justify-content-around.align-items-center
          .col-8.col-sm-6.col-md-4.mb-4.mb-md-0
            img(src="@/assets/curso/img118.svg")

          .col-md.col-lg-6
            h3 Transporte multimodal: Ventajas y desventajas
            p.mb-4 Los tipos de transporte resuelven las necesidades del medio, en el caso del transporte multimodal tiene ventajas y desventajas que se den sopesar teniendo en cuenta todas las variables para la meta que se quiera alcanzar.
            
            a.boton.color-acento-contenido(:href="obtenerLink('downloads/infografia.pdf')" target="_blank" type="application/pdf")
              span Descargar
              i.fas.fa-file-download
    #t_1_2.titulo-segundo
      h2 1.2  Características, ventajas y desventajas de cada medio de transporte
    .titulo_recuadro.color__before--contenido.mb-5
      h4 Transporte aéreo          
    .row.mb-5
      .col-lg-5
        img(src='@/assets/curso/img19.png', alt='Texto que describa la imagen').mb-2

      .col-lg-7
        TabsC.color-acento-contenido.mb-5
          .py-3.py-md-4(titulo="Características")
            img(src='@/assets/curso/img23.jpg', alt='Texto que describa la imagen').mb-3
            p.mb-3
              b Rapidez: 
              | es el medio más veloz que existe, tiene un proceso logístico ideal.

            p.mb-3
              b Seguridad: 
              | según los índices es uno de los medios de transporte más seguros, al igual que el ferroviario.
            p.mb-3
              b Flexibilidad: 
              | existe una diversidad de aviones adaptados al tipo de transporte que realizan cargas mayores o igual a 100 toneladas.
            p.mb-3
              b Control de seguimiento: 
              |  realizan un seguimiento profundo y detallado del lugar exacto en el que se encuentra la mercancía a cada momento.
          .py-3.py-md-4(titulo="Ventajas")
            img(src='@/assets/curso/img24.jpg', alt='Texto que describa la imagen').mb-3
            p.mb-3
                b Velocidad:  
                | vehículo de alta velocidad.
            p.mb-3
                b  Competitividad: 
                | reduce gastos.
            p.mb-3
                b  Documentación: 
                | simple y normalizada totalmente.
            p.mb-3
                b Cobertura:  
                | tiene gran cobertura en diferentes países en el momento de transportar la carga.
          .py-3.py-md-4(titulo="Desventajas")
            img(src='@/assets/curso/img25.jpg', alt='Texto que describa la imagen').mb-3
            p.mb-3
                b Capacidad:   
                | el avión no está en capacidad de competir con los demás medios de transporte por razón de peso y volumen.

            p.mb-3
                b  Cargas a granel:  
                |  no es el medio de transporte adecuado para carga o transporte de líquidos, minerales, petróleo, entre otros.
            p.mb-3
                b  Productos de bajo valor unitario: 
                | las materias primas no pueden absorber mayor costo del flete. 
            p.mb-3
                b  Artículos peligrosos: 
                | el IATA (Asociación Internacional de Transporte Aéreo) y el OACI (Organización de Aviación Civil Internacional) se encarga de restringir todos aquellos artículos peligrosos en los aviones por seguridad.
    .titulo_recuadro.color__before--primario.mb-5
      h4 Transporte ferroviario          
    .row.mb-5
      .col-lg-5
        img(src='@/assets/curso/img20.png', alt='Texto que describa la imagen').mb-2

      .col-lg-7
        TabsC.color-acento-contenido.mb-5
          .py-3.py-md-4(titulo="Características")
            img(src='@/assets/curso/img26.jpg', alt='Texto que describa la imagen').mb-3
            p.mb-3 Permite la operación de vehículos en trenes.
              br
              br
              |La guía externa tiene costos muy altos de inventario.
              br
              br
              |La tecnología usada en este transporte es sencilla y permite realizar ajustes o cambios de dirección rápidos y fáciles.
              br
              br
              |Posee variedad de rendimiento sobre todo cuando se trata de la aceleración.
              br
              br
              |El manejo de esta tecnología es más bajo en comparación con los de rodada automática.
                
          .py-3.py-md-4(titulo="Ventajas")
            img(src='@/assets/curso/img27.jpg', alt='Texto que describa la imagen').mb-3
            p.mb-3
                b Capacidad:   
                | tiene grandes ventajas gracias a su mayor capacidad en relación con la del transporte carretero o aéreo, cuando se trata de volúmenes de gran carga.
            p.mb-3
                b  Flexibilidad combinada:  
                | se da dentro del sistema ferro acuático cuando los vagones de tren se transportan en buques porta trenes.
                br
                br
                |Cuentan con vías y rieles que permiten alcanzar una buena velocidad. 
            p.mb-3
                b Documentación:     
                | es similar a la que se necesita para el transporte por carretera.
          .py-3.py-md-4(titulo="Desventajas")
            img(src='@/assets/curso/img28.jpg', alt='Texto que describa la imagen').mb-3
            p.mb-3 Su flexibilidad es poca, ya que se deriva de las características de la red y las diferencias en el ancho de las vías.
              br
              br
              |Necesita otro medio de transporte para trasbordar.
              br
              br
              |Está expuesto a saqueos.

    .titulo_recuadro.color__before--secundario.mb-5
      h4 Transporte marítimo         
    .row.mb-5
      .col-lg-5
        img(src='@/assets/curso/img21.png', alt='Texto que describa la imagen').mb-2

      .col-lg-7
        TabsC.color-acento-contenido.mb-5
          .py-3.py-md-4(titulo="Características")
            img(src='@/assets/curso/img29.jpg', alt='Texto que describa la imagen').mb-3
            p.mb-3
                b Carácter Internacional:   
                | es el único medio de bajo costo a la hora de transportar mercancía en grandes cantidades y tamaños entre sitios o lugares geográficamente alejados o distantes.
            p.mb-3
                b  Capacidad:   
                | supera el millón de toneladas de peso muerto.

            p.mb-3
                b Flexibilidad: 
                |  viene dada por la alternativa del empleo de buques de mediano y pequeño tamaño hasta busques de gran envergadura.

            p.mb-3
                b Competencia: 
                |  la operación casi siempre se realiza bajo la norma y las leyes del mercado de fletes.
            p.mb-3
                b Versatilidad: 
                | cuenta con varias clases de buques, permitiendo la acomodación fácil y eficaz de la mercancía.

          .py-3.py-md-4(titulo="Ventajas")
            img(src='@/assets/curso/img30.jpg', alt='Texto que describa la imagen').mb-3
            p.mb-3 Su nivel de capacidad para mercancías es alto.
              br
              br
              |Es económico.
              br
              br
              |A diferencia del aéreo puede cargar mercancía peligrosa como por ejemplo líquidos, petróleo, entre otros.
              br
              br
              |Tiene una amplia cobertura.
          .py-3.py-md-4(titulo="Desventajas")
            img(src='@/assets/curso/img31.jpg', alt='Texto que describa la imagen').mb-3
            p.mb-3 Los materiales usados para el embalaje son resistentes, pero más costosos.
              br
              br
              |En comparación a los otros modos de transporte es más lento.
              br
              br
              b Frecuencias de los servicios: 
              | el despacho de los buques no brinda tantas posibilidades con el servicio de carga aérea regular, el transporte carretero o el ferroviario.
              br
              br
              |No salen con la misma periodicidad que lo hacen otros modos de transporte.
    .titulo_recuadro.color__before--botones.mb-5
      h4 Transporte carretero         
    .row.mb-5
      .col-lg-5
        img(src='@/assets/curso/img22.png', alt='Texto que describa la imagen').mb-2

      .col-lg-7
        TabsC.color-acento-contenido.mb-5
          .py-3.py-md-4(titulo="Características")
            img(src='@/assets/curso/img32.jpg', alt='Texto que describa la imagen').mb-3
            p.mb-3 Se desplaza sobre la tierra y siempre depende de las condiciones geográficas y meteorológicas.
              br
              br
              |Por lo general necesita de caminos pavimentados y acondicionados tales como carreteras, túneles y puentes, permitiendo sortear obstáculos.
              br
              br
              |Es un método predilecto de transporte de bienes y pasajeros en el mundo.
            
          .py-3.py-md-4(titulo="Ventajas")
            img(src='@/assets/curso/img33.jpg', alt='Texto que describa la imagen').mb-3
            p.mb-3 
              b Versatilidad: 
              | permite un acceso ágil a las centrales, tanto para recoger como para entregar la mercancía.
              br
              br
              |Cuenta con diferentes tipos de vehículos.
              br
              br
              |Provee una amplia cobertura.
              br
              br
              |El conductor realiza un acompañamiento constante, permitiéndole realizar una supervisión de principio a fin y reduciendo daños o saqueos.
              br
              br
              |El transporte carretero tiene una baja frecuencia de embalaje, en algunos casos no es necesario.
              br
              br
              b Documentación:  
              | es simple cuando se trata de formularios normalizados.
          .py-3.py-md-4(titulo="Desventajas")
            img(src='@/assets/curso/img34.jpg', alt='Texto que describa la imagen').mb-3
            p.mb-3 
              b Capacidad:  
              | no compite con los demás modos de transporte.

            p.mb-3 
              b Grandes distancias: 
              | es un transporte que únicamente puede funcionar dentro de ciertos límites, por ello, debe permitir que los embarques a grandes distancias los hagan otros medios de transporte.
            p.mb-3 
              b Congestión de tráfico: 
              | dentro de algunos países se ha convertido en un gran problema, causando demoras y retardos en los despachos de la carga.
            p.mb-3 
              b Regulación de tráfico y vías: 
              | no existe un estándar en los países en vía de desarrollo frente a la seguridad, los tamaños de las vías y la capacidad de puentes.
    #t_1_3.titulo-segundo
      h2 1.3  Tipología de vehículos, pesos y dimensiones permitidas 
    p.mb-5 A continuación, se enuncia la clasificación correspondiente.
    .titulo-sexto.color-acento-contenido
      h5 Clasificación de los vehiculos de carga 
    p En Colombia este tipo de vehículos 
      b se clasifica de acuerdo con el número de ejes que contenga, 
      | basado en la norma técnica nacional e internacional. Para ello se utiliza una serie de letras así:   
    .row.justify-content-center.align-items-center.mb-5
      .col-4: img(src='@/assets/curso/img35.svg', alt='Texto que describa la imagen')
      .col-5
        .circulo-hover.align-items-center.mb-2
          .circulo-hover__vineta.color__botones.justify-content-center.align-items-center(@mouseover="mostrarIndicador=false")
              .indicador--hover(v-if="mostrarIndicador" )    
              h2 B
          .circulo-hover__texto
            p.mb-0.text-hide  La letra 
              b B 
              | se utiliza para el transporte de pasajeros.
        .circulo-hover.align-items-center.mb-2
          .circulo-hover__vineta.color__botones.justify-content-center.align-items-center
            h2 C
          .circulo-hover__texto
            p.mb-0.text-hide  La letra 
              b C 
              | se utiliza para el transporte de carga.
        .circulo-hover.align-items-center.mb-2
          .circulo-hover__vineta.color__botones.justify-content-center.align-items-center
            h2 S
          .circulo-hover__texto
            p.mb-0.text-hide  La  
              b S 
              | para referirse a un semirremolque.
        .circulo-hover.align-items-center.mb-2
          .circulo-hover__vineta.color__botones.justify-content-center.align-items-center
            h2.my-auto R
          .circulo-hover__texto
            p.mb-0.text-hide  La 
              b R 
              | para un remolque.
    p.mb-5 Se combina la primera letra con el número de ejes, así: 
      br
      br
      b C2  
      | camión de dos ejes.
      br
      b C3  
      | camión de 3 ejes.
    SlyderA.fw-bold
      div.p-5
        .tabla-a.color-acento-botones.mb-5.mx-5
          table
            thead
              tr.color__contenido
                th Configuración
                th Esquema del vehículo
                th Descripción
            tbody.text-center
              tr
                td C2
                td: img(src='@/assets/curso/img36.svg', alt='Texto que describa la imagen')
                td Camión Rígido
      div.p-5
        .tabla-a.color-acento-botones.mb-5.mx-5
          table
            thead
              tr.color__contenido
                th Configuración
                th Esquema del vehículo
                th Descripción
            tbody.text-center
              tr
                td C3
                td: img(src='@/assets/curso/img37.svg', alt='Texto que describa la imagen')
                td Camión Rígido
      div.p-5
        .tabla-a.color-acento-botones.mb-5.mx-5
          table
            thead
              tr.color__contenido
                th Configuración
                th Esquema del vehículo
                th Descripción
            tbody.text-center
              tr
                td C3
                <td rowspan="3"> 
                  img(src='@/assets/curso/img38.svg', alt='Texto que describa la imagen') 
                </td>
                <td rowspan="3"> Camión Rígido </td>
              tr
                td Tándem trasero mixto
      div.p-5
        .tabla-a.color-acento-botones.mb-5.mx-5
          table
            thead
              tr.color__contenido
                th Configuración
                th Esquema del vehículo
                th Descripción
            tbody.text-center
              tr
                td C3
                <td rowspan="3"> 
                  img(src='@/assets/curso/img39.svg', alt='Texto que describa la imagen') 
                </td>
                <td rowspan="3"> Camión Rígido </td>
              tr
                td Tándem Direccional
      div.p-5
        .tabla-a.color-acento-botones.mb-5.mx-5
          table
            thead
              tr.color__contenido
                th Configuración
                th Esquema del vehículo
                th Descripción
            tbody.text-center
              tr
                td C4
                td: img(src='@/assets/curso/img40.svg', alt='Texto que describa la imagen')
                td Camión Rígido
    p.mb-5 Se aplica de la misma forma para el remolque y semirremolque, el S1 se refiere a un semirremolque de 1 eje y el R2 a un remolque de 2 ejes. Con la combinación de estas dos nomenclaturas se obtiene la configuración de un tractocamión como es el C2S2, que es de dos ejes, con un semirremolque de dos ejes.          
    SlyderA.fw-bold
      div.p-5
        .tabla-a.color-acento-botones.mb-5.mx-5
          table
            thead
              tr.color__contenido
                th Configuración
                th Esquema del vehículo
                th Descripción
            tbody.text-center
              tr
                td C2S1
                td: img(src='@/assets/curso/img41.svg', alt='Texto que describa la imagen')
                td Tractocamión de dos ejes con semirremolque de un eje.       
      div.p-5
        .tabla-a.color-acento-botones.mb-5.mx-5
          table
            thead
              tr.color__contenido
                th Configuración
                th Esquema del vehículo
                th Descripción
            tbody.text-center
              tr
                td C2S2
                td: img(src='@/assets/curso/img42.svg', alt='Texto que describa la imagen')
                td Tractocamión de dos ejes con semirremolque de dos ejes.     
      div.p-5
        .tabla-a.color-acento-botones.mb-5.mx-5
          table
            thead
              tr.color__contenido
                th Configuración
                th Esquema del vehículo
                th Descripción
            tbody.text-center
              tr
                td C3S1
                td: img(src='@/assets/curso/img43.svg', alt='Texto que describa la imagen')
                td Tractocamión de tres ejes con semirremolque de un eje.     
      div.p-5
        .tabla-a.color-acento-botones.mb-5.mx-5
          table
            thead
              tr.color__contenido
                th Configuración
                th Esquema del vehículo
                th Descripción
            tbody.text-center
              tr
                td C3S2
                td: img(src='@/assets/curso/img44.svg', alt='Texto que describa la imagen')
                td Tractocamión de tres ejes con semirremolque de dos ejes.   
      div.p-5
        .tabla-a.color-acento-botones.mb-5.mx-5
          table
            thead
              tr.color__contenido
                th Configuración
                th Esquema del vehículo
                th Descripción
            tbody.text-center
              tr
                td C3S3
                td: img(src='@/assets/curso/img45.svg', alt='Texto que describa la imagen')
                td Tractocamión de tres ejes con semirremolque de tres ejes. 
    p.mb-5 En cuanto a los remolques se utiliza la forma C2R2 que es la denominación de un tractocamión de dos ejes, con un remolque de dos ejes y así un C3R2 es un tractocamión de tres ejes, con un remolque de dos ejes.
    SlyderA.fw-bold
      div.p-5
        .tabla-a.color-acento-botones.mb-5.mx-5
          table
            thead
              tr.color__contenido
                th Configuración
                th Esquema del vehículo
                th Descripción
            tbody.text-center
              tr
                td R2
                td: img(src='@/assets/curso/img46.svg', alt='Texto que describa la imagen')
                td Remolque  
      div.p-5
        .tabla-a.color-acento-botones.mb-5.mx-5
          table
            thead
              tr.color__contenido
                th Configuración
                th Esquema del vehículo
                th Descripción
            tbody.text-center
              tr
                td C2 R2
                td: img(src='@/assets/curso/img47.svg', alt='Texto que describa la imagen')
                td Camión de dos ejes con remolque de dos ejes. 
      div.p-5
        .tabla-a.color-acento-botones.mb-5.mx-5
          table
            thead
              tr.color__contenido
                th Configuración
                th Esquema del vehículo
                th Descripción
            tbody.text-center
              tr
                td C3 R2
                td: img(src='@/assets/curso/img48.svg', alt='Texto que describa la imagen')
                td Camión de tres ejes con remolque de dos ejes.
      div.p-5
        .tabla-a.color-acento-botones.mb-5.mx-5
          table
            thead
              tr.color__contenido
                th Configuración
                th Esquema del vehículo
                th Descripción
            tbody.text-center
              tr
                td C4 R2
                td: img(src='@/assets/curso/img49.svg', alt='Texto que describa la imagen')
                td Camión de cuatro ejes con remolque de dos ejes.































































</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
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
