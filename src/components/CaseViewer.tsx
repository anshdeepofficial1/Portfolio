'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { gsap } from 'gsap';
import { ALL_WORK as WORK } from '@/lib/work';
import { lenis } from './SmoothScroll';
import { Arrow, Close } from './Icons';

/** Open a project's actual screenshot. */
export const openCase = (k: string) => window.dispatchEvent(new CustomEvent('case:open', { detail: k }));

/** Accessible full-screen project preview. */
export function CaseViewer() {
  const [i, setI] = useState<number | null>(null);
  const frame = useRef<HTMLDivElement>(null);
  const back = useRef<HTMLElement | null>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);
  const root = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setI(null), []);

  useEffect(() => {
    const on = (e: Event) => {
      const k = (e as CustomEvent<string>).detail;
      const n = WORK.findIndex((w) => w.k === k);
      if (n < 0) return;
      back.current = document.activeElement as HTMLElement | null;
      setI(n);
    };
    window.addEventListener('case:open', on);
    return () => window.removeEventListener('case:open', on);
  }, []);

  const open = i !== null;
  // a link out of the viewer to another page closes it
  const path = usePathname();
  useEffect(() => { setI(null); }, [path]);
  useEffect(() => {
    if (!open) return;
    lenis()?.stop();
    document.documentElement.style.overflow = 'hidden';
    closeBtn.current?.focus();
    // everything else on the page goes inert, so neither Tab nor a screen reader can reach it behind the viewer
    const behind: HTMLElement[] = [];
    for (let n: HTMLElement | null = root.current; n && n !== document.body; n = n.parentElement) {
      for (const sib of n.parentElement?.children ?? []) if (sib !== n && sib instanceof HTMLElement && !sib.inert) behind.push(sib);
    }
    behind.forEach((el) => { el.inert = true; });
    const key = (e: KeyboardEvent) => {
      if (e.key === 'Tab' && root.current) {
        const f = [...root.current.querySelectorAll<HTMLElement>('button, a[href], video[controls], [tabindex]:not([tabindex="-1"])')];
        if (f.length === 0) return;
        const first = f[0], last = f[f.length - 1];
        const at = document.activeElement;
        if (e.shiftKey && (at === first || !root.current.contains(at))) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && (at === last || !root.current.contains(at))) { e.preventDefault(); first.focus(); }
      } else if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', key);
    return () => {
      window.removeEventListener('keydown', key);
      behind.forEach((el) => { el.inert = false; });
      lenis()?.start();
      document.documentElement.style.overflow = '';
      back.current?.focus?.();
    };
  }, [open, close]);

  // every new frame cuts in on the slash
  useEffect(() => {
    if (i === null || !frame.current) return;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const o = { v: 0 };
    const tw = gsap.to(o, { v: 1, duration: 0.9, ease: 'expo.out', onUpdate: () => frame.current?.style.setProperty('--lbi', o.v.toFixed(4)) });
    return () => { tw.kill(); };
  }, [i]);

  const w = i === null ? null : WORK[i];
  if (!open || !w) return null;
  return (
    <div ref={root} className="lb on" inert={!open} role="dialog" aria-modal="true" aria-label={w ? `${w.name} preview` : 'Project preview'} aria-hidden={!open}>
      <div className="lb-top">
        <p><b>{w?.name}</b></p>
        <button className="preview-close" type="button" ref={closeBtn} onClick={close} aria-label="Close preview" data-cursor="link"><Close/></button>
      </div>
      <div className="lb-stage" onClick={(e) => e.target === e.currentTarget && close()}>
        {w && (
          <div className="lb-f" ref={frame} key={w.k}>
            {w.previewUnavailable ? <p className="lb-unavailable">No public screenshot available. Open the project link below.</p> : <Image src={w.img} alt={`${w.name} ${w.previewLabel || 'preview'}`} fill sizes="90vw" />}
          </div>
        )}
      </div>
      <div className="lb-bot">
        {w && <p className="lb-url mono">{w.go}</p>}
        {w && <a className={w.ext ? 'btn btn-line btn-s' : 'lnk'} href={w.href} target={w.ext ? '_blank' : undefined} rel={w.ext ? 'noopener' : undefined} data-cursor="link">{w.ext ? w.href.includes('github.com') ? 'Open repository' : 'Visit website' : w.go}<Arrow /></a>}
      </div>
    </div>
  );
}

/** A button that opens the case viewer on one project; usable from server components. */
export function CaseOpen({ k, className, children, label }: { k: string; className?: string; children: React.ReactNode; label?: string }) {
  return <button type="button" className={className} onClick={() => openCase(k)} aria-label={label} data-cursor="view">{children}</button>;
}

