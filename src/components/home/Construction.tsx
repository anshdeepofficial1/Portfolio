'use client';

import { useEffect, useRef } from 'react';
import { onFrame, setVar, viewH } from '@/lib/frame';
import { CON_SVG } from './constructionSvg';

// The full build, for the case study about this site: four beats over 420svh.
const CARDS = [
  ['cc-tl', 0, 0.25, 'Start from a pivot', 'The AS monogram starts with the angular A and the flowing S.'],
  ['cc-br', 0.25, 0.5, 'Angles and curves', 'The angular A meets the rounded S, with clean negative space between the forms.'],
  ['cc-bl', 0.5, 0.75, 'The AS outline', 'Three shapes define the complete monogram. Their outlines are drawn before the colour fills in.'],
  ['cc-tr', 0.75, 1.2, 'Drawn, then built', 'The lines become a solid, the same way a file becomes a product.'],
] as const;
const LABELS = [['Pivot', 0, 0.25], ['Angle', 0.25, 0.5], ['Outline', 0.5, 0.75], ['Form', 0.75, 1.2]] as const;
// On home it is one beat between the work and Both Sides: two captions over 180svh, so the work stays close to the hero.
const SHORT_CARDS = [
  ['cc-tl', 0, 0.5, 'One mark. Two initials.', 'The angular A and flowing S form my personal identity. Drawn in navy and electric blue.'],
  ['cc-br', 0.5, 1.2, 'Drawn, then built', 'The lines become a solid, the same way a file becomes a product.'],
] as const;
const SHORT_LABELS = [['Angle', 0, 0.5], ['Form', 0.5, 1.2]] as const;

const v = (a: number, b: number) => ({ '--a': a, '--b': b }) as React.CSSProperties;

/** The mark drawn line by line while the section is pinned. Everything reads --cp in CSS. */
export function Construction({ full = false, label = '03 · The mark, constructed' }: { full?: boolean; label?: string }) {
  const cards = full ? CARDS : SHORT_CARDS;
  const labels = full ? LABELS : SHORT_LABELS;
  const wrap = useRef<HTMLDivElement>(null);
  const con = useRef<HTMLElement>(null);

  useEffect(() => {
    const w = wrap.current;
    const c = con.current;
    if (!w || !c) return;
    let cp: number | undefined;
    let r: DOMRect | null = null;
    const read = () => { r = w.getBoundingClientRect(); };
    const write = () => {
      if (!r) return;
      const span = r.height - viewH();
      if (span > 40) {
        if (r.bottom < 0 || r.top > viewH()) return;
        const tg = Math.min(1, Math.max(0, -r.top / span));
        cp = cp === undefined ? tg : cp + (tg - cp) * 0.12;
        setVar(c, '--cp', cp.toFixed(4));
      } else if (cp !== undefined) {
        cp = undefined;
        setVar(c, '--cp', null);
      }
    };
    return onFrame(read, write);
  }, []);

  return (
    <div className={`con-wrap${full ? '' : ' con-short'}`} ref={wrap}>
      <section className="con" ref={con} aria-labelledby="con-h">
        <h2 className="sr" id="con-h">The mark, constructed: the AS monogram, from outline to solid.</h2>
        <svg className="con-svg" viewBox="-1450 -905 2900 1810" preserveAspectRatio="xMidYMid slice" aria-hidden="true" dangerouslySetInnerHTML={{ __html: CON_SVG }} />
        {cards.map(([cls, a, b, h, p]) => (
          <div className={`cc ${cls}`} style={v(a, b)} key={cls}>
            <h3>{h}</h3>
            <p>{p}</p>
          </div>
        ))}
        <p className="con-bl mono">{label}</p>
        <p className="con-br mono" aria-hidden="true">
          <span className="con-lbl">
            {labels.map(([l, a, b]) => <span style={v(a, b)} key={l}>{l}</span>)}
          </span>
          <span><span className="con-n" /> | 0{cards.length}</span>
        </p>
      </section>
    </div>
  );
}

