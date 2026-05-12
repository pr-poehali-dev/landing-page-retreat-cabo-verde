import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/c2c2486d-0d04-4aab-b2bb-3d076133e4f2/bucket/3fc05f4e-b4c8-43d4-ad85-f39571c8ef6c.jpg";
const DMITRY_IMG = "https://cdn.poehali.dev/files/8e8ce9a6-dacf-485e-a5c3-a4c9a001e7eb.JPG";
const TURTLE_IMG = "https://cdn.poehali.dev/projects/c2c2486d-0d04-4aab-b2bb-3d076133e4f2/files/c5c845a1-690e-40f4-bd4f-d28ed0d2d67d.jpg";
const SUNSET_IMG = "https://cdn.poehali.dev/projects/c2c2486d-0d04-4aab-b2bb-3d076133e4f2/files/46e52d9b-e85f-4937-b8ec-f6649b9e057e.jpg";
const BEACH_IMG = "https://cdn.poehali.dev/projects/c2c2486d-0d04-4aab-b2bb-3d076133e4f2/files/72640b8b-8850-4b7e-9e95-588d17bff73e.jpg";
const MOUNTAIN_IMG = "https://cdn.poehali.dev/projects/c2c2486d-0d04-4aab-b2bb-3d076133e4f2/files/284f6009-1382-47b3-bacc-919e92a086e5.jpg";
const COAST_IMG = "https://cdn.poehali.dev/projects/c2c2486d-0d04-4aab-b2bb-3d076133e4f2/files/81b6f36d-1dac-4569-b6f5-5735f5d74a69.jpg";

// Акцентные цвета для инфографики
const ACCENT = {
  blue:   { bg: "bg-[#0EA5E9]",  text: "text-[#0EA5E9]",  border: "border-[#0EA5E9]",  glow: "shadow-[0_0_24px_rgba(14,165,233,0.35)]",  pill: "bg-[#0EA5E9]/15 text-[#0EA5E9]" },
  orange: { bg: "bg-[#F97316]",  text: "text-[#F97316]",  border: "border-[#F97316]",  glow: "shadow-[0_0_24px_rgba(249,115,22,0.35)]",   pill: "bg-[#F97316]/15 text-[#F97316]" },
  red:    { bg: "bg-[#EF4444]",  text: "text-[#EF4444]",  border: "border-[#EF4444]",  glow: "shadow-[0_0_24px_rgba(239,68,68,0.35)]",    pill: "bg-[#EF4444]/15 text-[#EF4444]" },
  gold:   { bg: "bg-[#C9A84C]",  text: "text-[#C9A84C]",  border: "border-[#C9A84C]",  glow: "shadow-[0_0_24px_rgba(201,168,76,0.35)]",   pill: "bg-[#C9A84C]/15 text-[#C9A84C]" },
};

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.08 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, visible } = useScrollReveal();
  return (
    <div ref={ref} className={className} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(40px)",
      transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
    }}>
      {children}
    </div>
  );
}

const GoldLine = () => (
  <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent mx-auto my-8" />
);

const Label = ({ children, color = "gold" }: { children: React.ReactNode; color?: keyof typeof ACCENT }) => (
  <p className={`text-xs tracking-[0.3em] uppercase text-center mb-4 font-bold ${ACCENT[color].text}`}>{children}</p>
);

