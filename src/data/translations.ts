export type Lang = "ru" | "en";

export interface PackageItem {
  icon: string;
  text: string;
}

export interface Package {
  name: string;
  price: string;
  popular: boolean;
  color: "blue" | "orange" | "red" | "gold";
  base: PackageItem[];
  added: PackageItem[];
}

export interface Translations {
  nav: {
    brand: string;
    links: { id: string; label: string }[];
    ctaMobile: string;
    ctaDesktop: string;
  };
  hero: {
    badge: string;
    titlePart1: string;
    titleAccent: string;
    titlePart3: string;
    subtitlePrefix: string;
    subtitleAccent: string;
    subtitleSuffix: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: { val: string; unit: string; label: string }[];
  };
  problem: {
    label: string;
    title1: string;
    title2: string;
    description: string;
    cards: { title: string; desc: string; num: string }[];
  };
  essence: {
    label: string;
    title1: string;
    title2: string;
    description: string;
  };
  mentor: {
    label: string;
    firstName: string;
    lastName: string;
    bullets: string[];
    cta: string;
  };
  author: {
    label: string;
    firstName: string;
    lastName: string;
    bullets: string[];
    quote: string;
  };
  gallery: {
    label: string;
    title: string;
    description: string;
    mainTag: string;
    mainTitle: string;
    grid1: { label: string; sub: string }[];
    grid2: { label: string; sub: string }[];
  };
  community: {
    label: string;
    titlePrefix: string;
    titleAccent: string;
    description: string;
    cards: { title: string; desc: string }[];
  };
  turtles: {
    label: string;
    titlePrefix: string;
    titleAccent: string;
    description: string;
  };
  program: {
    label: string;
    title: string;
    dayLabel: string;
    days: { day: string; title: string; desc: string }[];
  };
  results: {
    label: string;
    title: string;
    items: { label: string }[];
  };
  film: {
    label: string;
    title: string;
    description: string;
    iframeTitle: string;
  };
  pricing: {
    label: string;
    title: string;
    subtitle: string;
    packages: Package[];
    popularBadge: string;
    addedLabel: string;
    basicFormatLabel: string;
    selectCta: string;
    kids: { title: string; desc: string; price: string; priceUnit: string };
  };
  logistics: {
    label: string;
    title: string;
    cards: { title: string; desc: string; color: string; icon: string }[];
    footer: string;
  };
  final: {
    badge: string;
    title1: string;
    title2: string;
    description: string;
    date: string;
    cta: string;
  };
  footer: {
    brand: string;
    location: string;
    copyright: string;
  };
  alt: {
    dmitry: string;
    marina: string;
    community: string;
    turtles: string;
    lighthouse: string;
    aerial: string;
  };
}

const basePackageItems = {
  ru: [
    { icon: "BookOpen", text: "Программа тренинга (4 дня)" },
    { icon: "UtensilsCrossed", text: "Питание на все дни" },
    { icon: "Users", text: "Работа в группе" },
  ],
  en: [
    { icon: "BookOpen", text: "Training program (4 days)" },
    { icon: "UtensilsCrossed", text: "Meals for all days" },
    { icon: "Users", text: "Group work" },
  ],
};

