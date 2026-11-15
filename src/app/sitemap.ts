import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';
import { ALL_WORK } from '@/lib/work';
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['/coding','/work','/about','/contact','/resume/coding','/editing/resume','/editing','/work/portfolio', ...ALL_WORK.filter(w=>w.k !== 'portfolio').map(w=>'/projects/'+w.k)];
  return paths.map(path=>({url:SITE_URL+path}));
}
