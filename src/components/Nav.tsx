'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { onFrame } from '@/lib/frame';
import { usePathname } from 'next/navigation';
import { NAV } from '@/lib/site';
import { Arrow } from './Icons';
import { Mark } from './Mark';
import { useSite } from './Site';

export const sectionOf = (path: string) => (path.startsWith('/work') ? 'work' : (path.startsWith('/resume') || path.startsWith('/editing/resume')) ? 'resume' : path.startsWith('/editing') ? 'editing' : path.startsWith('/about') ? 'about' : path.startsWith('/thanks') || path.startsWith('/contact') ? 'contact' : '');

export function Nav() {
  const path = usePathname();
  const cur = sectionOf(path);
  const editing=path.startsWith('/editing');
  const links=editing?[{key:'work',label:'Work',href:'/editing#work'},{key:'about',label:'About',href:'/editing#experience'},{key:'resume',label:'Resume',href:'/editing/resume'},{key:'contact',label:'Contact',href:'/editing#contact'}]:NAV;
  const { menu, setMenu } = useSite();
  const bg = useRef<HTMLDivElement>(null);

  // Past the hero, a blurred band sits under the bar so the links never cross live text at full contrast.
  useEffect(() => {
    const el = bg.current;
    if (!el) return;
    const hero = document.querySelector('.hero-wrap');
    let past = false;
    // the wrap's negative bottom margin lets the next section overlap it, so its real end is bottom + margin
    const read = () => { past = hero ? hero.getBoundingClientRect().bottom + (parseFloat(getComputedStyle(hero).marginBottom) || 0) < 80 : window.scrollY > 8; };
    const write = () => { if (el.classList.contains('on') !== past) el.classList.toggle('on', past); };
    read();
    write();
    // measured with every other effect, once a frame, instead of on each scroll event
    return onFrame(read, write);
  }, [path]);

  return (
    <>
    <div className="nav-bg" ref={bg} aria-hidden="true" />
    <header className="nav">
      <div className="nav-in">
        <Link className="brand" href={editing?'/editing':path==='/coding'?'#top':'/coding'} aria-label="Anshdeep Singh, home" data-cursor="link">
          <Mark /><span className="brand-word">Anshdeep Singh</span>
        </Link>
        <nav className="nav-links" aria-label="Primary">
          {links.map((n) => (
            <Link key={n.key} className={`nl${cur === n.key ? ' on' : ''}`} href={n.href} data-cursor="link" aria-current={cur === n.key ? 'page' : undefined}>
              <span className="roll" data-t={n.label}>
                <span>{n.label}</span>
              </span>
            </Link>
          ))}
          <Link className="nl variant-nav" href={editing?'/coding':'/editing'} data-cursor="link"><span className="roll" data-t={editing?'Coding':'Editing'}><span>{editing?'Coding':'Editing'}</span></span></Link>
        </nav>
        <Link className="nav-cta" href={editing?"/editing#contact":"/contact"} data-cursor="link">
          Get in touch
          <Arrow />
        </Link>
      </div>
    </header>
    {/* outside the blended bar: difference-blended over a mid-grey photo, the pill all but vanished */}
    <button className="nav-menu" type="button" onClick={() => setMenu(true)} aria-label="Open menu" aria-expanded={menu} aria-controls="site-menu">
      <i />
      Menu
    </button>
    </>
  );
}

