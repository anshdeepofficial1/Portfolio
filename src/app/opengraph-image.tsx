import { ImageResponse } from 'next/og';
import { AS_PATHS, AS_VIEWBOX } from '@/lib/brand';

export const alt = 'Anshdeep Singh. I design it. I build it.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OG() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', background: '#0C0C0B', color: '#ECEAE4', padding: 64, position: 'relative', fontFamily: 'sans-serif' }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
          <div style={{ fontSize: 28, color: '#C9C6BE' }}>Anshdeep Singh · Developer</div>
          <div style={{ display: 'flex', flexDirection: 'column', fontSize: 104, lineHeight: 1, letterSpacing: -4 }}>
            <span style={{ fontWeight: 300 }}>I design it.</span>
            <span style={{ fontWeight: 700 }}>I build it.</span>
          </div>
          <div style={{ fontSize: 28, color: '#FF4F2B' }}>anshdeepofficial1.vercel.app</div>
        </div>
        <svg viewBox={AS_VIEWBOX} width={300} height={220} style={{position:'absolute',right:60,top:185}}><defs><linearGradient id="og-as" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#061024"/><stop offset=".53" stopColor="#061024"/><stop offset=".79" stopColor="#0644d8"/><stop offset="1" stopColor="#0753ff"/></linearGradient></defs>{AS_PATHS.map((d,i)=><path key={i} d={d} fill={i===0?'url(#og-as)':'#0753ff'} stroke="#315aab" strokeWidth={1}/>)}</svg>
      </div>
    ),
    size,
  );
}

