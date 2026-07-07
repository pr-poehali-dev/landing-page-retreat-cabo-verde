import { useState, useRef, useEffect } from "react";
import Icon from "@/components/ui/icon";
import { useLanguage } from "@/context/LanguageContext";
import { Lang } from "@/data/translations";

const OPTIONS: { code: Lang; label: string; flag: string }[] = [
  { code: "ru", label: "Русский", flag: "🇷🇺" },
  { code: "en", label: "English", flag: "🇬🇧" },
];

export default function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const current = OPTIONS.find((o) => o.code === lang) ?? OPTIONS[0];

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 text-white/60 hover:text-white text-xs tracking-wide uppercase transition-colors duration-300 border border-white/10 hover:border-white/30"
        aria-label="Switch language"
      >
        <span>{current.flag}</span>
        <span className="hidden sm:inline">{current.code}</span>
        <Icon name="ChevronDown" size={12} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 bg-[#0D1119] border border-white/10 shadow-lg min-w-[140px] z-50 overflow-hidden">
          {OPTIONS.map((opt) => (
            <button
              key={opt.code}
              onClick={() => { setLang(opt.code); setOpen(false); }}
              className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-xs tracking-wide transition-colors duration-200 ${
                opt.code === lang ? "bg-[#C9A84C]/15 text-[#C9A84C]" : "text-white/60 hover:bg-white/5 hover:text-white"
              }`}
            >
              <span>{opt.flag}</span>
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
