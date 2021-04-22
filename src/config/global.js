export const global = {
  componenteFormativo: 'Introducción a la algoritmia',
  descripcionCurso:
    'Es importante reconocer los componentes que forman parte de un problema desde un punto de vista lógico y procedimental, debido a que estos son las bases del análisis y diseño de algoritmos. El presente componente orienta el pensamiento y despierta la conciencia sobre este tipo de análisis, aportando un enfoque metodológico para la solución de problemas.',
  imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
  fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
}

export const menuPrincipal = {
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
      titulo: 'Introducción a la algoritmia',
      desarrolloContenidos: true,
      subMenu: [
        {
          icono: 'far fa-file-alt',
          numero: '1.1',
          titulo: 'Definición de algoritmo',
          hash: 't_1_1',
        },
        {
          icono: 'far fa-file-alt',
          numero: '1.2',
          titulo: 'Pensamiento algorítmico',
          hash: 't_1_2',
        },
        {
          icono: 'far fa-file-alt',
          numero: '1.3',
          titulo: 'Solución de problemas y programación',
          hash: 't_1_3',
        },
        {
          icono: 'far fa-file-alt',
          numero: '1.4',
          titulo: 'Análisis de problemas (entenderlo)',
          hash: 't_1_4',
        },
        {
          icono: 'far fa-file-alt',
          numero: '1.5',
          titulo:
            'Desarrollo de la creatividad: elementos, modelos, fases y sus objetivos',
          hash: 't_1_5',
        },
      ],
    },
    {
      nombreRuta: 'tema2',
      icono: 'far fa-file-alt',
      numero: '2',
      titulo: 'Lógica matemática',
      desarrolloContenidos: true,
      subMenu: [
        {
          icono: 'far fa-file-alt',
          numero: '2.1',
          titulo: 'Componentes de la lógica matemática',
          hash: 't_2_1',
        },
        {
          icono: 'far fa-file-alt',
          numero: '2.2',
          titulo: 'Tablas de verdad',
          hash: 't_2_2',
        },
        {
          icono: 'far fa-file-alt',
          numero: '2.3',
          titulo: 'Ejercicios de lógica proposicional',
          hash: 't_2_3',
        },
      ],
    },
  ],
  subMenu: [
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
}

export const creditos = {
  liderEquipo: {
    nombre: 'Maria Camila Garcia Santamaria',
    cargo: 'Líder del equipo',
  },
  contenidoInstruccional: [
    {
      nombre: 'Gloria Matilde Lee Mejía',
      cargo: 'Responsable del equipo',
      centro: 'Centro de Comercio y Servicios',
      regional: 'Regional Tolima',
    },
    {
      nombre: 'Rafael Neftalí Lizcano Reyes',
      cargo: 'Asesor pedagógico',
      centro: 'Centro Industrial del Diseño y la Manufactura',
      regional: 'Regional Santander',
    },
    {
      nombre: 'Astrid Lili Puerta',
      cargo: 'Experta temática',
      centro: 'Centro Agropecuario de Buga',
      regional: 'Regional valle',
    },
    {
      nombre: 'Javier Enrique Santana',
      cargo: 'Experto temático',
      centro: 'Centro de Gestión Industrial',
      regional: 'Regional Distrito Capital',
    },
    {
      nombre: 'Michael Andrés Cortés Caro',
      cargo: 'Experto temático',
      centro: 'Ministerio de Ambiente y Desarrollo Sostenible',
    },
    {
      nombre: 'Mauricio Jiménez Fajardo',
      cargo: 'Experto temático',
      centro: 'Ministerio de Ambiente y Desarrollo Sostenible',
    },
    {
      nombre: 'Manuel Alejandro Garzón Cárdenas',
      cargo: 'Experto temático',
      centro: 'Deutsche Gesellschaft für',
      regional: 'Internationale Zusammenarbeit (GIZ)',
    },
    {
      nombre: 'Liliana Victoria Morales Gualdrón',
      cargo: 'Diseñador instruccional',
      centro: 'Centro para la Industria y la Comunicación Gráfica',
      regional: 'Regional Distrito Capital',
    },
    {
      nombre: 'Carlos Andrés Rodríguez',
      cargo: 'Evaluador instruccional',
      centro: 'Centro de Diseño y Metrología',
      regional: 'Regional Distrito Capital',
    },
    {
      nombre: 'Julieth Paola Vital López',
      cargo: 'Revisora de estilo',
      centro: 'Centro para la Industria de la Comunicación Gráfica',
      regional: 'Regional Distrito Capital',
    },
  ],
  desarrolloProducto: [
    {
      nombre: 'Francisco José Lizcano Reyes',
      cargo: 'Responsable del equipo',
    },
    {
      nombre: 'Leyson Fabian Castaño Perez',
      cargo: 'Integración de recursos y pruebas',
    },
    {
      nombre: ['Adriana Rincón Avendaño', 'Eulises Orduz Amezquita'],
      cargo: 'Diseño web y Producción Audiovisual',
    },
    {
      nombre: 'Edward Leonardo Pico Cabra',
      cargo: 'Desarrollo Front-End',
    },
    {
      centro: 'Centro Industrial del Diseño y la Manufactura',
      regional: 'Regional Santander',
    },
  ],
  gestoresRepositorio: [
    {
      nombre: 'Brayan Stiven Pinto Diaz',
      cargo: ['Desarrollo front-end', 'Validación de recursos'],
      centro: 'Centro de comercio y servicios',
      regional: 'Regional Tolima',
    },
  ],
}