export default function Index() {
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    const fn = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="bg-[#0A0E14] text-[#E8E0D0] font-sans overflow-x-hidden">

      {/* LIGHTBOX */}
      {lightbox && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center cursor-pointer" onClick={() => setLightbox(null)}>
          <button className="absolute top-6 right-6 text-white"><Icon name="X" size={28} /></button>
          <img src={lightbox} className="max-h-[90vh] max-w-[90vw] object-contain" />
        </div>
      )}

      {/* NAV */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrollY > 60 ? "bg-[#0A0E14]/96 backdrop-blur-md border-b border-white/5" : ""}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <button onClick={() => scrollTo("hero")} className="font-display text-[#C9A84C] text-sm tracking-[0.2em] uppercase font-bold">ПерепроШивка</button>
          <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
          <div className={`${menuOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row absolute md:static top-full left-0 right-0 md:top-auto bg-[#0A0E14]/98 md:bg-transparent gap-6 md:gap-8 p-6 md:p-0 items-start md:items-center border-b border-white/5 md:border-0`}>
            {[["program", "Программа"], ["gallery", "Место"], ["film", "Фильм"], ["pricing", "Участие"], ["contacts", "Заявка"]].map(([id, label]) => (
              <button key={id} onClick={() => scrollTo(id)} className="text-xs tracking-[0.15em] uppercase text-white/50 hover:text-white transition-colors duration-300">{label}</button>
            ))}
            <button onClick={() => scrollTo("contacts")} className="px-5 py-2 bg-[#C9A84C] text-[#0A0E14] text-xs tracking-[0.15em] uppercase font-bold hover:bg-[#E8D5A3] transition-all duration-300">
              Подать заявку
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${HERO_IMG})`, transform: `scale(1.05) translateY(${scrollY * 0.25}px)` }} />
        {/* Яркий градиент снизу + синеватый тонинг */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0E14]/70 via-[#0A0E14]/20 to-[#0A0E14]" />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-[#061018]/50" />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-20">
          {/* Бейдж с акцентом */}
          <div style={{ opacity: 0, animation: "fadeIn 1.2s ease 0.2s forwards" }}
            className="inline-flex items-center gap-2 px-5 py-2 bg-[#0EA5E9]/20 border border-[#0EA5E9]/50 text-[#0EA5E9] text-xs tracking-[0.3em] uppercase mb-10 font-bold">
            <Icon name="MapPin" size={12} />
            6–9 августа · Атлантический океан
          </div>

          <h1 className="font-display text-[clamp(4.5rem,14vw,12rem)] leading-[0.85] font-bold text-white tracking-tight mb-6 uppercase"
            style={{ opacity: 0, animation: "fadeUp 1s ease 0.4s forwards" }}>
            Пере<span className="text-[#C9A84C]">про</span>Шивка
          </h1>

          <p className="text-base md:text-xl text-white/80 font-light mb-4 tracking-wide"
            style={{ opacity: 0, animation: "fadeUp 1s ease 0.7s forwards" }}>
            Выездной трансформационный тренинг <span className="text-[#C9A84C] font-semibold">Дмитрия Хара</span> в Кабо-Верде
          </p>
          <p className="text-white/50 text-sm tracking-wide mb-12 max-w-lg mx-auto"
            style={{ opacity: 0, animation: "fadeUp 1s ease 0.9s forwards" }}>
            4 дня, которые помогут убрать внутренние ограничения и выйти в новую точку жизни
          </p>

          {/* Кнопки */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4"
            style={{ opacity: 0, animation: "fadeUp 1s ease 1.1s forwards" }}>
            <button onClick={() => scrollTo("contacts")}
              className="px-10 py-4 bg-[#C9A84C] text-[#0A0E14] text-xs tracking-[0.3em] uppercase font-bold hover:bg-[#E8D5A3] transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(201,168,76,0.4)]">
              Подать заявку
            </button>
            <button onClick={() => scrollTo("film")}
              className="px-8 py-4 border border-white/20 text-white/70 text-xs tracking-[0.3em] uppercase hover:border-white/50 hover:text-white transition-all duration-300">
              Смотреть фильм
            </button>
          </div>
        </div>

        {/* Нижние статы */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0A0E14] to-transparent pt-20 pb-8">
          <div className="max-w-4xl mx-auto px-6 grid grid-cols-3 gap-4" style={{ opacity: 0, animation: "fadeIn 1s ease 1.5s forwards" }}>
            {[
              { val: "4", unit: "дня", label: "интенсивной работы", color: "blue" },
              { val: "20", unit: "мест", label: "только личный отбор", color: "orange" },
              { val: "2013", unit: "год", label: "проводит программы", color: "gold" },
            ].map((s) => (
              <div key={s.val} className="text-center">
                <p className={`font-display text-3xl md:text-4xl font-bold ${ACCENT[s.color as keyof typeof ACCENT].text}`}>
                  {s.val}<span className="text-lg ml-1 opacity-70">{s.unit}</span>
                </p>
                <p className="text-white/40 text-xs mt-1 tracking-wide">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-24 right-8 animate-bounce hidden md:block">
          <Icon name="ChevronDown" size={18} className="text-white/30" />
        </div>
      </section>

      {/* ПРОБЛЕМА */}
      <section className="py-28 px-6 max-w-5xl mx-auto">
        <Reveal>
          <Label color="red">Честный вопрос</Label>
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] text-center font-bold leading-tight text-white mb-8 uppercase">
            Старые способы<br /><span className="text-white/40 font-light normal-case">больше не работают?</span>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="text-white/50 text-center max-w-2xl mx-auto leading-relaxed mb-14 text-sm">
            Можно менять стратегии, проходить обучения, больше работать — но внутри всё равно тревога, усталость, ощущение потолка и повторяющиеся сценарии. Иногда проблема не снаружи, а внутри системы.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-4">
          {[
            { icon: "TrendingUp", title: "Деньги", desc: "Потолок, рост через выгорание. Больше усилий — но не больше жизни.", color: "orange", num: "01" },
            { icon: "Activity", title: "Здоровье", desc: "Потеря энергии, хроническое напряжение. Тело сигналит о пределе.", color: "red", num: "02" },
            { icon: "Users", title: "Отношения", desc: "Одиночество, повторяющиеся сценарии. Снова и снова — одно и то же.", color: "blue", num: "03" },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 0.12}>
              <div className={`relative bg-[#0D1119] p-8 border-t-2 ${ACCENT[item.color as keyof typeof ACCENT].border} overflow-hidden group hover:scale-[1.02] transition-transform duration-300`}>
                <span className={`absolute top-4 right-4 font-display text-5xl font-bold opacity-10 ${ACCENT[item.color as keyof typeof ACCENT].text}`}>{item.num}</span>
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-5 ${ACCENT[item.color as keyof typeof ACCENT].pill}`}>
                  <Icon name={item.icon as "TrendingUp"} size={20} className={ACCENT[item.color as keyof typeof ACCENT].text} />
                </div>
                <h3 className="font-display text-2xl text-white font-bold mb-3 uppercase">{item.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ЧТО ТАКОЕ */}
      <section className="py-20 bg-[#0D1119]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <Label color="gold">Суть тренинга</Label>
            <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold text-white leading-tight mb-8 uppercase">
              Это не мотивация.<br /><span className="text-[#C9A84C] font-light normal-case">Это перепроживание себя.</span>
            </h2>
            <GoldLine />
            <p className="text-white/55 text-base leading-relaxed max-w-2xl mx-auto font-light">
              «ПерепроШивка» — авторский тренинг Дмитрия Хара, помогающий убрать внутренние ограничения, выйти из жизни «на автомате», вернуть ясность и контакт с собой настоящим.
            </p>
          </Reveal>
        </div>
      </section>

      {/* АВТОР */}
      <section id="author" className="py-28 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-[#C9A84C]/30 via-transparent to-[#0EA5E9]/20 rounded-sm" />
              <img src={DMITRY_IMG} alt="Дмитрий Хара" className="relative w-full aspect-[3/4] object-cover" />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#0A0E14]" />
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <Label>Автор тренинга</Label>
            <h2 className="font-display text-6xl font-bold text-white uppercase mb-1">Дмитрий</h2>
            <h2 className="font-display text-6xl font-bold text-[#C9A84C] uppercase mb-8">Хара</h2>
            <ul className="space-y-3 mb-10">
              {[
                { text: "Автор тренинга «ПерепроШивка»", color: "gold" },
                { text: "Писатель: «П.Ш.», «Трэш», «Сияние»", color: "blue" },
                { text: "Автор практики «Шодхан»", color: "orange" },
                { text: "Проводит программы с 2013 года", color: "gold" },
              ].map((item) => (
                <li key={item.text} className="flex items-start gap-3 text-white/65 text-sm">
                  <span className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${ACCENT[item.color as keyof typeof ACCENT].bg}`} />
                  {item.text}
                </li>
              ))}
            </ul>
            <blockquote className="border-l-4 border-[#C9A84C] pl-6 bg-[#C9A84C]/5 py-4 pr-4">
              <p className="text-base italic text-white/80 leading-relaxed font-light">
                «Невозможно придумать своё предназначение. Его можно только почувствовать».
              </p>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* ГАЛЕРЕЯ */}
      <section id="gallery" className="py-24 bg-[#07090D]">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <Label color="blue">Место силы</Label>
            <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold text-white text-center mb-4 uppercase">Cabo Verde</h2>
            <p className="text-white/45 text-center text-sm leading-relaxed max-w-2xl mx-auto mb-12">
              Атлантика, вулканические горы, белые пляжи с бирюзовой водой — не курорт, а пространство для настоящей внутренней работы.
            </p>
          </Reveal>

          <Reveal>
            <div className="relative overflow-hidden cursor-pointer mb-3 group" onClick={() => setLightbox(SUNSET_IMG)}>
              <img src={SUNSET_IMG} alt="Закат" className="w-full h-[55vh] object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07090D]/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                <div>
                  <span className={`text-[10px] tracking-[0.25em] uppercase font-bold ${ACCENT.orange.text}`}>Закат</span>
                  <p className="font-display text-2xl font-bold text-white uppercase mt-1">Над Атлантикой</p>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity w-10 h-10 bg-white/10 flex items-center justify-center">
                  <Icon name="Expand" size={16} className="text-white" />
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-3 gap-3">
            {[
              { img: BEACH_IMG, label: "Белые пляжи", sub: "Пальмы и океан", color: "blue" },
              { img: MOUNTAIN_IMG, label: "Вулканы", sub: "Дикая природа", color: "orange" },
              { img: COAST_IMG, label: "Побережье", sub: "Скалы и волны", color: "red" },
            ].map((item, i) => (
              <Reveal key={item.label} delay={i * 0.1}>
                <div className="relative overflow-hidden cursor-pointer group aspect-[4/3]" onClick={() => setLightbox(item.img)}>
                  <img src={item.img} alt={item.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className={`text-[9px] tracking-[0.2em] uppercase font-bold ${ACCENT[item.color as keyof typeof ACCENT].text}`}>{item.sub}</span>
                    <p className="font-display text-sm font-bold text-white uppercase">{item.label}</p>
                  </div>
                  <div className={`absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity ${ACCENT[item.color as keyof typeof ACCENT].bg}`} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ЧЕРЕПАШКИ */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={TURTLE_IMG} alt="Черепашки" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0E14] via-[#0A0E14]/55 to-[#0A0E14]" />
        </div>
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <Label color="blue">Символ прорыва</Label>
            <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold text-white mb-4 uppercase">
              8.08 — <span className="text-[#C9A84C] font-light normal-case">Ворота Льва</span>
            </h2>
            <GoldLine />
            <p className="text-white/55 text-base leading-relaxed font-light">
              В эти дни на берег выходят маленькие черепашки — символ прорыва, выхода из старой скорлупы и движения к новой жизни. Природа сама становится метафорой внутреннего пути.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ПРОГРАММА */}
      <section id="program" className="py-28 px-6 max-w-5xl mx-auto">
        <Reveal>
          <Label color="orange">4 дня · 6–9 августа</Label>
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold text-white text-center mb-14 uppercase">Программа</h2>
        </Reveal>
        <div className="space-y-3">
          {[
            { day: "01", title: "Обнуление", desc: "Снять всё лишнее. Прийти в контакт с собой. Освободиться от фоновых нагрузок и войти в пространство тренинга.", color: "blue", icon: "RotateCcw" },
            { day: "02", title: "Погружение", desc: "Глубокая работа с внутренними ограничениями. Выход за рамки привычных реакций и автоматизмов.", color: "orange", icon: "ArrowDown" },
            { day: "03", title: "Точка сборки", desc: "Интеграция нового опыта. Формирование нового образа себя, который будет работать в реальной жизни.", color: "red", icon: "Target" },
            { day: "04", title: "Интеграция", desc: "Закрепление изменений. Конкретные инструменты для жизни после тренинга. Выход в новую точку.", color: "gold", icon: "Rocket" },
          ].map((item, i) => (
            <Reveal key={item.day} delay={i * 0.08}>
              <div className={`group flex gap-6 items-start bg-[#0D1119] hover:bg-[#0F1621] p-7 transition-all duration-300 border-l-4 ${ACCENT[item.color as keyof typeof ACCENT].border} hover:${ACCENT[item.color as keyof typeof ACCENT].glow}`}>
                <div className={`w-12 h-12 flex items-center justify-center flex-shrink-0 ${ACCENT[item.color as keyof typeof ACCENT].pill} rounded-lg`}>
                  <Icon name={item.icon as "RotateCcw"} size={20} className={ACCENT[item.color as keyof typeof ACCENT].text} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`text-[10px] tracking-[0.25em] uppercase font-bold ${ACCENT[item.color as keyof typeof ACCENT].text}`}>День {item.day}</span>
                  </div>
                  <p className="font-display text-xl text-white font-bold uppercase mb-2">{item.title}</p>
                  <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                </div>
                <span className={`font-display text-4xl font-bold opacity-10 group-hover:opacity-25 transition-opacity flex-shrink-0 ${ACCENT[item.color as keyof typeof ACCENT].text}`}>{item.day}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* РЕЗУЛЬТАТ */}
      <section className="py-24 bg-[#0D1119]">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal>
            <Label color="blue">После тренинга</Label>
            <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold text-white text-center mb-14 uppercase">Что ты получишь</h2>
          </Reveal>
          <div className="grid md:grid-cols-5 gap-3">
            {[
              { icon: "Sun", label: "Внутреннюю ясность", color: "gold" },
              { icon: "Wind", label: "Спокойствие вместо напряжения", color: "blue" },
              { icon: "Zap", label: "Возвращение энергии", color: "orange" },
              { icon: "TrendingUp", label: "Новый взгляд на деньги", color: "red" },
              { icon: "Anchor", label: "Внутреннюю опору", color: "gold" },
            ].map((item, i) => (
              <Reveal key={item.label} delay={i * 0.08}>
                <div className={`bg-[#0A0E14] p-7 text-center hover:scale-105 transition-transform duration-300 border-b-2 ${ACCENT[item.color as keyof typeof ACCENT].border}`}>
                  <div className={`w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center ${ACCENT[item.color as keyof typeof ACCENT].pill}`}>
                    <Icon name={item.icon as "Sun"} size={22} className={ACCENT[item.color as keyof typeof ACCENT].text} />
                  </div>
                  <p className="text-white/65 text-xs leading-relaxed">{item.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ФИЛЬМ */}
      <section id="film" className="py-28 bg-[#07090D]">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <Label color="red">Смотри перед заявкой</Label>
            <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold text-white text-center mb-4 uppercase">
              Фильм «Перепрошивка»
            </h2>
            <p className="text-white/45 text-center text-sm mb-12 max-w-xl mx-auto">
              Документальный фильм о том, как устроен тренинг и что происходит с участниками изнутри.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="relative aspect-video border border-white/8 overflow-hidden shadow-[0_0_60px_rgba(14,165,233,0.1)]">
              <iframe
                src="https://www.youtube.com/embed/tcP4vghAaV0?rel=0&modestbranding=1"
                title="Фильм Перепрошивка"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ПАКЕТЫ */}
      <section id="pricing" className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <Label color="gold">Варианты участия</Label>
            <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold text-white text-center mb-3 uppercase">Выбери формат</h2>
            <p className="text-white/30 text-center text-xs tracking-widest mb-14 uppercase">Каждый следующий уровень включает всё из предыдущего + новые опции</p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-5 items-stretch">
            {[
              {
                name: "Basic", price: "1 700", popular: false, color: "blue",
                base: [
                  { icon: "BookOpen", text: "Программа тренинга (4 дня)" },
                  { icon: "UtensilsCrossed", text: "Питание на все дни" },
                  { icon: "Users", text: "Работа в группе" },
                ],
                added: [] as { icon: string; text: string }[],
              },
              {
                name: "Standard", price: "1 900", popular: true, color: "gold",
                base: [
                  { icon: "BookOpen", text: "Программа тренинга (4 дня)" },
                  { icon: "UtensilsCrossed", text: "Питание на все дни" },
                  { icon: "Users", text: "Работа в группе" },
                ],
                added: [
                  { icon: "BedDouble", text: "Проживание в отеле" },
                ],
              },
              {
                name: "Premium", price: "2 300", popular: false, color: "orange",
                base: [
                  { icon: "BookOpen", text: "Программа тренинга (4 дня)" },
                  { icon: "UtensilsCrossed", text: "Питание на все дни" },
                  { icon: "Users", text: "Работа в группе" },
                ],
                added: [
                  { icon: "BedDouble", text: "Проживание в отеле" },
                  { icon: "DoorOpen", text: "Одноместное проживание" },
                  { icon: "Star", text: "Личная работа с Дмитрием" },
                ],
              },
            ].map((pkg, i) => {
              const ac = ACCENT[pkg.color as keyof typeof ACCENT];
              return (
                <Reveal key={pkg.name} delay={i * 0.12}>
                  <div className={`relative flex flex-col h-full border ${pkg.popular ? `border-[#C9A84C] shadow-[0_0_40px_rgba(201,168,76,0.15)]` : "border-white/8"}`}>
                    {pkg.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C9A84C] text-[#0A0E14] text-[10px] tracking-[0.2em] uppercase px-5 py-1.5 font-bold whitespace-nowrap">
                        Самый популярный
                      </div>
                    )}
                    <div className={`p-7 flex flex-col flex-1 ${pkg.popular ? "bg-[#111520]" : "bg-[#0D1119]"}`}>
                      {/* Шапка */}
                      <div className="flex items-center gap-3 mb-5">
                        <div className={`w-2 h-8 ${ac.bg} rounded-full`} />
                        <p className={`font-display text-xs tracking-[0.25em] uppercase font-bold ${ac.text}`}>{pkg.name}</p>
                      </div>

                      <div className="flex items-end gap-1 mb-7 pb-6 border-b border-white/6">
                        <span className="font-display text-5xl font-bold text-white leading-none">{pkg.price}</span>
                        <span className={`text-xl mb-0.5 font-display font-bold ${ac.text}`}>€</span>
                      </div>

                      {/* Базовые — серые */}
                      <div className="space-y-3 flex-1">
                        {pkg.base.map((item) => (
                          <div key={item.text} className="flex items-center gap-3">
                            <Icon name={item.icon as "BookOpen"} size={13} className="text-white/20 flex-shrink-0" />
                            <span className="text-white/25 text-xs">{item.text}</span>
                          </div>
                        ))}
                      </div>

                      {/* Добавленные — акцентные */}
                      {pkg.added.length > 0 ? (
                        <div className={`space-y-3 mt-5 mb-6 pt-5 border-t border-white/8`}>
                          <p className={`text-[10px] tracking-[0.2em] uppercase font-bold mb-3 ${ac.text}`}>+ Дополнительно включено</p>
                          {pkg.added.map((item) => (
                            <div key={item.text} className="flex items-center gap-3">
                              <div className={`w-6 h-6 flex items-center justify-center rounded-md flex-shrink-0 ${ac.pill}`}>
                                <Icon name={item.icon as "BedDouble"} size={12} className={ac.text} />
                              </div>
                              <span className="text-white/85 text-xs font-medium">{item.text}</span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="mt-5 mb-6 pt-5 border-t border-white/6">
                          <p className="text-[10px] tracking-[0.2em] uppercase text-white/20 font-medium">Базовый формат</p>
                        </div>
                      )}

                      <button
                        onClick={() => document.getElementById("contacts")?.scrollIntoView({ behavior: "smooth" })}
                        className={`w-full py-4 text-xs tracking-[0.2em] uppercase font-bold transition-all duration-300 ${
                          pkg.popular
                            ? "bg-[#C9A84C] text-[#0A0E14] hover:bg-[#E8D5A3]"
                            : `border ${ac.border} ${ac.text} hover:${ac.bg} hover:text-[#0A0E14]`
                        }`}
                      >
                        Выбрать
                      </button>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* ДЕТИ */}
          <Reveal delay={0.3}>
            <div className="mt-6 border border-white/8 bg-[#0D1119] p-7 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 flex items-center justify-center rounded-xl flex-shrink-0 ${ACCENT.blue.pill}`}>
                  <Icon name="Baby" size={22} className={ACCENT.blue.text} />
                </div>
                <div>
                  <p className="font-display text-xl text-white font-bold uppercase mb-1">Детский лагерь</p>
                  <p className="text-white/40 text-sm">5–14 лет · можно приехать с детьми</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-display text-3xl font-bold text-white">100 <span className={ACCENT.blue.text}>€</span></p>
                <p className="text-white/30 text-xs">за 4 дня</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ЛОГИСТИКА */}
      <section className="py-20 bg-[#0D1119]">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <Label color="orange">Перелёт и трансфер</Label>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold text-white text-center mb-12 uppercase">Как добраться</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { icon: "Plane", title: "Через Лиссабон", desc: "Удобные рейсы из большинства городов России и СНГ через Лиссабон.", color: "blue" },
              { icon: "Navigation", title: "Через Касабланку", desc: "Альтернативный маршрут — через Марокко. Организаторы помогут с выбором.", color: "orange" },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.15}>
                <div className={`bg-[#0A0E14] border border-white/6 p-8 hover:border-white/15 transition-colors duration-300 border-t-2 ${ACCENT[item.color as keyof typeof ACCENT].border}`}>
                  <div className={`w-10 h-10 flex items-center justify-center rounded-lg mb-4 ${ACCENT[item.color as keyof typeof ACCENT].pill}`}>
                    <Icon name={item.icon as "Plane"} size={18} className={ACCENT[item.color as keyof typeof ACCENT].text} />
                  </div>
                  <p className="font-display text-xl text-white font-bold mb-2 uppercase">{item.title}</p>
                  <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3}>
            <p className="text-center text-white/25 text-xs mt-8 tracking-wide">
              Организаторы помогают с перелётом и встречают участников на месте
            </p>
          </Reveal>
        </div>
      </section>

      {/* ФИНАЛ */}
      <section id="contacts" className="relative py-36 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HERO_IMG})`, opacity: 0.2 }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0E14] via-[#0A0E14]/40 to-[#0A0E14]" />
        <div className="relative max-w-2xl mx-auto px-6 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-[#EF4444]/15 border border-[#EF4444]/40 text-[#EF4444] text-xs tracking-[0.2em] uppercase mb-10 font-bold">
              <Icon name="AlertCircle" size={12} />
              Только 20 мест
            </div>
            <h2 className="font-display text-[clamp(3rem,8vw,6rem)] font-bold text-white leading-tight mb-6 uppercase">
              Начни<br /><span className="text-[#C9A84C] font-light normal-case">здесь</span>
            </h2>
            <GoldLine />
            <p className="text-white/50 text-base leading-relaxed mb-4 font-light">
              Каждый участник проходит личное собеседование перед подтверждением участия.
            </p>
            <p className="text-white/20 text-xs mb-12 tracking-widest uppercase">6–9 августа · Кабо-Верде</p>
            <a
              href="https://t.me/dmitriyhara"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-12 py-5 bg-[#C9A84C] text-[#0A0E14] text-xs tracking-[0.3em] uppercase font-bold hover:bg-[#E8D5A3] transition-all duration-300 hover:scale-105 shadow-[0_0_40px_rgba(201,168,76,0.3)]"
            >
              <Icon name="Send" size={14} />
              Подать заявку
            </a>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-white/5 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-display text-[#C9A84C] tracking-widest uppercase text-sm font-bold">ПерепроШивка</p>
          <p className="text-white/20 text-xs tracking-widest uppercase">Cabo Verde · 6–9 августа 2025</p>
          <p className="text-white/20 text-xs">© Дмитрий Хара</p>
        </div>
      </footer>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}