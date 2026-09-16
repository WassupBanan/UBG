const KNOCKDOWNS = [
 ['Default','Default','Baseline animation','Always available'],
 ['Liberation','Daily Shop','One Piece-themed knockdown animation','Daily shop'],
 ['Ritual','Daily Shop','Jujutsu Kaisen-themed knockdown animation featuring Mahoraga','Daily shop'],
 ['Shatter','Daily Shop','Physics-style gag knockdown with a dramatic final KO','Daily shop'],
 ['8-Bit','Daily Shop','Retro game-style knockdown with pixel effects','Daily shop'],
 ['Cartoony','Daily Shop','Cartoon-style fall with exaggerated KO effects','Daily shop'],
 ['Crafted','Daily Shop','Ashita no Joe-themed knockdown sequence','Daily shop'],
 ['Yamcha','Daily Shop','Dragon Ball-themed crater and final KO sequence','Daily shop'],
 ['Yakuza','Daily Shop','Yakuza-themed cinematic knockdown sequence','Daily shop'],
 ['Barbarian','Daily Shop','Rage-themed knockdown with an aura-focused finish','Daily shop'],
 ['Undertale','Daily Shop','Undertale-themed pixel-heart knockdown effects','Daily shop'],
 ['Super','Daily Shop','Dragon Ball-style transformation knockdown sequence','Daily shop'],
 ['Classic','Daily Shop','Community-listed historical animation entry; details WIP','Daily shop'],
 ['Knockout','Daily Shop','Community-listed historical animation entry; details WIP','Daily shop'],
 ['Pure White Ash','Limited','White Ash / Ashita no Joe themed animation entry','Limited / special'],
 ['Medal Camera','Limited','Medal collaboration-themed cosmetic animation entry','Limited / event'],
 ['Event Knockdown','Limited','Historical limited-event animation entry; details WIP','Limited / event']
];
function kdEsc(s){return String(s).replace(/[&<>\"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',"'":'&#39;'}[c]));}
function renderKnockdowns(){
 const grid=document.getElementById('knockdownGrid'); if(!grid)return;
 const q=(document.getElementById('knockdownSearch')?.value||'').trim().toLowerCase();
 const filter=document.querySelector('.kd-filter.active')?.dataset.filter||'All';
 const list=KNOCKDOWNS.filter(k=>(filter==='All'||k[3]===filter)&&(!q||k[0].toLowerCase().includes(q)||k[2].toLowerCase().includes(q)));
 grid.innerHTML=list.map(([name,type,desc,availability])=>`<article class="knockdown-card" data-type="${kdEsc(type)}"><div class="knockdown-preview"><div><b>GIF</b><span>Preview coming soon</span></div></div><div class="knockdown-body"><div class="knockdown-card-top"><h3>${kdEsc(name)}</h3><span>${kdEsc(type)}</span></div><p>${kdEsc(desc)}</p><div class="knockdown-meta"><span>AVAILABILITY</span><strong>${kdEsc(availability)}</strong></div></div></article>`).join('');
 document.getElementById('knockdownCount').textContent=`${list.length} shown / ${KNOCKDOWNS.length} listed`;
 document.getElementById('knockdownEmpty').hidden=list.length!==0;
}
document.addEventListener('DOMContentLoaded',()=>{document.querySelectorAll('.kd-filter').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.kd-filter').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderKnockdowns()}));document.getElementById('knockdownSearch')?.addEventListener('input',renderKnockdowns);renderKnockdowns();});
