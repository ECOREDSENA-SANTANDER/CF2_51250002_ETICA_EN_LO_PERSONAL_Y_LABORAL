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
        download: 'downloads/CF2_52450390_DU.pdf',
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
      tema: '1. Corte y confección de falda',
      referencia:
        'YouTube. (s/f). Youtu.Be. Recuperado de https://youtu.be/w9GGdFRgpzY',
      tipo: 'video',
      link: 'https://youtu.be/w9GGdFRgpzY',
    },
    {
      tema: '3. Corte y confección de camisa',
      referencia:
        'Acoldemoda [@Acoldemoda]. (s/f). Confección de CAMISA CLÁSICA MASCULINA - DIY - Paso a paso. Youtube. Recuperado de https://www.youtube.com/watch?v=x7d_FSKU5_o',
      tipo: 'video',
      link: 'https://youtu.be/x7d_FSKU5_o',
    },
    {
      tema: '4.2 Bolsillo lateral',
      referencia:
        'YouTube. (s/f). Youtu.Be. Recuperado de https://youtu.be/zozv1G9Yk_M',
      tipo: 'video',
      link: 'https://youtu.be/zozv1G9Yk_M',
    },
  ],
  glosario: [
    {
      termino: 'Aletilla',
      significado: 'Pieza de tela que acompaña a la cremallera del pantalón.',
    },
    {
      termino: 'Bastas',
      significado:
        'También llamadas pespunte, es una serie de puntadas en uno o más materiales',
    },
    {
      termino: 'Bocamanga',
      significado: 'Medida de la parte inferior de las mangas.',
    },
    {
      termino: 'Bragueta',
      significado:
        'abertura delantera de los pantalones o calzoncillos. Inventada en Francia en el siglo XV, originalmente no llevaba botones; se trataba de un triángulo de tela que se ataba con un lazo y que servía para guardar las monedas.',
    },
    {
      termino: 'Complementos',
      significado:
        'Son las piezas adicionales que hacen parte de una prenda, estas se emplean para dar un mejor acabado o terminado a la camisa, entre estas se hallan la pechera o extensión de la abotonadura, el sesgo de la portañuela, la portañuela y las entretelas.',
    },
    {
      termino: 'Dobladillo',
      significado:
        'Es el borde de la tela doblada dos veces sobre si misma asegurada con puntadas a mano o a máquina en la parte inferior de faldas, vestidos, pantalones y orillos de mangas etc.',
    },
    {
      termino: 'Embonar',
      significado:
        'Ocultar los extremos de dos telas previamente cosidas por medio de otra costura, remplaza la costura de filete.',
    },
    {
      termino: 'Enhebrar',
      significado:
        'Pasar la hebra por el ojo de la aguja o por el agujero de las cuentas, perlas, etc.',
    },
    {
      termino: 'Entretela',
      significado:
        'Tejido que se pone entre la tela y el forro de una prenda de vestir, para reforzarla o darle consistencia.',
    },
    {
      termino: 'Falso',
      significado:
        'Tela de refuerzo, doblez. Es la pieza que se ubica en la parte interna de las chaquetas, dándole generalmente un mejor acabado a la prenda.',
    },
    {
      termino: 'Fuelle',
      significado:
        'Prense que se hace en partes de las prendas (Bolsillo, espalda) para dar más amplitud.',
    },
    {
      termino: 'Ojal',
      significado:
        ' es un orificio elaborado generalmente al borde de una prenda a través del cual pasa un botón, la medida del ojal debe corresponder con el diámetro del botón, es recomendable entretelar la tela en la ubicación del ojal.',
    },
    {
      termino: 'Lateral',
      significado: ' El lado o el costado de una pieza.',
    },
    {
      termino: 'Pernera',
      significado: 'Parte del pantalón que cubre cada pierna.',
    },
    {
      termino: 'Pliegue',
      significado:
        'Doblez hecho para ceñir como pinza hueca. Doblez hecho para dar amplitud como los usados en el plisado.',
    },
    {
      termino: 'Presillar',
      significado:
        'Son puntadas realizadas por ciclos en la máquina presilladora, para darle seguridad y terminación en las uniones de elásticos, sesgos y cargaderas.',
    },
    {
      termino: 'Quiebre',
      significado: 'El doblez que tiene la solapa.',
    },
    {
      termino: 'Talle',
      significado:
        'Cintura del cuerpo humano. Parte del vestido que corresponde a la cintura. Medida tomada para un vestido o traje, comprendida desde el cuello a la cintura, tanto por delante como por detrás.',
    },
    {
      termino: 'Tiro',
      significado: 'Es la parte del pantalón donde se unen las piernas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alfahogar (2017). Características máquinas de coser industrial.',
      link: '',
    },
    {
      referencia:
        'Clayton, Marie (2009). Coser en casa: fundamentos, técnicas, corte y confección, sastrería avanzada, ropa de hogar y arreglos. Barcelona (España): Editorial Blume. ISBN 978-84-8076-842-9. R.',
      link: '',
    },
    {
      referencia: 'El baúl de las costureras. (2017). Maquinaria y accesorios.',
      link: '',
    },
    {
      referencia:
        'Mors de Castro, Lucía (2010). Patronaje de moda: una guía práctica paso a paso. Barcelona (España): Promopress. ISBN 978-84-9364-087-3.',
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
          nombre: 'Olga Constanza Bermúdez James',
          cargo: 'Experto temático V1',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Carolina Jiménez ',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
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
