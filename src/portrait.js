/* Procedural illustrated portraits (prototype stand-ins for real photos) */
function rngP(seed){let a=seed>>>0;return function(){a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
function mixHex(a,b,t){const p=h=>[1,3,5].map(i=>parseInt(h.slice(i,i+2),16));const A=p(a),B=p(b);return '#'+A.map((v,i)=>Math.round(v+(B[i]-v)*t).toString(16).padStart(2,'0')).join('')}
const P_SKIN=['#F3CDAE','#EBBE9A','#E0AA82','#D2976E','#C2845C','#AD6F4B','#93593A'];
const P_HAIR=['#1C1312','#24170F','#2E1D16','#3B261C','#4A3022'];
const P_CLOTH=[['#9B2F52','#E9BE67'],['#137370','#EFCB73'],['#C98B2A','#8A2E44'],['#33459A','#E7BD5F'],['#1F7350','#F2CF80'],['#E2826B','#FFF0D2'],['#6A3170','#EBC370'],['#F1E4D2','#BD8A3B'],['#2A385C','#DDB868'],['#BF3A55','#F7DBA3'],['#D9577A','#FFE0A8'],['#7B4A2F','#F0D39A']];
const P_BG=[['#FFE1E6','#FFC3CF'],['#FFE7D8','#FFC6AE'],['#FBE1EE','#F0BCD7'],['#FFEFD9','#FFD3A3'],['#F3E6F7','#DFC5EE'],['#FFE4DC','#FBB9B2'],['#E9F1EC','#CBE4D6']];
const P_TURBAN=['#1F2E66','#8E2440','#D9822B','#0E5F5C','#5B2C6F'];
const PCACHE=new Map();
function portrait(seed,g,o){
  o=o||{};const key=seed+g+(o.turban?'t':'');if(PCACHE.has(key))return PCACHE.get(key);
  const r=rngP(seed*9301+49297);const pick=a=>a[Math.floor(r()*a.length)];
  const skin=pick(P_SKIN),hair=pick(P_HAIR),cl=pick(P_CLOTH),bg=pick(P_BG);
  const sh=mixHex(skin,'#5A2A1E',.18),sh2=mixHex(skin,'#5A2A1E',.32),id='g'+key.replace(/\W/g,'');
  const F=g==='F';const style=F?pick(['long','wavy','bun','braid','long']):pick(['short','quiff','curly','short']);
  const beard=!F&&(o.turban||r()<.45),glasses=r()<.18,saree=F&&r()<.55,neck=F&&r()<.5;
  const bx=[0,1,2].map(()=>[Math.round(r()*200),Math.round(r()*120),Math.round(14+r()*26)]);
  let s=`<svg viewBox="0 0 200 220" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><defs><linearGradient id="${id}b" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${bg[0]}"/><stop offset="1" stop-color="${bg[1]}"/></linearGradient><radialGradient id="${id}f" cx=".42" cy=".38" r=".7"><stop offset="0" stop-color="${mixHex(skin,'#ffffff',.14)}"/><stop offset="1" stop-color="${skin}"/></radialGradient><linearGradient id="${id}c" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${mixHex(cl[0],'#ffffff',.12)}"/><stop offset="1" stop-color="${mixHex(cl[0],'#000000',.12)}"/></linearGradient></defs>`;
  s+=`<rect width="200" height="220" fill="url(#${id}b)"/>`;
  bx.forEach(b=>{s+=`<circle cx="${b[0]}" cy="${b[1]}" r="${b[2]}" fill="#fff" opacity=".22"/>`});
  // back hair
  if(F){
    if(style==='long')s+=`<path d="M57 92C52 46 78 30 100 30c24 0 50 14 46 66 2 34 10 64 14 100H40c4-36 12-66 17-104z" fill="${hair}"/>`;
    if(style==='wavy')s+=`<path d="M57 92C52 46 78 30 100 30c24 0 50 14 46 66 4 30 12 46 6 62-6 12-18 8-24 14-20 6-36 6-56 0-6-6-18-2-24-14-6-16 2-32 9-58z" fill="${hair}"/>`;
    if(style==='bun')s+=`<circle cx="100" cy="34" r="19" fill="${hair}"/>`;
    if(style==='braid')s+=`<path d="M60 90C56 50 80 34 100 34s44 16 40 56c0 14-4 26-8 34H68c-4-8-8-20-8-34z" fill="${hair}"/>`;
  }
  // neck, torso, neckline
  s+=`<path d="M85 118v34c5 10 25 10 30 0v-34z" fill="${sh}"/>`;
  s+=`<path d="M16 220c2-42 34-64 84-66 50 2 82 24 84 66z" fill="url(#${id}c)"/>`;
  if(F){s+=`<path d="M79 156c8 18 34 18 42 0-12 5-30 5-42 0z" fill="${sh}"/>`;
    if(saree)s+=`<path d="M38 220c18-34 50-54 94-64l14 8c-36 12-64 30-78 56z" fill="${cl[1]}" opacity=".95"/><path d="M44 220c18-32 48-50 90-60" stroke="${mixHex(cl[1],'#000',.2)}" stroke-width="1.5" fill="none" opacity=".5"/>`;
    if(neck)s+=`<path d="M84 160q16 14 32 0" stroke="${cl[1]==='#FFF0D2'?'#D9A74A':'#E9BE67'}" stroke-width="2.4" fill="none"/><circle cx="100" cy="168" r="3" fill="#E9BE67"/>`;
  }else{
    s+=`<path d="M87 155l13 22 13-22z" fill="${sh}"/><path d="M100 177v40" stroke="${cl[1]}" stroke-width="2" opacity=".8"/><circle cx="100" cy="188" r="1.8" fill="${cl[1]}"/><circle cx="100" cy="200" r="1.8" fill="${cl[1]}"/><path d="M84 152l10 12M116 152l-10 12" stroke="${mixHex(cl[0],'#000',.25)}" stroke-width="2.4" stroke-linecap="round"/>`;
  }
  // ears + face
  s+=`<ellipse cx="65" cy="96" rx="6.5" ry="9.5" fill="${sh}"/><ellipse cx="135" cy="96" rx="6.5" ry="9.5" fill="${sh}"/>`;
  s+=`<path d="M65 86c0-30 17-43 35-43s35 13 35 43c0 31-16 51-35 51S65 117 65 86z" fill="url(#${id}f)"/>`;
  s+=`<circle cx="81" cy="108" r="7" fill="#FF6F86" opacity=".16"/><circle cx="119" cy="108" r="7" fill="#FF6F86" opacity=".16"/>`;
  // eyes, brows, nose, mouth
  s+=`<ellipse cx="86" cy="96" rx="3.3" ry="3.9" fill="#24150F"/><ellipse cx="114" cy="96" rx="3.3" ry="3.9" fill="#24150F"/><circle cx="87.2" cy="94.6" r="1.1" fill="#fff"/><circle cx="115.2" cy="94.6" r="1.1" fill="#fff"/>`;
  if(F)s+=`<path d="M81.5 92.5l-2.5-1.5M118.5 92.5l2.5-1.5" stroke="#24150F" stroke-width="1.4" stroke-linecap="round"/>`;
  s+=`<path d="M78 86q8-${F?5:4} 15-1M107 85q7-${F?4:3} 15 1" stroke="${hair}" stroke-width="${F?2.3:3}" fill="none" stroke-linecap="round"/>`;
  s+=`<path d="M100 99q-4 10 1 13" stroke="${sh2}" stroke-width="2" fill="none" stroke-linecap="round"/>`;
  if(F)s+=`<path d="M90 119q10 9 20 0q-10 3-20 0z" fill="#C44A62"/>`;
  else s+=`<path d="M90 119q10 8 20 0" stroke="#9E4250" stroke-width="2.6" fill="none" stroke-linecap="round"/>`;
  if(F&&r()<.45)s+=`<circle cx="100" cy="80" r="1.8" fill="#C8324F"/>`;
  // beard
  if(beard)s+=`<path d="M66 98c0 26 16 42 34 42s34-16 34-42c-4 18-16 28-34 28s-30-10-34-28z" fill="${hair}" opacity=".92"/><path d="M88 116q12-6 24 0q-12 3-24 0z" fill="${hair}"/>`;
  // front hair / turban
  if(o.turban){const tc=pick(P_TURBAN);s+=`<path d="M60 88C53 46 78 24 102 24c26 0 50 20 39 64-8-20-24-30-41-30s-33 10-40 30z" fill="${tc}"/><path d="M66 70c18-22 52-28 72-10M70 56c16-14 40-18 60-6" stroke="${mixHex(tc,'#000',.3)}" stroke-width="2" fill="none" opacity=".55"/><path d="M100 26v30" stroke="${mixHex(tc,'#fff',.2)}" stroke-width="2" opacity=".4"/>`}
  else if(F){
    if(style==='bun')s+=`<path d="M65 84c0-30 18-42 35-42s35 12 35 42c-8-18-20-26-35-26s-27 8-35 26z" fill="${hair}"/><path d="M100 43v14" stroke="${mixHex(hair,'#fff',.15)}" stroke-width="1.5"/>`;
    else s+=`<path d="M62 92C58 54 80 38 102 38c24 0 42 16 38 56-6-20-18-34-36-38-6 14-24 24-42 36z" fill="${hair}"/>`;
    if(style==='braid')s+=`<g fill="${hair}"><ellipse cx="134" cy="138" rx="8" ry="10"/><ellipse cx="137" cy="155" rx="7.5" ry="9.5"/><ellipse cx="139" cy="171" rx="7" ry="9"/><ellipse cx="140" cy="186" rx="6" ry="8"/></g><circle cx="140" cy="196" r="3.5" fill="#E9BE67"/>`;
  }else{
    if(style==='short')s+=`<path d="M63 86C59 52 82 38 102 38c23 0 41 14 35 48-3-12-11-22-25-24-12 6-32 6-42 10-4 4-6 8-7 14z" fill="${hair}"/>`;
    if(style==='quiff')s+=`<path d="M64 84C59 48 80 30 106 31c24 1 38 22 30 53-4-15-16-24-30-24-14 0-32 6-42 24z" fill="${hair}"/><path d="M84 40c10-10 30-12 42-2" stroke="${mixHex(hair,'#fff',.18)}" stroke-width="2" fill="none"/>`;
    if(style==='curly'){s+=`<g fill="${hair}">`;[[70,70,11],[80,56,12],[96,49,13],[112,51,12],[126,60,12],[133,74,10],[66,84,8],[136,86,8]].forEach(c=>{s+=`<circle cx="${c[0]}" cy="${c[1]}" r="${c[2]}"/>`});s+=`</g>`}
  }
  if(glasses)s+=`<g fill="#fff" fill-opacity=".1" stroke="#3B2622" stroke-width="2"><rect x="75" y="88" width="21" height="15" rx="6"/><rect x="104" y="88" width="21" height="15" rx="6"/></g><path d="M96 94h8" stroke="#3B2622" stroke-width="2"/>`;
  if(F)s+=`<circle cx="65" cy="109" r="3.2" fill="#E9BE67"/><circle cx="135" cy="109" r="3.2" fill="#E9BE67"/><circle cx="65" cy="115" r="2" fill="#E9BE67"/><circle cx="135" cy="115" r="2" fill="#E9BE67"/>`;
  s+=`</svg>`;
  PCACHE.set(key,s);return s;
}
