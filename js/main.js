const RM=matchMedia('(prefers-reduced-motion:reduce)').matches;var cur='01 / HOME';const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const P=[
{n:"Foodify Tour",im:"./assets/img/foodify-tour.jpg",c:"UX/UI • Product",f:"ux product",g:"#c2410c,#7c2d12",d:"A food-tour booking experience designed from user research to clickable prototype.",r:"UX/UI Designer",o:"Researched user behavior and mapped journeys to find pain points. Designed wireframes and UI for the website, built high-fidelity mockups aligned with branding, and created animated clickable prototypes.",t:"Figma",ty:"eCommerce",dt:"Jan — Apr 2025",u:"https://www.figma.com/proto/endTDNaXNDI43DQMYbIkBT/Digital-Startup?node-id=590-3414&t=2g3zEHyX7gijAOmL-1&scaling=scale-down-width&content-scaling=fixed&page-id=349%3A3048&starting-point-node-id=590%3A3414&show-proto-sidebar=1"},
{n:"Khmerspere",cn:1,bg:"#0b0b0c",im:"./assets/img/khmerspere.jpg",c:"UX/UI • Web",f:"ux",g:"#1e3a5f,#0b1a2e",d:"A website concept for an art gallery, shaped by research and prototyping.",r:"UX/UI Designer",o:"Researched target users and mapped insights to design decisions. Designed responsive wireframes in Figma, built high-fidelity UI reflecting the visual identity, and made interactive prototypes for testing and iteration.",t:"Figma",ty:"Art Gallery",dt:"May — Jul 2024",u:"https://bit.ly/3YrR5eh"},
{n:"Alta Manile",im:"./assets/img/alta-manile.jpg",bg:"#fff",fit:1,c:"Branding",f:"brand",g:"#6b4e2e,#2b1d10",d:"A jewelry brand identity built around color, logo, and pattern.",r:"Brand Designer",o:"Chose a color theme matching the brand personality, designed a versatile logo, created patterns and assets for marketing, and applied the identity to product mockups.",t:"Adobe Photoshop, Illustrator",ty:"Jewelry",dt:"Nov — Dec 2023",u:"https://drive.google.com/drive/folders/13Sj7528ChWY_5kn-v5dxyUquzxqT8AHF?usp=drive_link"},
{n:"Fitzone",cn:1,bg:"#111",im:"./assets/img/fitzone.jpg",c:"Product • E-commerce",f:"product",g:"#14532d,#052e16",d:"A responsive gym-equipment store built to support browsing and buying.",r:"Designer & Builder",o:"Defined key features and structure for product browsing and purchasing, focusing on intuitive navigation, strong visual hierarchy, and consistent branding across devices.",t:"Wix",ty:"Gym E-commerce",dt:"Oct 2021",u:"https://monypichyunymn.wixsite.com/fitzones"},
{n:"Trekker",cn:1,bg:"#16231a",im:"./assets/img/trekker.jpg",c:"Product • Web",f:"product",g:"#155e75,#083344",d:"A responsive tourism and itinerary website built from scratch.",r:"Front-end Developer",o:"Defined key features and site structure, then integrated content, icons, and imagery into a cohesive, consistent interface across devices.",t:"HTML, CSS, JavaScript, Bootstrap",ty:"Itinerary",dt:"Sep — Dec 2023",u:"https://ymnpich.github.io/Trekker-Website/"},
{n:"Poster Design",art:1,c:"Graphic Design",f:"brand",g:"#4a2c7a,#1a1033",d:"A collection of poster and artwork designs.",r:"Graphic Designer",o:"A collection of poster artwork. Open the Drive folder to browse the full set.",t:"Adobe Photoshop, Canva",ty:"Graphic Design",dt:"",u:"https://drive.google.com/drive/folders/1zLDF6oWtBajDDLoA6OoevqEif1iXWiwJ?usp=drive_link"}];
const ART='<svg viewBox="0 0 640 400" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Poster artwork illustration"><defs><filter id="ds" x="-20%" y="-20%" width="140%" height="150%"><feDropShadow dx="0" dy="10" stdDeviation="10" flood-color="#000" flood-opacity=".45"/></filter></defs><g filter="url(#ds)" transform="rotate(-9 195 210)"><rect x="110" y="70" width="170" height="240" rx="4" fill="#f4efe4"/><circle cx="195" cy="150" r="46" fill="#ff4d1c"/><rect x="130" y="222" width="130" height="10" fill="#111"/><rect x="130" y="242" width="90" height="6" fill="#111" opacity=".6"/><rect x="130" y="258" width="110" height="6" fill="#111" opacity=".35"/></g><g filter="url(#ds)" transform="rotate(8 460 210)"><rect x="375" y="75" width="170" height="240" rx="4" fill="#e8c46a"/><polygon points="395,295 460,160 525,295" fill="#1a1033"/><circle cx="460" cy="128" r="22" fill="#f4efe4"/><rect x="395" y="300" width="130" height="5" fill="#1a1033" opacity=".5"/></g><g filter="url(#ds)"><rect x="235" y="40" width="180" height="270" rx="4" fill="#2b1a55" stroke="#ffffff33"/><circle cx="325" cy="135" r="58" fill="#e8c46a"/><path d="M255 225q17-22 35 0t35 0 35 0 35 0" fill="none" stroke="#ff4d1c" stroke-width="6" stroke-linecap="round"/><path d="M255 248q17-22 35 0t35 0 35 0 35 0" fill="none" stroke="#f4efe4" stroke-width="4" stroke-linecap="round" opacity=".8"/><rect x="255" y="274" width="90" height="7" fill="#f4efe4"/><rect x="255" y="290" width="60" height="5" fill="#f4efe4" opacity=".5"/></g></svg>';
const V=p=>!p.im?(p.art?`<div class="im" style="background:linear-gradient(135deg,${p.g})">${ART}</div>`:`<div style="background:linear-gradient(135deg,${p.g})">${p.n}</div>`):`<div class="im" style="background:${p.bg||'#111'}"><img src="${p.im}" alt="${p.n} preview" class="${p.fit?'fit':p.cn?'cn':''}" loading="lazy"></div>`;
const gr=$('#gr');
gr.innerHTML=P.map((p,i)=>`<button class="card rv" data-f="${p.f}" data-i="${i}"><div class="vis">${V(p)}<span class="ov">${p.r} · View case study ↗</span></div><div class="meta"><div><h3>${p.n}</h3><div class="cat">${p.c}</div></div><span class="arr">↗</span></div><p class="one">${p.d}</p><p class="role2"><b>Role</b> · ${p.r}</p></button>`).join('');
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.12});
$$('.rv').forEach((e,i)=>{e.style.transitionDelay=(e.classList.contains('card')?(i%2)*.1:0)+'s';io.observe(e)});
// nav
const nav=$('#nav'),bar=$('#bar'),tl=$('#tl'),links=$$('.links a');
function sc(){const y=scrollY,h=document.documentElement.scrollHeight-innerHeight;bar.style.transform=`scaleX(${y/h})`;$('#pt').textContent=cur+' · '+Math.round(y/h*100)+'%';$('#pl').style.setProperty('--p',y/h);$$('.it').forEach(i=>i.classList.toggle('on',i.getBoundingClientRect().top<innerHeight*.75));mq();aw();hf(y);if(!RM&&innerWidth>860&&y<innerHeight*1.2){$('h1').style.translate=`0 ${y*-.06}px`;$('.ph img').style.translate=`0 ${y*-.04}px`}nav.classList.toggle('s',y>40);
const r=tl.getBoundingClientRect();tl.style.setProperty('--g',Math.min(1,Math.max(0,(innerHeight*.8-r.top)/r.height)))}
addEventListener('scroll',sc,{passive:true});sc();
const so=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){const id=x.target.id==='skills'?'experience':x.target.id;links.forEach(l=>l.classList.toggle('on',l.getAttribute('href')==='#'+id))}}),{rootMargin:'-45% 0px -50% 0px'});
$$('section').forEach(s=>so.observe(s));
$('#mb').onclick=()=>{const o=$('#lk').classList.toggle('o');$('#mb').textContent=o?'Close':'Menu'};
links.forEach(l=>l.addEventListener('click',()=>{$('#lk').classList.remove('o');$('#mb').textContent='Menu'}));
// keywords
$$('.kw button').forEach(b=>{const s=()=>{$$('.kw button').forEach(x=>x.classList.remove('on'));b.classList.add('on');$('#kd').innerHTML=b.dataset.d+'<div class="fw">'+b.dataset.v.split('|').map((t,i)=>`<span style="animation-delay:${i*.07}s">${t}</span>`).join('')+'</div>'};b.onmouseenter=s;b.onclick=s});
// filter
$$('.flt button').forEach(b=>b.onclick=()=>{$$('.flt button').forEach(x=>x.classList.remove('on'));b.classList.add('on');const f=b.dataset.f,cs=$$('.card'),M=c=>f==='all'||c.dataset.f.includes(f);
cs.forEach(c=>{if(!M(c))c.classList.add('out')});
setTimeout(()=>{const old=new Map(cs.filter(c=>!c.classList.contains('gone')&&M(c)).map(c=>[c,c.getBoundingClientRect()]));
cs.forEach(c=>c.classList.toggle('gone',!M(c)));
cs.filter(M).forEach(c=>{const o=old.get(c),n=c.getBoundingClientRect();
if(o&&!RM&&(o.left!==n.left||o.top!==n.top))c.animate([{transform:`translate(${o.left-n.left}px,${o.top-n.top}px)`},{transform:'none'}],{duration:500,easing:'cubic-bezier(.2,.8,.2,1)'});
if(!o)requestAnimationFrame(()=>c.classList.remove('out'))})},RM?0:300)});
// modal
const md=$('#modal'),pan=$('#pan');
gr.onclick=e=>{const c=e.target.closest('.card');if(!c)return;const p=P[c.dataset.i];
pan.innerHTML=`<button class="x" id="cl">← Close</button><div class="cat" style="margin-top:30px">${p.c}</div><h3>${p.n}</h3><div class="vis">${V(p)}</div><p>${p.d}</p><dl><dt>My role</dt><dd>${p.r}</dd><dt>Overview</dt><dd>${p.o}</dd><dt>Tools</dt><dd>${p.t}</dd><dt>Type</dt><dd>${p.ty}</dd>${p.dt?`<dt>Date</dt><dd>${p.dt}</dd>`:''}</dl><p style="margin-top:30px"><a class="btn p" href="${p.u}" target="_blank" rel="noopener">Open project ↗</a></p>`;
md.classList.add('o');document.body.style.overflow='hidden';$('#cl').onclick=close};
function close(){md.classList.remove('o');document.body.style.overflow=''}
md.onclick=e=>{if(e.target===md)close()};addEventListener('keydown',e=>e.key==='Escape'&&close());
// PO explore
$('#ex').onclick=()=>{const o=$('#mo').classList.toggle('o');$('#ex').textContent=o?'Close −':'Explore +'};
// journey
const J=[["UX/UI","Understanding users and designing experiences."],["Product","Connecting user needs with business requirements."],["Development","Working with teams to turn requirements into products."],["QA","Validating functionality and product quality."],["Product Owner","Connecting business, users, and technology."]];
$('#jr').innerHTML=J.map((j,i)=>`<button data-i="${i}"><span>0${i+1}</span>${j[0]} →</button>`).join('');
$$('#jr button').forEach(b=>{const s=()=>{$$('#jr button').forEach(x=>x.classList.remove('on'));b.classList.add('on');$('#jt').textContent=J[b.dataset.i][1];$('#jr').style.setProperty('--p',(+b.dataset.i+1)/5*100+'%')};b.onmouseenter=s;b.onclick=s});
new IntersectionObserver((e,o)=>{if(e[0].isIntersecting){$('#jr button:last-child').click();o.disconnect()}},{threshold:.5}).observe($('#jr'));
// cursor
const cu=$('#c'),gl=$('#gl');
if(matchMedia('(hover:hover) and (pointer:fine)').matches){document.body.classList.add('cc');
addEventListener('mousemove',e=>{fm(e);cu.style.transform=`translate(${e.clientX}px,${e.clientY}px)`;gl.style.transform=`translate(${(e.clientX-innerWidth/2)*-.03}px,${(e.clientY-innerHeight/2)*-.03}px)`});
document.addEventListener('mouseover',e=>{const t=e.target;const card=t.closest('.card');cu.classList.toggle('v',!!card);cu.textContent=card?'VIEW':'';cu.classList.toggle('b',!card&&!!t.closest('.btn,.links a,.flt button,.kw button'))})}