export const translations: Record<Lang, Translations> = {
  ru: {
    nav: {
      brand: "ПерепроШивка",
      links: [
        { id: "program", label: "Программа" },
        { id: "gallery", label: "Место" },
        { id: "film", label: "Фильм" },
        { id: "pricing", label: "Участие" },
      ],
      ctaMobile: "Заявка",
      ctaDesktop: "Подать заявку",
    },
    hero: {
      badge: "6–9 августа · Атлантический океан",
      titlePart1: "Пере",
      titleAccent: "про",
      titlePart3: "Шивка",
      subtitlePrefix: "Выездной трансформационный тренинг ",
      subtitleAccent: "Дмитрия Хара",
      subtitleSuffix: " в Кабо-Верде",
      description: "4 дня, которые помогут убрать внутренние ограничения и выйти в новую точку жизни",
      ctaPrimary: "Подать заявку",
      ctaSecondary: "Смотреть фильм",
      stats: [
        { val: "4", unit: "дня", label: "интенсивной работы" },
        { val: "20", unit: "мест", label: "личный отбор" },
        { val: "2013", unit: "г.", label: "проводит программы" },
      ],
    },
    problem: {
      label: "Честный вопрос",
      title1: "Старые способы",
      title2: "больше не работают?",
      description: "Можно менять стратегии, проходить обучения, больше работать — но внутри всё равно тревога, усталость, ощущение потолка и повторяющиеся сценарии.",
      cards: [
        { title: "Деньги", desc: "Потолок, рост через выгорание. Больше усилий — но не больше жизни.", num: "01" },
        { title: "Здоровье", desc: "Потеря энергии, хроническое напряжение. Тело сигналит о пределе.", num: "02" },
        { title: "Отношения", desc: "Одиночество, повторяющиеся сценарии. Снова и снова — одно и то же.", num: "03" },
      ],
    },
    essence: {
      label: "Суть тренинга",
      title1: "Это не мотивация.",
      title2: "Это перепроживание себя.",
      description: "«ПерепроШивка» — авторский тренинг Дмитрия Хара, помогающий убрать внутренние ограничения, выйти из жизни «на автомате», вернуть ясность и контакт с собой настоящим.",
    },
    mentor: {
      label: "Ведущая тренинга",
      firstName: "Марина",
      lastName: "Кирсанова",
      bullets: [
        "Сертифицированный тренер «ПерепроШивки»",
        "Бизнес-наставник с колоссальным опытом",
        "Помогает людям выйти на новый уровень жизни",
      ],
      cta: "Написать Марине",
    },
    author: {
      label: "Автор тренинга",
      firstName: "Дмитрий",
      lastName: "Хара",
      bullets: [
        "Автор тренинга «ПерепроШивка»",
        "Писатель: «П.Ш.», «Трэш», «Сияние»",
        "Автор практики «Шодхан»",
        "Проводит программы с 2013 года",
      ],
      quote: "«Невозможно придумать своё предназначение. Его можно только почувствовать».",
    },
    gallery: {
      label: "Место силы",
      title: "Cabo Verde",
      description: "Бирюзовый океан, белые пляжи, вулканы, затонувший корабль и колониальные деревни.",
      mainTag: "Аэросъёмка",
      mainTitle: "Остров Сал · Пирс и бирюзовый залив",
      grid1: [
        { label: "Пляж Санта-Мария", sub: "Белый песок" },
        { label: "Кораблекрушение", sub: "Остров Боавишта" },
        { label: "Cidade Velha", sub: "Старый город" },
      ],
      grid2: [
        { label: "Прая, столица", sub: "Остров Сантьягу" },
        { label: "Горная деревня", sub: "Остров Санту-Антан" },
        { label: "Порт Минделу", sub: "Яхты и вулканы" },
      ],
    },
    community: {
      label: "Ты не один",
      titlePrefix: "Окружение ",
      titleAccent: "решает всё",
      description: "Рядом с тобой будут люди, которые тоже выбрали честность с собой. Не случайная группа — выбранное окружение, которое становится частью твоего нового пути.",
      cards: [
        { title: "Живой контакт", desc: "4 дня настоящего, без масок и социальных ролей." },
        { title: "Общая энергия", desc: "Группа усиливает каждого — это не метафора, это физика." },
        { title: "После тренинга", desc: "Люди остаются в контакте. Сообщество продолжает жить." },
      ],
    },
    turtles: {
      label: "Символ прорыва",
      titlePrefix: "8.08 — ",
      titleAccent: "Ворота Льва",
      description: "В эти дни на берег выходят маленькие черепашки — символ прорыва, выхода из старой скорлупы и движения к новой жизни. Природа сама становится метафорой внутреннего пути.",
    },
    program: {
      label: "4 дня · 6–9 августа",
      title: "Программа",
      dayLabel: "День",
      days: [
        { day: "01", title: "Обнуление", desc: "Снять всё лишнее. Прийти в контакт с собой. Освободиться от фоновых нагрузок и войти в пространство тренинга." },
        { day: "02", title: "Погружение", desc: "Глубокая работа с внутренними ограничениями. Выход за рамки привычных реакций и автоматизмов." },
        { day: "03", title: "Точка сборки", desc: "Интеграция нового опыта. Формирование нового образа себя, который будет работать в реальной жизни." },
        { day: "04", title: "Интеграция", desc: "Закрепление изменений. Конкретные инструменты для жизни после тренинга. Выход в новую точку." },
      ],
    },
    results: {
      label: "После тренинга",
      title: "Что ты получишь",
      items: [
        { label: "Внутреннюю ясность" },
        { label: "Спокойствие вместо напряжения" },
        { label: "Возвращение энергии" },
        { label: "Новый взгляд на деньги" },
        { label: "Внутреннюю опору" },
      ],
    },
    film: {
      label: "Смотри перед заявкой",
      title: "Фильм «Перепрошивка»",
      description: "Документальный фильм о том, как устроен тренинг и что происходит с участниками изнутри.",
      iframeTitle: "Фильм Перепрошивка",
    },
    pricing: {
      label: "Варианты участия",
      title: "Выбери формат",
      subtitle: "Каждый следующий уровень включает всё из предыдущего",
      packages: [
        { name: "Basic", price: "1 700", popular: false, color: "blue", base: basePackageItems.ru, added: [] },
        { name: "Standard", price: "1 900", popular: true, color: "gold", base: basePackageItems.ru, added: [{ icon: "BedDouble", text: "Проживание в отеле" }] },
        {
          name: "Premium", price: "2 300", popular: false, color: "orange", base: basePackageItems.ru,
          added: [
            { icon: "BedDouble", text: "Проживание в отеле" },
            { icon: "DoorOpen", text: "Одноместное проживание" },
            { icon: "Star", text: "Личная работа с Дмитрием" },
          ],
        },
      ],
      popularBadge: "Самый популярный",
      addedLabel: "+ Дополнительно",
      basicFormatLabel: "Базовый формат",
      selectCta: "Выбрать",
      kids: { title: "Детский лагерь", desc: "5–14 лет · можно приехать с детьми", price: "100", priceUnit: "за 4 дня" },
    },
    logistics: {
      label: "Перелёт и трансфер",
      title: "Как добраться",
      cards: [
        { icon: "Plane", title: "Через Лиссабон", desc: "Удобные рейсы из большинства городов России и СНГ через Лиссабон.", color: "blue" },
        { icon: "Navigation", title: "Через Касабланку", desc: "Альтернативный маршрут — через Марокко. Организаторы помогут с выбором.", color: "orange" },
      ],
      footer: "Организаторы помогают с перелётом и встречают участников на месте",
    },
    final: {
      badge: "Только 20 мест",
      title1: "Начни",
      title2: "здесь",
      description: "Каждый участник проходит личное собеседование перед подтверждением участия.",
      date: "6–9 августа · Кабо-Верде",
      cta: "Подать заявку",
    },
    footer: {
      brand: "ПерепроШивка",
      location: "Cabo Verde · 6–9 августа 2025",
      copyright: "© Дмитрий Хара",
    },
    alt: {
      dmitry: "Дмитрий Хара",
      marina: "Марина Кирсанова",
      community: "Участники тренинга",
      turtles: "Черепашки",
      lighthouse: "Маяк",
      aerial: "Аэро",
    },
  },
  en: {
    nav: {
      brand: "Reprogramming",
      links: [
        { id: "program", label: "Program" },
        { id: "gallery", label: "Location" },
        { id: "film", label: "Film" },
        { id: "pricing", label: "Join" },
      ],
      ctaMobile: "Apply",
      ctaDesktop: "Apply Now",
    },
    hero: {
      badge: "August 6–9 · Atlantic Ocean",
      titlePart1: "Re",
      titleAccent: "programm",
      titlePart3: "ing",
      subtitlePrefix: "A retreat transformation training by ",
      subtitleAccent: "Dmitry Khara",
      subtitleSuffix: " in Cabo Verde",
      description: "4 days to release inner limitations and step into a new chapter of life",
      ctaPrimary: "Apply Now",
      ctaSecondary: "Watch the Film",
      stats: [
        { val: "4", unit: "days", label: "of intensive work" },
        { val: "20", unit: "spots", label: "personally selected" },
        { val: "2013", unit: "", label: "running programs since" },
      ],
    },
    problem: {
      label: "An Honest Question",
      title1: "Old strategies",
      title2: "aren't working anymore?",
      description: "You can switch strategies, take courses, work harder — but inside there's still anxiety, exhaustion, a sense of a ceiling, and the same patterns repeating.",
      cards: [
        { title: "Money", desc: "A ceiling. Growth through burnout. More effort — but not more life.", num: "01" },
        { title: "Health", desc: "Loss of energy, chronic tension. The body signals its limit.", num: "02" },
        { title: "Relationships", desc: "Loneliness, repeating patterns. Again and again — the same thing.", num: "03" },
      ],
    },
    essence: {
      label: "The Essence of the Training",
      title1: "This isn't motivation.",
      title2: "It's re-living yourself.",
      description: "\"Reprogramming\" is Dmitry Khara's signature training that helps remove inner limitations, break free from life on autopilot, and restore clarity and contact with your true self.",
    },
    mentor: {
      label: "Training Facilitator",
      firstName: "Marina",
      lastName: "Kirsanova",
      bullets: [
        "Certified \"Reprogramming\" trainer",
        "Business mentor with vast experience",
        "Helps people step into a new level of life",
      ],
      cta: "Message Marina",
    },
    author: {
      label: "Author of the Training",
      firstName: "Dmitry",
      lastName: "Khara",
      bullets: [
        "Author of the \"Reprogramming\" training",
        "Writer: \"P.S.\", \"Trash\", \"Radiance\"",
        "Creator of the \"Shodhan\" practice",
        "Running programs since 2013",
      ],
      quote: "\"You cannot invent your purpose. You can only feel it.\"",
    },
    gallery: {
      label: "A Place of Power",
      title: "Cabo Verde",
      description: "Turquoise ocean, white beaches, volcanoes, a shipwreck, and colonial villages.",
      mainTag: "Aerial View",
      mainTitle: "Sal Island · Pier and Turquoise Bay",
      grid1: [
        { label: "Santa Maria Beach", sub: "White sand" },
        { label: "Shipwreck", sub: "Boa Vista Island" },
        { label: "Cidade Velha", sub: "Old town" },
      ],
      grid2: [
        { label: "Praia, the capital", sub: "Santiago Island" },
        { label: "Mountain village", sub: "Santo Antão Island" },
        { label: "Mindelo Port", sub: "Yachts and volcanoes" },
      ],
    },
    community: {
      label: "You're Not Alone",
      titlePrefix: "Your environment ",
      titleAccent: "changes everything",
      description: "You'll be surrounded by people who also chose honesty with themselves. Not a random group — a chosen environment that becomes part of your new path.",
      cards: [
        { title: "Real connection", desc: "4 days of authenticity, without masks or social roles." },
        { title: "Shared energy", desc: "The group amplifies everyone — that's not a metaphor, it's physics." },
        { title: "After the training", desc: "People stay in touch. The community keeps living." },
      ],
    },
    turtles: {
      label: "A Symbol of Breakthrough",
      titlePrefix: "8.08 — ",
      titleAccent: "The Lion's Gate",
      description: "During these days, tiny turtles emerge on the shore — a symbol of breakthrough, of leaving the old shell behind and moving toward a new life. Nature itself becomes a metaphor for the inner journey.",
    },
    program: {
      label: "4 Days · August 6–9",
      title: "Program",
      dayLabel: "Day",
      days: [
        { day: "01", title: "Reset", desc: "Let go of everything unnecessary. Come into contact with yourself. Free yourself from background stress and enter the training space." },
        { day: "02", title: "Immersion", desc: "Deep work with inner limitations. Moving beyond habitual reactions and automatic patterns." },
        { day: "03", title: "Assembly Point", desc: "Integrating the new experience. Forming a new self-image that will work in real life." },
        { day: "04", title: "Integration", desc: "Anchoring the changes. Concrete tools for life after the training. Stepping into a new point." },
      ],
    },
    results: {
      label: "After the Training",
      title: "What You'll Gain",
      items: [
        { label: "Inner clarity" },
        { label: "Calm instead of tension" },
        { label: "Return of energy" },
        { label: "A new view on money" },
        { label: "Inner grounding" },
      ],
    },
    film: {
      label: "Watch Before You Apply",
      title: "\"Reprogramming\" — The Film",
      description: "A documentary about how the training works and what really happens with participants.",
      iframeTitle: "Reprogramming Film",
    },
    pricing: {
      label: "Ways to Join",
      title: "Choose Your Format",
      subtitle: "Each next tier includes everything from the previous one",
      packages: [
        { name: "Basic", price: "1 700", popular: false, color: "blue", base: basePackageItems.en, added: [] },
        { name: "Standard", price: "1 900", popular: true, color: "gold", base: basePackageItems.en, added: [{ icon: "BedDouble", text: "Hotel accommodation" }] },
        {
          name: "Premium", price: "2 300", popular: false, color: "orange", base: basePackageItems.en,
          added: [
            { icon: "BedDouble", text: "Hotel accommodation" },
            { icon: "DoorOpen", text: "Single room" },
            { icon: "Star", text: "Personal session with Dmitry" },
          ],
        },
      ],
      popularBadge: "Most Popular",
      addedLabel: "+ Included",
      basicFormatLabel: "Basic Format",
      selectCta: "Choose",
      kids: { title: "Kids Camp", desc: "Ages 5–14 · you can bring your children", price: "100", priceUnit: "for 4 days" },
    },
    logistics: {
      label: "Flights & Transfer",
      title: "How to Get There",
      cards: [
        { icon: "Plane", title: "Via Lisbon", desc: "Convenient flights from most cities in Russia and the CIS via Lisbon.", color: "blue" },
        { icon: "Navigation", title: "Via Casablanca", desc: "An alternative route through Morocco. Organizers will help you choose.", color: "orange" },
      ],
      footer: "Organizers help with flights and meet participants on site",
    },
    final: {
      badge: "Only 20 Spots",
      title1: "Start",
      title2: "here",
      description: "Every participant goes through a personal interview before confirming their spot.",
      date: "August 6–9 · Cabo Verde",
      cta: "Apply Now",
    },
    footer: {
      brand: "Reprogramming",
      location: "Cabo Verde · August 6–9, 2025",
      copyright: "© Dmitry Khara",
    },
    alt: {
      dmitry: "Dmitry Khara",
      marina: "Marina Kirsanova",
      community: "Training participants",
      turtles: "Turtles",
      lighthouse: "Lighthouse",
      aerial: "Aerial view",
    },
  },
};