import SkillBar from "../components/SkillBar";

export default function Skills() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <h1 className="heading-hero mb-8">Compétences</h1>

      {/* Frontend + Backend */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {/* Frontend */}
        <section className="card-lite p-4 md:p-5 skill-group">
          <h2 className="skill-title mb-4 text-stone-800 dark:text-stone-100">
            Frontend
          </h2>
          <SkillBar name="HTML" level={95} color="violet" />
          <SkillBar name="CSS" level={85} color="violet" />
          <SkillBar name="JavaScript" level={70} color="violet" />
          <SkillBar name="React" level={70} color="violet" />
          <SkillBar name="Next.js" level={60} color="violet" />
          <SkillBar name="TailwindCSS" level={70} color="violet" />
          <SkillBar name="Flowbite" level={50} color="violet" />
        </section>

        {/* Backend */}
        <section className="card-lite p-4 md:p-5 skill-group">
          <h2 className="skill-title mb-4 text-stone-800 dark:text-stone-100">
            Backend
          </h2>
          <SkillBar name="Django" level={70} color="violet" />
          <SkillBar name="Java" level={83} color="violet" />
          <SkillBar name="PHP" level={72} color="violet" />
          <SkillBar name="Laravel" level={85} color="violet" />
          <SkillBar name="Python" level={70} color="violet" />
          <SkillBar name="Express.js" level={50} color="violet" />
          <SkillBar name="Node.js" level={60} color="violet" />
        </section>
      </div>

      {/* Bases de données + Systèmes & Réseaux */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Bases de données */}
        <section className="card-lite p-4 md:p-5 skill-group">
          <h2 className="skill-title mb-4 text-stone-800 dark:text-stone-100">
            Bases de données
          </h2>
          <SkillBar name="MySQL" level={85} color="emerald" />
          <SkillBar name="MongoDB" level={70} color="emerald" />
          <SkillBar name="SQLite" level={60} color="emerald" />
          <SkillBar name="MariaDB" level={80} color="emerald" />
          <SkillBar name="PostgreSQL" level={50} color="emerald" />
        </section>

        {/* Systèmes & Réseaux */}
        <section className="card-lite p-4 md:p-5 skill-group">
          <h2 className="skill-title mb-4 text-stone-800 dark:text-stone-100">
            Systèmes & Réseaux
          </h2>
          <SkillBar name="Windows" level={90} color="bluegreen" />
          <SkillBar name="Linux" level={80} color="bluegreen" />
          <SkillBar name="macOS" level={60} color="bluegreen" />
          <SkillBar name="Admin Réseaux" level={70} color="bluegreen" />
        </section>
      </div>
    </section>
  );
}
