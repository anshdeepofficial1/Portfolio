'use client';

import { Site } from './Site';
import { Nav } from './Nav';
import { PhoneMenu } from './PhoneMenu';
import { Cursor } from './Cursor';
import { SmoothScroll } from './SmoothScroll';
import { ScrollFx } from './ScrollFx';
import { PageTransition } from './PageTransition';
import { CaseViewer } from './CaseViewer';
import { PerfHud } from './PerfHud';


/** Shared portfolio navigation and animation shell. */
export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Site>
        <Cursor />
        <Nav />
        <PhoneMenu />
        {children}
        <PageTransition />
        <CaseViewer />
      </Site>
      <SmoothScroll />
      <ScrollFx />
      <PerfHud />
      
    </>
  );
}

