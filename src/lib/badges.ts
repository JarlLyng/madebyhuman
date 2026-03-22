export interface Badge {
  name: string;
  filename: string;
  description: string;
  longDescription: string;
  useCases: string[];
}

export const badges: Badge[] = [
  {
    name: 'Made by Human',
    filename: 'made',
    description: 'A general badge celebrating human creativity in all forms',
    longDescription:
      'The original badge. A simple, positive statement that a human was behind this work — making the choices, shaping the vision, and taking ownership of the final result. It doesn\'t say anything about how the work was made. It says something about who made it.',
    useCases: [
      'Any project where you want to acknowledge the human behind it',
      'Websites, portfolios, and personal projects',
      'Open source repositories',
    ],
  },
  {
    name: 'Co-created with AI',
    filename: 'co-created',
    description: 'For projects created in collaboration with AI tools',
    longDescription:
      'For the honest middle ground. This badge says: yes, AI was part of the process — and a human guided it. It\'s not about purity, it\'s about transparency. The human chose, shaped, and curated. The machine helped.',
    useCases: [
      'Projects where AI tools helped generate, refine, or translate content',
      'Code written with AI assistance',
      'Designs that started with AI-generated concepts and were refined by hand',
    ],
  },
  {
    name: 'Crafted by Human',
    filename: 'crafted',
    description: 'For projects created entirely by human hands',
    longDescription:
      'For work made without AI in the process. Not as a statement against technology, but as a quiet nod to the craft — the analog, the handmade, the entirely human. Sometimes a mistake, a pause, or an imperfection is what makes it feel real.',
    useCases: [
      'Hand-coded projects without AI code generation',
      'Handwritten articles, essays, and poetry',
      'Music, art, and design made entirely by human hands',
    ],
  },
  {
    name: 'Human in the Loop',
    filename: 'loop',
    description: 'For projects where humans guide and curate the creative process',
    longDescription:
      'For workflows where AI plays a significant role, but a human is always there — reviewing, deciding, adjusting. The human doesn\'t just press a button. They stay in the loop, making the choices that matter.',
    useCases: [
      'AI-heavy workflows with human oversight and editorial control',
      'Automated pipelines with human quality gates',
      'Content pipelines where humans curate and approve AI output',
    ],
  },
];
