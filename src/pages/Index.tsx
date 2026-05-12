import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/c2c2486d-0d04-4aab-b2bb-3d076133e4f2/files/24b68e99-d231-4a93-afcf-dc8f151d8866.jpg";
const DMITRY_IMG = "https://cdn.poehali.dev/projects/c2c2486d-0d04-4aab-b2bb-3d076133e4f2/files/e934a2ec-e619-4ca7-9d66-89274a04d159.jpg";
const TURTLE_IMG = "https://cdn.poehali.dev/projects/c2c2486d-0d04-4aab-b2bb-3d076133e4f2/files/c5c845a1-690e-40f4-bd4f-d28ed0d2d67d.jpg";
const SUNSET_IMG = "https://cdn.poehali.dev/projects/c2c2486d-0d04-4aab-b2bb-3d076133e4f2/files/46e52d9b-e85f-4937-b8ec-f6649b9e057e.jpg";
const BEACH_IMG = "https://cdn.poehali.dev/projects/c2c2486d-0d04-4aab-b2bb-3d076133e4f2/files/72640b8b-8850-4b7e-9e95-588d17bff73e.jpg";
const MOUNTAIN_IMG = "https://cdn.poehali.dev/projects/c2c2486d-0d04-4aab-b2bb-3d076133e4f2/files/284f6009-1382-47b3-bacc-919e92a086e5.jpg";
const COAST_IMG = "https://cdn.poehali.dev/projects/c2c2486d-0d04-4aab-b2bb-3d076133e4f2/files/81b6f36d-1dac-4569-b6f5-5735f5d74a69.jpg";

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
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
      transform: visible ? "translateY(0)" : "translateY(48px)",
      transition: `opacity 0.9s ease ${delay}s, transform 0.9s ease ${delay}s`,
    }}>
      {children}
    </div>
  );
}

const GoldLine = () => (
  <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent mx-auto my-8" />
);

