import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "@/components/landing/LanguageSwitcher";

const HERO_IMG = "https://cdn.poehali.dev/projects/c2c2486d-0d04-4aab-b2bb-3d076133e4f2/bucket/3fc05f4e-b4c8-43d4-ad85-f39571c8ef6c.jpg";
const DMITRY_IMG = "https://cdn.poehali.dev/files/8e8ce9a6-dacf-485e-a5c3-a4c9a001e7eb.JPG";
const TURTLE_IMG = "https://cdn.poehali.dev/projects/c2c2486d-0d04-4aab-b2bb-3d076133e4f2/files/c5c845a1-690e-40f4-bd4f-d28ed0d2d67d.jpg";
const COAST_IMG = "https://cdn.poehali.dev/projects/c2c2486d-0d04-4aab-b2bb-3d076133e4f2/files/81b6f36d-1dac-4569-b6f5-5735f5d74a69.jpg";
const BEACH_PEOPLE_IMG = "https://cdn.poehali.dev/files/de14ead5-eb7d-400f-ad40-7d7a30b38716.jpg";
const AERIAL_PORT_IMG  = "https://cdn.poehali.dev/files/c5086a16-15e3-428e-90ea-4666de1e520d.jpg";
const SHIPWRECK_IMG    = "https://cdn.poehali.dev/files/4320424f-bf3a-400f-b484-fa543956b3c6.jpg";
const VILLAGE_IMG      = "https://cdn.poehali.dev/files/6af80fbb-a05b-4205-959a-db65fba73eeb.jpg";
const HARBOR_IMG       = "https://cdn.poehali.dev/files/1c7ac8e5-cc1a-4aa8-b899-0a7ddf174d6d.jpg";
const CITY_AERIAL_IMG  = "https://cdn.poehali.dev/files/f5375d5c-bb56-4372-8ae3-9a3cd4f6277e.jpg";
const MOUNTAIN_TOWN_IMG = "https://cdn.poehali.dev/files/032dd4c5-51ef-4c9f-95c2-96918c4b621e.jpg";
const PORT_AERIAL_IMG  = "https://cdn.poehali.dev/files/cae362a0-67ee-4f68-9a9c-4fa4c688e5d8.jpg";
const COMMUNITY_IMG    = "https://cdn.poehali.dev/projects/c2c2486d-0d04-4aab-b2bb-3d076133e4f2/bucket/2114ea36-ed7e-44c9-aecf-502b607d5643.jpg";
const MARINA_IMG       = "https://cdn.poehali.dev/projects/c2c2486d-0d04-4aab-b2bb-3d076133e4f2/bucket/a173c962-f1b5-4cdc-aedb-c9c303e84aa9.jpg";

const TG_LINK = "https://t.me/Marinakirsa";

const ACCENT = {
  blue:   { bg: "bg-[#0EA5E9]", text: "text-[#0EA5E9]", border: "border-[#0EA5E9]", glow: "shadow-[0_0_24px_rgba(14,165,233,0.35)]",  pill: "bg-[#0EA5E9]/15 text-[#0EA5E9]" },
  orange: { bg: "bg-[#F97316]", text: "text-[#F97316]", border: "border-[#F97316]", glow: "shadow-[0_0_24px_rgba(249,115,22,0.35)]",   pill: "bg-[#F97316]/15 text-[#F97316]" },
  red:    { bg: "bg-[#EF4444]", text: "text-[#EF4444]", border: "border-[#EF4444]", glow: "shadow-[0_0_24px_rgba(239,68,68,0.35)]",    pill: "bg-[#EF4444]/15 text-[#EF4444]" },
  gold:   { bg: "bg-[#C9A84C]", text: "text-[#C9A84C]", border: "border-[#C9A84C]", glow: "shadow-[0_0_24px_rgba(201,168,76,0.35)]",   pill: "bg-[#C9A84C]/15 text-[#C9A84C]" },
};

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.06 });
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
      transform: visible ? "translateY(0)" : "translateY(32px)",
      transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
    }}>
      {children}
    </div>
  );
}

