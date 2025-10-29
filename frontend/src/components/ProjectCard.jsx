export default function ProjectCard({ project }) {
  return (
    <article className="card holo-card overflow-hidden bg-white dark:bg-stone-900">
      {/* Image */}
      <div className="aspect-video bg-stone-100 dark:bg-stone-800">
        <img
          src={project.image_url}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>


      {/* Contenu */}
      <div className="p-4 space-y-3 relative z-10">
        {/* SLUG */}
        <div
          className="hero-font text-violet-600 dark:text-violet-400
                     text-base md:text-lg leading-tight
                     whitespace-nowrap overflow-hidden text-ellipsis"
          title={project.slug}
        >
          {project.slug}
        </div>

        {/* TITLE */}
        <h2 className="font-inter text-sm text-stone-800 dark:text-stone-100 font-medium">
          {project.title}
        </h2>

        {/* RESUME */}
        <p className="text-sm text-stone-600 dark:text-stone-300 line-clamp-2">
          {project.summary}
        </p>
        
        {/* TAGS */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-1 rounded-full bg-emerald-100 text-emerald-700
                         dark:bg-emerald-900/40 dark:text-emerald-200"
            >
              {t}
            </span>
          ))}
        </div>

        {/* IMPACT + LEARNED */}
        <div className="text-xs space-y-1">
          <p>
            <strong className="text-emerald-700 dark:text-emerald-500">Impact :</strong>{" "}
            <span className="text-stone-800 dark:text-stone-200">{project.impact}</span>
          </p>
          <p>
            <strong className="text-emerald-700 dark:text-emerald-500">Ce que j’ai appris :</strong>{" "}
            <span className="text-stone-800 dark:text-stone-200">{project.learned}</span>
          </p>
        </div>
      </div>
    </article>
  );
}
