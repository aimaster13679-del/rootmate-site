/* Editorial portraits: tonal head-and-shoulders silhouettes used as stand-ins where no
   member photo exists (welcome screen, store images). No faces, skin tones or regional
   dress (every head is the same soft white), so they read as adults from anywhere. portrait(seed, g, {tone}) where tone picks one of P_TONES. */
function rngP(seed){let a=seed>>>0;return function(){a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
function mixHex(a,b,t){const p=h=>[1,3,5].map(i=>parseInt(h.slice(i,i+2),16));const A=p(a),B=p(b);return '#'+A.map((v,i)=>Math.round(v+(B[i]-v)*t).toString(16).padStart(2,'0')).join('')}
/* Each tone: background light, background deep, figure, clothing */
const P_TONES=[
  ['#F8E8EC','#EBC6D0','#9A4A62','#E9D2D8'],   // rose
  ['#F1E8F4','#D9C6E3','#6A4A82','#EADFEF'],   // mauve
  ['#E9EDF5','#C9D1E4','#3E4B74','#DCE2EE'],   // slate
  ['#E8F0EC','#C8DCD1','#3D6656','#DCE8E1'],   // sage
  ['#E6F0F1','#C3DCDF','#2F6670','#D7E7E9'],   // teal
  ['#F5E7EE','#E3C2D3','#6E3558','#EEDBE5'],   // plum
];
const PCACHE=new Map();
function portrait(seed,g,o){
  o=o||{};const key=seed+g+(o.tone!=null?'t'+o.tone:'');if(PCACHE.has(key))return PCACHE.get(key);
  const r=rngP(seed*9301+49297),pick=a=>a[Math.floor(r()*a.length)],F=g==='F';
  const T=P_TONES[o.tone!=null?o.tone:pick([0,0,1,1,5,5,2,3,4])],id='p'+String(key).replace(/\W/g,'');
  /* Head, neck and ears are the same soft white for every portrait, man or woman, so no
     figure ever reads as a skin colour. The tone only colours hair, clothes and backdrop. */
  const fig=T[2],head='#FBF9FA',headL='#FFFFFF',headD='#E9E2E6',hair=mixHex(fig,'#000000',.38);
  const figL=headL,figD=headD;
  const cloth=pick([T[3],mixHex(fig,'#ffffff',.35),mixHex(fig,'#000000',.1),'#F4F1EC']),clothL=mixHex(cloth,'#ffffff',.18),clothD=mixHex(cloth,'#000000',.2);
  const lean=Math.round((r()-.5)*6);           // slight head turn
  const hx=100+lean, hy=84, hrx=F?24:25.5, hry=F?31:32;
  const K=1.13, TR=`transform="translate(${hx} ${hy}) scale(${K}) translate(${-hx} ${-hy})"`;
  let s=`<svg viewBox="0 0 200 220" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><defs>`
   +`<linearGradient id="${id}b" x1="0" y1="0" x2=".8" y2="1"><stop offset="0" stop-color="${mixHex(T[0],T[1],.45)}"/><stop offset="1" stop-color="${mixHex(T[1],fig,.12)}"/></linearGradient>`
   +`<radialGradient id="${id}g" cx=".3" cy=".22" r=".75"><stop offset="0" stop-color="#ffffff" stop-opacity=".7"/><stop offset="1" stop-color="#ffffff" stop-opacity="0"/></radialGradient>`
   +`<linearGradient id="${id}f" x1="0" y1="0" x2="1" y2=".25"><stop offset="0" stop-color="${figL}"/><stop offset=".55" stop-color="${head}"/><stop offset="1" stop-color="${figD}"/></linearGradient>`
   +`<linearGradient id="${id}c" x1="0" y1="0" x2="1" y2=".3"><stop offset="0" stop-color="${clothL}"/><stop offset=".6" stop-color="${cloth}"/><stop offset="1" stop-color="${clothD}"/></linearGradient>`
   +`<linearGradient id="${id}h" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${mixHex(hair,'#ffffff',.14)}"/><stop offset="1" stop-color="${hair}"/></linearGradient>`
   +`</defs>`;
  s+=`<rect width="200" height="220" fill="url(#${id}b)"/><rect width="200" height="220" fill="url(#${id}g)"/>`;
  // soft shadow on the backdrop
  s+=`<ellipse cx="${118+lean}" cy="196" rx="92" ry="40" fill="${T[1]}" opacity=".55"/>`;
  const hairStyle=F?pick(['long','long','bob','wavy','updo','shoulder']):pick(['crop','side','textured','swept']);
  // long hair falls behind the shoulders
  s+=`<g ${TR}>`;
  if(F&&(hairStyle==='long'||hairStyle==='wavy'))s+=`<path d="M${hx-30} ${hy-6}C${hx-36} ${hy-48} ${hx+36} ${hy-48} ${hx+30} ${hy-6}C${hx+34} ${hy+40} ${hx+40} ${hy+76} ${hx+44} ${hy+102}${hairStyle==='wavy'?`q-10 8-18 2q-8 8-18 2`:''}L${hx-44} ${hy+102}${hairStyle==='wavy'?`q-6 6-14 0`:''}C${hx-40} ${hy+76} ${hx-34} ${hy+40} ${hx-30} ${hy-6}z" fill="url(#${id}h)"/>`;
  if(F&&hairStyle==='shoulder')s+=`<path d="M${hx-29} ${hy-6}C${hx-34} ${hy-46} ${hx+34} ${hy-46} ${hx+29} ${hy-6}C${hx+33} ${hy+28} ${hx+34} ${hy+46} ${hx+36} ${hy+60}L${hx-36} ${hy+60}C${hx-34} ${hy+46} ${hx-33} ${hy+28} ${hx-29} ${hy-6}z" fill="url(#${id}h)"/>`;
  if(F&&hairStyle==='updo')s+=`<ellipse cx="${hx+16}" cy="${hy-30}" rx="14" ry="12" fill="url(#${id}h)"/>`;
  s+=`</g>`;
  // neck
  const nw=F?12:15;
  s+=`<path d="M${hx-nw} ${hy+20}C${hx-nw} ${hy+36} ${hx-nw-1} ${hy+50} ${hx-nw-3} ${hy+62}L${hx+nw+3} ${hy+62}C${hx+nw+1} ${hy+50} ${hx+nw} ${hy+36} ${hx+nw} ${hy+20}z" fill="${figD}"/>`;
  // shoulders and torso
  const sw=F?66:78, top=hy+50, L=100-sw, R=100+sw;
  const torso=`M${hx-nw-2} ${top}C${hx-nw-16} ${top+7} ${L+12} ${top+9} ${L} ${top+24}C${L-8} ${top+32} ${L-12} ${top+52} ${L-13} 220L${R+13} 220C${R+12} ${top+52} ${R+8} ${top+32} ${R} ${top+24}C${R-12} ${top+9} ${hx+nw+16} ${top+7} ${hx+nw+2} ${top}z`;
  s+=`<path d="${torso}" fill="url(#${id}c)"/>`;
  const outfit=F?pick(['vneck','boat','blazer','crew','turtle']):pick(['blazer','blazer','shirt','crew','turtle']);
  if(outfit==='vneck')s+=`<path d="M${hx-nw-6} ${top+4}L${hx} ${top+34}L${hx+nw+6} ${top+4}z" fill="${figD}"/>`;
  if(outfit==='boat')s+=`<path d="M${hx-nw-8} ${top+4}Q${hx} ${top+14} ${hx+nw+8} ${top+4}z" fill="${figD}"/>`;
  if(outfit==='crew')s+=`<path d="M${hx-nw-4} ${top+3}Q${hx} ${top+12} ${hx+nw+4} ${top+3}" stroke="${clothD}" stroke-width="3" fill="none"/>`;
  if(outfit==='turtle')s+=`<path d="M${hx-nw-1} ${hy+40}Q${hx} ${hy+44} ${hx+nw+1} ${hy+40}L${hx+nw+6} ${top+6}Q${hx} ${top+12} ${hx-nw-6} ${top+6}z" fill="url(#${id}c)"/><path d="M${hx-nw-1} ${hy+40}Q${hx} ${hy+44} ${hx+nw+1} ${hy+40}" stroke="${clothD}" stroke-width="1" fill="none" opacity=".6"/>`;
  if(outfit==='shirt'||outfit==='blazer'){
    const inner=outfit==='blazer'?pick(['#F7F4F0',mixHex(T[0],'#ffffff',.5)]):clothL;
    s+=`<path d="M${hx-nw-5} ${top+3}L${hx} ${top+40}L${hx+nw+5} ${top+3}z" fill="${outfit==='blazer'?inner:clothL}"/>`;
    s+=`<path d="M${hx-nw-5} ${top+2}L${hx-3} ${top+16}L${hx-nw+1} ${top+22}zM${hx+nw+5} ${top+2}L${hx+3} ${top+16}L${hx+nw-1} ${top+22}z" fill="${mixHex(outfit==='blazer'?inner:clothL,'#ffffff',.5)}" stroke="${mixHex(cloth,'#000',.12)}" stroke-width=".6"/>`;
    if(outfit==='blazer')s+=`<path d="M${hx-nw-7} ${top+4}L${hx-4} ${top+62}L${hx-18} ${top+30}L${hx-nw-14} ${top+18}zM${hx+nw+7} ${top+4}L${hx+4} ${top+62}L${hx+18} ${top+30}L${hx+nw+14} ${top+18}z" fill="${clothD}" opacity=".55"/>`;
  }
  // head
  s+=`<g ${TR}>`;
  s+=`<ellipse cx="${hx}" cy="${hy}" rx="${hrx}" ry="${hry}" fill="url(#${id}f)"/>`;
  // ears
  s+=`<ellipse cx="${hx-hrx+1}" cy="${hy+4}" rx="3.5" ry="7" fill="${head}"/><ellipse cx="${hx+hrx-1}" cy="${hy+4}" rx="3.5" ry="7" fill="${figD}"/>`;
  // front hair
  if(F){
    if(hairStyle==='bob')s+=`<path d="M${hx-29} ${hy+30}C${hx-36} ${hy-14} ${hx-20} ${hy-40} ${hx+2} ${hy-38}C${hx+26} ${hy-38} ${hx+38} ${hy-14} ${hx+29} ${hy+30}C${hx+24} ${hy+12} ${hx+22} ${hy-6} ${hx+12} ${hy-16}C${hx-2} ${hy-6} ${hx-16} ${hy-8} ${hx-22} ${hy-4}C${hx-24} ${hy+8} ${hx-24} ${hy+18} ${hx-29} ${hy+30}z" fill="url(#${id}h)"/>`;
    else if(hairStyle==='updo')s+=`<path d="M${hx-25} ${hy+2}C${hx-28} ${hy-30} ${hx-8} ${hy-38} ${hx+4} ${hy-37}C${hx+24} ${hy-36} ${hx+30} ${hy-16} ${hx+25} ${hy+2}C${hx+18} ${hy-16} ${hx+6} ${hy-22} ${hx-6} ${hy-20}C${hx-14} ${hy-14} ${hx-20} ${hy-8} ${hx-25} ${hy+2}z" fill="url(#${id}h)"/>`;
    else s+=`<path d="M${hx-27} ${hy+14}C${hx-32} ${hy-26} ${hx-14} ${hy-40} ${hx+4} ${hy-38}C${hx+26} ${hy-36} ${hx+34} ${hy-14} ${hx+27} ${hy+14}C${hx+24} ${hy-4} ${hx+18} ${hy-14} ${hx+8} ${hy-20}C${hx-4} ${hy-10} ${hx-14} ${hy-10} ${hx-22} ${hy-6}C${hx-24} ${hy} ${hx-25} ${hy+6} ${hx-27} ${hy+14}z" fill="url(#${id}h)"/>`;
  }else{
    if(hairStyle==='crop')s+=`<path d="M${hx-25} ${hy-2}C${hx-28} ${hy-30} ${hx-12} ${hy-36} ${hx+2} ${hy-35}C${hx+20} ${hy-35} ${hx+30} ${hy-24} ${hx+25} ${hy-2}C${hx+22} ${hy-14} ${hx+14} ${hy-20} ${hx} ${hy-20}C${hx-12} ${hy-20} ${hx-20} ${hy-14} ${hx-25} ${hy-2}z" fill="url(#${id}h)"/>`;
    if(hairStyle==='side')s+=`<path d="M${hx-26} ${hy}C${hx-30} ${hy-32} ${hx-10} ${hy-38} ${hx+4} ${hy-37}C${hx+24} ${hy-36} ${hx+31} ${hy-22} ${hx+26} ${hy}C${hx+22} ${hy-12} ${hx+16} ${hy-18} ${hx+6} ${hy-22}C${hx-6} ${hy-16} ${hx-18} ${hy-14} ${hx-26} ${hy}z" fill="url(#${id}h)"/><path d="M${hx-8} ${hy-34}Q${hx-2} ${hy-26} ${hx-4} ${hy-21}" stroke="${mixHex(hair,'#fff',.2)}" stroke-width="1.2" fill="none"/>`;
    if(hairStyle==='textured')s+=`<path d="M${hx-26} ${hy-2}C${hx-30} ${hy-24} ${hx-22} ${hy-36} ${hx-10} ${hy-38}C${hx-4} ${hy-42} ${hx+8} ${hy-42} ${hx+14} ${hy-38}C${hx+28} ${hy-34} ${hx+30} ${hy-18} ${hx+26} ${hy-2}C${hx+22} ${hy-14} ${hx+12} ${hy-20} ${hx} ${hy-19}C${hx-12} ${hy-19} ${hx-21} ${hy-13} ${hx-26} ${hy-2}z" fill="url(#${id}h)"/>`;
    if(hairStyle==='swept')s+=`<path d="M${hx-26} ${hy}C${hx-30} ${hy-30} ${hx-14} ${hy-42} ${hx+6} ${hy-41}C${hx+26} ${hy-40} ${hx+32} ${hy-22} ${hx+26} ${hy}C${hx+22} ${hy-16} ${hx+12} ${hy-24} ${hx} ${hy-23}C${hx-12} ${hy-22} ${hx-20} ${hy-14} ${hx-26} ${hy}z" fill="url(#${id}h)"/>`;
    if(r()<.4)r(); /* (no beard shading: it read as a darker face) keeps the same picks as before */
  }
  s+=`</g></svg>`;
  PCACHE.set(key,s);return s;
}
