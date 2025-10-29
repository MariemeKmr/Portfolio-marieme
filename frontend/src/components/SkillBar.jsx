export default function SkillBar({ name, level, color = "violet" }) {
  const palettes = {
    violet: "from-violet-500 to-fuchsia-500",
    emerald: "from-emerald-500 to-teal-400",
    bluegreen: "from-sky-500 to-emerald-500",
  };
  const glow = {
    violet: "shadow-[0_0_12px_rgba(139,92,246,.55)] group-hover:shadow-[0_0_22px_rgba(139,92,246,.75)]",
    emerald: "shadow-[0_0_12px_rgba(16,185,129,.55)] group-hover:shadow-[0_0_22px_rgba(16,185,129,.75)]",
    bluegreen: "shadow-[0_0_12px_rgba(56,189,248,.50)] group-hover:shadow-[0_0_22px_rgba(16,185,129,.70)]",
  };

  return (
    <div className="group select-none">
      <div className="flex items-end justify-between text-sm mb-1">
        <span className="font-medium">{name}</span>
        <span className="tabular-nums text-stone-600 dark:text-stone-300">{level}%</span>
      </div>

      <div className="h-3 rounded-full bg-stone-200 dark:bg-stone-800 overflow-hidden">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${palettes[color]} transition-[width,transform,box-shadow] duration-700 ease-out ${glow[color]} group-hover:scale-[1.005]`}
          style={{ width: `${level}%` }}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={level}
          role="progressbar"
        />
      </div>
    </div>
  );
}


