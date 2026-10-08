import {cp,readFile,writeFile,readdir,rm,mkdir} from 'node:fs/promises';
// Stable origins only: deployment preview URLs must never become canonical URLs.
const legacyOrigin='https://doctorsoral.pages.dev';
const currentOrigin='https://doctorscare.pages.dev';
const raw=process.env.SITE_URL||currentOrigin;
const configured=new URL(raw);
if(!['https:','http:'].includes(configured.protocol))throw new Error('Invalid site URL');
// Both Pages projects build this repository. Redirect only the legacy project.
const deploymentHost=process.env.CF_PAGES_URL?new URL(process.env.CF_PAGES_URL).hostname:'';
const legacyHost=new URL(legacyOrigin).hostname;
const currentHost=new URL(currentOrigin).hostname;
const onLegacy=deploymentHost===legacyHost||deploymentHost.endsWith('.'+legacyHost);
const onCurrent=deploymentHost===currentHost||deploymentHost.endsWith('.'+currentHost);
const redirectLegacy=onLegacy||(!onCurrent&&configured.origin===legacyOrigin);
const origin=configured.origin===legacyOrigin?currentOrigin:configured.origin;
await rm('dist',{recursive:true,force:true});
await mkdir('dist');
for(const file of await readdir('.')){
  if(!/\.(html|css|js|svg|png|jpg|jpeg|webp|gif|xml|txt)$/.test(file))continue;
  await cp(file,'dist/'+file);
  if(/\.(html|xml|txt)$/.test(file)){
    const text=await readFile(file,'utf8');
    await writeFile('dist/'+file,text.replaceAll('__SITE_ORIGIN__',origin));
  }
}
if(redirectLegacy){
  await writeFile('dist/_redirects','/* '+currentOrigin+'/:splat 301\n');
}
console.log('Built static site for '+origin+(redirectLegacy?' (legacy 301 redirects enabled)':''));