function fm(e){if(RM)return;const nx=e.clientX/innerWidth-.5,ny=e.clientY/innerHeight-.5;$$('.fl').forEach((f,i)=>{const d=[26,40,32][i];f.style.translate=`${nx*d}px ${ny*d}px`})}
const L={home:'01 / HOME',about:'02 / ABOUT',work:'03 / WORK',experience:'04 / EXPERIENCE',skills:'05 / SKILLS',contact:'06 / CONTACT'};
const s2=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting)cur=L[x.target.id]}),{rootMargin:'-45% 0px -50% 0px'});
const s3=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting)x.target.classList.add('d')}),{threshold:.04});
$$('section').forEach(x=>{s2.observe(x);s3.observe(x)});
$$('.sg').forEach(x=>x.addEventListener('mousemove',e=>{const r=x.getBoundingClientRect();x.style.setProperty('--x',e.clientX-r.left+'px');x.style.setProperty('--y',e.clientY-r.top+'px')}));
if(matchMedia('(hover:hover) and (pointer:fine)').matches&&!RM){
$$('.card').forEach(c=>{c.addEventListener('mousemove',e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.setProperty('--ry',x*6+'deg');c.style.setProperty('--rx',-y*6+'deg');c.style.setProperty('--mx',-x*4+'%');c.style.setProperty('--my',-y*4+'%')});c.addEventListener('mouseleave',()=>['--rx','--ry','--mx','--my'].forEach(k=>c.style.removeProperty(k)))});
$$('.btn').forEach(b=>{b.addEventListener('mousemove',e=>{const r=b.getBoundingClientRect();b.style.translate=`${(e.clientX-r.left-r.width/2)*.15}px ${(e.clientY-r.top-r.height/2)*.25}px`});b.addEventListener('mouseleave',()=>b.style.translate='')})}

