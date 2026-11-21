export interface PostTable {
  caption?: string;
  columns: string[];
  rows: string[][];
}

export interface PostSection {
  heading: string;
  /** Paragraphs support inline links, **bold**, and `code`. */
  paragraphs: string[];
  bullets?: string[];
  table?: PostTable;
  callout?: string;
  hasInteractiveDemo?: boolean;
}

export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  tags: string[];
  featured?: boolean;
  content: {
    lead: string;
    sections: PostSection[];
    sources?: { label: string; url: string }[];
  };
}

export const POSTS: Post[] = [
  {
    slug: "the-state-of-agent-ides-2026",
    title: "The State of Agent IDEs: Nobody Is Selling You an Agent Anymore",
    description: "T3 Code, Orca, Paradev, Herdr, and Kiro Crew all launched within a year of each other. None of them ships a model. A field guide to the agent control plane, and what it still gets wrong.",
    date: "2026-11-21",
    readingTime: "14 min read",
    tags: ["AI", "Developer Tools", "Agents"],
    featured: true,
    content: {
      lead: "I set out to compare five agentic IDEs and found that none of them is an IDE, and none of them is an agent. They are all the same thing wearing five different interfaces: a management layer for coding agents you already pay for somebody else to run.",
      sections: [
        {
          heading: "The thing I got wrong before I started",
          paragraphs: [
            "I went looking for a shootout. Five products, five agents, pick a winner. What I found instead is that **every one of these tools explicitly refuses to be the agent**. They do not ship a model. Most of them will not even proxy a model call on your behalf.",
            "Paradev says it in its README: \"Paradev is not a coding agent itself. You bring your own agent subscriptions and API keys, and Paradev does not proxy model calls.\" Herdr's README is blunter: it \"runs what you already run ... herdr doesn't wrap or replace them; it owns their terminals.\" T3 Code's own FAQ reaches for a restaurant metaphor: \"Chef = LLM. Kitchen = harness. T3 Code = the restaurant that lets you bring whatever kitchen you want.\"",
            "A commenter on Hacker News gave the category the name it deserves while talking about Herdr: \"This is more like a harness for harnesses.\" That is the whole story of this cohort. The interesting software in 2026 is not the agent. It is the thing that decides which agent runs where, on which branch, with whose permission, and who reads the diff afterward.",
            "Once you see it that way the lineup stops looking like competitors and starts looking like a census. So here is the census, with every number pulled from the GitHub API on the day of writing rather than from anybody's marketing page."
          ]
        },
        {
          heading: "The five, at a glance",
          paragraphs: [
            "Four of the five are genuinely open source. All five are free to run. Four of them were created within a seven month window, and three of those within seven weeks of each other in early 2026, which is less a coincidence than a signal that everyone noticed the same gap at the same time."
          ],
          table: {
            columns: ["Tool", "Repo", "Stars", "License", "Repo created", "Shape"],
            rows: [
              [
                "Orca",
                "[stablyai/orca](https://github.com/stablyai/orca)",
                "131,872",
                "MIT",
                "2026-03-17",
                "Electron desktop, mobile apps, CLI"
              ],
              [
                "T3 Code",
                "[pingdotgg/t3code](https://github.com/pingdotgg/t3code)",
                "69,343",
                "MIT",
                "2026-02-08",
                "Electron desktop, web, native mobile, CLI"
              ],
              [
                "Herdr",
                "[herdrdev/herdr](https://github.com/herdrdev/herdr)",
                "52,196",
                "Apache-2.0",
                "2026-03-27",
                "Rust TUI, GPU desktop app, mobile over SSH"
              ],
              [
                "Paradev",
                "[ParadevAI/Paradev](https://github.com/ParadevAI/Paradev)",
                "16,453",
                "MIT (only since 2026-11-04)",
                "2025-10-21",
                "Electron desktop, CLI, iOS, cloud workspaces"
              ],
              [
                "Kiro Crew",
                "[kirodotdev/KiroCrew](https://github.com/kirodotdev/KiroCrew)",
                "5,026",
                "Apache-2.0",
                "2026-07-16",
                "Gateway daemon, web dashboard, desktop, chat apps"
              ]
            ],
            caption: "Star counts and metadata read from the GitHub REST API on 2026-11-21. Treat stars as a measure of attention, not quality: Orca earned ~132k of them in eight months, which is remarkable and worth a raised eyebrow rather than a conclusion."
          }
        },
        {
          heading: "What each one actually is",
          paragraphs: [
            "Stripped of positioning, here is the one sentence version of each."
          ],
          bullets: [
            "**Orca** ([orca.dev](https://orca.dev/)), from YC-backed Stably AI, is a desktop shell that runs about 34 different agent CLIs in real git worktrees and hosts zero compute itself. Its pitch is \"bring your own everything\": your subscription, your laptop or your server, your tools. It adds Slack, Linear, and GitHub bots plus a real mobile app, so an agent can be triggered from a chat message and reviewed line by line on your desktop later.",
            "**T3 Code** ([t3.codes](https://t3.codes/)), from Theo Browne's T3 Tools, is the same idea with the best taste in workflow details. It has four explicit permission modes, mid-thread handoff from Claude to Codex, and a PR watcher that polls your pull request every two minutes and wakes the agent when CI goes red. There is no way to pay them: \"There's no way to pay us to use T3 Code.\"",
            "**Herdr** ([herdr.dev](https://herdr.dev/)), a solo-founder project with a $6M Bessemer seed, goes one layer lower. It is Rust, it owns the PTY under every agent CLI, and it therefore reads each agent's lifecycle state (idle, working, blocked, done) without integrating with any vendor. That buys it a cross-vendor inbox of every agent on every machine, and an `agent.wait` primitive where one agent blocks until a sibling of a different vendor is genuinely stuck on a human.",
            "**Paradev** ([paradev.com](https://paradev.com/)), formerly Superset, with an $11.5M USV seed, is the most commercial and the most review-oriented. It has the best diff and pull request surface of the group, including stacked PRs, a merge queue, and the ability to select lines in a diff and send them straight to the agent. It is also the only one with real cloud sandboxes.",
            "**Kiro Crew** ([kiro.dev/crew](https://kiro.dev/crew/)), from AWS, is the odd one out and the most architecturally serious. It began as an internal Amazon side project called MeshClaw, it is Apache-2.0 with its engineering decision records published in the open, and it is built around durable named \"bots\" that have their own memory, goals, worktree branch, and check-ins rather than around ephemeral sessions."
          ]
        },
        {
          heading: "The feature matrix",
          paragraphs: [
            "The honest version of a comparison table is one where the columns expose the disagreements rather than the agreements. All five do parallel agents in git worktrees, all five have some flavor of subagent fan-out, and all five let you run on a remote machine you own. Here is where they actually part ways."
          ],
          table: {
            columns: ["", "Orca", "T3 Code", "Herdr", "Paradev", "Kiro Crew"],
            rows: [
              ["Agent CLIs driven", "~34", "~10 plus any ACP agent", "~25", "20+ plus custom", "6 over ACP"],
              ["Ships its own model", "No", "No", "No", "No", "Yes, and no BYO key"],
              ["Price", "Free", "Free", "Free", "Free to $200/seat", "Needs a Kiro plan, $0 to $200"],
              ["OS-level sandbox", "No", "Delegated", "No, explicitly", "Cloud only", "**Yes**, Seatbelt and namespaces"],
              ["Own permission layer", "Inherited", "**4 modes**", "None", "None", "**Per-bot grants**"],
              ["Diff and review UX", "Strong, line annotations", "Strong, per-turn files", "Absent in core", "**Best, stacked PRs**", "Review agent, draft PR"],
              ["MCP", "Yes, per-bot", "Inverted, is a server", "**None found**", "Inverted, is a server", "Yes, plus app SDK"],
              ["Native mobile", "iOS and Android", "iOS and Android", "iOS and Android", "iOS only", "Chat surfaces"],
              ["Windows", "Yes", "Yes", "Yes", "**No**", "Yes"],
              ["Audit log", "No", "Activity log", "No", "Enterprise tier", "**HMAC-chained**"],
              ["Open to outside PRs", "Yes", "Discussion first", "**No, auto-closed**", "Yes, CLA", "Yes, public governance"]
            ],
            caption: "Compiled from each project's own docs, repo, and changelog in November 2026. Everything here moves fast enough that you should check before quoting it."
          }
        },
        {
          heading: "Four axes that actually matter",
          paragraphs: [
            "If you are choosing, ignore the feature checklists and ask four questions.",
            "**Who owns the model bill?** Four of these tools refuse to resell you tokens, which structurally eliminates lock-in: your Claude Max or Codex subscription does the thinking, and the tool coordinates. Kiro Crew inverts this. It is the most open codebase of the five and the most closed inference path: no bring-your-own key, no Bedrock, no OpenAI-compatible endpoint, and your usage is metered in credits against a Kiro plan. Its own FAQ warns that \"a big goal can use more of your Kiro plan than a single chat.\" That is the real trade in this cohort, and it is not the one the marketing pages argue about.",
            "**What is the isolation boundary?** Almost everyone here answers \"a git worktree,\" and a git worktree is not a security boundary. It stops two agents editing the same file. It does nothing about an agent running `curl` against your credentials. Orca's own security docs concede agents execute \"as your user\"; Herdr's are refreshingly explicit that its file API \"is not a security boundary.\" Only Kiro Crew ships an actual OS sandbox (macOS Seatbelt, Linux namespaces) with a documented posture of \"failure is refusal, not degradation,\" and only Paradev gives you a real sandbox by moving the work to cloud VMs. If you are running agents with full access on a machine that holds production credentials, this row is the only one that matters.",
            "**Where does review happen?** This is the actual bottleneck and the best predictor of whether a tool will help you. Paradev and T3 Code treat the diff as the product. Herdr treats review as somebody else's job and ships none, which is coherent given it positions itself as a runtime, and a problem if you expected an IDE.",
            "**How much autonomy can you revoke?** T3 Code's four permission modes and Kiro Crew's per-bot tool grants are the only first-party answers. Paradev delegates approval gating entirely to the wrapped agent, which means for a product whose headline is \"Run an Army of Coding Agents,\" there is no army-level guardrail."
          ],
          callout: "The pattern across all five: the orchestration problem is largely solved, and the governance problem is barely started. Four of five have no cost attribution per task, no spend caps, and no audit trail. Kiro Crew's conductor cannot break a goal's cost down by task, and says so in its own launch post."
        },
        {
          heading: "The number nobody wants on the landing page",
          paragraphs: [
            "Paradev's marketing says \"Run 100+ coding agents in parallel.\" Buried in a Hacker News thread, one of its own team members gave the real figure: \"For bug fixes and quick changes I can definitely get to 5-7 in parallel, but for real work I can only do 2-3 agents in parallel. Human review still remains the eventual bottleneck.\"",
            "That is the most useful sentence I read in two days of research, and it came from a vendor arguing against their own headline. The best framing of why came from another commenter in the same thread: \"The real bottleneck isn't human review per se, it's unstructured review. Parallel agents only make sense if each worktree has a tight contract: scoped task, invariant tests, and a diff small enough to audit quickly. Without that, you're just converting 'typing time' into 'reading time,' which is usually worse.\"",
            "Read the category through that lens and the rankings shift. Tools that invest in contracts and verification are solving the real problem. Kiro Crew's conductor is the clearest example: it has no file-editing tool at all, because the team found that every turn the conductor spent fixing code made its checking worse. Workers report structured status with evidence links, and an `accept_eval` gate checks that evidence against the task's completion condition before anything is marked done. Three failures and the task is closed as rejected.",
            "Meanwhile tools that invest only in fan-out are selling you a faster way to generate work you cannot inspect."
          ]
        },
        {
          heading: "What this cohort has already cost its own category",
          paragraphs: [
            "Two pieces of context that explain the timing. **Conductor, the tool that defined this niche, was acquired by Meta** and announced it was winding down on 2026-11-04. Within a day, Orca, Paradev, and others had shipped migration guides that import Conductor worktrees directly, and their founders were in the Hacker News thread pitching the refugees. Paradev relicensed from Elastic License 2.0 to MIT the same day, though no source states the two events are connected.",
            "The second is naming churn worth knowing if you search for any of this: **Paradev was called Superset until 2026-10-26**, and `superset.sh` still redirects to paradev.com. If you find a comparison that pits Orca against \"superset.sh,\" it is comparing Orca to Paradev."
          ]
        },
        {
          heading: "Picking one",
          paragraphs: [
            "No winner, because they optimize for different fears."
          ],
          bullets: [
            "You want the most momentum and the widest agent support, and you review diffs carefully yourself: **Orca**.",
            "You want the best-judged workflow details and the CI loop, and you trust Theo's taste: **T3 Code**.",
            "You live in a terminal, you want a Rust binary rather than Electron, and you want a runtime rather than an IDE: **Herdr**.",
            "You care most about reviewing what the agents produced, you want stacked PRs, and you will pay for cloud isolation: **Paradev**.",
            "You need an actual sandbox, an audit log, and durable agents with memory, and you can live with metered credits and no BYO key: **Kiro Crew**.",
            "You are not already running two or more agents in parallel: **none of them**. A Hacker News commenter's verdict on Herdr generalizes to the whole category: \"if you don't do any agentic work, Herdr has 0 value vs. tmux.\""
          ]
        }
      ],
      sources: [
        { label: "Orca, orca.dev", url: "https://orca.dev/" },
        { label: "Orca on GitHub, stablyai/orca", url: "https://github.com/stablyai/orca" },
        { label: "T3 Code, t3.codes", url: "https://t3.codes/" },
        { label: "T3 Code on GitHub, pingdotgg/t3code", url: "https://github.com/pingdotgg/t3code" },
        { label: "Herdr, herdr.dev", url: "https://herdr.dev/" },
        { label: "Herdr on GitHub, herdrdev/herdr", url: "https://github.com/herdrdev/herdr" },
        { label: "Herdr: coding agents are becoming runtimes", url: "https://herdr.dev/blog/coding-agents-are-becoming-runtimes/" },
        { label: "Paradev, paradev.com", url: "https://paradev.com/" },
        { label: "Paradev on GitHub, ParadevAI/Paradev", url: "https://github.com/ParadevAI/Paradev" },
        { label: "Superset is now Paradev", url: "https://paradev.com/blog/superset-is-now-paradev" },
        { label: "Launch HN: Superset (YC P26), with the parallelism debate", url: "https://news.ycombinator.com/item?id=48236770" },
        { label: "Kiro Crew", url: "https://kiro.dev/crew/" },
        { label: "Kiro Crew on GitHub, kirodotdev/KiroCrew", url: "https://github.com/kirodotdev/KiroCrew" },
        { label: "Introducing Kiro Crew", url: "https://kiro.dev/blog/introducing-kiro-crew/" },
        { label: "Kiro Crew conductor mode, on why the conductor cannot edit files", url: "https://kiro.dev/blog/conductor-mode/" },
        { label: "Kiro pricing and credit model", url: "https://kiro.dev/pricing/" }
      ]
    }
  },
  {
    slug: "crafting-reactive-canvas-interfaces",
    title: "Crafting Reactive Canvas Interfaces with Physics and Shaders",
    description: "Exploring the boundary between generative graphics and interface design, using HTML5 Canvas, springs, and WebGL fragments.",
    date: "2026-11-15",
    readingTime: "6 min read",
    tags: ["Creative Tech", "Canvas", "WebGL"],
    featured: true,
    content: {
      lead: "Interfaces do not have to be rigid rectangles. By infusing subtle physics and procedural noise into canvas layers, digital spaces begin to feel organic, reactive, and tactile.",
      sections: [
        {
          heading: "The Soul of Interactive Graphics",
          paragraphs: [
            "Drawing inspiration from creative technologists like Justin Windle (Soulwire) and design engineers like Maxime Heckel, this exploration reconsiders what happens when a web page is treated like an interactive installation.",
            "Instead of static backgrounds, we create responsive particle fields that deform based on cursor velocity, gravitational pulls, and ambient relaxation loops. The challenge is balancing visual fidelity with performance, targeting 60 frames per second on both low-power laptops and high refresh-rate monitors."
          ],
          hasInteractiveDemo: true
        },
        {
          heading: "Spring Physics vs Linear Interpolation",
          paragraphs: [
            "Linear interpolation (lerp) produces smooth motion, but spring mechanics bring natural bounce, overshoot, and friction. When an element responds with physical weight, users intuitively understand the boundary of their actions.",
            "By tuning stiffness and damping constants, we can make interactions feel snappy like a mechanical switch, or fluid like liquid mercury."
          ]
        },
        {
          heading: "Layering Typography on Generative Surfaces",
          paragraphs: [
            "A common trap in creative coding is allowing the generative layer to overpower the content. Paul Stamatiou emphasizes that editorial craft must always remain legible. The canvas belongs underneath, muted and restrained, serving as an atmospheric canvas rather than a distraction."
          ]
        }
      ]
    }
  },
  {
    slug: "the-art-of-editorial-web-design",
    title: "The Art of Editorial Web Design: Craft, Typography, and Whitespace",
    description: "How high editorial standards from print translate into modern digital experiences with modern web typography.",
    date: "2026-10-28",
    readingTime: "5 min read",
    tags: ["Design", "Typography", "Editorial"],
    featured: true,
    content: {
      lead: "Great design is often about what you choose to leave out. Whitespace gives thoughts room to breathe, while deliberate typography guides the eye with rhythm and cadence.",
      sections: [
        {
          heading: "Choosing the Right Typefaces",
          paragraphs: [
            "A well-crafted typeface carries emotional weight before a single word is consciously read. Pairing a clean geometric sans with an expressive editorial serif grounds your essays in timeless tradition while feeling crisp on high-density screens.",
            "We focus on font features such as tabular figures for dates, contextual alternates, and optical sizing."
          ]
        },
        {
          heading: "Reading Modes and Ambient Lighting",
          paragraphs: [
            "Dark mode should never be pure black on pure white, which strains the retina. Instead, deep zinc, subtle warm undertones, and muted off-white type create an inviting nocturnal reading environment."
          ]
        }
      ]
    }
  },
  {
    slug: "micro-interactions-and-tactile-ui",
    title: "Micro-Interactions and Tactile Web Interfaces",
    description: "Adding whimsy, feedback, and delightful tactile states to buttons, toggles, and cards without sacrificing speed.",
    date: "2026-09-12",
    readingTime: "4 min read",
    tags: ["Frontend", "Animation", "UX"],
    featured: false,
    content: {
      lead: "Small details make products memorable. Inspired by the CSS whimsy of Jhey Tompkins, we explore subtle haptics, spring animations, and multi-state interactions.",
      sections: [
        {
          heading: "Tactile Feedback in a Glass World",
          paragraphs: [
            "On touchscreens and trackpads, users crave confirmation. A subtle scale reduction on active press, paired with a spring release, creates an uncanny sense of physical resistance."
          ]
        }
      ]
    }
  }
];
