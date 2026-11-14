

const STATS=[{to:5,suf:'',label:'Featured projects',sub:'Apps, web and systems',sr:'5 featured projects'},{to:4,suf:'',label:'Project categories',sub:'Apps · web · systems · creative',sr:'4 categories'},{to:2027,suf:'',label:'Expected graduation',sub:'Chandigarh University',sr:'Expected graduation 2027'}];

/** Testimonials and the stats index. The quotes run in Quotes; the count-up is scrubbed in ScrollFx. */
export function Proof() {
  return (
    <section className="proof on-bone" aria-label="Portfolio at a glance">
      
      <div className="wrap">
        <ul className="stx">
          {STATS.map((s) => (
            <li className="sx" style={{ '--to': s.to } as React.CSSProperties} key={s.label}>
              <span className="sx-v" aria-hidden="true">
                <span className="sx-o"><i className="sx-n" />{s.suf}</span>
                <span className="sx-s"><i className="sx-n" />{s.suf}</span>
              </span>
              <span className="sr">{s.sr}</span>
              <span className="sx-l"><b>{s.label}</b><span className="mono mute">{s.sub}</span></span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