const GoldLine = () => (
  <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent mx-auto my-6" />
);

const Label = ({ children, color = "gold" }: { children: React.ReactNode; color?: keyof typeof ACCENT }) => (
  <p className={`text-[10px] tracking-[0.3em] uppercase text-center mb-3 font-bold ${ACCENT[color].text}`}>{children}</p>
);

export default function Index() {
  const { t } = useLanguage();
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
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center cursor-pointer p-4" onClick={() => setLightbox(null)}>
          <button className="absolute top-4 right-4 text-white z-10"><Icon name="X" size={24} /></button>
          <img src={lightbox} className="max-h-[88vh] max-w-[94vw] object-contain" />
        </div>
      )}

      {/* NAV */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrollY > 60 ? "bg-[#0A0E14]/96 backdrop-blur-md border-b border-white/5" : ""}`}>
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <button onClick={() => scrollTo("hero")} className="font-display text-[#C9A84C] text-xs tracking-[0.18em] uppercase font-bold">{t.nav.brand}</button>
          <div className="flex items-center gap-2 sm:gap-3">
            <LanguageSwitcher />
            <a href={TG_LINK} target="_blank" rel="noopener noreferrer"
              className="md:hidden px-3 py-1.5 bg-[#C9A84C] text-[#0A0E14] text-[10px] tracking-wider uppercase font-bold">
              {t.nav.ctaMobile}
            </a>
            <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
              <Icon name={menuOpen ? "X" : "Menu"} size={20} />
            </button>
          </div>
          <div className={`${menuOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row absolute md:static top-full left-0 right-0 md:top-auto bg-[#0A0E14] md:bg-transparent gap-5 md:gap-8 p-5 md:p-0 items-start md:items-center border-b border-white/5 md:border-0`}>
            {t.nav.links.map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)} className="text-xs tracking-[0.15em] uppercase text-white/50 hover:text-white transition-colors duration-300">{item.label}</button>
            ))}
            <a href={TG_LINK} target="_blank" rel="noopener noreferrer"
              className="hidden md:inline-block px-5 py-2 bg-[#C9A84C] text-[#0A0E14] text-xs tracking-[0.15em] uppercase font-bold hover:bg-[#E8D5A3] transition-all duration-300">
              {t.nav.ctaDesktop}
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMG})`, transform: `translateY(${scrollY * 0.2}px)` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0E14]/65 via-[#0A0E14]/25 to-[#0A0E14]" />

        <div className="relative z-10 w-full flex flex-col items-center justify-center text-center px-5 pt-20 pb-36">
          <div style={{ opacity: 0, animation: "fadeIn 1.2s ease 0.2s forwards" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0EA5E9]/20 border border-[#0EA5E9]/50 text-[#0EA5E9] text-[10px] tracking-[0.28em] uppercase mb-6 font-bold">
            <Icon name="MapPin" size={11} />
            {t.hero.badge}
          </div>

          <h1 className="font-display text-[clamp(2.8rem,13vw,12rem)] leading-[0.85] font-bold text-white tracking-tight mb-5 uppercase w-full"
            style={{ opacity: 0, animation: "fadeUp 1s ease 0.4s forwards" }}>
            {t.hero.titlePart1}<span className="text-[#C9A84C]">{t.hero.titleAccent}</span>{t.hero.titlePart3}
          </h1>

          <p className="text-sm md:text-xl text-white/80 font-light mb-3 tracking-wide max-w-xl px-2"
            style={{ opacity: 0, animation: "fadeUp 1s ease 0.7s forwards" }}>
            {t.hero.subtitlePrefix}<span className="text-[#C9A84C] font-semibold">{t.hero.subtitleAccent}</span>{t.hero.subtitleSuffix}
          </p>
          <p className="text-white/45 text-xs tracking-wide mb-8 max-w-sm px-2"
            style={{ opacity: 0, animation: "fadeUp 1s ease 0.9s forwards" }}>
            {t.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-sm sm:max-w-none"
            style={{ opacity: 0, animation: "fadeUp 1s ease 1.1s forwards" }}>
            <a href={TG_LINK} target="_blank" rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-[#C9A84C] text-[#0A0E14] text-xs tracking-[0.28em] uppercase font-bold hover:bg-[#E8D5A3] transition-all duration-300 shadow-[0_0_30px_rgba(201,168,76,0.4)] text-center">
              {t.hero.ctaPrimary}
            </a>
            <button onClick={() => scrollTo("film")}
              className="w-full sm:w-auto px-6 py-4 border border-white/20 text-white/70 text-xs tracking-[0.28em] uppercase hover:border-white/50 hover:text-white transition-all duration-300">
              {t.hero.ctaSecondary}
            </button>
          </div>
        </div>

        {/* Нижние статы */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0A0E14] to-transparent pt-16 pb-5">
          <div className="max-w-lg mx-auto px-5 grid grid-cols-3 gap-2" style={{ opacity: 0, animation: "fadeIn 1s ease 1.5s forwards" }}>
            {t.hero.stats.map((s, i) => {
              const colors: (keyof typeof ACCENT)[] = ["blue", "orange", "gold"];
              return (
                <div key={s.val + i} className="text-center">
                  <p className={`font-display text-2xl md:text-4xl font-bold ${ACCENT[colors[i]].text}`}>
                    {s.val}{s.unit && <span className="text-sm ml-0.5 opacity-70">{s.unit}</span>}
                  </p>
                  <p className="text-white/35 text-[10px] mt-0.5 tracking-wide leading-tight">{s.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ПРОБЛЕМА */}
      <section className="py-20 px-4 bg-[#0A0E14]">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <Label color="red">{t.problem.label}</Label>
            <h2 className="font-display text-[clamp(1.8rem,6vw,3.5rem)] text-center font-bold leading-tight text-white mb-6 uppercase">
              {t.problem.title1}<br /><span className="text-white/40 font-light normal-case">{t.problem.title2}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-white/50 text-center max-w-2xl mx-auto leading-relaxed mb-10 text-sm px-2">
              {t.problem.description}
            </p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {t.problem.cards.map((item, i) => {
              const icons = ["TrendingUp", "Activity", "Users"];
              const colors: (keyof typeof ACCENT)[] = ["orange", "red", "blue"];
              return (
                <Reveal key={item.title} delay={i * 0.1}>
                  <div className={`relative bg-[#0D1119] p-6 border-t-4 ${ACCENT[colors[i]].border} overflow-hidden`}>
                    <span className={`absolute top-3 right-3 font-display text-4xl font-bold opacity-8 ${ACCENT[colors[i]].text}`}>{item.num}</span>
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${ACCENT[colors[i]].pill}`}>
                      <Icon name={icons[i] as "TrendingUp"} size={18} className={ACCENT[colors[i]].text} />
                    </div>
                    <h3 className="font-display text-xl text-white font-bold mb-2 uppercase">{item.title}</h3>
                    <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ЧТО ТАКОЕ — фото фон */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={COAST_IMG} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.88)" }} />
        </div>
        <div className="relative max-w-3xl mx-auto px-5 text-center">
          <Reveal>
            <Label color="gold">{t.essence.label}</Label>
            <h2 className="font-display text-[clamp(1.8rem,6vw,3.5rem)] font-bold text-white leading-tight mb-6 uppercase">
              {t.essence.title1}<br /><span className="text-[#C9A84C] font-light normal-case">{t.essence.title2}</span>
            </h2>
            <GoldLine />
            <p className="text-white/55 text-sm leading-relaxed max-w-xl mx-auto font-light">
              {t.essence.description}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ВЕДУЩАЯ — Марина Кирсанова */}
      <section className="py-20 px-4 bg-[#0A0E14]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <Reveal>
            <div className="relative max-w-sm mx-auto md:max-w-none">
              <div className="absolute -inset-1 bg-gradient-to-br from-[#C9A84C]/30 via-transparent to-[#F97316]/20" />
              <img src={MARINA_IMG} alt={t.alt.marina} className="relative w-full aspect-[3/4] object-cover object-top" />
              <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-[#0A0E14]" />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <Label color="orange">{t.mentor.label}</Label>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-white uppercase mb-1">{t.mentor.firstName}</h2>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-[#C9A84C] uppercase mb-7">{t.mentor.lastName}</h2>
            <ul className="space-y-3 mb-8">
              {t.mentor.bullets.map((text, i) => {
                const colors: (keyof typeof ACCENT)[] = ["gold", "orange", "blue"];
                return (
                  <li key={text} className="flex items-start gap-3 text-white/65 text-sm">
                    <span className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${ACCENT[colors[i % colors.length]].bg}`} />
                    {text}
                  </li>
                );
              })}
            </ul>
            <a href={TG_LINK} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#C9A84C]/50 text-[#C9A84C] text-xs tracking-[0.22em] uppercase hover:bg-[#C9A84C]/10 transition-all duration-300">
              <Icon name="Send" size={13} />
              {t.mentor.cta}
            </a>
          </Reveal>
        </div>
      </section>

      {/* АВТОР */}
      <section id="author" className="py-14 px-4 bg-[#07090D]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[280px_1fr] gap-8 md:gap-12 items-center">
          <Reveal>
            <div className="relative max-w-[260px] mx-auto md:max-w-none">
              <div className="absolute -inset-1 bg-gradient-to-br from-[#C9A84C]/20 via-transparent to-[#0EA5E9]/15" />
              <img src={DMITRY_IMG} alt={t.alt.dmitry} className="relative w-full aspect-[3/4] object-cover object-top" />
              <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-[#07090D]" />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <Label>{t.author.label}</Label>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white uppercase mb-1">{t.author.firstName}</h2>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#C9A84C] uppercase mb-5">{t.author.lastName}</h2>
            <ul className="space-y-2.5 mb-6">
              {t.author.bullets.map((text, i) => {
                const colors: (keyof typeof ACCENT)[] = ["gold", "blue", "orange", "gold"];
                return (
                  <li key={text} className="flex items-start gap-3 text-white/60 text-sm">
                    <span className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${ACCENT[colors[i % colors.length]].bg}`} />
                    {text}
                  </li>
                );
              })}
            </ul>
            <blockquote className="border-l-4 border-[#C9A84C] pl-4 bg-[#C9A84C]/5 py-3 pr-4">
              <p className="text-sm italic text-white/70 leading-relaxed font-light">
                {t.author.quote}
              </p>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* ГАЛЕРЕЯ */}
      <section id="gallery" className="py-20 bg-[#07090D]">
        <div className="max-w-6xl mx-auto px-4">
          <Reveal>
            <Label color="blue">{t.gallery.label}</Label>
            <h2 className="font-display text-[clamp(1.8rem,6vw,3.5rem)] font-bold text-white text-center mb-3 uppercase">{t.gallery.title}</h2>
            <p className="text-white/40 text-center text-sm leading-relaxed max-w-xl mx-auto mb-8 px-2">
              {t.gallery.description}
            </p>
          </Reveal>

          {/* Главное фото */}
          <Reveal>
            <div className="relative overflow-hidden cursor-pointer mb-2 group" onClick={() => setLightbox(AERIAL_PORT_IMG)}>
              <img src={AERIAL_PORT_IMG} alt={t.alt.aerial} className="w-full h-[40vw] min-h-[220px] max-h-[420px] object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07090D]/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
                <div>
                  <span className={`text-[9px] tracking-[0.2em] uppercase font-bold ${ACCENT.blue.text}`}>{t.gallery.mainTag}</span>
                  <p className="font-display text-base md:text-2xl font-bold text-white uppercase mt-0.5">{t.gallery.mainTitle}</p>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity w-8 h-8 bg-white/10 flex items-center justify-center">
                  <Icon name="Expand" size={14} className="text-white" />
                </div>
              </div>
            </div>
          </Reveal>

          {/* Сетки фото — 3 колонки на телефоне тоже, но маленькие */}
          <div className="grid grid-cols-3 gap-2 mb-2">
            {t.gallery.grid1.map((item, i) => {
              const imgs = [BEACH_PEOPLE_IMG, SHIPWRECK_IMG, VILLAGE_IMG];
              const colors: (keyof typeof ACCENT)[] = ["blue", "orange", "red"];
              return (
                <Reveal key={item.label} delay={i * 0.08}>
                  <div className="relative overflow-hidden cursor-pointer group aspect-[4/3]" onClick={() => setLightbox(imgs[i])}>
                    <img src={imgs[i]} alt={item.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-2">
                      <span className={`text-[8px] tracking-wide uppercase font-bold hidden sm:block ${ACCENT[colors[i]].text}`}>{item.sub}</span>
                      <p className="font-display text-[10px] sm:text-sm font-bold text-white uppercase leading-tight">{item.label}</p>
                    </div>
                    <div className={`absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity ${ACCENT[colors[i]].bg}`} />
                  </div>
                </Reveal>
              );
            })}
          </div>
          <div className="grid grid-cols-3 gap-2">
            {t.gallery.grid2.map((item, i) => {
              const imgs = [HARBOR_IMG, MOUNTAIN_TOWN_IMG, PORT_AERIAL_IMG];
              const colors: (keyof typeof ACCENT)[] = ["blue", "gold", "orange"];
              return (
                <Reveal key={item.label} delay={i * 0.08}>
                  <div className="relative overflow-hidden cursor-pointer group aspect-[4/3]" onClick={() => setLightbox(imgs[i])}>
                    <img src={imgs[i]} alt={item.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-2">
                      <span className={`text-[8px] tracking-wide uppercase font-bold hidden sm:block ${ACCENT[colors[i]].text}`}>{item.sub}</span>
                      <p className="font-display text-[10px] sm:text-sm font-bold text-white uppercase leading-tight">{item.label}</p>
                    </div>
                    <div className={`absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity ${ACCENT[colors[i]].bg}`} />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* СООБЩЕСТВО */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={COMMUNITY_IMG} alt={t.alt.community} className="w-full h-full object-cover object-top opacity-30" />
          <div className="absolute inset-0 bg-[#0A0E14]/80" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4">
          <Reveal>
            <Label color="orange">{t.community.label}</Label>
            <h2 className="font-display text-[clamp(1.8rem,6vw,3.5rem)] font-bold text-white text-center mb-4 uppercase">
              {t.community.titlePrefix}<span className="text-[#F97316]">{t.community.titleAccent}</span>
            </h2>
            <p className="text-white/60 text-center text-sm leading-relaxed max-w-xl mx-auto mb-10 font-light px-2">
              {t.community.description}
            </p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {t.community.cards.map((item, i) => {
              const icons = ["Heart", "Zap", "Users"];
              const colors: (keyof typeof ACCENT)[] = ["orange", "blue", "gold"];
              return (
                <Reveal key={item.title} delay={i * 0.1} className="flex">
                  <div className="flex flex-col w-full bg-[#0A0E14]/70 border border-white/10 p-6">
                    <div className={`w-11 h-11 rounded-lg flex items-center justify-center mb-4 flex-shrink-0 ${ACCENT[colors[i]].pill}`}>
                      <Icon name={icons[i] as "Heart"} size={18} className={ACCENT[colors[i]].text} />
                    </div>
                    <p className="font-display text-lg text-white font-bold uppercase mb-2">{item.title}</p>
                    <p className="text-white/55 text-sm leading-relaxed flex-1">{item.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ЧЕРЕПАШКИ */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={TURTLE_IMG} alt={t.alt.turtles} className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0E14] via-[#0A0E14]/55 to-[#0A0E14]" />
        </div>
        <div className="relative max-w-2xl mx-auto px-5 text-center">
          <Reveal>
            <Label color="blue">{t.turtles.label}</Label>
            <h2 className="font-display text-[clamp(1.8rem,6vw,3.5rem)] font-bold text-white mb-4 uppercase">
              {t.turtles.titlePrefix}<span className="text-[#C9A84C] font-light normal-case">{t.turtles.titleAccent}</span>
            </h2>
            <GoldLine />
            <p className="text-white/55 text-sm leading-relaxed font-light">
              {t.turtles.description}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ПРОГРАММА */}
      <section id="program" className="py-20 px-4 bg-[#0A0E14]">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <Label color="orange">{t.program.label}</Label>
            <h2 className="font-display text-[clamp(1.8rem,6vw,3.5rem)] font-bold text-white text-center mb-10 uppercase">{t.program.title}</h2>
          </Reveal>
          <div className="space-y-2">
            {t.program.days.map((item, i) => {
              const colors: (keyof typeof ACCENT)[] = ["blue", "orange", "red", "gold"];
              const icons = ["RotateCcw", "ArrowDown", "Target", "Rocket"];
              return (
                <Reveal key={item.day} delay={i * 0.07}>
                  <div className={`group flex gap-4 items-start bg-[#0D1119] p-5 sm:p-7 transition-all duration-300 border-l-4 ${ACCENT[colors[i]].border}`}>
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center flex-shrink-0 ${ACCENT[colors[i]].pill} rounded-lg`}>
                      <Icon name={icons[i] as "RotateCcw"} size={18} className={ACCENT[colors[i]].text} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className={`text-[9px] tracking-[0.22em] uppercase font-bold ${ACCENT[colors[i]].text}`}>{t.program.dayLabel} {item.day}</span>
                      <p className="font-display text-base sm:text-xl text-white font-bold uppercase mb-1 mt-0.5">{item.title}</p>
                      <p className="text-white/40 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                    </div>
                    <span className={`font-display text-3xl sm:text-4xl font-bold opacity-10 flex-shrink-0 ${ACCENT[colors[i]].text}`}>{item.day}</span>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* РЕЗУЛЬТАТ — фото фон */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={BEACH_PEOPLE_IMG} alt="" className="w-full h-full object-cover opacity-10" />
          <div className="absolute inset-0 bg-[#0A0E14]/90" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4">
          <Reveal>
            <Label color="blue">{t.results.label}</Label>
            <h2 className="font-display text-[clamp(1.8rem,6vw,3.5rem)] font-bold text-white text-center mb-10 uppercase">{t.results.title}</h2>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {t.results.items.map((item, i) => {
              const icons = ["Sun", "Wind", "Zap", "TrendingUp", "Anchor"];
              const colors: (keyof typeof ACCENT)[] = ["gold", "blue", "orange", "red", "gold"];
              return (
                <Reveal key={item.label} delay={i * 0.07} className="flex col-span-1">
                  <div className={`flex flex-col items-center w-full bg-[#0D1119] p-5 text-center border-b-4 ${ACCENT[colors[i]].border}`}>
                    <div className={`w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center flex-shrink-0 ${ACCENT[colors[i]].pill}`}>
                      <Icon name={icons[i] as "Sun"} size={22} className={ACCENT[colors[i]].text} />
                    </div>
                    <p className="text-white/75 text-xs leading-relaxed font-medium">{item.label}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ФИЛЬМ */}
      <section id="film" className="py-20 bg-[#07090D]">
        <div className="max-w-3xl mx-auto px-4">
          <Reveal>
            <Label color="red">{t.film.label}</Label>
            <h2 className="font-display text-[clamp(1.8rem,6vw,3.5rem)] font-bold text-white text-center mb-3 uppercase">
              {t.film.title}
            </h2>
            <p className="text-white/40 text-center text-sm mb-8 max-w-sm mx-auto">
              {t.film.description}
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="relative aspect-video border border-white/8 overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/tcP4vghAaV0?rel=0&modestbranding=1"
                title={t.film.iframeTitle}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ПАКЕТЫ */}
      <section id="pricing" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <Label color="gold">{t.pricing.label}</Label>
            <h2 className="font-display text-[clamp(1.8rem,6vw,3.5rem)] font-bold text-white text-center mb-2 uppercase">{t.pricing.title}</h2>
            <p className="text-white/25 text-center text-xs tracking-widest mb-10 uppercase">{t.pricing.subtitle}</p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {t.pricing.packages.map((pkg, i) => {
              const ac = ACCENT[pkg.color];
              return (
                <Reveal key={pkg.name} delay={i * 0.1}>
                  <div className={`relative flex flex-col h-full border ${pkg.popular ? "border-[#C9A84C] shadow-[0_0_40px_rgba(201,168,76,0.12)]" : "border-white/8"}`}>
                    {pkg.popular && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#C9A84C] text-[#0A0E14] text-[9px] tracking-[0.18em] uppercase px-4 py-1 font-bold whitespace-nowrap">
                        {t.pricing.popularBadge}
                      </div>
                    )}
                    <div className={`p-5 sm:p-7 flex flex-col flex-1 ${pkg.popular ? "bg-[#111520]" : "bg-[#0D1119]"}`}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-1.5 h-7 ${ac.bg} rounded-full`} />
                        <p className={`font-display text-xs tracking-[0.22em] uppercase font-bold ${ac.text}`}>{pkg.name}</p>
                      </div>
                      <div className="flex items-end gap-1 mb-6 pb-5 border-b border-white/6">
                        <span className="font-display text-4xl sm:text-5xl font-bold text-white leading-none">{pkg.price}</span>
                        <span className={`text-lg mb-0.5 font-display font-bold ${ac.text}`}>€</span>
                      </div>
                      <div className="space-y-2.5 flex-1">
                        {pkg.base.map((item) => (
                          <div key={item.text} className="flex items-center gap-2.5">
                            <Icon name={item.icon as "BookOpen"} size={12} className="text-white/20 flex-shrink-0" />
                            <span className="text-white/25 text-xs">{item.text}</span>
                          </div>
                        ))}
                      </div>
                      {pkg.added.length > 0 ? (
                        <div className="space-y-2.5 mt-4 mb-5 pt-4 border-t border-white/8">
                          <p className={`text-[9px] tracking-[0.18em] uppercase font-bold mb-2.5 ${ac.text}`}>{t.pricing.addedLabel}</p>
                          {pkg.added.map((item) => (
                            <div key={item.text} className="flex items-center gap-2.5">
                              <div className={`w-5 h-5 flex items-center justify-center rounded flex-shrink-0 ${ac.pill}`}>
                                <Icon name={item.icon as "BedDouble"} size={11} className={ac.text} />
                              </div>
                              <span className="text-white/85 text-xs font-medium">{item.text}</span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="mt-4 mb-5 pt-4 border-t border-white/6">
                          <p className="text-[9px] tracking-wide uppercase text-white/20 font-medium">{t.pricing.basicFormatLabel}</p>
                        </div>
                      )}
                      <a href={TG_LINK} target="_blank" rel="noopener noreferrer"
                        className={`w-full py-3.5 text-xs tracking-[0.18em] uppercase font-bold transition-all duration-300 text-center block ${
                          pkg.popular ? "bg-[#C9A84C] text-[#0A0E14] hover:bg-[#E8D5A3]" : `border ${ac.border} ${ac.text} hover:bg-white/5`
                        }`}>
                        {t.pricing.selectCta}
                      </a>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* ДЕТИ */}
          <Reveal delay={0.2}>
            <div className="mt-4 border border-white/8 bg-[#0D1119] p-5 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className={`w-11 h-11 flex items-center justify-center rounded-xl flex-shrink-0 ${ACCENT.blue.pill}`}>
                  <Icon name="Baby" size={20} className={ACCENT.blue.text} />
                </div>
                <div>
                  <p className="font-display text-lg text-white font-bold uppercase mb-0.5">{t.pricing.kids.title}</p>
                  <p className="text-white/40 text-sm">{t.pricing.kids.desc}</p>
                </div>
              </div>
              <div className="text-left sm:text-right">
                <p className="font-display text-2xl font-bold text-white">{t.pricing.kids.price} <span className={ACCENT.blue.text}>€</span></p>
                <p className="text-white/30 text-xs">{t.pricing.kids.priceUnit}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ЛОГИСТИКА */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={CITY_AERIAL_IMG} alt={t.alt.lighthouse} className="w-full h-full object-cover opacity-12" />
          <div className="absolute inset-0 bg-[#0A0E14]/90" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4">
          <Reveal>
            <Label color="orange">{t.logistics.label}</Label>
            <h2 className="font-display text-[clamp(1.8rem,6vw,3rem)] font-bold text-white text-center mb-8 uppercase">{t.logistics.title}</h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {t.logistics.cards.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.12}>
                <div className={`bg-[#0D1119] border border-white/6 p-6 border-t-4 ${ACCENT[item.color as keyof typeof ACCENT].border}`}>
                  <div className={`w-10 h-10 flex items-center justify-center rounded-lg mb-4 ${ACCENT[item.color as keyof typeof ACCENT].pill}`}>
                    <Icon name={item.icon as "Plane"} size={16} className={ACCENT[item.color as keyof typeof ACCENT].text} />
                  </div>
                  <p className="font-display text-lg text-white font-bold mb-2 uppercase">{item.title}</p>
                  <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <p className="text-center text-white/25 text-xs mt-6 tracking-wide">
              {t.logistics.footer}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ФИНАЛ */}
      <section id="contacts" className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${PORT_AERIAL_IMG})`, opacity: 0.18 }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0E14] via-[#0A0E14]/40 to-[#0A0E14]" />
        <div className="relative max-w-xl mx-auto px-5 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#EF4444]/15 border border-[#EF4444]/40 text-[#EF4444] text-[10px] tracking-[0.2em] uppercase mb-8 font-bold">
              <Icon name="AlertCircle" size={11} />
              {t.final.badge}
            </div>
            <h2 className="font-display text-[clamp(3rem,10vw,6rem)] font-bold text-white leading-tight mb-5 uppercase">
              {t.final.title1}<br /><span className="text-[#C9A84C] font-light normal-case">{t.final.title2}</span>
            </h2>
            <GoldLine />
            <p className="text-white/45 text-sm leading-relaxed mb-3 font-light">
              {t.final.description}
            </p>
            <p className="text-white/20 text-xs mb-10 tracking-widest uppercase">{t.final.date}</p>
            <a
              href={TG_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-10 py-5 bg-[#C9A84C] text-[#0A0E14] text-xs tracking-[0.28em] uppercase font-bold hover:bg-[#E8D5A3] transition-all duration-300 shadow-[0_0_40px_rgba(201,168,76,0.3)]"
            >
              <Icon name="Send" size={14} />
              {t.final.cta}
            </a>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 border-t border-white/5 px-4">
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
          <p className="font-display text-[#C9A84C] tracking-widest uppercase text-sm font-bold">{t.footer.brand}</p>
          <p className="text-white/15 text-xs tracking-widest uppercase">{t.footer.location}</p>
          <p className="text-white/15 text-xs">{t.footer.copyright}</p>
        </div>
      </footer>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(32px); }
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
