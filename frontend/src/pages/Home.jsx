import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="heading-hero">
            Développeuse Web & Mobile (Fullstack)
          </h1>

          <p className="mt-4 text-stone-600 dark:text-stone-300">
            En allant des technologies Frontend (React, Next.js) aux <br /> 
            techonologies Backend (Python, PHP, Java) mon objectif <br />
            est simple : transformer vos idées en produits réels.
          </p>

          <div className="flex gap-3 mt-6">
            <Link to="/projects" className="btn-primary">Voir mes projets</Link>
            <Link to="/about" className="btn-ghost">En savoir plus</Link>
          </div>
        </div>

        <div className="card p-3">
          <div className="relative aspect-video rounded-xl overflow-hidden bg-stone-100 dark:bg-stone-800">
            {/* Image claire */}
            <img
              src="/images/homepage.jpg"
              alt="Accueil — Marieme Kamara (clair)"
              className="absolute inset-0 w-full h-full object-cover dark:hidden"
              loading="eager"
              decoding="async"
            />
            {/* Image dark */}
            <img
              src="/images/homepageblack.jpg"
              alt="Accueil — Marieme Kamara (sombre)"
              className="hidden dark:block absolute inset-0 w-full h-full object-cover"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </main>
  );
}




