'use client';
import { useId } from 'react';
import { AS_PATHS, AS_VIEWBOX } from '@/lib/brand';
export function Mark({className='dpm'}:{className?:string}){const id='as-'+useId().replace(/[^a-zA-Z0-9_-]/g,'');return <svg className={className+' as-mark'} viewBox={AS_VIEWBOX} aria-hidden="true"><defs><linearGradient id={id} x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#061024"/><stop offset=".53" stopColor="#061024"/><stop offset=".79" stopColor="#0644d8"/><stop offset="1" stopColor="#0753ff"/></linearGradient></defs>{AS_PATHS.map((d,i)=><path key={i} d={d} style={{fill:i===0?'url(#'+id+')':'#0753ff'}}/>)}</svg>}
