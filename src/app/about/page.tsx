import type { Metadata } from 'next';
import { Fragment } from 'react';
import { SecHead } from '@/components/PageParts';
import { Mark } from '@/components/Mark';
import { ContactFooter } from '@/components/ContactFooter';
import { Arrow } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'About',
  description: 'Anshdeep Singh, developer, interface designer and BCA Data Science student.',
  alternates: { canonical: '/about' },
};

// Numbers only. Digital Revo lives in the intro and the experience list, where it reads as a role, not a stat.
// Same giant index as the home stats. [number, unit, label, sub]; a null unit is the time zone, which never counts up
const FACTS: [number,string|null,string,string|null][]=[[5,'','Featured projects','Apps, web and systems'],[4,'','Project categories',null],[2027,'','Expected graduation','Chandigarh University'],[5.5,null,'Based in Punjab, India','working worldwide']];
const RULES = [
  ['No handoff', 'When you hire me for both, the person who designs it builds it, so nothing gets lost between the file and the browser.'],
  ['Real things early', 'A working prototype early in the process. People react to a real page faster than to a picture of one.'],
  ['Systems over pages', 'Tokens and components first, so page twelve gets the same care as page one.'],
  ['Plain talk', 'Clear goals, straightforward communication and no jargon. You always know what happens next.'],
];
const STEPS = [
  ['ps-d', 'd', 'Discover', 'A first conversation about goals and constraints. What has to be true for this to work.'],
  ['ps-d', 'd', 'Design', 'Layout, typography and interaction in code or a prototype. Decisions, not decoration.'],
  ['ps-p', 'p', 'Build', 'Choose the appropriate web, Android or systems stack.'],
  ['ps-x ps-p', 'p', 'Launch', 'Performance, analytics and handover docs. Then I stay on call.'],
];
const TD = ['UI/UX','Prototyping','Video editing','Motion design'];
const TP = ['HTML','CSS','JavaScript','TypeScript','Tailwind CSS','React','Flutter','Dart','Python','SQL','MySQL','Rust','GitHub','Vercel'];

const Ext = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a className="lnk mono" href={href} target="_blank" rel="noopener" data-cursor="link">{children}<Arrow /></a>
);
const XP: [React.ReactNode,string,React.ReactNode,React.ReactNode][] = [['2024 – 2027','BCA (Hons. with Research)','Data Science · Chandigarh University',<Ext href="/resume">Résumé</Ext>],['2026','Web Development Intern','AniWebDesigns Pvt. Ltd. · Mohali',null],['Ongoing','Independent developer','Apps, websites and creative projects',<Ext href="https://github.com/anshdeepofficial1">GitHub</Ext>]];
const tags = (L: string[]) => <div className="tags">{L.map((t) => <span className="tag" key={t}>{t}</span>)}</div>;

export default function AboutPage() {
  return (
    <>
      <main>
        <section className="ab-h wrap" aria-labelledby="ph-h">
          <div className="ab-g grid">
            <h1 className="ab-t t-d1 gc-1-8" id="ph-h"><span>One person,</span><span className="wide">both sides</span><span>of the line.</span></h1>
          </div>
          <div className="ab-in grid">
            <p className="gc-1-6">I’m Anshdeep Singh, a BCA Data Science undergraduate at Chandigarh University. I build apps, websites and practical tools, combining front-end development, interface design and SQL. I also edit video and create visual assets.</p>
          </div>
        </section>
        <section className="ab-f on-bone" aria-label="At a glance">
          <div className="wrap">
            <ul className="stx">
              {FACTS.map(([n, unit, label, sub]) => {
                const v = unit === null ? `GMT+${n === 5.5 ? '5:30' : n}` : <><i className="sx-n" />{unit}</>;
                return (
                  <li className="sx" style={unit === null ? undefined : ({ '--to': n } as React.CSSProperties)} key={label}>
                    <span className="sx-v" aria-hidden="true"><span className="sx-o">{v}</span><span className="sx-s">{v}</span></span>
                    <span className="sr">{unit === null ? `GMT+${n === 5.5 ? '5:30' : n}` : `${n}${unit}`} {label}{sub && `, ${sub}`}</span>
                    <span className="sx-l" aria-hidden="true"><b>{label}</b>{sub && <span className="mono mute">{sub}</span>}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
        <section className="pr" aria-labelledby="pr-h">
          <div className="wrap">
            <SecHead n="01" label="How I work" />
            <div className="sec-top grid"><h2 className="t-d2 gc-1-8" id="pr-h">How I approach projects.</h2></div>
            <ul className="pr-g">{RULES.map(([a, b], i) => <li className="pr-i" key={a}><b>0{i + 1}</b><h3>{a}</h3><p>{b}</p></li>)}</ul>
          </div>
        </section>
        <section className="ps-w on-bone" aria-labelledby="ps-h">
          <div className="wrap">
            <SecHead n="02" label="Process" right="d · design → p · production" />
            <div className="sec-top grid"><h2 className="t-d2 gc-1-8" id="ps-h">Drawn, then built.</h2><p className="lead gc-9-12">Two steps on each side of the line. The same person walks you through all four.</p></div>
            {/* the two design steps sit left, thin and wide; the two build steps answer from the right, heavy, the way the
                hero sets "I design it." against "I build it." The slash runs between them where a handoff would be */}
            <ol className="ps-g">
              {STEPS.map(([c, s, h, t], i) => (
                <Fragment key={h}>
                  {i === 2 && (
                    <li className="ps-cut" aria-hidden="true">
                      <span className="mono">d · design</span>
                      <i className="ps-cut-d" />
                      <svg className="ps-cut-s" viewBox="0 0 220 96" preserveAspectRatio="none"><path d="M0 96L220 0" /></svg>
                      <span className="ps-cut-m"><Mark /></span>
                      <i className="ps-cut-p" />
                      <span className="mono">p · production</span>
                    </li>
                  )}
                  <li className={`ps ${c}`}>
                    <span className="ps-n mono">0{i + 1}<span className="sr"> · {s === 'd' ? 'design' : 'production'}</span></span>
                    <h3>{h}</h3>
                    <p>{t}</p>
                  </li>
                </Fragment>
              ))}
            </ol>
          </div>
        </section>
        <div className="tk-xp">
          <section className="tk" aria-labelledby="tk-h">
            <div className="wrap">
              <SecHead n="03" label="Toolkit" id="tk-h" />
              <div className="tk-g">
                <div className="tk-c"><h3><span>Design</span><span className="mono">d · {String(TD.length).padStart(2, '0')}</span></h3>{tags(TD)}</div>
                <div className="tk-c"><h3><span>Production</span><span className="mono">p · {String(TP.length).padStart(2, '0')}</span></h3>{tags(TP)}</div>
              </div>
            </div>
          </section>
          <section className="xp" aria-labelledby="xp-h">
            <div className="wrap">
              <SecHead n="04" label="Experience" id="xp-h" />
              <ul className="xp-l">
                {XP.map(([a, b, c, d]) => <li className="xp-r" key={b}><span className="mono mute">{a}</span><h3>{b}</h3><p>{c}</p><span>{d}</span></li>)}
              </ul>
            </div>
          </section>
        </div>
      </main>
      <ContactFooter />
    </>
  );
}

