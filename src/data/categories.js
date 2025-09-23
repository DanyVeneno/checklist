export const categories = {
  'primeros-auxilios': {
    title: 'Primeros Auxilios y Cuidados Básicos',
    color: 'bg-red-500',
    items: [
      'Ibuprofeno u otro analgésico',
      'Tratamiento para picaduras de insectos',
      'Antihistamínico para reacciones alérgicas',
      'Pinzas de punta fina (para astillas)',
      'Pines de seguridad',
      'Manual de primeros auxilios o tarjetas de información',
      'Toallitas antisépticas (a base de BZK o alcohol)',
      'Pomada antibacteriana (ej. bacitracina)',
      'Tintura compuesta de benjuí',
      'Vendas adhesivas surtidas (preferencia de tela)',
      'Banditas tipo mariposa',
      'Gasas estériles (varios tamaños)',
      'Almohadillas estériles que no se adhieran a la herida',
      'Cinta adhesiva médica (10 metros, ancho de 1" o más)',
      'Tratamiento para ampollas',
      'Almohadillas de hidrogel',
      'Almohadillas limpiadoras de primeros auxilios con anestésico',
      'Gasa hemostática (para detener hemorragias)',
      'Vendaje liquido',
      'Parches oculares ovalados'
    ]
  },
  'vendajes': {
    title: 'Vendajes, Férulas y Coberturas para Heridas',
    color: 'bg-blue-500',
    items: [
      'Venda elástica',
      'Venda triangular (pañuelo tipo cabestrillo)',
      'Férula para dedo(s)',
      'Férula tipo SAM',
      'Gasa enrollada',
      'Vendas elásticas que se ajustan a la forma'
    ]
  },
  'medicamentos': {
    title: 'Medicamentos y Tratamientos',
    color: 'bg-green-500',
    items: [
      'Tratamiento para hiedra venenosa/roble venenoso',
      'Tratamiento para picaduras de insectos',
      'Glucosa o azúcar para tratar hipoglucemia',
      'Sales de rehidratación oral',
      'Talco/polvo antifúngico para pies',
      'Medicamentos con receta (ej. antibióticos)',
      'Epinefrina inyectable para reacciones alérgicas',
      'Gel antibacterial para manos (BZK o alcohol)',
      'Gel de aloe vera (para alivio de exposición solar)',
      'Aspirina (respuesta a un infarto)',
      'Pastillas antiácidas',
      'Pastillas para la garganta',
      'Gotas lubricantes para ojos',
      'Loperamida (para diarrea)'
    ]
  },
  'herramientas': {
    title: 'Herramientas y Suministros',
    color: 'bg-purple-500',
    items: [
      'Pinzas de punta larga con cortador de alambre',
      'Cinta adhesiva industrial (rollo pequeño)',
      'Libreta pequeña y lápiz o pluma a prueba de agua',
      'Bolsa para desechos médicos (y caja para objetos punzocortantes)',
      'Contenedor impermeable para todos los suministros médicos',
      'Manta de emergencia reflectante de calor',
      'Lámpara frontal (preferentemente) o linterna',
      'Silbato (preferible sin bolita)',
      'Baliza de localización personal',
      'Dispositivo de mensajería satelital',
      'Cuchillo (o multiherramienta con cuchillo)',
      'Tijeras paramédicas (punta roma)',
      'Hoja de afeitar o bisturí #15 o #12',
      'Cotonetes',
      'Termómetro oral estándar',
      'Termómetro de baja lectura (hipotermia)',
      'Jeringa de irrigación con catéter de calibre 18',
      'Lupa',
      'Espejo pequeño',
      'Guantes médicos (preferencia nitrilo, evitar látex)',
      'Mascarilla para RCP',
      'Aguja de coser con hilo resistente',
      'Torniquete de una mano'
    ]
  },
  'personales': {
    title: 'Artículos Personales',
    color: 'bg-orange-500',
    items: [
      'Jabón biodegradable',
      'Protector solar',
      'Bálsamo labial',
      'Repelente de insectos (y mosquitero para cabeza si es necesario)',
      'Lavabo o cubeta plegable',
      'Químicos para tratamiento de agua'
    ]
  }
};

export function getAllItems() {
  return Object.entries(categories).flatMap(([key, category]) =>
    category.items.map(item => ({ item, category: key, categoryTitle: category.title }))
  );
}

export default categories;
