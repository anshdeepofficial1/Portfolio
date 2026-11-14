import Link from 'next/link';
import Image from 'next/image';
import { RESUMES, type ResumeKind } from '@/lib/resumes';
import { Arrow } from './Icons';
export function ResumePanel({kind, compact=false}:{kind:ResumeKind;compact?:boolean}){
 const r=RESUMES[kind];
 return <div className="resume-grid"><div><p className="mono mute">{r.label.toUpperCase()} / CURRICULUM VITAE</p><h2 className="t-d2">{compact?'Resume.':'Anshdeep Singh'}</h2><p className="lead">{r.description}</p><div className="resume-actions" style={{marginTop:32}}>{compact?<Link className="btn btn-ink" href={r.route}>View {r.label} Resume<Arrow/></Link>:<a className="btn btn-ink" href={r.pdf} target="_blank" rel="noopener">Open PDF<Arrow/></a>}<a className="btn btn-line" href={r.pdf} download>Download PDF<Arrow/></a></div>{!compact&&<Link className="lnk mono" style={{display:'inline-flex',marginTop:24}} href={kind==='coding'?RESUMES.editing.route:RESUMES.coding.route}>View {kind==='coding'?'Editing':'Coding'} Resume<Arrow/></Link>}</div><a className="resume-preview" href={r.pdf} target="_blank" rel="noopener" aria-label={'Open '+r.title+' PDF'}><Image src={r.preview} alt={r.title+' — first page of the original PDF'} width={1000} height={1414} unoptimized style={{height:'auto',width:'100%'}}/><span className="mono">Original PDF · Open full document <Arrow/></span></a></div>;
}
