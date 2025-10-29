import { useEffect, useState } from "react";

const storageKey = "theme-preference";
const systemPref = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
const initialTheme = () => localStorage.getItem(storageKey) || systemPref();

export default function ThemeToggle() {
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("data-theme", theme);
    if (theme === "dark") html.classList.add("dark");
    else html.classList.remove("dark");
    localStorage.setItem(storageKey, theme);

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = ({ matches }) => setTheme(matches ? "dark" : "light");
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [theme]);

  return (
    <button
      id="theme-toggle"
      onClick={() => setTheme(t => (t === "light" ? "dark" : "light"))}
      title="Basculer clair/sombre"
      aria-label={theme}
      aria-live="polite"
      className="
        inline-flex items-center justify-center h-9 w-9
        rounded-xl border border-stone-300 dark:border-stone-700
        bg-white/80 dark:bg-stone-900/70 backdrop-blur-sm
        shadow-[inset_0_1px_0_rgba(255,255,255,.6),0_1.5px_3px_rgba(0,0,0,.12)]
        hover:shadow-[inset_0_1px_0_rgba(255,255,255,.6),0_3px_8px_rgba(0,0,0,.18)]
        transition-all text-stone-700 dark:text-stone-200
        focus:outline-none focus:ring-2 focus:ring-violet-400/60
        focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-stone-900
      "
    >
      <svg className="sun-and-moon" aria-hidden="true" width="20" height="20" viewBox="0 0 24 24">
        <mask className="moon" id="moon-mask">
          <rect x="0" y="0" width="100%" height="100%" fill="white" />
          <circle cx="24" cy="10" r="6" fill="black" />
        </mask>
        <circle className="sun" cx="12" cy="12" r="6" mask="url(#moon-mask)" fill="currentColor" />
        <g className="sun-beams" stroke="currentColor">
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </g>
      </svg>
    </button>
  );
}