function mq(){return;const m=$('.mq').getBoundingClientRect();if(m.bottom<0||m.top>innerHeight)return;$('#mqt').style.transform=`translateX(${-(innerHeight-m.top)*.3}px)`}
function aw(){const p=$('.about p.serif'),ws=$$('.aw');if(!p||!ws.length)return;const r=p.getBoundingClientRect(),pr=RM?1:Math.min(1,Math.max(0,(innerHeight*.9-r.top)/(r.height+innerHeight*.3))),n=Math.round(pr*ws.length);ws.forEach((w,i)=>w.classList.toggle('lit',i<n))}
$$('h1 em').forEach(em=>em.innerHTML=[...em.textContent].map(c=>`<u>${c}</u>`).join(''));
$$('h2').forEach(h=>{let k=0;h.innerHTML=h.innerHTML.split('<br>').map(l=>l.split(' ').map(w=>`<span class="w"><b style="transition-delay:${(k++)*.07}s">${w}</b></span>`).join(' ')).join('<br>')});
const ap=$('.about p.serif');ap.innerHTML=ap.textContent.split(' ').map(w=>`<span class="aw">${w}</span>`).join(' ');aw();
$$('.sg').forEach((g,gi)=>g.querySelectorAll('span').forEach((x,i)=>x.style.animationDelay=(gi*.1+i*.05)+'s'));
if(!RM)document.addEventListener('click',e=>{const r=document.createElement('div');r.className='rp';r.style.left=e.clientX+'px';r.style.top=e.clientY+'px';document.body.appendChild(r);r.onanimationend=()=>r.remove()});
if(matchMedia('(hover:hover) and (pointer:fine)').matches&&!RM){const rg=$('#c2');let tx=0,ty=0,x=0,y=0,run=false;
function lp(){x+=(tx-x)*.16;y+=(ty-y)*.16;rg.style.transform=`translate(${x}px,${y}px)`;rg.style.opacity=cu.classList.contains('v')?0:.55;if(Math.abs(tx-x)+Math.abs(ty-y)>.4)requestAnimationFrame(lp);else run=false}
addEventListener('mousemove',e=>{tx=e.clientX;ty=e.clientY;if(!run){run=true;requestAnimationFrame(lp)}})}

