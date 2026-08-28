export interface Project {
  slug: string
  title: string
  subtitle: string
  metrics: string[]
  architecture: string[][]
  blocks: { label: string; body: string }[]
  notes: string[]
  recognition?: string
  certificate?: string
  screenshots: { src: string; caption?: string }[]
  links: { label: string; href: string | null }[]
}

export const projects: Project[] = [
  {
    slug: "codeclash",
    title: "",
    subtitle: "",
    metrics: [],
    architecture: [],
    blocks: [],
    notes: [],
    screenshots: [],
    links: [],
  },
  {
    slug: "selt",
    title: "",
    subtitle: "",
    metrics: [],
    architecture: [],
    blocks: [],
    notes: [],
    screenshots: [],
    links: [],
  },
  {
    slug: "intellispeech",
    title: "",
    subtitle: "",
    metrics: [],
    architecture: [],
    blocks: [],
    notes: [],
    screenshots: [],
    links: [],
  },
]
