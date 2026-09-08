export type ProjectImage = { src: string; alt: string };

export type ProjectSection = {
  label: string;
  heading?: string;
  text?: string;
  images: ProjectImage[];
  /** "full" = one image per row, "pair" = two-up grid */
  layout?: "full" | "pair";
};

export type Project = {
  slug: string;
  client: string;
  logo: string;
  descriptor: string;
  year: string;
  deliverables: string[];
  intro: string;
  challenge: { label: string; heading: string };
  solution: { label: string; heading: string };
  statement: string;
  hero: ProjectImage;
  sections: ProjectSection[];
  overview: string;
  cover: string;
  category: string;
};

export const projects: Project[] = [
  {
    slug: "confluence-trading-lab",
    client: "Confluence Trading Lab",
    logo: "/work/confluence-trading-lab/logo-icon.jpg",
    descriptor:
      "Brand identity and campaign design for Confluence Trading Lab, a trading education company helping people build the skills to grow their money in the markets.",
    year: "2025",
    deliverables: [
      "Brand Strategy",
      "Visual Identity",
      "Logo Design",
      "Collateral",
      "Environmental",
      "Digital",
    ],
    intro:
      "Confluence Trading Lab teaches people how markets actually work — and how to trade them with discipline. The brand had to feel credible enough for serious traders and open enough for beginners taking their first position.",
    challenge: {
      label: "The Challenge",
      heading: "Making a trading school feel trustworthy, not hype",
    },
    solution: {
      label: "The Solution",
      heading: "A data-driven identity built on a single chart mark",
    },
    statement:
      "One visual language. Every format, every surface, every scale.",
    hero: {
      src: "/work/confluence-trading-lab/02.jpg",
      alt: "Confluence Trading Lab billboard campaign on a residential street",
    },
    sections: [
      {
        label: "Logotype",
        heading: "A mark drawn from the chart itself",
        text: "The Confluence logotype is built from a staircase of bars that resolve into a “C” — a candlestick sequence and a container for everything the brand teaches. It works as a full lockup and collapses to a single glyph for small formats.",
        images: [
          { src: "/work/confluence-trading-lab/logo-lockup.jpg", alt: "Primary Confluence Trading Lab logo lockup" },
          { src: "/work/confluence-trading-lab/09.jpg", alt: "Logo lockup on the identity pattern" },
        ],
        layout: "pair",
      },
      {
        label: "Identity System",
        heading: "Electric blue, deep navy, one signal colour",
        text: "A tight palette — deep navy, electric blue and a single acid-green accent reserved for calls to action — keeps every layout disciplined. The bar motif scales into a repeating pattern used across packaging, apparel and backgrounds.",
        images: [
          { src: "/work/confluence-trading-lab/10.jpg", alt: "Identity pattern system" },
        ],
        layout: "full",
      },
      {
        label: "Stationery",
        images: [
          { src: "/work/confluence-trading-lab/06.jpg", alt: "Business card design" },
        ],
        layout: "full",
      },
      {
        label: "Merchandise",
        images: [
          { src: "/work/confluence-trading-lab/03.jpg", alt: "Branded tote bag" },
          { src: "/work/confluence-trading-lab/08.jpg", alt: "Branded apparel" },
        ],
        layout: "pair",
      },
      {
        label: "Environment",
        images: [
          { src: "/work/confluence-trading-lab/05.jpg", alt: "Logo on a boardroom wall" },
          { src: "/work/confluence-trading-lab/07.jpg", alt: "Exterior building signage" },
        ],
        layout: "pair",
      },
      {
        label: "Campaign",
        images: [
          { src: "/work/confluence-trading-lab/01.jpg", alt: "Framed campaign poster" },
        ],
        layout: "full",
      },
      {
        label: "Digital",
        images: [
          { src: "/work/confluence-trading-lab/04.jpg", alt: "App icon on an iPhone home screen" },
        ],
        layout: "full",
      },
    ],
    overview:
      "Confluence Trading Lab came to Synergis as a growing trading-education business with a serious curriculum and a scrappy, inconsistent brand. We ran a short strategy phase to sharpen the positioning — expert but accessible — then designed a full identity around a single chart-derived mark. The system now spans logo, pattern, stationery, merchandise, environmental signage, out-of-home campaigns and the product app icon, giving the company one confident voice across every place a prospective trader meets it.",
    cover: "/work/confluence-trading-lab/02.jpg",
    category: "Brand Identity",
  },
  {
    slug: "london-to-accra",
    client: "London to Accra",
    logo: "/work/london-to-accra/logo-icon.jpg",
    descriptor:
      "Event identity and environmental design for London to Accra, the Economic Growth Summit 2026 convened by the British High Commission in Accra with the Bank of Ghana.",
    year: "2026",
    deliverables: [
      "Event Identity",
      "Environmental Design",
      "Signage",
      "Stage Design",
      "Out-of-Home",
      "Digital",
    ],
    intro:
      "London to Accra is a bilateral summit connecting the two capitals around trade and investment. The identity had to carry official weight for the British High Commission and the Bank of Ghana while feeling energetic enough for a forward-looking economic agenda.",
    challenge: {
      label: "The Challenge",
      heading: "One identity for a summit spanning two capitals",
    },
    solution: {
      label: "The Solution",
      heading: "A hand-lettered wordmark in the colours of both nations",
    },
    statement: "Connecting capitals for economic growth.",
    hero: {
      src: "/work/london-to-accra/03.jpg",
      alt: "London to Accra summit stage with a curved LED backdrop",
    },
    sections: [
      {
        label: "Logotype",
        heading: "London to Accra, drawn by hand",
        text: "The wordmark sets a chromed, dimensional “LONDON” against a flat “ACCRA” in the red, gold and green of the Ghanaian flag, joined by a looping “to” and a 233·1957 dialling-code device that ties the UK and Ghana together.",
        images: [
          { src: "/work/london-to-accra/08.jpg", alt: "Primary London to Accra logo lockup" },
        ],
        layout: "full",
      },
      {
        label: "Stage",
        images: [
          { src: "/work/london-to-accra/03.jpg", alt: "Curved LED stage backdrop with lounge seating" },
        ],
        layout: "full",
      },
      {
        label: "Media Wall",
        images: [
          { src: "/work/london-to-accra/01.jpg", alt: "Step-and-repeat media wall with partner logos" },
        ],
        layout: "full",
      },
      {
        label: "Signage",
        images: [
          { src: "/work/london-to-accra/02.jpg", alt: "Suspended directional sign for the Economic Growth Summit 2026" },
          { src: "/work/london-to-accra/04.jpg", alt: "Summit wall graphic in a waiting area" },
        ],
        layout: "pair",
      },
      {
        label: "Out-of-Home",
        images: [
          { src: "/work/london-to-accra/07.jpg", alt: "Street poster: Connecting Capitals for Economic Growth" },
          { src: "/work/london-to-accra/06.jpg", alt: "Digital poster in a metro station" },
        ],
        layout: "pair",
      },
      {
        label: "Banners",
        images: [
          { src: "/work/london-to-accra/05.jpg", alt: "Telescopic pull-up banner on a rig" },
        ],
        layout: "full",
      },
    ],
    overview:
      "For the inaugural London to Accra Economic Growth Summit, Synergis built an event identity that had to sit comfortably beside the crests of the British High Commission and the Bank of Ghana. A hand-lettered wordmark bridges the two countries — a polished, metropolitan “LONDON” and a bold, flag-coloured “ACCRA” — and a 233·1957 device references both nations' dialling code and Ghana's year of independence. The system was rolled out across stage and set design, suspended and wall signage, step-and-repeat media walls, telescopic banners and a city-wide out-of-home campaign.",
    cover: "/work/london-to-accra/07.jpg",
    category: "Event Identity",
  },
  {
    slug: "fefeti",
    client: "Fefeti",
    logo: "/work/fefeti/logo-icon.jpg",
    descriptor:
      "Brand identity for Fefeti, a New York fashion label that reworks West African dress for a modern wardrobe — “Wear your modern heritage.”",
    year: "2025",
    deliverables: [
      "Brand Strategy",
      "Visual Identity",
      "Logo Design",
      "Pattern Design",
      "Packaging",
      "Campaign",
    ],
    intro:
      "Fefeti sits between two places — West African craft and a New York clientele. The identity had to feel rooted and ceremonial without becoming costume, and premium without losing warmth.",
    challenge: {
      label: "The Challenge",
      heading: "Heritage that reads as modern, not costume",
    },
    solution: {
      label: "The Solution",
      heading: "A branching tree mark and a monogram woven into pattern",
    },
    statement: "Wear your modern heritage.",
    hero: {
      src: "/work/fefeti/04.jpg",
      alt: "Fefeti street poster campaign",
    },
    sections: [
      {
        label: "Logotype",
        heading: "A tree that branches and roots at once",
        text: "The Fefeti mark is a single line drawn into a tree — canopy and root system mirrored — set beside a high-contrast serif wordmark with an “NY” stamp. It signals lineage, growth and a New York address in one move.",
        images: [
          { src: "/work/fefeti/09.jpg", alt: "Primary Fefeti logo lockup" },
        ],
        layout: "full",
      },
      {
        label: "Pattern",
        heading: "The initials, tessellated",
        text: "An interlocking “F” monogram builds into a repeating textile pattern used across scarves, packaging and product — a house cloth that works as both surface and signature.",
        images: [
          { src: "/work/fefeti/10.jpg", alt: "Fefeti monogram pattern" },
        ],
        layout: "full",
      },
      {
        label: "Stationery",
        images: [
          { src: "/work/fefeti/01.jpg", alt: "Fefeti membership card" },
          { src: "/work/fefeti/05.jpg", alt: "Coasters carrying the tree mark" },
        ],
        layout: "pair",
      },
      {
        label: "Merchandise",
        images: [
          { src: "/work/fefeti/08.jpg", alt: "Silk scarf in the monogram pattern" },
          { src: "/work/fefeti/07.jpg", alt: "Patterned water bottle" },
        ],
        layout: "pair",
      },
      {
        label: "Labelling",
        images: [
          { src: "/work/fefeti/06.jpg", alt: "Swing tag on a garment" },
        ],
        layout: "full",
      },
      {
        label: "Digital",
        images: [
          { src: "/work/fefeti/03.jpg", alt: "Fefeti website on a laptop" },
        ],
        layout: "full",
      },
      {
        label: "Campaign",
        images: [
          { src: "/work/fefeti/02.jpg", alt: "Pull-up banner: Wear Your Modern Heritage" },
        ],
        layout: "full",
      },
    ],
    overview:
      "Fefeti came to Synergis with a clear idea — contemporary clothing built on West African dress traditions — and needed a brand that could carry it in a New York market. We built the identity around a hand-drawn tree that reads as both canopy and roots, paired it with a sharp editorial serif, and developed an interlocking monogram into a full textile pattern. The system runs from membership cards and swing tags to scarves, drinkware, a commerce site and a city-wide campaign under the line “Wear your modern heritage.”",
    cover: "/work/fefeti/02.jpg",
    category: "Brand Identity",
  },
  {
    slug: "hoot",
    client: "Hoot",
    logo: "/work/hoot/logo-icon.jpg",
    descriptor:
      "Brand identity for Hoot, a members network for creators — the interlocking-rings mark stands for the community it connects.",
    year: "2025",
    deliverables: [
      "Brand Strategy",
      "Visual Identity",
      "Logo Design",
      "Pattern Design",
      "Merchandise",
      "Campaign",
    ],
    intro:
      "Hoot connects creators into one members network. The brand needed to feel social and generous rather than corporate, and hold together across a members' hub, printed collateral and a city-wide recruitment campaign.",
    challenge: {
      label: "The Challenge",
      heading: "A network brand that feels like people, not a platform",
    },
    solution: {
      label: "The Solution",
      heading: "Two rings that link — and a pattern built from them",
    },
    statement: "Where creators connect.",
    hero: {
      src: "/work/hoot/05.jpg",
      alt: "Hoot billboard: Join the Hoot Members Network Today",
    },
    sections: [
      {
        label: "Logotype",
        heading: "Two rings, always linked",
        text: "The Hoot mark is two overlapping rings — a simple sign for connection that reads at any size and embosses cleanly into fabric and paper. It pairs with a soft, rounded lowercase wordmark.",
        images: [
          { src: "/work/hoot/03.jpg", alt: "Hoot logo embossed on dark fabric" },
        ],
        layout: "full",
      },
      {
        label: "Identity",
        heading: "The mark, tiled into a pattern",
        text: "Repeating and overlapping the rings builds a lively surface pattern — used as a light watermark on purple and as a bold graphic in reverse.",
        images: [
          { src: "/work/hoot/09.jpg", alt: "Hoot icon badge on the ring pattern" },
          { src: "/work/hoot/10.jpg", alt: "Ring pattern in two treatments" },
        ],
        layout: "pair",
      },
      {
        label: "Stationery",
        images: [
          { src: "/work/hoot/01.jpg", alt: "Hoot business cards" },
        ],
        layout: "full",
      },
      {
        label: "Apparel",
        images: [
          { src: "/work/hoot/02.jpg", alt: "Hoot t-shirt" },
          { src: "/work/hoot/08.jpg", alt: "Hoot cap with the icon badge" },
        ],
        layout: "pair",
      },
      {
        label: "Merchandise",
        images: [
          { src: "/work/hoot/04.jpg", alt: "Hoot tote bag" },
        ],
        layout: "full",
      },
      {
        label: "Digital",
        images: [
          { src: "/work/hoot/07.jpg", alt: "Hoot website on a laptop" },
        ],
        layout: "full",
      },
      {
        label: "Campaign",
        images: [
          { src: "/work/hoot/06.jpg", alt: "Hoot recruitment standees" },
        ],
        layout: "full",
      },
    ],
    overview:
      "Hoot needed an identity that could carry a members network for creators without feeling like just another platform. Synergis built the brand on the simplest possible sign of connection — two interlocking rings — and developed it into a repeating pattern that gives every surface energy. The system spans logo and pattern, business cards, apparel and merchandise, a members' hub website and an out-of-home campaign built around the line “Join the Hoot Members Network.”",
    cover: "/work/hoot/05.jpg",
    category: "Brand Identity",
  },
  {
    slug: "val-transport",
    client: "Val Transport",
    logo: "/work/val-transport/logo-icon.jpg",
    descriptor:
      "Brand identity for Val Transport et Service, a car dealership and haulage company built around a lasting relationship with every customer.",
    year: "2025",
    deliverables: [
      "Brand Strategy",
      "Visual Identity",
      "Logo Design",
      "Pattern Design",
      "Fleet Livery",
      "Packaging",
      "Digital",
    ],
    intro:
      "Val Transport moves cars and cargo — a dealership and a haulage business under one name. The brand needed the warmth of a family firm and enough presence to hold its own on the side of a 40-tonne truck.",
    challenge: {
      label: "The Challenge",
      heading: "One brand for a showroom and a haulage fleet",
    },
    solution: {
      label: "The Solution",
      heading: "A road-in-motion mark set in a warm serif",
    },
    statement: "Your dream automobile is here.",
    hero: {
      src: "/work/val-transport/05.jpg",
      alt: "Val Transport billboard: Your Dream Automobile Is Here",
    },
    sections: [
      {
        label: "Logotype",
        heading: "A road that lifts off the ground",
        text: "The Val Transport mark stacks three tapering lanes that curve away like a road seen at speed — motion and forward travel in a single shape. It locks up with a warm, high-contrast serif that keeps the dealership side feeling personal.",
        images: [
          { src: "/work/val-transport/09.jpg", alt: "Primary Val Transport logo lockup" },
        ],
        layout: "full",
      },
      {
        label: "Pattern",
        heading: "The lanes, repeated into a texture",
        text: "Tiling the mark builds a directional pattern — a light outline on red, and a bold two-tone fill for packaging and interiors.",
        images: [
          { src: "/work/val-transport/01.jpg", alt: "Val Transport lane pattern in two treatments" },
        ],
        layout: "full",
      },
      {
        label: "Stationery",
        images: [
          { src: "/work/val-transport/02.jpg", alt: "Val Transport business card" },
        ],
        layout: "full",
      },
      {
        label: "Fleet",
        images: [
          { src: "/work/val-transport/06.jpg", alt: "Val Transport articulated truck livery" },
          { src: "/work/val-transport/03.jpg", alt: "Val Transport shipping containers" },
        ],
        layout: "pair",
      },
      {
        label: "Packaging",
        images: [
          { src: "/work/val-transport/07.jpg", alt: "Val Transport gift box" },
        ],
        layout: "full",
      },
      {
        label: "Merchandise",
        images: [
          { src: "/work/val-transport/08.jpg", alt: "Val Transport mug" },
        ],
        layout: "full",
      },
      {
        label: "Digital",
        images: [
          { src: "/work/val-transport/04.jpg", alt: "Val Transport website on a laptop" },
        ],
        layout: "full",
      },
    ],
    overview:
      "Val Transport et Service runs two businesses under one roof — selling cars and hauling freight — and needed an identity that could carry both. Synergis built the brand on a mark that reads as a road curving away at speed, set it in a warm serif to keep the customer-facing side personal, and extended the shape into a directional pattern. The system spans logo and pattern, stationery, articulated-truck and container livery, retail packaging, merchandise and the dealership website.",
    cover: "/work/val-transport/05.jpg",
    category: "Brand Identity",
  },
  {
    slug: "tona-design",
    client: "Tona Designs",
    logo: "/work/tona-design/logo-icon.jpg",
    descriptor:
      "Brand identity for Tona Designs, a studio that makes unique, memorable and detailed brand work.",
    year: "2025",
    deliverables: [
      "Brand Strategy",
      "Visual Identity",
      "Logo Design",
      "Pattern Design",
      "App Icon",
      "Campaign",
    ],
    intro:
      "Tona Designs needed a brand as considered as the work it sells. It had to feel confident and system-driven without turning cold — a studio you would trust with your own identity.",
    challenge: {
      label: "The Challenge",
      heading: "Branding the brand-builders",
    },
    solution: {
      label: "The Solution",
      heading: "A “T” folded like a paper wing, and a monogram system",
    },
    statement: "Unique, memorable and detailed.",
    hero: {
      src: "/work/tona-design/04.jpg",
      alt: "Tona Designs billboard: Unique, Memorable & Detailed Brand Designs",
    },
    sections: [
      {
        label: "Logotype",
        heading: "A letter that folds into flight",
        text: "The Tona mark reads as a “T” whose crossbar has lifted into two folded wings — motion and craft in one glyph. It sits in a rounded container so it works as a logo and an app icon without redrawing.",
        images: [
          { src: "/work/tona-design/09.jpg", alt: "Primary Tona Designs logo lockup" },
        ],
        layout: "full",
      },
      {
        label: "Pattern",
        heading: "The monogram, interlocked",
        text: "Rotating and tiling the mark builds a dense monogram pattern — a light tone-on-tone version for backgrounds and a high-contrast version for packaging.",
        images: [
          { src: "/work/tona-design/01.jpg", alt: "Tona monogram pattern" },
        ],
        layout: "full",
      },
      {
        label: "Stationery",
        images: [
          { src: "/work/tona-design/02.jpg", alt: "Tona Designs card" },
        ],
        layout: "full",
      },
      {
        label: "Print",
        images: [
          { src: "/work/tona-design/08.jpg", alt: "Tona Designs brochure" },
        ],
        layout: "full",
      },
      {
        label: "Merchandise",
        images: [
          { src: "/work/tona-design/03.jpg", alt: "Tona Designs tote bag" },
        ],
        layout: "full",
      },
      {
        label: "Environment",
        images: [
          { src: "/work/tona-design/05.jpg", alt: "Tona Designs logo on a boardroom wall" },
        ],
        layout: "full",
      },
      {
        label: "Digital",
        images: [
          { src: "/work/tona-design/07.jpg", alt: "Tona Designs app icon on a home screen" },
        ],
        layout: "full",
      },
      {
        label: "Campaign",
        images: [
          { src: "/work/tona-design/06.jpg", alt: "Tona Designs pull-up banner" },
        ],
        layout: "full",
      },
    ],
    overview:
      "Tona Designs is a studio in the business of building brands, which set a high bar for its own. Synergis developed a mark that folds a “T” into a pair of wings — precise but warm — and built it into a monogram pattern that gives the system texture. Housed in a rounded container, the mark doubles as an app icon. The identity runs across stationery, print, merchandise, environmental signage, the product icon set and an out-of-home campaign under the line “Unique, memorable & detailed brand designs.”",
    cover: "/work/tona-design/04.jpg",
    category: "Brand Identity",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(slug: string) {
  if (projects.length < 2) return null;
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
}
