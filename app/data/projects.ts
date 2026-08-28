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
    title: "CodeClash",
    subtitle: "Real-Time Competitive Coding Platform",
    recognition: "2nd Place, HackWesTX. Top 3, Google x MLH AI Roadshow.",
    certificate: "/certificates/codeclash.png",
    metrics: [
      "<200ms sync",
      "50+ concurrent matches",
      "10,000+ submissions",
      "99.5% execution success",
    ],
    architecture: [
      ["React Client", "WebSocket Layer", "Match State", "Judge0 Sandbox", "Results"],
    ],
    screenshots: [{ src: "/screenshots/codeclash.png", caption: "" }],
    blocks: [
      {
        label: "System",
        body: "Real-time multiplayer coding platform with live synchronized match state.",
      },
      {
        label: "My Work",
        body: "Built the platform architecture, real-time state flow, code execution integration, and backend communication in 24 hours using React, Flask, WebSockets, PostgreSQL, and Judge0.",
      },
      {
        label: "Hard Problem",
        body: "Keeping concurrent match state synchronized while executing untrusted code without making the UI feel slow.",
      },
      {
        label: "Results",
        body: "Sub-200ms match synchronization across concurrent users, with execution isolated from UI state through sandboxed judging.",
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
      { label: "Live Demo", href: null },
      { label: "GitHub", href: null },
    ],
  },
  {
    slug: "selt",
    title: "SELT Multi-Campus Demo",
    subtitle: "Multi-Tenant Marketplace Test Platform",
    recognition: "Live instances: Texas Tech, Texas A&M, Baylor, Stanford, UT Austin.",
    metrics: ["5 campus instances", "1 shared codebase", "runtime config"],
    architecture: [
      ["campus subdomain", "runtime config", "shared component system", "campus UI"],
    ],
    screenshots: [
      { src: "/screenshots/selt-ttu.png", caption: "Texas Tech" },
      { src: "/screenshots/selt-tamu.png", caption: "Texas A&M" },
      { src: "/screenshots/selt-baylor.png", caption: "Baylor" },
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
    title: "IntelliSpeech",
    subtitle: "Real-Time AI Voice Translation",
    recognition: "Best Overall Project, SEO Tech Developer Innovation Showcase.",
    certificate: "/certificates/intellispeech.png",
    metrics: ["WebRTC", "packet resequencing", "bounded queues"],
    architecture: [
      ["Audio Input", "WebRTC", "Translation", "Voice Synthesis", "Playback"],
      ["incoming packets", "resequencing buffer", "bounded queue", "playback"],
    ],
    screenshots: [{ src: "/screenshots/intellispeech.png", caption: "" }],
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
