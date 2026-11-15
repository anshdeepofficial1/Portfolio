import assert from 'node:assert/strict';
const base=(process.env.TEST_URL||'http://127.0.0.1:3000').replace(/\/$/,'');
const canonical='https://anshdeepofficial1.vercel.app';
const ua='OAI-SearchBot';
async function get(path){
  const response=await fetch(base+path,{headers:{'User-Agent':ua},signal:AbortSignal.timeout(15000)});
  assert.equal(response.status,200,path+' must be publicly accessible');
  assert(!/noindex/i.test(response.headers.get('x-robots-tag')||''),path+' is blocked from indexing');
  return response.text();
}
const robots=await get('/robots.txt');
assert.match(robots,/User-Agent:\s*OAI-SearchBot/i);
assert.match(robots,/User-Agent:\s*OAI-SearchBot\s*\nAllow:\s*\//i);
assert(robots.includes(canonical+'/sitemap.xml'));
const sitemap=await get('/sitemap.xml');
const urls=[...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m=>m[1]);
const projects=urls.filter(u=>u.startsWith(canonical+'/projects/'));
assert(projects.length>=17,'Expected at least 17 project pages in sitemap');
for(const path of ['/about','/coding','/editing','/work'])assert(urls.includes(canonical+path),path+' missing in sitemap');
function data(html){return [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(m=>JSON.parse(m[1]));}
const about=await get('/about');
const profile=data(about).find(x=>x['@type']==='ProfilePage');
assert.equal(profile?.mainEntity?.name,'Anshdeep Singh');
assert.equal(profile.mainEntity.alternateName,'anshdeepofficial1');
assert.equal(profile.mainEntity['@id'],canonical+'/about#person');
assert(profile.mainEntity.sameAs.includes('https://github.com/anshdeepofficial1'));
assert(about.includes('Chandigarh University'));
assert(!/<meta[^>]*name="robots"[^>]*content="[^"]*noindex/i.test(about));
const work=await get('/work');
for(const url of projects){
  const path=new URL(url).pathname;
  assert(work.includes('href="'+path+'"'),path+' is not linked from work');
  const html=await get(path);
  assert(html.includes('Anshdeep Singh'),path+' missing author');
  assert(html.includes(canonical+'/about#person'),path+' missing identity reference');
  assert(html.includes('rel="canonical" href="'+url+'"')||html.includes('href="'+url+'" rel="canonical"'),path+' missing canonical URL');
  assert(data(html).some(x=>x['@id']===url+'#project'),path+' missing structured project data');
}
console.log('Search discoverability verified: '+projects.length+' linked project pages, Person/ProfilePage schema, canonical links, sitemap and OAI-SearchBot accessibility at '+base);
