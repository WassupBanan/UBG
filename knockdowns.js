const KNOCKDOWNS = [
  {name:'Default', category:'Default', price:'Free', unlock:'Unlocked by default', animations:['Knockdown','Defeat'], gifs:['assets/knockdowns/Default_1.gif','assets/knockdowns/Default_2.gif'], reference:'Hajime no Ippo PS3 knockdown animations', note:'The source wiki notes that Default Knockdown variant 2 still needs to be documented.'},
  {name:'Cartoony', category:'Daily Shop', price:'$19,999', unlock:'Shop', animations:['Knockdown','Defeat'], gifs:['assets/knockdowns/Cartoony_1.gif','assets/knockdowns/Cartoony_2.gif'], reference:'Dizzy stars / circling birdies trope'},
  {name:'Fling', category:'Daily Shop', price:'$19,999', unlock:'Shop', animations:['Knockdown','Defeat'], gifs:['assets/knockdowns/Fling_1.gif','assets/knockdowns/Fling_2.gif'], reference:'N/A'},
  {name:'Knee Pain', category:'Daily Shop', price:'$22,222', unlock:'Shop', animations:['Knockdown','Defeat'], gifs:['assets/knockdowns/Knee_Pain_1.gif','assets/knockdowns/Knee_Pain_2.gif'], reference:'Family Guy — Peter hurts his knee; Family Guy death pose'},
  {name:'8-Bit', category:'Daily Shop', price:'$32,100', unlock:'Shop', animations:['Knockdown','Defeat'], gifs:['assets/knockdowns/8bit_1.gif','assets/knockdowns/8bit_2.gif'], reference:'Super Mario / ? ', note:'Exact reference is still unresolved on the source wiki.'},
  {name:'Under-Tale', category:'Daily Shop', price:'$49,999', unlock:'Shop', animations:['Knockdown','Defeat'], gifs:['assets/knockdowns/Under-Tale_1.gif','assets/knockdowns/Under-Tale_2.gif'], reference:'Undertale — Game Over / “But it refused.”'},
  {name:'Yakuza', category:'Daily Shop', price:'$49,999', unlock:'Shop', animations:['Knockdown','Defeat'], gifs:['assets/knockdowns/Yakuza_1.gif','assets/knockdowns/Yakuza_2.gif'], reference:'Yakuza: Like A Dragon — Game Over screen'},
  {name:'Shatter', category:'Daily Shop', price:'$54,321', unlock:'Shop', animations:['Knockdown','Defeat'], gifs:['assets/knockdowns/Shatter_1.gif','assets/knockdowns/Shatter_2.gif'], reference:'LEGO game deaths / Berserk skeletons meme'},
  {name:'Crafted', category:'Daily Shop', price:'$54,999', unlock:'Shop', animations:['Knockdown','Defeat'], gifs:['assets/knockdowns/Crafted_1.gif','assets/knockdowns/Crafted_2.gif'], reference:'Minecraft'},
  {name:'Yamcha', category:'Daily Shop', price:'$69,999', unlock:'Shop', animations:['Knockdown','Defeat'], gifs:['assets/knockdowns/Yamcha_1.gif','assets/knockdowns/Yamcha_2.gif'], reference:'Dragon Ball — Yamcha’s death'},
  {name:'Cyborg', category:'Daily Shop', price:'$79,999', unlock:'Shop', animations:['Knockdown','Defeat'], gifs:['assets/knockdowns/Cyborg_1.gif','assets/knockdowns/Cyborg_2.gif'], reference:'One Punch Man — Genos standing up'},
  {name:'Pure White Ash', category:'Daily Shop', price:'$84,999', unlock:'Shop', animations:['Knockdown','Defeat'], gifs:['assets/knockdowns/PWA_1.gif','assets/knockdowns/PWA_2.gif'], reference:'Ashita no Joe — “I burned my fire”'},
  {name:'Barbarian', category:'Daily Shop', price:'$89,999', unlock:'Shop', animations:['Knockdown','Defeat'], gifs:['assets/knockdowns/Barbarian_1.gif','assets/knockdowns/Barbarian_2.gif'], reference:'N/A'},
  {name:'Liberation', category:'Daily Shop', price:'$89,999', unlock:'Shop', animations:['Knockdown','Defeat'], gifs:['assets/knockdowns/Liberation_1.gif','assets/knockdowns/Liberation_2.gif'], reference:'One Piece — Gear 5 transformation / Drums of Liberation'},
  {name:'Super', category:'Daily Shop', price:'$94,999', unlock:'Shop', animations:['Knockdown 1','Knockdown 2','Defeat'], gifs:['assets/knockdowns/Super_1.gif','assets/knockdowns/Super_2.gif','assets/knockdowns/Super_3.gif'], reference:'Dragon Ball — Super Saiyan transformations / teleports'},
  {name:'Ritual', category:'Daily Shop', price:'$99,999', unlock:'Shop', animations:['Knockdown 1','Knockdown 2','Defeat'], gifs:['assets/knockdowns/Ritual_1-1.gif','assets/knockdowns/Ritual_1-2.gif','assets/knockdowns/Ritual_2.gif'], reference:'Jujutsu Kaisen — Mahoraga summoning, adaptation and death'},
  {name:'Champion', category:'Limited', price:'Event reward', unlock:'Defeating Bringus during the August 2024 “The Games” event', animations:['Knockdown','Defeat'], gifs:['assets/knockdowns/Champion_1.gif','assets/knockdowns/Champion_2.gif'], reference:'Visually identical to Barbarian, except it is blue.', note:'Previous event reward; currently unobtainable.'}
];

function kdEsc(s){return String(s).replace(/[&<>\"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',"'":'&#39;'}[c]));}
function renderKnockdownMedia(k){
  return `<div class="knockdown-preview">${k.gifs.map((src,i)=>`<div class="knockdown-gif"><span>${kdEsc(k.animations[i]||`Animation ${i+1}`)}</span><img src="${kdEsc(src)}" alt="${kdEsc(k.name)} — ${kdEsc(k.animations[i]||`Animation ${i+1}`)}" loading="lazy" onerror="this.closest('.knockdown-gif').classList.add('media-missing')"></div>`).join('')}</div>`;
}
function renderKnockdowns(){
  const grid=document.getElementById('knockdownGrid'); if(!grid)return;
  const q=(document.getElementById('knockdownSearch')?.value||'').trim().toLowerCase();
  const filter=document.querySelector('.kd-filter.active')?.dataset.filter||'All';
  const list=KNOCKDOWNS.filter(k=>(filter==='All'||k.category===filter)&&(!q||k.name.toLowerCase().includes(q)||k.reference.toLowerCase().includes(q)||k.animations.join(' ').toLowerCase().includes(q)));
  grid.innerHTML=list.map(k=>`<article class="knockdown-card" data-type="${kdEsc(k.category)}">
    ${renderKnockdownMedia(k)}
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
