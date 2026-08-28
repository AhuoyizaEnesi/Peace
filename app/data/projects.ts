export interface Project {
  slug: string
  title: string
  subtitle: string
  metrics: string[]
  architecture: string[][]
  blocks: { label: string; body: string }[]
  notes: string[]
  slabColor: string
  marginNote: string
  recognition?: string
  certificate?: string
  certificateImage?: { alt: string; width: number; height: number }
  screenshots: { src: string; alt: string; width: number; height: number; caption?: string }[]
  photos?: { src: string; alt: string; width: number; height: number }[]
  photosCaption?: string
  links: { label: string; href: string | null }[]
}

export const projects: Project[] = [
  {
    slug: "codeclash",
    slabColor: "var(--slab-1)",
    marginNote: "built in 24h. placed 2nd. the execution layer exists, wiring it live is next.",
    title: "CodeClash",
    subtitle: "Real-Time Competitive Coding Platform",
    recognition: "2nd Place, HackWesTX. Top 3, Google x MLH AI Roadshow.",
    certificate: "https://devpost.com/software/codeclash-xje93y",
    metrics: ["24h build", "2nd place hackwestx", "top 3 google x mlh"],
    architecture: [["react client", "socket.io rooms", "match state", "judge0 helper"]],
    screenshots: [
      {
        src: "/screenshots/codeclash.png",
        alt: "CodeClash match room showing the Two Sum Challenge prompt on the left, a JavaScript code editor with Run Tests and Submit buttons on the right, a battle chat panel, and You versus Opponent progress bars",
        width: 1883,
        height: 953,
        caption: "",
      },
    ],
    photos: [
      {
        src: "/photos/mlh-presenting.png",
        alt: "Peace Enesi presenting CodeClash with a microphone at the Google x MLH AI Roadshow in Austin, with the team slide on a screen behind",
        width: 1600,
        height: 1067,
      },
      {
        src: "/photos/mlh-team.png",
        alt: "The CodeClash team presenting in front of the MLH AI Roadshow banner to a seated audience",
        width: 1600,
        height: 1067,
      },
      {
        src: "/photos/mlh-slide.png",
        alt: "Meet Our Team slide on a screen showing the four Texas Tech team members with their names and majors, next to the MLH logo",
        width: 1600,
        height: 1067,
      },
    ],
    photosCaption: "google x mlh ai roadshow, austin",
    blocks: [
      {
        label: "System",
        body: "Head-to-head competitive coding prototype built in 24 hours at HackWesTX.",
      },
      {
        label: "My Work",
        body: "Built the React client, the Express API with Google OAuth sign-in, the Socket.IO match layer for rooms, chat, and live progress, and a Judge0 code execution helper.",
      },
      {
        label: "Hard Problem",
        body: "Scoping a real-time competitive system to something demoable in one day without faking the architecture: the match layer and execution helper are real code, the demo simulates results on top of them.",
      },
      {
        label: "Status",
        body: "Prototype. The deployed demo runs Google auth plus a single-player simulation. Wiring the Socket.IO handlers and Judge0 into the live server is the next step.",
      },
    ],
    notes: [
      "Event model",
      "Match state ownership",
      "Code execution lifecycle",
      "Retry and error handling",
      "Concurrency assumptions",
    ],
    links: [
      { label: "Live Demo", href: "https://code-clash.netlify.app" },
      { label: "GitHub", href: "https://github.com/AhuoyizaEnesi/codeclash" },
      { label: "Devpost", href: "https://devpost.com/software/codeclash-xje93y" },
    ],
  },
  {
    slug: "selt",
    slabColor: "var(--slab-2)",
    marginNote: "live product. 350+ active users, five campus instances, one codebase.",
    title: "SELT Multi-Campus Demo",
    subtitle: "Multi-Tenant Marketplace Test Platform",
    recognition: "Live instances: Texas Tech, Texas A&M, Baylor, Stanford, UT Austin.",
    metrics: ["5 campus instances", "1 shared codebase", "runtime config"],
    architecture: [
      ["campus subdomain", "runtime config", "shared component system", "campus UI"],
    ],
    screenshots: [
      {
        src: "/screenshots/selt-ttu.png",
        alt: "SELT Explore page branded as RaiderSELT for Texas Tech, with the Texas Tech logo, a search bar, and a list of demo marketplace listings with red price badges",
        width: 1488,
        height: 812,
        caption: "Texas Tech",
      },
      {
        src: "/screenshots/selt-tamu.png",
        alt: "SELT Explore page branded as AggieSELT for Texas A&M, with the Texas A&M logo, a search bar, and the same list of demo marketplace listings with maroon price badges",
        width: 1488,
        height: 812,
        caption: "Texas A&M",
      },
      {
        src: "/screenshots/selt-baylor.png",
        alt: "SELT Explore page branded as BearSELT for Baylor, with the Baylor logo, a search bar, and the same list of demo marketplace listings with green price badges",
        width: 1488,
        height: 812,
        caption: "Baylor",
      },
    ],
    blocks: [
      {
        label: "System",
        body: "Multi-tenant marketplace test environment serving five university instances from one codebase.",
      },
      {
        label: "Architecture",
        body: "Next.js and TypeScript with runtime configuration, subdomain routing, and campus-specific theming.",
      },
      {
        label: "Hard Problem",
        body: "Making each deployment feel native without duplicating application logic.",
      },
      {
        label: "Design Decision",
        body: "Shared primitives and route logic stay global. Branding, content, and configuration resolve dynamically per campus.",
      },
    ],
    notes: [
      "Tenant resolution",
      "Config loading",
      "Schema strategy",
      "Deployment model",
      "Test environment separation",
    ],
    links: [{ label: "Live Demo", href: "https://test.app.seltapp.com" }],
  },
  {
    slug: "intellispeech",
    slabColor: "var(--slab-3)",
    marginNote: "team project. won best overall at the SEO showcase.",
    title: "IntelliSpeech",
    subtitle: "Real-Time AI Voice Translation",
    recognition: "Best Overall Project, SEO Tech Developer Innovation Showcase.",
    certificate: "/certificates/intellispeech.png",
    certificateImage: {
      alt: "Best Overall Project certificate, SEO Tech Developer Innovation Showcase",
      width: 835,
      height: 831,
    },
    metrics: ["WebRTC", "packet resequencing", "bounded queues"],
    architecture: [
      ["Audio Input", "WebRTC", "Translation", "Voice Synthesis", "Playback"],
      ["incoming packets", "resequencing buffer", "bounded queue", "playback"],
    ],
    screenshots: [
      {
        src: "/screenshots/intellispeech.png",
        alt: "IntelliSpeech landing page reading Welcome to IntelliSpeech, talk, without barriers, with Sign In to Start and Sign Up to Host buttons between a phone and a laptop illustration",
        width: 1536,
        height: 700,
        caption: "",
      },
    ],
    blocks: [
      {
        label: "System",
        body: "Real-time speech translation during live calls between two people speaking different languages.",
      },
      {
        label: "My Work",
        body: "Built parts of the live communication and AI audio pipeline. React, TypeScript, WebRTC for peer to peer media, Socket.IO for signaling, ElevenLabs for speech synthesis, Supabase for auth and data, Vitest for tests.",
      },
      {
        label: "Failure Mode",
        body: "Audio packets arrived out of order and queues grew unbounded under load, degrading playback and raising latency.",
      },
      {
        label: "Fix",
        body: "Packet resequencing and backpressure controls preserve playback order and prevent runaway latency.",
      },
    ],
    notes: [
      "Packet ordering",
      "Queue bounds",
      "Reconnect behavior",
      "Latency tradeoffs",
      "Failure recovery",
    ],
    links: [
      { label: "Live Demo", href: "https://intelli-speech.vercel.app" },
      { label: "GitHub", href: "https://github.com/johanngg7/IntelliSpeech" },
    ],
  },
]
