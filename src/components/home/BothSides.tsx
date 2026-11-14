'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { Arrow } from '../Icons';
import { Mark } from '../Mark';
import { slashAt } from '@/lib/slash';

const DLIST = [['d.1', 'UI/UX design'], ['d.2', 'Design systems'], ['d.3', 'Responsive interfaces'], ['d.4', 'Prototyping'], ['d.5', 'Motion design']];
const PLIST = [['p.1', 'React and JavaScript'], ['p.2', 'Flutter and Dart'], ['p.3', 'Python and SQL'], ['p.4', 'AI features'], ['p.5', 'Performance and launch']];

// boxes measured on the 1440 × 900 home page of this site (scripts/shoot-home.mjs prints them when it reshoots the frame), as % of the frame: [left, top, width, height]
const HEAD = [3.3, 28, 24.7, 8];
const CTA = [85.5, 90.2, 11.2, 6.2];
const box = ([l, t, w, h]: number[]) => ({ left: `${l}%`, top: `${t}%`, width: `${w}%`, height: `${h}%` });

/**
 * A blueprint on one side of the slash, the live site on the other. The frame pins while scroll sweeps the live site
 * in from the top left; the pointer scrubs it. The blueprint is traced from the same screenshot and says so, never
 * passing for a design file.
 */
const HEAD_T = 'One project. Both sides of the line.';
const LEAD_T = 'My actual portfolio homepage as a blueprint and as it ships. Scroll, and the live page sweeps in across the slash. Or move across the frame to scrub it. The blueprint is generated from the real homepage screenshot.';

export function BothSides({editing=false}:{editing?:boolean}={}) {
 const lead=editing?'My actual editing portfolio, from a traced blueprint to the finished interface. Scroll or move across the frame to reveal the live page.':LEAD_T;
 const dlist=editing?[['e.1','Footage selection'],['e.2','Pacing and rhythm'],['e.3','Typography'],['e.4','Motion graphics'],['e.5','Audio alignment']]:DLIST;
 const plist=editing?[['f.1','Premiere Pro'],['f.2','Photoshop'],['f.3','Colour correction'],['f.4','Media Encoder'],['f.5','Final delivery']]:PLIST;
  const bs = useRef<HTMLDivElement>(null);

  const scrub = (e: React.PointerEvent) => {
    const el = bs.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--sp', slashAt(e.clientX - r.left, e.clientY - r.top, r.width, r.height).toFixed(4));
  };

  return (
    <section className="both" id="both" aria-labelledby="both-h">
      <div className="wrap">
        <div className="both-top grid">
          <h2 className="h-xl gc-1-8" id="both-h">{HEAD_T}</h2>
          <p className="lead gc-9-12">{lead}</p>
        </div>
      </div>
      <div className="bs-pin">
        <div className="bs-stage wrap">
          {/* phones: the heading rides in the pinned stage, so the frame never sits alone in a black screen */}
          <div className="bs-cap" aria-hidden="true"><p className="h-xl">{HEAD_T}</p><p className="lead">{lead}</p></div>
          <div className="bs" ref={bs} data-cursor="scrub" data-cl="Scrub" onPointerMove={scrub} role="img" aria-label="The home page of this site, half as a blueprint traced from it with its layout grid and half as the live site, split by a diagonal line">
            <div className="bs-prod">
              <Image src={editing?"/img/actual/editing-portfolio.jpg":"/img/actual/portfolio.jpg"} alt="" fill sizes="(max-width: 1680px) 100vw, 1584px" />
            </div>
            <div className="bs-des">
              <Image className="bs-draw" src={editing?"/img/actual/editing-blueprint.jpg":"/img/actual/portfolio-blueprint.jpg"} alt="" fill sizes="(max-width: 1680px) 100vw, 1584px" />
              <div className="wf-cols" aria-hidden="true">{Array.from({ length: 12 }, (_, i) => <span key={i} />)}</div>
              <div className="wf-sel" style={box(HEAD)}><i /><i /><i /><i /><span className="wf-pill">Display · 356 × 72</span></div>
              <div className="wf-sel wf-sel-s" style={box(CTA)}><i /><i /><i /><i /></div>
              <div className="wf-rl" style={{ left: '91%', top: '64%', height: '26.2%' }}><b>236</b></div>
            </div>
            <div className="bs-line" />
            <div className="bs-h"><Mark /></div>
          </div>
          <div className="bs-hud mono" aria-hidden="true">
            <span>d · design<small>Blueprint · traced from actual site</small></span>
            <span className="bs-bar"><i /></span>
            <span>p · production<small><i />Live · {editing?'editing':'coding'} portfolio</small></span>
          </div>
        </div>
      </div>
      <div className="wrap">
        <div className="both-foot">
          <div className="dp-col dp-d">
            <h3><span>Design</span><span className="mono">Before the build · 05</span></h3>
            <ul>{dlist.map(([a, b]) => <li key={a}><span className="mono">{a}</span><span className="dp-t">{b}</span></li>)}</ul>
          </div>
          <div className="dp-col dp-p">
            <h3><span className="mono">05 · After the file</span><span>Production</span></h3>
            <ul>{plist.map(([a, b]) => <li key={a}><span className="mono">{a}</span><span className="dp-t">{b}</span></li>)}</ul>
          </div>
        </div>
        <p className="both-link"><Link className="lnk mono" href={editing?"/editing#experience":"/work/portfolio"} data-cursor="link">{editing?"About my editing work":"About this portfolio"}<Arrow /></Link></p>
      </div>
    </section>
  );
}