const Label = ({ children }: { children: React.ReactNode }) => (
  <p className="text-xs tracking-[0.3em] uppercase text-[#C9A84C] text-center mb-4 font-medium">{children}</p>
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
          <button className="absolute top-6 right-6 text-[#C9A84C]"><Icon name="X" size={28} /></button>
          <img src={lightbox} className="max-h-[90vh] max-w-[90vw] object-contain" />
        </div>
      )}

      {/* NAV */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrollY > 60 ? "bg-[#0A0E14]/95 backdrop-blur-sm border-b border-[#C9A84C]/10" : ""}`}>
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <button onClick={() => scrollTo("hero")} className="font-display text-[#C9A84C] text-sm tracking-[0.2em] uppercase font-semibold">ПерепроШивка</button>
          <button className="md:hidden text-[#C9A84C]" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
          <div className={`${menuOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row absolute md:static top-full left-0 right-0 md:top-auto bg-[#0A0E14]/98 md:bg-transparent gap-6 md:gap-8 p-6 md:p-0 items-start md:items-center border-b border-[#C9A84C]/10 md:border-0`}>
            {[["program", "Программа"], ["gallery", "Место"], ["film", "Фильм"], ["pricing", "Участие"], ["contacts", "Заявка"]].map(([id, label]) => (
              <button key={id} onClick={() => scrollTo(id)} className="text-xs tracking-[0.15em] uppercase text-[#A89878] hover:text-[#C9A84C] transition-colors duration-300">{label}</button>
            ))}
            <button onClick={() => scrollTo("contacts")} className="px-5 py-2 border border-[#C9A84C]/60 text-[#C9A84C] text-xs tracking-[0.15em] uppercase hover:bg-[#C9A84C]/10 transition-all duration-300">
              Подать заявку
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HERO_IMG})`, transform: `translateY(${scrollY * 0.35}px)` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0E14]/60 via-[#0A0E14]/30 to-[#0A0E14]" />
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-20">
          <div style={{ opacity: 0, animation: "fadeIn 1.5s ease 0.2s forwards" }}
            className="inline-block px-4 py-1.5 border border-[#C9A84C]/40 text-[#C9A84C] text-xs tracking-[0.35em] uppercase mb-10">
            6–9 августа · Атлантический океан
          </div>
          <h1 className="font-display text-[clamp(4.5rem,14vw,12rem)] leading-[0.85] font-bold text-white tracking-tight mb-6 uppercase"
            style={{ opacity: 0, animation: "fadeUp 1s ease 0.4s forwards" }}>
            Пере<span className="text-[#C9A84C]">про</span>Шивка
          </h1>
          <p className="text-base md:text-lg text-[#D4C4A0] font-light mb-4 tracking-wide"
            style={{ opacity: 0, animation: "fadeUp 1s ease 0.7s forwards" }}>
            Выездной трансформационный тренинг <span className="text-[#C9A84C]">Дмитрия Хара</span> в Кабо-Верде
          </p>
          <p className="text-[#A89878] text-sm tracking-wide mb-12 max-w-lg mx-auto"
            style={{ opacity: 0, animation: "fadeUp 1s ease 0.9s forwards" }}>
            4 дня, которые помогут убрать внутренние ограничения и выйти в новую точку жизни
          </p>
          <button onClick={() => scrollTo("contacts")}
            className="px-10 py-4 bg-[#C9A84C] text-[#0A0E14] text-xs tracking-[0.3em] uppercase font-bold hover:bg-[#E8D5A3] transition-all duration-300 hover:scale-105"
            style={{ opacity: 0, animation: "fadeUp 1s ease 1.1s forwards" }}>
            Подать заявку
          </button>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={20} className="text-[#C9A84C]/50" />
        </div>
      </section>

      {/* ПРОБЛЕМА */}
      <section className="py-32 px-6 max-w-5xl mx-auto">
        <Reveal>
          <Label>Честный вопрос</Label>
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] text-center font-bold leading-tight text-white mb-8 uppercase">
            Старые способы<br /><span className="text-[#A89878] font-light normal-case">больше не работают?</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-[#A89878] text-center max-w-2xl mx-auto leading-relaxed mb-16 text-sm">
            Можно менять стратегии, проходить обучения, больше работать — но внутри всё равно тревога, усталость, ощущение потолка и повторяющиеся сценарии. Иногда проблема не снаружи, а внутри системы.
          </p>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-px bg-[#C9A84C]/10">
          {[
            { icon: "TrendingUp", title: "Деньги", desc: "Потолок, рост через выгорание. Больше усилий — но не больше жизни." },
            { icon: "Heart", title: "Здоровье", desc: "Потеря энергии, хроническое напряжение. Тело сигналит о пределе." },
            { icon: "Users", title: "Отношения", desc: "Одиночество, повторяющиеся сценарии. Снова и снова — одно и то же." },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 0.15}>
              <div className="bg-[#0F1520] p-10 h-full">
                <Icon name={item.icon as "TrendingUp"} size={22} className="text-[#C9A84C] mb-5" />
                <h3 className="font-display text-2xl text-white font-bold mb-3 uppercase">{item.title}</h3>
                <p className="text-[#7A7068] text-sm leading-relaxed">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ЧТО ТАКОЕ */}
      <section className="py-24 bg-[#0D1119]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <Label>Суть тренинга</Label>
            <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold text-white leading-tight mb-8 uppercase">
              Это не мотивация.<br /><span className="text-[#C9A84C] font-light normal-case">Это перепроживание себя.</span>
            </h2>
            <GoldLine />
            <p className="text-[#A89878] text-base leading-relaxed max-w-2xl mx-auto font-light">
              «ПерепроШивка» — авторский тренинг Дмитрия Хара, помогающий убрать внутренние ограничения, выйти из жизни «на автомате», вернуть ясность и контакт с собой настоящим.
            </p>
          </Reveal>
        </div>
      </section>

      {/* АВТОР */}
      <section id="author" className="py-32 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-3 border border-[#C9A84C]/20" />
              <img src={DMITRY_IMG} alt="Дмитрий Хара" className="w-full aspect-[3/4] object-cover" />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#0A0E14]" />
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <Label>Автор тренинга</Label>
            <h2 className="font-display text-6xl font-bold text-white uppercase mb-1">Дмитрий</h2>
            <h2 className="font-display text-6xl font-bold text-[#C9A84C] uppercase mb-8">Хара</h2>
            <ul className="space-y-4 mb-10">
              {[
                "Автор тренинга «ПерепроШивка»",
                "Писатель: «П.Ш.», «Трэш», «Сияние»",
                "Автор практики «Шодхан»",
                "Проводит программы с 2013 года",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[#A89878] text-sm">
                  <span className="w-4 h-px bg-[#C9A84C] mt-2.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <blockquote className="border-l-2 border-[#C9A84C]/40 pl-6">
              <p className="text-lg italic text-[#D4C4A0] leading-relaxed font-light">
                «Невозможно придумать своё предназначение. Его можно только почувствовать».
              </p>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* ГАЛЕРЕЯ */}
      <section id="gallery" className="py-24 bg-[#0D1119]">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <Label>Место силы</Label>
            <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold text-white text-center mb-4 uppercase">Cabo Verde</h2>
            <p className="text-[#A89878] text-center text-sm leading-relaxed max-w-2xl mx-auto mb-12">
              Не курортный отдых, а пространство без шума и привычных сценариев. Атлантика, вулканические горы, белые пляжи — всё здесь становится частью внутренней трансформации.
            </p>
          </Reveal>
          <Reveal>
            <div className="relative overflow-hidden cursor-pointer mb-3 group" onClick={() => setLightbox(SUNSET_IMG)}>
              <img src={SUNSET_IMG} alt="Закат" className="w-full h-[55vh] object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E14]/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="font-display text-xl font-semibold text-white uppercase tracking-wider">Закат над Атлантикой</p>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <Icon name="Expand" size={20} className="text-white/70" />
              </div>
            </div>
          </Reveal>
          <div className="grid grid-cols-3 gap-3">
            {[
              { img: BEACH_IMG, label: "Белые пляжи" },
              { img: MOUNTAIN_IMG, label: "Вулканы" },
              { img: COAST_IMG, label: "Побережье" },
            ].map((item, i) => (
              <Reveal key={item.label} delay={i * 0.1}>
                <div className="relative overflow-hidden cursor-pointer group aspect-[4/3]" onClick={() => setLightbox(item.img)}>
                  <img src={item.img} alt={item.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E14]/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <p className="font-display text-sm font-semibold text-white uppercase tracking-wider">{item.label}</p>
                  </div>
                  <div className="absolute inset-0 border border-transparent group-hover:border-[#C9A84C]/30 transition-all duration-300" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ЧЕРЕПАШКИ */}
      <section className="relative py-36 overflow-hidden">
        <div className="absolute inset-0">
          <img src={TURTLE_IMG} alt="Черепашки" className="w-full h-full object-cover opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0E14] via-[#0A0E14]/60 to-[#0A0E14]" />
        </div>
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <Label>Символ прорыва</Label>
            <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold text-white mb-4 uppercase">
              8.08 — <span className="text-[#C9A84C] font-light normal-case">Ворота Льва</span>
            </h2>
            <GoldLine />
            <p className="text-[#A89878] text-base leading-relaxed font-light">
              В эти дни на берег выходят маленькие черепашки — символ прорыва, выхода из старой скорлупы и движения к новой жизни. Природа сама становится метафорой внутреннего пути.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ПРОГРАММА */}
      <section id="program" className="py-32 px-6 max-w-5xl mx-auto">
        <Reveal>
          <Label>4 дня · 6–9 августа</Label>
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold text-white text-center mb-16 uppercase">Программа</h2>
        </Reveal>
        <div className="space-y-px">
          {[
            { day: "01", title: "Обнуление", desc: "Снять всё лишнее. Прийти в контакт с собой. Освободиться от фоновых нагрузок и войти в пространство тренинга." },
            { day: "02", title: "Погружение", desc: "Глубокая работа с внутренними ограничениями. Выход за рамки привычных реакций и автоматизмов." },
            { day: "03", title: "Точка сборки", desc: "Интеграция нового опыта. Формирование нового образа себя, который будет работать в реальной жизни." },
            { day: "04", title: "Интеграция", desc: "Закрепление изменений. Конкретные инструменты для жизни после тренинга. Выход в новую точку." },
          ].map((item, i) => (
            <Reveal key={item.day} delay={i * 0.1}>
              <div className="group flex gap-8 items-start bg-[#0D1119] hover:bg-[#0F1520] p-8 transition-all duration-300 border-l-2 border-transparent hover:border-[#C9A84C]/50">
                <span className="font-display text-5xl text-[#C9A84C]/15 group-hover:text-[#C9A84C]/40 transition-colors font-bold leading-none flex-shrink-0">{item.day}</span>
                <div>
                  <p className="font-display text-2xl text-white font-semibold mb-2 uppercase">День {item.day} — {item.title}</p>
                  <p className="text-[#7A7068] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* РЕЗУЛЬТАТ */}
      <section className="py-24 bg-[#0D1119]">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal>
            <Label>После тренинга</Label>
            <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold text-white text-center mb-16 uppercase">Что ты получишь</h2>
          </Reveal>
          <div className="grid md:grid-cols-5 gap-px bg-[#C9A84C]/10">
            {[
              { icon: "Sun", label: "Внутреннюю ясность" },
              { icon: "Wind", label: "Спокойствие вместо напряжения" },
              { icon: "Zap", label: "Возвращение энергии" },
              { icon: "ArrowUpRight", label: "Новый взгляд на деньги" },
              { icon: "Anchor", label: "Внутреннюю опору" },
            ].map((item, i) => (
              <Reveal key={item.label} delay={i * 0.1}>
                <div className="bg-[#0D1119] p-8 text-center hover:bg-[#111827] transition-colors duration-300">
                  <Icon name={item.icon as "Sun"} size={26} className="text-[#C9A84C] mx-auto mb-4" />
                  <p className="text-[#A89878] text-xs leading-relaxed">{item.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ФИЛЬМ */}
      <section id="film" className="py-32 bg-[#07090D]">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <Label>Смотри перед заявкой</Label>
            <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold text-white text-center mb-4 uppercase">
              Фильм «Перепрошивка»
            </h2>
            <p className="text-[#A89878] text-center text-sm mb-12 max-w-xl mx-auto">
              Документальный фильм о том, как устроен тренинг и что происходит с участниками изнутри.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="relative aspect-video border border-[#C9A84C]/20 overflow-hidden">
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
      <section id="pricing" className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <Label>Варианты участия</Label>
            <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold text-white text-center mb-3 uppercase">Выбери формат</h2>
            <p className="text-[#5A5248] text-center text-xs tracking-widest mb-16 uppercase">Каждый следующий уровень включает всё из предыдущего + новые опции</p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {[
              {
                name: "Basic", price: "1 700", popular: false,
                base: [
                  { icon: "BookOpen", text: "Программа тренинга (4 дня)" },
                  { icon: "UtensilsCrossed", text: "Питание на все дни" },
                  { icon: "Users", text: "Работа в группе" },
                ],
                added: [] as { icon: string; text: string }[],
              },
              {
                name: "Standard", price: "1 900", popular: true,
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
                name: "Premium", price: "2 300", popular: false,
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
            ].map((pkg, i) => (
              <Reveal key={pkg.name} delay={i * 0.15}>
                <div className={`relative flex flex-col h-full ${pkg.popular
                  ? "border-2 border-[#C9A84C] shadow-[0_0_50px_rgba(201,168,76,0.1)]"
                  : "border border-[#C9A84C]/15"}`}>
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C9A84C] text-[#0A0E14] text-[10px] tracking-[0.2em] uppercase px-5 py-1.5 font-bold whitespace-nowrap">
                      Самый популярный
                    </div>
                  )}
                  <div className={`p-8 flex flex-col flex-1 ${pkg.popular ? "bg-[#111520]" : "bg-[#0D1119]"}`}>
                    <p className="font-display text-xs tracking-[0.25em] uppercase text-[#C9A84C] mb-3 font-medium">{pkg.name}</p>
                    <div className="flex items-end gap-1 mb-8 pb-6 border-b border-[#C9A84C]/10">
                      <span className="font-display text-5xl font-bold text-white leading-none">{pkg.price}</span>
                      <span className="text-[#C9A84C] text-xl mb-0.5 font-display">€</span>
                    </div>

                    {/* Базовые — серые */}
                    <div className="space-y-3 mb-0 flex-1">
                      {pkg.base.map((item) => (
                        <div key={item.text} className="flex items-center gap-3">
                          <Icon name={item.icon as "BookOpen"} size={13} className="text-[#3A3530] flex-shrink-0" />
                          <span className="text-[#4A4540] text-xs">{item.text}</span>
                        </div>
                      ))}
                    </div>

                    {/* Дополнительные — золотые */}
                    {pkg.added.length > 0 ? (
                      <div className={`space-y-3 mt-5 mb-6 pt-5 border-t ${pkg.popular ? "border-[#C9A84C]/30" : "border-[#C9A84C]/15"}`}>
                        <p className="text-[10px] tracking-[0.2em] uppercase text-[#C9A84C]/60 font-medium mb-3">+ Дополнительно включено</p>
                        {pkg.added.map((item) => (
                          <div key={item.text} className="flex items-center gap-3">
                            <div className={`w-5 h-5 flex items-center justify-center rounded-sm flex-shrink-0 ${pkg.popular ? "bg-[#C9A84C]/25" : "bg-[#C9A84C]/12"}`}>
                              <Icon name={item.icon as "BedDouble"} size={11} className="text-[#C9A84C]" />
                            </div>
                            <span className="text-[#D4C4A0] text-xs font-medium">{item.text}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="mt-5 mb-6 pt-5 border-t border-[#C9A84C]/10">
                        <p className="text-[10px] tracking-[0.2em] uppercase text-[#3A3530] font-medium">Базовый формат</p>
                      </div>
                    )}

                    <button
                      onClick={() => document.getElementById("contacts")?.scrollIntoView({ behavior: "smooth" })}
                      className={`w-full py-4 text-xs tracking-[0.2em] uppercase font-bold transition-all duration-300 ${
                        pkg.popular
                          ? "bg-[#C9A84C] text-[#0A0E14] hover:bg-[#E8D5A3]"
                          : "border border-[#C9A84C]/30 text-[#C9A84C] hover:bg-[#C9A84C]/10"
                      }`}
                    >
                      Выбрать
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* ДЕТИ */}
          <Reveal delay={0.3}>
            <div className="mt-8 border border-[#C9A84C]/10 bg-[#0D1119] p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 border border-[#C9A84C]/20 flex items-center justify-center flex-shrink-0">
                  <Icon name="Baby" size={22} className="text-[#C9A84C]" />
                </div>
                <div>
                  <p className="font-display text-xl text-white font-semibold uppercase mb-1">Детский лагерь</p>
                  <p className="text-[#7A7068] text-sm">5–14 лет · можно приехать с детьми</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-display text-3xl font-bold text-white">100 <span className="text-[#C9A84C]">€</span></p>
                <p className="text-[#7A7068] text-xs">за 4 дня</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ЛОГИСТИКА */}
      <section className="py-24 bg-[#0D1119]">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <Label>Перелёт и трансфер</Label>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold text-white text-center mb-12 uppercase">Как добраться</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: "Plane", title: "Через Лиссабон", desc: "Удобные рейсы из большинства городов России и СНГ через Лиссабон." },
              { icon: "Navigation", title: "Через Касабланку", desc: "Альтернативный маршрут — через Марокко. Организаторы помогут с выбором." },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.15}>
                <div className="bg-[#0A0E14] border border-[#C9A84C]/10 p-8 hover:border-[#C9A84C]/30 transition-colors duration-300">
                  <Icon name={item.icon as "Plane"} size={22} className="text-[#C9A84C] mb-4" />
                  <p className="font-display text-xl text-white font-semibold mb-2 uppercase">{item.title}</p>
                  <p className="text-[#7A7068] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3}>
            <p className="text-center text-[#5A5248] text-xs mt-8 tracking-wide">
              Организаторы помогают с перелётом и встречают участников на месте
            </p>
          </Reveal>
        </div>
      </section>

      {/* ФИНАЛ */}
      <section id="contacts" className="relative py-40 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${COAST_IMG})`, opacity: 0.18 }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0E14] via-transparent to-[#0A0E14]" />
        <div className="relative max-w-2xl mx-auto px-6 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-5 py-2 border border-[#C9A84C]/30 text-[#C9A84C] text-xs tracking-[0.2em] uppercase mb-10">
              <Icon name="AlertCircle" size={12} />
              Только 20 мест
            </div>
            <h2 className="font-display text-[clamp(3rem,8vw,6rem)] font-bold text-white leading-tight mb-6 uppercase">
              Начни<br /><span className="text-[#C9A84C] font-light normal-case">здесь</span>
            </h2>
            <GoldLine />
            <p className="text-[#A89878] text-base leading-relaxed mb-4 font-light">
              Каждый участник проходит личное собеседование перед подтверждением участия.
            </p>
            <p className="text-[#3A3530] text-xs mb-12 tracking-widest uppercase">6–9 августа · Кабо-Верде</p>
            <a
              href="https://t.me/dmitriyhara"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-12 py-5 bg-[#C9A84C] text-[#0A0E14] text-xs tracking-[0.3em] uppercase font-bold hover:bg-[#E8D5A3] transition-all duration-300 hover:scale-105"
            >
              <Icon name="Send" size={14} />
              Подать заявку
            </a>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-[#C9A84C]/10 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-display text-[#C9A84C] tracking-widest uppercase text-sm font-semibold">ПерепроШивка</p>
          <p className="text-[#3A3530] text-xs tracking-widest uppercase">Cabo Verde · 6–9 августа 2025</p>
          <p className="text-[#3A3530] text-xs">© Дмитрий Хара</p>
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
