export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://anshdeepofficial1.vercel.app';
export const EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'anshdeepofficial1@gmail.com';
export const AVAILABILITY = 'Open to projects and collaboration';

// The mark: two halves of eleven points, one a 180° turn of the other around the pivot.
export const D_PATH = 'M0 -500L-155 -420L-330 -65L-330 175L-222 250L-100 190L-100 82L-200 118L-235 70L-100 -210L0 -255Z';
export const P_PATH = 'M0 500L155 420L330 65L330 -175L222 -250L100 -190L100 -82L200 -118L235 -70L100 210L0 255Z';
export const MARK_VB = '-346 -512 692 1024';

export const SOCIAL = [{name:'GitHub',href:'https://github.com/anshdeepofficial1'},{name:'LinkedIn',href:'https://www.linkedin.com/in/anshdeepofficial1/'},{name:'Instagram',href:'https://www.instagram.com/anshdeepofficial1/'}];

export const NAV = [
  { key: 'work', label: 'Work', href: '/work' },
  { key: 'about', label: 'About', href: '/about' },
  { key: 'resume', label: 'Resume', href: '/resume' },
  { key: 'contact', label: 'Contact', href: '/contact' },
] as const;

// what happens after someone gets in touch: the contact page shows it before, the thanks page after
export const NEXT_STEPS: [string, string][] = [
  ['I read it and reply', 'Usually with a few questions about goals, timing and budget.'],
  ['A clear scope and price', 'A clear plan and next steps.'],
];


