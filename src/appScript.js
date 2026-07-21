export const APP_SCRIPT = `/* =========================================================================
   GSD CODE LIBRARY
   ========================================================================= */
const CODE_LIBRARY = {
  MG2T:{desc:"MATCH & GET 2 PARTS TOGETHER", tmu:{0:76,5:53.4,15:62.9,30:71.3,45:81.9,80:92.6}},
  MG2S:{desc:"MATCH & GET 2 PARTS SEPARATELY", tmu:{0:107,5:63.4,15:81.4,30:98.2,45:117.6,80:137.7}},
  FOOT:{desc:"(MATCH) PARTS TO FOOT", tmu:{0:38,5:32.5,15:37.1,30:41.7,45:47.6,80:53.6}},
  MAPE:{desc:"MATCH & ADD PART EASY", tmu:{0:50,5:37.1,15:45.2,30:53.6,45:63.1,80:72.8}},
  MAP1:{desc:"MATCH & ADD PART WITH 1 HAND", tmu:{0:56,5:44.4,15:54.3,30:62.2,45:72.2,80:82.6}},
  MAP2:{desc:"MATCH & ADD PART WITH 2 HAND", tmu:{0:69,5:58.7,15:68.8,30:74.8,45:85.0,80:96.7}},
  AM2P:{desc:"ALIGN OR ADJUST (MATCH) 2 PARTS", tmu:{0:61,5:56.1,15:59.9,30:63.0,45:66.5,80:73.0}},
  AJPT:{desc:"ALIGN OR ADJUST (MATCH) ONE PART", tmu:{0:43,5:36.5,15:41.6,30:45.1,45:49.8,80:54.8}},
  ARPN:{desc:"ALIGN AND REPOSITION PARTS UNDER FOOT", tmu:{0:75,5:70.2,15:74.0,30:77.1,45:80.6,80:87.1}},
  APSH:{desc:"ALIGN/ASIDE — PUSH AWAY (SLIDING)", tmu:{0:24,5:17.0,15:20.6,30:25.2,45:29.3,80:33.8}},
  FFLD:{desc:"FROM FOLD", tmu:{0:43,5:37.9,15:41.7,30:44.8,45:48.3,80:54.8}},
  FCRS:{desc:"FROM CREASE", tmu:{0:28,5:21.0,15:24.6,30:29.2,45:33.3,80:37.8}},
  FUNF:{desc:"FROM UNFOLD OR LAY OUT", tmu:{0:23,5:18.0,15:21.8,30:24.9,45:28.4,80:34.9}},
  TCUT:{desc:"TRIM CUT WITH SCISSORS", tmu:{0:50,5:37.7,15:47.4,30:55.6,45:65.6,80:75.9}},
  TCAT:{desc:"TRIM CUT WITH SCISSORS — ADDITIONAL", tmu:{0:25,5:19.1,15:23.9,30:28.3,45:33.6,80:39.0}},
  TBLD:{desc:"TRIM CUT THREAD WITH FIXED BLADE", tmu:{0:33,5:27.9,15:31.7,30:34.8,45:38.3,80:44.8}},
  TDCH:{desc:"TRIM / DE-CHAIN PARTS WITH SCISSORS", tmu:{0:49}},
  AS1H:{desc:"ASIDE PART WITH 1 HAND", tmu:{0:23,5:17.2,15:21.2,30:26.2,45:32.0,80:38.0}},
  AS2H:{desc:"ASIDE PART WITH 2 HAND", tmu:{0:42,5:31.2,15:35.6,30:40.2,45:46.0,80:52.0}},
  MS1A:{desc:"MACHINE SEW 1 CM — APPROXIMATELY", tmu:{0:17}},
  MS1B:{desc:"MACHINE SEW 1 CM — ACCURATE (WITHIN 1 CM)", tmu:{0:26}},
  MS1C:{desc:"MACHINE SEW 1 CM — PRECISE (WITHIN 1/2 CM)", tmu:{0:37}},
  MHDW:{desc:"MACHINE HAND WHEEL TO RAISE/LOWER NEEDLE", tmu:{0:46}},
  MBTB:{desc:"MACHINE BACK TACK AT BEGINNING (LEVER)", tmu:{0:34}},
  MBTE:{desc:"MACHINE BACK TACK AT END (LEVER)", tmu:{0:37}},
  MABT:{desc:"MACHINE BACK TACK (AUTOMATIC)", tmu:{0:10}},
  MBBT:{desc:"MACHINE BACK TACK (BUTTON)", tmu:{0:24}},
  MFBT:{desc:"MACHINE BACK TACK (FOOT)", tmu:{0:18}},
  GP1E:{desc:"GET PART WITH 1 HAND (EASY)", tmu:{0:14,5:6.8,15:10.1,30:14.1,45:18.3,80:22.6}},
  GP1H:{desc:"GET PART WITH 1 HAND", tmu:{0:20,5:14.1,15:19.2,30:22.7,45:27.4,80:32.4}},
  GP2H:{desc:"GET PART WITH 2 HAND", tmu:{0:33,5:27.1,15:32.2,30:35.7,45:40.4,80:45.4}},
  GPCO:{desc:"GET PART CONTACT ONLY", tmu:{0:9,5:2.8,15:6.1,30:9.5,45:13.5,80:17.3}},
  GPOH:{desc:"GET PART OTHER HAND ONLY", tmu:{0:6}},
  GPAG:{desc:"GET PART BY ADJUSTING GRASP", tmu:{0:10,5:8.0,15:11.0,30:14.2,45:18.0,80:22.1}},
  PPAL:{desc:"PUT PART TO APPROXIMATE LOCATION", tmu:{0:10,5:3.0,15:6.6,30:11.2,45:15.3,80:19.8}},
  PPOH:{desc:"PUT PART TO OTHER HAND", tmu:{0:6,5:2.5,15:5.5,30:10.0,45:15.5,80:22.2}},
  PPST:{desc:"PUT PARTS TO STACK", tmu:{0:14,5:3.2,15:7.6,30:12.2,45:18.0,80:24.0}},
  PPL1:{desc:"PUT PART, LOCATE ONCE (1)", tmu:{0:27,5:21.1,15:25.7,30:30.3,45:36.3,80:41.4}},
  PPL2:{desc:"PUT PART, LOCATE TWICE (2)", tmu:{0:47,5:40.2,15:45.8,30:50.4,45:55.4,80:61.5}},
  F:{desc:"FOOT OR SHORT LEG MOTION", tmu:{0:9}},
  P:{desc:"PACE OR STEP TO MOVE BODY", tmu:{0:18}},
  B:{desc:"BEND AND ARISE", tmu:{0:61}},
  BD:{desc:"BEND DOWN", tmu:{0:29}},
  AB:{desc:"ARISE FROM BEND", tmu:{0:32}},
  SIT:{desc:"SIT DOWN IN CHAIR", tmu:{0:35}},
  STD:{desc:"STAND FROM CHAIR", tmu:{0:44}},
  E:{desc:"EYE ACTION (SIMPLE BINARY CHECK)", tmu:{0:7}},
  C:{desc:"CRANK", tmu:{0:15}},
  R:{desc:"RE-GRASP", tmu:{0:6}},
  A:{desc:"APPLY PRESSURE", tmu:{0:14}},
};
const TENSION = {N:{label:"Nil",factor:1},L:{label:"Low",factor:1.1},M:{label:"Medium",factor:1.2},H:{label:"High",factor:1.4}};
const STOP    = {A:{label:"> 1 cm",add:0},B:{label:"≈ within 1 cm",add:9},C:{label:"within ½ cm",add:20}};

/* ---- BARTACK / BUTTON HOLE / BUTTON SEW — computed live from the machine's stitch-count formula:
   TMU = stitches × (2000 / this Operation's Machine RPM) + base constant
   BARTACK (BT): base 9 · BUTTON HOLE (BH): base 9 · BUTTON SEW (BS): base 17
   RPM is NOT fixed — it is read from the Operation/Macro's own Machine Parameters (op.rpm / mc.rpm),
   so changing the RPM there recalculates every S..BT / S..BH / S..BS code automatically.
   Codes: S1BT..S200BT, S1BH..S200BH, S1BS..S200BS (matches the reference spreadsheet's formula exactly) ---- */
const STITCH_MACHINES = {
  BT:{label:'SEW BARTACK', base:9},
  BH:{label:'SEW BUTTON HOLE', base:9},
  BS:{label:'SEW BUTTON', base:17},
};
const STITCH_CODE_MATCH = /^S(\\d+)(BT|BH|BS)$/;
function parseStitchCode(code){
  const m = code && code.match(STITCH_CODE_MATCH);
  if(!m) return null;
  return {n:Number(m[1]), suffix:m[2], meta:STITCH_MACHINES[m[2]]};
}
const MC_TYPES   = ["B/A","B/H","B/T","CHECK","D/N CH","D/N LS","F/LATR","F/LCB","F/LFB","F/LFO","F/LTR","FLUT","FOA","L/H","M/N","O/L","O/L CB","PICOT","S/N","S/N SC","SNP","TRIM","Z/Z"];
const SEAM_TYPES = ["1th","2th","3th","4th","5th","6th"];
const SKILLS     = ["A","B","C","D"];

const $ = id => document.getElementById(id);
const uid = p => p + Date.now().toString(36) + Math.floor(Math.random()*10000);
function escapeHtml(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function debounceClick(fn){
  let busy=false;
  return async (...args)=>{
    if(busy) return;
    busy=true;
    try{ await fn(...args); }
    finally{ setTimeout(()=>{ busy=false; }, 400); }
  };
}
function showToast(msg){const t=$('toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1700);}
function timeAgo(ts){
  if(!ts) return '';
  const s = Math.floor((Date.now()-ts)/1000);
  if(s<60) return 'just now';
  if(s<3600) return Math.floor(s/60)+'m ago';
  if(s<86400) return Math.floor(s/3600)+'h ago';
  return Math.floor(s/86400)+'d ago';
}

/* =========================================================================
   IN-MEMORY LIBRARIES
   ========================================================================= */
let OPS=[], MACROS=[], FEATURES=[], STYLES=[], RECENT=[];
const KP = {op:'gsd2:op:', macro:'gsd2:macro:', feature:'gsd2:feature:', style:'gsd2:style:'};

/* ---- Folders (Operations / Macros / Features / Styles can each be organised into folders) ---- */
let FOLDERS = {op:[], macro:[], feature:[], style:[]};
const KPF = {op:'gsd2:folder:op:', macro:'gsd2:folder:macro:', feature:'gsd2:folder:feature:', style:'gsd2:folder:style:'};
let selectedFolder = {op:null, macro:null, feature:null, style:null};
let treeCollapsed = {op:{}, macro:{}, feature:{}, style:{}};
let libSearch = {op:'', macro:'', feature:'', style:''};

async function loadAll(){
  for(const [type,prefix] of Object.entries(KP)){
    const res = await safeList(prefix);
    const arr = [];
    for(const key of res){
      const r = await safeGet(key);
      if(r) { try{ arr.push(JSON.parse(r)); }catch(e){} }
    }
    if(type==='op') OPS=arr; if(type==='macro') MACROS=arr; if(type==='feature') FEATURES=arr; if(type==='style') STYLES=arr;
  }
  for(const [type,prefix] of Object.entries(KPF)){
    const res = await safeList(prefix);
    const arr = [];
    for(const key of res){
      const r = await safeGet(key);
      if(r){ try{ arr.push(JSON.parse(r)); }catch(e){} }
    }
    FOLDERS[type] = arr;
  }
  const r = await safeGet('gsd2:recent');
  RECENT = r ? JSON.parse(r) : [];
}
function folderKey(type,id){ return KPF[type]+id; }
async function saveFolder(type,folder){ folder.updatedAt=Date.now(); await safeSet(folderKey(type,folder.id), JSON.stringify(folder)); }
async function deleteFolderCascade(type,id){
  const toDelete = new Set([id]);
  let grew = true;
  while(grew){
    grew = false;
    for(const f of FOLDERS[type]){
      if(toDelete.has(f.parentId) && !toDelete.has(f.id)){ toDelete.add(f.id); grew = true; }
    }
  }
  for(const fid of toDelete) await safeDelete(folderKey(type,fid));
  FOLDERS[type] = FOLDERS[type].filter(f=>!toDelete.has(f.id));
  const itemsArr = type==='op'?OPS:(type==='macro'?MACROS:(type==='feature'?FEATURES:STYLES));
  for(const item of itemsArr){
    if(toDelete.has(item.folderId)){ item.folderId=null; await persist(type,item); }
  }
  if(toDelete.has(selectedFolder[type])) selectedFolder[type]=null;
}
async function safeList(prefix){ try{ const res = await window.storage.list(prefix,false); return res&&res.keys?res.keys:[]; }catch(e){ return []; } }
async function safeGet(key){ try{ const res = await window.storage.get(key,false); return res?res.value:null; }catch(e){ return null; } }
async function safeSet(key,val){ try{ await window.storage.set(key,val,false); }catch(e){ console.error(e); } }
async function safeDelete(key){ try{ await window.storage.delete(key,false); }catch(e){} }

function keyFor(type,id){ return KP[type]+id; }

async function persist(type,item){
  item.updatedAt = Date.now();
  await safeSet(keyFor(type,item.id), JSON.stringify(item));
  touchRecent(type,item);
}
async function removeItem(type,id){
  await safeDelete(keyFor(type,id));
  if(type==='op') OPS = OPS.filter(o=>o.id!==id);
  if(type==='macro') MACROS = MACROS.filter(o=>o.id!==id);
  if(type==='feature') FEATURES = FEATURES.filter(o=>o.id!==id);
  if(type==='style') STYLES = STYLES.filter(o=>o.id!==id);
  RECENT = RECENT.filter(r=>!(r.type===type && r.id===id));
  await safeSet('gsd2:recent', JSON.stringify(RECENT));
}
function touchRecent(type,item){
  const entry = {type,id:item.id,name:displayName(type,item),smv:smvFor(type,item),ts:Date.now()};
  RECENT = [entry, ...RECENT.filter(r=>!(r.type===type && r.id===item.id))].slice(0,8);
  safeSet('gsd2:recent', JSON.stringify(RECENT));
}
function displayName(type,item){
  if(type==='op') return (item.code||'OP')+' — '+(item.description||item.component||'Untitled');
  if(type==='macro') return (item.code||'MC')+' — '+(item.name||'Untitled');
  if(type==='feature') return (item.code||'FT')+' — '+(item.name||'Untitled');
  if(type==='style') return (item.header.styleNo||'ST')+(item.header.desc?' — '+item.header.desc:'');
}
function smvFor(type,item){
  if(type==='op') return computeOp(item).smv;
  if(type==='macro') return macroSmv(item);
  if(type==='feature') return featureSmv(item);
  if(type==='style') return styleSmv(item);
  return 0;
}
function findOp(id){ return OPS.find(o=>o.id===id); }
function findMacro(id){ return MACROS.find(o=>o.id===id); }
function findFeature(id){ return FEATURES.find(o=>o.id===id); }

/* =========================================================================
   CALCULATIONS
   ========================================================================= */
function elementTMU(el, mc){
  const freq = Number(el.freq)||0;
  if(el.type==='mn') return (Number(el.cm)||0)*freq;
  if(el.type==='imp') return (Number(el.cm)||0)*freq;
  if(el.type==='by') return (Number(el.cm)||0)/(Number(mc.bundleQty)||1)*freq;
  if(el.type==='z') return (Number(el.cm)||0)*freq;
  if(el.type==='y') return (Number(el.cm)||0)*freq;
  if(el.type==='sew'){
    const spc=Number(mc.stitchespercm), rpm=Number(mc.rpm), len=Number(el.cm)||0;
    if(!spc||!rpm) return 0;
    const base = spc/(rpm*0.0006);
    const ratio = rpm/spc;
    const mult = ratio>445 ? ((Math.pow(4.5-base,2)/100)+1) : 1;
    const factor = TENSION[el.tension]?.factor ?? 1;
    const add = STOP[el.stop]?.add ?? 0;
    return ((base*mult*factor*len)+17+add)*freq;
  }
  if(el.type==='lib'){
    const sc = parseStitchCode(el.code);
    if(sc){
      const rpm = Number(mc.rpm)||0;
      if(!rpm) return 0;
      return (sc.n*(2000/rpm) + sc.meta.base)*freq;
    }
  }
  const entry = CODE_LIBRARY[el.code];
  if(!entry) return 0;
  const val = entry.tmu[el.cm];
  return val===undefined ? 0 : val*freq;
}
function elementDesc(el){
  if(el.type==='mn') return 'MANUAL TIME ENTRY';
  if(el.type==='imp') return 'IMPORTED OPERATION CODE (no elemental breakdown available)';
  if(el.type==='by') return 'BUNDLE HANDLING';
  if(el.type==='z') return 'MACHINE ELEMENT';
  if(el.type==='y') return 'MANUAL ELEMENT';
  if(el.type==='sew') return \`SEW \${el.cm||0} CM\`;
  if(el.type==='lib'){
    const sc = parseStitchCode(el.code);
    if(sc) return sc.meta.label;
  }
  const entry = CODE_LIBRARY[el.code];
  return entry?entry.desc:'—';
}
const MACHINE_LIB_CODES = ['MS1A','MS1B','MS1C'];
const STITCH_CODE_RE = /^S\\d+(BT|BH|BS)$/;
function isMachineElement(el){
  return el.type==='sew' || el.type==='z' || (el.type==='lib' && (MACHINE_LIB_CODES.includes(el.code) || STITCH_CODE_RE.test(el.code)));
}
function computeOp(op){
  let manualTmu=0, sewTmu=0, sewLen=0, bundleTmu=0;
  for(const el of (op.elements||[])){
    const tmu = elementTMU(el,op);
    const freq = Number(el.freq)||0;
    if(el.type==='sew'){ sewTmu+=tmu; sewLen += (Number(el.cm)||0)*freq; }
    else if(el.type==='z'){ sewTmu+=tmu; }
    else if(el.type==='by'){ bundleTmu+=tmu; }
    else if(el.type==='lib' && MACHINE_LIB_CODES.includes(el.code)){ sewTmu+=tmu; sewLen += 1*freq; }
    else if(isMachineElement(el)){ sewTmu+=tmu; }
    else manualTmu+=tmu;
  }
  const manualMin=manualTmu/2000, sewMin=sewTmu/2000, bundleMin=bundleTmu/2000, basicMin=manualMin+sewMin+bundleMin;
  const P=(Number(op.allowPersonal)||0)/100, M=(Number(op.allowMachine)||0)/100, C=(Number(op.allowContingency)||0)/100;
  const manualTotal=manualMin+manualMin*P;
  const sewTotal=sewMin+sewMin*P+sewMin*M;
  const bundleTotal=bundleMin+bundleMin*P;
  const personalAllowMin=(manualMin+sewMin+bundleMin)*P;
  const machineAllowMin=sewMin*M;
  const totalC=(manualTotal+sewTotal+bundleTotal)*C;
  const smv=manualTotal+sewTotal+bundleTotal+totalC;
  const nonMachineTmu=manualTmu+bundleTmu, totalTmu=manualTmu+bundleTmu+sewTmu;
  const nonMachinePct = totalTmu>0 ? (nonMachineTmu/totalTmu*100) : 0;
  return {manualMin,sewMin,bundleMin,basicMin,smv,capacity:smv>0?60/smv:null,sewLen,bundleTmu,manualTmu,sewTmu,nonMachinePct,personalAllowMin,machineAllowMin,contingencyAllowMin:totalC};
}
function macroSmv(macro){
  const ownSmv = computeOp(macro).smv || 0;
  const linkedSmv = (macro.items||[]).reduce((s,it)=>{
    const op=findOp(it.refId); return s + (op?computeOp(op).smv:0)*(Number(it.qty)||0);
  },0);
  return ownSmv + linkedSmv;
}
function featureSmv(feature){
  return (feature.items||[]).reduce((s,it)=>{
    let each=0;
    if(it.refType==='macro'){ const m=findMacro(it.refId); each=m?macroSmv(m):0; }
    else { const o=findOp(it.refId); each=o?computeOp(o).smv:0; }
    return s + each*(Number(it.qty)||0);
  },0);
}
function styleSmv(style){
  return (style.items||[]).reduce((s,it)=>{
    let each=0;
    if(it.refType==='feature'){ const f=findFeature(it.refId); each=f?featureSmv(f):0; }
    else if(it.refType==='macro'){ const m=findMacro(it.refId); each=m?macroSmv(m):0; }
    else if(it.refType==='code'){ each=Number(it.smv)||0; }
    else { const o=findOp(it.refId); each=o?computeOp(o).smv:0; }
    return s + each*(Number(it.qty)||0);
  },0);
}
function itemEachSmv(refType,refId,item){
  if(refType==='feature'){ const f=findFeature(refId); return f?featureSmv(f):0; }
  if(refType==='macro'){ const m=findMacro(refId); return m?macroSmv(m):0; }
  if(refType==='code'){ return item?Number(item.smv)||0:0; }
  const o=findOp(refId); return o?computeOp(o).smv:0;
}
function itemLabel(refType,refId,item){
  if(refType==='feature'){ const f=findFeature(refId); return f?{code:f.code,name:f.name}:{code:'?',name:'(missing)'}; }
  if(refType==='macro'){ const m=findMacro(refId); return m?{code:m.code,name:m.name}:{code:'?',name:'(missing)'}; }
  if(refType==='code'){ return item?{code:item.code||'?', name:(item.title||'')+' (not in Operation library — reference only)'} : {code:'?',name:'(missing)'}; }
  const o=findOp(refId); return o?{code:o.code,name:o.description||o.component}:{code:'?',name:'(missing)'};
}
function refCheckinCount(refType,refId){
  if(refType==='code') return 0;
  const ref = refType==='feature'?findFeature(refId):(refType==='macro'?findMacro(refId):findOp(refId));
  return ref ? (ref.checkinHistory||[]).length : 0;
}
function itemIsChanged(it){
  if(it.refType==='code') return false;
  if(it.snapshotCheckinCount===undefined || it.snapshotCheckinCount===null) return false;
  return refCheckinCount(it.refType,it.refId) > it.snapshotCheckinCount;
}
function itemChangeMeta(it){
  let ref = it.refType==='feature'?findFeature(it.refId):(it.refType==='macro'?findMacro(it.refId):findOp(it.refId));
  if(!ref) return {user:'—', date:null};
  const hist = ref.checkinHistory||[];
  if(hist.length) return {user:hist[hist.length-1].user||'—', date:hist[hist.length-1].date};
  return {user:'—', date:ref.updatedAt||ref.createdAt||null};
}
const ANALYSIS_KINDS = {
  style:{ getCurrent:()=>currentStyle(), render:st=>renderStyleItems(st), persistFn:st=>persist('style',st), title:st=>(st.header.styleNo||'Untitled') },
  feature:{ getCurrent:()=>currentFeature(), render:ft=>renderFeatureItems(ft), persistFn:ft=>persist('feature',ft), title:ft=>(ft.code||'Untitled') }
};
let analysisChangesKind='style';
function changedLineNumbers(item){
  return item.items.map((it,i)=>({it,line:i+1})).filter(x=>itemIsChanged(x.it)).map(x=>x.line);
}
function updateChangeBanner(kind,item){
  const lines = changedLineNumbers(item);
  const bannerId = kind==='style' ? 'stChangeBanner' : 'ftChangeBanner';
  const btnId = kind==='style' ? 'stToolbarAnalysis' : 'ftToolbarAnalysis';
  const banner=$(bannerId), btn=$(btnId);
  if(banner){
    if(lines.length){
      banner.classList.remove('hidden');
      banner.innerHTML = \`⚠ The data is different from the original analysis for the following line numbers: \${lines.join(', ')}.\`;
    } else {
      banner.classList.add('hidden');
    }
  }
  if(btn){
    btn.textContent = lines.length ? \`⚠ Analysis Changes (\${lines.length})\` : \`Analysis Changes\`;
    btn.classList.toggle('has-changes', lines.length>0);
  }
}
function openAnalysisChangesModal(kind){
  analysisChangesKind=kind;
  const cfg=ANALYSIS_KINDS[kind];
  const item=cfg.getCurrent(); if(!item) return;
  $('analysisChangesTitle').textContent = cfg.title(item)+' : Analysis Changes';
  renderAnalysisChangesTable();
  $('analysisChangesBg').classList.add('show');
}
function openRefInNewTab(refType,refId){
  const url = new URL(window.location.href);
  url.hash = 'openItem='+refType+':'+refId;
  window.open(url.toString(), '_blank');
}
function renderAnalysisChangesTable(){
  const cfg=ANALYSIS_KINDS[analysisChangesKind];
  const item=cfg.getCurrent(); if(!item) return;
  const rows=item.items.map((it,idx)=>({it,idx})).filter(x=>itemIsChanged(x.it));
  const body=$('analysisChangesBody');
  $('analysisChangesSelectAll').checked=false;
  if(!rows.length){
    body.innerHTML = \`<tr><td colspan="8" style="text-align:center;padding:16px;color:#777;">No analysis changes.</td></tr>\`;
  } else {
    body.innerHTML = rows.map((r,i)=>{
      const lbl=itemLabel(r.it.refType,r.it.refId);
      const meta=itemChangeMeta(r.it);
      const newSmv=itemEachSmv(r.it.refType,r.it.refId);
      const pillCls = r.it.refType==='feature'?'pill-ft':(r.it.refType==='macro'?'pill-mc':'pill-op');
      return \`<tr>
        <td><input type="checkbox" class="ac-row-check" data-itid="\${r.it.id}"></td>
        <td>\${i+1}</td><td><span class="pill \${pillCls}">\${r.it.refType.toUpperCase()}</span></td>
        <td class="mono"><a href="#" class="op-code-link" data-actype="\${r.it.refType}" data-acid="\${r.it.refId}">\${escapeHtml(lbl.code)}</a></td><td>SMV UPDATED</td>
        <td class="right mono">\${newSmv.toFixed(4)}</td>
        <td>\${escapeHtml(meta.user)}</td><td>\${meta.date?new Date(meta.date).toLocaleString():'—'}</td></tr>\`;
    }).join('');
    body.querySelectorAll('[data-actype]').forEach(a=>a.addEventListener('click',e=>{
      e.preventDefault();
      openRefInNewTab(a.dataset.actype, a.dataset.acid);
    }));
  }
}
$('analysisChangesClose').addEventListener('click',()=>{ $('analysisChangesBg').classList.remove('show'); });
$('analysisChangesCancel').addEventListener('click',()=>{ $('analysisChangesBg').classList.remove('show'); });
$('analysisChangesSelectAll').addEventListener('change',e=>{
  $('analysisChangesBody').querySelectorAll('.ac-row-check').forEach(cb=>{ cb.checked=e.target.checked; });
});
$('analysisChangesAccept').addEventListener('click',()=>{
  const cfg=ANALYSIS_KINDS[analysisChangesKind];
  const item=cfg.getCurrent(); if(!item) return;
  const checked = Array.from($('analysisChangesBody').querySelectorAll('.ac-row-check:checked')).map(cb=>cb.dataset.itid);
  if(!checked.length){ showToast('Select at least one operation to accept'); return; }
  item.items.forEach(it=>{ if(checked.includes(it.id) && itemIsChanged(it)) it.snapshotCheckinCount = refCheckinCount(it.refType,it.refId); });
  cfg.persistFn(item);
  cfg.render(item);
  renderAnalysisChangesTable();
  showToast('Selected changes accepted ✓');
});
$('stToolbarAnalysis').addEventListener('click',()=>{ openAnalysisChangesModal('style'); });
$('ftToolbarAnalysis').addEventListener('click',()=>{ openAnalysisChangesModal('feature'); });

/* =========================================================================
   NAVIGATION
   ========================================================================= */
const VIEWS = ['dashboard','operations','macros','features','styles'];
function goto(view){
  if(LOGGED_IN_USER && !userHasAccess(LOGGED_IN_USER, view)){
    view = firstAllowedView(LOGGED_IN_USER);
  }
  VIEWS.forEach(v=>$('view-'+v).classList.toggle('hidden', v!==view));
  document.querySelectorAll('#mainTabs button').forEach(b=>b.classList.toggle('active', b.dataset.view===view));
  if(view==='dashboard') renderDashboard();
  if(view==='operations') refreshLib('op');
  if(view==='macros') refreshLib('macro');
  if(view==='features') refreshLib('feature');
  if(view==='styles') refreshLib('style');
}
document.querySelectorAll('#mainTabs button').forEach(b=>b.addEventListener('click',()=>goto(b.dataset.view)));
document.querySelectorAll('[data-goto]').forEach(el=>el.addEventListener('click',()=>goto(el.dataset.goto)));

/* =========================================================================
   DASHBOARD
   ========================================================================= */
function renderDashboard(){
  $('cnt_style').textContent = STYLES.length;
  $('cnt_feature').textContent = FEATURES.length;
  $('cnt_op').textContent = OPS.length;
  $('cnt_macro').textContent = MACROS.length;
  $('lastUpdatedTxt').textContent = 'updated ' + timeAgo(Date.now());

  const data = [
    {name:'Style', val:STYLES.length, color:'var(--blue)'},
    {name:'Feature', val:FEATURES.length, color:'var(--green)'},
    {name:'Operation', val:OPS.length, color:'var(--orange)'},
    {name:'Macro', val:MACROS.length, color:'var(--pink)'},
  ];
  const max = Math.max(1, ...data.map(d=>d.val));
  $('barchart').innerHTML = data.map(d=>\`
    <div class="col">
      <div class="val">\${d.val}</div>
      <div class="bar" style="height:\${Math.max(6,(d.val/max)*160)}px;background:\${d.color};"></div>
      <div class="name">\${d.name}</div>
    </div>\`).join('');

  const list = $('recentList');
  if(!RECENT.length){ list.innerHTML=''; $('recentEmpty').classList.remove('hidden'); }
  else {
    $('recentEmpty').classList.add('hidden');
    list.innerHTML = RECENT.map(r=>{
      const badgeCls = {op:'rb-op',macro:'rb-mc',feature:'rb-ft',style:'rb-st'}[r.type];
      const badgeTxt = {op:'OP',macro:'MC',feature:'FT',style:'ST'}[r.type];
      return \`<div class="recent-item" data-open="\${r.type}:\${r.id}">
        <div class="rleft">
          <div class="recent-badge \${badgeCls}">\${badgeTxt}</div>
          <div><div class="rname">\${escapeHtml(r.name)}</div><div class="rmeta">SMV: \${r.smv.toFixed(4)}</div></div>
        </div>
        <div><div class="rsmv">\${r.smv.toFixed(4)}</div><div class="rtime">\${timeAgo(r.ts)}</div></div>
      </div>\`;
    }).join('');
    list.querySelectorAll('[data-open]').forEach(el=>{
      el.addEventListener('click',()=>{
        const [type,id] = el.dataset.open.split(':');
        if(type==='op') openOpEditor(id);
        if(type==='macro') openMacroEditor(id);
        if(type==='feature') openFeatureEditor(id);
        if(type==='style') openStyleEditor(id);
      });
    });
  }
}

/* =========================================================================
   FOLDER TREE + LIBRARY TOOLBAR (shared across Operations / Macros / Features)
   ========================================================================= */
const LIB_META = {
  op:{arr:()=>OPS, treeId:'opTree', titleId:'opFolderTitle', label:'Operations', codeName:o=>o.description||o.component||'Untitled', code:o=>o.code},
  macro:{arr:()=>MACROS, treeId:'mcTree', titleId:'mcFolderTitle', label:'Macros', codeName:m=>m.name||'Untitled', code:m=>m.code},
  feature:{arr:()=>FEATURES, treeId:'ftTree', titleId:'ftFolderTitle', label:'Features', codeName:f=>f.name||'Untitled', code:f=>f.code},
  style:{arr:()=>STYLES, treeId:'stTree', titleId:'stFolderTitle', label:'Styles', codeName:s=>s.header.desc||'Untitled', code:s=>s.header.styleNo},
};
function folderName(type,id){ if(!id) return '— No folder —'; const f=FOLDERS[type].find(x=>x.id===id); return f?f.name:'— No folder —'; }
function folderCount(type,folderId){
  const itemsArr = LIB_META[type].arr();
  let c = itemsArr.filter(i=>i.folderId===folderId).length;
  const subs = FOLDERS[type].filter(f=>f.parentId===folderId);
  for(const s of subs) c += folderCount(type,s.id);
  return c;
}
// "Import Operation" / "Import Style" (etc.) are auto-created holding folders for
// imported data — they should always sort to the very bottom of any folder list,
// no matter when they were created, so newly created folders always land above them.
function folderPinCompare(a,b){
  const aPin = /^import\\s/i.test(a.name||'') ? 1 : 0;
  const bPin = /^import\\s/i.test(b.name||'') ? 1 : 0;
  return aPin - bPin;
}
function renderTree(type){
  const meta = LIB_META[type];
  const folders = FOLDERS[type];
  const itemsArr = meta.arr();
  function node(folder,depth){
    const children = folders.filter(f=>f.parentId===folder.id).sort(folderPinCompare);
    const collapsed = treeCollapsed[type][folder.id];
    const active = selectedFolder[type]===folder.id;
    let html = \`<div class="tree-row \${active?'active':''}" style="padding-left:\${depth*14+6}px;">
      <span class="tree-toggle" data-toggle="\${folder.id}">\${children.length?(collapsed?'▸':'▾'):'·'}</span>
      <span class="tree-name" data-select="\${folder.id}">\${escapeHtml(folder.name)}\${folder.shortCode?\` <span class="muted">(\${escapeHtml(folder.shortCode)})</span>\`:''}</span>
      <span class="tree-count">\${folderCount(type,folder.id)}</span>
      <span class="tree-actions">
        <button data-addsub="\${folder.id}" title="Add subfolder">+</button>
        <button data-rename="\${folder.id}" title="Rename">✎</button>
        <button data-delfolder="\${folder.id}" title="Delete">✕</button>
      </span></div>\`;
    if(!collapsed) for(const c of children) html += node(c,depth+1);
    return html;
  }
  const roots = folders.filter(f=>!f.parentId).sort(folderPinCompare);
  let out = \`<div class="tree-row \${selectedFolder[type]===null?'active':''}" style="padding-left:6px;">
    <span class="tree-toggle">·</span><span class="tree-name" data-select-root="1">All \${meta.label}</span>
    <span class="tree-count">\${itemsArr.length}</span></div>\`;
  for(const r of roots) out += node(r,1);
  const el = $(meta.treeId);
  el.innerHTML = out;
  el.querySelectorAll('[data-select]').forEach(s=>s.addEventListener('click',()=>{ selectedFolder[type]=s.dataset.select; refreshLib(type); }));
  const rootSel = el.querySelector('[data-select-root]');
  if(rootSel) rootSel.addEventListener('click',()=>{ selectedFolder[type]=null; refreshLib(type); });
  el.querySelectorAll('[data-toggle]').forEach(t=>t.addEventListener('click',e=>{ e.stopPropagation(); const id=t.dataset.toggle; treeCollapsed[type][id]=!treeCollapsed[type][id]; renderTree(type); }));
  el.querySelectorAll('[data-addsub]').forEach(b=>b.addEventListener('click',e=>{
    e.stopPropagation();
    openFolderModal(type, b.dataset.addsub, null);
  }));
  el.querySelectorAll('[data-rename]').forEach(b=>b.addEventListener('click',e=>{
    e.stopPropagation();
    const f = FOLDERS[type].find(x=>x.id===b.dataset.rename); if(!f) return;
    openFolderModal(type, f.parentId||null, f);
  }));
  el.querySelectorAll('[data-delfolder]').forEach(b=>b.addEventListener('click',async e=>{
    e.stopPropagation();
    let ok=true;
    try{ ok = confirm('Delete this folder and its subfolders? Items inside will move to "No folder".'); }catch(err){ console.error('confirm() failed, proceeding without it:', err); }
    if(!ok) return;
    try{
      await deleteFolderCascade(type,b.dataset.delfolder);
      renderTree(type); refreshLib(type);
      showToast('Folder deleted');
    }catch(err){ console.error('Folder delete failed:', err); alert('Delete failed: '+(err && err.message ? err.message : err)); }
  }));
}
function getFilteredItems(type){
  const meta = LIB_META[type];
  let items = meta.arr();
  if(selectedFolder[type]!==null) items = items.filter(i=>i.folderId===selectedFolder[type]);
  const q = (libSearch[type]||'').toLowerCase();
  if(q) items = items.filter(i=>{
    const code = meta.code ? meta.code(i) : i.code;
    return ((code||'')+' '+meta.codeName(i)).toLowerCase().includes(q);
  });
  return items;
}
function refreshLib(type){
  if(type==='op') renderOpsList();
  if(type==='macro') renderMacrosList();
  if(type==='feature') renderFeaturesList();
  if(type==='style') renderStylesList();
  renderTree(type);
  $(LIB_META[type].titleId).textContent = selectedFolder[type]===null ? ('All '+LIB_META[type].label) : folderName(type,selectedFolder[type]);
}
/* =========================================================================
   FOLDER ADD/EDIT MODAL — "Add Menu Record" (root) / "Add Detail Record" (sub)
   ========================================================================= */
const ATTRIBUTE_DEFS = {
  'Department': ['WOMEN','MEN','KIDS','UNISEX'],
  'Product Type': ['Hoodie','T-Shirt','Pant','Jacket','Shirt'],
  'Operation Type': ['SEW','CUT','PRESS','PACK','FINISH'],
  'Article': ['BACK','FRONT','SLEEVE','COLLAR','POCKET'],
  'Process': ['SEWING','CUTTING','FINISHING','PACKING']
};
let folderModalState={type:null,parentId:null,editingId:null};
let fmAttrs=[]; let fmImageData=null; let fmEndRangeManual=false;
function openFolderModal(type,parentId,editing){
  folderModalState={type,parentId:parentId||null,editingId:editing?editing.id:null};
  const isDetail = !!parentId;
  if(isDetail){
    $('folderModalTitle').textContent='Add Detail Record';
    $('fmSimple').classList.add('hidden'); $('fmRange').classList.remove('hidden');
    $('fm_startrange').value = editing?.startRange||'';
    $('fm_endrange').value = editing?.endRange||'';
    fmEndRangeManual = !!(editing && editing.endRange);
    $('fm_name2').value = editing?.name||'';
    $('fm_shortcode2').value = editing?.shortCode||'';
    fmAttrs = editing?.attributes ? JSON.parse(JSON.stringify(editing.attributes)) : [{attr:'Department',value:'WOMEN'}];
    fmImageData = editing?.image || null;
    renderFmAttrRows(); updateFmImagePreview();
    const rangeLocked = !!(editing && editing.startRange && editing.endRange && folderCount(type, editing.id) > 0);
    $('fm_startrange').disabled = rangeLocked;
    $('fm_endrange').disabled = rangeLocked;
    $('fmRangeLockedNote').classList.toggle('hidden', !rangeLocked);
  } else {
    $('folderModalTitle').textContent='Add Menu Record';
    $('fmRange').classList.add('hidden'); $('fmSimple').classList.remove('hidden');
    $('fm_name').value = editing?.name||'';
    $('fm_shortcode').value = editing?.shortCode||'';
  }
  $('folderModalBg').classList.add('show');
}
function closeFolderModal(){ $('folderModalBg').classList.remove('show'); }
function renderFmAttrRows(){
  const wrap=$('fmAttrRows');
  wrap.innerHTML = fmAttrs.map((a,idx)=>{
    const opts=ATTRIBUTE_DEFS[a.attr]||ATTRIBUTE_DEFS['Department'];
    return \`<div class="attr-row" data-arow="\${idx}">
      <select class="fm-attr-key">\${Object.keys(ATTRIBUTE_DEFS).map(k=>\`<option value="\${k}" \${k===a.attr?'selected':''}>\${k}</option>\`).join('')}</select>
      <select class="fm-attr-val">\${opts.map(v=>\`<option value="\${v}" \${v===a.value?'selected':''}>\${v}</option>\`).join('')}</select>
      <button class="attr-del" title="Remove">🗑</button>
    </div>\`;
  }).join('');
  wrap.querySelectorAll('[data-arow]').forEach(row=>{
    const idx=Number(row.dataset.arow);
    row.querySelector('.fm-attr-key').addEventListener('change',e=>{ fmAttrs[idx].attr=e.target.value; fmAttrs[idx].value=ATTRIBUTE_DEFS[e.target.value][0]; renderFmAttrRows(); });
    row.querySelector('.fm-attr-val').addEventListener('change',e=>{ fmAttrs[idx].value=e.target.value; });
    row.querySelector('.attr-del').addEventListener('click',()=>{ fmAttrs.splice(idx,1); renderFmAttrRows(); });
  });
}
$('fmAddAttr').addEventListener('click',()=>{ fmAttrs.push({attr:'Department',value:'WOMEN'}); renderFmAttrRows(); });
$('fm_imageBtn').addEventListener('click',()=>$('fm_image').click());
$('fm_image').addEventListener('change', async e=>{
  const file=e.target.files[0]; if(!file) return;
  fmImageData = await fileToDataUrl(file); updateFmImagePreview();
});
function updateFmImagePreview(){
  const img=$('fm_imagePreview');
  if(fmImageData){ img.src=fmImageData; img.classList.remove('hidden'); } else { img.classList.add('hidden'); }
}
$('fm_endrange').addEventListener('input',()=>{ fmEndRangeManual=true; });
$('fm_startrange').addEventListener('input',()=>{
  if(fmEndRangeManual) return;
  const m=$('fm_startrange').value.match(/^(.*?)(\\d+)\\s*$/);
  if(m) $('fm_endrange').value = m[1]+'9'.repeat(m[2].length);
});
$('folderModalClose').addEventListener('click', closeFolderModal);
$('fm_cancel').addEventListener('click', closeFolderModal);
$('folderModalBg').addEventListener('click', e=>{ if(e.target.id==='folderModalBg') closeFolderModal(); });
$('fm_apply').addEventListener('click', debounceClick(async ()=>{
  const {type,parentId,editingId} = folderModalState;
  const isDetail = !!parentId;
  let f = editingId ? FOLDERS[type].find(x=>x.id===editingId) : null;
  const isNew = !f;
  if(isNew) f = {id:uid('fld_'), type, parentId:parentId||null};
  if(isDetail){
    f.name = $('fm_name2').value.trim() || 'Untitled';
    f.shortCode = $('fm_shortcode2').value.trim();
    const rangeLocked = !isNew && f.startRange && f.endRange && folderCount(type, f.id) > 0;
    if(rangeLocked){
      const newStart = $('fm_startrange').value.trim(), newEnd = $('fm_endrange').value.trim();
      if(newStart!==f.startRange || newEnd!==f.endRange){
        alert('This folder already has operations saved in it, so the Start/End Range cannot be changed.');
        return;
      }
    } else {
      f.startRange = $('fm_startrange').value.trim();
      f.endRange = $('fm_endrange').value.trim();
    }
    f.attributes = fmAttrs.filter(a=>a.attr);
    f.image = fmImageData || null;
  } else {
    f.name = $('fm_name').value.trim() || 'Untitled';
    f.shortCode = $('fm_shortcode').value.trim();
  }
  if(isNew) FOLDERS[type].push(f);
  await saveFolder(type,f);
  renderTree(type);
  closeFolderModal();
  showToast(isNew?'Folder created ✓':'Folder updated ✓');
}));
function populateFolderSelect(sel,type,selected){
  let opts = \`<option value="">— No folder —</option>\`;
  function walk(parentId,depth){
    FOLDERS[type].filter(f=>f.parentId===parentId).sort(folderPinCompare).forEach(f=>{
      opts += \`<option value="\${f.id}" \${f.id===selected?'selected':''}>\${'— '.repeat(depth)}\${escapeHtml(f.name)}</option>\`;
      walk(f.id,depth+1);
    });
  }
  walk(null,0);
  sel.innerHTML = opts;
}

/* =========================================================================
   FOLDER MANAGER — single unified place to view/delete folders across
   Operations / Macros / Features (instead of hunting per-tab tree hover icons)
   ========================================================================= */
let folderMgrType='op';
function openFolderManager(){
  folderMgrType='op';
  renderFolderMgrTabs(); renderFolderMgrList(); renderFolderMgrItemsList();
  $('folderMgrBg').classList.add('show');
}
function renderFolderMgrTabs(){
  $('folderMgrTabs').querySelectorAll('[data-fmt]').forEach(b=>b.classList.toggle('active', b.dataset.fmt===folderMgrType));
}
function renderFolderMgrList(){
  const meta = LIB_META[folderMgrType];
  const folders = FOLDERS[folderMgrType];
  const list = $('folderMgrList');
  if(!folders.length){ list.innerHTML = \`<div class="muted" style="padding:20px 0;text-align:center;">No folders yet for \${meta.label}.</div>\`; return; }
  function crumb(f){
    const parts=[f.name]; let p=f.parentId;
    while(p){ const pf=folders.find(x=>x.id===p); if(!pf) break; parts.unshift(pf.name); p=pf.parentId; }
    return parts.join(' › ');
  }
  list.innerHTML = [...folders].sort(folderPinCompare).map(f=>\`<div class="pick-row" data-fid="\${f.id}">
      <div><div class="pn">\${escapeHtml(crumb(f))}\${f.shortCode?\` <span class="muted">(\${escapeHtml(f.shortCode)})</span>\`:''}</div>
      <div class="ps">\${folderCount(folderMgrType,f.id)} item(s)\${f.startRange?' · Range: '+escapeHtml(f.startRange)+' – '+escapeHtml(f.endRange):''}</div></div>
      <div style="display:flex;gap:6px;">
        <button type="button" class="ghost small" data-fedit="\${f.id}">Edit</button>
        <button type="button" class="danger small" data-fdel="\${f.id}">Delete</button>
      </div></div>\`).join('');
}
// Delegated listeners — bound ONCE on the stable container, not on the buttons
// themselves, so re-rendering the list (innerHTML replace) can never leave a
// button un-wired.
$('folderMgrList').addEventListener('click', (e)=>{
  const editBtn = e.target.closest('[data-fedit]');
  const delBtn = e.target.closest('[data-fdel]');
  if(editBtn){
    const f=FOLDERS[folderMgrType].find(x=>x.id===editBtn.dataset.fedit); if(!f) return;
    $('folderMgrBg').classList.remove('show');
    openFolderModal(folderMgrType, f.parentId||null, f);
    return;
  }
  if(delBtn){
    debounceClick(async ()=>{
      let ok=true;
      try{ ok = confirm('Delete this folder and its subfolders? Items inside will move to "No folder".'); }catch(err){ console.error('confirm() failed, proceeding without it:', err); }
      if(!ok) return;
      try{
        await deleteFolderCascade(folderMgrType, delBtn.dataset.fdel);
        renderTree(folderMgrType); refreshLib(folderMgrType); renderFolderMgrList(); renderFolderMgrItemsList();
        showToast('Folder deleted');
      }catch(err){ console.error('Folder delete failed:', err); alert('Delete failed: '+(err && err.message ? err.message : err)); }
    })();
  }
});
const FOLDER_MGR_DELETE_CONFIRM = {
  op:'Delete this operation? Macros/Features/Styles referencing it will show it as missing.',
  macro:'Delete this macro? Features/Styles referencing it will show it as missing.',
  feature:'Delete this feature? Styles referencing it will show it as missing.',
  style:'Delete this style?'
};
const FOLDER_MGR_SINGULAR = {op:'Operation', macro:'Macro', feature:'Feature', style:'Style'};
function renderFolderMgrItemsList(){
  const meta = LIB_META[folderMgrType];
  const items = meta.arr();
  const list = $('folderMgrItemsList');
  if(!items.length){ list.innerHTML = \`<div class="muted" style="padding:20px 0;text-align:center;">No \${meta.label.toLowerCase()} yet.</div>\`; return; }
  list.innerHTML = items.map(it=>{
    let codeTxt='—', nameTxt='Untitled', folderTxt='— No folder —', smvTxt='0.000';
    try{ codeTxt = meta.code(it)||'—'; }catch(e){ console.error('folderMgr item code error',e,it); }
    try{ nameTxt = meta.codeName(it)||'Untitled'; }catch(e){ console.error('folderMgr item name error',e,it); }
    try{ folderTxt = folderName(folderMgrType, it.folderId); }catch(e){ console.error('folderMgr item folder error',e,it); }
    try{ smvTxt = (smvFor(folderMgrType,it)||0).toFixed(3); }catch(e){ console.error('folderMgr item smv error',e,it); }
    return \`<div class="pick-row" data-iid="\${it.id}">
      <div><div class="pn">\${escapeHtml(codeTxt)} — \${escapeHtml(nameTxt)}</div>
      <div class="ps">\${escapeHtml(folderTxt)} · SMV \${smvTxt}</div></div>
      <div style="display:flex;gap:6px;">
        <button type="button" class="danger small" data-idel="\${it.id}">Delete</button>
      </div></div>\`;
  }).join('');
}
$('folderMgrItemsList').addEventListener('click', (e)=>{
  const delBtn = e.target.closest('[data-idel]');
  if(!delBtn) return;
  debounceClick(async ()=>{
    const id = delBtn.dataset.idel;
    if(!id){ console.error('folderMgr delete: missing item id on button', delBtn); return; }
    let ok=true;
    try{ ok = confirm(FOLDER_MGR_DELETE_CONFIRM[folderMgrType]); }catch(err){ console.error('confirm() failed, proceeding without it:', err); }
    if(!ok) return;
    try{
      await removeItem(folderMgrType, id);
      renderTree(folderMgrType); refreshLib(folderMgrType); renderFolderMgrList(); renderFolderMgrItemsList();
      showToast(FOLDER_MGR_SINGULAR[folderMgrType]+' deleted');
    }catch(err){
      console.error('Delete failed:', err);
      alert('Delete failed: '+(err && err.message ? err.message : err));
    }
  })();
});
$('folderMgrTabs').querySelectorAll('[data-fmt]').forEach(b=>b.addEventListener('click',()=>{
  folderMgrType=b.dataset.fmt; renderFolderMgrTabs(); renderFolderMgrList(); renderFolderMgrItemsList();
}));
$('btnFolderManager').addEventListener('click', openFolderManager);
$('folderMgrClose').addEventListener('click',()=>$('folderMgrBg').classList.remove('show'));
$('folderMgrBg').addEventListener('click', e=>{ if(e.target.id==='folderMgrBg') $('folderMgrBg').classList.remove('show'); });
function csvEscape(v){ const s=String(v??''); return /[",\\n]/.test(s) ? '"'+s.replace(/"/g,'""')+'"' : s; }
function downloadBlob(filename,content,mime){
  const blob = new Blob([content],{type:mime});
  const a = document.createElement('a'); a.href=URL.createObjectURL(blob); a.download=filename;
  document.body.appendChild(a); a.click(); a.remove();
}
/* =========================================================================
   .GSD FILE EXPORT — Operation / Macro / Style, all download a real
   .gsd (UTF-16LE XML) file instead of an Excel sheet, in the same
   Info > Analyses > L4 > Line0000 > A<code> > Details schema this app's
   own .gsd importer already understands (parseGsdXmlText / extractOpsFromGsd),
   so an exported file round-trips cleanly back into SMV Insight.
   ========================================================================= */
function gsdRowsForOp(op){
  if(!op) return [];
  return [{code:(op.code||'').trim(), title:op.description||op.title||'', freq:1, smv:computeOp(op).smv||0}];
}
function gsdRowsForMacro(mc){
  if(!mc) return [];
  return (mc.items||[]).map(it=>{
    const op=findOp(it.refId);
    return {code:op?(op.code||'').trim():'', title:op?(op.description||op.title||''):'', freq:Number(it.qty)||1, smv:op?(computeOp(op).smv||0):0};
  }).filter(r=>r.code);
}
function gsdRowsForStyle(st){
  if(!st) return [];
  return (st.items||[]).map(it=>{
    if(it.refType==='code'){
      if(!it.code) return null;
      return {code:it.code, title:it.title||'', freq:Number(it.qty)||1, smv:Number(it.smv)||0};
    }
    const lbl=itemLabel(it.refType,it.refId,it);
    if(!lbl || !lbl.code || lbl.code==='?') return null;
    return {code:lbl.code, title:lbl.name||'', freq:Number(it.qty)||1, smv:itemEachSmv(it.refType,it.refId,it)||0};
  }).filter(Boolean);
}
function gsdXmlEscape(s){ return String(s??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
function buildGsdXml(code, desc, rows){
  const safeCode = (String(code||'EXPORT').replace(/[^A-Za-z0-9_]/g,'') || 'EXPORT');
  const details = rows.map((r,i)=>{
    const n = String(i+1).padStart(3,'0');
    const oprl = gsdXmlEscape(JSON.stringify([{Code:r.code, Smv:r.smv}]));
    return \`<Detail\${n}><Column001>\${gsdXmlEscape(r.code)}</Column001><Column002>\${gsdXmlEscape(r.title)}</Column002><Column004>\${gsdXmlEscape(r.title)}</Column004><DetailFrequencyValue>\${Number(r.freq)||1}</DetailFrequencyValue><DetailTimeValue>\${Number(r.smv)||0}</DetailTimeValue><OperationPublisResultList>\${oprl}</OperationPublisResultList></Detail\${n}>\`;
  }).join('');
  const now = new Date();
  return \`<?xml version="1.0" encoding="UTF-16"?><Info><Version>4.61</Version><Date>\${gsdXmlEscape(now.toDateString()+' - '+now.toTimeString().slice(0,8))}</Date><Analyses><L4><Line0000><A\${safeCode} Desc="\${gsdXmlEscape(desc)}"><Details>\${rows.length}\${details}</Details></A\${safeCode}></Line0000></L4></Analyses></Info>\`;
}
function utf16leBytesWithBom(str){
  const buf = new Uint8Array(2 + str.length*2);
  buf[0]=0xFF; buf[1]=0xFE;
  for(let i=0;i<str.length;i++){
    const code = str.charCodeAt(i);
    buf[2+i*2] = code & 0xFF;
    buf[2+i*2+1] = (code>>8) & 0xFF;
  }
  return buf;
}
function downloadGsdFile(filename, xmlStr){
  const bytes = utf16leBytesWithBom(xmlStr);
  const blob = new Blob([bytes], {type:'application/octet-stream'});
  const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download=filename.endsWith('.gsd')?filename:filename+'.gsd';
  document.body.appendChild(a); a.click(); a.remove();
}
function exportOpAsGsd(op){
  try{
    const xml = buildGsdXml(op.code||'OPERATION', op.description||op.title||'', gsdRowsForOp(op));
    downloadGsdFile(op.code||'operation', xml);
    showToast('.gsd file downloaded ✓');
    return Promise.resolve();
  }catch(err){ console.error('Export .gsd failed:', err); alert('Export .gsd failed: '+(err && err.message ? err.message : err)); return Promise.reject(err); }
}
function exportMacroAsGsd(mc){
  try{
    const xml = buildGsdXml(mc.code||'MACRO', mc.name||mc.title||'', gsdRowsForMacro(mc));
    downloadGsdFile(mc.code||'macro', xml);
    showToast('.gsd file downloaded ✓');
    return Promise.resolve();
  }catch(err){ console.error('Export .gsd failed:', err); alert('Export .gsd failed: '+(err && err.message ? err.message : err)); return Promise.reject(err); }
}
function exportStyleAsGsd(st){
  try{
    const xml = buildGsdXml(st.header.styleNo||'STYLE', st.header.desc||'', gsdRowsForStyle(st));
    downloadGsdFile(st.header.styleNo||'style', xml);
    showToast('.gsd file downloaded ✓');
    return Promise.resolve();
  }catch(err){ console.error('Export .gsd failed:', err); alert('Export .gsd failed: '+(err && err.message ? err.message : err)); return Promise.reject(err); }
}
function exportLibraryCsv(type,columns,rows){
  const header = columns.map(c=>csvEscape(c[0])).join(',');
  const body = rows.map(r=>columns.map(c=>csvEscape(c[1](r))).join(',')).join('\\n');
  downloadBlob(type+'_export.csv', header+'\\n'+body, 'text/csv');
  showToast('CSV exported ✓');
}
function exportLibraryPdf(type,title,columns,rows){
  try{
    const area = $('printArea');
    area.innerHTML = \`<h2>\${escapeHtml(title)}</h2><div class="pmeta">Exported \${new Date().toLocaleString()} · \${rows.length} item(s)</div>
      <table><thead><tr>\${columns.map(c=>\`<th>\${escapeHtml(c[0])}</th>\`).join('')}</tr></thead>
      <tbody>\${rows.map(r=>\`<tr>\${columns.map(c=>\`<td>\${escapeHtml(c[1](r))}</td>\`).join('')}</tr>\`).join('')}</tbody></table>\`;
    window.print();
  }catch(err){
    console.error('Export PDF failed:', err);
    alert('Export PDF failed: '+(err && err.message ? err.message : err));
  }
}

/* =========================================================================
   OPERATIONS — LIST
   ========================================================================= */
function renderOpsList(){
  const body = $('opsBody');
  const rows = getFilteredItems('op');
  if(!rows.length){ $('opsEmpty').classList.remove('hidden'); $('opsTable').classList.add('hidden'); return; }
  $('opsEmpty').classList.add('hidden'); $('opsTable').classList.remove('hidden');
  body.innerHTML = rows.map(op=>{
    const r = computeOp(op);
    return \`<tr>
      <td class="mono"><a href="#" class="op-code-link" data-open="\${op.id}">\${escapeHtml(op.code||'—')}</a></td>
      <td>\${escapeHtml(op.title||'—')}</td>
      <td><b>\${escapeHtml(op.description||'Untitled')}</b></td>
      <td>\${escapeHtml(op.mctype||'—')}</td>
      <td class="right mono">\${r.sewLen.toFixed(1)}</td>
      <td class="right mono"><b>\${r.smv.toFixed(4)}</b></td>
      <td class="right mono">\${r.capacity?Math.round(r.capacity):'—'}</td>
    </tr>\`;
  }).join('');
  body.querySelectorAll('[data-open]').forEach(a=>a.addEventListener('click',e=>{ e.preventDefault(); openOpEditor(a.dataset.open); }));
}
$('btnNewOp').addEventListener('click', debounceClick(async ()=>{
  const op = newOperation();
  OPS.push(op);
  await persist('op',op);
  openOpEditor(op.id);
}));

/* =========================================================================
   IMPORT ANALYSIS — OPERATIONS ONLY (shares the "Import Operation" folder
   used by the Style analysis importer, so everything lands in one place)
   ========================================================================= */
function parseOpCsvText(text){
  const rawLines = text.replace(/\\r\\n/g,'\\n').split('\\n');
  const lines = rawLines.map(l=>l.trim()===''?[]:parseCsvLine(l)).filter(l=>l.length);
  if(!lines.length) throw new Error('Empty file');
  const header = lines[0].map(h=>h.toLowerCase());
  const rows=[];
  for(let i=1;i<lines.length;i++){
    const obj={}; header.forEach((h,idx)=>{ obj[h]=lines[i][idx]!==undefined?lines[i][idx]:''; });
    rows.push({code:(obj.code||'').trim(), title:(obj.title||obj.name||obj.description||'').trim(), smv:Number(obj.smv)||0});
  }
  return rows;
}
function extractOpsFromGsd(xmlText){
  const parsedStyles = parseGsdXmlText(xmlText);
  const map = new Map();
  parsedStyles.forEach(st=>{
    st.items.forEach(it=>{
      if(it.type!=='OP') return;
      if(!map.has(it.code)) map.set(it.code, {code:it.code, title:it.title, smv:Number(it.smv)||0});
    });
  });
  return Array.from(map.values());
}
async function importOpsOnly(rows){
  const opFolder = await ensureDefaultFolder('op','Import Operation');
  let created=0, linked=0;
  for(const row of rows){
    const code=(row.code||'').trim(); if(!code) continue;
    let op = OPS.find(o=>(o.code||'').toLowerCase()===code.toLowerCase());
    if(!op){
      const smv=Number(row.smv)||0;
      op = {
        id:uid('op_'), code, description:row.title||'', component:'', title:'', attachments:'',
        folderId:opFolder.id, mctype:'', seamtype:SEAM_TYPES[0], skill:SKILLS[0],
        stitchespercm:'', rpm:'', bundleQty:1,
        allowPersonal:0, allowMachine:0, allowContingency:0,
        elements:[{id:uid('el_'), type:'imp', code, note:row.title||'', cm:Math.round(smv*2000*10000)/10000, freq:1}],
        status:'Draft', notes:'', checkinHistory:[], codeLocked:true,
        createdAt:Date.now(), updatedAt:Date.now()
      };
      OPS.push(op); await persist('op',op);
      created++;
    } else {
      linked++;
    }
  }
  return {created,linked};
}
let importOpAnalysisPending=null; // rows parsed from the file, awaiting read-only review + confirm
function resetImportOpAnalysisModal(){
  importOpAnalysisPending=null;
  $('importOpAnalysisFile').value='';
  $('importOpAnalysisStatus').textContent='';
  $('importOpAnalysisStep1').classList.remove('hidden');
  $('importOpAnalysisPreviewWrap').classList.add('hidden');
  $('importOpAnalysisPreviewTable').innerHTML='';
  $('importOpAnalysisBack').classList.add('hidden');
  $('importOpAnalysisRun').textContent='Preview & Check Codes';
}
function openImportOpAnalysisModal(){
  resetImportOpAnalysisModal();
  $('importOpAnalysisBg').classList.add('show');
}
function closeImportOpAnalysisModal(){ $('importOpAnalysisBg').classList.remove('show'); }
function codeCellHtml(code, existingOp, notFoundTitle){
  const safe = escapeHtml(code);
  if(existingOp) return \`<span class="code-open-link" data-open-op-id="\${escapeHtml(existingOp.id)}" title="Open this operation">\${safe}</span>\`;
  return \`<span title="\${escapeHtml(notFoundTitle||'Not in your Operation library yet')}">\${safe}</span>\`;
}
function bindCodeOpenLinks(container){
  container.querySelectorAll('[data-open-op-id]').forEach(el=>{
    el.addEventListener('click', ()=>{ openRefInNewTab('op', el.dataset.openOpId); });
  });
}
function renderImportOpAnalysisPreview(rows){
  const head = \`<thead><tr><th>Code</th><th>Title</th><th class="right">SMV</th><th>Status</th></tr></thead>\`;
  const body = rows.map(r=>{
    const op = OPS.find(o=>(o.code||'').toLowerCase()===String(r.code||'').toLowerCase());
    const status = op
      ? '<span style="color:var(--green);font-weight:700;">Existing — left as-is</span>'
      : '<span style="color:var(--orange);font-weight:700;">New — will be created</span>';
    return \`<tr><td class="mono">\${codeCellHtml(r.code, op, 'Not yet in your library — this operation will be created')}</td><td>\${escapeHtml(r.title||'—')}</td><td class="right mono">\${(Number(r.smv)||0).toFixed(4)}</td><td>\${status}</td></tr>\`;
  }).join('');
  $('importOpAnalysisPreviewTable').innerHTML = head+\`<tbody>\${body}</tbody>\`;
  bindCodeOpenLinks($('importOpAnalysisPreviewTable'));
  $('importOpAnalysisStep1').classList.add('hidden');
  $('importOpAnalysisPreviewWrap').classList.remove('hidden');
  $('importOpAnalysisBack').classList.remove('hidden');
  $('importOpAnalysisRun').textContent=\`Confirm Import (\${rows.length})\`;
}
$('btnImportOpAnalysis').addEventListener('click', openImportOpAnalysisModal);
$('importOpAnalysisClose').addEventListener('click', closeImportOpAnalysisModal);
$('importOpAnalysisCancel').addEventListener('click', closeImportOpAnalysisModal);
$('importOpAnalysisBack').addEventListener('click', resetImportOpAnalysisModal);
$('importOpAnalysisRun').addEventListener('click', debounceClick(async ()=>{
  // Step 2: rows already previewed read-only — commit the import now.
  if(importOpAnalysisPending){
    $('importOpAnalysisStatus').textContent='Importing…';
    try{
      const {created,linked} = await importOpsOnly(importOpAnalysisPending);
      renderTree('op'); renderOpsList();
      closeImportOpAnalysisModal();
      showToast(\`Operations imported ✓ (\${created} created, \${linked} already existed)\`);
    }catch(e){
      console.error(e);
      $('importOpAnalysisStatus').textContent='Import failed — please try again.';
    }
    return;
  }
  // Step 1: parse the file and show a read-only preview of the codes inside — no changes made yet.
  const f = $('importOpAnalysisFile').files[0];
  if(!f){ $('importOpAnalysisStatus').textContent='Please choose a CSV or .gsd file first.'; return; }
  $('importOpAnalysisStatus').textContent='Reading file…';
  const ext=(f.name.split('.').pop()||'').toLowerCase();
  try{
    let rows;
    if(ext==='gsd'){
      const buf=await f.arrayBuffer();
      const xmlText=new TextDecoder('utf-16le').decode(buf);
      rows=extractOpsFromGsd(xmlText);
    } else {
      const text=await f.text();
      rows=parseOpCsvText(text);
    }
    if(!rows.length){ $('importOpAnalysisStatus').textContent='No operations found in this file.'; return; }
    importOpAnalysisPending=rows;
    renderImportOpAnalysisPreview(rows);
    $('importOpAnalysisStatus').textContent='Review the codes above (read-only), then Confirm Import.';
  }catch(e){
    console.error(e);
    $('importOpAnalysisStatus').textContent='Could not read this file — check it matches the supported CSV or .gsd format.';
  }
}));

function nextCodeForFolder(type, folderId){
  const folder = findFolderById(type, folderId);
  if(!folder || !folder.startRange || !folder.endRange) return null;
  const sU=folder.startRange.trim().toUpperCase(), eU=folder.endRange.trim().toUpperCase();
  const sm=sU.match(/^(.*?)(\\d+)$/), em=eU.match(/^(.*?)(\\d+)$/);
  if(!sm || !em || sm[1]!==em[1]) return null;
  const prefix=sm[1], width=sm[2].length;
  const startN=Number(sm[2]), endN=Number(em[2]);
  const arr = type==='macro' ? MACROS : OPS;
  const used = new Set(arr.map(o=>(o.code||'').trim().toUpperCase()));
  for(let n=startN; n<=endN; n++){
    const candidate = prefix + String(n).padStart(width,'0');
    if(!used.has(candidate)) return candidate;
  }
  return null;
}
function newOperation(){
  const autoCode = nextCodeForFolder('op', selectedFolder.op);
  return {id:uid('op_'), code: autoCode || ('OP-'+String(OPS.length+1).padStart(4,'0')),
    component:'', description:'', attachments:'', folderId:selectedFolder.op,
    mctype:'', seamtype:SEAM_TYPES[0], skill:SKILLS[0],
    stitchespercm:4.5, rpm:'', bundleQty:1, allowMachine:10, allowPersonal:10, allowContingency:2, elements:[],
    media:{images:[],documents:[],videos:[]},
    createdAt:Date.now(), status:'Draft', customId:'', title:'', fabric:'', notes:'', codeLocked:false,
    department:'', productType:'', operationType:'', article:'', process:''};
}
$('opNewFolder').addEventListener('click', ()=>{ openFolderModal('op', null, null); });
$('opSearchBox').addEventListener('input', e=>{ libSearch.op = e.target.value; renderOpsList(); });
$('opExportCsv').addEventListener('click', ()=>{
  exportLibraryCsv('operations',
    [['Code',o=>o.code],['Description',o=>o.description||o.component],['M/C',o=>o.mctype],['Seam (cm)',o=>computeOp(o).sewLen.toFixed(1)],['SMV',o=>computeOp(o).smv.toFixed(4)]],
    getFilteredItems('op'));
});
$('opExportPdf').addEventListener('click', ()=>{
  exportLibraryPdf('op','Operations Library',
    [['Code',o=>o.code],['Description',o=>o.description||o.component],['M/C',o=>o.mctype],['Seam (cm)',o=>computeOp(o).sewLen.toFixed(1)],['SMV',o=>computeOp(o).smv.toFixed(4)]],
    getFilteredItems('op'));
});

/* ---- Operation editor ---- */
let editingOpId=null;
function currentOp(){ return findOp(editingOpId); }
function openOpEditor(id){
  editingOpId=id;
  bolMode='op';
  const op=findOp(id); if(!op) return;
  ensureOpFields(op);
  elSelectedIds.clear(); elLastAnchorId=null;
  $('op_code').value=op.code; $('op_description').value=op.description; $('op_attachments').value=op.attachments;
  $('op_code').disabled = !!op.codeLocked;
  $('op_code').title = op.codeLocked ? 'Code is locked after the operation is first saved.' : '';
  $('op_status').value=op.status||'Draft'; $('op_title').value=op.title||'';
  $('op_fabric').value=op.fabric||'';
  $('op_notes').value=op.notes||'';
  populateSelect($('op_mctype'),MC_TYPES,op.mctype,true);
  populateSelect($('op_seamtype'),SEAM_TYPES,op.seamtype);
  populateSelect($('op_skill'),SKILLS,op.skill);
  $('op_stitchespercm').value=op.stitchespercm; $('op_rpm').value=op.rpm;
  $('op_bundle_qty').value=op.bundleQty||1; $('op_allow_machine').value=op.allowMachine; $('op_allow_personal').value=op.allowPersonal; $('op_allow_contingency').value=op.allowContingency;
  renderElements(op); updateOpTotals(op);
  renderAudit(op); renderWhereUsed(op);
  $('opNotesPanel').classList.add('hidden');
  applyOpLock(op.status==='Checked Out');
  $('editorOp').classList.add('show'); window.scrollTo(0,0);
}
function closeOpEditor(){ $('editorOp').classList.remove('show'); $('screenMachine').classList.remove('show'); $('screenBol').classList.remove('show'); editingOpId=null; }
/* =========================================================================
   OPERATION CHECK-IN / CHECK-OUT LOCK
   ========================================================================= */
let opLocked=false;
/* The Bill of Labour screen (#screenBol) is shared between Operations and Macros.
   bolMode tracks which kind of object it's currently editing. */
let bolMode='op';
function bolTarget(){ return bolMode==='macro' ? currentMacro() : currentOp(); }
function bolIsLocked(){ return bolMode==='macro' ? mcLocked : opLocked; }
function bolPersist(target){ return persist(bolMode==='macro'?'macro':'op', target); }
const OP_LOCK_FIELD_IDS=['op_title','op_description','op_attachments','op_fabric',
  'op_mctype','op_seamtype','op_skill','op_stitchespercm','op_rpm','op_bundle_qty','op_allow_machine','op_allow_personal','op_allow_contingency'];
function applyOpLock(locked){
  opLocked=locked;
  OP_LOCK_FIELD_IDS.forEach(id=>{ const el=$(id); if(el) el.disabled=locked; });
  $('opSave').disabled=!locked;
  $('opSave').title = locked ? '' : 'Click Check Out above first — Save & Close is enabled only after the operation is Checked Out';
  $('opToolbarSave').disabled=locked;
  $('opToolbarSaveAs').disabled=!locked;
  $('opToolbarCheckOut').disabled=locked;
  $('opToolbarCheckIn').disabled=!locked;
  $('opLockBanner').classList.toggle('hidden', !locked);
  const op=currentOp(); if(op){ renderElements(op); }
}
function ensureOpFields(op){
  if(!op.createdAt) op.createdAt=op.updatedAt||Date.now();
  if(!op.status) op.status='Draft';
  if(op.customId===undefined) op.customId='';
  if(op.title===undefined) op.title='';
  if(op.fabric===undefined) op.fabric='';
  if(op.notes===undefined) op.notes='';
  for(const k of ['department','productType','operationType','article','process']) if(op[k]===undefined) op[k]='';
  if(op.bundleQty===undefined) op.bundleQty = 1;
  if(op.allowMachine===undefined){ op.allowMachine = op.allowance!==undefined ? op.allowance : 10; }
  if(op.allowPersonal===undefined) op.allowPersonal=10;
  if(op.allowContingency===undefined) op.allowContingency=2;
  if(op.codeLocked===undefined) op.codeLocked=true;
  if(op.checkinHistory===undefined) op.checkinHistory=[];
  if(!Array.isArray(op.elements)) op.elements=[];
}
function fmtDateTime(ts){ if(!ts) return '—'; const d=new Date(ts); return d.toLocaleDateString()+' '+d.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'}); }
function renderAudit(op){
  $('aud_created').textContent = fmtDateTime(op.createdAt);
  $('aud_changed').textContent = fmtDateTime(op.updatedAt);
}
function renderWhereUsed(op){
  const refs=[];
  MACROS.forEach(m=>{ if((m.items||[]).some(it=>it.refType==='op'&&it.refId===op.id)) refs.push({type:'Macro',label:(m.code||'MC')+' — '+(m.name||'Untitled')}); });
  FEATURES.forEach(f=>{ if((f.items||[]).some(it=>it.refType==='op'&&it.refId===op.id)) refs.push({type:'Feature',label:(f.code||'FT')+' — '+(f.name||'Untitled')}); });
  STYLES.forEach(s=>{ if((s.items||[]).some(it=>it.refType==='op'&&it.refId===op.id)) refs.push({type:'Style',label:(s.header.styleNo||'ST')+(s.header.desc?' — '+s.header.desc:'')}); });
  const body=$('whereUsedBody');
  if(!refs.length){ body.innerHTML='<div class="muted" style="font-size:12px;">Not referenced by any Macro, Feature or Style yet.</div>'; return; }
  body.innerHTML = refs.map(r=>\`<div class="where-row"><span>\${escapeHtml(r.label)}</span><span class="pill pill-op">\${r.type}</span></div>\`).join('');
}

function fileToDataUrl(file){
  return new Promise((resolve,reject)=>{
    const r=new FileReader(); r.onload=()=>resolve(r.result); r.onerror=reject; r.readAsDataURL(file);
  });
}
function populateSelect(sel,opts,selected,withBlank){ const blank = withBlank ? \`<option value="">— Select —</option>\` : ''; sel.innerHTML=blank+opts.map(o=>\`<option value="\${o}" \${o===selected?'selected':''}>\${o}</option>\`).join(''); }

function libCodeOptions(selected){
  return Object.keys(CODE_LIBRARY).map(code=>\`<option value="\${code}" \${code===selected?'selected':''}>\${code}</option>\`).join('');
}
function codeTypeOptions(el){
  const sel = el.type==='sew' ? '__SEW__' : (el.type==='mn' ? '__MN__' : el.code);
  return \`<optgroup label="Library motion">\${libCodeOptions(sel)}</optgroup>
    <optgroup label="Other">
      <option value="__SEW__" \${sel==='__SEW__'?'selected':''}>Machine sewing (MC)</option>
      <option value="__MN__" \${sel==='__MN__'?'selected':''}>Manual entry (MN)</option>
    </optgroup>\`;
}
function cmOptionsForCode(code,selected){
  const entry=CODE_LIBRARY[code]; if(!entry) return '';
  return Object.keys(entry.tmu).map(Number).sort((a,b)=>a-b).map(cm=>\`<option value="\${cm}" \${cm==selected?'selected':''}>\${cm} cm</option>\`).join('');
}
function buildCodeDatalist(){
  const dl=$('dl_code');
  let html = \`<option value="MC">Machine sewing</option><option value="MN">Manual entry</option>\`;
  html += Object.keys(CODE_LIBRARY).map(k=>\`<option value="\${k}">\${escapeHtml(CODE_LIBRARY[k].desc)}</option>\`).join('');
  // Stitch codes (S<count>BT/BH/BS) are intentionally not suggested here — type them directly if needed.
  dl.innerHTML = html;
}
function cmDatalistOptions(code){
  const entry=CODE_LIBRARY[code]; if(!entry) return '';
  return Object.keys(entry.tmu).map(Number).sort((a,b)=>a-b).map(cm=>\`<option value="\${cm}">\${cm} cm</option>\`).join('');
}
function codeDisplayValue(el){
  if(el.type==='sew') return 'S'+(el.cm||0)+(el.tension||'N')+(el.stop||'A');
  if(el.type==='mn') return el.cm ? 'MN'+el.cm : 'MN';
  if(el.type==='imp') return el.code||'';
  if(el.type==='by') return el.cm ? 'BY'+el.cm : 'BY';
  if(el.type==='z') return el.cm ? 'Z'+el.cm : 'Z';
  if(el.type==='y') return el.cm ? 'Y'+el.cm : 'Y';
  return el.cm ? el.code+el.cm : el.code;
}
function matchCode(raw){
  const v=(raw||'').trim().toUpperCase();
  if(!v) return null;
  const sewMatch=v.match(/^S(\\d+(?:\\.\\d+)?)([NLMH])([ABC])$/);
  if(sewMatch) return {type:'sew', cm:Number(sewMatch[1]), tension:sewMatch[2], stop:sewMatch[3]};
  const sewMatchOld=v.match(/^S([NLMH])([ABC])(\\d+(?:\\.\\d+)?)$/);
  if(sewMatchOld) return {type:'sew', tension:sewMatchOld[1], stop:sewMatchOld[2], cm:Number(sewMatchOld[3])};
  if(v==='MC'||v==='SEW') return {type:'sew'};
  if(v==='MN') return {type:'mn'};
  const mnMatch=v.match(/^MN(\\d+(?:\\.\\d+)?)$/);
  if(mnMatch) return {type:'mn', cm:Number(mnMatch[1])};
  const byMatch=v.match(/^BY(\\d+(?:\\.\\d+)?)$/);
  if(byMatch) return {type:'by', cm:Number(byMatch[1])};
  const zMatch=v.match(/^Z(\\d+(?:\\.\\d+)?)$/);
  if(zMatch) return {type:'z', cm:Number(zMatch[1])};
  const yMatch=v.match(/^Y(\\d+(?:\\.\\d+)?)$/);
  if(yMatch) return {type:'y', cm:Number(yMatch[1])};
  if(parseStitchCode(v)) return {type:'lib', code:v};
  if(CODE_LIBRARY[v]) return {type:'lib', code:v};
  const libMatch=v.match(/^([A-Z]+)(\\d+(?:\\.\\d+)?)$/);
  if(libMatch && CODE_LIBRARY[libMatch[1]]) return {type:'lib', code:libMatch[1], cm:Number(libMatch[2])};
  return null;
}
function machineReady(op){
  return !!(op && op.mctype && Number(op.rpm)>0 && Number(op.stitchespercm)>0);
}
function codeNeedsMachine(m){
  return m.type==='sew' || (m.type==='lib' && !!parseStitchCode(m.code));
}
function matchTension(raw){
  const v=(raw||'').trim().toUpperCase();
  if(!v) return null;
  if(TENSION[v]) return v;
  const found=Object.entries(TENSION).find(([k,val])=>val.label.toUpperCase()===v);
  return found?found[0]:null;
}
function matchStop(raw){
  const v=(raw||'').trim().toUpperCase();
  if(!v) return null;
  if(STOP[v]) return v;
  const found=Object.entries(STOP).find(([k,val])=>val.label.toUpperCase()===v);
  return found?found[0]:null;
}
function focusRowField(kind, idx){
  const tbody=$('elBody'); const rows=tbody.querySelectorAll('tr'); const row=rows[idx];
  if(!row) return;
  const target=row.querySelector('.el-'+kind) || row.querySelector('.el-code') || row.querySelector('.el-type-new');
  if(target){ target.focus(); if(target.select) target.select(); }
}
function newElement(type){ return {id:uid('el_'),type:type||'lib',code:'',tension:'N',stop:'A',cm:0,freq:1,note:''}; }
function initColResize(tableId){
  const table=$(tableId||'bolElTable'); if(!table) return;
  let th=null,startX=0,startWidth=0;
  table.querySelectorAll('thead .col-resizer').forEach(grip=>{
    grip.addEventListener('mousedown',e=>{
      th=grip.closest('th'); startX=e.clientX; startWidth=th.offsetWidth;
      grip.classList.add('resizing');
      document.addEventListener('mousemove',onMove);
      document.addEventListener('mouseup',onUp);
      e.preventDefault();
    });
  });
  function onMove(e){
    if(!th) return;
    const w=Math.max(28,startWidth+(e.clientX-startX));
    th.style.width=w+'px';
  }
  function onUp(){
    if(th){ const grip=th.querySelector('.col-resizer'); if(grip) grip.classList.remove('resizing'); }
    th=null;
    document.removeEventListener('mousemove',onMove);
    document.removeEventListener('mouseup',onUp);
  }
}
const BOL_ROWS = 100;
let elClipboard=null;
let elSelectedIds=new Set();
let elLastAnchorId=null;
function updateBulkBar(op){
  const bar=$('elBulkBar');
  const n=elSelectedIds.size;
  bar.classList.toggle('hidden', n===0);
  $('elBulkCount').textContent = n+' selected';
  $('elBulkPaste').disabled = !elClipboard;
}
function markRowActive(op, tr, el){
  $('elBody').querySelectorAll('tr.el-row-selected').forEach(r=>r.classList.remove('el-row-selected'));
  tr.classList.add('el-row-selected');
  elSelectedIds = new Set([el.id]);
  elLastAnchorId = el.id;
  updateBulkBar(op);
}
function selectRow(op, el, idx, shiftKey){
  if(shiftKey && elLastAnchorId){
    const ids=op.elements.map(x=>x.id);
    const a=ids.indexOf(elLastAnchorId), b=idx;
    if(a>-1){
      const [lo,hi]=a<b?[a,b]:[b,a];
      elSelectedIds=new Set(ids.slice(lo,hi+1));
    }
  } else {
    if(elSelectedIds.has(el.id) && elSelectedIds.size===1){ elSelectedIds.clear(); }
    else { elSelectedIds=new Set([el.id]); }
    elLastAnchorId=el.id;
  }
  renderElements(op);
}
function toggleRowChk(op, el, idx, shiftKey){
  if(shiftKey && elLastAnchorId){ selectRow(op, el, idx, true); return; }
  if(elSelectedIds.has(el.id)) elSelectedIds.delete(el.id);
  else { elSelectedIds.add(el.id); elLastAnchorId=el.id; }
  renderElements(op);
}
function renderElements(op){
  const tbody=$('elBody'); tbody.innerHTML='';
  op.elements.forEach((el,idx)=>{
    const tr=document.createElement('tr');
    if(elSelectedIds.has(el.id)) tr.classList.add('el-row-selected');
    const codeCell=\`<input type="text" class="el-code" list="dl_code" value="\${escapeHtml(codeDisplayValue(el))}" autocomplete="off" placeholder="e.g. SLA10, MG2T, MN">\`;
    const tmu = elementTMU(el,op);
    const manualOut = !isMachineElement(el) ? tmu.toFixed(1) : '';
    const machineOut = isMachineElement(el) ? tmu.toFixed(1) : '';
    tr.innerHTML=\`
      <td class="mono el-ln-del" title="Click to select this row" style="cursor:pointer;">\${idx+1}</td>
      <td>\${codeCell}</td>
      <td><input type="number" step="1" class="el-freq" value="\${el.freq}"></td>
      <td><input type="text" class="el-title" value="\${escapeHtml(el.note||'')}" placeholder="\${escapeHtml(elementDesc(el))}" autocomplete="off"></td>
      <td class="center mono el-tmu-manual">\${manualOut}</td>
      <td class="center mono el-tmu-machine">\${machineOut}</td>
      <td class="center mono el-tmu-out">\${tmu.toFixed(1)}</td>\`;
    tbody.appendChild(tr);
    tr.addEventListener('click',e=>{
      if(e.target.closest('select,input,button')) return;
      selectRow(op, el, idx, e.shiftKey);
    });
    function commitCode(inputEl, moveNext){
      const m=matchCode(inputEl.value);
      if(m){
        if(codeNeedsMachine(m) && !machineReady(op)){
          showToast('Set Machine Setting (Machine Type, RPM, Stitches/cm) first');
          inputEl.value = codeDisplayValue(el);
          return;
        }
        if(m.type==='sew'){
          el.type='sew';
          el.tension = m.tension || el.tension || 'N';
          el.stop = m.stop || el.stop || 'A';
          el.cm = (m.cm!==undefined) ? m.cm : (el.cm||0);
        }
        else if(m.type==='mn'){ el.type='mn'; el.cm = (m.cm!==undefined) ? m.cm : (el.cm||0); }
        else if(m.type==='by'){ el.type='by'; el.cm = (m.cm!==undefined) ? m.cm : (el.cm||0); }
        else if(m.type==='z'){ el.type='z'; el.cm = (m.cm!==undefined) ? m.cm : (el.cm||0); }
        else if(m.type==='y'){ el.type='y'; el.cm = (m.cm!==undefined) ? m.cm : (el.cm||0); }
        else { el.type='lib'; el.code=m.code;
          if(parseStitchCode(m.code)){ el.cm=0; }
          else { const keys=Object.keys(CODE_LIBRARY[m.code].tmu).map(Number);
            if(m.cm!==undefined && keys.includes(m.cm)) el.cm=m.cm;
            else if(!keys.includes(Number(el.cm))) el.cm=keys[0]; } }
        renderElements(op); updateOpTotals(op); bolPersist(op);
        if(moveNext) focusRowField('code', idx+1);
      } else if(inputEl.value.trim()!==''){
        showToast('Unknown code — check spelling');
      }
    }
    function commitCm(inputEl, moveNext){
      const entry=CODE_LIBRARY[el.code]; const num=Number(inputEl.value);
      if(entry && entry.tmu[num]!==undefined){ el.cm=num; refreshRow(tr,el,op); bolPersist(op); if(moveNext) focusRowField('cm', idx+1); }
      else if(inputEl.value.trim()!==''){ showToast('Not a valid length for this code'); }
    }
    function commitFreq(inputEl, moveNext){
      el.freq=Number(inputEl.value)||0; refreshRow(tr,el,op); bolPersist(op);
      if(moveNext) focusRowField('freq', idx+1);
    }
    function commitTitle(inputEl, moveNext){
      el.note=inputEl.value; bolPersist(op);
      if(moveNext) focusRowField('code', idx+1);
    }
    const codeInp=tr.querySelector('.el-code');
    codeInp.addEventListener('mousedown',()=>markRowActive(op, tr, el));
    codeInp.addEventListener('change',e=>commitCode(e.target,false));
    codeInp.addEventListener('keydown',e=>{ if(e.key==='Enter'){ e.preventDefault(); commitCode(e.target,true); } });
    const freqInp=tr.querySelector('.el-freq');
    freqInp.addEventListener('mousedown',()=>markRowActive(op, tr, el));
    freqInp.addEventListener('input',e=>{ el.freq=Number(e.target.value); refreshRow(tr,el,op); bolPersist(op); });
    freqInp.addEventListener('keydown',e=>{ if(e.key==='Enter'){ e.preventDefault(); commitFreq(e.target,true); } });
    const titleInp=tr.querySelector('.el-title');
    titleInp.addEventListener('mousedown',()=>markRowActive(op, tr, el));
    titleInp.addEventListener('change',e=>commitTitle(e.target,false));
    titleInp.addEventListener('keydown',e=>{ if(e.key==='Enter'){ e.preventDefault(); commitTitle(e.target,true); } });
    if(bolIsLocked()){ tr.querySelectorAll('select,input,button').forEach(e=>e.disabled=true); }
  });
  updateBulkBar(op);
  const blanks = Math.max(0, BOL_ROWS - op.elements.length);
  for(let i=0;i<blanks;i++){
    const ln = op.elements.length + i + 1;
    const tr=document.createElement('tr'); tr.className='el-empty-row';
    tr.innerHTML = \`<td class="mono">\${ln}</td>
      <td><input type="text" class="el-type-new" list="dl_code" placeholder="+ Add code…" autocomplete="off"></td>
      <td colspan="5"></td>\`;
    const addInp=tr.querySelector('.el-type-new');
    let addCommitted=false;
    const commitAdd=()=>{
      if(bolIsLocked() || addCommitted) return;
      const m=matchCode(addInp.value);
      if(!m){ if(addInp.value.trim()!=='') showToast('Unknown code — check spelling'); return; }
      if(codeNeedsMachine(m) && !machineReady(op)){
        showToast('Set Machine Setting (Machine Type, RPM, Stitches/cm) first');
        addInp.value='';
        return;
      }
      addCommitted=true;
      let ne;
      if(m.type==='sew'){ ne=newElement('sew'); if(m.tension) ne.tension=m.tension; if(m.stop) ne.stop=m.stop; if(m.cm!==undefined) ne.cm=m.cm; }
      else if(m.type==='mn'){ ne=newElement('mn'); if(m.cm!==undefined) ne.cm=m.cm; }
      else if(m.type==='by'){ ne=newElement('by'); if(m.cm!==undefined) ne.cm=m.cm; }
      else if(m.type==='z'){ ne=newElement('z'); if(m.cm!==undefined) ne.cm=m.cm; }
      else if(m.type==='y'){ ne=newElement('y'); if(m.cm!==undefined) ne.cm=m.cm; }
      else { ne=newElement('lib'); ne.code=m.code;
        if(parseStitchCode(m.code)){ ne.cm=0; }
        else { const keys=Object.keys(CODE_LIBRARY[m.code].tmu).map(Number); ne.cm=(m.cm!==undefined&&keys.includes(m.cm))?m.cm:keys[0]; } }
      op.elements.push(ne);
      addInp.value='';
      renderElements(op); updateOpTotals(op); bolPersist(op);
      const nextAdd=$('elBody').querySelector('.el-type-new');
      if(nextAdd) nextAdd.focus();
    };
    addInp.addEventListener('keydown',e=>{ if(e.key==='Enter'){ e.preventDefault(); commitAdd(); } });
    addInp.addEventListener('change',commitAdd);
    addInp.addEventListener('blur',()=>{ addCommitted=false; });
    if(bolIsLocked()) addInp.disabled=true;
    tbody.appendChild(tr);
  }
}
function elSelectedIndices(op){
  return op.elements.map((el,i)=>elSelectedIds.has(el.id)?i:-1).filter(i=>i>=0).sort((a,b)=>a-b);
}
$('elBulkClear').addEventListener('click',()=>{
  elSelectedIds.clear(); elLastAnchorId=null;
  const op=bolTarget(); if(op) renderElements(op);
});
$('elBulkDelete').addEventListener('click',()=>{
  const op=bolTarget(); if(!op || bolIsLocked() || !elSelectedIds.size) return;
  op.elements=op.elements.filter(el=>!elSelectedIds.has(el.id));
  elSelectedIds.clear(); elLastAnchorId=null;
  renderElements(op); updateOpTotals(op); bolPersist(op);
  showToast('Rows deleted ✓');
});
$('elBulkCopy').addEventListener('click',()=>{
  const op=bolTarget(); if(!op || !elSelectedIds.size) return;
  const idxs=elSelectedIndices(op);
  elClipboard = idxs.map(i=>JSON.parse(JSON.stringify(op.elements[i])));
  updateBulkBar(op);
  showToast(idxs.length+' row(s) copied ✓');
});
$('elBulkCut').addEventListener('click',()=>{
  const op=bolTarget(); if(!op || bolIsLocked() || !elSelectedIds.size) return;
  const idxs=elSelectedIndices(op);
  elClipboard = idxs.map(i=>JSON.parse(JSON.stringify(op.elements[i])));
  op.elements=op.elements.filter(el=>!elSelectedIds.has(el.id));
  elSelectedIds.clear(); elLastAnchorId=null;
  renderElements(op); updateOpTotals(op); bolPersist(op);
  showToast(idxs.length+' row(s) cut — select a row then 📋 Paste ✓');
});
$('elBulkPaste').addEventListener('click',()=>{
  const op=bolTarget(); if(!op || bolIsLocked() || !elClipboard || !elClipboard.length) return;
  const idxs=elSelectedIndices(op);
  const insertAt = idxs.length ? idxs[idxs.length-1]+1 : op.elements.length;
  const copies = elClipboard.map(el=>{ const c=JSON.parse(JSON.stringify(el)); c.id=uid('el_'); return c; });
  op.elements.splice(insertAt, 0, ...copies);
  renderElements(op); updateOpTotals(op); bolPersist(op);
  showToast('Pasted ✓');
});
$('elBulkInsert').addEventListener('click',()=>{
  const op=bolTarget(); if(!op || bolIsLocked()) return;
  const idxs=elSelectedIndices(op);
  const insertAt = idxs.length ? idxs[idxs.length-1]+1 : op.elements.length;
  op.elements.splice(insertAt, 0, newElement('lib'));
  renderElements(op); updateOpTotals(op); bolPersist(op);
});
function refreshRow(tr,el,op){
  const titleInp=tr.querySelector('.el-title'); if(titleInp) titleInp.placeholder=elementDesc(el);
  const tmu=elementTMU(el,op);
  tr.querySelector('.el-tmu-out').textContent=tmu.toFixed(1);
  tr.querySelector('.el-tmu-manual').textContent = !isMachineElement(el) ? tmu.toFixed(1) : '';
  tr.querySelector('.el-tmu-machine').textContent = isMachineElement(el) ? tmu.toFixed(1) : '';
  updateOpTotals(op);
}
function updateOpTotals(op){
  const r=computeOp(op);
  $('t_manual').textContent=r.manualMin.toFixed(3); $('t_sewing').textContent=r.sewMin.toFixed(3);
  $('t_basic').textContent=r.basicMin.toFixed(3); $('t_smv').textContent=r.smv.toFixed(4);
  $('t_cap').textContent=r.capacity?Math.round(r.capacity):'—';
  if($('t_cm')) $('t_cm').textContent=r.sewLen.toFixed(1);
  if(bolMode==='macro'){
    const mc=op;
    const totalSmv=macroSmv(mc);
    if($('mclb_lines')) $('mclb_lines').textContent = macroLineCount(mc);
    if($('mclb_smv')) $('mclb_smv').textContent = totalSmv.toFixed(3);
    if($('mclb_cap')) $('mclb_cap').textContent = totalSmv>0?Math.round(60/totalSmv):'—';
    if($('mc_total')) $('mc_total').textContent = totalSmv.toFixed(3);
    if($('mc_res_smv')) $('mc_res_smv').textContent = totalSmv.toFixed(4);
    if($('mc_res_bundle_tmu')) $('mc_res_bundle_tmu').textContent = r.bundleTmu.toFixed(1);
    if($('mc_res_manual_tmu')) $('mc_res_manual_tmu').textContent = r.manualTmu.toFixed(1);
    if($('mc_res_machine_tmu')) $('mc_res_machine_tmu').textContent = r.sewTmu.toFixed(1);
    if($('mc_res_nonmachine_pct')) $('mc_res_nonmachine_pct').textContent = r.nonMachinePct.toFixed(2);
    renderMcLauncherSummary(mc);
  } else {
    renderLauncherSummaries(op,r);
  }
}
function renderMcLauncherSummary(mc){
  if(!mc) return;
  if($('mc_lm_mctype')) $('mc_lm_mctype').textContent = mc.mctype || '—';
  if($('mc_lm_rpm')) $('mc_lm_rpm').textContent = mc.rpm || '—';
  if($('mc_lm_spc')) $('mc_lm_spc').textContent = mc.stitchespercm || '—';
}
['op_bundle_qty','op_allow_personal','op_allow_machine','op_allow_contingency'].forEach(id=>{
  $(id).addEventListener('input',()=>{
    const op=currentOp(); if(!op) return;
    op.bundleQty=Number($('op_bundle_qty').value)||1;
    op.allowPersonal=$('op_allow_personal').value;
    op.allowMachine=$('op_allow_machine').value;
    op.allowContingency=$('op_allow_contingency').value;
    updateOpTotals(op);
  });
});
function renderLauncherSummaries(op,r){
  if(!op) return;
  if(!r) r=computeOp(op);
  if($('lm_mctype')) $('lm_mctype').textContent = op.mctype || '—';
  if($('lm_rpm')) $('lm_rpm').textContent = op.rpm || '—';
  if($('lm_spc')) $('lm_spc').textContent = op.stitchespercm || '—';
  if($('lb_lines')) $('lb_lines').textContent = (op.elements||[]).length;
  if($('lb_smv')) $('lb_smv').textContent = r.smv.toFixed(4);
  if($('lb_cap')) $('lb_cap').textContent = r.capacity?Math.round(r.capacity):'—';
  if($('res_bundle_tmu')) $('res_bundle_tmu').textContent = r.bundleTmu.toFixed(1);
  if($('res_manual_tmu')) $('res_manual_tmu').textContent = r.manualTmu.toFixed(1);
  if($('res_machine_tmu')) $('res_machine_tmu').textContent = r.sewTmu.toFixed(1);
  if($('res_total_smv')) $('res_total_smv').textContent = r.smv.toFixed(4);
  if($('res_non_machine_pct')) $('res_non_machine_pct').textContent = r.nonMachinePct.toFixed(2);
}
function collectOpForm(op){
  op.code=$('op_code').value; op.description=$('op_description').value; op.attachments=$('op_attachments').value;
  op.title=$('op_title').value; op.fabric=$('op_fabric').value;
  op.notes=$('op_notes').value;
  op.mctype=$('op_mctype').value; op.seamtype=$('op_seamtype').value; op.skill=$('op_skill').value;
  op.stitchespercm=$('op_stitchespercm').value; op.rpm=$('op_rpm').value;
  op.bundleQty=Number($('op_bundle_qty').value)||1; op.allowMachine=$('op_allow_machine').value; op.allowPersonal=$('op_allow_personal').value; op.allowContingency=$('op_allow_contingency').value;
}
async function saveCurrentOp(silent){
  const op=currentOp(); if(!op) return false;
  collectOpForm(op);
  const v = validateOpCode(op);
  if(!v.ok){ alert(v.message); return false; }
  op.codeLocked = true;
  $('op_code').disabled = true;
  op.updatedAt = Date.now();
  touchRecent('op',op);
  if(!silent) showToast('Operation saved ✓');
  renderAudit(op); updateOpTotals(op);
  safeSet(keyFor('op',op.id), JSON.stringify(op)).catch(e=>console.error(e));
  return true;
}
function findFolderById(type, id){ return id ? (FOLDERS[type]||[]).find(f=>f.id===id) : null; }
function codeRangeCheck(code, startRange, endRange){
  if(!startRange || !endRange) return true;
  const cU=(code||'').trim().toUpperCase();
  const sU=startRange.trim().toUpperCase();
  const eU=endRange.trim().toUpperCase();
  const cm=cU.match(/^(.*?)(\\d+)$/), sm=sU.match(/^(.*?)(\\d+)$/), em=eU.match(/^(.*?)(\\d+)$/);
  if(!cm||!sm||!em) return cU>=sU && cU<=eU;
  if(cm[1]!==sm[1] || sm[1]!==em[1]) return false;
  const cn=Number(cm[2]), sn=Number(sm[2]), en=Number(em[2]);
  return cn>=sn && cn<=en;
}
function validateOpCode(op){
  const code=(op.code||'').trim();
  const name=(op.description||'').trim();
  if(name){
    const dupName = OPS.find(o=>o.id!==op.id && (o.description||'').trim().toUpperCase()===name.toUpperCase());
    if(dupName){
      return {ok:false, message:\`An operation named "\${name}" already exists. Please use a different name.\`};
    }
  }
  if(!code) return {ok:true};
  const folder = findFolderById('op', op.folderId);
  if(folder && folder.startRange && folder.endRange){
    if(!codeRangeCheck(code, folder.startRange, folder.endRange)){
      return {ok:false, message:\`Code "\${code}" is outside the allowed range for "\${folder.name}" (\${folder.startRange} – \${folder.endRange}). Please use a code within that range.\`};
    }
  }
  const dup = OPS.find(o=>o.id!==op.id && (o.code||'').trim().toUpperCase()===code.toUpperCase());
  if(dup){
    const dupFolder = findFolderById('op', dup.folderId);
    return {ok:false, message:\`Code "\${code}" is already used\${dupFolder?(' in "'+dupFolder.name+'"'):''}. Please use a different code.\`};
  }
  return {ok:true};
}
function validateOpCodeOnly(op){
  const code=(op.code||'').trim();
  if(!code) return {ok:true};
  const folder = findFolderById('op', op.folderId);
  if(folder && folder.startRange && folder.endRange){
    if(!codeRangeCheck(code, folder.startRange, folder.endRange)){
      return {ok:false, message:\`Code "\${code}" is outside the allowed range for "\${folder.name}" (\${folder.startRange} – \${folder.endRange}). Please use a code within that range.\`};
    }
  }
  const dup = OPS.find(o=>o.id!==op.id && (o.code||'').trim().toUpperCase()===code.toUpperCase());
  if(dup){
    const dupFolder = findFolderById('op', dup.folderId);
    return {ok:false, message:\`Code "\${code}" is already used\${dupFolder?(' in "'+dupFolder.name+'"'):''}. Please use a different code.\`};
  }
  return {ok:true};
}
$('op_code').addEventListener('blur',()=>{
  const op=currentOp(); if(!op) return;
  const code=$('op_code').value.trim();
  if(!code) return;
  const probe={...op, code};
  const v=validateOpCodeOnly(probe);
  if(!v.ok) alert(v.message);
});
$('op_description').addEventListener('blur',()=>{
  const op=currentOp(); if(!op) return;
  const name=$('op_description').value.trim();
  if(!name) return;
  const dupName = OPS.find(o=>o.id!==op.id && (o.description||'').trim().toUpperCase()===name.toUpperCase());
  if(dupName) alert(\`An operation named "\${name}" already exists. Please use a different name.\`);
});
/* Enter key moves focus: Title -> Description -> Fabric (Operation editor) */
$('op_title').addEventListener('keydown',e=>{ if(e.key==='Enter'){ e.preventDefault(); $('op_description').focus(); } });
$('op_description').addEventListener('keydown',e=>{ if(e.key==='Enter'){ e.preventDefault(); $('op_fabric').focus(); } });
/* Enter key moves focus: Title -> Description -> Fabric (Macro editor) */
$('mc_title').addEventListener('keydown',e=>{ if(e.key==='Enter'){ e.preventDefault(); $('mc_description').focus(); } });
$('mc_description').addEventListener('keydown',e=>{ if(e.key==='Enter'){ e.preventDefault(); $('mc_fabric').focus(); } });
$('opSave').addEventListener('click', debounceClick(async ()=>{ const ok=await saveCurrentOp(false); if(ok){ closeOpEditor(); goto('operations'); } }));
$('opToolbarSave').addEventListener('click', debounceClick(()=>saveCurrentOp(false)));
$('opToolbarBack').addEventListener('click',()=>{ closeOpEditor(); goto('operations'); });
$('opToolbarCheckOut').addEventListener('click', debounceClick(async ()=>{
  const op=currentOp(); if(!op) return;
  collectOpForm(op);
  const v=validateOpCode(op); if(!v.ok){ alert(v.message); return; }
  openCheckinModal('op',op,'checkout');
}));
/* =========================================================================
   USERS / LOGIN / ACCESS CONTROL
   ========================================================================= */
let CURRENT_USER='';           // display name used as "Modified By" in Check-In history
let USERS=[];                  // [{id, username, password, isAdmin, menuAccess:{dashboard,operations,macros,features,styles}, createdAt}]
let LOGGED_IN_USER=null;       // the full user record currently logged in
const MENU_LIST = [
  {key:'dashboard', label:'Dashboard'},
  {key:'operations', label:'Operations'},
  {key:'macros', label:'Macros'},
  {key:'features', label:'Features'},
  {key:'styles', label:'Styles'}
];
const EXTRA_PERMS = [
  {key:'manageFolders', label:'Manage Folders'},
  {key:'manageUsers', label:'Manage Users'}
];
const ALL_PERMS = MENU_LIST.concat(EXTRA_PERMS);
function initials(name){ const p=(name||'').trim().split(/\\s+/).filter(Boolean); return p.length? p.map(w=>w[0]).slice(0,2).join('').toUpperCase() : '?'; }
function updateUserBadge(){
  const el=$('userAvatar'); if(!el) return;
  el.title = (CURRENT_USER||'Unknown User')+' — My Profile / Logout';
  if(LOGGED_IN_USER && LOGGED_IN_USER.photo){
    el.style.backgroundImage = \`url(\${LOGGED_IN_USER.photo})\`;
    el.textContent='';
  } else {
    el.style.backgroundImage='none';
    el.textContent=initials(CURRENT_USER);
  }
}
async function loadUsers(){
  const raw = await safeGet('gsd2:users');
  try{ USERS = raw ? JSON.parse(raw) : []; }catch(e){ USERS = []; }
  if(!USERS.length){
    USERS = [{id:uid('u_'), username:'karthi', password:'karthi4478', isAdmin:true, protected:true, menuAccess:{}, createdAt:Date.now()}];
    await saveUsers();
  } else if(!USERS.some(u=>u.username==='karthi')){
    // Migrate any previously-saved default admin account to the fixed karthi/karthi4478 login
    const legacy = USERS.find(u=>u.isAdmin) || USERS[0];
    legacy.username='karthi'; legacy.password='karthi4478'; legacy.protected=true;
    await saveUsers();
  }
}
async function saveUsers(){ await safeSet('gsd2:users', JSON.stringify(USERS)); }
function userHasAccess(user, menuKey){
  if(!user) return false;
  if(user.isAdmin) return true;
  return !!(user.menuAccess && user.menuAccess[menuKey]);
}
function firstAllowedView(user){
  for(const m of MENU_LIST){ if(userHasAccess(user,m.key)) return m.key; }
  return 'dashboard';
}
function applyAccessToNav(){
  document.querySelectorAll('#mainTabs button').forEach(b=>{
    const allowed = userHasAccess(LOGGED_IN_USER, b.dataset.view);
    b.classList.toggle('hidden', !allowed);
  });
  if($('btnManageUsers')) $('btnManageUsers').classList.toggle('hidden', !userHasAccess(LOGGED_IN_USER,'manageUsers'));
  if($('btnFolderManager')) $('btnFolderManager').classList.toggle('hidden', !userHasAccess(LOGGED_IN_USER,'manageFolders'));
}
async function doLogin(username, password){
  const u = USERS.find(x=>x.username.toLowerCase()===String(username||'').trim().toLowerCase() && x.password===password);
  if(!u) return false;
  LOGGED_IN_USER = u;
  CURRENT_USER = u.username;
  await safeSet('gsd2:currentUser', CURRENT_USER);
  updateUserBadge();
  applyAccessToNav();
  return true;
}
function doLogout(){
  LOGGED_IN_USER=null; CURRENT_USER='';
  $('loginUsername').value=''; $('loginPassword').value='';
  $('loginError').classList.add('hidden');
  $('loginScreen').classList.add('show');
}
async function ensureCurrentUser(){
  await loadUsers();
  // No persisted session on purpose — every time the app is opened (or reopened
  // after being closed), the login screen must be shown again.
  $('loginScreen').classList.add('show');
  $('loginUsername').focus();
}
$('loginBtn').addEventListener('click', debounceClick(async ()=>{
  const username=$('loginUsername').value.trim(), password=$('loginPassword').value;
  if(!username || !password){ $('loginError').textContent='Enter your username and password.'; $('loginError').classList.remove('hidden'); return; }
  const ok = await doLogin(username,password);
  if(!ok){ $('loginError').textContent='Incorrect username or password.'; $('loginError').classList.remove('hidden'); return; }
  $('loginError').classList.add('hidden');
  $('loginScreen').classList.remove('show');
  goto(firstAllowedView(LOGGED_IN_USER));
}));
$('loginUsername').addEventListener('keydown',e=>{ if(e.key==='Enter'){ e.preventDefault(); $('loginPassword').focus(); } });
$('loginPassword').addEventListener('keydown',e=>{ if(e.key==='Enter') $('loginBtn').click(); });
$('loginPwToggle').addEventListener('click',()=>{
  const pw=$('loginPassword');
  const showing = pw.type==='text';
  pw.type = showing ? 'password' : 'text';
  $('loginPwToggle').textContent = showing ? '👁' : '🙈';
  $('loginPwToggle').setAttribute('aria-label', showing ? 'Show password' : 'Hide password');
  pw.focus();
});
if($('userAvatar')) $('userAvatar').addEventListener('click', e=>{
  e.stopPropagation();
  if(!LOGGED_IN_USER) return;
  $('avatarMenuName').textContent = LOGGED_IN_USER.username;
  $('avatarMenu').classList.toggle('show');
});
document.addEventListener('click', e=>{
  if(!e.target.closest('.avatar-wrap')) $('avatarMenu').classList.remove('show');
});
$('avatarMenuLogout').addEventListener('click', ()=>{
  $('avatarMenu').classList.remove('show');
  if(confirm(\`Log out \${LOGGED_IN_USER.username}?\`)) doLogout();
});
$('avatarMenuProfile').addEventListener('click', ()=>{
  $('avatarMenu').classList.remove('show');
  openMyProfileModal();
});

/* ---- My Profile modal (photo upload + change own password) ---- */
function refreshProfilePhotoPreview(){
  const el=$('profilePhotoPreview'); if(!el || !LOGGED_IN_USER) return;
  if(LOGGED_IN_USER.photo){ el.style.backgroundImage=\`url(\${LOGGED_IN_USER.photo})\`; el.textContent=''; }
  else { el.style.backgroundImage='none'; el.textContent=initials(LOGGED_IN_USER.username); }
}
function openMyProfileModal(){
  if(!LOGGED_IN_USER) return;
  $('profileUsernameView').value = LOGGED_IN_USER.username;
  refreshProfilePhotoPreview();
  $('pw_current').value=''; $('pw_new').value=''; $('pw_confirm').value='';
  $('pw_error').classList.add('hidden');
  $('myProfileBg').classList.add('show');
}
$('myProfileClose').addEventListener('click', ()=>{ $('myProfileBg').classList.remove('show'); });
$('myProfileDone').addEventListener('click', ()=>{ $('myProfileBg').classList.remove('show'); });
/* ---- Photo crop/adjust (pan + zoom on a canvas) ---- */
const cropState = {img:null, scale:1, minScale:1, offX:0, offY:0, dragging:false, lastX:0, lastY:0, target:'profile', shape:'circle'};
const CROP_SIZE = 280, CROP_OUTPUT = 320;
function cropDraw(){
  const canvas=$('cropCanvas'); if(!canvas || !cropState.img) return;
  const ctx=canvas.getContext('2d');
  ctx.clearRect(0,0,CROP_SIZE,CROP_SIZE);
  const iw=cropState.img.width*cropState.scale, ih=cropState.img.height*cropState.scale;
  const x = CROP_SIZE/2 - iw/2 + cropState.offX;
  const y = CROP_SIZE/2 - ih/2 + cropState.offY;
  ctx.drawImage(cropState.img, x, y, iw, ih);
  // dim everything outside the crop area
  ctx.save();
  ctx.fillStyle='rgba(20,26,36,.45)';
  ctx.beginPath();
  ctx.rect(0,0,CROP_SIZE,CROP_SIZE);
  if(cropState.shape==='circle'){
    ctx.arc(CROP_SIZE/2,CROP_SIZE/2,CROP_SIZE/2,0,Math.PI*2,true);
  } else {
    const m=18;
    ctx.rect(CROP_SIZE-m,m,-(CROP_SIZE-2*m),CROP_SIZE-2*m);
  }
  ctx.fill('evenodd');
  ctx.strokeStyle='#fff'; ctx.lineWidth=2;
  ctx.beginPath();
  if(cropState.shape==='circle'){ ctx.arc(CROP_SIZE/2,CROP_SIZE/2,CROP_SIZE/2-1,0,Math.PI*2); }
  else { const m=18; ctx.rect(m,m,CROP_SIZE-2*m,CROP_SIZE-2*m); }
  ctx.stroke();
  ctx.restore();
}
function clampOffsets(){
  const iw=cropState.img.width*cropState.scale, ih=cropState.img.height*cropState.scale;
  const maxX = Math.max(0,(iw-CROP_SIZE)/2), maxY = Math.max(0,(ih-CROP_SIZE)/2);
  cropState.offX = Math.max(-maxX, Math.min(maxX, cropState.offX));
  cropState.offY = Math.max(-maxY, Math.min(maxY, cropState.offY));
}
function openCropModal(dataUrl, target){
  cropState.target = target||'profile';
  cropState.shape = cropState.target==='style' ? 'square' : 'circle';
  const img = new Image();
  img.onload = ()=>{
    cropState.img=img; cropState.offX=0; cropState.offY=0;
    cropState.minScale = CROP_SIZE / Math.min(img.width, img.height);
    cropState.scale = cropState.minScale;
    $('cropZoom').min = cropState.minScale.toFixed(3);
    $('cropZoom').max = (cropState.minScale*4).toFixed(3);
    $('cropZoom').value = cropState.scale;
    cropDraw();
    $('cropPhotoBg').classList.add('show');
  };
  img.src = dataUrl;
}
function closeCropModal(){ $('cropPhotoBg').classList.remove('show'); cropState.img=null; }
const cropCanvasEl = document.getElementById('cropCanvas');
if(cropCanvasEl){
  cropCanvasEl.addEventListener('pointerdown', e=>{
    cropState.dragging=true; cropState.lastX=e.clientX; cropState.lastY=e.clientY;
    cropCanvasEl.style.cursor='grabbing'; cropCanvasEl.setPointerCapture(e.pointerId);
  });
  cropCanvasEl.addEventListener('pointermove', e=>{
    if(!cropState.dragging || !cropState.img) return;
    cropState.offX += (e.clientX-cropState.lastX);
    cropState.offY += (e.clientY-cropState.lastY);
    cropState.lastX=e.clientX; cropState.lastY=e.clientY;
    clampOffsets(); cropDraw();
  });
  ['pointerup','pointerleave'].forEach(ev=>cropCanvasEl.addEventListener(ev, ()=>{ cropState.dragging=false; cropCanvasEl.style.cursor='grab'; }));
}
$('cropZoom').addEventListener('input', e=>{
  if(!cropState.img) return;
  cropState.scale = Number(e.target.value);
  clampOffsets(); cropDraw();
});
$('cropPhotoClose').addEventListener('click', closeCropModal);
$('cropPhotoCancel').addEventListener('click', closeCropModal);
$('cropPhotoSave').addEventListener('click', async ()=>{
  if(!cropState.img) return;
  const out=document.createElement('canvas'); out.width=CROP_OUTPUT; out.height=CROP_OUTPUT;
  const octx=out.getContext('2d');
  const ratio = CROP_OUTPUT/CROP_SIZE;
  const iw=cropState.img.width*cropState.scale*ratio, ih=cropState.img.height*cropState.scale*ratio;
  const x = CROP_OUTPUT/2 - iw/2 + cropState.offX*ratio;
  const y = CROP_OUTPUT/2 - ih/2 + cropState.offY*ratio;
  octx.save();
  if(cropState.shape==='circle'){
    octx.beginPath(); octx.arc(CROP_OUTPUT/2,CROP_OUTPUT/2,CROP_OUTPUT/2,0,Math.PI*2); octx.clip();
  }
  octx.drawImage(cropState.img, x, y, iw, ih);
  octx.restore();
  const dataUrl = out.toDataURL('image/png', 0.92);

  if(cropState.target==='style'){
    const st=currentStyle(); if(!st){ closeCropModal(); return; }
    st.image = dataUrl;
    await persist('style',st);
    refreshStyleImagePreview(st);
    renderStylesList();
    closeCropModal();
    showToast('Style image updated ✓');
  } else {
    if(!LOGGED_IN_USER){ closeCropModal(); return; }
    LOGGED_IN_USER.photo = dataUrl;
    await saveUsers();
    refreshProfilePhotoPreview();
    updateUserBadge();
    closeCropModal();
    showToast('Profile photo updated ✓');
  }
});
$('profilePhotoFile').addEventListener('change', e=>{
  const f=e.target.files[0]; if(!f || !LOGGED_IN_USER) return;
  const reader=new FileReader();
  reader.onload = ()=>{ openCropModal(reader.result,'profile'); e.target.value=''; };
  reader.readAsDataURL(f);
});
$('st_image_file').addEventListener('change', e=>{
  const f=e.target.files[0]; if(!f) return;
  const reader=new FileReader();
  reader.onload = ()=>{ openCropModal(reader.result,'style'); e.target.value=''; };
  reader.readAsDataURL(f);
});
function refreshStyleImagePreview(st){
  const el=$('stImagePreview'); if(!el) return;
  if(st && st.image){ el.style.backgroundImage=\`url(\${st.image})\`; el.textContent=''; }
  else { el.style.backgroundImage='none'; el.textContent='No Image'; }
}
$('pw_save').addEventListener('click', debounceClick(async ()=>{
  if(!LOGGED_IN_USER) return;
  const cur=$('pw_current').value, next=$('pw_new').value, conf=$('pw_confirm').value;
  if(!cur || !next || !conf){ $('pw_error').textContent='Fill in all three fields.'; $('pw_error').classList.remove('hidden'); return; }
  if(cur!==LOGGED_IN_USER.password){ $('pw_error').textContent='Current password is incorrect.'; $('pw_error').classList.remove('hidden'); return; }
  if(next!==conf){ $('pw_error').textContent='New password and confirmation do not match.'; $('pw_error').classList.remove('hidden'); return; }
  LOGGED_IN_USER.previousPassword = LOGGED_IN_USER.password;
  LOGGED_IN_USER.password = next;
  await saveUsers();
  $('pw_error').classList.add('hidden');
  $('pw_current').value=''; $('pw_new').value=''; $('pw_confirm').value='';
  showToast('Password updated ✓');
}));

/* ---- Manage Users modal ---- */
let editingUserId=null;
function resetUserForm(){
  editingUserId=null;
  $('nu_username').value=''; $('nu_password').value=''; $('nu_isAdmin').checked=false;
  document.querySelectorAll('.nu-menu').forEach(cb=>cb.checked=false);
  $('nu_error').classList.add('hidden');
  $('nu_panelTitle').textContent='+ Create New User';
  $('nu_create').textContent='+ Create User';
  $('nu_cancelEdit').classList.add('hidden');
}
function startEditUser(u){
  editingUserId=u.id;
  $('nu_username').value=u.username; $('nu_password').value=u.password; $('nu_isAdmin').checked=!!u.isAdmin;
  document.querySelectorAll('.nu-menu').forEach(cb=>{ cb.checked = !!(u.menuAccess && u.menuAccess[cb.value]); });
  $('nu_error').classList.add('hidden');
  $('nu_panelTitle').textContent='✎ Edit User — '+u.username;
  $('nu_create').textContent='Save Changes';
  $('nu_cancelEdit').classList.remove('hidden');
  $('nu_username').scrollIntoView({behavior:'smooth', block:'center'});
}
function renderUsersList(){
  $('uc_count').textContent = USERS.length;
  $('usersListBody').innerHTML = USERS.map(u=>{
    const isMe = LOGGED_IN_USER && u.id===LOGGED_IN_USER.id;
    const menus = u.isAdmin ? 'Full access to every menu' : (ALL_PERMS.filter(m=>userHasAccess(u,m.key)).map(m=>m.label).join(', ') || 'No menu access assigned');
    return \`<div class="user-row" data-uid="\${u.id}">
      <div class="u-head">
        <b>\${escapeHtml(u.username)}</b>
        \${u.isAdmin?'<span class="pill pill-admin">ADMIN</span>':''}
        \${isMe?'<span class="muted" style="font-size:11px;">(you)</span>':''}
        <div style="flex:1;"></div>
        \${u.protected ? '<span class="muted" style="font-size:11px;">🔒 Fixed account</span>' : \`<button class="ghost small u-edit">✎ Edit</button>\${(!u.isAdmin || USERS.filter(x=>x.isAdmin).length>1) ? \`<button class="ghost small u-delete">✕</button>\` : ''}\`}
      </div>
      <div class="u-pw">Password: <input type="text" value="\${escapeHtml(u.password)}" readonly></div>
      \${u.previousPassword ? \`<div class="u-pw" style="opacity:.7;">Last Password: <input type="text" value="\${escapeHtml(u.previousPassword)}" readonly></div>\` : ''}
      <div class="u-caption">\${escapeHtml(menus)}</div>
    </div>\`;
  }).join('');
  $('usersListBody').querySelectorAll('.u-edit').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const row=btn.closest('.user-row'); const uid=row.dataset.uid;
      const u=USERS.find(x=>x.id===uid); if(!u) return;
      startEditUser(u);
    });
  });
  $('usersListBody').querySelectorAll('.u-delete').forEach(btn=>{
    btn.addEventListener('click', async ()=>{
      const row=btn.closest('.user-row'); const uid=row.dataset.uid;
      const u=USERS.find(x=>x.id===uid); if(!u) return;
      if(!confirm(\`Delete user "\${u.username}"?\`)) return;
      USERS = USERS.filter(x=>x.id!==uid);
      await saveUsers();
      if(editingUserId===uid) resetUserForm();
      renderUsersList();
      showToast('User deleted');
    });
  });
}
function openManageUsersModal(){
  resetUserForm();
  renderUsersList();
  $('manageUsersBg').classList.add('show');
}
if($('btnManageUsers')) $('btnManageUsers').addEventListener('click', openManageUsersModal);
$('manageUsersClose').addEventListener('click', ()=>{ $('manageUsersBg').classList.remove('show'); });
$('manageUsersDone').addEventListener('click', ()=>{ $('manageUsersBg').classList.remove('show'); });
$('nu_cancelEdit').addEventListener('click', resetUserForm);
$('nu_create').addEventListener('click', debounceClick(async ()=>{
  const username=$('nu_username').value.trim();
  const password=$('nu_password').value;
  const isAdmin=$('nu_isAdmin').checked;
  if(!username || !password){ $('nu_error').textContent='Username and password are required.'; $('nu_error').classList.remove('hidden'); return; }
  const dupe = USERS.find(x=>x.username.toLowerCase()===username.toLowerCase() && x.id!==editingUserId);
  if(dupe){ $('nu_error').textContent='That username already exists.'; $('nu_error').classList.remove('hidden'); return; }
  const menuAccess={};
  document.querySelectorAll('.nu-menu').forEach(cb=>{ menuAccess[cb.value]=cb.checked; });

  if(editingUserId){
    const u = USERS.find(x=>x.id===editingUserId);
    if(!u){ resetUserForm(); renderUsersList(); return; }
    if(password!==u.password) u.previousPassword = u.password;
    u.username=username; u.password=password; u.isAdmin=isAdmin; u.menuAccess=menuAccess;
    await saveUsers();
    if(LOGGED_IN_USER && LOGGED_IN_USER.id===u.id){ LOGGED_IN_USER=u; CURRENT_USER=u.username; updateUserBadge(); applyAccessToNav(); }
    resetUserForm();
    renderUsersList();
    showToast('User updated ✓');
  } else {
    const u={id:uid('u_'), username, password, isAdmin, menuAccess, createdAt:Date.now()};
    USERS.push(u); await saveUsers();
    resetUserForm();
    renderUsersList();
    showToast('User created ✓');
  }
}));

/* =========================================================================
   CHECK-IN NOTES MODAL (works for Operations and Macros)
   ========================================================================= */
const CHECKIN_KINDS = {
  op:{
    getCurrent:()=>currentOp(),
    smv:op=>computeOp(op).smv,
    afterApply:(op,locked)=>{ $('op_status').value=op.status; renderAudit(op); updateOpTotals(op); applyOpLock(!!locked); }
  },
  macro:{
    getCurrent:()=>currentMacro(),
    smv:mc=>macroSmv(mc),
    afterApply:(mc,locked)=>{ $('mc_status').value=mc.status; renderMcAudit(mc); renderMacroItems(mc); applyMcLock(!!locked); }
  },
  style:{
    getCurrent:()=>currentStyle(),
    smv:st=>styleSmv(st),
    afterApply:(st,locked)=>{ $('st_status').value=st.status; renderStAudit(st); renderStyleItems(st); applyStLock(!!locked); }
  }
};
let ciPending=[]; let checkinKind='op'; let checkinAction='checkout';
function openCheckinModal(kind,item,action){
  checkinKind=kind;
  checkinAction = action || 'checkout';
  const codeLabel = kind==='style' ? (item.header&&item.header.styleNo) : item.code;
  $('checkinTitle').textContent=(codeLabel||'Untitled')+' : Notes';
  ciPending=[];
  $('ci_select_item').value=''; $('ci_note_text').value='';
  renderCiPending();
  renderCheckinHistory(item);
  $('checkinBg').classList.add('show');
}
function closeCheckinModal(){ $('checkinBg').classList.remove('show'); }
function renderCiPending(){
  const wrap=$('ci_pending_wrap'), list=$('ci_pending_list');
  if(!ciPending.length){ wrap.classList.add('hidden'); list.innerHTML=''; return; }
  wrap.classList.remove('hidden');
  list.innerHTML = ciPending.map((n,i)=>\`<span class="tmu-badge">\${escapeHtml(n)} <b style="cursor:pointer;margin-left:4px;" data-cidel="\${i}">✕</b></span>\`).join('');
  list.querySelectorAll('[data-cidel]').forEach(b=>b.addEventListener('click',()=>{ ciPending.splice(Number(b.dataset.cidel),1); renderCiPending(); }));
}
$('ci_add_btn').addEventListener('click',()=>{
  const sel=$('ci_select_item').value, txt=$('ci_note_text').value.trim();
  const note=[sel,txt].filter(Boolean).join(' — ');
  if(!note) return;
  ciPending.push(note);
  $('ci_select_item').value=''; $('ci_note_text').value='';
  renderCiPending();
});
function renderCheckinHistory(item){
  const rows=(item.checkinHistory||[]).slice().sort((a,b)=>b.date-a.date);
  const body=$('checkinHistoryBody');
  if(!rows.length){ body.innerHTML='<tr><td colspan="4" class="muted" style="text-align:center;padding:14px 0;">No check-in history yet.</td></tr>'; return; }
  body.innerHTML = rows.map(r=>\`<tr><td>\${fmtDateTime(r.date)}</td><td>\${escapeHtml(r.user||'—')}</td><td>\${escapeHtml(r.notes||'—')}</td><td style="text-align:right;">\${(r.smv||0).toFixed(4)}</td></tr>\`).join('');
}
$('checkinClose').addEventListener('click', closeCheckinModal);
$('checkinCancel').addEventListener('click', closeCheckinModal);
$('checkinApply').addEventListener('click', debounceClick(async ()=>{
  const cfg=CHECKIN_KINDS[checkinKind];
  const item=cfg.getCurrent(); if(!item) return;
  const sel=$('ci_select_item').value, txt=$('ci_note_text').value.trim();
  const trailing=[sel,txt].filter(Boolean).join(' — ');
  if(trailing) ciPending.push(trailing);
  const noteText = ciPending.length ? ciPending.join('; ') : '(no notes)';
  const smv=cfg.smv(item);
  item.checkinHistory = item.checkinHistory || [];
  item.checkinHistory.push({date:Date.now(), user:CURRENT_USER||'Unknown User', notes:noteText, smv});
  item.status = checkinAction==='checkout' ? 'Checked Out' : 'Checked In';
  await persist(checkinKind,item);
  cfg.afterApply(item, checkinAction==='checkout');
  closeCheckinModal();
  showToast(checkinAction==='checkout' ? 'Checked out — logged ✓' : 'Checked in ✓');
}));
$('opToolbarCheckIn').addEventListener('click', debounceClick(async ()=>{
  const op=currentOp(); if(!op) return;
  op.status='Checked In'; $('op_status').value=op.status; await persist('op',op);
  applyOpLock(false); showToast('Checked in ✓');
}));
$('opToolbarSaveAs').addEventListener('click', debounceClick(async ()=>{
  const op=currentOp(); if(!op) return;
  if(op.status!=='Checked In'){ alert('Save As is only available after this Operation has been Checked In.'); return; }
  openSaveAsPicker('op');
}));
$('opToolbarNotes').addEventListener('click',()=>{ $('opNotesPanel').classList.toggle('hidden'); });

function computeOpResults(op, pPersonal, pMachine, pContingency){
  const r = computeOp(op);
  const P = (Number(pPersonal)||0)/100;
  const M = (Number(pMachine)||0)/100;
  const C = (Number(pContingency)||0)/100;
  const rowDefs = [
    {label:'Manual', basic:r.manualMin, hasDelay:false},
    {label:'Machine', basic:r.sewMin, hasDelay:true},
    {label:'Bundle (Bill of Labour)', basic:r.bundleMin, hasDelay:false},
  ];
  let totBasic=0, totPA=0, totDelay=0, totTotal=0, totC=0;
  const rows = rowDefs.map(row=>{
    const pa = row.basic*P;
    const delay = row.hasDelay ? row.basic*M : null;
    const total = row.basic + pa + (delay||0);
    const c = total*C;
    totBasic+=row.basic; totPA+=pa; totDelay+=(delay||0); totTotal+=total; totC+=c;
    return {label:row.label, tmu:row.basic*2000, basic:row.basic, pa, delay, total, c};
  });
  const smv = totTotal + totC;
  const nonMachinePct = totBasic>0 ? ((r.manualMin+r.bundleMin)/totBasic*100) : 0;
  return {rows, totals:{tmu:totBasic*2000, basic:totBasic, pa:totPA, delay:totDelay, total:totTotal, c:totC, smv}, nonMachinePct};
}
const resultState={capPct:100};
function renderResultTables(op){
  const pPersonal=$('res_allow_personal').value, pMachine=$('res_allow_machine').value, pContingency=$('res_allow_contingency').value;
  const res = computeOpResults(op, pPersonal, pMachine, pContingency);
  const rowsHtml = res.rows.map(row=>\`
    <tr><td>\${escapeHtml(row.label)}</td><td class="right mono">\${row.tmu.toFixed(1)}</td><td class="right mono">\${row.basic.toFixed(4)}</td>
    <td class="right mono">\${row.pa.toFixed(4)}</td><td class="right mono">\${row.delay===null?'N/A':row.delay.toFixed(4)}</td>
    <td class="right mono">\${row.total.toFixed(4)}</td><td class="right mono">\${row.c.toFixed(4)}</td>
    <td class="right mono"></td><td class="right mono"></td></tr>\`).join('');
  const t=res.totals;
  const totalsHtml = \`<tr class="result-totals"><td>Totals</td><td class="right mono">\${t.tmu.toFixed(1)}</td><td class="right mono">\${t.basic.toFixed(4)}</td>
    <td class="right mono">\${t.pa.toFixed(4)}</td><td class="right mono">\${t.delay.toFixed(4)}</td>
    <td class="right mono">\${t.total.toFixed(4)}</td><td class="right mono">\${t.c.toFixed(4)}</td>
    <td class="right mono">\${t.smv.toFixed(4)}</td><td class="right mono">0.0000</td></tr>\`;
  $('resultTimeCostTable').innerHTML = \`<thead><tr><th style="text-align:left;"></th><th>TMU</th><th>Basic Minute</th><th>(PA)</th><th>(Delay)</th><th>Total</th><th>(C)</th><th>SMV</th><th>Cost</th></tr></thead><tbody>\${rowsHtml}\${totalsHtml}</tbody>\`;

  const hourBase = t.smv>0?60/t.smv:0;
  const hourAdj = hourBase*(resultState.capPct/100);
  $('resultCapacityTable').innerHTML = \`<thead><tr><th style="text-align:left;"></th><th>@ 100 %</th><th>@ % of 100</th></tr></thead>
    <tbody>
      <tr><td>%</td><td class="right mono">100</td><td class="right"><input type="number" step="0.01" id="res_capacity_pct" value="\${resultState.capPct.toFixed(2)}"></td></tr>
      <tr><td>Allowed Time</td><td class="right mono">\${t.smv.toFixed(4)}</td><td class="right mono">\${t.smv.toFixed(4)}</td></tr>
      <tr><td>Hour</td><td class="right mono">\${hourBase?Math.round(hourBase):'—'}</td><td class="right mono">\${hourAdj?Math.round(hourAdj):'—'}</td></tr>
    </tbody>\`;
  const capInp=$('res_capacity_pct');
  capInp.addEventListener('keydown',e=>{
    if(e.key==='Enter'){ e.preventDefault(); resultState.capPct=Number(capInp.value)||0; renderResultTables(op); }
  });
  capInp.addEventListener('blur',()=>{ resultState.capPct=Number(capInp.value)||0; renderResultTables(op); });
  $('res_nonmachine').value = res.nonMachinePct.toFixed(2);
}
function openResultModal(op){
  $('resultTitle').textContent = (op.code||'Untitled')+' : Results';
  $('res_allow_personal').value = op.allowPersonal||0;
  $('res_allow_machine').value = op.allowMachine||0;
  $('res_allow_contingency').value = op.allowContingency||0;
  resultState.capPct = 100;
  renderResultTables(op);
  $('resultBg').classList.add('show');
}
['res_allow_personal','res_allow_machine','res_allow_contingency'].forEach(id=>{
  $(id).addEventListener('input',()=>{ const op=currentOp(); if(op) renderResultTables(op); });
});
$('opToolbarResult').addEventListener('click',()=>{
  const op=currentOp(); if(!op) return;
  openResultModal(op);
});
$('resultClose').addEventListener('click',()=>{ $('resultBg').classList.remove('show'); });
$('resultCancel').addEventListener('click',()=>{ $('resultBg').classList.remove('show'); });
$('resultApply').addEventListener('click',()=>{
  const op=currentOp(); if(!op) return;
  op.allowPersonal=$('res_allow_personal').value;
  op.allowMachine=$('res_allow_machine').value;
  op.allowContingency=$('res_allow_contingency').value;
  if($('op_allow_machine')) $('op_allow_machine').value=op.allowMachine;
  if($('op_allow_personal')) $('op_allow_personal').value=op.allowPersonal;
  if($('op_allow_contingency')) $('op_allow_contingency').value=op.allowContingency;
  persist('op',op);
  updateOpTotals(op);
  $('resultBg').classList.remove('show');
  showToast('Results applied ✓');
});
function opSheetHtml(op){
  const r = computeOp(op);
  const nonMachinePct = r.nonMachinePct.toFixed(2);
  const elRows = (op.elements||[]).map((el,i)=>{
    const codeLabel = el.type==='sew' ? 'Machine sewing (MC)' : (el.type==='mn' ? 'Manual entry (MN)' : (el.type==='by' ? 'Bundle handling (BY)' : (el.type==='z' ? 'Machine element (Z)' : (el.type==='y' ? 'Manual element (Y)' : \`\${el.code} — \${(CODE_LIBRARY[el.code]||{}).desc||''}\`))));
    return \`<tr><td>\${i+1}</td><td>\${escapeHtml(codeLabel)}</td><td>\${escapeHtml(el.note||elementDesc(el))}</td><td class="right">\${el.freq}</td><td class="right">\${elementTMU(el,op).toFixed(1)}</td></tr>\`;
  }).join('') || \`<tr><td colspan="5" style="text-align:center;color:#777;">No elements added</td></tr>\`;
  return \`<h2>\${escapeHtml(op.code||'Untitled')} — \${escapeHtml(op.description||'Operation')}</h2>
    <div class="pmeta">Generated \${new Date().toLocaleString()}</div>
    <table style="margin-bottom:14px;"><tbody>
      <tr><td><b>Code</b></td><td>\${escapeHtml(op.code||'—')}</td><td><b>Title</b></td><td>\${escapeHtml(op.title||'—')}</td></tr>
      <tr><td><b>Description</b></td><td>\${escapeHtml(op.description||'—')}</td><td><b>Status</b></td><td>\${escapeHtml(op.status||'Draft')}</td></tr>
      <tr><td><b>Fabric</b></td><td>\${escapeHtml(op.fabric||'—')}</td><td><b>Attachment Folder</b></td><td>\${escapeHtml(op.attachments||'—')}</td></tr>
      <tr><td><b>Machine Type</b></td><td>\${escapeHtml(op.mctype||'—')}</td><td><b>Seam Type</b></td><td>\${escapeHtml(op.seamtype||'—')}</td></tr>
      <tr><td><b>RPM</b></td><td>\${escapeHtml(String(op.rpm||'—'))}</td><td><b>Stitches/cm</b></td><td>\${escapeHtml(String(op.stitchespercm||'—'))}</td></tr>
      <tr><td><b>Machine/Personal/Contingency %</b></td><td colspan="3">\${op.allowMachine||0} / \${op.allowPersonal||0} / \${op.allowContingency||0}</td></tr>
      <tr><td><b>Bundle Qty (pcs)</b></td><td colspan="3">\${op.bundleQty||1}</td></tr>
    </tbody></table>
    <table style="margin-bottom:14px;"><thead><tr><th>Manual Min</th><th>Sewing Min</th><th>Basic Min</th><th>SMV</th><th>Capacity/hr</th><th>Non-Machine %</th></tr></thead>
    <tbody><tr class="right"><td class="right">\${r.manualMin.toFixed(3)}</td><td class="right">\${r.sewMin.toFixed(3)}</td><td class="right">\${r.basicMin.toFixed(3)}</td><td class="right">\${r.smv.toFixed(4)}</td><td class="right">\${r.capacity?Math.round(r.capacity):'—'}</td><td class="right">\${nonMachinePct}</td></tr></tbody></table>
    <table><thead><tr><th>Ln</th><th>Code</th><th>Title</th><th class="right">Freq</th><th class="right">Total TMU</th></tr></thead>
    <tbody>\${elRows}</tbody></table>\`;
}
/* ---- PDF export via the browser's native Print dialog: opens Print Preview,
   the person chooses "Save as PDF" (or their PDF printer) from there.
   No external libraries/network calls needed — works fully offline. ---- */
function printHtmlSheet(innerHtml, docTitle){
  const doc = \`<!DOCTYPE html><html><head><meta charset="UTF-8"><title>\${escapeHtml(docTitle)}</title>
<style>
  *{box-sizing:border-box;}
  body{font-family:Arial,Helvetica,sans-serif;color:#141a24;padding:24px;margin:0;}
  h2{margin:0 0 4px;}
  .pmeta{color:#555;font-size:10.5px;margin-bottom:14px;}
  table{width:100%;border-collapse:collapse;font-size:11px;margin-top:10px;}
  th,td{border:1px solid #999;padding:5px 7px;text-align:left;}
  th{background:#f1f3f7;}
  .right{text-align:right;}
</style></head><body>\${innerHtml}
<script>
  window.onload = function(){ setTimeout(function(){ window.focus(); window.print(); }, 150); };
<\\/script>
</body></html>\`;
  const win = window.open('', '_blank');
  if(win){
    win.document.open();
    win.document.write(doc);
    win.document.close();
    return;
  }
  // Popup blocked by the browser — fall back to printing this page directly.
  const area = $('printArea');
  if(!area){ alert('Could not open the print window — please allow pop-ups for this page and try again.'); return; }
  area.innerHTML = innerHtml;
  const prevTitle = document.title;
  document.title = docTitle;
  window.print();
  setTimeout(()=>{ document.title = prevTitle; }, 500);
}
function exportOpAsPdf(op){
  try{
    printHtmlSheet(opSheetHtml(op), (op.code||'operation')+'_sheet');
    return Promise.resolve();
  }catch(err){
    console.error('Print failed:', err);
    alert('Print failed: '+(err && err.message ? err.message : err));
    return Promise.reject(err);
  }
}
function exportOpAsXlsx(op){
  try{
    const html = \`<html><head><meta charset="UTF-8"></head><body>\${opSheetHtml(op)}</body></html>\`;
    downloadBlob((op.code||'operation')+'_sheet.xls', html, 'application/vnd.ms-excel');
    showToast('Excel downloaded ✓');
    return Promise.resolve();
  }catch(err){
    console.error('Export Excel failed:', err);
    alert('Export Excel failed: '+(err && err.message ? err.message : err));
    return Promise.reject(err);
  }
}
$('opToolbarExportXlsx').addEventListener('click',()=>{
  const op=currentOp(); if(!op) return;
  exportOpAsGsd(op);
});
$('bolExportPdf').addEventListener('click',()=>{
  if(bolMode==='macro'){ const mc=currentMacro(); if(mc) exportMacroAsPdf(mc); return; }
  const op=currentOp(); if(!op) return;
  exportOpAsPdf(op);
});
$('bolExportXlsx').addEventListener('click',()=>{
  if(bolMode==='macro'){ const mc=currentMacro(); if(mc) exportMacroAsGsd(mc); return; }
  const op=currentOp(); if(!op) return;
  exportOpAsGsd(op);
});
$('opToolbarPrint').addEventListener('click',()=>{
  const op=currentOp(); if(!op) return;
  exportOpAsPdf(op);
});
function scrollToPanel(id){ const el=$(id); if(el) el.scrollIntoView({behavior:'smooth',block:'start'}); }

/* ---- Machine Parameters — dedicated screen ---- */
let machineMode='op';
function machineTarget(){ return machineMode==='macro' ? currentMacro() : currentOp(); }
function openMachineScreen(mode){
  machineMode = mode||'op';
  const t=machineTarget(); if(!t) return;
  if(machineMode==='macro'){
    $('mch_opLabel').textContent = (t.code||'Untitled')+' — '+(t.name||'Macro');
    populateSelect($('op_mctype'),MC_TYPES,t.mctype,true);
    populateSelect($('op_seamtype'),SEAM_TYPES,t.seamtype);
    populateSelect($('op_skill'),SKILLS,t.skill);
    $('op_stitchespercm').value=t.stitchespercm||''; $('op_rpm').value=t.rpm||'';
    $('op_attachments').value=t.attachments||'';
    const locked = typeof mcLocked!=='undefined' ? mcLocked : false;
    ['op_mctype','op_seamtype','op_skill','op_stitchespercm','op_rpm','op_attachments'].forEach(id=>{ if($(id)) $(id).disabled=locked; });
  } else {
    $('mch_opLabel').textContent = (t.code||'Untitled')+' — '+(t.description||'Operation');
    populateSelect($('op_mctype'),MC_TYPES,t.mctype,true);
    populateSelect($('op_seamtype'),SEAM_TYPES,t.seamtype);
    populateSelect($('op_skill'),SKILLS,t.skill);
    $('op_stitchespercm').value=t.stitchespercm||''; $('op_rpm').value=t.rpm||'';
    $('op_attachments').value=t.attachments||'';
    const locked = typeof opLocked!=='undefined' ? opLocked : false;
    ['op_mctype','op_seamtype','op_skill','op_stitchespercm','op_rpm','op_attachments'].forEach(id=>{ if($(id)) $(id).disabled=locked; });
  }
  $('screenMachine').classList.add('show'); window.scrollTo(0,0);
}
function closeMachineScreen(){ $('screenMachine').classList.remove('show'); }
$('btnOpenMachine').addEventListener('click', ()=>openMachineScreen('op'));
$('btnOpenMcMachine').addEventListener('click', ()=>openMachineScreen('macro'));
$('mchSave').addEventListener('click', debounceClick(async ()=>{
  const t=machineTarget(); if(!t) return;
  if(machineMode==='macro'){
    t.mctype=$('op_mctype').value; t.seamtype=$('op_seamtype').value; t.skill=$('op_skill').value;
    t.stitchespercm=$('op_stitchespercm').value; t.rpm=$('op_rpm').value; t.attachments=$('op_attachments').value;
    renderMcLauncherSummary(t); renderMacroItems(t);
    closeMachineScreen(); showToast('Machine parameters saved ✓');
    persist('macro',t).catch(e=>console.error(e));
  } else {
    collectOpForm(t); updateOpTotals(t);
    closeMachineScreen(); showToast('Machine parameters saved ✓');
    persist('op',t).catch(e=>console.error(e));
  }
}));

/* ---- Bill of Labour — dedicated screen ---- */
function openBolScreen(){
  bolMode='op';
  const op=currentOp(); if(!op) return;
  $('bol_opLabel').textContent = (op.code||'Untitled')+' — '+(op.description||'Operation');
  renderElements(op); updateOpTotals(op);
  $('screenBol').classList.add('show'); window.scrollTo(0,0);
}
function closeBolScreen(){ $('screenBol').classList.remove('show'); }
$('btnOpenBol').addEventListener('click', openBolScreen);
$('bolSave').addEventListener('click', debounceClick(async ()=>{
  const target=bolTarget(); if(!target) return;
  updateOpTotals(target);
  closeBolScreen(); showToast('Bill of Labour saved ✓');
  bolPersist(target).catch(e=>console.error(e));
}));

$('opToolbarBol').addEventListener('click', openBolScreen);

/* =========================================================================
   MACROS
   ========================================================================= */
function renderMacrosList(){
  const body=$('macrosBody');
  const rows = getFilteredItems('macro');
  if(!rows.length){ $('macrosEmpty').classList.remove('hidden'); $('macrosTable').classList.add('hidden'); return; }
  $('macrosEmpty').classList.add('hidden'); $('macrosTable').classList.remove('hidden');
  body.innerHTML = rows.map(mc=>\`<tr>
    <td class="mono"><a href="#" class="op-code-link" data-open="\${mc.id}">\${escapeHtml(mc.code||'—')}</a></td><td><b>\${escapeHtml(mc.name||'Untitled')}</b></td>
    <td class="right mono">\${(mc.items||[]).length}</td><td class="right mono"><b>\${macroSmv(mc).toFixed(3)}</b></td></tr>\`).join('');
  body.querySelectorAll('[data-open]').forEach(a=>a.addEventListener('click',e=>{ e.preventDefault(); openMacroEditor(a.dataset.open); }));
}
$('btnNewMacro').addEventListener('click', debounceClick(async ()=>{
  const mc={id:uid('mc_'),code:'MC-'+String(MACROS.length+1).padStart(4,'0'),name:'',items:[],folderId:selectedFolder.macro,
    status:'Draft',notes:'',checkinHistory:[],createdAt:Date.now(),updatedAt:Date.now(),
    elements:[],bundleQty:1,allowMachine:5,allowPersonal:5,allowContingency:0};
  MACROS.push(mc); await persist('macro',mc); openMacroEditor(mc.id);
}));
$('mcNewFolder').addEventListener('click', ()=>{ openFolderModal('macro', null, null); });
$('mcSearchBox').addEventListener('input', e=>{ libSearch.macro = e.target.value; renderMacrosList(); });
$('mcExportCsv').addEventListener('click', ()=>{
  exportLibraryCsv('macros', [['Code',m=>m.code],['Name',m=>m.name],['# Operations',m=>(m.items||[]).length],['Total SMV',m=>macroSmv(m).toFixed(3)]], getFilteredItems('macro'));
});
$('mcExportPdf').addEventListener('click', ()=>{
  exportLibraryPdf('macro','Macros Library', [['Code',m=>m.code],['Name',m=>m.name],['# Operations',m=>(m.items||[]).length],['Total SMV',m=>macroSmv(m).toFixed(3)]], getFilteredItems('macro'));
});
let editingMacroId=null;
function currentMacro(){ return findMacro(editingMacroId); }
function ensureMcFields(mc){
  if(mc.status===undefined) mc.status='Draft';
  if(mc.notes===undefined) mc.notes='';
  if(mc.checkinHistory===undefined) mc.checkinHistory=[];
  if(mc.createdAt===undefined) mc.createdAt=mc.updatedAt||Date.now();
  if(mc.codeLocked===undefined) mc.codeLocked=false;
  if(mc.attachments===undefined) mc.attachments='';
  if(mc.title===undefined) mc.title='';
  if(mc.description===undefined) mc.description='';
  if(mc.fabric===undefined) mc.fabric='';
  if(mc.mctype===undefined) mc.mctype='';
  if(mc.seamtype===undefined) mc.seamtype='';
  if(mc.skill===undefined) mc.skill='';
  if(mc.stitchespercm===undefined) mc.stitchespercm=4.5;
  if(mc.rpm===undefined) mc.rpm='';
  if(mc.elements===undefined) mc.elements=[];
  if(mc.bundleQty===undefined) mc.bundleQty=1;
  if(mc.allowMachine===undefined) mc.allowMachine=5;
  if(mc.allowPersonal===undefined) mc.allowPersonal=5;
  if(mc.allowContingency===undefined) mc.allowContingency=0;
  if(mc.items===undefined) mc.items=[];
}
let mcLocked=false;
function applyMcLock(locked){
  mcLocked=locked;
  ['mc_code','mc_notes','mc_title','mc_description','mc_fabric','mc_bundle_qty','mc_allow_personal','mc_allow_machine','mc_allow_contingency'].forEach(id=>{ if($(id)) $(id).disabled=locked; });
  $('mcAddOp').disabled=locked;
  $('mcToolbarSaveAs').disabled=!locked;
  $('mcToolbarCheckOut').disabled=locked;
  $('mcToolbarCheckIn').disabled=!locked;
  $('mcLockBanner').classList.toggle('hidden', !locked);
  if(bolMode==='macro'){ const mc=currentMacro(); if(mc) renderElements(mc); }
}
function renderMcAudit(mc){
  $('mc_aud_created').textContent = fmtDateTime(mc.createdAt);
  $('mc_aud_changed').textContent = fmtDateTime(mc.updatedAt);
}
function renderMcWhereUsed(mc){
  const refs=[];
  FEATURES.forEach(f=>{ if((f.items||[]).some(it=>it.refType==='macro'&&it.refId===mc.id)) refs.push({type:'Feature',label:(f.code||'FT')+' — '+(f.name||'Untitled')}); });
  STYLES.forEach(s=>{ if((s.items||[]).some(it=>it.refType==='macro'&&it.refId===mc.id)) refs.push({type:'Style',label:(s.header.styleNo||'ST')+(s.header.desc?' — '+s.header.desc:'')}); });
  const body=$('mcWhereUsedBody');
  if(!refs.length){ body.innerHTML='<div class="muted" style="font-size:12px;">Not referenced by any Feature or Style yet.</div>'; return; }
  body.innerHTML = refs.map(r=>\`<div class="where-row"><span>\${r.type}</span><span>\${escapeHtml(r.label)}</span></div>\`).join('');
}
function openMacroEditor(id){
  editingMacroId=id; const mc=findMacro(id); if(!mc) return;
  ensureMcFields(mc);
  buildOpCodeDatalist();
  $('mc_code').value=mc.code; $('mc_status').value=mc.status; $('mc_notes').value=mc.notes;
  $('mc_title').value=mc.title||''; $('mc_description').value=mc.description||''; $('mc_fabric').value=mc.fabric||'';
  $('mc_bundle_qty').value=mc.bundleQty||1;
  $('mc_allow_personal').value=mc.allowPersonal; $('mc_allow_machine').value=mc.allowMachine; $('mc_allow_contingency').value=mc.allowContingency;
  renderMcLauncherSummary(mc);
  renderMacroItems(mc);
  renderMcAudit(mc); renderMcWhereUsed(mc);
  $('mcNotesPanel').classList.add('hidden');
  applyMcLock(mc.status==='Checked Out');
  $('editorMacro').classList.add('show'); window.scrollTo(0,0);
}
function closeMacroEditor(){ $('editorMacro').classList.remove('show'); $('screenBol').classList.remove('show'); editingMacroId=null; }
function renderMacroItems(mc){
  const body=$('mcItemsBody');
  if(!mc.items.length){ $('mcItemsEmpty').classList.remove('hidden'); $('mcItemsTable').classList.add('hidden'); }
  else {
    $('mcItemsEmpty').classList.add('hidden'); $('mcItemsTable').classList.remove('hidden');
    body.innerHTML = mc.items.map(it=>{
      const op=findOp(it.refId);
      const each = op?computeOp(op).smv:0;
      return \`<tr data-it="\${it.id}">
        <td class="mono">\${escapeHtml(op?op.code:'?')}</td>
        <td>\${escapeHtml(op?(op.description||'—'):'(missing operation)')}</td>
        <td class="right mono">\${each.toFixed(3)}</td>
        <td><input type="number" min="1" step="1" class="it-qty" value="\${it.qty}" style="padding:5px;"></td>
        <td class="right mono">\${(each*it.qty).toFixed(3)}</td>
        <td class="center"><button class="ghost small it-remove">✕</button></td></tr>\`;
    }).join('');
    body.querySelectorAll('tr').forEach(tr=>{
      const itId=tr.dataset.it; const it=mc.items.find(x=>x.id===itId);
      tr.querySelector('.it-qty').addEventListener('input',e=>{ it.qty=Number(e.target.value)||1; renderMacroItems(mc); persist('macro',mc); });
      tr.querySelector('.it-remove').addEventListener('click',()=>{ mc.items=mc.items.filter(x=>x.id!==itId); renderMacroItems(mc); persist('macro',mc); });
    });
    if(mcLocked) body.querySelectorAll('tr').forEach(tr=>{ tr.querySelectorAll('input,button').forEach(e=>e.disabled=true); });
  }
  $('mc_total').textContent = macroSmv(mc).toFixed(3);
  const smv = macroSmv(mc);
  $('mc_res_smv').textContent = smv.toFixed(4);
  const rOwn = computeOp(mc);
  $('mc_res_bundle_tmu').textContent = rOwn.bundleTmu.toFixed(1);
  $('mc_res_manual_tmu').textContent = rOwn.manualTmu.toFixed(1);
  $('mc_res_machine_tmu').textContent = rOwn.sewTmu.toFixed(1);
  $('mc_res_nonmachine_pct').textContent = rOwn.nonMachinePct.toFixed(2);
  renderMcLauncherSummary(mc);
  if($('mclb_lines')) $('mclb_lines').textContent = macroLineCount(mc);
  if($('mclb_smv')) $('mclb_smv').textContent = smv.toFixed(3);
  if($('mclb_cap')) $('mclb_cap').textContent = smv>0 ? Math.round(60/smv) : '—';
}
function buildOpCodeDatalist(){
  const dl=$('dl_opcode');
  dl.innerHTML = OPS.map(o=>\`<option value="\${escapeHtml(o.code)}">\${escapeHtml(o.description||o.title||'')}</option>\`).join('');
}
$('mcAddOp').addEventListener('click',()=>{
  if(mcLocked) return;
  openPicker({title:'Add Operation to Macro', types:['op'], onAdd:(refType,refId)=>{
    const mc=currentMacro(); if(!mc) return;
    if((mc.items||[]).some(it=>it.refType==='op' && it.refId===refId)){
      showToast('That operation is already in this macro'); return;
    }
    mc.items.push({id:uid('it_'),refType:'op',refId,qty:1});
    renderMacroItems(mc); persist('macro',mc);
  }});
});
function collectMcForm(mc){
  mc.code=$('mc_code').value; mc.notes=$('mc_notes').value;
  mc.title=$('mc_title').value; mc.description=$('mc_description').value; mc.fabric=$('mc_fabric').value;
  mc.name = mc.title || mc.description || mc.name;
  mc.bundleQty=Number($('mc_bundle_qty').value)||1;
  mc.allowPersonal=$('mc_allow_personal').value; mc.allowMachine=$('mc_allow_machine').value; mc.allowContingency=$('mc_allow_contingency').value;
}
$('mcSave').addEventListener('click', debounceClick(async ()=>{
  const mc=currentMacro(); if(!mc) return;
  collectMcForm(mc);
  await persist('macro',mc); renderMcAudit(mc);
  showToast('Macro saved ✓');
}));
$('mcToolbarNotes').addEventListener('click',()=>{ $('mcNotesPanel').classList.toggle('hidden'); });
$('mcToolbarCheckOut').addEventListener('click', debounceClick(async ()=>{
  const mc=currentMacro(); if(!mc) return;
  collectMcForm(mc);
  if(!(mc.title||'').trim()){ alert('Please enter a Title before checking out.'); return; }
  openCheckinModal('macro',mc,'checkout');
}));
$('mcToolbarCheckIn').addEventListener('click', debounceClick(async ()=>{
  const mc=currentMacro(); if(!mc) return;
  mc.status='Checked In'; $('mc_status').value=mc.status; await persist('macro',mc);
  applyMcLock(false); showToast('Checked in ✓');
}));
$('mcCancel').addEventListener('click',()=>{ closeMacroEditor(); goto('macros'); });
$('mcToolbarBack').addEventListener('click',()=>{ closeMacroEditor(); goto('macros'); });
$('mcToolbarSaveAs').addEventListener('click', debounceClick(async ()=>{
  const mc=currentMacro(); if(!mc) return;
  if(mc.status!=='Checked In'){ alert('Save As is only available after this Macro has been Checked In.'); return; }
  openSaveAsPicker('macro');
}));
function macroSheetHtml(mc){
  const itemRows = (mc.items||[]).map((it,i)=>{
    const op=findOp(it.refId);
    const each = op?computeOp(op).smv:0;
    return \`<tr><td>\${i+1}</td><td>\${escapeHtml(op?op.code:'?')}</td><td>\${escapeHtml(op?(op.description||'—'):'(missing operation)')}</td>
      <td class="right">\${each.toFixed(3)}</td><td class="right">\${it.qty}</td><td class="right">\${(each*it.qty).toFixed(3)}</td></tr>\`;
  }).join('') || \`<tr><td colspan="6" style="text-align:center;color:#777;">No operations added</td></tr>\`;
  return \`<h2>\${escapeHtml(mc.code||'Untitled')} — \${escapeHtml(mc.name||'Macro')}</h2>
    <div class="pmeta">Generated \${new Date().toLocaleString()}</div>
    <table style="margin-bottom:14px;"><tbody>
      <tr><td><b>Code</b></td><td>\${escapeHtml(mc.code||'—')}</td><td><b>Name</b></td><td>\${escapeHtml(mc.name||'—')}</td></tr>
      <tr><td><b>Title</b></td><td>\${escapeHtml(mc.title||'—')}</td><td><b>Status</b></td><td>\${escapeHtml(mc.status||'Draft')}</td></tr>
      <tr><td><b>Description</b></td><td>\${escapeHtml(mc.description||'—')}</td><td><b>Fabric</b></td><td>\${escapeHtml(mc.fabric||'—')}</td></tr>
      <tr><td><b>Machine Type</b></td><td>\${escapeHtml(mc.mctype||'—')}</td><td><b>Seam Type</b></td><td>\${escapeHtml(mc.seamtype||'—')}</td></tr>
      <tr><td><b>RPM</b></td><td>\${escapeHtml(String(mc.rpm||'—'))}</td><td><b>Stitches/cm</b></td><td>\${escapeHtml(String(mc.stitchespercm||'—'))}</td></tr>
      <tr><td><b>Attachments</b></td><td colspan="3">\${escapeHtml(mc.attachments||'—')}</td></tr>
      <tr><td><b>Total SMV</b></td><td colspan="3">\${macroSmv(mc).toFixed(3)}</td></tr>
    </tbody></table>
    <table><thead><tr><th>Ln</th><th>Code</th><th>Description</th><th class="right">SMV (ea)</th><th class="right">Qty</th><th class="right">Line SMV</th></tr></thead>
    <tbody>\${itemRows}</tbody></table>\`;
}
function exportMacroAsPdf(mc){
  try{
    printHtmlSheet(macroSheetHtml(mc), (mc.code||'macro')+'_sheet');
    return Promise.resolve();
  }catch(err){
    console.error('Print failed:', err);
    alert('Print failed: '+(err && err.message ? err.message : err));
    return Promise.reject(err);
  }
}
function exportMacroAsXlsx(mc){
  try{
    const html=\`<html><head><meta charset="UTF-8"></head><body>\${macroSheetHtml(mc)}</body></html>\`;
    downloadBlob((mc.code||'macro')+'_sheet.xls', html, 'application/vnd.ms-excel');
    showToast('Excel downloaded ✓');
    return Promise.resolve();
  }catch(err){
    console.error('Export Excel failed:', err);
    alert('Export Excel failed: '+(err && err.message ? err.message : err));
    return Promise.reject(err);
  }
}
$('mcToolbarExportXlsx').addEventListener('click',()=>{ const mc=currentMacro(); if(!mc) return; exportMacroAsGsd(mc); });
$('mcToolbarPrint').addEventListener('click',()=>{ const mc=currentMacro(); if(!mc) return; exportMacroAsPdf(mc); });
function computeMacroResults(mc, pPersonal, pMachine, pContingency){
  const own = computeOp(mc);
  let manualMin=own.manualMin, sewMin=own.sewMin, bundleMin=own.bundleMin;
  (mc.items||[]).forEach(it=>{
    const op=findOp(it.refId); if(!op) return;
    const r=computeOp(op), qty=Number(it.qty)||0;
    manualMin += r.manualMin*qty; sewMin += r.sewMin*qty; bundleMin += r.bundleMin*qty;
  });
  const P=(Number(pPersonal)||0)/100, M=(Number(pMachine)||0)/100, C=(Number(pContingency)||0)/100;
  const rowDefs = [
    {label:'Manual', basic:manualMin, hasDelay:false},
    {label:'Machine', basic:sewMin, hasDelay:true},
    {label:'Bundle (Bill of Labour)', basic:bundleMin, hasDelay:false},
  ];
  let totBasic=0, totPA=0, totDelay=0, totTotal=0, totC=0;
  const rows = rowDefs.map(row=>{
    const pa = row.basic*P;
    const delay = row.hasDelay ? row.basic*M : null;
    const total = row.basic + pa + (delay||0);
    const c = total*C;
    totBasic+=row.basic; totPA+=pa; totDelay+=(delay||0); totTotal+=total; totC+=c;
    return {label:row.label, tmu:row.basic*2000, basic:row.basic, pa, delay, total, c};
  });
  const smv = totTotal + totC;
  const nonMachinePct = totBasic>0 ? ((manualMin+bundleMin)/totBasic*100) : 0;
  return {rows, totals:{tmu:totBasic*2000, basic:totBasic, pa:totPA, delay:totDelay, total:totTotal, c:totC, smv}, nonMachinePct};
}
const macroResultState={capPct:100};
function renderMacroResultTables(mc){
  const pPersonal=$('mcres_allow_personal').value, pMachine=$('mcres_allow_machine').value, pContingency=$('mcres_allow_contingency').value;
  const res = computeMacroResults(mc, pPersonal, pMachine, pContingency);
  const rowsHtml = res.rows.map(row=>\`
    <tr><td>\${escapeHtml(row.label)}</td><td class="right mono">\${row.tmu.toFixed(1)}</td><td class="right mono">\${row.basic.toFixed(4)}</td>
    <td class="right mono">\${row.pa.toFixed(4)}</td><td class="right mono">\${row.delay===null?'N/A':row.delay.toFixed(4)}</td>
    <td class="right mono">\${row.total.toFixed(4)}</td><td class="right mono">\${row.c.toFixed(4)}</td>
    <td class="right mono"></td><td class="right mono"></td></tr>\`).join('');
  const t=res.totals;
  const totalsHtml = \`<tr class="result-totals"><td>Totals</td><td class="right mono">\${t.tmu.toFixed(1)}</td><td class="right mono">\${t.basic.toFixed(4)}</td>
    <td class="right mono">\${t.pa.toFixed(4)}</td><td class="right mono">\${t.delay.toFixed(4)}</td>
    <td class="right mono">\${t.total.toFixed(4)}</td><td class="right mono">\${t.c.toFixed(4)}</td>
    <td class="right mono">\${t.smv.toFixed(4)}</td><td class="right mono">0.0000</td></tr>\`;
  $('mcResultTimeCostTable').innerHTML = \`<thead><tr><th style="text-align:left;"></th><th>TMU</th><th>Basic Minute</th><th>(PA)</th><th>(Delay)</th><th>Total</th><th>(C)</th><th>SMV</th><th>Cost</th></tr></thead><tbody>\${rowsHtml}\${totalsHtml}</tbody>\`;

  const hourBase = t.smv>0?60/t.smv:0;
  const hourAdj = hourBase*(macroResultState.capPct/100);
  $('mcResultCapacityTable').innerHTML = \`<thead><tr><th style="text-align:left;"></th><th>@ 100 %</th><th>@ % of 100</th></tr></thead>
    <tbody>
      <tr><td>%</td><td class="right mono">100</td><td class="right"><input type="number" step="0.01" id="mcres_capacity_pct" value="\${macroResultState.capPct.toFixed(2)}"></td></tr>
      <tr><td>Allowed Time</td><td class="right mono">\${t.smv.toFixed(4)}</td><td class="right mono">\${t.smv.toFixed(4)}</td></tr>
      <tr><td>Hour</td><td class="right mono">\${hourBase?Math.round(hourBase):'—'}</td><td class="right mono">\${hourAdj?Math.round(hourAdj):'—'}</td></tr>
    </tbody>\`;
  const capInp=$('mcres_capacity_pct');
  capInp.addEventListener('keydown',e=>{
    if(e.key==='Enter'){ e.preventDefault(); macroResultState.capPct=Number(capInp.value)||0; renderMacroResultTables(mc); }
  });
  capInp.addEventListener('blur',()=>{ macroResultState.capPct=Number(capInp.value)||0; renderMacroResultTables(mc); });
  $('mcres_nonmachine').value = res.nonMachinePct.toFixed(2);
}
function openMacroResultModal(mc){
  $('mcResultTitle').textContent = (mc.code||'Untitled')+' : Results';
  $('mcres_allow_personal').value = mc.allowPersonal||0;
  $('mcres_allow_machine').value = mc.allowMachine||0;
  $('mcres_allow_contingency').value = mc.allowContingency||0;
  macroResultState.capPct = 100;
  renderMacroResultTables(mc);
  $('mcResultBg').classList.add('show');
}
['mcres_allow_personal','mcres_allow_machine','mcres_allow_contingency'].forEach(id=>{
  $(id).addEventListener('input',()=>{ const mc=currentMacro(); if(mc) renderMacroResultTables(mc); });
});
$('mcToolbarResult').addEventListener('click',()=>{
  const mc=currentMacro(); if(!mc) return;
  openMacroResultModal(mc);
});
$('mcResultClose').addEventListener('click',()=>{ $('mcResultBg').classList.remove('show'); });
$('mcResultCancel').addEventListener('click',()=>{ $('mcResultBg').classList.remove('show'); });
$('mcResultApply').addEventListener('click',()=>{
  const mc=currentMacro(); if(!mc) return;
  mc.allowPersonal=$('mcres_allow_personal').value;
  mc.allowMachine=$('mcres_allow_machine').value;
  mc.allowContingency=$('mcres_allow_contingency').value;
  if($('mc_allow_machine')) $('mc_allow_machine').value=mc.allowMachine;
  if($('mc_allow_personal')) $('mc_allow_personal').value=mc.allowPersonal;
  if($('mc_allow_contingency')) $('mc_allow_contingency').value=mc.allowContingency;
  persist('macro',mc);
  if(typeof updateMacroTotals==='function') updateMacroTotals(mc);
  $('mcResultBg').classList.remove('show');
  showToast('Results applied ✓');
});
function macroLineCount(mc){
  const linked = (mc.items||[]).reduce((s,it)=>{ const op=findOp(it.refId); return s+(op?(op.elements||[]).length:0); },0);
  return (mc.elements||[]).length + linked;
}
function openMcBolScreen(){
  bolMode='macro';
  const mc=currentMacro(); if(!mc) return;
  $('bol_opLabel').textContent = (mc.code||'Untitled')+' — '+(mc.name||'Macro');
  renderElements(mc); updateOpTotals(mc);
  $('screenBol').classList.add('show'); window.scrollTo(0,0);
}
$('mcToolbarBol').addEventListener('click', openMcBolScreen);
$('btnOpenMcBol').addEventListener('click', openMcBolScreen);
$('mcbolExportPdf').addEventListener('click',()=>{ const mc=currentMacro(); if(mc) exportMacroAsPdf(mc); });
$('mcbolExportXlsx').addEventListener('click',()=>{ const mc=currentMacro(); if(mc) exportMacroAsGsd(mc); });

/* =========================================================================
   FEATURES
   ========================================================================= */
function renderFeaturesList(){
  const body=$('featuresBody');
  const rows = getFilteredItems('feature');
  if(!rows.length){ $('featuresEmpty').classList.remove('hidden'); $('featuresTable').classList.add('hidden'); return; }
  $('featuresEmpty').classList.add('hidden'); $('featuresTable').classList.remove('hidden');
  body.innerHTML = rows.map(ft=>\`<tr>
    <td class="mono">\${escapeHtml(ft.code||'—')}</td><td><b>\${escapeHtml(ft.name||'Untitled')}</b></td>
    <td class="right mono">\${(ft.items||[]).length}</td><td class="right mono"><b>\${featureSmv(ft).toFixed(3)}</b></td>
    <td class="center"><button class="ghost small" data-open="\${ft.id}">Open</button></td></tr>\`).join('');
  body.querySelectorAll('[data-open]').forEach(b=>b.addEventListener('click',()=>openFeatureEditor(b.dataset.open)));
}
$('btnNewFeature').addEventListener('click', debounceClick(async ()=>{
  const ft={id:uid('ft_'),code:'FT-'+String(FEATURES.length+1).padStart(4,'0'),name:'',items:[],folderId:selectedFolder.feature};
  FEATURES.push(ft); await persist('feature',ft); openFeatureEditor(ft.id);
}));
$('ftNewFolder').addEventListener('click', ()=>{ openFolderModal('feature', null, null); });
$('ftSearchBox').addEventListener('input', e=>{ libSearch.feature = e.target.value; renderFeaturesList(); });
$('ftExportCsv').addEventListener('click', ()=>{
  exportLibraryCsv('features', [['Code',f=>f.code],['Name',f=>f.name],['# Items',f=>(f.items||[]).length],['Total SMV',f=>featureSmv(f).toFixed(3)]], getFilteredItems('feature'));
});
$('ftExportPdf').addEventListener('click', ()=>{
  exportLibraryPdf('feature','Features Library', [['Code',f=>f.code],['Name',f=>f.name],['# Items',f=>(f.items||[]).length],['Total SMV',f=>featureSmv(f).toFixed(3)]], getFilteredItems('feature'));
});
let editingFeatureId=null;
function currentFeature(){ return findFeature(editingFeatureId); }
function openFeatureEditor(id){
  editingFeatureId=id; const ft=findFeature(id); if(!ft) return;
  (ft.items||[]).forEach(it=>{ if(it.snapshotCheckinCount===undefined||it.snapshotCheckinCount===null) it.snapshotCheckinCount=refCheckinCount(it.refType,it.refId); });
  $('ft_code').value=ft.code; $('ft_name').value=ft.name;
  populateFolderSelect($('ft_folder'),'feature',ft.folderId);
  renderFeatureItems(ft);
  $('editorFeature').classList.add('show'); window.scrollTo(0,0);
}
function closeFeatureEditor(){ $('editorFeature').classList.remove('show'); editingFeatureId=null; }
function renderFeatureItems(ft){
  const body=$('ftItemsBody');
  if(!ft.items.length){ $('ftItemsEmpty').classList.remove('hidden'); $('ftItemsTable').classList.add('hidden'); }
  else {
    $('ftItemsEmpty').classList.add('hidden'); $('ftItemsTable').classList.remove('hidden');
    body.innerHTML = ft.items.map(it=>{
      const lbl=itemLabel(it.refType,it.refId); const each=itemEachSmv(it.refType,it.refId);
      const pillCls = it.refType==='macro'?'pill-mc':'pill-op';
      const changed = itemIsChanged(it);
      return \`<tr data-it="\${it.id}">
        <td><span class="pill \${pillCls}">\${it.refType==='macro'?'MACRO':'OP'}</span></td>
        <td class="mono">\${changed?'<span class="change-warn-icon" title="Analysis changed since last check-in">!</span>':''}\${escapeHtml(lbl.code)}</td><td>\${escapeHtml(lbl.name)}</td>
        <td class="right mono">\${each.toFixed(3)}</td>
        <td><input type="number" min="1" step="1" class="it-qty" value="\${it.qty}" style="padding:5px;"></td>
        <td class="right mono">\${(each*it.qty).toFixed(3)}</td>
        <td class="center"><button class="ghost small it-remove">✕</button></td></tr>\`;
    }).join('');
    body.querySelectorAll('tr').forEach(tr=>{
      const itId=tr.dataset.it; const it=ft.items.find(x=>x.id===itId);
      tr.querySelector('.it-qty').addEventListener('input',e=>{ it.qty=Number(e.target.value)||1; renderFeatureItems(ft); persist('feature',ft); });
      tr.querySelector('.it-remove').addEventListener('click',()=>{ ft.items=ft.items.filter(x=>x.id!==itId); renderFeatureItems(ft); persist('feature',ft); });
    });
  }
  $('ft_total').textContent = featureSmv(ft).toFixed(3);
  updateChangeBanner('feature',ft);
}
$('ftAddItem').addEventListener('click',()=>{
  openPicker({title:'Add to Feature', types:['macro','op'], onAdd:(refType,refId)=>{
    const ft=currentFeature();
    ft.items.push({id:uid('it_'),refType,refId,qty:1,snapshotCheckinCount:refCheckinCount(refType,refId)});
    renderFeatureItems(ft); persist('feature',ft);
  }});
});
$('ftSave').addEventListener('click', async ()=>{
  const ft=currentFeature(); ft.code=$('ft_code').value; ft.name=$('ft_name').value; ft.folderId=$('ft_folder').value||null;
  await persist('feature',ft); closeFeatureEditor(); goto('features'); showToast('Feature saved ✓');
});
$('ftCancel').addEventListener('click',()=>{ closeFeatureEditor(); goto('features'); });
$('ftBack').addEventListener('click',()=>{ closeFeatureEditor(); goto('features'); });

/* =========================================================================
   STYLES
   ========================================================================= */
function ensureStyleFields(st){
  if(!st.header) st.header={styleNo:'',desc:'',classn:'',fabric:'',buyer:'',label:'',compiler:'',date:''};
  if(!st.items) st.items=[];
  if(!st.status) st.status='Draft';
  if(typeof st.notes!=='string') st.notes='';
  if(!st.checkinHistory) st.checkinHistory=[];
  if(st.folderId===undefined) st.folderId=null;
  if(!st.createdAt) st.createdAt=Date.now();
  if(st.allowPersonal===undefined) st.allowPersonal=0;
  if(st.allowMachine===undefined) st.allowMachine=0;
  if(st.allowContingency===undefined) st.allowContingency=0;
  if(st.image===undefined) st.image=null;
}
function renderStylesList(){
  const body=$('stylesBody');
  const rows=getFilteredItems('style');
  if(!STYLES.length){ $('stylesEmpty').classList.remove('hidden'); $('stylesTable').classList.add('hidden'); return; }
  $('stylesEmpty').classList.add('hidden'); $('stylesTable').classList.remove('hidden');
  if(!rows.length){
    body.innerHTML = \`<tr><td colspan="7" class="muted" style="text-align:center;padding:14px 0;">No styles match your search.</td></tr>\`;
    return;
  }
  body.innerHTML = rows.map(st=>{
    const smv=styleSmv(st); const cap = smv>0?60/smv:null;
    const thumb = st.image
      ? \`<div style="width:34px;height:34px;border-radius:6px;background-image:url(\${st.image});background-size:cover;background-position:center;"></div>\`
      : \`<div style="width:34px;height:34px;border-radius:6px;background:#eef1f5;border:1px solid var(--line);"></div>\`;
    return \`<tr>
      <td>\${thumb}</td>
      <td class="mono"><a href="#" class="op-code-link" data-open="\${st.id}">\${escapeHtml(st.header.styleNo||'—')}</a></td>
      <td>\${escapeHtml(st.header.desc||'')}</td>
      <td>\${escapeHtml(st.header.buyer||'')}</td><td class="right mono">\${(st.items||[]).length}</td>
      <td class="right mono"><b>\${smv.toFixed(4)}</b></td><td class="right mono">\${cap?Math.round(cap):'—'}</td></tr>\`;
  }).join('');
  body.querySelectorAll('[data-open]').forEach(a=>a.addEventListener('click',e=>{ e.preventDefault(); openStyleEditor(a.dataset.open); }));
}
$('stSearchBox').addEventListener('input', e=>{ libSearch.style = e.target.value; renderStylesList(); });
$('stNewFolder').addEventListener('click', ()=>{ openFolderModal('style', null, null); });
$('stExportCsv').addEventListener('click', ()=>{
  exportLibraryCsv('styles',
    [['Style No.',s=>s.header.styleNo],['Description',s=>s.header.desc],['Buyer',s=>s.header.buyer],['# Items',s=>(s.items||[]).length],['Total SMV',s=>styleSmv(s).toFixed(4)]],
    getFilteredItems('style'));
});
$('stExportPdf').addEventListener('click', ()=>{
  exportLibraryPdf('style','Styles Library',
    [['Style No.',s=>s.header.styleNo],['Description',s=>s.header.desc],['Buyer',s=>s.header.buyer],['# Items',s=>(s.items||[]).length],['Total SMV',s=>styleSmv(s).toFixed(4)]],
    getFilteredItems('style'));
});
$('btnNewStyle').addEventListener('click', debounceClick(async ()=>{
  const st={id:uid('st_'), header:{styleNo:'',desc:'',classn:'',fabric:'',buyer:'',label:'',compiler:'',date:''}, items:[],
    status:'Draft', notes:'', checkinHistory:[], folderId:selectedFolder.style, createdAt:Date.now()};
  STYLES.push(st); await persist('style',st); openStyleEditor(st.id);
}));

/* =========================================================================
   IMPORT ANALYSIS (CSV) — creates a Style + any missing Operations,
   both parked in dedicated "Imported…" folders so they stay separate.
   ========================================================================= */
async function ensureDefaultFolder(type,name){
  let f = FOLDERS[type].find(x=>x.parentId===null && (x.name||'').toLowerCase()===name.toLowerCase());
  if(!f){
    f = {id:uid('fld_'), type, parentId:null, name};
    FOLDERS[type].push(f);
    await saveFolder(type,f);
  }
  return f;
}
function parseCsvLine(line){
  const cells=[]; let cell=''; let q=false;
  for(let idx=0; idx<line.length; idx++){
    const ch=line[idx];
    if(q){
      if(ch==='"'){ if(line[idx+1]==='"'){ cell+='"'; idx++; } else q=false; }
      else cell+=ch;
    } else {
      if(ch==='"') q=true;
      else if(ch===','){ cells.push(cell); cell=''; }
      else cell+=ch;
    }
  }
  cells.push(cell);
  return cells.map(c=>c.trim());
}
function parseImportCsvText(text){
  const rawLines = text.replace(/\\r\\n/g,'\\n').split('\\n');
  const lines = rawLines.map(l=>l.trim()===''?[]:parseCsvLine(l));
  let i=0;
  while(i<lines.length && lines[i].length===0) i++;
  if(i>=lines.length) throw new Error('Empty file');
  const metaHeader = lines[i].map(h=>h.toLowerCase()); i++;
  const metaRow = lines[i] || []; i++;
  const meta={}; metaHeader.forEach((h,idx)=>{ meta[h]=metaRow[idx]||''; });
  const styleNo = meta['styleno']||meta['style no']||meta['style']||'';
  const desc = meta['description']||meta['desc']||'';
  const buyer = meta['buyer']||'';
  while(i<lines.length && lines[i].length===0) i++;
  if(i>=lines.length) throw new Error('No operation lines found');
  const itemHeader = lines[i].map(h=>h.toLowerCase()); i++;
  const items=[];
  for(; i<lines.length; i++){
    const row=lines[i]; if(!row.length) continue;
    const obj={}; itemHeader.forEach((h,idx)=>{ obj[h]=row[idx]!==undefined?row[idx]:''; });
    items.push(obj);
  }
  return {styleNo,desc,buyer,items};
}
async function importParsedAnalysis(parsed){
  if(!parsed || !parsed.styleNo) return null;

  const styleFolder = await ensureDefaultFolder('style','Import Style');

  let linkedOps=0, unresolved=0, skipped=0;
  const styleItems=[];

  for(const row of parsed.items){
    const type=(row.type||row.typ||'OP').toUpperCase();
    const code=(row.code||'').trim();
    const title=(row.title||row.name||'').trim();
    const freq=Number(row.freq)||1;
    const smv=Number(row.smv)||0;
    if(!code) continue;

    if(type==='OP'){
      // Style import never creates or edits Operation library records — it only
      // links to a matching Operation if one already exists (read-only lookup).
      // Codes with no match in the library stay on the Style as a plain code
      // reference (refType:'code') so nothing gets fabricated into the library.
      const op = OPS.find(o=>(o.code||'').toLowerCase()===code.toLowerCase());
      if(op){
        linkedOps++;
        styleItems.push({id:uid('it_'),refType:'op',refId:op.id,qty:freq,snapshotCheckinCount:refCheckinCount('op',op.id)});
      } else {
        unresolved++;
        styleItems.push({id:uid('it_'),refType:'code',refId:null,code,title,smv,qty:freq,snapshotCheckinCount:0});
      }
    } else {
      skipped++;
    }
  }

  const st = {
    id:uid('st_'),
    header:{styleNo:parsed.styleNo, desc:parsed.desc, classn:'', fabric:'', buyer:parsed.buyer||'', label:'', compiler:'', date:''},
    items:styleItems, status:'Draft', notes:'', checkinHistory:[], folderId:styleFolder.id,
    createdAt:Date.now(), updatedAt:Date.now(), allowPersonal:0, allowMachine:0, allowContingency:0
  };
  STYLES.push(st); await persist('style',st);
  return {linkedOps,unresolved,skipped};
}
function parseGsdXmlText(xmlText){
  const doc = new DOMParser().parseFromString(xmlText, 'text/xml');
  if(doc.querySelector('parsererror')) throw new Error('XML parse error');
  const l4 = doc.querySelector('Analyses > L4');
  if(!l4) throw new Error('No style (L4) analyses found in this .gsd file');
  const results=[];
  Array.from(l4.children).forEach(lineEl=>{
    const styleEl = lineEl.children[0]; if(!styleEl) return;
    const styleNo = styleEl.tagName.replace(/^A/,'');
    const desc = styleEl.getAttribute('Desc')||'';
    const detailsContainer = styleEl.querySelector('Details');
    const items=[];
    if(detailsContainer){
      Array.from(detailsContainer.children).forEach(det=>{
        if(!/^Detail/i.test(det.tagName)) return;
        let code = (det.querySelector('Column001')?.textContent||'').trim();
        if(!code || code==='-') return; // section heading row, no real operation
        let title = (det.querySelector('Column002')?.textContent || det.querySelector('Column004')?.textContent || '').trim();
        let freq = Number(det.querySelector('DetailFrequencyValue')?.textContent) || 1;
        let smv = Number(det.querySelector('DetailTimeValue')?.textContent) || 0;
        const oprlText = det.querySelector('OperationPublisResultList')?.textContent;
        if(oprlText){
          try{
            const arr = JSON.parse(oprlText);
            if(Array.isArray(arr) && arr.length){
              if(arr[0].Code) code = arr[0].Code;
              if(arr[0].Smv!==undefined && arr[0].Smv!==null) smv = Number(arr[0].Smv)||smv;
            }
          }catch(e){ /* malformed JSON blob — fall back to the column values already read */ }
        }
        items.push({type:'OP', code, title, freq:String(freq), smv:String(smv)});
      });
    }
    results.push({styleNo, desc, buyer:'', items});
  });
  return results;
}
let importAnalysisPending=null; // parsedList of {styleNo,desc,buyer,items}, awaiting read-only review + confirm
function resetImportAnalysisModal(){
  importAnalysisPending=null;
  $('importAnalysisFile').value='';
  $('importAnalysisStatus').textContent='';
  $('importAnalysisStep1').classList.remove('hidden');
  $('importAnalysisPreviewWrap').classList.add('hidden');
  $('importAnalysisPreviewTable').innerHTML='';
  $('importAnalysisBack').classList.add('hidden');
  $('importAnalysisRun').textContent='Preview & Check Codes';
}
function openImportAnalysisModal(){
  resetImportAnalysisModal();
  $('importAnalysisBg').classList.add('show');
}
function closeImportAnalysisModal(){ $('importAnalysisBg').classList.remove('show'); }
function renderImportAnalysisPreview(parsedList){
  const head = \`<thead><tr><th>Style</th><th>Code</th><th>Title</th><th class="right">Freq</th><th class="right">SMV</th><th>Status</th></tr></thead>\`;
  const bodyRows=[];
  parsedList.forEach(parsed=>{
    (parsed.items||[]).forEach(it=>{
      const code=(it.code||'').trim(); if(!code) return;
      const op = OPS.find(o=>(o.code||'').toLowerCase()===code.toLowerCase());
      const status = op
        ? '<span style="color:var(--green);font-weight:700;">Existing — linked as-is</span>'
        : '<span style="color:var(--steel);font-weight:700;">Not in library — kept as reference only</span>';
      bodyRows.push(\`<tr><td class="mono">\${escapeHtml(parsed.styleNo||'—')}</td><td class="mono">\${codeCellHtml(code, op, 'Not in your Operation library — kept as a plain code reference, no Operation is created')}</td><td>\${escapeHtml(it.title||'—')}</td><td class="right">\${escapeHtml(String(it.freq||1))}</td><td class="right mono">\${(Number(it.smv)||0).toFixed(4)}</td><td>\${status}</td></tr>\`);
    });
  });
  $('importAnalysisPreviewTable').innerHTML = head+\`<tbody>\${bodyRows.join('')||'<tr><td colspan="6" style="text-align:center;color:#777;">No operation rows found</td></tr>'}</tbody>\`;
  bindCodeOpenLinks($('importAnalysisPreviewTable'));
  $('importAnalysisStep1').classList.add('hidden');
  $('importAnalysisPreviewWrap').classList.remove('hidden');
  $('importAnalysisBack').classList.remove('hidden');
  const styleCount=parsedList.length, rowCount=bodyRows.length;
  $('importAnalysisRun').textContent=\`Confirm Import (\${styleCount} style\${styleCount===1?'':'s'}, \${rowCount} code\${rowCount===1?'':'s'})\`;
}
$('btnImportAnalysis').addEventListener('click', openImportAnalysisModal);
$('importAnalysisClose').addEventListener('click', closeImportAnalysisModal);
$('importAnalysisCancel').addEventListener('click', closeImportAnalysisModal);
$('importAnalysisBack').addEventListener('click', resetImportAnalysisModal);
$('importAnalysisRun').addEventListener('click', debounceClick(async ()=>{
  // Step 2: codes already previewed read-only — commit the import now.
  if(importAnalysisPending){
    $('importAnalysisStatus').textContent='Importing…';
    try{
      let totalUnresolved=0, totalLinked=0, totalSkipped=0, styleCount=0;
      for(const parsed of importAnalysisPending){
        const r = await importParsedAnalysis(parsed);
        if(r){ totalUnresolved+=r.unresolved; totalLinked+=r.linkedOps; totalSkipped+=r.skipped; styleCount++; }
      }
      if(!styleCount){ $('importAnalysisStatus').textContent='Style No. / code could not be found in this file.'; return; }
      renderTree('op'); renderTree('style'); renderStylesList();
      closeImportAnalysisModal();
      let msg = \`\${styleCount} style\${styleCount===1?'':'s'} imported ✓ (\${totalLinked} code\${totalLinked===1?'':'s'} linked to existing operations, \${totalUnresolved} kept as reference-only — no operations created)\`;
      if(totalSkipped) msg += \` — \${totalSkipped} row(s) skipped.\`;
      showToast(msg);
    }catch(e){
      console.error(e);
      $('importAnalysisStatus').textContent='Import failed — please try again.';
    }
    return;
  }
  // Step 1: parse the file and show a read-only preview of every style/code inside — no changes made yet.
  const f = $('importAnalysisFile').files[0];
  if(!f){ $('importAnalysisStatus').textContent='Please choose a CSV or .gsd file first.'; return; }
  $('importAnalysisStatus').textContent='Reading file…';
  const ext = (f.name.split('.').pop()||'').toLowerCase();
  try{
    let parsedList;
    if(ext==='gsd'){
      const buf = await f.arrayBuffer();
      const xmlText = new TextDecoder('utf-16le').decode(buf);
      parsedList = parseGsdXmlText(xmlText);
    } else {
      const text = await f.text();
      parsedList = [parseImportCsvText(text)];
    }
    if(!parsedList.length){ $('importAnalysisStatus').textContent='No styles found in this file.'; return; }
    importAnalysisPending=parsedList;
    renderImportAnalysisPreview(parsedList);
    $('importAnalysisStatus').textContent='Review the codes above (read-only), then Confirm Import.';
  }catch(e){
    console.error(e);
    $('importAnalysisStatus').textContent='Could not read this file — check it matches the supported CSV or .gsd format.';
  }
}));

let editingStyleId=null;
function currentStyle(){ return STYLES.find(s=>s.id===editingStyleId); }
function openStyleEditor(id){
  editingStyleId=id; const st=currentStyle(); if(!st) return;
  ensureStyleFields(st);
  (st.items||[]).forEach(it=>{ if(it.snapshotCheckinCount===undefined||it.snapshotCheckinCount===null) it.snapshotCheckinCount=refCheckinCount(it.refType,it.refId); });
  $('st_styleNo').value=st.header.styleNo; $('st_desc').value=st.header.desc;
  $('st_fabric').value=st.header.fabric; $('st_buyer').value=st.header.buyer;
  $('st_compiler').value=st.header.compiler; $('st_date').value=st.header.date;
  $('st_status').value=st.status; $('st_notes').value=st.notes||'';
  refreshStyleImagePreview(st);
  $('stNotesPanel').classList.add('hidden');
  renderStyleItems(st); renderStAudit(st);
  applyStLock(st.status==='Checked Out');
  $('editorStyle').classList.add('show'); window.scrollTo(0,0);
}
function closeStyleEditor(){ $('editorStyle').classList.remove('show'); editingStyleId=null; }
let stLocked=false;
const ST_LOCK_FIELD_IDS=['st_styleNo','st_desc','st_fabric','st_buyer','st_compiler','st_date'];
function applyStLock(locked){
  stLocked=locked;
  ST_LOCK_FIELD_IDS.forEach(id=>{ const el=$(id); if(el) el.disabled=locked; });
  $('stAddItem').disabled=locked;
  $('stToolbarSave').disabled=locked;
  $('stSave').disabled=locked;
  $('stToolbarSaveAs').disabled=!locked;
  $('stToolbarCheckOut').disabled=locked;
  $('stToolbarCheckIn').disabled=!locked;
  $('st_image_file').disabled=locked;
  $('stImageUploadBtn').classList.toggle('disabled', locked);
  $('stImageUploadBtn').style.pointerEvents = locked ? 'none' : '';
  $('stImageUploadBtn').style.opacity = locked ? '.5' : '1';
  $('stLockBanner').classList.toggle('hidden', !locked);
  const st=currentStyle(); if(st) renderStyleItems(st);
}
function renderStAudit(st){
  const rows=(st.checkinHistory||[]).slice().sort((a,b)=>b.date-a.date);
  const body=$('stAuditBody');
  if(!rows.length){ body.innerHTML='<tr><td colspan="4" class="muted" style="text-align:center;padding:14px 0;">No check-in history yet.</td></tr>'; return; }
  body.innerHTML = rows.map(r=>\`<tr><td>\${fmtDateTime(r.date)}</td><td>\${escapeHtml(r.user||'—')}</td><td>\${escapeHtml(r.notes||'—')}</td><td class="right mono">\${(r.smv||0).toFixed(4)}</td></tr>\`).join('');
}
function renderStyleItems(st){
  const body=$('stItemsBody');
  if(!st.items.length){ $('stItemsEmpty').classList.remove('hidden'); $('stItemsTable').classList.add('hidden'); }
  else {
    $('stItemsEmpty').classList.add('hidden'); $('stItemsTable').classList.remove('hidden');
    body.innerHTML = st.items.map(it=>{
      const lbl=itemLabel(it.refType,it.refId,it); const each=itemEachSmv(it.refType,it.refId,it);
      const pillCls = it.refType==='feature'?'pill-ft':(it.refType==='macro'?'pill-mc':(it.refType==='code'?'pill-op':'pill-op'));
      const changed = itemIsChanged(it);
      return \`<tr data-it="\${it.id}">
        <td><span class="pill \${pillCls}">\${it.refType.toUpperCase()}</span></td>
        <td class="mono">\${changed?'<span class="change-warn-icon" title="Analysis changed since last check-in">!</span>':''}\${escapeHtml(lbl.code)}</td><td>\${escapeHtml(lbl.name)}</td>
        <td class="right mono">\${each.toFixed(3)}</td>
        <td><input type="number" min="1" step="1" class="it-qty" value="\${it.qty}" style="padding:5px;" \${stLocked?'disabled':''}></td>
        <td class="right mono">\${(each*it.qty).toFixed(3)}</td>
        <td class="center"><button class="ghost small it-remove" \${stLocked?'disabled':''}>✕</button></td></tr>\`;
    }).join('');
    body.querySelectorAll('tr').forEach(tr=>{
      const itId=tr.dataset.it; const it=st.items.find(x=>x.id===itId);
      tr.querySelector('.it-qty').addEventListener('input',e=>{ it.qty=Number(e.target.value)||1; renderStyleItems(st); persist('style',st); });
      tr.querySelector('.it-remove').addEventListener('click',()=>{ st.items=st.items.filter(x=>x.id!==itId); renderStyleItems(st); persist('style',st); });
    });
  }
  const total=styleSmv(st); $('st_total').textContent=total.toFixed(3);
  $('st_cap').textContent = total>0?Math.round(60/total):'—';
  updateChangeBanner('style',st);
}
$('stAddItem').addEventListener('click',()=>{
  if(stLocked) return;
  openPicker({title:'Add to Style', types:['feature','macro','op'], onAdd:(refType,refId)=>{
    const st=currentStyle();
    st.items.push({id:uid('it_'),refType,refId,qty:1,snapshotCheckinCount:refCheckinCount(refType,refId)});
    renderStyleItems(st); persist('style',st);
  }});
});
function collectStyleForm(st){
  st.header={styleNo:$('st_styleNo').value,desc:$('st_desc').value,classn:st.header.classn||'',fabric:$('st_fabric').value,
    buyer:$('st_buyer').value,label:st.header.label||'',compiler:$('st_compiler').value,date:$('st_date').value};
  st.notes=$('st_notes').value;
}
async function saveCurrentStyle(silent){
  const st=currentStyle(); if(!st) return false;
  collectStyleForm(st);
  st.updatedAt=Date.now();
  await persist('style',st);
  renderStAudit(st); renderStyleItems(st);
  if(!silent) showToast('Style saved ✓');
  return true;
}
$('stToolbarBack').addEventListener('click',()=>{ closeStyleEditor(); goto('styles'); });
$('stToolbarSave').addEventListener('click', debounceClick(()=>saveCurrentStyle(false)));
$('stToolbarNotes').addEventListener('click',()=>{ $('stNotesPanel').classList.toggle('hidden'); });
$('stToolbarCheckOut').addEventListener('click', debounceClick(async ()=>{
  const st=currentStyle(); if(!st) return;
  collectStyleForm(st);
  if(!(st.header.styleNo||'').trim()){ alert('Please enter a Style No. before checking out.'); return; }
  openCheckinModal('style',st,'checkout');
}));
$('stToolbarCheckIn').addEventListener('click', debounceClick(async ()=>{
  const st=currentStyle(); if(!st) return;
  st.status='Checked In'; $('st_status').value=st.status; await persist('style',st);
  applyStLock(false); showToast('Checked in ✓');
}));
$('stToolbarSaveAs').addEventListener('click', debounceClick(async ()=>{
  const st=currentStyle(); if(!st) return;
  openSaveAsPicker('style');
}));
function styleSheetHtml(st){
  const total=styleSmv(st); const cap=total>0?Math.round(60/total):'—';
  const itemRows=(st.items||[]).map((it,i)=>{
    const lbl=itemLabel(it.refType,it.refId,it); const each=itemEachSmv(it.refType,it.refId,it);
    return \`<tr><td>\${i+1}</td><td>\${escapeHtml(it.refType.toUpperCase())}</td><td>\${escapeHtml(lbl.code)}</td><td>\${escapeHtml(lbl.name)}</td><td class="right">\${it.qty}</td><td class="right">\${each.toFixed(3)}</td><td class="right">\${(each*it.qty).toFixed(3)}</td></tr>\`;
  }).join('') || \`<tr><td colspan="7" style="text-align:center;color:#777;">No items added</td></tr>\`;
  return \`<h2>\${escapeHtml(st.header.styleNo||'Untitled')} — \${escapeHtml(st.header.desc||'Style')}</h2>
    <div class="pmeta">Generated \${new Date().toLocaleString()}</div>
    <table style="margin-bottom:14px;"><tbody>
      <tr><td><b>Style No.</b></td><td>\${escapeHtml(st.header.styleNo||'—')}</td><td><b>Status</b></td><td>\${escapeHtml(st.status||'Draft')}</td></tr>
      <tr><td><b>Description</b></td><td>\${escapeHtml(st.header.desc||'—')}</td><td><b>Buyer</b></td><td>\${escapeHtml(st.header.buyer||'—')}</td></tr>
      <tr><td><b>Fabric</b></td><td>\${escapeHtml(st.header.fabric||'—')}</td><td><b>Compiled By</b></td><td>\${escapeHtml(st.header.compiler||'—')}</td></tr>
      <tr><td><b>Compiled Date</b></td><td colspan="3">\${escapeHtml(st.header.date||'—')}</td></tr>
    </tbody></table>
    <table style="margin-bottom:14px;"><thead><tr><th>Total SMV</th><th>Target/Hr</th><th># Items</th></tr></thead>
    <tbody><tr class="right"><td class="right">\${total.toFixed(4)}</td><td class="right">\${cap}</td><td class="right">\${(st.items||[]).length}</td></tr></tbody></table>
    <table><thead><tr><th>Ln</th><th>Type</th><th>Code</th><th>Name</th><th class="right">Qty</th><th class="right">SMV (ea)</th><th class="right">Line SMV</th></tr></thead>
    <tbody>\${itemRows}</tbody></table>\`;
}
function exportStyleAsPdf(st){
  try{ printHtmlSheet(styleSheetHtml(st), (st.header.styleNo||'style')+'_sheet'); return Promise.resolve(); }
  catch(err){ console.error('Print failed:', err); alert('Print failed: '+(err && err.message ? err.message : err)); return Promise.reject(err); }
}
function exportStyleAsXlsx(st){
  try{
    const html = \`<html><head><meta charset="UTF-8"></head><body>\${styleSheetHtml(st)}</body></html>\`;
    downloadBlob((st.header.styleNo||'style')+'_sheet.xls', html, 'application/vnd.ms-excel');
    showToast('Excel downloaded ✓');
    return Promise.resolve();
  }catch(err){ console.error('Export Excel failed:', err); alert('Export Excel failed: '+(err && err.message ? err.message : err)); return Promise.reject(err); }
}
$('stToolbarExportXlsx').addEventListener('click',()=>{
  const st=currentStyle(); if(!st) return;
  exportStyleAsGsd(st);
});
$('stToolbarPrint').addEventListener('click',()=>{
  const st=currentStyle(); if(!st) return;
  exportStyleAsPdf(st);
});
$('stSave').addEventListener('click', async ()=>{
  const st=currentStyle(); if(!st) return;
  collectStyleForm(st);
  await persist('style',st); closeStyleEditor(); goto('styles'); showToast('Style saved ✓');
});


/* =========================================================================
   PICKER MODAL (reusable)
   ========================================================================= */
let pickerState={types:[],active:null,onAdd:null};
function openPicker({title,types,onAdd}){
  pickerState={types,active:types[0],onAdd,folderId:null};
  $('pickerTitle').textContent=title;
  $('pickerSearch').value='';
  renderPickerTabs(); renderPickerFolders(); renderPickerList('');
  $('pickerBg').classList.add('show');
}
function renderPickerTabs(){
  const labels={feature:'Features',macro:'Macros',op:'Operations'};
  $('pickerTabs').innerHTML = pickerState.types.map(t=>\`<button data-t="\${t}" class="\${t===pickerState.active?'active':''}">\${labels[t]}</button>\`).join('');
  $('pickerTabs').querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>{
    pickerState.active=b.dataset.t; pickerState.folderId=null;
    renderPickerTabs(); renderPickerFolders(); renderPickerList($('pickerSearch').value);
  }));
}
function collectFolderIdsWithChildren(type, rootId){
  const ids=new Set([rootId]);
  let grew=true;
  while(grew){
    grew=false;
    for(const f of (FOLDERS[type]||[])){
      if(ids.has(f.parentId) && !ids.has(f.id)){ ids.add(f.id); grew=true; }
    }
  }
  return ids;
}
function renderPickerFolders(){
  const wrap=$('pickerFolders'); if(!wrap) return;
  const type=pickerState.active;
  const folders=FOLDERS[type]||[];
  const itemsArr = type==='op'?OPS:(type==='macro'?MACROS:FEATURES);
  let html = \`<div class="tree-row \${pickerState.folderId===null?'active':''}" data-pfolder="">
      <span class="tree-toggle">·</span><span class="tree-name">All \${type==='op'?'Operations':(type==='macro'?'Macros':'Features')}</span><span class="tree-count">\${itemsArr.length}</span></div>\`;
  function node(folder,depth){
    let h=\`<div class="tree-row \${pickerState.folderId===folder.id?'active':''}" data-pfolder="\${folder.id}" style="padding-left:\${depth*14+9}px;">
      <span class="tree-toggle">·</span><span class="tree-name">\${escapeHtml(folder.name)}</span><span class="tree-count">\${folderCount(type,folder.id)}</span></div>\`;
    folders.filter(f=>f.parentId===folder.id).forEach(c=>{ h+=node(c,depth+1); });
    return h;
  }
  folders.filter(f=>f.parentId===null).forEach(f=>{ html+=node(f,1); });
  wrap.innerHTML=html;
  wrap.querySelectorAll('[data-pfolder]').forEach(el=>el.addEventListener('click',()=>{
    pickerState.folderId = el.dataset.pfolder || null;
    renderPickerFolders();
    renderPickerList($('pickerSearch').value);
  }));
}
function renderPickerList(query){
  const q=(query||'').toLowerCase();
  let source=[];
  if(pickerState.active==='feature') source=FEATURES.map(f=>({refType:'feature',refId:f.id,code:f.code,name:f.name,smv:featureSmv(f),folderId:f.folderId}));
  if(pickerState.active==='macro') source=MACROS.map(m=>({refType:'macro',refId:m.id,code:m.code,name:m.name,smv:macroSmv(m),folderId:m.folderId}));
  if(pickerState.active==='op') source=OPS.map(o=>({refType:'op',refId:o.id,code:o.code,name:o.description||o.component,smv:computeOp(o).smv,folderId:o.folderId}));
  if(pickerState.folderId){
    const idSet=collectFolderIdsWithChildren(pickerState.active,pickerState.folderId);
    source=source.filter(s=>idSet.has(s.folderId));
  }
  if(q) source=source.filter(s=>(s.code+' '+s.name).toLowerCase().includes(q));
  const list=$('pickerList');
  if(!source.length){ list.innerHTML=\`<div class="muted" style="padding:20px 0;text-align:center;">No items found in this folder.</div>\`; return; }
  list.innerHTML = source.map(s=>\`<div class="pick-row">
    <div><div class="pn">\${escapeHtml(s.code)} — \${escapeHtml(s.name||'Untitled')}</div><div class="ps">SMV: \${s.smv.toFixed(4)}</div></div>
    <button class="tape small" data-add="\${s.refType}:\${s.refId}">+ Add</button></div>\`).join('');
  list.querySelectorAll('[data-add]').forEach(b=>b.addEventListener('click',()=>{
    const [refType,refId]=b.dataset.add.split(':');
    pickerState.onAdd(refType,refId);
    showToast('Added ✓');
  }));
}
$('pickerSearch').addEventListener('input',e=>renderPickerList(e.target.value));
$('pickerCreateBtn').addEventListener('click', debounceClick(async ()=>{
  const code=$('pickerNewCode').value.trim().toUpperCase();
  if(!code){ alert('Type a code first.'); return; }
  const type=pickerState.active;
  const arr = type==='op'?OPS:(type==='macro'?MACROS:FEATURES);
  const dup = arr.find(x=>(x.code||'').trim().toUpperCase()===code);
  if(dup){ alert('This code is already used by an existing '+(type==='op'?'operation':type)+'. Pick a different code.'); return; }
  let item;
  if(type==='op'){
    item=newOperation(); item.code=code; item.folderId=pickerState.folderId||selectedFolder.op;
    OPS.push(item); await persist('op',item);
  } else if(type==='macro'){
    item={id:uid('mc_'),code:code,name:'',items:[],folderId:pickerState.folderId||selectedFolder.macro,
      status:'Draft',notes:'',checkinHistory:[],createdAt:Date.now(),updatedAt:Date.now(),
      elements:[],bundleQty:1,allowMachine:5,allowPersonal:5,allowContingency:0};
    MACROS.push(item); await persist('macro',item);
  } else {
    item={id:uid('ft_'),code:code,name:'',items:[],folderId:pickerState.folderId||selectedFolder.feature};
    FEATURES.push(item); await persist('feature',item);
  }
  pickerState.onAdd(type,item.id);
  $('pickerNewCode').value='';
  renderPickerFolders(); renderPickerList($('pickerSearch').value);
  showToast('Created & added ✓ — open it later to fill in the details');
}));
$('pickerClose').addEventListener('click',()=>$('pickerBg').classList.remove('show'));
$('pickerBg').addEventListener('click',e=>{ if(e.target.id==='pickerBg') $('pickerBg').classList.remove('show'); });

/* =========================================================================
   SAVE AS — folder picker (Operations & Macros)
   ========================================================================= */
let saveAsState={type:null,folderId:null,expanded:new Set()};
function openSaveAsPicker(type){
  saveAsState={type,folderId:null,expanded:new Set()};
  const typeLabel = type==='macro'?'Macros':(type==='style'?'Styles':'Operations');
  $('saveAsTitle').textContent = 'Save As — Choose Folder ('+typeLabel+')';
  renderSaveAsFolders();
  $('saveAsBg').classList.add('show');
}
function closeSaveAsPicker(){ $('saveAsBg').classList.remove('show'); }
function renderSaveAsFolders(){
  const wrap=$('saveAsFolders'); if(!wrap) return;
  const type=saveAsState.type;
  const folders=FOLDERS[type]||[];
  let html = \`<div class="tree-row \${saveAsState.folderId===null?'active':''}" data-sfolder="">
      <span class="tree-toggle">·</span><span class="tree-name">\${type==='macro'?'Macro':(type==='style'?'Style':'Operation')}</span></div>\`;
  function node(folder,depth){
    const children = folders.filter(f=>f.parentId===folder.id);
    const isOpen = saveAsState.expanded.has(folder.id);
    const toggle = children.length ? (isOpen?'▾':'▸') : '·';
    let h=\`<div class="tree-row \${saveAsState.folderId===folder.id?'active':''}" data-sfolder="\${folder.id}" style="padding-left:\${depth*14+9}px;">
      <span class="tree-toggle">\${toggle}</span><span class="tree-name">\${escapeHtml(folder.name)}\${folder.startRange?\` <span class="muted">(\${escapeHtml(folder.startRange)}–\${escapeHtml(folder.endRange)})</span>\`:''}</span></div>\`;
    if(isOpen){ children.forEach(c=>{ h+=node(c,depth+1); }); }
    return h;
  }
  folders.filter(f=>f.parentId===null).forEach(f=>{ html+=node(f,1); });
  wrap.innerHTML=html;
  wrap.querySelectorAll('[data-sfolder]').forEach(el=>el.addEventListener('click',()=>{
    const id = el.dataset.sfolder || null;
    saveAsState.folderId = id;
    if(id){
      if(saveAsState.expanded.has(id)) saveAsState.expanded.delete(id);
      else saveAsState.expanded.add(id);
    }
    renderSaveAsFolders();
  }));
}
$('saveAsClose').addEventListener('click', closeSaveAsPicker);
$('saveAsBg').addEventListener('click',e=>{ if(e.target.id==='saveAsBg') closeSaveAsPicker(); });
$('saveAsConfirm').addEventListener('click', debounceClick(async ()=>{
  const {type,folderId}=saveAsState;
  if(type==='op'){
    const op=currentOp(); if(!op) return;
    collectOpForm(op);
    const v=validateOpCode(op); if(!v.ok){ alert(v.message); return; }
    await persist('op',op);
    const copy=JSON.parse(JSON.stringify(op));
    copy.id=uid('op_'); copy.customId=''; copy.status='Draft'; copy.checkinHistory=[];
    copy.folderId=folderId;
    copy.code = nextCodeForFolder('op',folderId) || (op.code+'-COPY');
    copy.createdAt=Date.now(); copy.updatedAt=Date.now();
    OPS.push(copy);
    await persist('op',copy);
    closeSaveAsPicker();
    showToast('Saved as new operation ✓'); openOpEditor(copy.id);
  } else if(type==='macro'){
    const mc=currentMacro(); if(!mc) return;
    collectMcForm(mc);
    if(!(mc.title||'').trim()){ alert('Please enter a Title before saving.'); return; }
    await persist('macro',mc);
    const copy=JSON.parse(JSON.stringify(mc));
    copy.id=uid('mc_'); copy.status='Draft'; copy.checkinHistory=[];
    copy.folderId=folderId;
    copy.code = nextCodeForFolder('macro',folderId) || ((mc.code||'MACRO')+'-COPY');
    copy.createdAt=Date.now(); copy.updatedAt=Date.now();
    MACROS.push(copy);
    await persist('macro',copy);
    closeSaveAsPicker();
    showToast('Saved as new macro ✓'); openMacroEditor(copy.id);
  } else if(type==='style'){
    const st=currentStyle(); if(!st) return;
    collectStyleForm(st);
    if(!(st.header.styleNo||'').trim()){ alert('Please enter a Style No. before saving.'); return; }
    await persist('style',st);
    const copy=JSON.parse(JSON.stringify(st));
    copy.id=uid('st_'); copy.status='Draft'; copy.checkinHistory=[];
    copy.folderId=folderId;
    copy.header.styleNo = (st.header.styleNo||'STYLE')+'-COPY';
    copy.createdAt=Date.now(); copy.updatedAt=Date.now();
    STYLES.push(copy);
    await persist('style',copy);
    closeSaveAsPicker();
    showToast('Saved as new style ✓'); openStyleEditor(copy.id);
  }
}));

/* =========================================================================
   GLOBAL SEARCH (live multi-column results: Feature / Macro / Operation)
   ========================================================================= */
function gsrMatch(text,q){ return (text||'').toLowerCase().includes(q); }
function gsrItemHtml(code,name){
  return \`<div class="gsr-item"><div class="code">\${escapeHtml(code||'—')}</div><div class="name">\${escapeHtml(name||'')}</div></div>\`;
}
function runGlobalSearch(qRaw){
  const q=(qRaw||'').trim().toLowerCase();
  const panel=$('globalSearchResults');
  if(!q){ panel.classList.remove('show'); return; }

  const ftMatches = FEATURES.filter(f=>gsrMatch(f.code,q)||gsrMatch(f.name,q));
  const mcMatches = MACROS.filter(m=>gsrMatch(m.code,q)||gsrMatch(m.name,q));
  const opMatches = OPS.filter(o=>gsrMatch(o.code,q)||gsrMatch(o.description,q)||gsrMatch(o.component,q));

  $('gsrFeatureTitle').textContent = \`Feature (\${ftMatches.length})\`;
  $('gsrMacroTitle').textContent = \`Macro (\${mcMatches.length})\`;
  $('gsrOpTitle').textContent = \`Operation (\${opMatches.length})\`;

  const ftBody=$('gsrFeatureBody'), mcBody=$('gsrMacroBody'), opBody=$('gsrOpBody');
  ftBody.innerHTML = ftMatches.length ? ftMatches.slice(0,20).map(f=>\`<a href="#" data-gsr-open="feature:\${f.id}" style="text-decoration:none;color:inherit;">\${gsrItemHtml(f.code,f.name)}</a>\`).join('') : \`<div class="gsr-empty">No matches.</div>\`;
  mcBody.innerHTML = mcMatches.length ? mcMatches.slice(0,20).map(m=>\`<a href="#" data-gsr-open="macro:\${m.id}" style="text-decoration:none;color:inherit;">\${gsrItemHtml(m.code,m.name)}</a>\`).join('') : \`<div class="gsr-empty">No matches.</div>\`;
  opBody.innerHTML = opMatches.length ? opMatches.slice(0,20).map(o=>\`<a href="#" data-gsr-open="op:\${o.id}" style="text-decoration:none;color:inherit;">\${gsrItemHtml(o.code,o.description||o.component)}</a>\`).join('') : \`<div class="gsr-empty">No matches.</div>\`;

  panel.querySelectorAll('[data-gsr-open]').forEach(a=>a.addEventListener('click',e=>{
    e.preventDefault();
    const [t,id]=a.dataset.gsrOpen.split(':');
    if(t==='op') openOpEditor(id);
    else if(t==='macro') openMacroEditor(id);
    else if(t==='feature') openFeatureEditor(id);
    panel.classList.remove('show');
  }));

  panel.classList.add('show');
}
$('globalSearch').addEventListener('input', e=>{
  const q=e.target.value;
  $('globalSearchClear').classList.toggle('hidden', !q);
  runGlobalSearch(q);
});
$('globalSearch').addEventListener('focus', e=>{ if(e.target.value.trim()) runGlobalSearch(e.target.value); });
$('globalSearch').addEventListener('keydown', e=>{ if(e.key==='Escape'){ $('globalSearchResults').classList.remove('show'); e.target.blur(); } });
$('globalSearchClear').addEventListener('click', ()=>{
  $('globalSearch').value=''; $('globalSearchClear').classList.add('hidden');
  $('globalSearchResults').classList.remove('show'); $('globalSearch').focus();
});
document.addEventListener('click', e=>{
  if(!e.target.closest('.search-wrap')) $('globalSearchResults').classList.remove('show');
});

/* =========================================================================
   INIT
   ========================================================================= */
(async function init(){
  buildCodeDatalist();
  initColResize('bolElTable');
  initColResize('stylesTable');
  await loadAll();
  await ensureCurrentUser();
  if(!LOGGED_IN_USER) goto('dashboard');
  if(location.hash && location.hash.indexOf('openItem=')===0){
    const parts = location.hash.replace('#openItem=','').split(':');
    const t=parts[0], id=parts[1];
    if(t==='op') openOpEditor(id);
    else if(t==='macro') openMacroEditor(id);
    else if(t==='feature') openFeatureEditor(id);
  }
})();
`;
