import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ALL_WORK } from '@/lib/work';
import { SITE_URL } from '@/lib/site';
import { PERSON_ID, PERSON_NAME, safeJsonLd } from '@/lib/structuredData';
import { PageHead, SecHead } from '@/components/PageParts';
import { ContactFooter } from '@/components/ContactFooter';
import { BrowserShot } from '@/components/BrowserShot';
import { Arrow } from '@/components/Icons';

const projects = ALL_WORK.filter(w => w.k !== 'portfolio');
type Props = {params: Promise<{slug: string}>};
const getProject = (slug: string) => projects.find(w=>w.k===slug);
export const dynamicParams = false;
export function generateStaticParams() { return projects.map(w=>({slug:w.k})); }
export async function generateMetadata({params}:Props):Promise<Metadata> {
  const w=getProject((await params).slug);
  if(!w) return {};
  const path='/projects/'+w.k;
  const title=w.name+' — Project by '+PERSON_NAME;
  const description = w.desc.length <= 155 ? w.desc : w.short.length <= 155 ? w.short : w.desc.slice(0, 155).replace(/\s+\S*$/, '') + '…';
  return { title:{absolute:title}, description, alternates:{canonical:path}, openGraph:{type:'website',title,description,url:path, ...(w.img ? {images:[w.img]} : {})} };
}
export default async function ProjectPage({params}:Props) {
  const w=getProject((await params).slug);
  if(!w) notFound();
  const url=SITE_URL+'/projects/'+w.k;
  const schema={'@context':'https://schema.org','@type':w.k==='profile'?'WebPage':w.fil==='creative'?'CreativeWork':'SoftwareApplication','@id':url+'#project',name:w.name,url,description:w.desc,author:{'@id':PERSON_ID},...(w.github?{codeRepository:w.github}:{}),...(w.img?{image:SITE_URL+w.img}:{}),...(w.href.startsWith('https://')?{sameAs:[...new Set([w.href,...(w.github?[w.github]:[])])]}:{})};
  return <><main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:safeJsonLd(JSON.stringify(schema))}}/>
    <PageHead title={w.name} lead={w.desc} right={<Link href="/work" className="lnk mono">All projects<Arrow/></Link>}/>
    <section className="wk on-bone"><div className="wrap">
      <SecHead n="01" label={w.cat}/>
      <div className="wkf grid">
        {w.img && !w.previewUnavailable ? <div className="wkf-s"><BrowserShot img={w.img} url={w.go} alt={w.name+' project preview'} sizes="(max-width: 900px) 100vw, 66vw"/></div> : <div className="wkf-s"><p className="lead">Explore the public repository for source code and development status.</p></div>}
        <div className="wkf-t">
          <h2 className="t-d2">About this project</h2><p className="lead">{w.desc}</p>
          <p>Part of the public project portfolio of <Link href="/about" className="lnk">{PERSON_NAME}</Link>.</p>
          {w.features&&<ul className="project-features">{w.features.map(feature=><li key={feature}>{feature}</li>)}</ul>}
          <div className="tags">{w.tags.map(tag=><span className="tag" key={tag}>{tag}</span>)}</div>
          <p><a href={w.href} className="lnk mono" target="_blank" rel="noopener">{w.href.includes('github.com')?'Public repository':'Official project website'}<Arrow/></a>{w.github&&w.github!==w.href&&<> · <a href={w.github} className="lnk mono" target="_blank" rel="noopener">GitHub source<Arrow/></a></>}</p>
        </div>
      </div>
    </div></section>
  </main><ContactFooter/></>;
}
