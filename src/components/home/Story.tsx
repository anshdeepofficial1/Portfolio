import Image from 'next/image';
import { CHAPTERS, EDIT_CHAPTERS } from './chapters';

const STORY = [
  ['/img/tun-ch1-bw.svg', '023', 'd · design'],
  ['/img/tun-ch2-bw.svg', '068', 'd · design'],
  ['/img/tun-ch3-bw.svg', '100', 'p · production'],
  ['/img/tun-ch4-bw.svg', '158', 'p · production'],
] as const;

/** The dive unrolled into four stills, for reduced motion and devices that can't run the tunnel. */
export function Story({editing=false}:{editing?:boolean}={}) {
 const chapters=editing?EDIT_CHAPTERS:CHAPTERS;
  return (
    <div className="story" aria-hidden="true">
      {STORY.map(([img, deg, ph], i) => (
        <figure className="sf" key={img}>
          <Image src={img} alt="" fill sizes="100vw" />
          <p className="sf-t"><span className="mono">{chapters[i][0]}</span>{chapters[i][1]}</p>
          <p className="sf-c mono">The dive · frame {i + 1} of 4</p>
          <div className="sf-hud"><b className="num">{deg}°</b><span className="mono">{editing?(i<2?'01 · edit':'02 · finish'):ph}</span></div>
        </figure>
      ))}
    </div>
  );
}

