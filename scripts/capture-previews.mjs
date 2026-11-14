import { chromium } from 'playwright';
import { readFile, writeFile, mkdir, access } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
const targets=JSON.parse(await readFile('scripts/preview-targets.json','utf8'));
const dir='public/img/actual'; await mkdir(dir,{recursive:true});
const browser=await chromium.launch({headless:true,args:['--no-sandbox','--disable-dev-shm-usage']});
const manifest=JSON.parse(await readFile('src/lib/preview-manifest.json','utf8'));
async function shot(url,out) {
 const page=await browser.newPage({viewport:{width:1440,height:900},deviceScaleFactor:1,ignoreHTTPSErrors:false});
 try{
  const res=await page.goto(url,{waitUntil:'domcontentloaded',timeout:35000});
  if(!res||res.status()>=400)throw Error('HTTP '+res?.status());
  await page.waitForTimeout(3500);
  await page.evaluate(async()=>{await document.fonts.ready;});
  const txt=await page.locator('body').innerText().catch(()=> '');
  if(/Deployment Not Found|Vercel Authentication|This deployment is unavailable|Application error: a client-side exception|Sign in to Vercel|404: NOT_FOUND|Access Denied/i.test(txt.slice(0,2000)))throw Error('page unavailable');
  await page.screenshot({path:out,type:'jpeg',quality:90,animations:'disabled',timeout:20000});
  return true;
 } finally {await page.close();}
}
async function image(url,out){
 const response=await fetch(url,{signal:AbortSignal.timeout(25000)});
 if(!response.ok)throw Error('image '+response.status);
 await writeFile(out+'.source',Buffer.from(await response.arrayBuffer()));
 execFileSync('python',['scripts/normalize-preview.py',out+'.source',out],{stdio:'inherit'});
}
async function captureTarget(t){
 const out=dir+'/'+t.k+'.jpg';
 if(t.k!=='nova'&&manifest[t.k]&&!manifest[t.k].unavailable){try{await access(out);return;}catch{}}
 try{
  if(t.sourceImg){await image(t.sourceImg,out);manifest[t.k]={label:t.previewLabel,source:t.sourceImg};return;}
  if(t.k==='nova'){
   try{await shot('http://127.0.0.1:4173',out);manifest[t.k]={label:'NOVA shell preview',source:'https://github.com/anshdeepofficial1/NOVA'};return;}catch(e){console.log('NOVA shell unavailable:',e.message);}
  }
  try{await shot(t.href,out);manifest[t.k]={label:t.href.includes('github.com')?'Repository preview':'Website screenshot',source:t.href};return;}catch(e){console.log(t.k+' primary: '+e.message);}
  if(t.github&&t.github!==t.href){await shot(t.github,out);manifest[t.k]={label:'Repository preview',source:t.github};return;}
  throw Error('no accessible preview');
 }catch(e){console.warn(t.k+': '+e.message);manifest[t.k]={label:'Preview unavailable',source:t.href,unavailable:true};}
}
try{
 for(let i=0;i<targets.length;i+=4)await Promise.all(targets.slice(i,i+4).map(captureTarget));
 await shot('http://127.0.0.1:3000/',dir+'/portfolio.jpg');
 execFileSync('python',['scripts/normalize-preview.py',dir+'/portfolio.jpg',dir+'/portfolio-blueprint.jpg','blueprint'],{stdio:'inherit'});
 execFileSync('pdftoppm',['-f','1','-l','1','-r','144','-png','-singlefile','public/RESUME.pdf',dir+'/resume'],{stdio:'inherit'});
 await writeFile('src/lib/preview-manifest.json',JSON.stringify(manifest,null,2)+'\n');
 console.log('Preview results',JSON.stringify(manifest));
}finally{await browser.close();}