export const referencias = [
  {
    referencia:
      'Eduteka.org. (2008). Sembrando las semillas para una sociedad más creativa. Dr. Mitchel Resnick. [Traducción]. Universidad ICESI.',
    link: 'http://www.eduteka.org/ScratchResnickCreatividad.php',
  },
  {
    referencia:
      'López, J., C. (2009). Educación básica algoritmos y programación. Guía para docentes. Segunda edición. Fundación Gabriel Piedrahita Uribe, www.eduteka.org',
    link:
      'https://libros.metabiblioteca.org/bitstream/001/169/8/AlgoritmosProgramacion.pdf',
  },
  {
    referencia:
      'Medina, H., M. (2018). Estrategias metodológicas para el desarrollo del pensamiento lógico-matemático. Didasc@lia: Didáctica y Educación, 9(1), p. 125-132.',
    link: 'https://dialnet.unirioja.es/descarga/articulo/6595073.pdf',
  },
  {
    referencia:
      'Real Academia Española (2020). Algoritmo | Diccionario de la lengua española. RAE.',
    link: 'https://dle.rae.es/algoritmo',
  },
  {
    referencia:
      'Real Academia Española (2020). Programa | Diccionario de la lengua española. RAE.',
    link: 'https://dle.rae.es/programa',
  },
  {
    referencia:
      'Suppes, P., y Hill, S. (2021). Introducción a la lógica matemática. Editorial Reverté.',
    link:
      'https://www.reverte.com/libro/introduccion-a-la-logica-matematica_91496/',
  },
  {
    referencia:
      'Tapia, L. (1995). Cómo desarrollar el razonamiento lógico matemático. Editorial Universitaria.',
    link:
      'https://www.worldcat.org/title/como-desarrollar-el-razonamiento-logico-y-matematico/oclc/50414752',
  },
  {
    referencia:
      'TOMi.digital. (s.f.). Valores de las tablas de verdad. Colegio Nuestra Señora de las Victorias.',
    link:
      'https://tomi.digital/es/59552/valores-de-las-tablas-de-verdad?utm_source=google&utm_medium=seo',
  },
]

export const glosario = [
  {
    termino: 'Algoritmo',
    significado:
      'conjunto ordenado y finito de operaciones que permite hallar la solución de un problema.',
  },
  {
    termino: 'Conjunción',
    significado:
      'conecta dos proposiciones que se deben unir para que se pueda obtener un resultado verdadero.',
  },
  {
    termino: 'Contingencia',
    significado:
      'son aquellas fórmulas cuyo valor de verdad o falsedad depende de la valoración de los símbolos proposicionales que contiene. Las proposiciones dan un resultado negativo y positivo (TOMi.digital, 2021).',
  },
  {
    termino: 'Contradicción',
    significado:
      'son aquellas fórmulas que son falsas para cualquier valoración de los símbolos proposicionales que contiene. Las proposiciones dan el resultado negativo (TOMi.digital, 2021).',
  },
  {
    termino: 'Disyunción',
    significado:
      'conecta dos proposiciones y se obtiene una proposición compuesta verdadera cuando por lo menos unas de las proposiciones son verdaderas.',
  },
  {
    termino: 'Negación',
    significado:
      'su propósito es negar una proposición, es decir, que si se tiene una proposición verdadera al aplicar este tipo de operador se obtiene la negación, es decir, es falsa.',
  },
  {
    termino: 'Programa',
    significado:
      'conjunto unitario de instrucciones que permite a una computadora realizar funciones diversas, como el tratamiento de textos, el diseño de gráficos, la resolución de problemas matemáticos, el manejo de bancos de datos (RAE, 2021).',
  },
  {
    termino: 'Proposición bicondicional',
    significado:
      'indica que una proposición es verdadera si y solo si las proposiciones simples o compuestas que forman la proposición son verdaderas, o son falsas si y solo si ambas proposiciones son falsas.',
  },
  {
    termino: 'Software',
    significado:
      'conjunto de programas, instrucciones y reglas informáticas para ejecutar ciertas tareas en una computadora.',
  },
  {
    termino: 'Tautología',
    significado:
      'es una expresión lógica que es verdadera para todos los posibles valores de verdad de sus componentes atómicos. Las proposiciones dan el resultado positivo (TOMi.digital, 2021).',
  },
]

export const complementario = [
  {
    texto: 'Magic Markers. (2015). ¿Qué es un algoritmo?',
    tipo: 'Video',
    link: 'https://www.youtube.com/watch?v=U3CGMyjzlvM',
  },
  {
    texto: 'Calderón, J. P. (2015). Fundamentos de lógica matemática.',
    tipo: 'Página web',
    descarga: 'https://www.youtube.com/watch?v=9zYDaZhS7Ac',
  },
]
