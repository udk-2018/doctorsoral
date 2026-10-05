import {cp,readFile,writeFile,readdir,rm,mkdir} from 'node:fs/promises';
// Canonical URLs must use the stable public origin, never a deployment preview URL.
const raw=process.env.SITE_URL||'https://doctorsoral.pages.dev';
const url=new URL(raw);if(!['https:','http:'].includes(url.protocol))throw new Error('Invalid site URL');
await rm('dist',{recursive:true,force:true});await mkdir('dist');
for(const file of await readdir('.')){if(!/\.(html|css|js|svg|png|jpg|xml|txt)$/.test(file))continue;await cp(file,'dist/'+file);if(/\.(html|xml|txt)$/.test(file)){const text=await readFile(file,'utf8');await writeFile('dist/'+file,text.replaceAll('__SITE_ORIGIN__',url.origin));}}
console.log('Built static site for '+url.origin);
