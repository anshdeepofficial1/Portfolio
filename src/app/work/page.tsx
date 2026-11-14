import type { Metadata } from 'next';
import Link from 'next/link';
import { ALL_WORK, CLIENT, FILTERS, MORE, countFor } from '@/lib/work';
import { PageHead, SecHead } from '@/components/PageParts';
import { Chips, FilterScope, Filtered } from '@/components/pages/Filter';
import { ContactFooter } from '@/components/ContactFooter';
import { BrowserShot } from '@/components/BrowserShot';
import { MockDrive } from '@/components/MockDrive';
import { Arrow } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Work',
  description: 'Apps, websites, systems and creative projects by Anshdeep Singh.',
  alternates: { canonical: '/work' },
};

// the address bar shows a real domain only where one is known; otherwise just the product's name
const urlFor = (w: { ext: boolean; go: string; name: string; k: string }) => (w.ext ? w.go : w.name);

export default function WorkPage() {
  const total = String(ALL_WORK.length).padStart(2, '0');
  return (
    <FilterScope>
      <main>
        <PageHead
          title="Work"
          sup={total}
          lead="My 24 apps, websites, systems and creative coding projects."
          right={<Chips label="Filter work" items={FILTERS.map((f) => ({ key: f.key, label: f.label, count: countFor(f.key) }))} />}
        />
        <section className="wk on-bone" aria-labelledby="wk-h">
          <div className="wrap">
            <SecHead n="01" label="Selected" id="wk-h" right="Actual project previews" />
            {/* case 00 is the site itself; it sits above the filters because it is every category at once */}
            <article className="wkf grid">
              <Link className="wkf-s" href="/work/portfolio" data-cursor="view" aria-label="This site">
                <BrowserShot img="/img/actual/portfolio.jpg" url="anshdeepofficial1.vercel.app" alt="The home page of this site" sizes="(max-width: 900px) 100vw, 66vw" drive="rise" />
              </Link>
              <div className="wkf-t">
                <p className="wkf-n mono"><span>{total} / {total}</span><span>Case study · included in total</span></p>
                <h2 className="wkf-h">This site</h2>
                <p className="lead">My personal Coding and Editing portfolio, with a shared AS identity and interactive motion.</p>
                <div className="tags">{['Identity', 'WebGL2', 'Next.js', 'GSAP'].map((t) => <span className="tag" key={t}>{t}</span>)}</div>
                <p><Link className="lnk mono" href="/work/portfolio" data-cursor="link">Explore portfolio<Arrow /></Link></p>
              </div>
            </article>
            {CLIENT.map((w, i) => {
              const ext = w.ext ? { target: '_blank', rel: 'noopener' } : {};
              const L = w.ext ? 'a' : Link;
              return (
                <Filtered k={w.fil} key={w.k}>
                  <article className="wkf grid">
                    <L className="wkf-s" href={w.href} {...ext} data-cursor="view" aria-label={w.name}>
                      <BrowserShot img={w.img} url={urlFor(w)} video={w.video} alt={`${w.name} ${w.previewLabel}`} sizes="(max-width: 900px) 100vw, 66vw" drive="rise" />
                    </L>
                    <div className="wkf-t">
                      <p className="wkf-n mono"><span>{String(i + 1).padStart(2,"0")} / {total}</span><span>{w.cat} · {w.previewLabel}</span></p>
                      <h2 className="wkf-h">{w.name}</h2>
                      <p className="lead">{w.desc}</p>
                      <div className="tags">{w.tags.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
                      <p><L className="lnk mono" href={w.href} {...ext} data-cursor="link">{w.href.includes("github.com") ? "Repository" : "Visit website"}<Arrow /></L>{w.github && w.github!==w.href && <a className="lnk mono" style={{marginLeft:20}} href={w.github} target="_blank" rel="noopener">GitHub<Arrow/></a>}</p>
                    </div>
                  </article>
                </Filtered>
              );
            })}
          </div>
        </section>
        <section className="wkm" aria-labelledby="wkm-h">
          <div className="wrap">
            <SecHead n="03" label="More work" id="wkm-h" />
            <div className="sec-top grid">
              <h2 className="t-d2 gc-1-8">Smaller projects, same standard.</h2>
              <p className="lead mute gc-9-12">More independent tools and creative projects.</p>
            </div>
            <div className="wkm-g">
              {MORE.filter(w=>w.k!=='portfolio').map((w, i) => (
                <Filtered k={w.fil} key={w.k}>
                  <article className="wkm-c">
                    {w.previewUnavailable ? <div className="bw" style={{display:"grid",placeItems:"center",minHeight:180,padding:24,textAlign:"center"}}><p className="mono">No public preview available</p></div> : <BrowserShot img={w.img} url={urlFor(w)} alt={`${w.name} ${w.previewLabel}`} sizes="(max-width: 900px) 100vw, 50vw" drive="rise" />}
                    <div className="wkm-r"><h3>{w.name}</h3><span className="mono mute">{String(i + CLIENT.length + 1).padStart(2,'0')} / {total}</span></div>
                    <p className="mono">{w.cat} · {w.previewLabel}</p>
                    <p>{w.desc}</p><a className="lnk mono" href={w.href} target={w.ext?"_blank":undefined} rel="noopener">Open project<Arrow /></a>
                  </article>
                </Filtered>
              ))}
            </div>
          </div>
        </section>
      </main>
      <ContactFooter />
      <MockDrive />
    </FilterScope>
  );
}

