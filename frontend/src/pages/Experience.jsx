// src/pages/Experience.jsx
import { useEffect, useState } from "react"
import { api } from "../utils/api"

const FALLBACK = [
  {
    company: "Port Autonome de Dakar",
    role: "Développeuse Web & Logicielle",
    period: "Mai - Juil. 2025",
    description:
      "Conception et développement d’une application de gestion des escales maritimes et de facturation des prestations portuaires. Technologies : Java EE, JSP/Servlets, SQL, JDBC, Apache Tomcat.",
    stack: ["Java EE", "JSP/Servlets", "SQL", "Tomcat"],
  },
  {
    company: "CreaticStudio",
    role: "Développeuse Web",
    period: "Mai - Juil. 2024",
    description:
      "Mise en place d’une plateforme de mise en relation (UnityDesk) pour la gestion des grèves dans l’enseignement au Sénégal. Technologies : Laravel 11, TailwindCSS, Flowbite.",
    stack: ["Laravel 11", "TailwindCSS", "Flowbite"],
  },
  {
    company: "École supérieure polytechnique (ESP)",
    role: "Projets académiques",
    period: "2022 - 2025",
    description:
      "Projets variés web et mobile : administration réseaux et systèmes, développement d’applications et gestion de bases de données.",
    stack: ["React", "Next.js", "PHP", "Python"],
  },
]

export default function Experience() {
  const [items, setItems] = useState([])

  useEffect(() => {
    (async () => {
      try {
        const res = await api.get("/experience").catch(() => null)
        if (res?.data?.length) {
          setItems(res.data)
        } else {
          setItems(FALLBACK)
        }
      } catch {
        setItems(FALLBACK)
      }
    })()
  }, [])

  const data = items.length ? items : FALLBACK

  return (
    <section className="mx-auto max-w-4xl px-4 py-12 md:py-16 space-y-6">
      <h2 className="heading-hero mb-8">Expériences</h2>
      <ol className="relative border-s border-stone-300 dark:border-stone-700 space-y-8">
        {data.map((e, i) => (
          <li key={`${e.company}-${i}`} className="ms-6">
            <span className="absolute -start-3 mt-1 size-6 rounded-full bg-violet-500 shadow-[0_0_0_4px_rgba(139,92,246,.18)]"></span>
            <div className="card experience-card p-5 hover:shadow-[0_0_25px_rgba(168,85,247,0.45)] transition-all duration-300">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg md:text-xl font-semibold text-stone-900 dark:text-stone-100">
                  {e.role}{" "}
                  <span className="font-normal text-stone-600 dark:text-stone-300">
                    – {e.company}
                  </span>
                </h3>
                <span className="text-sm text-stone-500">{e.period}</span>
              </div>
              <p className="text-stone-700 dark:text-stone-200 mt-2">{e.description}</p>
              <div className="mt-2 text-sm text-stone-500">
                {e.stack?.join(" \u2022 ")}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
