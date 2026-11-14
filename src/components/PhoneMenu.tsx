'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { AVAILABILITY } from '@/lib/site';
import { Arrow, Close } from './Icons';
import { Mark } from './Mark';
import { sectionOf } from './Nav';
import { Social } from './Social';
import { Clock } from './Clock';
import { useSite } from './Site';
import { lenis } from './SmoothScroll';

const ITEMS = [
  { key: 'home', label: 'Coding', href: '/coding' },
  { key: 'editing', label: 'Editing', href: '/editing' },
  { key: 'work', label: 'Work', href: '/work' },
  { key: 'about', label: 'About', href: '/about' },
  { key: 'resume', label: 'Resume', href: '/resume/coding' },
];
// Contact is left out: the Get in touch button under the list goes to the same page

export function PhoneMenu() {
  const { menu, setMenu } = useSite();
  const path = usePathname();
  const editing=path.startsWith('/editing');const cur = path === '/coding' || path==='/' ? 'home' : sectionOf(path);
 const items=ITEMS.map(it=>editing&&it.key==='work'?{...it,href:'/editing#work'}:editing&&it.key==='about'?{...it,href:'/editing#experience'}:editing&&it.key==='resume'?{...it,href:'/editing/resume'}:it);
  const box = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menu) return;
    lenis()?.stop();
    const prev = document.activeElement as HTMLElement | null;
    box.current?.querySelector<HTMLElement>('.menu-x')?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenu(false);
      if (e.key !== 'Tab' || !box.current) return;
      const f = box.current.querySelectorAll<HTMLElement>('a,button');
      const first = f[0];
      const last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      lenis()?.start();
      prev?.focus();
    };
  }, [menu, setMenu]);

  const close = () => setMenu(false);

  return (
    <div id="site-menu" className="menu" role="dialog" aria-modal="true" aria-label="Menu" ref={box} inert={!menu} aria-hidden={!menu}>
      <div className="menu-top">
        <Link className="brand" href={editing?"/editing":"/coding"} aria-label="Anshdeep Singh, home" onClick={close}>
          <Mark />
          <span className="brand-word">anshdeep singh</span>
        </Link>
        <button className="menu-x" type="button" onClick={close}>
          Close
          <Close />
        </button>
      </div>
      <p className="menu-av mono">
        <span className="av"><i />{AVAILABILITY}</span>
      </p>
      <nav className="menu-l" aria-label="Menu">
        {items.map((it, i) => (
          <Link key={it.key} className={cur === it.key ? 'on' : ''} href={it.href} onClick={close}>
            {it.label}
            <span>0{i + 1}</span>
          </Link>
        ))}
      </nav>
      <div className="menu-bot">
        <Link className="btn" href={editing?"/editing#contact":"/contact"} onClick={close}>
          Get in touch
          <Arrow />
        </Link>
        {!editing&&<Social/>}
        <p className="mono mute">Punjab, India · <Clock /> GMT+5:30</p>
      </div>
    </div>
  );
}

