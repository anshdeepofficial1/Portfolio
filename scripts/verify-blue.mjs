import {chromium} from 'playwright';
import {readFile,writeFile,mkdir} from 'node:fs/promises';
import {execFileSync} from 'node:child_process';
const browser=await chromium.launch({headless:true,args:['--no-sandbox','--disable-dev-shm-usage','--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
const base='http://127.0.0.1:3000', dir='public/img/actual';await mkdir(dir,{recursive:true});
const manifest=JSON.parse(await readFile('src/lib/preview-manifest.json','utf8'));
const targets=JSON.parse(await readFile('scripts/blue-preview-targets.json','utf8'));
async function capture(t){
 const p=await browser.newPage({viewport:{width:1440,height:900},deviceScaleFactor:1});
 try{
 const r=await p.goto(t.url,{waitUntil:'domcontentloaded',timeout:35000});
 if(!r?.ok())throw Error('HTTP '+r?.status());
 await p.waitForTimeout(5000);await p.evaluate(()=>document.fonts.ready);
 const body=await p.locator('body').innerText().catch(()=> '');
 if(/Deployment Not Found|Vercel Authentication|404: NOT_FOUND|Application error: a client-side exception|Access Denied/i.test(body.slice(0,3000)))throw Error('Unavailable');
 const signin=t.k==='zylo'&&(/sign in|log in|login/i.test(body.slice(0,1500))||/login|signin|auth/i.test(p.url()));
 await p.screenshot({path:dir+'/'+t.k+'.jpg',type:'jpeg',quality:94,animations:'disabled'});
 manifest[t.k]={label:signin?'Live website · sign-in required':t.url.includes('github.com')?'Repository preview':'Live website screenshot',source:t.url,finalUrl:p.url()};
 console.log('Captured',t.k,manifest[t.k],body.slice(0,150));
 }catch(e){console.log('Capture failed',t.k,e.message);if(t.k==='socialboost-app')manifest[t.k]={label:'Preview unavailable',source:t.url,unavailable:true};else throw e;}finally{await p.close();}
}
try{
 await Promise.all(targets.map(capture));
 await writeFile('src/lib/preview-manifest.json',JSON.stringify(manifest,null,2)+'\n');
 const p=await browser.newPage({viewport:{width:1440,height:900},reducedMotion:'reduce'});
 await p.goto(base+'/',{waitUntil:'domcontentloaded'});if(!p.url().endsWith('/coding'))throw Error('root redirect');
 await p.goto(base+'/app',{waitUntil:'domcontentloaded'});if(!p.url().endsWith('/coding'))throw Error('app redirect');
 await p.goto(base+'/coding',{waitUntil:'networkidle'});await p.waitForTimeout(4800);
 if(await p.locator('.project-title').count()!==5)throw Error('Featured count');
 if(!(await p.locator('.work-all').innerText()).includes('24 projects'))throw Error('Total count');
 const row=p.locator('.project-row').first();await row.scrollIntoViewIfNeeded();
 await row.locator('.project-title').hover();if(await row.locator('.project-hover').count()!==1)throw Error('Hover missing');
 await row.locator('.preview-action').hover();if(await row.locator('.project-hover').count())throw Error('Preview overlays button');
 await row.locator('.preview-action').click();await p.locator('.lb.on').waitFor();if(await p.locator('.lb.on a[href="https://anidashgo.vercel.app/"]').count()!==1)throw Error('Preview destination wrong');await p.locator('.lb-top button').click();
 await p.goto(base+'/coding',{waitUntil:'networkidle'});await p.waitForTimeout(4800);
 await p.screenshot({path:dir+'/portfolio.jpg',type:'jpeg',quality:94});
 execFileSync('python3',['scripts/normalize-preview.py',dir+'/portfolio.jpg',dir+'/portfolio-blueprint.jpg','blueprint']);
 await p.goto(base+'/editing',{waitUntil:'networkidle'});await p.waitForTimeout(4800);
 if(await p.locator('.hero .hu-name').innerText()!=='Anshdeep Singh · Video Editor')throw Error('Editing hero missing');
 if(await p.locator('main').getByText('ZMB',{exact:true}).count()||await p.locator('main').getByText('DarkAnimeWalls',{exact:true}).count())throw Error('Coding projects in Editing');
 await p.screenshot({path:dir+'/editing-portfolio.jpg',type:'jpeg',quality:94});
 execFileSync('python3',['scripts/normalize-preview.py',dir+'/editing-portfolio.jpg',dir+'/editing-blueprint.jpg','blueprint']);
 for(const route of ['/work','/about','/resume','/contact']){const r=await p.goto(base+route,{waitUntil:'domcontentloaded'});if(!r?.ok())throw Error(route);}
 const mobile=await browser.newPage({viewport:{width:390,height:844},isMobile:true,hasTouch:true,reducedMotion:'reduce'});
 for(const route of ['/coding','/editing']){await mobile.goto(base+route,{waitUntil:'networkidle'});await mobile.waitForTimeout(4800);const w=await mobile.evaluate(()=>({vw:innerWidth,doc:document.documentElement.scrollWidth}));if(w.doc>w.vw+2)throw Error('Mobile overflow '+route+JSON.stringify(w));}
 console.log('Routes, hover/click preview, total, editing isolation and mobile checks passed');
}finally{await browser.close();}
