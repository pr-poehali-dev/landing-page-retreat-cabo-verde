import { useEffect, useRef, useState } from "react";

// ─── URLs ────────────────────────────────────────────────────────────────────
export const HERO_IMG         = "https://cdn.poehali.dev/projects/c2c2486d-0d04-4aab-b2bb-3d076133e4f2/bucket/3fc05f4e-b4c8-43d4-ad85-f39571c8ef6c.jpg";
export const DMITRY_IMG       = "https://cdn.poehali.dev/files/8e8ce9a6-dacf-485e-a5c3-a4c9a001e7eb.JPG";
export const TURTLE_IMG       = "https://cdn.poehali.dev/projects/c2c2486d-0d04-4aab-b2bb-3d076133e4f2/files/c5c845a1-690e-40f4-bd4f-d28ed0d2d67d.jpg";
export const COAST_IMG        = "https://cdn.poehali.dev/projects/c2c2486d-0d04-4aab-b2bb-3d076133e4f2/files/81b6f36d-1dac-4569-b6f5-5735f5d74a69.jpg";
export const BEACH_PEOPLE_IMG = "https://cdn.poehali.dev/files/de14ead5-eb7d-400f-ad40-7d7a30b38716.jpg";
export const AERIAL_PORT_IMG  = "https://cdn.poehali.dev/files/c5086a16-15e3-428e-90ea-4666de1e520d.jpg";
export const SHIPWRECK_IMG    = "https://cdn.poehali.dev/files/4320424f-bf3a-400f-b484-fa543956b3c6.jpg";
export const VILLAGE_IMG      = "https://cdn.poehali.dev/files/6af80fbb-a05b-4205-959a-db65fba73eeb.jpg";
export const HARBOR_IMG       = "https://cdn.poehali.dev/files/1c7ac8e5-cc1a-4aa8-b899-0a7ddf174d6d.jpg";
export const CITY_AERIAL_IMG  = "https://cdn.poehali.dev/files/f5375d5c-bb56-4372-8ae3-9a3cd4f6277e.jpg";
export const MOUNTAIN_TOWN_IMG= "https://cdn.poehali.dev/files/032dd4c5-51ef-4c9f-95c2-96918c4b621e.jpg";
export const PORT_AERIAL_IMG  = "https://cdn.poehali.dev/files/cae362a0-67ee-4f68-9a9c-4fa4c688e5d8.jpg";
export const COMMUNITY_IMG    = "https://cdn.poehali.dev/projects/c2c2486d-0d04-4aab-b2bb-3d076133e4f2/bucket/2114ea36-ed7e-44c9-aecf-502b607d5643.jpg";

export const TG_LINK = "https://t.me/Marinakirsa";

// ─── Accent palette ──────────────────────────────────────────────────────────
export const ACCENT = {
  blue:   { bg: "bg-[#0EA5E9]", text: "text-[#0EA5E9]", border: "border-[#0EA5E9]", glow: "shadow-[0_0_24px_rgba(14,165,233,0.35)]",  pill: "bg-[#0EA5E9]/15 text-[#0EA5E9]" },
  orange: { bg: "bg-[#F97316]", text: "text-[#F97316]", border: "border-[#F97316]", glow: "shadow-[0_0_24px_rgba(249,115,22,0.35)]",   pill: "bg-[#F97316]/15 text-[#F97316]" },
  red:    { bg: "bg-[#EF4444]", text: "text-[#EF4444]", border: "border-[#EF4444]", glow: "shadow-[0_0_24px_rgba(239,68,68,0.35)]",    pill: "bg-[#EF4444]/15 text-[#EF4444]" },
  gold:   { bg: "bg-[#C9A84C]", text: "text-[#C9A84C]", border: "border-[#C9A84C]", glow: "shadow-[0_0_24px_rgba(201,168,76,0.35)]",   pill: "bg-[#C9A84C]/15 text-[#C9A84C]" },
};

// ─── Scroll reveal hook ───────────────────────────────────────────────────────
export function useScrollReveal() {
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

// ─── Reveal wrapper ───────────────────────────────────────────────────────────
export function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
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

// ─── Shared UI atoms ──────────────────────────────────────────────────────────
export const GoldLine = () => (
  <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent mx-auto my-6" />
);

export const Label = ({ children, color = "gold" }: { children: React.ReactNode; color?: keyof typeof ACCENT }) => (
  <p className={`text-[10px] tracking-[0.3em] uppercase text-center mb-3 font-bold ${ACCENT[color].text}`}>{children}</p>
);

// ─── Global keyframe styles ───────────────────────────────────────────────────
export const GlobalStyles = () => (
  <style>{`
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(32px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
  `}</style>
);
