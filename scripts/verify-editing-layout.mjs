import { chromium } from 'playwright';
import assert from 'node:assert/strict';
const browser=await chromium.launch({headless:true,args:['--no-sandbox']});
try {
 for(const viewport of [{width:1833,height:806},{width:390,height:844}]){
  const page=await browser.newPage({viewport,reducedMotion:'reduce'});
  await page.goto('http://127.0.0.1:3000/editing',{waitUntil:'networkidle'});
  await page.locator('.site.gl-fail').waitFor({state:'attached'});
  await page.locator('.site:not(.has-intro)').waitFor({state:'attached',timeout:15000});
  // Verify the real fallback first, then simulate the pinned WebGL layout without software raymarching.
  for(const pinned of [false,true]){
   if(pinned)await page.evaluate(()=>{document.querySelector('.site').classList.remove('gl-fail');document.querySelector('.site').classList.add('gl-on');document.querySelector('.hero').style.setProperty('--p','1');});
   const result=await page.evaluate(async()=>{
    const bio=document.querySelector('.editing-bio'),hero=document.querySelector('.hero-wrap'),title=bio.querySelector('h2'),lead=bio.querySelector('.lead');
    const bounds=()=>{const r=bio.getBoundingClientRect(),h=hero.getBoundingClientRect();return {gap:r.top-h.bottom,margin:getComputedStyle(hero).marginBottom}};
    const gap=bounds();
    window.scrollTo({top:window.scrollY+title.getBoundingClientRect().top-150,behavior:'instant'});
    await new Promise(r=>setTimeout(r,250));
    const visible=(el)=>{const r=el.getBoundingClientRect();const x=r.left+Math.min(12,r.width/2),y=r.top+Math.min(12,r.height/2);const hit=document.elementFromPoint(x,y);return {top:r.top,bottom:r.bottom,hit:hit?.className,uncovered:!!hit&&(el.contains(hit)||hit===el)};};
    return {...gap,title:visible(title),lead:visible(lead),width:document.documentElement.scrollWidth,viewport:innerWidth};
   });
   console.log(viewport,pinned?'pinned':'fallback',result);
   assert.equal(result.margin,'0px');
   assert(result.gap>=-1,'Hero overlaps profile');
   assert(result.title.uncovered,'Heading covered by another layer');
   if(result.lead.top>=0&&result.lead.top<viewport.height-20)assert(result.lead.uncovered,'Introduction covered');
   assert(result.width<=result.viewport+2,'Horizontal overflow');
  }
  await page.close();
 }
} finally {await browser.close();}
