// Central registry of the 44 Spanish long-tail topic pages for Costanera Corrientes.
// Content is independent, third-party visitor information. Variable facts (hours,
// prices, business status, transport) are softened and marked "verify before travel"
// per E-E-A-T. Named venues listed are candidates from public tourism material, not
// on-site verified recommendations.

export type GroupKey = 'A' | 'B' | 'C' | 'D' | 'E' | 'F';

export interface TopicSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  callout?: string;
}

export interface TopicFaq {
  question: string;
  answer: string;
}

export interface Topic {
  slug: string;
  group: GroupKey;
  groupLabel: string;
  kicker: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  lead: string;
  updated: string;
  sections: TopicSection[];
  faqs: TopicFaq[];
  related: string[];
}

export const SITE = 'https://costaneractes.com';
export const ADDRESS = 'Av. Costanera Gral. San Martín 3400, W3400 Corrientes, Argentina';
export const GEO = { lat: -27.4651406, lng: -58.8480081 };
export const MAPS_URL = 'https://maps.app.goo.gl/jQSYJQGbFLBneVRq9';
export const PLUS_CODE = 'G5M2+WQ Corrientes';
export const LENGTH_NORTE = '2,5 km';
export const EXTENSION_JPII = '900 m';
export const VERIFIED = 'octubre de 2026';

export const SOURCES: { name: string; url: string }[] = [
  { name: 'Turismo de Corrientes', url: 'https://corrientes.tur.ar/tour/costanera-de-corrientes/' },
  { name: 'Visit Corrientes', url: 'https://visitcorrientes.tur.ar/quehacer/paseo-por-la-costa/' },
  { name: 'Municipalidad de la Ciudad de Corrientes', url: 'https://visitcorrientes.tur.ar/sobre-corrientes/' },
];

export const GROUP_LABELS: Record<GroupKey, string> = {
  A: 'Guía de la Costanera',
  B: 'Cómo llegar',
  C: 'Lugares y puntos de interés',
  D: 'Comer cerca',
  E: 'Itinerarios',
  F: 'Alojamiento y artesanías',
};

export const GROUP_ORDER: GroupKey[] = ['A', 'B', 'C', 'D', 'E', 'F'];

