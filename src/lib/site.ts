export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://anshdeepofficial1.vercel.app';
export const EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'anshdeepofficial1@gmail.com';
export const AVAILABILITY = 'Open to projects and collaboration';

export { AS_PATHS, AS_VIEWBOX } from './brand';

export const SOCIAL = [{name:'GitHub',href:'https://github.com/anshdeepofficial1'},{name:'LinkedIn',href:'https://www.linkedin.com/in/anshdeepofficial1/'},{name:'Instagram',href:'https://www.instagram.com/anshdeepofficial1/'}];

export const NAV = [
  { key: 'work', label: 'Work', href: '/work' },
  { key: 'about', label: 'About', href: '/about' },
  { key: 'resume', label: 'Resume', href: '/resume/coding' },
  { key: 'contact', label: 'Contact', href: '/contact' },
] as const;




export const PHONE='+91 97815 70098';
export const TEL='tel:+919781570098';
export const WHATSAPP='https://wa.me/919781570098';
export const EDIT_EMAIL=EMAIL;
export const EDIT_LINKEDIN='https://www.linkedin.com/in/anshdeep-singh-editor/';
export const GMAIL='https://mail.google.com/mail/?view=cm&fs=1&to='+encodeURIComponent(EMAIL);
export const OUTLOOK='https://outlook.live.com/mail/0/deeplink/compose?to='+encodeURIComponent(EMAIL);
