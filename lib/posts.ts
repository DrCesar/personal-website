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
    sections: {
      heading: string;
      paragraphs: string[];
      hasInteractiveDemo?: boolean;
    }[];
  };
}

export const POSTS: Post[] = [
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
