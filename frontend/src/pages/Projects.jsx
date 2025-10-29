import { useEffect, useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import { api } from '../utils/api'

const FILTERS = ['Tous', 'Web', 'Mobile', 'Data']

export default function Projects() {
  const [filter, setFilter] = useState('Tous')
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const load = async () => {
      const tag = filter === 'Tous' ? '' : filter.toLowerCase()
      const res = await api.get(`/projects${tag ? `?tag=${tag}` : ''}`)
      setProjects(res.data)
    }
    load()
  }, [filter])

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <div className="flex items-center justify-between gap-4 mb-6">
      <h1 className="heading-hero mb-8">Projets</h1>
        <div className="flex gap-2">
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1 rounded-xl border text-sm ${filter === f ? 'bg-emerald-500 text-white border-transparent' : 'border-stone-300 dark:border-stone-700'}`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map(p => <ProjectCard key={p.slug} project={p} />)}
      </div>
    </section>
  )
}