export const TOPICS: Topic[] = [
  // ===================== GROUP A: Guía del paseo (8) =====================
  {
    slug: 'guia/cuantos-km-tiene-la-costanera',
    group: 'A',
    groupLabel: GROUP_LABELS.A,
    kicker: 'Pregunta frecuente resuelta',
    h1: '¿Cuántos kilómetros tiene la Costanera de Corrientes?',
    metaTitle: '¿Cuántos km tiene la Costanera de Corrientes? Norte y Sur',
    metaDescription:
      'El tramo General San Martín (Norte) mide unas 2,5 km y la extensión Juan Pablo II suma unos 900 m. Diferencias entre el norte y el sur, fuentes y cómo planificar el recorrido.',
    lead: 'La pregunta "cuántos kilómetros tiene" no tiene una sola cifra porque la costanera creció por etapas y el frente ribereño se nombra de formas distintas. Aquí separá las medidas por tramo y sus fuentes.',
    updated: VERIFIED,
    sections: [
      {
        heading: 'El tramo Norte (General San Martín): unas 2,5 km',
        paragraphs: [
          'El paseo asociado a la Avenida Costanera General San Martín, en Corrientes Capital, se desarrolla a lo largo de aproximadamente 2,5 kilómetros. Es la cifra que suele citarse como la longitud del frente peatonal más conocido de la ciudad.',
          'Este tramo se consolidó como obra urbana sobre el río Paraná entre 1929 y 1954, y concentra miradores, espacios verdes y accesos señalizados.',
        ],
      },
      {
        heading: 'La extensión Juan Pablo II: unos 900 m más',
        paragraphs: [
          'En 2008 la ciudad incorporó la extensión conocida como Juan Pablo II, que suma aproximadamente 900 metros adicionales de costanera al continuo recreativo frente al río.',
          'Son medidas de tramos históricos distintos, no una medición actualizada de toda la costa ni una garantía de ruta continua sin interrupciones. Elegí puntos de inicio y regreso concretos antes de salir.',
        ],
      },
      {
        heading: '¿Norte o Sur? No son la misma franja',
        paragraphs: [
          'El nombre "Costanera Sur" aparece en recorridos y playas del sur de la ciudad (por ejemplo cerca de Playa Arazaty). No asumas que el total del norte y del sur se suma en un solo paseo continuo: la distancia real depende de dónde empieces y cómo te desplaces.',
        ],
        bullets: [
          'Norte (General San Martín): unas 2,5 km de frente peatonal consolidado.',
          'Extensión Juan Pablo II (2008): unos 900 m adicionales.',
          'Sur / Arazaty: sectores distintos, con sus propios accesos y playas.',
        ],
        callout:
          'Consejo de planeamiento: para caminar sin prisa, elegí un tramo y calculá el tiempo real desde tu punto de partida. Las cifras de tramo ayudan a estimar, pero el recorrido efectivo depende de accesos, sombra y descansos.',
      },
      {
        heading: 'Fuentes y verificación',
        paragraphs: [
          'Las cifras de esta guía se contrastan con material público de la Municipalidad de la Ciudad de Corrientes y Visit Corrientes. Las longitudes pueden presentarse de forma distinta según la fuente; no las trates como una medición de campo actualizada.',
        ],
      },
    ],
    faqs: [
      {
        question: '¿Cuántos kilómetros tiene la Costanera Norte?',
        answer:
          'El tramo General San Martín (Norte) se desarrolla a lo largo de aproximadamente 2,5 km, según el material de turismo de la ciudad. Es la cifra más citada del frente peatonal norte.',
      },
      {
        question: '¿Y la extensión Juan Pablo II?',
        answer:
          'Se sumaron unos 900 metros adicionales en 2008. En total, el continuo norte suele referensarse en torno a 3,4 km entre ambos tramos, aunque la cifra exacta depende de dónde se mida.',
      },
      {
        question: '¿La Costanera Sur tiene la misma longitud?',
        answer:
          'No. El sur es un sector distinto, con accesos y playas propias (por ejemplo hacia Playa Arazaty). No sumes norte y sur como un solo paseo continuo sin verificar el recorrido.',
      },
      {
        question: '¿Puedo recorrerla toda a pie en una visita?',
        answer:
          'Depende de tu punto de partida, movilidad y clima. Para una caminata tranquila, conviene elegir un tramo (el Norte es el más continuo) y reservar entre 1,5 y 3 horas con pausas.',
      },
      {
        question: '¿De dónde sacan estos números?',
        answer:
          'Se contrastan con fuentes públicas de la Municipalidad de la Ciudad de Corrientes y Visit Corrientes. Se recomienda confirmar cualquier cambio operativo antes de viajar.',
      },
    ],
    related: [
      'guia/mapa-accesos-costanera',
      'guia/costanera-norte-vs-sur',
      'guia/horarios-y-entrada',
      'itinerarios/medio-dia',
    ],
  },
  {
    slug: 'guia/mapa-accesos-costanera',
    group: 'A',
    groupLabel: GROUP_LABELS.A,
    kicker: 'Orientación y accesos',
    h1: 'Mapa y accesos de la Costanera de Corrientes',
    metaTitle: 'Mapa y accesos de la Costanera de Corrientes',
    metaDescription:
      'Cómo orientarte en la Costanera de Corrientes: punto de referencia, entradas principales, miradores y cómo elegir el acceso según el medio de transporte.',
    lead: 'La costanera es un borde urbano largo, no un recinto con una sola puerta. El mejor mapa es el que te dice desde dónde vas a entrar y cómo vas a volver.',
    updated: VERIFIED,
    sections: [
      {
        heading: 'El punto de referencia',
        paragraphs: [
          `La dirección de referencia es ${ADDRESS}. Desde allí se despliega el frente peatonal sobre el río Paraná, con accesos que descienden desde las calles de la ciudad hacia la ribera.`,
          `El código Plus Code aproximado es ${PLUS_CODE}. Usalo en el navegador o en el mapa para ubicar el entorno antes de llegar.`,
        ],
      },
      {
        heading: 'Cómo elegir tu acceso',
        paragraphs: [
          'No hay un solo "ingreso". Conviene definir el acceso según tres cosas: el medio de transporte, la hora del día y qué querés ver (miradores, playa o paseo sombreado).',
        ],
        bullets: [
          'A pie o en bici: bajá por las calles que descienden hacia el río y buscá un acceso señalizado con fácil regreso.',
          'En auto: priorizá sectores con detención/estacionamiento urbano cercano y revisá la señalización vigente.',
          'En transporte público: confirmá la parada conveniente a tu tramo con fuentes municipales antes de viajar.',
        ],
      },
      {
        heading: 'Puntos que ayudan a ubicarte',
        paragraphs: [
          'A lo largo del frente reconocés referencias como Punta San Sebastián, Punta Tacuara y el Parque Cambá Cuá, además de la silueta del Puente General Belgrano hacia el río.',
          'Estas referencias funcionan como "hitos" para no perderte: anotalas antes de caminar y usalas para orientar el regreso.',
        ],
      },
      {
        heading: 'Mapa y verificación en el día',
        paragraphs: [
          'El mapa embebido abajo es una ayuda general. Las condiciones de playas, accesos y señalización pueden cambiar por obras, eventos o crecidas; verificalas el día de la visita.',
        ],
        callout:
          'No te guíes solo por la distancia en línea recta: las calles, las pendientes y los cruces cambian el tiempo real de ida y vuelta.',
      },
    ],
    faqs: [
      {
        question: '¿Cuál es la dirección de la Costanera de Corrientes?',
        answer: `La referencia es ${ADDRESS}, sobre la vera del río Paraná, en la ciudad de Corrientes, provincia de Corrientes, Argentina.`,
      },
      {
        question: '¿Tiene una sola entrada?',
        answer:
          'No. Es un paseo público con varios accesos que descienden desde la ciudad hacia el río. Elegí el más conveniente según cómo llegues y qué tramo quieras recorrer.',
      },
      {
        question: '¿El mapa muestra las playas habilitadas?',
        answer:
          'El mapa es una ayuda de ubicación general. La habilitación de playas depende de la temporada y de la municipalidad; consultala en el día.',
      },
      {
        question: '¿Cómo sé por dónde volver?',
        answer:
          'Antes de entrar, fijate un hito claro (una plaza, el puente, un acceso señalizado) y usalo como referencia de regreso. Caminá tramos cortos la primera vez.',
      },
    ],
    related: [
      'guia/cuantos-km-tiene-la-costanera',
      'como-llegar/desde-el-centro',
      'como-llegar/estacionamiento',
      'lugares/punta-tacuara',
    ],
  },
  {
    slug: 'guia/costanera-norte-vs-sur',
    group: 'A',
    groupLabel: GROUP_LABELS.A,
    kicker: 'Norte vs Sur',
    h1: 'Costanera Norte vs Sur: diferencias para elegir',
    metaTitle: 'Costanera Norte vs Sur de Corrientes: diferencias',
    metaDescription:
      'Qué cambia entre el Norte (General San Martín) y el Sur (hacia Arazaty): continuidad del paseo, playas, servicios y a qué tipo de visita conviene cada uno.',
    lead: 'El norte es el frente peatonal más continuo y conocido; el sur se asocia a playas y a un recorrido distinto. Saber la diferencia evita confusiones al planificar.',
    updated: VERIFIED,
    sections: [
      {
        heading: 'Costanera Norte (General San Martín)',
        paragraphs: [
          'El tramo norte, sobre la Avenida Costanera General San Martín, es el más citado: unas 2,5 km de frente peatonal consolidado, con miradores, espacios verdes y la extensión Juan Pablo II (unos 900 m más desde 2008).',
          'Es la opción más natural para una caminata seguida, foto al Puente General Belgrano y pausas en plazas.',
        ],
      },
      {
        heading: 'Costanera Sur (hacia Arazaty y el sur de la ciudad)',
        paragraphs: [
          'El sur agrupa sectores distintos, con playas como Playa Arazaty y entornos menos continuos que el norte. Su uso suele estar más ligado a la temporada de playa y a actividades junto al río.',
          'No asumas que norte y sur forman un solo paseo ininterrumpido: la distancia y los accesos cambian según desde dónde partas.',
        ],
      },
      {
        heading: 'Cuadro rápido de diferencias',
        bullets: [
          'Norte: paseo peatonal más continuo, miradores y Parque Cambá Cuá cercano.',
          'Sur: playas (Arazaty I/II), ambiente más estacional y accesos propios.',
          'Norte: ideal para caminata y atardecer con el puente de fondo.',
          'Sur: ideal si buscás playa habilitada y un recorrido más disperso.',
        ],
        callout:
          'Si es tu primera visita y querés caminar sin complicaciones, empezá por el Norte. Si buscás playa, revisá la habilitación del sector sur el día de tu visita.',
      },
    ],
    faqs: [
      {
        question: '¿Cuál es más largo, el Norte o el Sur?',
        answer:
          'El Norte es el tramo más continuo y conocido (unas 2,5 km, más la extensión Juan Pablo II de unos 900 m). El Sur no se suma como un solo paseo continuo; sus sectores se miden aparte.',
      },
      {
        question: '¿Dónde hay playas?',
        answer:
          'Las playas (como Arazaty, al sur) dependen de habilitación estacional y municipal. El Norte es más de paseo y miradores; el Sur, más de uso playero.',
      },
      {
        question: '¿Puedo hacer todo en una visita?',
        answer:
          'Depende de tu base y movilidad. Para una primera visita, el Norte es el más sencillo. El Sur conviene si ya estás por esa zona o buscás playa.',
      },
      {
        question: '¿El Sur tiene los mismos servicios que el Norte?',
        answer:
          'La disponibilidad de baños, bares y estacionamiento cambia por tramo y temporada. No los des por sentados en ningún sector; verificalos en sitio.',
      },
    ],
    related: [
      'guia/cuantos-km-tiene-la-costanera',
      'lugares/playa-arazaty',
      'lugares/playa-islas-malvinas',
      'guia/horarios-y-entrada',
    ],
  },
  {
    slug: 'guia/historia-costanera',
    group: 'A',
    groupLabel: GROUP_LABELS.A,
    kicker: 'Historia del paseo',
    h1: 'Historia de la Costanera de Corrientes',
    metaTitle: 'Historia de la Costanera de Corrientes (1929–2008)',
    metaDescription:
      'De la obra urbana de 1929–1954 a la extensión Juan Pablo II de 2008: cómo se construyó la Costanera General San Martín y cómo se integró al río Paraná.',
    lead: 'La costanera no nació de una sola vez: es el resultado de décadas de obra pública sobre la ribera del Paraná, y de cómo Corrientes decidió mirar hacia el río.',
    updated: VERIFIED,
    sections: [
      {
        heading: 'La obra del tramo General San Martín (1929–1954)',
        paragraphs: [
          'El tramo asociado a la Avenida General San Martín se consolidó como obra urbana sobre la ribera entre 1929 y 1954. A lo largo de esas décadas, la ciudad fue ganándole espacio al río para construir un paseo público.',
          'El resultado fue un frente peatonal de aproximadamente 2,5 km que hoy articula plazas, miradores y áreas de descanso.',
        ],
      },
      {
        heading: 'La extensión Juan Pablo II (2008)',
        paragraphs: [
          'En 2008 la ciudad incorporó la extensión conocida como Juan Pablo II, que sumó aproximadamente 900 metros adicionales de costanera al continuo recreativo frente al Paraná.',
          'Esta ampliación permitió extender el paseo y conectar nuevos sectores de la ribera con el tejido de la ciudad.',
        ],
      },
      {
        heading: 'Un paisaje compartido hoy',
        paragraphs: [
          'El conjunto actual conecta tramos de paseo, playas, áreas verdes, monumentos, puntos panorámicos y la vida cotidiana de residentes y visitantes.',
          'La historia del lugar se lee también en sus hitos: el Puente General Belgrano, las puntas y los espacios verdes que bordean el río.',
        ],
        callout:
          'Esta guía resume la historia con fines educativos a partir de fuentes públicas. Para fechas y obras específicas, consultá la documentación de la Municipalidad de la Ciudad de Corrientes.',
      },
    ],
    faqs: [
      {
        question: '¿Cuándo se construyó la Costanera de Corrientes?',
        answer:
          'El tramo General San Martín (Norte) se desarrolló entre 1929 y 1954 como obra urbana sobre la ribera del Paraná.',
      },
      {
        question: '¿Qué se hizo en 2008?',
        answer:
          'En 2008 se inauguró la extensión Juan Pablo II, que sumó aproximadamente 900 metros adicionales de costanera.',
      },
      {
        question: '¿La costanera es un parque cerrado?',
        answer:
          'No. Es un borde urbano vivo y público: paseo, playas, áreas verdes y encuentros cotidianos, no un recinto de acceso controlado.',
      },
      {
        question: '¿Qué puente se ve desde la costanera?',
        answer:
          'Se distinguen las vistas hacia el Puente General Belgrano, una de las infraestructuras emblemáticas del paisaje ribereño de Corrientes.',
      },
    ],
    related: [
      'lugares/puente-general-belgrano',
      'lugares/parque-camba-cua',
      'guia/cuantos-km-tiene-la-costanera',
      'lugares/paseo-pedro-ferre',
    ],
  },
  {
    slug: 'guia/horarios-y-entrada',
    group: 'A',
    groupLabel: GROUP_LABELS.A,
    kicker: 'Acceso y horarios',
    h1: 'Horarios y entrada de la Costanera de Corrientes',
    metaTitle: 'Horarios y entrada de la Costanera de Corrientes',
    metaDescription:
      'El paseo general es espacio público y no tiene entrada. Qué sí puede tener reglas propias: playas, eventos y servicios temporales.',
    lead: 'La duda "¿a qué hora abre?" suele nacer de confundir el paseo público con un atractivo de horario fijo. Acá lo separá.',
    updated: VERIFIED,
    sections: [
      {
        heading: 'El paseo general: espacio público, sin entrada',
        paragraphs: [
          'No hay una entrada general ni un horario de "apertura y cierre" para recorrer la avenida y sus espacios públicos. Se trata de un paseo al aire libre, de acceso libre.',
          'Eso sí: la experiencia cambia con la hora, la temperatura y la luz. Las últimas horas de la tarde suelen reunir paseo, vista y menos sol directo.',
        ],
      },
      {
        heading: 'Lo que sí puede tener reglas propias',
        paragraphs: [
          'Las playas habilitadas, los eventos y los servicios temporales pueden operar con condiciones, horarios y señalización propios, distintos al paseo general.',
        ],
        bullets: [
          'Playas: habilitación según temporada y municipalidad; consultá el estado el día de tu visita.',
          'Eventos: pueden restringir sectores o modificar el acceso en fechas puntuales.',
          'Servicios temporales: pueden tener su propio horario y forma de uso.',
        ],
        callout:
          'No asumas que "la costanera abre a tal hora". Para playas o actividades específicas, verificá la información oficial vigente antes de ir.',
      },
      {
        heading: 'Recomendación de horario',
        paragraphs: [
          'Para caminar o pedalear, evitá el calor intenso y llevá agua. El atardecer es popular por la luz sobre el Paraná; una franja matinal también puede ser tranquila.',
        ],
      },
    ],
    faqs: [
      {
        question: '¿La Costanera de Corrientes tiene entrada?',
        answer:
          'El paseo general es espacio público y no tiene entrada general. Actividades, playas habilitadas o eventos pueden establecer condiciones particulares.',
      },
      {
        question: '¿A qué hora abre y cierra?',
        answer:
          'El paseo al aire libre no tiene un horario de apertura/cierre general. Las playas y eventos sí pueden tener horarios propios; verificalos con la municipalidad.',
      },
      {
        question: '¿Se puede ir al atardecer?',
        answer:
          'Sí, el atardecer es un momento muy buscado por la luz sobre el río. Después de oscurecer, preferí sectores iluminados y transitados.',
      },
      {
        question: '¿Las playas son gratis?',
        answer:
          'La playa es un espacio público; su habilitación depende de la temporada y de la autoridad local. Confirmá el estado, la señalización y las indicaciones de cada playa el día.',
      },
    ],
    related: [
      'guia/clima-crecidas-y-seguridad',
      'guia/banos-accesibilidad',
      'lugares/playa-arazaty',
      'comer/con-ninos',
    ],
  },
  {
    slug: 'guia/donde-ver-atardecer',
    group: 'A',
    groupLabel: GROUP_LABELS.A,
    kicker: 'Atardecer y miradores',
    h1: 'Dónde ver el atardecer en la Costanera',
    metaTitle: 'Dónde ver el atardecer en la Costanera de Corrientes',
    metaDescription:
      'Los mejores puntos para el atardecer sobre el Paraná: miradores del norte, el Puente General Belgrano de fondo y qué tener en cuenta de luz y seguridad.',
    lead: 'El río abre el horizonte hacia el oeste, y la luz baja vuelve más ancho el Paraná. El atardecer es, con diferencia, el momento más buscado del paseo.',
    updated: VERIFIED,
    sections: [
      {
        heading: 'Los miradores del frente norte',
        paragraphs: [
          'A lo largo del tramo norte hay puntos panorámicos que concentran las mejores vistas del río y del Puente General Belgrano. Son los lugares naturales para detenerse al atardecer.',
          'Caminá a tu propio paso y elegí el que tenga espacio, sombra previa y una buena línea de visión al oeste.',
        ],
      },
      {
        heading: 'El Puente General Belgrano de fondo',
        paragraphs: [
          'La silueta del puente se recorta con la luz baja y es uno de los encuadres más buscados. Llegá un poco antes para ubicarte y no apurarte cuando el sol ya está bajo.',
        ],
      },
      {
        heading: 'Luz, viento y seguridad',
        paragraphs: [
          'Sobre el río la luz cambia rápido y el viento puede ser fuerte. Llevá una prenda liviana y, si vas a fotografiar, probá distintos puntos antes del momento clave.',
        ],
        bullets: [
          'Andá temprano: 30–45 min antes del atardecer para elegir lugar.',
          'Buscá sectores iluminados y transitados para el regreso.',
          'Respetá los accesos de emergencia y la señalización.',
        ],
        callout:
          'El atardecer es el momento más concurrido; si preferís calma, una franja matinal también da buena luz y menos gente.',
      },
    ],
    faqs: [
      {
        question: '¿Por dónde se ve mejor el atardecer?',
        answer:
          'Los miradores del frente norte y los puntos con vista al Puente General Belgrano son los más buscados. Elegí el que tenga buena línea al oeste y espacio para detenerte.',
      },
      {
        question: '¿Hacia dónde queda el sol?',
        answer:
          'El río Paraná abre el horizonte al oeste en buena parte del paseo, por eso el atardecer cae sobre el agua y el puente.',
      },
      {
        question: '¿Es seguro volver de noche?',
        answer:
          'Preferí sectores iluminados y transitados después de oscurecer, y coordiná el regreso en taxi, remis o vehículo propio si venís de lejos.',
      },
      {
        question: '¿Conviene ir en otra hora?',
        answer:
          'Sí: una caminata matinal puede dar buena luz y menos concurrencia. El atardecer es el momento más popular, no el único bueno.',
      },
    ],
    related: [
      'itinerarios/fotos-al-atardecer',
      'lugares/puente-general-belgrano',
      'comer/cenar-con-vista-al-rio',
      'guia/horarios-y-entrada',
    ],
  },
  {
    slug: 'guia/banos-accesibilidad',
    group: 'A',
    groupLabel: GROUP_LABELS.A,
    kicker: 'Servicios y accesibilidad',
    h1: 'Baños, accesibilidad y descanso en la Costanera',
    metaTitle: 'Baños, accesibilidad y descanso en la Costanera',
    metaDescription:
      'Qué esperar de baños, accesibilidad, bancos y descanso en la Costanera: el servicio cambia por tramo y temporada, y conviene verificarlo en sitio.',
    lead: 'Baños, rampas y bancos no están garantizados en todos los sectores. Saber esto antes de salir evita sorpresas, sobre todo con niños, adultos mayores o movilidad reducida.',
    updated: VERIFIED,
    sections: [
      {
        heading: 'Baños: disponibilidad variable',
        paragraphs: [
          'Podés encontrar instalaciones públicas o de acceso habilitado según el sector, pero no las des por sentadas en todo el recorrido. Confirmá horarios y condiciones de uso en el lugar.',
          'Para recorridos largos, conviene ubicar un punto de apoyo (plaza, espacio verde, sector con servicios) antes de alejarte demasiado.',
        ],
      },
      {
        heading: 'Accesibilidad: superficies y pendientes cambian',
        paragraphs: [
          'Hay veredas y espacios abiertos, pero las superficies, pendientes y cruces cambian según el tramo. Revisá tu itinerario y requerimientos antes de salir.',
        ],
        bullets: [
          'Elegí el tramo más plano y pavimentado cerca de tu acceso.',
          'Evitá bajadas directas al río sin baranda ni señalización.',
          'Buscá bancos y sombra para pausas frecuentes.',
        ],
      },
      {
        heading: 'Descanso y calor',
        paragraphs: [
          'El sol sobre el río es intenso. Hidratate, usá protección solar y aprovechá la sombra de las tardes para caminar sin prisa.',
        ],
        callout:
          'Planificá "puntos de apoyo": un acceso con servicios, una plaza con bancos y una sombra conocida. Eso hace el recorrido cómodo para todos.',
      },
    ],
    faqs: [
      {
        question: '¿Hay baños en toda la costanera?',
        answer:
          'No en todos los sectores. La disponibilidad cambia por tramo, temporada y eventos; confirmalos en sitio y ubicá un punto de apoyo antes de alejarte.',
      },
      {
        question: '¿Es accesible para sillas de ruedas?',
        answer:
          'Hay sectores pavimentados y abiertos, pero superficies y pendientes varían. Elegí el tramo más plano y cercano a tu acceso, y revisá el recorrido de antemano.',
      },
      {
        question: '¿Dónde descansar del calor?',
        answer:
          'Las plazas, los espacios verdes y la sombra de la tarde son tus aliados. Hidratate y hacé pausas frecuentes, sobre todo con niños o adultos mayores.',
      },
      {
        question: '¿Puedo ir con un bebé o en familia?',
        answer:
          'Sí, pero planificá accesos con servicios y sombra. Ver más en la guía de visita con niños.',
      },
    ],
    related: [
      'guia/horarios-y-entrada',
      'comer/con-ninos',
      'itinerarios/dos-horas-con-ninos',
      'lugares/parque-camba-cua',
    ],
  },
  {
    slug: 'guia/clima-crecidas-y-seguridad',
    group: 'A',
    groupLabel: GROUP_LABELS.A,
    kicker: 'Clima y seguridad',
    h1: 'Clima, crecidas y seguridad en la Costanera',
    metaTitle: 'Clima, crecidas del Paraná y seguridad en la Costanera',
    metaDescription:
      'Calor, tormentas y crecidas del Paraná: cómo prepararte y qué hacer ante el nivel del río, el baño y las indicaciones municipales.',
    lead: 'El río Paraná es un sistema vivo: su nivel cambia con las lluvias de la cuenca. La seguridad en la ribera empieza por respetar el agua y las indicaciones locales.',
    updated: VERIFIED,
    sections: [
      {
        heading: 'Calor y sol intensos',
        paragraphs: [
          'Sobre el río, el sol es fuerte y la temperatura puede subir rápido. Usá protector solar, sombrero y agua; evitá las horas centrales para caminar o andar en bici.',
        ],
      },
      {
        heading: 'Tormentas y crecidas',
        paragraphs: [
          'Ante tormentas o crecidas, alejate del borde del río y seguí las indicaciones municipales. El nivel del Paraná puede subir y modificar accesos y playas de un día para otro.',
        ],
        bullets: [
          'No te acerques al borde durante tormentas o alertas.',
          'Revisá el estado de playas y boyado antes de entrar al agua.',
          'Seguí la señalización y las indicaciones de guardavidas, si los hubiera.',
        ],
        callout:
          'No bebas el agua del río y no nades en sectores no habilitados ni sin supervisión. La corriente y el nivel del Paraná pueden ser peligrosos.',
      },
      {
        heading: 'Basura y convivencia',
        paragraphs: [
          'Llevate lo que traés, respetá a otras personas y los accesos de emergencia. El espacio es de todas y todos, y se cuida entre todas y todos.',
        ],
      },
    ],
    faqs: [
      {
        question: '¿Se puede bañar en el Paraná?',
        answer:
          'Solo en playas habilitadas y según la temporada y la municipalidad. Antes de entrar, revisá el estado, el boyado, la señalización y las indicaciones del día.',
      },
      {
        question: '¿Qué pasa si crece el río?',
        answer:
          'El nivel del Paraná cambia con las lluvias de la cuenca. Ante crecidas o tormentas, alejate del borde y seguí las indicaciones oficiales.',
      },
      {
        question: '¿Hace mucho calor?',
        answer:
          'El sol sobre el río es intenso. Hidratate, usá protección y preferí las tardes o las mañanas para recorrer.',
      },
      {
        question: '¿Hay guardavidas?',
        answer:
          'Depende del sector y la temporada. No lo des por sentado: verificá en sitio y, si hay, seguí sus indicaciones.',
      },
    ],
    related: [
      'guia/horarios-y-entrada',
      'lugares/playa-arazaty',
      'guia/banos-accesibilidad',
      'itinerarios/dia-de-lluvia',
    ],
  },

  // ===================== GROUP B: Cómo llegar (6) =====================
  {
    slug: 'como-llegar/desde-el-centro',
    group: 'B',
    groupLabel: GROUP_LABELS.B,
    kicker: 'Desde el centro',
    h1: 'Cómo llegar a la Costanera desde el centro',
    metaTitle: 'Cómo llegar a la Costanera desde el centro de Corrientes',
    metaDescription:
      'Desde el centro de Corrientes a la Costanera: distancia real, a pie, en bici, taxi o remis, y cómo elegir el acceso señalizado con fácil regreso.',
    lead: 'El centro y la ribera están cerca, pero la "distancia real" depende de tu punto de partida y de qué tramo de la costanera querés alcanzar.',
    updated: VERIFIED,
    sections: [
      {
        heading: 'Calculá la distancia desde tu punto real',
        paragraphs: [
          'La referencia es Av. Costanera Gral. San Martín 3400. Desde el centro de la ciudad está a pocos kilómetros, pero el tiempo varía según si vas al norte o a un sector más alejado.',
          'Elegí tu tramo antes de salir y calculá el recorrido desde tu ubicación concreta, no solo "desde el centro".',
        ],
      },
      {
        heading: 'A pie o en bicicleta',
        paragraphs: [
          'Podés descender por las calles que bajan hacia el río y llegar al frente peatonal. Usá casco en bici y cruzásolo por sectores señalizados.',
          'Es una buena opción para tramos cortos y para conectar la costanera con plazas y el entorno urbano.',
        ],
      },
      {
        heading: 'Taxi, remis o vehículo propio',
        paragraphs: [
          'Coordiná el descenso en una referencia clara (una plaza, un mirador, un acceso señalizado) y confirmá el punto de regreso. No bloquees veredas, ciclovías ni ingresos.',
        ],
        callout:
          'Consejo: pedí el destino por el hito más conocido ("la costanera, por tal acceso") para evitar confusiones con el sector sur o el puerto.',
      },
    ],
    faqs: [
      {
        question: '¿Está lejos el centro de la costanera?',
        answer:
          'No: está a pocos kilómetros. El tiempo real depende de tu punto de partida y del tramo de la costanera que quieras alcanzar.',
      },
      {
        question: '¿Se puede ir caminando?',
        answer:
          'Sí, por las calles que descienden hacia el río. Elegí un acceso señalizado y con fácil regreso.',
      },
      {
        question: '¿Conviene taxi o remis?',
        answer:
          'Es práctico si venís cargado o con niños. Dalo un hito claro de la costanera como destino y confirmá el punto de vuelta.',
      },
      {
        question: '¿Dónde dejar la bici?',
        answer:
          'Busca sectores señalizados y no obstruyas el paso. Respetá ciclovías y accesos durante el recorrido.',
      },
    ],
    related: [
      'como-llegar/estacionamiento',
      'como-llegar/en-bicicleta',
      'como-llegar/colectivo-urbano',
      'guia/mapa-accesos-costanera',
    ],
  },
  {
    slug: 'como-llegar/desde-el-aeropuerto',
    group: 'B',
    groupLabel: GROUP_LABELS.B,
    kicker: 'Desde el aeropuerto',
    h1: 'Cómo llegar a la Costanera desde el aeropuerto',
    metaTitle: 'Cómo llegar a la Costanera desde el aeropuerto de Corrientes',
    metaDescription:
      'Del Aeropuerto Internacional de Corrientes a la Costanera: opciones de transporte, el servicio diferencial anunciado por el municipio y por qué verificar antes.',
    lead: 'El aeropuerto queda fuera del centro. La opción más común es taxi, remis o traslado reservado; un servicio público aeropuerto–puerto fue anunciado, pero conviene verificar su vigencia.',
    updated: VERIFIED,
    sections: [
      {
        heading: 'El aeropuerto está fuera del centro',
        paragraphs: [
          'El Aeropuerto Internacional Doctor Fernando Piragine Niveyro (CNQ) se sitúa fuera del centro de la ciudad. La distancia y el tiempo dependen del tránsito y de qué sector de la costanera elijas.',
        ],
      },
      {
        heading: 'Taxi, remis o traslado reservado',
        paragraphs: [
          'Son alternativas habituales y directas. Coordiná el destino con un hito claro de la costanera y confirmá el punto de regreso para el día de tu salida.',
        ],
      },
      {
        heading: 'El servicio diferencial aeropuerto–puerto',
        paragraphs: [
          'La municipalidad comunicó en 2022 un servicio diferencial entre el aeropuerto y el puerto. Por posibles cambios operativos, verificá si sigue vigente antes de planificar tu viaje.',
        ],
        callout:
          'Nota: la comunicación municipal describe un recorrido histórico y no garantiza que siga operativo. Confirmá la situación actual con fuentes públicas de la ciudad antes de viajar.',
      },
    ],
    faqs: [
      {
        question: '¿Hay transporte público del aeropuerto a la costanera?',
        answer:
          'El municipio anunció en 2022 un servicio diferencial aeropuerto–puerto, pero los recorridos pueden modificarse. Confirmalo con fuentes municipales antes de viajar.',
      },
      {
        question: '¿Cuál es la opción más segura?',
        answer:
          'Taxi, remis o traslado reservado son directos y evitan coordinar combinaciones. Coordiná el hito de destino y el regreso.',
      },
      {
        question: '¿Cuánto tarda?',
        answer:
          'Depende del tránsito y del sector de la costanera. Pedí una estimación al conductor y dejá margen si tenés un vuelo que tomar.',
      },
      {
        question: '¿Dónde bajo?',
        answer:
          'Indicá un acceso señalizado de la costanera como destino; no des "la costanera" a secas, porque el frente es largo.',
      },
    ],
    related: [
      'como-llegar/desde-la-terminal',
      'como-llegar/estacionamiento',
      'como-llegar/colectivo-urbano',
      'como-llegar/desde-el-centro',
    ],
  },
  {
    slug: 'como-llegar/desde-la-terminal',
    group: 'B',
    groupLabel: GROUP_LABELS.B,
    kicker: 'Desde la terminal',
    h1: 'Cómo llegar a la Costanera desde la terminal de ómnibus',
    metaTitle: 'Cómo llegar a la Costanera desde la terminal de ómnibus',
    metaDescription:
      'De la terminal de Corrientes a la Costanera: combinaciones posibles, taxi/remis y por qué confirmar líneas y paradas con fuentes municipales.',
    lead: 'La terminal de ómnibus queda en la ciudad; de ahí a la ribera podés combinar transporte urbano o ir directo en taxi/remis según tu equipaje y tramo.',
    updated: VERIFIED,
    sections: [
      {
        heading: 'Ubicación y distancia',
        paragraphs: [
          'La terminal de ómnibus está en el tejido urbano de Corrientes. Hasta la costanera hay unos pocos kilómetros, pero el tiempo depende del sector que elijas y del medio.',
        ],
      },
      {
        heading: 'Taxi o remis: directo y simple',
        paragraphs: [
          'Si venís con equipaje o familia, taxi o remis desde la terminal son la opción más directa. Dá un hito de la costanera como destino y confirmá el regreso.',
        ],
      },
      {
        heading: 'Transporte urbano: confirmá antes',
        paragraphs: [
          'Las paradas y recorridos cambian con la operación local. Consultá con canales municipales o el operador para identificar la línea y la parada conveniente a tu acceso.',
        ],
        callout:
          'Planificación: para horarios, tarifas y desvíos, verificá información actualizada con fuentes públicas de la ciudad antes de viajar.',
      },
    ],
    faqs: [
      {
        question: '¿Hay colectivo de la terminal a la costanera?',
        answer:
          'Las líneas urbanas cambian con la operación local. Consultá con la municipalidad o el operador la parada y la línea convenientes a tu acceso.',
      },
      {
        question: '¿Conviene taxi desde la terminal?',
        answer:
          'Sí si venís con equipaje o niños: es directo. Indicá un acceso señalizado de la costanera como destino.',
      },
      {
        question: '¿Cuánto tarda?',
        answer:
          'Pocos kilómetros en auto, salvo tránsito. Dejá margen si tenés conexión o vuelo.',
      },
      {
        question: '¿Dónde confirmo las líneas?',
        answer:
          'En canales municipales de transporte de la Ciudad de Corrientes; no asumas recorridos históricos como vigentes.',
      },
    ],
    related: [
      'como-llegar/colectivo-urbano',
      'como-llegar/desde-el-aeropuerto',
      'como-llegar/estacionamiento',
      'como-llegar/desde-el-centro',
    ],
  },
  {
    slug: 'como-llegar/colectivo-urbano',
    group: 'B',
    groupLabel: GROUP_LABELS.B,
    kicker: 'Transporte urbano',
    h1: 'Colectivo urbano a la Costanera de Corrientes',
    metaTitle: 'Líneas y paradas de colectivo urbano a la Costanera',
    metaDescription:
      'Cómo usar el colectivo urbano para llegar a la Costanera: por qué verificar línea y parada con la municipalidad y qué tener en cuenta del transporte local.',
    lead: 'No hay una sola "línea de la costanera". Lo sensato es confirmar, para tu acceso concreto, qué línea y qué parada usar el día de tu visita.',
    updated: VERIFIED,
    sections: [
      {
        heading: 'Las paradas y recorridos cambian',
        paragraphs: [
          'El transporte urbano de Corrientes se ajusta a la operación local. Lo que fue válido en un momento puede haberse modificado, así que no trates recorridos históricos como vigentes.',
        ],
      },
      {
        heading: 'Cómo identificar tu opción',
        paragraphs: [
          'Consultá con canales municipales o el operador para identificar la línea y la parada convenientes a tu punto de acceso a la costanera.',
        ],
        bullets: [
          'Definí primero qué tramo de la costanera querés (norte, sur, puerto).',
          'Pedí la parada más cercana a ese acceso, no "la costanera" en general.',
          'Confirmá horarios y frecuencias el día de tu visita.',
        ],
      },
      {
        heading: 'Combinar con caminata corta',
        paragraphs: [
          'A veces es más simple bajarte en una parada céntrica y recorrer el último tramo a pie o en bici por calles señalizadas.',
        ],
        callout:
          'Regla práctica: verificá línea, parada y frecuencia con fuentes municipales antes de viajar. No planifiques sobre un recorrido que no esté confirmado.',
      },
    ],
    faqs: [
      {
        question: '¿Qué línea de colectivo va a la costanera?',
        answer:
          'Depende de tu acceso. Consultá con la municipalidad o el operador la línea y parada convenientes a tu tramo; los recorridos cambian.',
      },
      {
        question: '¿Dónde bajo para el Norte?',
        answer:
          'Pedí la parada más cercana al acceso norte que elijas. No bastes con "la costanera", porque el frente es extenso.',
      },
      {
        question: '¿Los horarios son fijos?',
        answer:
          'Pueden variar por operación local. Confirmalos el día de tu visita con fuentes oficiales.',
      },
      {
        question: '¿Conviene combinar colectivo y caminata?',
        answer:
          'A menudo sí: bajate en una parada céntrica y hacé el último tramo a pie o en bici por calles señalizadas.',
      },
    ],
    related: [
      'como-llegar/desde-el-centro',
      'como-llegar/desde-la-terminal',
      'como-llegar/estacionamiento',
      'guia/mapa-accesos-costanera',
    ],
  },
  {
    slug: 'como-llegar/estacionamiento',
    group: 'B',
    groupLabel: GROUP_LABELS.B,
    kicker: 'Estacionamiento',
    h1: 'Estacionamiento cerca de la Costanera',
    metaTitle: 'Dónde estacionar cerca de la Costanera de Corrientes',
    metaDescription:
      'Estacionamiento urbano cerca de la Costanera: sectores de detención, señalización, restricciones y cómo no bloquear veredas ni accesos.',
    lead: 'No hay un estacionamiento único "de la costanera". Lo habitual son sectores urbanos de detención en calles próximas; la clave es elegir el más cerca de tu acceso.',
    updated: VERIFIED,
    sections: [
      {
        heading: 'Estacionamiento urbano en calles próximas',
        paragraphs: [
          'Existen opciones de detención y estacionamiento urbano en las calles cercanas a la ribera, sujetas a señalización y regulación vigente. No las des por sentadas en temporada alta o eventos.',
        ],
      },
      {
        heading: 'Elegí según tu acceso',
        paragraphs: [
          'Mientras más cerca del acceso que vas a usar, mejor. Si vas al norte, buscá estacionamiento cercano a ese tramo; si vas al puerto o al sur, apuntá a esos sectores.',
        ],
        bullets: [
          'Observá señalización de horario y tipo de estacionamiento.',
          'No bloquees veredas, ciclovías ni ingresos.',
          'Considerá la sombra para el vehículo en días de mucho sol.',
        ],
      },
      {
        heading: 'Restricciones y eventos',
        paragraphs: [
          'Obras, eventos o dispositivos locales pueden modificar la disponibilidad. Si podés, confirmá el día y preferí llegar con tiempo.',
        ],
        callout:
          'Tip: fijá el punto de estacionamiento como parte del plan de regreso. Así evitás dar vueltas con el vehículo justo cuando querés irte.',
      },
    ],
    faqs: [
      {
        question: '¿Hay estacionamiento en la costanera?',
        answer:
          'Hay sectores de detención y estacionamiento urbano en calles próximas, sujetos a señalización. No hay un estacionamiento único dentro del paseo.',
      },
      {
        question: '¿Es de pago?',
        answer:
          'Depende de la regulación vigente en cada calle. Observá la señalización y confirmá en sitio.',
      },
      {
        question: '¿Dónde dejo el auto para el Norte?',
        answer:
          'Buscá estacionamiento cercano al acceso norte que elijas; cuanto más cerca, menos caminata de vuelta con sol.',
      },
      {
        question: '¿Puedo estacionar en la vereda?',
        answer:
          'No bloquees veredas, ciclovías ni ingresos. Respetá la señalización y los accesos de emergencia.',
      },
    ],
    related: [
      'como-llegar/desde-el-centro',
      'como-llegar/en-bicicleta',
      'guia/banos-accesibilidad',
      'como-llegar/desde-el-aeropuerto',
    ],
  },
  {
    slug: 'como-llegar/en-bicicleta',
    group: 'B',
    groupLabel: GROUP_LABELS.B,
    kicker: 'En bicicleta',
    h1: 'Llegar a la Costanera en bicicleta',
    metaTitle: 'Cómo llegar a la Costanera en bicicleta (Corrientes)',
    metaDescription:
      'Rutas en bici a la Costanera de Corrientes: ciclovías, dónde dejar la bici, precauciones y cómo compartir el espacio con peatones.',
    lead: 'La bici es una forma práctica de unir el centro con la ribera. La clave es descender por calles señalizadas y respetar el espacio peatonal del paseo.',
    updated: VERIFIED,
    sections: [
      {
        heading: 'Rutas y ciclovías',
        paragraphs: [
          'Podés llegar por las calles que descienden hacia el río. Usá casco y cruzá únicamente por sectores señalizados; respetá las ciclovías donde existan.',
        ],
      },
      {
        heading: 'Dónde dejar la bicicleta',
        paragraphs: [
          'Busca sectores señalizados y no obstruyas el paso. Durante el recorrido, compartí el frente peatonal con quienes caminan: bajá la velocidad en zonas concurridas.',
        ],
        bullets: [
          'Andá más lento cerca de plazas, niños y cruces.',
          'No dejes la bici bloqueando accesos ni miradores.',
          'Llevá luz si vas a volver de noche.',
        ],
      },
      {
        heading: 'Sol y hidratación',
        paragraphs: [
          'El sol sobre el río es intenso. Hidratate y evitá las horas centrales; si podés, usá la sombra de la tarde para el tramo de mayor esfuerzo.',
        ],
        callout:
          'La bici y el paseo peatonal se comparten: tu prioridad es no poner en riesgo a peatones. Bajá la velocidad donde haya gente.',
      },
    ],
    faqs: [
      {
        question: '¿Se puede ir en bici a la costanera?',
        answer:
          'Sí, por calles que descienden al río y usando ciclovías donde existan. Usá casco y cruzá por sectores señalizados.',
      },
      {
        question: '¿Dónde dejo la bici?',
        answer:
          'En sectores señalizados, sin bloquear accesos ni miradores. No la dejes donde entorpezca el paso peatonal.',
      },
      {
        question: '¿Es seguro volver en bici de noche?',
        answer:
          'Llevá luz y preferí caminos iluminados y transitados. Si venís de lejos, considerá taxi o remis para el regreso.',
      },
      {
        question: '¿Puedo andar en bici dentro del paseo?',
        answer:
          'En el frente peatonal, priorizá a quienes caminan: bajá la velocidad y usá la bici solo donde esté permitido y sea seguro.',
      },
    ],
    related: [
      'como-llegar/desde-el-centro',
      'como-llegar/estacionamiento',
      'itinerarios/medio-dia',
      'guia/banos-accesibilidad',
    ],
  },

  // ===================== GROUP C: Lugares (12) =====================
  {
    slug: 'lugares/punta-tacuara',
    group: 'C',
    groupLabel: GROUP_LABELS.C,
    kicker: 'Punto ribereño',
    h1: 'Punta Tacuara en la Costanera de Corrientes',
    metaTitle: 'Punta Tacuara: qué es y cómo visitarla en la Costanera',
    metaDescription:
      'Punta Tacuara, punto ribereño de la Costanera de Corrientes: cómo llegar, su conexión con el Museo Amado Bonpland y qué ver en el entorno.',
    lead: 'Punta Tacuara es uno de los hitos que ayudan a ubicarte en la ribera y que conecta el paseo con el Museo de Ciencias Naturales Amado Bonpland.',
    updated: VERIFIED,
    sections: [
      {
        heading: 'Un hito para orientarte',
        paragraphs: [
          'Punta Tacuara es uno de los puntos reconocibles del frente ribereño de Corrientes. Funciona como referencia para quienes recorren la costanera y como punto de partida hacia otros atractivos del entorno.',
        ],
      },
      {
        heading: 'Conexión con el Museo Amado Bonpland',
        paragraphs: [
          'En sus cercanías se encuentra el Museo de Ciencias Naturales Dr. Amado Bonpland, lo que convierte a Punta Tacuara en un buen nodo para combinar paseo al aire libre y una visita cultural o familiar.',
        ],
      },
      {
        heading: 'Cómo visitarla',
        paragraphs: [
          'Podés integrarla a una caminata norte como punto intermedio. Verificá accesos y señalización el día de tu visita; el entorno puede cambiar por obras o eventos.',
        ],
        callout:
          'Sugerencia de recorrido: costanera norte → Punta Tacuara → Museo Amado Bonpland, con pausas a la sombra. Ideal para una mañana o tarde sin prisa.',
      },
    ],
    faqs: [
      {
        question: '¿Qué es Punta Tacuara?',
        answer:
          'Es un punto ribereño reconocible de la costanera de Corrientes, útil como referencia para orientarse durante el paseo.',
      },
      {
        question: '¿Está cerca del museo?',
        answer:
          'Sí, en sus cercanías está el Museo de Ciencias Naturales Dr. Amado Bonpland, por lo que se combina bien con una visita cultural.',
      },
      {
        question: '¿Cómo llegar?',
        answer:
          'Integrarla a una caminata por el frente norte. Confirmá accesos y señalización el día de tu visita.',
      },
      {
        question: '¿Es apta para niños?',
        answer:
          'El entorno al aire libre y la cercanía del museo la hacen apta para familias; planificá sombra, agua y descansos.',
      },
    ],
    related: [
      'lugares/museo-amado-bonpland',
      'lugares/punta-tacuru',
      'lugares/punta-naro-san-sebastian',
      'itinerarios/medio-dia',
    ],
  },
  {
    slug: 'lugares/punta-tacuru',
    group: 'C',
    groupLabel: GROUP_LABELS.C,
    kicker: 'Punto ribereño',
    h1: 'Punta Tacurú en la Costanera de Corrientes',
    metaTitle: 'Punta Tacurú: mirador y paseo en la Costanera',
    metaDescription:
      'Punta Tacurú en la Costanera de Corrientes: por qué es un buen punto panorámico, cómo recorrerla y su relación con el frente del Paraná.',
    lead: 'Punta Tacurú es otro de los puntos que dan variedad al frente de agua. Conócela como parada de una caminata atenta, no como una excursión cerrada.',
    updated: VERIFIED,
    sections: [
      {
        heading: 'Un punto más del frente de agua',
        paragraphs: [
          'Punta Tacurú forma parte de los puntos ribereños que dan al Paraná. Como Punta San Sebastián o Punta Tacuara, ayuda a leer las variaciones del río y del paseo.',
        ],
      },
      {
        heading: 'Cómo recorrerla',
        paragraphs: [
          'Incluila como parada de una caminata por el norte, con pausas y sin prisa. La luz baja suele realzar el río en estos puntos.',
        ],
        bullets: [
          'Usala como hito de orientación y de regreso.',
          'Respetá la señalización y los accesos de emergencia.',
          'Evitá el borde sin baranda ni indicación durante crecidas.',
        ],
      },
      {
        heading: 'Qué llevar',
        paragraphs: [
          'Agua, protección solar y, si vas al atardecer, una prenda liviana por el viento sobre el río.',
        ],
        callout:
          'Estos puntos son espacios públicos abiertos; no tienen "horario de apertura" y su acceso depende de la señalización local.',
      },
    ],
    faqs: [
      {
        question: '¿Qué es Punta Tacurú?',
        answer:
          'Es uno de los puntos ribereños del frente de la costanera, útil como parada panorámica y de orientación durante el paseo.',
      },
      {
        question: '¿Se ve el Puente General Belgrano?',
        answer:
          'Desde varios puntos del frente norte se distinguen vistas al puente; la línea exacta depende del sector y de la vegetación.',
      },
      {
        question: '¿Tiene servicios?',
        answer:
          'Los servicios no están garantizados en todos los sectores; confirmalos en sitio y ubicá un punto de apoyo cercano.',
      },
      {
        question: '¿Cuándo ir?',
        answer:
          'El atardecer es popular, pero una caminata matinal también da buena luz y menos gente.',
      },
    ],
    related: [
      'lugares/punta-tacuara',
      'lugares/punta-naro-san-sebastian',
      'lugares/puente-general-belgrano',
      'guia/donde-ver-atardecer',
    ],
  },
  {
    slug: 'lugares/punta-naro-san-sebastian',
    group: 'C',
    groupLabel: GROUP_LABELS.C,
    kicker: 'Punto ribereño',
    h1: 'Punta San Sebastián (Ñaro) en la Costanera',
    metaTitle: 'Punta San Sebastián: historia y vista en la Costanera',
    metaDescription:
      'Punta San Sebastián (Ñaro) en la Costanera de Corrientes: contexto histórico, vista al puerto y cómo sumarla a tu recorrido ribereño.',
    lead: 'Punta San Sebastián es uno de los nombres que aparecen en el frente de la costanera y que conectan el paseo con la historia portuaria de la ciudad.',
    updated: VERIFIED,
    sections: [
      {
        heading: 'Historia y puerto',
        paragraphs: [
          'Punta San Sebastián se inscribe en el entorno histórico de la ribera de Corrientes y su relación con el puerto y el río. Es un hito para entender cómo la ciudad miró hacia el Paraná.',
        ],
      },
      {
        heading: 'Vista y recorrido',
        paragraphs: [
          'Podés incluida como parada de una caminata por el norte, aprovechando las vistas al río y la cercanía con el Paseo del Puerto.',
        ],
        bullets: [
          'Combiná con el Paseo del Puerto para una vuelta histórica + ribera.',
          'Usala como referencia de regreso hacia el centro.',
          'Verificá accesos y señalización el día de tu visita.',
        ],
      },
      {
        heading: 'Contexto',
        paragraphs: [
          'El material de turismo de la ciudad menciona estos puntos como parte del recorrido ribereño. Consultá fuentes públicas para detalles históricos específicos.',
        ],
        callout:
          'No confundas "Punta San Sebastián" con otros puntos ribereños: cada uno tiene su ubicación; fijate en los hitos para no desorientarte.',
      },
    ],
    faqs: [
      {
        question: '¿Qué es Punta San Sebastián?',
        answer:
          'Es un punto histórico del frente ribereño de Corrientes, ligado al puerto y al río Paraná.',
      },
      {
        question: '¿Está cerca del puerto?',
        answer:
          'Sí, se relaciona con el entorno del Paseo del Puerto; conviene visitarlos en la misma vuelta.',
      },
      {
        question: '¿Tiene valor histórico?',
        answer:
          'Forma parte del relato ribereño de la ciudad. Para fechas y datos puntuales, consultá fuentes públicas de la municipalidad.',
      },
      {
        question: '¿Cómo llegar?',
        answer:
          'Integrarla a una caminata por el norte y verificá accesos el día de tu visita.',
      },
    ],
    related: [
      'lugares/paseo-del-puerto',
      'lugares/punta-tacuara',
      'lugares/punta-tacuru',
      'guia/historia-costanera',
    ],
  },
  {
    slug: 'lugares/parque-camba-cua',
    group: 'C',
    groupLabel: GROUP_LABELS.C,
    kicker: 'Espacio verde',
    h1: 'Parque Cambá Cuá en la Costanera de Corrientes',
    metaTitle: 'Parque Cambá Cuá: murales y paseo familiar en la Costanera',
    metaDescription:
      'Parque Cambá Cuá junto a la Costanera: murales, mitología local, juegos infantiles y cómo sumarlo a tu recorrido ribereño.',
    lead: 'El Parque Cambá Cuá es el pulmón verde contiguo a la costanera: ideal para una pausa arbolada, para niños y para descubrir arte público.',
    updated: VERIFIED,
    sections: [
      {
        heading: 'Murales y cultura local',
        paragraphs: [
          'El parque se destaca por sus murales y su referencia a la mitología y la cultura local. Es un buen ejemplo de cómo la ribera se conecta con la identidad de Corrientes.',
        ],
      },
      {
        heading: 'Instalaciones para familias',
        paragraphs: [
          'Cuenta con espacios aptos para niños, lo que lo hace adecuado para una parada en recorridos con familia. Respetá el mobiliario, las áreas de juego y el descanso de otras personas.',
        ],
      },
      {
        heading: 'Cómo sumarlo al paseo',
        paragraphs: [
          'Unelo al recorrido norte como transición entre la costanera y el tejido de la ciudad. Es una pausa fresca antes de continuar o de volver.',
        ],
        bullets: [
          'Pausa a la sombra entre tramos de sol.',
          'Buscá los murales como punto de interés cultural.',
          'Planificá descansos y agua si venís con niños.',
        ],
        callout:
          'El parque es espacio público; no tiene entrada general. La disponibilidad de servicios puede variar, confirmalos en sitio.',
      },
    ],
    faqs: [
      {
        question: '¿Qué es el Parque Cambá Cuá?',
        answer:
          'Es un espacio verde junto a la costanera, conocido por sus murales, referencias a la cultura local y áreas para niños.',
      },
      {
        question: '¿Es bueno para ir con niños?',
        answer:
          'Sí, tiene espacios aptos para familias. Planificá sombra, agua y descansos durante la visita.',
      },
      {
        question: '¿Tiene entrada?',
        answer:
          'Es espacio público, sin entrada general. Servicios y horarios pueden variar; confirmalos en el lugar.',
      },
      {
        question: '¿Cómo llegar desde la costanera?',
        answer:
          'Se integra al recorrido norte como una pausa verde contigua; verificá accesos el día de tu visita.',
      },
    ],
    related: [
      'itinerarios/murales-y-costanera',
      'itinerarios/dos-horas-con-ninos',
      'comer/con-ninos',
      'lugares/paseo-pedro-ferre',
    ],
  },
  {
    slug: 'lugares/museo-amado-bonpland',
    group: 'C',
    groupLabel: GROUP_LABELS.C,
    kicker: 'Cultura y ciencia',
    h1: 'Museo de Ciencias Naturales Amado Bonpland',
    metaTitle: 'Museo Amado Bonpland: visita y datos en la Costanera',
    metaDescription:
      'El Museo de Ciencias Naturales Dr. Amado Bonpland cerca de Punta Tacuara: de qué trata, para quién conviene y cómo combinarlo con la costanera.',
    lead: 'El museo es el complemento cultural del paseo ribereño: ciencia natural y un buen plan para lluvia o para las familias que quieren alternar aire libre y sala.',
    updated: VERIFIED,
    sections: [
      {
        heading: 'De qué trata',
        paragraphs: [
          'El Museo de Ciencias Naturales Dr. Amado Bonpland reúne contenido sobre ciencias naturales en un edificio próximo a Punta Tacuara. Es una parada natural del recorrido ribereño.',
        ],
      },
      {
        heading: 'Para quién conviene',
        paragraphs: [
          'Es adecuado para visitas familiares, escolares o cualquier persona interesada en la naturaleza de la región. Combina bien con la caminata al aire libre.',
        ],
        bullets: [
          'Plan de lluvia: interior + costanera cuando mejora el clima.',
          'Plan familiar: museo + pausa verde en el parque contiguo.',
          'Plan educativo: naturaleza del Litoral y del Paraná.',
        ],
      },
      {
        heading: 'Antes de ir',
        paragraphs: [
          'Los horarios y la propuesta de salas pueden cambiar. Verificalos con la institución o con fuentes turísticas de la ciudad antes de tu visita.',
        ],
        callout:
          'Sugerencia: visita el museo en las horas centrales de calor o en día lluvioso, y dejá el paseo al aire libre para la tarde suave.',
      },
    ],
    faqs: [
      {
        question: '¿De qué trata el Museo Amado Bonpland?',
        answer:
          'Es un museo de ciencias naturales próximo a Punta Tacuara, con contenido sobre la naturaleza de la región.',
      },
      {
        question: '¿Conviene con niños?',
        answer:
          'Sí, es apto para familias y escolares. Combiná la visita con una pausa al aire libre cerca.',
      },
      {
        question: '¿Cuál es el horario?',
        answer:
          'Puede variar; verificalo con la institución o con fuentes turísticas de la ciudad antes de ir.',
      },
      {
        question: '¿Está sobre la costanera?',
        answer:
          'Está en el entorno ribereño, próximo a Punta Tacuara, por lo que se integra al recorrido.',
      },
    ],
    related: [
      'lugares/punta-tacuara',
      'itinerarios/dia-de-lluvia',
      'itinerarios/dos-horas-con-ninos',
      'lugares/parque-camba-cua',
    ],
  },
  {
    slug: 'lugares/playa-islas-malvinas',
    group: 'C',
    groupLabel: GROUP_LABELS.C,
    kicker: 'Playas del Paraná',
    h1: 'Playa Islas Malvinas en la Costanera de Corrientes',
    metaTitle: 'Playa Islas Malvinas: I y II en la Costanera de Corrientes',
    metaDescription:
      'Las playas Islas Malvinas (I y II) en la costanera: diferencias entre sectores, habilitación estacional y qué verificar antes de ir.',
    lead: 'Las playas del sur de la costanera se organizan en sectores (I y II). La clave es la habilitación estacional y las indicaciones del día, no asumir que siempre están abiertas.',
    updated: VERIFIED,
    sections: [
      {
        heading: 'Dos sectores: Islas Malvinas I y II',
        paragraphs: [
          'El frente sur agrupa playas como Islas Malvinas en sectores distinguidos (I y II). Cada uno puede tener su propia disposición y servicios según la temporada.',
        ],
      },
      {
        heading: 'Habilitación y seguridad',
        paragraphs: [
          'La habilitación de playas depende de la temporada y de la autoridad local. Antes de entrar al agua, revisá el estado, el boyado, la señalización y las indicaciones de cada playa en el día.',
        ],
        bullets: [
          'No nades en sectores no habilitados ni sin supervisión.',
          'No bebas el agua del río.',
          'Seguí las indicaciones municipales ante crecidas o tormentas.',
        ],
      },
      {
        heading: 'Planificá el acceso',
        paragraphs: [
          'Elegí el sector y confirmá el acceso señalizado. La disponibilidad de servicios (baños, bares) cambia por playa y temporada; no los des por sentados.',
        ],
        callout:
          'El río es un sistema vivo: su nivel y corriente cambian. La playa es un espacio público, pero tu seguridad depende de la habilitación y las indicaciones del día.',
      },
    ],
    faqs: [
      {
        question: '¿Qué son las playas Islas Malvinas?',
        answer:
          'Son sectores de playa del frente sur de la costanera de Corrientes, distinguidos como I y II.',
      },
      {
        question: '¿Están siempre habilitadas?',
        answer:
          'No. Su habilitación depende de la temporada y de la municipalidad. Consultala el día de tu visita.',
      },
      {
        question: '¿Se puede bañar?',
        answer:
          'Solo en playas habilitadas y según indicaciones. Revisá estado, boyado y señalización antes de entrar.',
      },
      {
        question: '¿Tienen servicios?',
        answer:
          'La disponibilidad de baños y bares cambia por sector y temporada; confirmalos en sitio.',
      },
    ],
    related: [
      'lugares/playa-arazaty',
      'guia/horarios-y-entrada',
      'guia/clima-crecidas-y-seguridad',
      'comer/costanera-sur-playa-arazaty',
    ],
  },
  {
    slug: 'lugares/playa-arazaty',
    group: 'C',
    groupLabel: GROUP_LABELS.C,
    kicker: 'Playas del Paraná',
    h1: 'Playa Arazaty en la Costanera de Corrientes',
    metaTitle: 'Playa Arazaty: I y II en la Costanera de Corrientes',
    metaDescription:
      'Playa Arazaty (I y II) en la costanera sur: uso estacional, diferencias de sectores, habilitación y cómo combinarla con el paseo.',
    lead: 'Arazaty es una de las playas más nombradas del sur de la costanera. Como las demás, su uso depende de la habilitación estacional y de las indicaciones del día.',
    updated: VERIFIED,
    sections: [
      {
        heading: 'Arazaty I y II',
        paragraphs: [
          'La playa Arazaty se presenta en sectores (I y II) dentro del frente sur de la costanera. La disposición y los servicios pueden variar entre ambos.',
        ],
      },
      {
        heading: 'Uso estacional y habilitación',
        paragraphs: [
          'Su habilitación depende de la temporada y de la autoridad local. Antes de cualquier actividad en el agua, revisá el estado, el boyado, la señalización y las indicaciones de cada sector.',
        ],
        bullets: [
          'Confirmá la habilitación el día de tu visita.',
          'Respetá las indicaciones municipales ante crecidas.',
          'No bebas el agua del río ni nades sin supervisión.',
        ],
      },
      {
        heading: 'Cómo sumarla al recorrido',
        paragraphs: [
          'Si buscás playa, el sur es tu zona; si buscás paseo continuo y miradores, el norte es más directo. Elegí según lo que querés hacer ese día.',
        ],
        callout:
          'No asumas que norte y sur son un solo paseo continuo. Arazaty queda en el sur; planificá el acceso y el regreso desde ahí.',
      },
    ],
    faqs: [
      {
        question: '¿Qué es Playa Arazaty?',
        answer:
          'Es una playa del frente sur de la costanera de Corrientes, organizada en sectores I y II.',
      },
      {
        question: '¿Está habilitada todo el año?',
        answer:
          'No; depende de la temporada y de la municipalidad. Verificala el día de tu visita.',
      },
      {
        question: '¿Dónde queda respecto del norte?',
        answer:
          'Queda en el sur, en un sector distinto al tramo General San Martín. Planificá el acceso en consecuencia.',
      },
      {
        question: '¿Puedo ir con niños?',
        answer:
          'Sí, pero solo en playas habilitadas y con supervisión. Revisá señalización e indicaciones del día.',
      },
    ],
    related: [
      'lugares/playa-islas-malvinas',
      'guia/costanera-norte-vs-sur',
      'comer/costanera-sur-playa-arazaty',
      'alojamiento/cerca-playa-arazaty',
    ],
  },
  {
    slug: 'lugares/puente-general-belgrano',
    group: 'C',
    groupLabel: GROUP_LABELS.C,
    kicker: 'Infraestructura emblemática',
    h1: 'Puente General Belgrano y la Costanera',
    metaTitle: 'Puente General Belgrano: fotos y miradores desde la Costanera',
    metaDescription:
      'El Puente General Belgrano visto desde la Costanera: por qué es ícono del paisaje, dónde fotografiarlo y su relación con el río Paraná.',
    lead: 'El Puente General Belgrano cruza el Paraná y es parte inseparable de las panorámicas de la costanera. Verlo de cerca es casi inevitable durante el paseo.',
    updated: VERIFIED,
    sections: [
      {
        heading: 'Un ícono del paisaje ribereño',
        paragraphs: [
          'El Puente General Belgrano cruza el río Paraná y conecta Corrientes con la provincia del Chaco. Su silueta es una de las imágenes más reconocibles desde la ribera.',
        ],
      },
      {
        heading: 'Dónde fotografiarlo',
        paragraphs: [
          'Los miradores del norte ofrecen buenos encuadres, sobre todo al atardecer, cuando la luz baja recorta la estructura sobre el agua.',
        ],
        bullets: [
          'Llegá 30–45 min antes del atardecer para ubicarte.',
          'Buscá sectores con vista despejada al oeste.',
          'Respetá la señalización y los accesos de emergencia al fotografiar.',
        ],
      },
      {
        heading: 'Contexto',
        paragraphs: [
          'Para datos precisos de la obra (inicio, inauguración, dimensiones), consultá fuentes públicas; esta guía se centra en su valor paisajístico y en cómo disfrutarlo desde el paseo.',
        ],
        callout:
          'El puente es infraestructura en uso: no intentes acceder a partes no habilitadas para peatones. Disfrutalo desde los miradores.',
      },
    ],
    faqs: [
      {
        question: '¿Qué puente se ve desde la costanera?',
        answer:
          'Se distinguen las vistas al Puente General Belgrano, que cruza el Paraná hacia la provincia del Chaco.',
      },
      {
        question: '¿Dónde sacar la mejor foto?',
        answer:
          'Los miradores del norte al atardecer dan buenos encuadres. Llegá temprano para elegir lugar.',
      },
      {
        question: '¿Se puede cruzar a pie?',
        answer:
          'Es una infraestructura en uso para vehículos; disfrutala desde los miradores y respetá las zonas habilitadas.',
      },
      {
        question: '¿Conecta con Resistencia?',
        answer:
          'Sí, une Corrientes con la provincia del Chaco, cruzando el Paraná.',
      },
    ],
    related: [
      'guia/donde-ver-atardecer',
      'itinerarios/fotos-al-atardecer',
      'itinerarios/desde-resistencia',
      'lugares/punta-tacuru',
    ],
  },
  {
    slug: 'lugares/paseo-del-puerto',
    group: 'C',
    groupLabel: GROUP_LABELS.C,
    kicker: 'Puerto y ribera',
    h1: 'Paseo del Puerto en la Costanera de Corrientes',
    metaTitle: 'Paseo del Puerto: qué ver junto a la Costanera',
    metaDescription:
      'El Paseo del Puerto de Corrientes: cómo conecta con la costanera, qué ver (río, historia, gastronomía) y cómo sumarlo al recorrido.',
    lead: 'El Paseo del Puerto es el nexo entre el río, la historia portuaria y la oferta de comida del entorno. Se combina naturalmente con la caminata ribereña.',
    updated: VERIFIED,
    sections: [
      {
        heading: 'Río, historia y ciudad',
        paragraphs: [
          'El Paseo del Puerto articula el frente de agua con la historia de la ciudad y su actividad portuaria. Es un buen punto para leer cómo Corrientes mira al Paraná.',
        ],
      },
      {
        heading: 'Gastronomía y pausa',
        paragraphs: [
          'El entorno reúne opciones para comer y descansar, lo que lo hace adecuado para cerrar o interrumpir una caminata por la costanera.',
        ],
        bullets: [
          'Combiná puerto + costanera en una misma vuelta.',
          'Usalo como punto de regreso hacia el centro.',
          'Verificá servicios y horarios en sitio.',
        ],
      },
      {
        heading: 'Cómo visitarlo',
        paragraphs: [
          'Podés recorrerlo a pie desde la costanera norte. La disponibilidad de locales cambia; no los des por sentados y confirmá antes de ir.',
        ],
        callout:
          'Sugerencia: hacele una vuelta al atardecer, cuando el río y el puerto se ven con mejor luz, y dejá la cena o la merienda para el entorno.',
      },
    ],
    faqs: [
      {
        question: '¿Qué es el Paseo del Puerto?',
        answer:
          'Es un espacio del entorno ribereño que conecta el río con la historia portuaria y la oferta de la ciudad.',
      },
      {
        question: '¿Se puede comer ahí?',
        answer:
          'El entorno tiene opciones gastronómicas; la disponibilidad cambia, así que confirmá antes de ir.',
      },
      {
        question: '¿Cómo lo sumo a la costanera?',
        answer:
          'Hacelo a pie desde el norte y usalo como punto de regreso o de pausa para comer.',
      },
      {
        question: '¿Tiene valor histórico?',
        answer:
          'Sí, está ligado a la historia portuaria de Corrientes. Para detalles, consultá fuentes públicas.',
      },
    ],
    related: [
      'comer/puerto-corrientes',
      'lugares/punta-naro-san-sebastian',
      'lugares/parque-mitre-punta-araza',
      'itinerarios/un-dia-en-corrientes',
    ],
  },
  {
    slug: 'lugares/parque-mitre-punta-araza',
    group: 'C',
    groupLabel: GROUP_LABELS.C,
    kicker: 'Historia y espacio verde',
    h1: 'Parque Mitre y Punta Arazá en la Costanera',
    metaTitle: 'Parque Mitre y Punta Arazá: historia y paseo',
    metaDescription:
      'Parque Mitre y Punta Arazá en Corrientes: monumentos, murales y cómo visitarlos como parte del recorrido ribereño.',
    lead: 'Parque Mitre y Punta Arazá suman historia y espacio verde al recorrido: monumentos, arte público y una franja más tranquila de la ribera.',
    updated: VERIFIED,
    sections: [
      {
        heading: 'Monumentos y memoria',
        paragraphs: [
          'El Parque Mitre reúne elementos patrimoniales y de memoria, lo que lo hace interesante para quienes quieren más que una caminata de río.',
        ],
      },
      {
        heading: 'Arte público y pausa',
        paragraphs: [
          'Como otros espacios del entorno, puede incluir murales y áreas de descanso. Respetá el mobiliario y el descanso de otras personas.',
        ],
        bullets: [
          'Combiná con Punta Arazá para una vuelta histórica + ribera.',
          'Usalo como punto de orientación y regreso.',
          'Verificá accesos y señalización el día de tu visita.',
        ],
      },
      {
        heading: 'Cómo visitarlo',
        paragraphs: [
          'Integra estos espacios a una caminata más amplia por la costanera y el centro. La disponibilidad de servicios cambia; confirmala en sitio.',
        ],
        callout:
          'Estos son espacios públicos abiertos; no tienen entrada general. Para datos históricos específicos, consultá fuentes públicas.',
      },
    ],
    faqs: [
      {
        question: '¿Qué es el Parque Mitre?',
        answer:
          'Es un espacio verde de la ciudad con elementos patrimoniales y de memoria, integrable al recorrido ribereño.',
      },
      {
        question: '¿Está sobre la costanera?',
        answer:
          'Se relaciona con el entorno ribereño (Punta Arazá); verificá el acceso exacto el día de tu visita.',
      },
      {
        question: '¿Tiene murales?',
        answer:
          'El entorno puede incluir arte público; respetalo y no lo dañes durante la visita.',
      },
      {
        question: '¿Es gratis?',
        answer:
          'Es espacio público, sin entrada general. Servicios y horarios pueden variar.',
      },
    ],
    related: [
      'lugares/paseo-del-puerto',
      'lugares/paseo-pedro-ferre',
      'itinerarios/murales-y-costanera',
      'lugares/parque-camba-cua',
    ],
  },
  {
    slug: 'lugares/paseo-pedro-ferre',
    group: 'C',
    groupLabel: GROUP_LABELS.C,
    kicker: 'Historia local',
    h1: 'Paseo Pedro Ferré en la Costanera de Corrientes',
    metaTitle: 'Paseo Pedro Ferré: historia y estatuas en la ribera',
    metaDescription:
      'Paseo Pedro Ferré en Corrientes: historia local, estatuas y cómo sumarlo a un recorrido de ribera con contexto histórico.',
    lead: 'El Paseo Pedro Ferré aporta la capa histórica del recorrido: referencias a la historia de la provincia y elementos escultóricos en el espacio público.',
    updated: VERIFIED,
    sections: [
      {
        heading: 'Historia de la provincia en el espacio público',
        paragraphs: [
          'El Paseo Pedro Ferré evoca figuras y momentos de la historia de Corrientes, por lo que es una parada natural para quienes quieren contexto además de río.',
        ],
      },
      {
        heading: 'Cómo visitarlo',
        paragraphs: [
          'Podés incluirlo en una vuelta que combine ribera e historia. Verificá accesos y señalización el día de tu visita.',
        ],
        bullets: [
          'Combiná con otros espacios históricos del entorno.',
          'Usalo como hito de orientación.',
          'Respetá el mobiliario y las esculturas.',
        ],
      },
      {
        heading: 'Para profundizar',
        paragraphs: [
          'Para fechas y biografías precisas, consultá fuentes públicas de la ciudad. Esta guía resume el lugar con fines de orientación del visitante.',
        ],
        callout:
          'No todos los puntos ribereños están contiguos; fijate en los hitos para armar un recorrido lógico y con fácil regreso.',
      },
    ],
    faqs: [
      {
        question: '¿Qué es el Paseo Pedro Ferré?',
        answer:
          'Es un espacio público que evoca la historia de Corrientes, integrable al recorrido ribereño con contexto histórico.',
      },
      {
        question: '¿Tiene estatuas?',
        answer:
          'Forma parte de los espacios con elementos escultóricos e históricos de la ciudad; respetalos durante la visita.',
      },
      {
        question: '¿Cómo llegar?',
        answer:
          'Integrarlo a una caminata por la ribera y el centro; verificá accesos el día de tu visita.',
      },
      {
        question: '¿Es gratis?',
        answer:
          'Es espacio público, sin entrada general. Servicios pueden variar.',
      },
    ],
    related: [
      'lugares/parque-mitre-punta-araza',
      'lugares/paseo-del-puerto',
      'guia/historia-costanera',
      'itinerarios/murales-y-costanera',
    ],
  },
  {
    slug: 'lugares/anfiteatro-jose-hernandez',
    group: 'C',
    groupLabel: GROUP_LABELS.C,
    kicker: 'Cultura al aire libre',
    h1: 'Anfiteatro José Hernández en la Costanera',
    metaTitle: 'Anfiteatro José Hernández: eventos y cultura',
    metaDescription:
      'El Anfiteatro José Hernández en Corrientes: para qué sirve, qué tipo de actividades suele albergar y cómo verificar la programación.',
    lead: 'El anfiteatro es el espacio para la cultura al aire libre junto a la ribera. Su programación cambia, así que lo importante es saber cómo verificar qué hay en cartelera.',
    updated: VERIFIED,
    sections: [
      {
        heading: 'Un espacio para la cultura',
        paragraphs: [
          'El Anfiteatro José Hernández es un recinto al aire libre pensado para espectáculos y actividades culturales en el entorno de la costanera.',
        ],
      },
      {
        heading: 'Programación variable',
        paragraphs: [
          'Los eventos y fechas cambian según la temporada y la agenda local. No asumas una grilla fija; verificala con fuentes municipales o turísticas antes de tu visita.',
        ],
        bullets: [
          'Consultá la cartelera vigente antes de ir.',
          'Los eventos pueden modificar accesos y estacionamiento.',
          'Llegá con tiempo si el espectáculo es concurrido.',
        ],
      },
      {
        heading: 'Cómo aprovecharlo',
        paragraphs: [
          'Si coincides con un evento, combínalo con el paseo al atardecer. Si no, el recorrido por el entorno ya es un plan por sí mismo.',
        ],
        callout:
          'Consejo: la programación es dinámica. Esta guía no lista fechas porque cambian; confirmalas con la municipalidad o turismo de la ciudad.',
      },
    ],
    faqs: [
      {
        question: '¿Qué es el Anfiteatro José Hernández?',
        answer:
          'Es un espacio al aire libre para espectáculos y actividades culturales en el entorno de la costanera de Corrientes.',
      },
      {
        question: '¿Qué eventos tiene?',
        answer:
          'La programación cambia por temporada y agenda local. Verificala con fuentes municipales o turísticas antes de ir.',
      },
      {
        question: '¿Tiene entrada?',
        answer:
          'Depende del evento. Algunos son libres; otros pueden tener su propio sistema. Confirmalo según la función.',
      },
      {
        question: '¿Afecta el acceso a la costanera?',
        answer:
          'Los eventos pueden modificar accesos o estacionamiento en fechas puntuales; lllegá con tiempo si vas a un show.',
      },
    ],
    related: [
      'itinerarios/un-dia-en-corrientes',
      'lugares/paseo-del-puerto',
      'comer/cenar-con-vista-al-rio',
      'guia/horarios-y-entrada',
    ],
  },

  // ===================== GROUP D: Comer cerca (7) =====================
  {
    slug: 'comer/restaurantes-costanera-norte',
    group: 'D',
    groupLabel: GROUP_LABELS.D,
    kicker: 'Gastronomía norte',
    h1: 'Dónde comer en la Costanera Norte',
    metaTitle: 'Restaurantes de la Costanera Norte: guía para elegir',
    metaDescription:
      'Cómo elegir dónde comer en la Costanera Norte: tipos de cocina, desde qué acceso ir, y por qué verificar locales y horarios antes de ir.',
    lead: 'El norte reúne varias opciones para sentarse a comer con el río de fondo. La clave es elegir según el acceso, la hora y el tipo de comida, y confirmar antes de ir.',
    updated: VERIFIED,
    sections: [
      {
        heading: 'Tipos de opciones en el norte',
        paragraphs: [
          'En el entorno del frente norte podés encontrar desde comida más formal hasta propuestas de pescado de río y parrilla. La oferta cambia, así que no la des por sentada.',
        ],
        bullets: [
          'Cocina con pescado de río (surubí y otras especies del Paraná).',
          'Parrilla y carnes, comunes en la región.',
          'Locales con terraza o vista al río, según temporada.',
        ],
      },
      {
        heading: 'Desde qué acceso ir',
        paragraphs: [
          'Elegí el acceso norte más cercano a tu punto de partida. Si venís en auto, coordiná el estacionamiento; si a pie, integrado a la caminata.',
        ],
      },
      {
        heading: 'Verificá antes de ir',
        paragraphs: [
          'Los locales mencionados en guías de la ciudad (como El Mirador del Paraná o La Costiera Cucina) son candidatos a investigar, no recomendaciones verificadas in situ. Confirmá dirección, horario y estado actual antes de salir.',
        ],
        callout:
          'Esta guía es independiente y no promociona comercios concretos. Elegí según horario, accesibilidad y tus preferencias; confirmá cada local con fuentes actualizadas.',
      },
    ],
    faqs: [
      {
        question: '¿Hay restaurantes en la Costanera Norte?',
        answer:
          'El entorno del norte reúne opciones de comida, pero la oferta cambia. Confirmá locales y horarios antes de ir.',
      },
      {
        question: '¿Se come pescado de río?',
        answer:
          'Sí, el pescado del Paraná (como el surubí) es típico de la región. Verificá qué locales lo preparan y sus horarios.',
      },
      {
        question: '¿Conviene reservar?',
        answer:
          'Depende del local y la temporada. Para cenas o fines de semana, confirmá disponibilidad directamente.',
      },
      {
        question: '¿Desde qué acceso voy?',
        answer:
          'Elegí el acceso norte más cercano a tu base y coordiná estacionamiento o caminata según vengas.',
      },
    ],
    related: [
      'comer/pescado-de-rio',
      'comer/cenar-con-vista-al-rio',
      'comer/costanera-sur-playa-arazaty',
      'comer/con-ninos',
    ],
  },
  {
    slug: 'comer/cafes-y-meriendas',
    group: 'D',
    groupLabel: GROUP_LABELS.D,
    kicker: 'Café y merienda',
    h1: 'Cafés y meriendas cerca de la Costanera',
    metaTitle: 'Cafés y meriendas cerca de la Costanera de Corrientes',
    metaDescription:
      'Dónde hacer una pausa con café o merienda cerca de la costanera: antes o después del paseo, con niños o en la tarde suave.',
    lead: 'Una pausa con café o merienda es el contrapunto ideal del paseo. El entorno urbano cercano tiene opciones para eso antes o después de la ribera.',
    updated: VERIFIED,
    sections: [
      {
        heading: 'Cuándo hacer la pausa',
        paragraphs: [
          'Podés hacerla antes de caminar (energía) o después (descanso), o bien a la tarde, cuando la luz es más suave. La elección depende de tu ritmo.',
        ],
      },
      {
        heading: 'Qué tipo de lugar buscar',
        paragraphs: [
          'Cafeterías y confiterías son comunes en el entorno de la ciudad. Algunos nombres que suelen aparecer en guías locales (como Café Amado o La Panera Rosa) son candidatos a investigar, no recomendaciones verificadas.',
        ],
        bullets: [
          'Buscá cercanía a tu acceso de la costanera.',
          'Considerá opciones con meridiana o sombra.',
          'Confirmá horario y disponibilidad el día de tu visita.',
        ],
      },
      {
        heading: 'Con niños',
        paragraphs: [
          'Una merienda es una buena pausa familiar; elegí lugares con espacio y cercanía para no alargar el traslado.',
        ],
        callout:
          'Esta guía no promociona comercios concretos. Elegí según accesibilidad y horario, y confirmá cada local con fuentes actualizadas.',
      },
    ],
    faqs: [
      {
        question: '¿Hay cafés cerca de la costanera?',
        answer:
          'El entorno urbano cercano tiene cafeterías y confiterías. La oferta cambia; confirmala antes de ir.',
      },
      {
        question: '¿Dónde hacer la merienda?',
        answer:
          'Buscá opciones cercanas a tu acceso de la costanera para no alargar el traslado, sobre todo con niños.',
      },
      {
        question: '¿Se puede antes del paseo?',
        answer:
          'Sí, una pausa previa da energía; otra posterior sirve de descanso. Elegí según tu ritmo.',
      },
      {
        question: '¿Café Amado está verificado?',
        answer:
          'Aparece en guías locales como candidato, pero no verificamos su estado actual. Confirmá dirección y horario antes de ir.',
      },
    ],
    related: [
      'comer/con-ninos',
      'comer/restaurantes-costanera-norte',
      'lugares/parque-camba-cua',
      'itinerarios/dos-horas-con-ninos',
    ],
  },
  {
    slug: 'comer/pescado-de-rio',
    group: 'D',
    groupLabel: GROUP_LABELS.D,
    kicker: 'Especialidad local',
    h1: 'Pescado de río en Corrientes: qué probar',
    metaTitle: 'Pescado de río en Corrientes: surubí y dónde probarlo',
    metaDescription:
      'El pescado de río del Paraná en Corrientes: surubí y otras especies, cómo se prepara y cómo encontrar locales que lo sirven cerca de la costanera.',
    lead: 'El río es también mesa: el pescado del Paraná es parte de la identidad gastronómica de Corrientes. Aquí vas a saber qué buscar y cómo elegir.',
    updated: VERIFIED,
    sections: [
      {
        heading: 'El surubí y otras especies',
        paragraphs: [
          'El surubí es uno de los pescados más representativos del Paraná y suele aparecer en propuestas locales. Otras especies de agua dulce también forman parte de la cocina regional.',
        ],
      },
      {
        heading: 'Cómo se prepara',
        paragraphs: [
          'La preparación varía: al horno, en guiso o frito, según el local. No hay una sola "receta oficial"; depende de la cocina de cada lugar.',
        ],
        bullets: [
          'Consultá el plato del día o la sugerencia de pescado.',
          'Preguntá el origen y la preparación si te interesa.',
          'Confirmá precios y disponibilidad antes de pedir.',
        ],
      },
      {
        heading: 'Dónde probarlo',
        paragraphs: [
          'Locales del entorno ribereño y del centro suelen incluir pescado de río. Los nombres que aparecen en guías (como Las Brasas) son candidatos a investigar, no recomendaciones verificadas in situ.',
        ],
        callout:
          'Esta guía es independiente: no promociona comercios. Elegí según accesibilidad y horario, y confirmá cada local con fuentes actualizadas.',
      },
    ],
    faqs: [
      {
        question: '¿Qué pescado es típico de Corrientes?',
        answer:
          'El surubí del Paraná es uno de los más representativos, junto a otras especies de agua dulce de la región.',
      },
      {
        question: '¿Cómo se come el surubí?',
        answer:
          'Varía según el local: al horno, en guiso o frito. No hay una única preparación; preguntá la sugerencia del día.',
      },
      {
        question: '¿Dónde lo sirven cerca de la costanera?',
        answer:
          'Varios locales del entorno lo incluyen. Confirmá qué lugares lo tienen y sus horarios antes de ir.',
      },
      {
        question: '¿Es caro?',
        answer:
          'Depende del local y la preparación. Confirmá precios antes de pedir; esta guía no fija valores.',
      },
    ],
    related: [
      'comer/restaurantes-costanera-norte',
      'comer/puerto-corrientes',
      'comer/cenar-con-vista-al-rio',
      'lugares/playa-arazaty',
    ],
  },
  {
    slug: 'comer/puerto-corrientes',
    group: 'D',
    groupLabel: GROUP_LABELS.D,
    kicker: 'Gastronomía portuaria',
    h1: 'Comer en el Puerto de Corrientes',
    metaTitle: 'Dónde comer en el Puerto de Corrientes',
    metaDescription:
      'Gastronomía en el Paseo del Puerto de Corrientes: cómo combinar puerto, río y comida, y por qué verificar locales y horarios.',
    lead: 'El puerto suma río, historia y opciones para comer en una misma vuelta. Es un buen nodo para cerrar el paseo con una pausa gastronómica.',
    updated: VERIFIED,
    sections: [
      {
        heading: 'Puerto + comida',
        paragraphs: [
          'El entorno del Paseo del Puerto reúne opciones gastronómicas junto al agua. La oferta cambia, así que confirmá antes de ir.',
        ],
      },
      {
        heading: 'Cómo combinarlo',
        paragraphs: [
          'Podés recorrer la costanera y bajar al puerto para comer, o hacerlo al revés. Usalo como punto de regreso hacia el centro.',
        ],
        bullets: [
          'Verificá horarios y disponibilidad del local.',
          'Considerá una terraza o vista al río si la hay.',
          'Coordiná estacionamiento si venís en auto.',
        ],
      },
      {
        heading: 'Antes de decidir',
        paragraphs: [
          'Los locales que suelen citarse (como Terraza Gastronómica El Puerto) son candidatos a investigar, no recomendaciones verificadas. Confirmá dirección y horario.',
        ],
        callout:
          'Guía independiente: no promocionamos comercios. Elegí según accesibilidad y horario, y confirmá cada local con fuentes actualizadas.',
      },
    ],
    faqs: [
      {
        question: '¿Se puede comer en el puerto?',
        answer:
          'Sí, el entorno del Paseo del Puerto reúne opciones gastronómicas. Confirmá antes de ir, porque cambian.',
      },
      {
        question: '¿Combina con la costanera?',
        answer:
          'Sí: podés recorrer la ribera y bajar al puerto para comer, o usarlo como punto de regreso.',
      },
      {
        question: '¿Hay terraza con vista?',
        answer:
          'Depende del local y la temporada. Confirmá directamente con el lugar.',
      },
      {
        question: '¿Está verificado el local X?',
        answer:
          'Los nombres que mencionamos son candidatos de guías locales, no verificados in situ. Confirmalos antes de ir.',
      },
    ],
    related: [
      'lugares/paseo-del-puerto',
      'comer/restaurantes-costanera-norte',
      'comer/pescado-de-rio',
      'comer/cenar-con-vista-al-rio',
    ],
  },
  {
    slug: 'comer/costanera-sur-playa-arazaty',
    group: 'D',
    groupLabel: GROUP_LABELS.D,
    kicker: 'Gastronomía sur',
    h1: 'Dónde comer en la Costanera Sur y Playa Arazaty',
    metaTitle: 'Comer en la Costanera Sur y Playa Arazaty',
    metaDescription:
      'Opciones para comer cerca de la Costanera Sur y Playa Arazaty: temporada de playa, tipos de locales y verificación antes de ir.',
    lead: 'El sur, ligado a las playas, tiene un perfil gastronómico más estacional. Si vas a Arazaty, planeá la comida según la habilitación de la playa.',
    updated: VERIFIED,
    sections: [
      {
        heading: 'Perfil más estacional',
        paragraphs: [
          'Cerca de Playa Arazaty y el sur, la oferta gastronómica suele intensificarse en temporada de playa. Fuera de ella, puede ser más reducida.',
        ],
      },
      {
        heading: 'Qué buscar',
        paragraphs: [
          'Podés encontrar locales de comida rápida, parrilla o propuestas familiares según la zona. Confirmá qué hay abierto el día de tu visita.',
        ],
        bullets: [
          'Verificá horarios, que cambian con la temporada.',
          'Si vas a la playa, coordiná comida y habilitación juntas.',
          'Elegí opciones cercanas para no alargar traslados con sol.',
        ],
      },
      {
        heading: 'Antes de ir',
        paragraphs: [
          'No promocionamos comercios concretos. Elegí según accesibilidad y horario, y confirmá cada local con fuentes actualizadas.',
        ],
        callout:
          'Consejo: si la playa no está habilitada, la experiencia cambia; planificá comida y paseo en función de las indicaciones del día.',
      },
    ],
    faqs: [
      {
        question: '¿Hay donde comer en el sur?',
        answer:
          'Sí, sobre todo en temporada de playa. Fuera de ella la oferta puede ser menor; confirmala el día.',
      },
      {
        question: '¿Cerca de Playa Arazaty?',
        answer:
          'El entorno de Arazaty tiene opciones según la temporada. Verificá qué locales están abiertos.',
      },
      {
        question: '¿Conviene ir a comer fuera de temporada?',
        answer:
          'Depende de la oferta vigente. Confirmá antes para no encontrarte con locales cerrados.',
      },
      {
        question: '¿Promocionan algún local?',
        answer:
          'No. Esta guía es independiente y no recomienda comercios; elegí según accesibilidad y horario.',
      },
    ],
    related: [
      'lugares/playa-arazaty',
      'comer/restaurantes-costanera-norte',
      'comer/con-ninos',
      'alojamiento/cerca-playa-arazaty',
    ],
  },
  {
    slug: 'comer/cenar-con-vista-al-rio',
    group: 'D',
    groupLabel: GROUP_LABELS.D,
    kicker: 'Cena y atardecer',
    h1: 'Cenar con vista al río en la Costanera',
    metaTitle: 'Cenar con vista al río en la Costanera de Corrientes',
    metaDescription:
      'Cena con vista al Paraná en la Costanera: horario, reserva, luz del atardecer y cómo planificar el regreso nocturno.',
    lead: 'Cenar con el río de fondo es el cierre ideal del paseo. La clave está en el horario, la reserva y un regreso ya pensado.',
    updated: VERIFIED,
    sections: [
      {
        heading: 'El atardecer como apertura',
        paragraphs: [
          'Llegá con tiempo para ver la luz baja sobre el Paraná y el puente antes de sentarte. Eso hace la diferencia entre una cena cualquiera y una con el río presente.',
        ],
      },
      {
        heading: 'Reserva y horario',
        paragraphs: [
          'Para cenas o fines de semana, confirmá disponibilidad y horario del local. La oferta cambia y los horarios pueden correrse en temporada.',
        ],
        bullets: [
          'Reservá si el local lo permite.',
          'Confirmá el cierre y la cocina.',
          'Preguntá por terraza o vista al río.',
        ],
      },
      {
        heading: 'Regreso nocturno',
        paragraphs: [
          'Después de oscurecer, preferí sectores iluminados y transitados y coordiná el regreso en taxi, remis o vehículo propio si venís de lejos.',
        ],
        callout:
          'Esta guía no promociona comercios. Elegí según accesibilidad y horario, y confirmá cada local con fuentes actualizadas.',
      },
    ],
    faqs: [
      {
        question: '¿Se puede cenar con vista al río?',
        answer:
          'Sí, varios locales del entorno lo permiten según temporada y disposición. Llegá temprano para el atardecer.',
      },
      {
        question: '¿Conviene reservar?',
        answer:
          'Para cenas y fines de semana, sí. Confirmá disponibilidad directamente con el local.',
      },
      {
        question: '¿Cómo vuelvo de noche?',
        answer:
          'Preferí sectores iluminados y coordiná taxi, remis o auto. No dejes el regreso para el último minuto.',
      },
      {
        question: '¿Promocionan algún restaurante?',
        answer:
          'No. Esta guía es independiente y no recomienda comercios concretos.',
      },
    ],
    related: [
      'guia/donde-ver-atardecer',
      'comer/restaurantes-costanera-norte',
      'comer/puerto-corrientes',
      'lugares/anfiteatro-jose-hernandez',
    ],
  },
  {
    slug: 'comer/con-ninos',
    group: 'D',
    groupLabel: GROUP_LABELS.D,
    kicker: 'Familia',
    h1: 'Comer con niños cerca de la Costanera',
    metaTitle: 'Dónde comer con niños cerca de la Costanera',
    metaDescription:
      'Comer en familia cerca de la Costanera: cercanía, espacio, sombra, baños y cómo planificar pausas con niños.',
    lead: 'Con niños, la comida es también logística: cercanía, sombra, baños y una pausa sin apuros. Elegí en función de eso, no solo del plato.',
    updated: VERIFIED,
    sections: [
      {
        heading: 'Lo que importa con niños',
        paragraphs: [
          'Priorizá lugares cercanos a tu acceso de la costanera, con espacio y, si es posible, sombra o área para descansar. Una pausa corta vale más que un traslado largo.',
        ],
        bullets: [
          'Cercanía para no alargar el camino con sol.',
          'Baños y servicios confirmados en sitio.',
          'Opción de merienda además de comida principal.',
        ],
      },
      {
        heading: 'Integrar con el paseo',
        paragraphs: [
          'Podés combinar una vuelta por el Parque Cambá Cuá o una playa habilitada con una pausa para comer. La clave es no apurarse.',
        ],
      },
      {
        heading: 'Antes de elegir',
        paragraphs: [
          'No promocionamos comercios concretos. Elegí según accesibilidad y horario, y confirmá cada local con fuentes actualizadas.',
        ],
        callout:
          'Consejo: hacé la comida en la franja más fresca (mañana o tarde) y dejá el sol fuerte para estar bajo techo o sombra.',
      },
    ],
    faqs: [
      {
        question: '¿Dónde comer con niños?',
        answer:
          'Buscá opciones cercanas a tu acceso, con espacio y servicios. Confirmalos en sitio antes de sentarte.',
      },
      {
        question: '¿El parque es buen plan familiar?',
        answer:
          'Sí, el Parque Cambá Cuá tiene áreas para niños y se combina con la costanera.',
      },
      {
        question: '¿Con playa habilitada?',
        answer:
          'Si la playa está habilitada, podés combinarla con la comida. Revisá indicaciones del día.',
      },
      {
        question: '¿Recomiendan algún local?',
        answer:
          'No promocionamos comercios. Elegí según cercanía, horario y comodidad familiar.',
      },
    ],
    related: [
      'comer/cafes-y-meriendas',
      'lugares/parque-camba-cua',
      'itinerarios/dos-horas-con-ninos',
      'guia/banos-accesibilidad',
    ],
  },

  // ===================== GROUP E: Itinerarios (8) =====================
  {
    slug: 'itinerarios/paseo-de-una-hora',
    group: 'E',
    groupLabel: GROUP_LABELS.E,
    kicker: 'Itinerario corto',
    h1: 'Paseo de una hora por la Costanera',
    metaTitle: 'Paseo de 1 hora por la Costanera de Corrientes',
    metaDescription:
      'Una vuelta de 60 minutos por la Costanera Norte: punto de inicio, tramo corto, mirador y regreso sin prisa.',
    lead: 'Si tenés solo una hora, la mejor decisión es elegir un tramo corto y no intentar "hacer todo". Acá va un recorrido real de 60 minutos.',
    updated: VERIFIED,
    sections: [
      {
        heading: 'Empieza en un acceso claro',
        paragraphs: [
          'Elegí un acceso señalizado del norte y tomate unos minutos para orientarte: el viento, la luz y el río definen el ritmo.',
        ],
      },
      {
        heading: '60 minutos, sin apuro',
        paragraphs: [
          'Caminá un tramo corto a tu propio paso, detenete en un mirador y volvé por el mismo acceso. La calidad está en la pausa, no en la distancia.',
        ],
        bullets: [
          '0–10 min: orientación y primera vista al río.',
          '10–40 min: caminata corta con un mirador de parada.',
          '40–60 min: regreso tranquilo por el mismo acceso.',
        ],
      },
      {
        heading: 'Consejos',
        paragraphs: [
          'Llevá agua, usá protección solar y no te alejes tanto que el regreso se complica. Una hora bien usada vale más que un kilometers sin disfrutar.',
        ],
        callout:
          'Si el sol aprieta, hacelo en la franja más fresca. El atardecer es popular, pero una hora matinal también es válida.',
      },
    ],
    faqs: [
      {
        question: '¿Se puede en solo una hora?',
        answer:
          'Sí: elegí un tramo corto del norte, hacé una parada en un mirador y volvé por el mismo acceso. No intentes recorrer todo.',
      },
      {
        question: '¿Cuánto camino es?',
        answer:
          'Depende de tu punto, pero un tramo corto de ida y vuelta suele entrar en 60 min con pausa.',
      },
      {
        question: '¿Conviene ir al atardecer?',
        answer:
          'Sí, pero una hora matinal también da buena luz y menos gente.',
      },
      {
        question: '¿Llevo agua?',
        answer:
          'Recomendable, sobre todo con calor. Hidratate y usá protección solar.',
      },
    ],
    related: [
      'itinerarios/medio-dia',
      'guia/mapa-accesos-costanera',
      'guia/banos-accesibilidad',
      'itinerarios/dos-horas-con-ninos',
    ],
  },
  {
    slug: 'itinerarios/dos-horas-con-ninos',
    group: 'E',
    groupLabel: GROUP_LABELS.E,
    kicker: 'En familia',
    h1: 'Dos horas con niños por la Costanera',
    metaTitle: 'Itinerario de 2 horas con niños en la Costanera',
    metaDescription:
      'Vuelta familiar de 2 horas: tramo corto con sombra, Parque Cambá Cuá, pausa y regreso pensado para niños.',
    lead: 'Con niños, el tiempo se mide en pausas, no en kilómetros. Este recorrido reparte esfuerzo y descanso para que todos disfruten.',
    updated: VERIFIED,
    sections: [
      {
        heading: 'Tramo corto y sombra',
        paragraphs: [
          'Empezá cerca de un acceso con servicios y caminá tramos cortos con sombra. Los descansos en plazas y espacios verdes son parte del plan, no un contratiempo.',
        ],
      },
      {
        heading: 'Parque Cambá Cuá de por medio',
        paragraphs: [
          'Sumá una pausa en el parque, con sus áreas para niños y murales. Es el contrapunto verde ideal antes de volver.',
        ],
        bullets: [
          '0–30 min: llegada y caminata corta con sombra.',
          '30–75 min: pausa en el parque (juegos, murales).',
          '75–120 min: regreso tranquilo antes del mediodía.',
        ],
      },
      {
        heading: 'Prioridades',
        paragraphs: [
          'Descanso, hidratación y baños por delante. Evitá el calor intenso y no te alejes tanto que el regreso se complique.',
        ],
        callout:
          'Consejo: hacelo en la franja más fresca y dejá la comida para una pausa cercana (ver guía de comer con niños).',
      },
    ],
    faqs: [
      {
        question: '¿Es apto para niños?',
        answer:
          'Sí: tramos cortos, sombra y una pausa en el Parque Cambá Cuá lo hacen cómodo en familia.',
      },
      {
        question: '¿Cuánto tiempo necesito?',
        answer:
          'Unas 2 horas con pausas. No apures; la clave es el descanso y la hidratación.',
      },
      {
        question: '¿Hay donde ir al baño?',
        answer:
          'La disponibilidad cambia por sector; confirmala en sitio y ubicá un punto de apoyo cercano.',
      },
      {
        question: '¿Y si hace calor?',
        answer:
          'Preferí la mañana o la tarde suave, buscá sombra y llevá agua.',
      },
    ],
    related: [
      'comer/con-ninos',
      'lugares/parque-camba-cua',
      'itinerarios/paseo-de-una-hora',
      'guia/banos-accesibilidad',
    ],
  },
  {
    slug: 'itinerarios/medio-dia',
    group: 'E',
    groupLabel: GROUP_LABELS.E,
    kicker: 'Medio día',
    h1: 'Medio día en la Costanera de Corrientes',
    metaTitle: 'Itinerario de medio día en la Costanera de Corrientes',
    metaDescription:
      'Una vuelta de medio día: norte al fresco, miradores, pausa verde y regreso antes del calor intenso.',
    lead: 'Medio día te permite sumar el río, los miradores y un espacio verde sin correr. El orden importa: frescura primero, calor después.',
    updated: VERIFIED,
    sections: [
      {
        heading: 'Mañana: norte al fresco',
        paragraphs: [
          'Empezá en el norte durante la mañana, aprovechando la luz suave y las temperaturas más bajas para caminar cómodo.',
        ],
      },
      {
        heading: 'Recorré y pausá',
        paragraphs: [
          'Seguí el frente de agua hasta un mirador, detenete a observar el río y el puente, y cerrá con una pausa en un espacio verde.',
        ],
        bullets: [
          '0–90 min: caminata norte + mirador.',
          '90–150 min: pausa verde (Parque Cambá Cuá u otro).',
          'Cerrá antes del mediodía para evitar el calor fuerte.',
        ],
      },
      {
        heading: 'Cierre',
        paragraphs: [
          'Volvé a la sombra o a un entorno urbano para descansar y, si querés, comer cerca. No fuerces el horario central de sol.',
        ],
        callout:
          'Consejo: si tenés más tiempo, estirá a un día completo combinando puerto e interior (ver itinerario de día completo).',
      },
    ],
    faqs: [
      {
        question: '¿Cuánto se recorre en medio día?',
        answer:
          'Depende de tu ritmo, pero alcanza para el norte, un mirador y una pausa verde, sin apuros.',
      },
      {
        question: '¿Conviene ir por la mañana?',
        answer:
          'Sí, la frescura y la luz suave ayudan. Cerrá antes del mediodía si hace calor.',
      },
      {
        question: '¿Sumo el museo?',
        answer:
          'Podés sumar el Museo Amado Bonpland si está abierto; verificalo antes.',
      },
      {
        question: '¿Y si quiero más?',
        answer:
          'Estirá a un día completo con puerto e interior de la ciudad.',
      },
    ],
    related: [
      'itinerarios/un-dia-en-corrientes',
      'itinerarios/paseo-de-una-hora',
      'lugares/parque-camba-cua',
      'comer/restaurantes-costanera-norte',
    ],
  },
  {
    slug: 'itinerarios/un-dia-en-corrientes',
    group: 'E',
    groupLabel: GROUP_LABELS.E,
    kicker: 'Día completo',
    h1: 'Un día en Corrientes desde la Costanera',
    metaTitle: 'Itinerario de 1 día en Corrientes: Costanera + ciudad',
    metaDescription:
      'Día completo combinando la Costanera Norte, Parque Cambá Cuá, el Paseo del Puerto y el interior de la ciudad.',
    lead: 'Un día entero te permite no elegir: río por la mañana, cultura y puerto al mediodía, y ribera otra vez al atardecer.',
    updated: VERIFIED,
    sections: [
      {
        heading: 'Mañana: río y parque',
        paragraphs: [
          'Recorré el norte en la frescura y sumá el Parque Cambá Cuá. Es la parte más al aire libre y la que mejor se lleva con el clima suave.',
        ],
      },
      {
        heading: 'Mediodía: puerto e interior',
        paragraphs: [
          'Bajá al Paseo del Puerto o al centro para descansar y comer. Las calles cercanas ofrecen opciones para reponer energía.',
        ],
        bullets: [
          'Mañana: norte + Parque Cambá Cuá.',
          'Mediodía: puerto/centro, descanso y comida.',
          'Tarde: miradores y atardecer desde la costa.',
        ],
      },
      {
        heading: 'Tarde: atardecer',
        paragraphs: [
          'Volvé a la ribera para el atardecer, cuando la luz baja abre el Paraná y resalta el puente. Cerra con una cena o merienda si querés.',
        ],
        callout:
          'Consejo: alterná aire libre y techo a lo largo del día para no golpearte con el calor central. Verificá horarios de museos y locales.',
      },
    ],
    faqs: [
      {
        question: '¿Se puede hacer todo en un día?',
        answer:
          'Sí, alternando río, parque, puerto e interior. No apures: el valor está en las pausas.',
      },
      {
        question: '¿Dónde almorzar?',
        answer:
          'El Paseo del Puerto o el centro tienen opciones. Confirmá antes de ir.',
      },
      {
        question: '¿Vale la pena volver al atardecer?',
        answer:
          'Sí, la luz baja cambia por completo la vista del río y del puente.',
      },
      {
        question: '¿Museo incluido?',
        answer:
          'Podés sumar el Museo Amado Bonpland si está abierto; verificalo antes.',
      },
    ],
    related: [
      'itinerarios/medio-dia',
      'lugares/paseo-del-puerto',
      'lugares/museo-amado-bonpland',
      'comer/cenar-con-vista-al-rio',
    ],
  },
  {
    slug: 'itinerarios/fotos-al-atardecer',
    group: 'E',
    groupLabel: GROUP_LABELS.E,
    kicker: 'Fotografía',
    h1: 'Ruta de fotos al atardecer en la Costanera',
    metaTitle: 'Ruta de fotos al atardecer en la Costanera de Corrientes',
    metaDescription:
      'Dónde y cuándo fotografiar el atardecer en la Costanera: miradores, Puente General Belgrano y consejos de luz.',
    lead: 'El atardecer es el momento más fotografiado del paseo. Esta ruta apunta a los mejores encuadres y al momento justo de la luz.',
    updated: VERIFIED,
    sections: [
      {
        heading: 'Llegá antes',
        paragraphs: [
          'Llegá 30–45 minutos antes del atardecer para ubicarte y probar encuadres sin prisa. La luz cambia rápido sobre el río.',
        ],
      },
      {
        heading: 'Encuadres clave',
        paragraphs: [
          'Los miradores del norte y la silueta del Puente General Belgrano son los protagonistas. Buscá línea despejada al oeste.',
        ],
        bullets: [
          'Miradores del norte: río + horizonte.',
          'Puente General Belgrano: silueta recortada.',
          'Puntas: ángulos distintos del frente de agua.',
        ],
      },
      {
        heading: 'Consejos de luz y seguridad',
        paragraphs: [
          'Llevá una prenda liviana por el viento. Para el regreso, preferí sectores iluminados y transitados.',
        ],
        callout:
          'Tip: no te quedes en un solo punto. Caminá unos metros y compará encuadres; la luz baja premia el movimiento.',
      },
    ],
    faqs: [
      {
        question: '¿Dónde sacar las mejores fotos?',
        answer:
          'Los miradores del norte y la vista al Puente General Belgrano son los más buscados. Llegá temprano para ubicarte.',
      },
      {
        question: '¿Hacia dónde queda el sol?',
        answer:
          'El Paraná abre el horizonte al oeste en buena parte del paseo; por eso el atardecer cae sobre el agua.',
      },
      {
        question: '¿Necesito equipo?',
        answer:
          'No; un celular alcanza. Si usás cámara, probá distintos puntos antes del momento clave.',
      },
      {
        question: '¿Es seguro volver de noche?',
        answer:
          'Preferí sectores iluminados y coordiná el regreso en taxi o remis si venís de lejos.',
      },
    ],
    related: [
      'guia/donde-ver-atardecer',
      'lugares/puente-general-belgrano',
      'comer/cenar-con-vista-al-rio',
      'itinerarios/un-dia-en-corrientes',
    ],
  },
  {
    slug: 'itinerarios/dia-de-lluvia',
    group: 'E',
    groupLabel: GROUP_LABELS.E,
    kicker: 'Plan B',
    h1: 'Qué hacer si llueve en la Costanera',
    metaTitle: 'Día de lluvia en Corrientes: planes bajo techo',
    metaDescription:
      'Si llueve en la Costanera: museo, cultura y opciones bajo techo cerca, y cómo combinarlas con el paseo cuando mejora.',
    lead: 'La lluvia no tiene por qué arruinar el día. Corrientes tiene opciones bajo techo que combinan con la ribera.',
    updated: VERIFIED,
    sections: [
      {
        heading: 'Museo y cultura',
        paragraphs: [
          'El Museo de Ciencias Naturales Amado Bonpland es el plan interior natural del entorno ribereño. Verificá su horario antes de ir.',
        ],
      },
      {
        heading: 'Comer y descansar',
        paragraphs: [
          'Una pausa en un local del entorno (puerto o centro) te da techo y comida mientras pasa el chaparrón.',
        ],
        bullets: [
          'Museo Amado Bonpland (horario a confirmar).',
          'Paseo del Puerto o centro para comer.',
          'Retomá la ribera si mejora el clima.',
        ],
      },
      {
        heading: 'Seguridad con lluvia',
        paragraphs: [
          'Si está mojado, evitá el borde del río y las superficies resbaladizas. La costanera se disfruta mejor seco.',
        ],
        callout:
          'Consejo: hacé lo bajo techo en las horas de lluvia y dejá el paseo al aire libre para cuando escampe.',
      },
    ],
    faqs: [
      {
        question: '¿Qué hacer si llueve?',
        answer:
          'Museo Amado Bonpland, una pausa para comer en el puerto o el centro, y retomar la ribera cuando mejore.',
      },
      {
        question: '¿El museo está abierto siempre?',
        answer:
          'No asumas; verificá horario con la institución o fuentes turísticas antes de ir.',
      },
      {
        question: '¿Se puede caminar con lluvia?',
        answer:
          'Evitá el borde y las superficies resbaladizas. Es mejor esperar a que escampe.',
      },
      {
        question: '¿Y si solo llueve un rato?',
        answer:
          'Aprovechá el techo para comer y retomá el paseo cuando se seque.',
      },
    ],
    related: [
      'lugares/museo-amado-bonpland',
      'comer/puerto-corrientes',
      'itinerarios/un-dia-en-corrientes',
      'guia/clima-crecidas-y-seguridad',
    ],
  },
  {
    slug: 'itinerarios/murales-y-costanera',
    group: 'E',
    groupLabel: GROUP_LABELS.E,
    kicker: 'Arte y ribera',
    h1: 'Murales y Costanera: ruta de arte',
    metaTitle: 'Murales y Costanera: ruta de arte y río',
    metaDescription:
      'Unir los murales y el arte público con el paseo ribereño: Parque Cambá Cuá, Parque Mitre y cómo armar la vuelta.',
    lead: 'La ribera de Corrientes también es arte público. Esta ruta combina murales, cultura y río en una sola caminata.',
    updated: VERIFIED,
    sections: [
      {
        heading: 'Arte en el espacio público',
        paragraphs: [
          'El Parque Cambá Cuá destaca por sus murales y referencias a la cultura local. Otros espacios del entorno (como Parque Mitre) también aportan arte y memoria.',
        ],
      },
      {
        heading: 'Cómo armar la vuelta',
        paragraphs: [
          'Podés combinar un tramo de costanera con una pausa en los espacios con murales, alternando río y cultura.',
        ],
        bullets: [
          'Costanera norte (río y miradores).',
          'Parque Cambá Cuá (murales, familia).',
          'Parque Mitre / Paseo Pedro Ferré (historia y arte).',
        ],
      },
      {
        heading: 'Respetá la obra',
        paragraphs: [
          'Los murales son patrimonio colectivo: míralos, fotografialos, pero no los dañes. La sombra de estos espacios ayuda en días de calor.',
        ],
        callout:
          'Consejo: hacelo en la franja más fresca y usá los espacios verdes como pausas entre tramos de sol.',
      },
    ],
    faqs: [
      {
        question: '¿Dónde ver murales?',
        answer:
          'El Parque Cambá Cuá es el más conocido; Parque Mitre y otros espacios también aportan arte público.',
      },
      {
        question: '¿Se combina con la costanera?',
        answer:
          'Sí, alterná río y espacios verdes con murales en una misma vuelta.',
      },
      {
        question: '¿Es apto para niños?',
        answer:
          'Sí, sobre todo el Parque Cambá Cuá, con áreas para familias.',
      },
      {
        question: '¿Gratis?',
        answer:
          'Son espacios públicos, sin entrada general. Servicios pueden variar.',
      },
    ],
    related: [
      'lugares/parque-camba-cua',
      'lugares/parque-mitre-punta-araza',
      'lugares/paseo-pedro-ferre',
      'itinerarios/medio-dia',
    ],
  },
  {
    slug: 'itinerarios/desde-resistencia',
    group: 'E',
    groupLabel: GROUP_LABELS.E,
    kicker: 'Desde otra ciudad',
    h1: 'Desde Resistencia a la Costanera de Corrientes',
    metaTitle: 'Cómo ir de Resistencia a la Costanera de Corrientes',
    metaDescription:
      'Llegar de Resistencia (Chaco) a la Costanera de Corrientes: distancia aproximada, el Puente General Belgrano y cómo planificar el día.',
    lead: 'Resistencia, en el Chaco, queda del otro lado del Paraná. Cruzar el Puente General Belgrano te deja a pocos kilómetros de la ribera correntina.',
    updated: VERIFIED,
    sections: [
      {
        heading: 'El cruce del Paraná',
        paragraphs: [
          'Resistencia y Corrientes están comunicadas por el Puente General Belgrano, que cruza el río Paraná. La distancia exacta depende de tu punto de partida y del acceso a la costanera que elijas.',
        ],
        callout:
          'La distancia es aproximada y cambia según el recorrido; verificala en tu navegador antes de salir. Esta guía no fija un valor único porque depende de cada base.',
      },
      {
        heading: 'Cómo planificar el día',
        paragraphs: [
          'Si venís de Resistencia, conviene llegar con tiempo para hacer al menos un medio día de ribera, y dejar el atardecer como cierre.',
        ],
        bullets: [
          'Cruzá el puente y apuntá a un acceso norte señalizado.',
          'Dejá margen para tránsito y estacionamiento.',
          'Cerrá con el atardecer sobre el Paraná.',
        ],
      },
      {
        heading: 'Regreso',
        paragraphs: [
          'Coordiná el retorno con luz y sin apuros. Si vas a cenar, pensá el regreso a Resistencia antes de sentarte.',
        ],
      },
    ],
    faqs: [
      {
        question: '¿Cómo llego de Resistencia a la costanera?',
        answer:
          'Cruzando el Puente General Belgrano hacia Corrientes y apuntando a un acceso señalizado de la costanera.',
      },
      {
        question: '¿Qué distancia hay?',
        answer:
          'Depende de tu base y del acceso elegido; es una distancia corta en auto tras cruzar el puente. Verificala en tu navegador.',
      },
      {
        question: '¿Vale la pena un día entero?',
        answer:
          'Sí, si llegás con tiempo: alcanza para ribera, parque y atardecer.',
      },
      {
        question: '¿El puente conecta con el Chaco?',
        answer:
          'Sí, el Puente General Belgrano une Corrientes con la provincia del Chaco, cruzando el Paraná.',
      },
    ],
    related: [
      'lugares/puente-general-belgrano',
      'itinerarios/un-dia-en-corrientes',
      'como-llegar/desde-el-centro',
      'comer/cenar-con-vista-al-rio',
    ],
  },

  // ===================== GROUP F: Alojamiento y artesanías (3) =====================
  {
    slug: 'alojamiento/cerca-costanera-norte',
    group: 'F',
    groupLabel: GROUP_LABELS.F,
    kicker: 'Dónde dormir',
    h1: 'Dónde alojarse cerca de la Costanera Norte',
    metaTitle: 'Alojamiento cerca de la Costanera Norte de Corrientes',
    metaDescription:
      'Cómo elegir alojamiento cerca del norte de la Costanera: caminabilidad, llegada y verificación de direcciones y reservas.',
    lead: 'Dormir cerca del norte te permite caminar a la ribera sin depender del auto. La clave es verificar dirección real y facilidad de llegada.',
    updated: VERIFIED,
    sections: [
      {
        heading: 'Por qué el norte',
        paragraphs: [
          'El tramo norte es el más continuo y conocido, por lo que alojarte cerca te acerca a una caminata ribereña directa y a los miradores.',
        ],
      },
      {
        heading: 'Qué verificar antes de reservar',
        paragraphs: [
          'Confirmá la dirección real del alojamiento, su distancia efectiva a tu acceso de la costanera y la disponibilidad de estacionamiento o transporte.',
        ],
        bullets: [
          'Distancia real a un acceso señalizado.',
          'Facilidad de llegada (auto, taxi, a pie).',
          'Reserva y políticas confirmadas con el establecimiento.',
        ],
      },
      {
        heading: 'Caminabilidad',
        paragraphs: [
          'Si querés ir a pie, elegí un alojamiento que no te obligue a cruzar sectores sin vereda ni señalización. La ribera se disfruta más caminando desde cerca.',
        ],
        callout:
          'Esta guía no lista hoteles concretos: la oferta cambia y cada viajero tiene distintas necesidades. Elegí según ubicación real y verificá con el establecimiento.',
      },
    ],
    faqs: [
      {
        question: '¿Conviene alojarse cerca del norte?',
        answer:
          'Sí, si querés caminar a la ribera: el norte es el tramo más continuo y conocido.',
      },
      {
        question: '¿A cuántas cuadras de la costanera?',
        answer:
          'Depende del alojamiento; verificá la dirección real y la distancia a un acceso señalizado antes de reservar.',
      },
      {
        question: '¿Lista de hoteles?',
        answer:
          'No listamos comercios concretos. Elegí según ubicación y verificá con el establecimiento.',
      },
      {
        question: '¿Con auto?',
        answer:
          'Confirmá estacionamiento y el acceso más cerca de tu tramo de la costanera.',
      },
    ],
    related: [
      'alojamiento/cerca-playa-arazaty',
      'como-llegar/estacionamiento',
      'guia/costanera-norte-vs-sur',
      'itinerarios/medio-dia',
    ],
  },
  {
    slug: 'alojamiento/cerca-playa-arazaty',
    group: 'F',
    groupLabel: GROUP_LABELS.F,
    kicker: 'Dónde dormir',
    h1: 'Alojamiento cerca de Playa Arazaty',
    metaTitle: 'Alojamiento cerca de Playa Arazaty (Costanera Sur)',
    metaDescription:
      'Dónde alojarse cerca de Playa Arazaty: perfil más estacional, verificación de ubicación y combinación con la costanera sur.',
    lead: 'Si tu plan gira en torno a la playa, alojarte cerca del sur tiene sentido. Pero recordá que la playa es estacional y su habilitación cambia.',
    updated: VERIFIED,
    sections: [
      {
        heading: 'Perfil más estacional',
        paragraphs: [
          'El sur, cerca de Playa Arazaty, tiene un perfil más ligado a la temporada de playa. Fuera de ella, la oferta y la actividad pueden ser menores.',
        ],
      },
      {
        heading: 'Qué verificar',
        paragraphs: [
          'Confirmá la dirección real, la distancia efectiva a la playa y la disponibilidad de servicios. No asumas que "cerca de la playa" implica acceso directo y habilitado.',
        ],
        bullets: [
          'Dirección real y distancia a Arazaty.',
          'Habilitación de playa según la temporada.',
          'Reserva y políticas confirmadas.',
        ],
      },
      {
        heading: 'Combine con el sur',
        paragraphs: [
          'Si vas a la playa, el sur es tu zona; si prefierís paseo continuo y miradores, el norte queda a otro recorrido.',
        ],
        callout:
          'Esta guía no lista hoteles concretos. Elegí según ubicación real y verificá con el establecimiento antes de reservar.',
      },
    ],
    faqs: [
      {
        question: '¿Conviene alojarse cerca de Arazaty?',
        answer:
          'Si tu plan es la playa, sí. Pero recordá que la habilitación es estacional y cambia.',
      },
      {
        question: '¿Siempre hay playa?',
        answer:
          'No; depende de la temporada y la municipalidad. Verificala antes de viajar.',
      },
      {
        question: '¿Lista de hoteles?',
        answer:
          'No listamos comercios. Elegí según ubicación y confirmá con el establecimiento.',
      },
      {
        question: '¿Y si llueve o no hay playa?',
        answer:
          'Tené un plan B: museo, puerto o norte para el paseo al aire libre.',
      },
    ],
    related: [
      'lugares/playa-arazaty',
      'alojamiento/cerca-costanera-norte',
      'comer/costanera-sur-playa-arazaty',
      'itinerarios/dia-de-lluvia',
    ],
  },
  {
    slug: 'lugares/paseo-de-artesanos',
    group: 'F',
    groupLabel: GROUP_LABELS.F,
    kicker: 'Artesanías y cultura',
    h1: 'Paseo de Artesanos en la Costanera',
    metaTitle: 'Paseo de Artesanos: artesanía y cultura en la ribera',
    metaDescription:
      'El Paseo de Artesanos cerca de la Costanera: qué encontrar, cultura local, y cómo verificar fechas y ubicación.',
    lead: 'El Paseo de Artesanos suma la capa artesanal y de compras a la vuelta ribereña: un buen stop para llevarse un recuerdo de Corrientes.',
    updated: VERIFIED,
    sections: [
      {
        heading: 'Artesanía y cultura local',
        paragraphs: [
          'El Paseo de Artesanos reúne propuestas de artesanía y cultura local en el entorno de la costanera. Es una parada distinta a la de solo río.',
        ],
      },
      {
        heading: 'Cuándo y dónde',
        paragraphs: [
          'La ubicación y los días de apertura pueden variar. Verificalos con fuentes turísticas o municipales antes de tu visita para no encontrarte con el espacio cerrado.',
        ],
        bullets: [
          'Confirmá días y horarios vigentes.',
          'Combiná con una caminata por la ribera.',
          'Respetá a los artesanos y sus espacios.',
        ],
      },
      {
        heading: 'Cómo sumarlo',
        paragraphs: [
          'Podés incluirlo como parada de un recorrido de medio día, especialmente si te interesa la cultura y las compras locales.',
        ],
        callout:
          'Consejo: la oferta es dinámica; esta guía no lista ferias fijas. Confirmá fechas y ubicación con turismo de la ciudad.',
      },
    ],
    faqs: [
      {
        question: '¿Qué es el Paseo de Artesanos?',
        answer:
          'Es un espacio del entorno ribereño con propuestas de artesanía y cultura local.',
      },
      {
        question: '¿Siempre está abierto?',
        answer:
          'La ubicación y los días pueden variar; verificalos con fuentes turísticas antes de ir.',
      },
      {
        question: '¿Se puede comprar?',
        answer:
          'Sí, suele haber propuestas artesanales. Confirmá disponibilidad y horarios el día.',
      },
      {
        question: '¿Combina con la costanera?',
        answer:
          'Sí, como parada de un recorrido de medio día con cultura y río.',
      },
    ],
    related: [
      'itinerarios/murales-y-costanera',
      'lugares/paseo-del-puerto',
      'itinerarios/un-dia-en-corrientes',
      'comer/cafes-y-meriendas',
    ],
  },
];

export function topicSlugs(): string[] {
  return TOPICS.map((t) => t.slug);
}

export function getTopic(slug: string): Topic | undefined {
  return TOPICS.find((t) => t.slug === slug);
}

export function topicsByGroup(group: GroupKey): Topic[] {
  return TOPICS.filter((t) => t.group === group);
}

export function groupLabel(key: GroupKey): string {
  return GROUP_LABELS[key];
}
