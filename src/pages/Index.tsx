import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/c2c2486d-0d04-4aab-b2bb-3d076133e4f2/files/24b68e99-d231-4a93-afcf-dc8f151d8866.jpg";
const DMITRY_IMG = "https://cdn.poehali.dev/projects/c2c2486d-0d04-4aab-b2bb-3d076133e4f2/files/e934a2ec-e619-4ca7-9d66-89274a04d159.jpg";
const TURTLE_IMG = "https://cdn.poehali.dev/projects/c2c2486d-0d04-4aab-b2bb-3d076133e4f2/files/c5c845a1-690e-40f4-bd4f-d28ed0d2d67d.jpg";

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.12 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, visible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(48px)",
        transition: `opacity 0.9s ease ${delay}s, transform 0.9s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

const GoldLine = () => (
  <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent mx-auto my-8" />
);

export default function Index() {
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="bg-[#0A0E14] text-[#E8E0D0] font-sans overflow-x-hidden">

      {/* NAV */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrollY > 60 ? "bg-[#0A0E14]/95 backdrop-blur-sm border-b border-[#C9A84C]/10" : ""}`}>
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <button onClick={() => scrollTo("hero")} className="font-display text-[#C9A84C] text-lg tracking-widest uppercase">ПерепроШивка</button>
          <button
            className="md:hidden text-[#C9A84C]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
          <div className={`${menuOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row absolute md:static top-full left-0 right-0 md:top-auto bg-[#0A0E14]/98 md:bg-transparent gap-6 md:gap-8 p-6 md:p-0 items-start md:items-center border-b border-[#C9A84C]/10 md:border-0`}>
            {[["program", "Программа"], ["author", "Автор"], ["pricing", "Участие"], ["contacts", "Заявка"]].map(([id, label]) => (
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
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${HERO_IMG})`,
            transform: `translateY(${scrollY * 0.35}px)`,
            transition: "transform 0.1s linear",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0E14]/60 via-[#0A0E14]/40 to-[#0A0E14]" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
          <div
            className="inline-block px-4 py-1.5 border border-[#C9A84C]/40 text-[#C9A84C] text-xs tracking-[0.3em] uppercase mb-10"
            style={{ opacity: 0, animation: "fadeIn 1.5s ease 0.2s forwards" }}
          >
            6–9 августа · Атлантический океан
          </div>
          <h1
            className="font-display text-[clamp(4rem,12vw,10rem)] leading-[0.88] font-light text-white tracking-tight mb-6"
            style={{ opacity: 0, animation: "fadeUp 1s ease 0.4s forwards" }}
          >
            Пере<br /><em className="text-[#C9A84C] not-italic">про</em>Шивка
          </h1>
          <p
            className="font-display text-xl md:text-2xl text-[#D4C4A0] font-light italic mb-4"
            style={{ opacity: 0, animation: "fadeUp 1s ease 0.7s forwards" }}
          >
            Выездной трансформационный тренинг Дмитрия Хара в Кабо-Верде
          </p>
          <p
            className="text-[#A89878] text-sm tracking-wide mb-12 max-w-lg mx-auto"
            style={{ opacity: 0, animation: "fadeUp 1s ease 0.9s forwards" }}
          >
            4 дня, которые помогут убрать внутренние ограничения и выйти в новую точку жизни
          </p>
          <button
            onClick={() => scrollTo("contacts")}
            className="px-10 py-4 bg-[#C9A84C] text-[#0A0E14] text-xs tracking-[0.25em] uppercase font-semibold hover:bg-[#E8D5A3] transition-all duration-300 hover:scale-105"
            style={{ opacity: 0, animation: "fadeUp 1s ease 1.1s forwards" }}
          >
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
          <p className="text-xs tracking-[0.3em] uppercase text-[#C9A84C] text-center mb-6">Честный вопрос</p>
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] text-center font-light leading-tight text-white mb-8">
            Старые способы<br /><em className="text-[#D4C4A0] italic">больше не работают?</em>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-[#A89878] text-center max-w-2xl mx-auto leading-relaxed mb-16">
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
                <Icon name={item.icon as "TrendingUp"} size={24} className="text-[#C9A84C] mb-6" />
                <h3 className="font-display text-2xl text-white font-light mb-4">{item.title}</h3>
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
            <p className="text-xs tracking-[0.3em] uppercase text-[#C9A84C] mb-6">Суть тренинга</p>
            <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-light text-white leading-tight mb-8">
              Это не мотивация.<br /><em className="italic text-[#C9A84C]">Это перепроживание себя.</em>
            </h2>
            <GoldLine />
            <p className="text-[#A89878] text-lg leading-relaxed max-w-2xl mx-auto font-light">
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
              <img src={DMITRY_IMG} alt="Дмитрий Хара" className="w-full aspect-[3/4] object-cover grayscale-[20%]" />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#0A0E14]" />
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xs tracking-[0.3em] uppercase text-[#C9A84C] mb-6">Автор тренинга</p>
            <h2 className="font-display text-5xl font-light text-white mb-2">Дмитрий</h2>
            <h2 className="font-display text-5xl font-light text-[#C9A84C] mb-8">Хара</h2>
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
              <p className="font-display text-xl italic text-[#D4C4A0] leading-relaxed font-light">
                «Невозможно придумать своё предназначение. Его можно только почувствовать».
              </p>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* КАБО-ВЕРДЕ */}
      <section className="py-24 bg-[#0D1119]">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <p className="text-xs tracking-[0.3em] uppercase text-[#C9A84C] text-center mb-6">Место силы</p>
            <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-light text-white text-center mb-8">
              Почему <em className="italic text-[#C9A84C]">Кабо-Верде</em>
            </h2>
            <GoldLine />
            <p className="text-[#A89878] text-center text-lg leading-relaxed max-w-2xl mx-auto font-light">
              Не курортный отдых, а пространство без шума и привычных сценариев. Атлантика становится частью внутренней трансформации — её мощь и бесконечность работают вместе с тобой.
            </p>
          </Reveal>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-[#C9A84C]/10">
            {["Океан", "Скалы", "Ветер", "Звёзды"].map((item, i) => (
              <Reveal key={item} delay={i * 0.1}>
                <div className="bg-[#0D1119] px-6 py-10 text-center">
                  <p className="font-display text-2xl text-[#C9A84C] font-light">{item}</p>
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
            <p className="text-xs tracking-[0.3em] uppercase text-[#C9A84C] mb-6">Символ прорыва</p>
            <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-light text-white mb-4">
              8.08 — <em className="italic text-[#C9A84C]">Ворота Льва</em>
            </h2>
            <GoldLine />
            <p className="text-[#A89878] text-lg leading-relaxed font-light">
              В эти дни на берег выходят маленькие черепашки — символ прорыва, выхода из старой скорлупы и движения к новой жизни. Природа сама становится метафорой внутреннего пути.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ПРОГРАММА */}
      <section id="program" className="py-32 px-6 max-w-5xl mx-auto">
        <Reveal>
          <p className="text-xs tracking-[0.3em] uppercase text-[#C9A84C] text-center mb-6">4 дня · 6–9 августа</p>
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-light text-white text-center mb-16">
            Программа
          </h2>
        </Reveal>
        <div className="space-y-px">
          {[
            { day: "01", title: "Обнуление", desc: "Снять всё лишнее. Прийти в контакт с собой. Освободиться от фоновых нагрузок и войти в пространство тренинга." },
            { day: "02", title: "Погружение", desc: "Глубокая работа с внутренними ограничениями. Выход за рамки привычных реакций и автоматизмов." },
            { day: "03", title: "Точка сборки", desc: "Интеграция нового опыта. Формирование нового образа себя, который будет работать в реальной жизни." },
            { day: "04", title: "Интеграция", desc: "Закрепление изменений. Конкретные инструменты для жизни после тренинга. Выход в новую точку." },
          ].map((item, i) => (
            <Reveal key={item.day} delay={i * 0.1}>
              <div className="group flex gap-8 items-start bg-[#0D1119] hover:bg-[#0F1520] p-8 transition-colors duration-300 border-l-2 border-transparent hover:border-[#C9A84C]/50">
                <span className="font-display text-5xl text-[#C9A84C]/15 group-hover:text-[#C9A84C]/40 transition-colors font-light leading-none flex-shrink-0">{item.day}</span>
                <div>
                  <p className="font-display text-2xl text-white font-light mb-2">День {item.day} — {item.title}</p>
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
            <p className="text-xs tracking-[0.3em] uppercase text-[#C9A84C] text-center mb-6">После тренинга</p>
            <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-light text-white text-center mb-16">
              Что ты получишь
            </h2>
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
                  <Icon name={item.icon as "Sun"} size={28} className="text-[#C9A84C] mx-auto mb-4" />
                  <p className="text-[#A89878] text-xs leading-relaxed">{item.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ПАКЕТЫ */}
      <section id="pricing" className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="text-xs tracking-[0.3em] uppercase text-[#C9A84C] text-center mb-6">Варианты участия</p>
            <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-light text-white text-center mb-16">
              Выбери формат
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Basic",
                price: "1 700",
                popular: false,
                items: ["Программа тренинга (4 дня)", "Питание на все дни", "Работа в группе"],
              },
              {
                name: "Standard",
                price: "1 900",
                popular: true,
                items: ["Программа тренинга (4 дня)", "Питание на все дни", "Проживание в отеле", "Работа в группе"],
              },
              {
                name: "Premium",
                price: "2 300",
                popular: false,
                items: ["Программа тренинга (4 дня)", "Питание на все дни", "Одноместное проживание", "Личная работа с Дмитрием"],
              },
            ].map((pkg, i) => (
              <Reveal key={pkg.name} delay={i * 0.15}>
                <div className={`relative flex flex-col h-full ${pkg.popular ? "border border-[#C9A84C]/60" : "border border-[#C9A84C]/10"}`}>
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C9A84C] text-[#0A0E14] text-[10px] tracking-[0.2em] uppercase px-4 py-1 font-semibold whitespace-nowrap">
                      Самый популярный
                    </div>
                  )}
                  <div className={`p-8 flex flex-col flex-1 ${pkg.popular ? "bg-[#111520]" : "bg-[#0D1119]"}`}>
                    <p className="text-xs tracking-[0.2em] uppercase text-[#C9A84C] mb-4">{pkg.name}</p>
                    <div className="flex items-end gap-1 mb-8">
                      <span className="font-display text-5xl font-light text-white">{pkg.price}</span>
                      <span className="text-[#C9A84C] text-2xl mb-1">€</span>
                    </div>
                    <ul className="space-y-3 flex-1 mb-8">
                      {pkg.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-[#7A7068] text-sm">
                          <Icon name="Check" size={14} className="text-[#C9A84C] mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => document.getElementById("contacts")?.scrollIntoView({ behavior: "smooth" })}
                      className={`w-full py-3.5 text-xs tracking-[0.2em] uppercase transition-all duration-300 ${
                        pkg.popular
                          ? "bg-[#C9A84C] text-[#0A0E14] font-semibold hover:bg-[#E8D5A3]"
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
                <Icon name="Baby" size={28} className="text-[#C9A84C]" />
                <div>
                  <p className="text-white font-light font-display text-xl">Детский лагерь</p>
                  <p className="text-[#7A7068] text-sm">5–14 лет · можно приехать с детьми</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-display text-3xl font-light text-white">100 <span className="text-[#C9A84C]">€</span></p>
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
            <p className="text-xs tracking-[0.3em] uppercase text-[#C9A84C] text-center mb-6">Перелёт и трансфер</p>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-light text-white text-center mb-12">
              Как добраться
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: "Plane", title: "Через Лиссабон", desc: "Удобные рейсы из большинства городов России и СНГ через Лиссабон." },
              { icon: "Navigation", title: "Через Касабланку", desc: "Альтернативный маршрут — через Марокко. Организаторы помогут с выбором." },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.15}>
                <div className="bg-[#0A0E14] border border-[#C9A84C]/10 p-8 hover:border-[#C9A84C]/30 transition-colors duration-300">
                  <Icon name={item.icon as "Plane"} size={24} className="text-[#C9A84C] mb-4" />
                  <p className="font-display text-xl text-white font-light mb-2">{item.title}</p>
                  <p className="text-[#7A7068] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3}>
            <p className="text-center text-[#5A5248] text-sm mt-8">
              Организаторы помогают с перелётом и встречают участников на месте
            </p>
          </Reveal>
        </div>
      </section>

      {/* ФИНАЛ */}
      <section id="contacts" className="relative py-40 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMG})`, opacity: 0.15 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0E14] via-transparent to-[#0A0E14]" />
        <div className="relative max-w-2xl mx-auto px-6 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-5 py-2 border border-[#C9A84C]/30 text-[#C9A84C] text-xs tracking-[0.2em] uppercase mb-10">
              <Icon name="AlertCircle" size={12} />
              Только 20 мест
            </div>
            <h2 className="font-display text-[clamp(3rem,8vw,6rem)] font-light text-white leading-tight mb-6">
              Начни<br /><em className="italic text-[#C9A84C]">здесь</em>
            </h2>
            <GoldLine />
            <p className="text-[#A89878] text-lg leading-relaxed mb-4 font-light">
              Каждый участник проходит личное собеседование перед подтверждением участия.
            </p>
            <p className="text-[#3A3530] text-sm mb-12 tracking-widest uppercase">6–9 августа · Кабо-Верде</p>
            <a
              href="https://t.me/dmitriyhara"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-12 py-5 bg-[#C9A84C] text-[#0A0E14] text-xs tracking-[0.25em] uppercase font-semibold hover:bg-[#E8D5A3] transition-all duration-300 hover:scale-105"
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
          <p className="font-display text-[#C9A84C] tracking-widest uppercase text-sm">ПерепроШивка</p>
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
