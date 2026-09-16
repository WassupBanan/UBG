const KNOCKDOWNS = [
  {name:'Default', category:'Default', price:'Free', unlock:'Unlocked by default', animations:['Knockdown','Defeat'], reference:'Hajime no Ippo PS3 knockdown animations', note:'The source wiki notes that Default Knockdown variant 2 still needs to be documented.'},
  {name:'Cartoony', category:'Daily Shop', price:'$19,999', unlock:'Shop', animations:['Knockdown','Defeat'], reference:'Dizzy stars / circling birdies trope'},
  {name:'Fling', category:'Daily Shop', price:'$19,999', unlock:'Shop', animations:['Knockdown','Defeat'], reference:'N/A'},
  {name:'Knee Pain', category:'Daily Shop', price:'$22,222', unlock:'Shop', animations:['Knockdown','Defeat'], reference:'Family Guy — Peter hurts his knee; Family Guy death pose'},
  {name:'8-Bit', category:'Daily Shop', price:'$32,100', unlock:'Shop', animations:['Knockdown','Defeat'], reference:'Super Mario / ? ', note:'Exact reference is still unresolved on the source wiki.'},
  {name:'Under-Tale', category:'Daily Shop', price:'$49,999', unlock:'Shop', animations:['Knockdown','Defeat'], reference:'Undertale — Game Over / “But it refused.”'},
  {name:'Yakuza', category:'Daily Shop', price:'$49,999', unlock:'Shop', animations:['Knockdown','Defeat'], reference:'Yakuza: Like A Dragon — Game Over screen'},
  {name:'Shatter', category:'Daily Shop', price:'$54,321', unlock:'Shop', animations:['Knockdown','Defeat'], reference:'LEGO game deaths / Berserk skeletons meme'},
  {name:'Crafted', category:'Daily Shop', price:'$54,999', unlock:'Shop', animations:['Knockdown','Defeat'], reference:'Minecraft'},
  {name:'Yamcha', category:'Daily Shop', price:'$69,999', unlock:'Shop', animations:['Knockdown','Defeat'], reference:'Dragon Ball — Yamcha’s death'},
  {name:'Cyborg', category:'Daily Shop', price:'$79,999', unlock:'Shop', animations:['Knockdown','Defeat'], reference:'One Punch Man — Genos standing up'},
  {name:'Pure White Ash', category:'Daily Shop', price:'$84,999', unlock:'Shop', animations:['Knockdown','Defeat'], reference:'Ashita no Joe — “I burned my fire”'},
  {name:'Barbarian', category:'Daily Shop', price:'$89,999', unlock:'Shop', animations:['Knockdown','Defeat'], reference:'N/A'},
  {name:'Liberation', category:'Daily Shop', price:'$89,999', unlock:'Shop', animations:['Knockdown','Defeat'], reference:'One Piece — Gear 5 transformation / Drums of Liberation'},
  {name:'Super', category:'Daily Shop', price:'$94,999', unlock:'Shop', animations:['Knockdown 1','Knockdown 2','Defeat'], reference:'Dragon Ball — Super Saiyan transformations / teleports'},
  {name:'Ritual', category:'Daily Shop', price:'$99,999', unlock:'Shop', animations:['Knockdown 1','Knockdown 2','Defeat'], reference:'Jujutsu Kaisen — Mahoraga summoning, adaptation and death'},
  {name:'Champion', category:'Limited', price:'Event reward', unlock:'Defeating Bringus during the August 2024 “The Games” event', animations:['Knockdown','Defeat'], reference:'Visually identical to Barbarian, except it is blue.', note:'Previous event reward; currently unobtainable.'}
];

function kdEsc(s){return String(s).replace(/[&<>\"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',"'":'&#39;'}[c]));}
function renderKnockdowns(){
  const grid=document.getElementById('knockdownGrid'); if(!grid)return;
  const q=(document.getElementById('knockdownSearch')?.value||'').trim().toLowerCase();
  const filter=document.querySelector('.kd-filter.active')?.dataset.filter||'All';
  const list=KNOCKDOWNS.filter(k=>(filter==='All'||k.category===filter)&&(!q||k.name.toLowerCase().includes(q)||k.reference.toLowerCase().includes(q)||k.animations.join(' ').toLowerCase().includes(q)));
  grid.innerHTML=list.map(k=>`<article class="knockdown-card" data-type="${kdEsc(k.category)}">
    <div class="knockdown-preview"><div><b>GIF</b><span>Preview coming soon</span></div></div>
    <div class="knockdown-body">
      <div class="knockdown-card-top"><h3>${kdEsc(k.name)}</h3><span>${kdEsc(k.category)}</span></div>
      <div class="knockdown-animations"><span>ANIMATIONS</span><strong>${k.animations.map(kdEsc).join(' · ')}</strong></div>
      <div class="knockdown-meta"><span>PRICE</span><strong>${kdEsc(k.price)}</strong></div>
      <div class="knockdown-meta"><span>REFERENCE</span><strong>${kdEsc(k.reference)}</strong></div>
      ${k.note?`<div class="knockdown-note">${kdEsc(k.note)}</div>`:''}
    </div>
  </article>`).join('');
  document.getElementById('knockdownCount').textContent=`${list.length} shown / ${KNOCKDOWNS.length} total`;
  document.getElementById('knockdownEmpty').hidden=list.length!==0;
}
document.addEventListener('DOMContentLoaded',()=>{document.querySelectorAll('.kd-filter').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.kd-filter').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderKnockdowns()}));document.getElementById('knockdownSearch')?.addEventListener('input',renderKnockdowns);renderKnockdowns();});
