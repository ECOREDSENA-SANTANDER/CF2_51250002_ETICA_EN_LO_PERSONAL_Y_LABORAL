export default {
  global: {
    componenteFormativo: 'Ética para el éxito, valores que transforman',
    descripcionCurso:
      'Se aborda la importancia de la ética en los ámbitos personal y laboral como un pilar para fomentar comportamientos responsables y una convivencia armónica. Destaca cómo la ética guía decisiones basadas en valores como la integridad, el respeto y la responsabilidad, impactando positivamente en la calidad de vida y en el entorno laboral mediante la promoción de la confianza, la mejora del clima organizacional y la sostenibilidad.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Desarrollo de la ética',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Evaluar los lineamientos organizacionales para fomentar la ética laboral',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Función de la ética en la vida personal y laboral',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo:
              'Situaciones que generan reflexión y decisiones fundamentadas en la ética',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Criterios generales de ética profesional y laboral',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo:
              'Consideraciones y reconocimiento de la ética en los ámbitos humanos',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Competencias éticas en lo laboral y su desarrollo',
            hash: 't_1_6',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'La comunicación ética',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Teoría de la comunicación',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'La asertividad',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: '¿De qué se trata la comunicación organizacional?',
            hash: 't_2_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF2_51250002_DU.pdf',
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
  complementario: [
    {
      tema: '1. Desarrollo de la ética',
      referencia:
        'Equipo editorial, Etecé. (2020, 24 septiembre). Ética Profesional - Qué es, concepto, función, tipos y características. Concepto. ',
      tipo: 'Revista',
      link: 'https://concepto.de/etica-profesional/',
    },
    {
      tema: '2.2. La asertividad',
      referencia:
        'Loarte, V. D. M. (2024, 21 marzo). ¿Qué es la comunicación asertiva y por qué es importante? Grupo XXI - Psicología Aplicada. ',
      tipo: 'Articulo',
      link:
        'https://www.grupoxxi-psicologia.net/que-es-la-comunicacion-asertiva-y-por-que-es-importante/',
    },
  ],
  glosario: [
    {
      termino: 'Ética personal',
      significado:
        'Conjunto de principios y valores que orientan las acciones individuales hacia una convivencia armónica y responsable.',
    },
    {
      termino: 'Ética laboral',
      significado:
        ' Prácticas y comportamientos profesionales que garantizan integridad, respeto y responsabilidad en el ámbito laboral.',
    },
    {
      termino: 'Integridad',
      significado:
        ' Coherencia entre los valores, pensamientos, palabras y acciones, fomentando confianza y respeto.',
    },
    {
      termino: 'Responsabilidad Social Corporativa (RSC)',
      significado:
        ' Compromiso empresarial con el bienestar social, económico y ambiental.',
    },
    {
      termino: 'Transparencia',
      significado:
        ' Claridad y honestidad en las operaciones empresariales y la interacción con <i>stakeholders</i>.',
    },
    {
      termino: 'Asertividad',
      significado:
        ' Habilidad comunicativa que permite expresar pensamientos y emociones de manera respetuosa y directa.',
    },
    {
      termino: 'Confianza',
      significado:
        ' Relación basada en la credibilidad y honestidad, esencial para el desarrollo de vínculos sociales y laborales.',
    },
    {
      termino: 'Sostenibilidad',
      significado:
        ' Prácticas responsables que aseguran el bienestar presente sin comprometer recursos futuros.',
    },
    {
      termino: 'Normas éticas',
      significado:
        ' Reglas que regulan el comportamiento humano para garantizar la convivencia y justicia social.',
    },
    {
      termino: 'Comunicación organizacional',
      significado:
        ' Proceso de intercambio de información que alinea a los empleados con los objetivos de la empresa.',
    },
    {
      termino: 'Conducta ética',
      significado:
        'Acciones que reflejan valores y principios universales, respetando derechos y promoviendo equidad.',
    },
    {
      termino: 'Criterios éticos',
      significado:
        ' Parámetros generales que orientan decisiones responsables en contextos personales y laborales.',
    },
    {
      termino: 'Valores',
      significado:
        ' Principios fundamentales como la justicia, el respeto y la honestidad, que guían el comportamiento ético.',
    },
    {
      termino: 'Resolución de conflictos',
      significado:
        ' Capacidad para abordar desacuerdos de manera justa, promoviendo soluciones éticas y respetuosas.',
    },
    {
      termino: 'Código de ética',
      significado:
        ' Documento formal que establece principios, normas y procedimientos para garantizar conductas responsables en una organización.',
    },
  ],
  referencias: [
    {
      referencia:
        'Watzlawick, P., Beavin, H., & Jackson, D. D. (1974). Teoría de la comunicación. Barcelona: Herder.',
      link: '',
    },
    {
      referencia:
        'Van der Hofstadt Román, C. J. (2005). El libro de las habilidades de comunicación. Ediciones Díaz de Santos.',
      link: '',
    },
    {
      referencia:
        'Harris, O. J., & French, W. L. (1980). Administración de recursos humanos. Limusa.',
      link: '',
    },
    {
      referencia:
        'Lasswell, H. D. (1985). Estructura y función de la comunicación en la sociedad. Sociología de la Comunicación de masas. II Estructura, funciones y efectos. Barcelona. Gustavo Gili, 50-68.',
      link: '',
    },
    {
      referencia:
        'Salazar Estrada, J. G., Guerrero Pupo, J. C., Machado Rodríguez, Y. B., & Cañedo Andalia, R. (2009). Clima y cultura organizacional: dos componentes esenciales en la productividad laboral. Acimed, 20(4), 67-75.',
      link: '',
    },
    {
      referencia:
        'Moreno Uribe, P. H. (2010). Importancia de los valores para el ejercicio ético de la profesión.',
      link: '',
    },
    {
      referencia:
        'Federación Internacional de Trabajadores Sociales, Octubre 1994: Principios y criterios de la ética profesional.',
      link: '',
    },
    {
      referencia:
        'Gilberto Rodríguez García: “¿Qué son las competencias laborales?” en Contribuciones a la Economía, enero 2007.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Mayra Cardenas Castellanos',
          cargo: 'Experta temática',
          centro: 'Centro de comercio y servicios - Regional Tolima',
        },
        {
          nombre: 'Ángela Patricia Frasser Castaño',
          cargo: 'Asesora pedagógica',
          centro: 'Centro de comercio y servicios - Regional Tolima',
        },
        {
          nombre: 'Sandra Paola Morales Paez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Marcos Yamid Rubiano Avellaneda',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Leonardo Castellanos Rodriguez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Validadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
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
