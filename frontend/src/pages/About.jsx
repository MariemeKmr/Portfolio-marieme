export default function About() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12 md:py-16 space-y-10">
      {/* Titre */}
      <h1 className="heading-hero">À propos</h1>

      {/* Intro narrative */}
      <div className="card violet-hover p-8 md:p-10 leading-relaxed text-stone-700 dark:text-stone-200 space-y-8">
        {/* Qui suis-je */}
        <div>
          <h2 className="heading-sub mb-4 text-stone-800 dark:text-stone-100">
            Qui suis-je ?
          </h2>
          <p className="mb-4">
            Hello, je suis <strong>Marieme Kamara</strong>, développeuse Fullstack junior
            basée à Dakar. J’aime bâtir des produits <em>utiles, clairs et accessibles</em> :
            côté <strong>front</strong> (HTML, CSS, JavaScript, React/Next.js) et côté 
            <strong> back</strong> (Java, PHP/Laravel, Python, C).
          </p>
          <p>
            Ce que j’aime dans mon métier, c’est la possibilité de créer des solutions
            qui <strong>simplifient la vie des autres</strong>, tout en apprenant chaque jour
            quelque chose de nouveau. Pour moi, le code est un langage universel :
            <em>il relie les idées aux actions concrètes.</em>
          </p>
        </div>
        </div>

              {/* 2 colonnes : Aujourd’hui / Valeurs (hover ÉMERAUDE) */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card violet-hover p-6">
          <h2 className="heading-sub mb-4 text-stone-800 dark:text-stone-100">
            Aujourd’hui
          </h2>
          <ul className="space-y-2 text-stone-700 dark:text-stone-200">
            <li>• Stack : React/Next.js, PHP/Laravel, Java EE, Python</li>
            <li>• BDD : MySQL, MongoDB, MariaDB, PostgreSQL</li>
            <li>• Systèmes : Windows, Linux, macOS</li>
            <li>• Moteurs : impacts, accessibilité, documentations</li>
          </ul>
        </div>

        <div className="card violet-hover p-6">
          <h2 className="heading-sub mb-4 text-stone-800 dark:text-stone-100">
            Valeurs
          </h2>
          <ul className="space-y-2 text-stone-700 dark:text-stone-200">
            <li>• Qualité & lisibilité du code</li>
            <li>• Expérience utilisateur soignée</li>
            <li>• Esprit d’équipe & feedback honnête</li>
            <li>• Apprentissage continu</li>
          </ul>
        </div>
      </div>

      
      <div className="card emerald-hover p-8 md:p-10 leading-relaxed text-stone-700 dark:text-stone-200 space-y-8">
        {/* D'où vient cette passion */}
        <div>
          <h2 className="heading-sub mb-4 text-stone-800 dark:text-stone-100">
            D’où vient cette passion ?
          </h2>
          <p>
            Depuis toute petite, j’ai toujours voulu <strong>comprendre ce qu’il y avait derrière les écrans</strong>.  
            Pendant que d’autres jouaient à des poupées, moi, je préférais <strong>démonter des téléphones</strong>, 
            <strong>relancer de vieux ordinateurs</strong> ou observer les <strong>câbles emmêlés de la télévision carrée </strong> 
             de mes grands-parents comme s’ils cachaient un mystère.
          </p>
          <br />
          <p>
            Je me posais sans cesse la même question&nbsp;: 
            <em>« Que se passe-t-il vraiment quand on appuie sur ce bouton ? »</em>  
            Ce besoin de comprendre est devenu, au fil du temps, <strong>ma boussole </strong>.  
            Ce n’était plus seulement de la curiosité : c’était une envie profonde de 
            <strong> créer, explorer et donner vie à ce qui se cache derrière l’écran </strong>.
          </p>
          <br />
          <p>
            Au départ, je voyais le développement comme une <em>magie visuelle</em> : 
            des pixels qui s’alignent, des interfaces qui prennent forme.  
            Puis j’ai découvert <strong>l’envers du décor</strong> : les <strong>bases de données</strong>, 
            les <strong>APIs</strong>, les <strong>réseaux</strong>, les <strong>performances</strong>...  
            C’est là que j’ai compris qu’un bon logiciel, ce n’est pas seulement du code qui fonctionne :  
            <strong>c’est une idée qui prend vie, un outil qui simplifie, et parfois même un projet qui change des vies.</strong>
          </p>
        </div>
        </div>


      {/* Timeline — hover ÉMERAUDE & SANS puces violettes */}
      <div className="card emerald-hover p-6">
        <h2 className="heading-sub mb-6 text-stone-800 dark:text-stone-100">
          Parcours en bref
        </h2>

        <ol className="relative border-l border-stone-300 dark:border-stone-700 space-y-6 pl-6">
          <li>
            {/* puce retirée */}
            <h3 className="heading-ter text-stone-900 dark:text-stone-100">
              Développeuse Web & Logicielle - Port Autonome de Dakar
            </h3>
            <div className="text-sm text-stone-500">Mai 2025 - Juil. 2025</div>
          </li>

          <li>
            <h3 className="heading-ter text-stone-900 dark:text-stone-100">
              Développeuse Web - CreaticStudio
            </h3>
            <div className="text-sm text-stone-500">Mai 2024 - Juil. 2024</div>
          </li>

          <li>
            <h3 className="heading-ter text-stone-900 dark:text-stone-100">
              Projets académiques - ESP
            </h3>
            <div className="text-sm text-stone-500">2022 - 2025</div>
          </li>
        </ol>
      </div>

      <div className="card violet-hover p-8 md:p-10 leading-relaxed text-stone-700 dark:text-stone-200 space-y-8">
        {/* Nouvelle section — Ce qui m’anime */}
        <div>
          <h2 className="heading-sub mb-4 text-stone-800 dark:text-stone-100">
            Ce qui m’anime
          </h2>
          <p>
            Ce qui me pousse chaque jour à coder, c’est avant tout <strong>le challenge</strong>.  
            J’adore sortir de ma zone de confort, résoudre des problèmes complexes, et
            <strong> explorer de nouvelles technologies</strong>.  
          </p>
          <br />
          <p>
            Pour moi, chaque projet est une opportunité d’apprendre : que ce soit une nouvelle librairie, 
            un concept d’architecture ou une manière plus élégante d’écrire une fonction.  
            J’ai une vraie <strong>culture de l’amélioration continue</strong> : apprendre, comprendre, partager.
          </p>
          <br />
          <p className="mb-0">
            Mon objectif n’est pas seulement de développer des applications,
            mais de <strong>progresser en permanence</strong> en technique comme en créativité
            tout en gardant cette étincelle de curiosité qui m’a donné envie de coder la première fois.
          </p>
        </div>
      </div>

      {/* Ce que j’aime construire (on laisse le rappel violet si tu veux) */}
      <div className="card emerald-hover p-6">
        <h2 className="heading-sub mb-4 text-stone-800 dark:text-stone-100">
          Ce que j’aime construire
        </h2>
        <div className="flex flex-wrap gap-2 text-sm">
          {[
            'Back-office clair',
            'Dashboards utiles',
            'Apps mobiles simples',
            'UIs accessibles',
            'APIs propres',
            'Automatisation',
          ].map((chip) => (
            <span
              key={chip}
              className="px-3 py-1 rounded-full border border-violet-300/60 bg-violet-50 text-violet-700
                         dark:border-violet-700/60 dark:bg-violet-900/30 dark:text-violet-200"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
