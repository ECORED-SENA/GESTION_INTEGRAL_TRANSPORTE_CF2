export default {
  global: {
    componenteFormativo: 'Modos y medios de transporte',
    descripcionCurso:
      'Mediante el siguiente contenido el aprendiz podrá discriminar los modos y los medios de transporte, teniendo en cuenta los aspectos más relevantes como lo son la caracterización y la tipología de los vehículos empleados en cada uno.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Modos y medios de transporte',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Diferencias',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Características, ventajas y desventajas de cada medio de transporte',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Tipología de vehículos, pesos y dimensiones permitidas ',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Tipos de carga y formas de consolidación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Unitarización de cargas y contenedores',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Sectores y rutas económicas del país',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Movilizaciones de las cargas en el país',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Estadísticas de carga',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Exportaciones e importaciones',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Tipos de empaque y embalaje de carga',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Transporte intermodal',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Plan maestro de transporte intermodal (PMTI)',
            hash: 't_5_1',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Transporte multimodal',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Agencia Nacional de Infraestructura. (2015). Plan maestro de transporte 2015-2035, el horizonte de Colombia: Vargas Lleras. ',
      link:
        'https://www.ani.gov.co/article/plan-maestro-de-transporte-2015-2035-el-horizonte-de-colombia-vargas-lleras-21832',
    },
    {
      referencia:
        'Resolución 0000164 de 2015. [Ministerio de Transporte]. Por medio de la cual se establecen los corredores logísticos de importancia estratégica para el país y se dictan otras disposiciones. Febrero 5 de 2015.',
      link:
        'https://web.mintransporte.gov.co/jspui/bitstream/001/6962/1/RESOLUCION%200000164-2015.pdf',
    },
    {
      referencia:
        'Xavi Mtz. (2013). ¿Qué es el transporte intermodal? [video]. YouTube.',
      link: 'https://youtu.be/SV1SmPLOWkE',
    },
  ],
  glosario: [
    {
      termino: 'Brik',
      significado: 'Es un envase de cartón, plástico, polietileno y aluminio.',
    },
    {
      termino: 'Cabotaje',
      significado:
        'Tráfico marítimo a lo largo de la costa, especialmente para comerciar; por temor al posible contrabando se exige a los barcos de cabotaje mucha documentación.',
    },
    {
      termino: 'Carga general unitarizada',
      significado:
        'Se refiere a los artículos, regularmente del mismo tipo que ya se encuentran organizados en contenedores más grandes como cajas, paquetes, pallets, sacos, etc., así su embalaje permite maniobrarla.',
    },
    {
      termino: 'Contenedor',
      significado:
        'Es un recipiente de carga para el transporte marítimo o fluvial, transporte terrestre y transporte multimodal.',
    },
    {
      termino: 'Contrato de transporte',
      significado:
        'Es un contrato en virtud del cual una persona se obliga a trasladar de un lugar a otro, por tierra, mar, canales, lagos o ríos navegables o aire, pasajeros o mercaderías ajenas, y a entregarlas a las personas a quienes vayan dirigidas a cambio de una contraprestación económica.',
    },
    {
      termino: 'FIATA Bill of Landing',
      significado:
        'Conocimiento de embarque multimodal, comúnmente conocido por sus siglas en inglés FBL (Forwarder Bill of Lading), sirve como contrato de transporte marítimo y comprobante fehaciente de que las mercancías se han transportado con la utilización de más de un transporte principal, amparadas bajo un solo documento de transporte. También determina la responsabilidad del agente transitario (Operador de Transporte Multimodal - OTM); cuando se emite “a la orden”, constituye un título de propiedad de la mercancía por lo que puede ser negociado.',
    },
    {
      termino: 'Unidad de carga',
      significado:
        'Es la unidad básica de almacenamiento y transporte dispuesta sobre un soporte o embalaje modular (caja, estiba, contenedor, etc.), con el fin de conseguir una manutención eficiente.',
    },
  ],
  complementario: [
    {
      texto: '',
      tipo: '',
      link: '',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Dairo Giovanni Rodríguez Agatón',
        cargo: 'Experto temático',
        centro: 'Centro de Tecnologías del Transporte',
      },
      {
        nombre: 'Diana Marcela Luis Velásquez ',
        cargo: 'Diseñadora instruccional ',
        centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisora metodológica y pedagógica',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología ',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Diseñadora y evaluadora instrucciona',
        centro:
          'Regional Distrito Capital – Centro para la Industria de la Comunicación Gráfica',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Yuly Andrea Rey Quiñonez'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Camilo Andres Bolaño Rey',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
