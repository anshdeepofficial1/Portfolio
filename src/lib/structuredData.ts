import { SITE_URL, SOCIAL, EDIT_LINKEDIN } from './site';

export const PERSON_ID = SITE_URL + '/about#person';
export const PERSON_NAME = 'Anshdeep Singh';
export const BIO = 'Anshdeep Singh is a software developer, independent video editor and BCA Data Science undergraduate at Chandigarh University. His portfolio includes mobile applications, web products, systems experiments and creative editing.';
export const PERSON = {
  '@type': 'Person', '@id': PERSON_ID, name: PERSON_NAME, alternateName: 'anshdeepofficial1',
  url: SITE_URL + '/about', description: BIO, jobTitle: ['Software Developer', 'Video Editor'],
  sameAs: [...SOCIAL.map(s => s.href), EDIT_LINKEDIN],
  knowsAbout: ['Software development', 'Data science', 'Interface design', 'Video editing', 'Web development'],
};
export const JSON_LD = JSON.stringify({'@context':'https://schema.org','@graph':[
  PERSON, {'@type':'WebSite','@id': SITE_URL + '/#website', name: PERSON_NAME, url: SITE_URL, publisher: {'@id': PERSON_ID}, inLanguage:'en'}
]});
export const PROFILE_JSON_LD = JSON.stringify({'@context':'https://schema.org','@type':'ProfilePage','@id':SITE_URL+'/about#profile',url:SITE_URL+'/about',name:'About Anshdeep Singh',mainEntity:PERSON});
export const safeJsonLd = (value: string) => value.replace(/</g, '\\u003c');
