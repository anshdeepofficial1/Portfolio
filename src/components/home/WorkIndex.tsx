'use client';
import Link from 'next/link';
import {useState} from 'react';
import {WORK,ALL_WORK} from '@/lib/work';
import {Arrow} from '../Icons';
import {ShotMedia} from '../ShotMedia';
import {openCase} from '../CaseViewer';
export function WorkIndex(){
 const [active,setActive]=useState<string|null>(null);
 return <section className="work on-bone" id="work" aria-labelledby="work-h"><div className="wrap"><div className="work-top grid"><h2 className="h-xl gc-1-8" id="work-h">Drawn, then shipped.</h2><p className="lead gc-9-12">My five featured projects. Hover a name for a preview, or use the buttons to open it or visit the actual website.</p></div></div><ul className="idx">{WORK.map((w,i)=><li className={'row r'+i} key={w.k} onPointerLeave={()=>setActive(null)}><div className="row-a project-row"><span className="r-n mono">0{i+1}</span><div className="project-name-wrap" onPointerEnter={()=>setActive(w.k)} onPointerLeave={()=>setActive(null)}><button type="button" className="r-name project-title" data-cursor="view" onClick={()=>{setActive(null);openCase(w.k)}} onFocus={()=>setActive(w.k)} onBlur={()=>setActive(null)}><span className="rn-o">{w.name}</span><span className="rn-s" aria-hidden="true">{w.name}</span></button>{active===w.k&&<div className="project-hover" aria-hidden="true"><ShotMedia img={w.img} sizes="480px"/><span className="mono">{w.go}</span></div>}</div><ShotMedia className="r-pv" img={w.img} sizes="(max-width:900px) 100vw,50vw"/><div className="r-meta" onPointerEnter={()=>setActive(null)}><span className="mono">{w.cat}</span><span className="r-d">{w.short}</span><div className="project-actions"><button type="button" className="r-go mono preview-action" onClick={()=>{setActive(null);openCase(w.k)}}>Open preview<Arrow/></button><a className="r-go mono live-action" href={w.href} target="_blank" rel="noopener noreferrer">Visit website<Arrow/></a></div></div></div></li>)}</ul><div className="work-all"><p className="mono">{ALL_WORK.length} projects on the work page</p><Link className="lnk mono" href="/work">See all work<Arrow/></Link></div></section>
}