function hf(y){if(RM||y>innerHeight)return;$('.hero>div:nth-child(2)').style.opacity=Math.max(0,1-y/(innerHeight*.75))}
const rt=document.documentElement,th=$('#th');th.setAttribute('aria-pressed',rt.dataset.theme==='dark');
function setTheme(t){rt.dataset.theme=t;th.setAttribute('aria-pressed',t==='dark');try{localStorage.setItem('th',t)}catch(e){}}
th.addEventListener('click',()=>{const t=rt.dataset.theme==='dark'?'light':'dark';
if(!document.startViewTransition||RM){setTheme(t);return}
const b=th.getBoundingClientRect(),x=b.left+b.width/2,y=b.top+b.height/2,r=Math.hypot(Math.max(x,innerWidth-x),Math.max(y,innerHeight-y));
const vt=document.startViewTransition(()=>setTheme(t));
vt.finished.catch(()=>{});
vt.ready.then(()=>rt.animate({clipPath:[`circle(0px at ${x}px ${y}px)`,`circle(${r}px at ${x}px ${y}px)`]},{duration:750,easing:'cubic-bezier(.2,.8,.2,1)',pseudoElement:'::view-transition-new(root)'})).catch(()=>{})});
new IntersectionObserver(e=>document.body.classList.toggle('off',!e[0].isIntersecting)).observe($('#home'));
const fl=$('.flt');fl.insertAdjacentHTML('afterbegin','<i id="fp"></i>');
function pf(){const a=$('.flt .on'),p=$('#fp');p.style.left=a.offsetLeft+'px';p.style.top=a.offsetTop+'px';p.style.width=a.offsetWidth+'px';p.style.height=a.offsetHeight+'px'}
pf();addEventListener('resize',pf);addEventListener('load',pf);$$('.flt button').forEach(b=>b.addEventListener('click',pf));
if(matchMedia('(hover:hover) and (pointer:fine)').matches&&!RM)$$('#th,.soc a,.logo').forEach(b=>{b.style.display=b.matches('.soc a,.logo')?'inline-block':'';b.addEventListener('mousemove',e=>{const r=b.getBoundingClientRect();b.style.translate=`${(e.clientX-r.left-r.width/2)*.3}px ${(e.clientY-r.top-r.height/2)*.3}px`});b.addEventListener('mouseleave',()=>b.style.translate='')});

