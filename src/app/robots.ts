import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';
export default function robots(): MetadataRoute.Robots {
  const disallow = ['/tokens', '/thanks'];
  return { rules: [{ userAgent: '*', allow: '/', disallow }, { userAgent: 'OAI-SearchBot', allow: '/', disallow }], sitemap: SITE_URL+'/sitemap.xml' };
}