function fb(t){const a=document.createElement('textarea');a.value=t;a.style.cssText='position:fixed;opacity:0';document.body.appendChild(a);a.select();try{document.execCommand('copy')}catch(e){}a.remove()}
function copy(t){try{return navigator.clipboard.writeText(t).catch(()=>fb(t))}catch(e){fb(t);return Promise.resolve()}}
$$('a[href^="mailto:"]').forEach(a=>a.addEventListener('click',e=>{const em=a.getAttribute('href').replace('mailto:','');copy(em).then(()=>{if(!a.dataset.o)a.dataset.o=a.textContent;a.textContent='Email copied ✓';clearTimeout(a.t);a.t=setTimeout(()=>{a.textContent=a.dataset.o;delete a.dataset.o},2400)})}));

$('#mqt').innerHTML=Array(4).fill('<span>PRODUCT ✦ UX/UI ✦ DIGITAL BUSINESS ✦ TECHNOLOGY ✦&nbsp;</span>').join('');
const vzo=new IntersectionObserver(e=>e.forEach(x=>x.target.classList.toggle('vz',x.isIntersecting)));
$$('section,.mq,.card,.tl').forEach(x=>vzo.observe(x));
function loop(el,fn,ms){if(RM)return;let t;new IntersectionObserver(e=>{clearInterval(t);if(e[0].isIntersecting)t=setInterval(fn,ms)},{threshold:.3}).observe(el)}
const tags=$$('.sg span');let ti=0;
loop($('.sk'),()=>{tags.forEach(t=>t.classList.remove('hl'));tags[ti++%tags.length].classList.add('hl')},1300);
let jm=false,ji=4;const jb=$$('#jr button');
jb.forEach(b=>['mouseenter','click'].forEach(ev=>b.addEventListener(ev,e=>{if(e.isTrusted)jm=true})));
loop($('#jr'),()=>{if(jm)return;ji=(ji+1)%5;jb[ji].dispatchEvent(new Event('mouseenter'))},2200);
let km=false,ki=-1;const kb=$$('.kw button');
kb.forEach(b=>['mouseenter','click'].forEach(ev=>b.addEventListener(ev,e=>{if(e.isTrusted)km=true})));
loop($('.kw'),()=>{if(km)return;ki=(ki+1)%5;kb[ki].dispatchEvent(new Event('mouseenter'))},2600);
