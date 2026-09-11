// Structural integrity of the content set: parse, refs, tags, quiz shape, duplicates.
global.window={}; const fs=require("fs");
for(const f of fs.readdirSync("data/content").filter(f=>f.endsWith(".js"))) eval(fs.readFileSync("data/content/"+f,"utf8"));
eval(fs.readFileSync("data/diagrams.js","utf8")); eval(fs.readFileSync("data/syllabus.js","utf8"));
const grp=new Set(), lo=new Set(); window.SYLLABUS.forEach(s=>s.groups.forEach(g=>{grp.add(g.code);g.items.forEach(i=>lo.add(i.c));}));
let bad=0, tot=0, withDg=0; const seen=new Map(), used=new Set();
for(const [code,s] of Object.entries(window.SC)){
  s.articles.forEach(a=>{ tot++;
    const ms=[...a.body.matchAll(/data-d="([^"]+)"/g)].map(m=>m[1]); if(ms.length) withDg++;
    ms.forEach(x=>{ used.add(x); if(!window.DIAG[x]){console.log("MISSING DIAG",a.id,x);bad++;} });
    a.tags.forEach(t=>{ if(!grp.has(t)&&!lo.has(t)){console.log("BAD TAG",a.id,t);bad++;} });
    ["p","ul","ol","li","table","thead","tbody","tr","td","th","h3","figure","div"].forEach(t=>{
      const o=(a.body.match(new RegExp("<"+t+"[ >]","g"))||[]).length, c=(a.body.match(new RegExp("</"+t+">","g"))||[]).length;
      if(o!==c){console.log("UNBALANCED",a.id,t,o+"/"+c);bad++;} });
  });
  s.quiz.forEach((q,i)=>{ if(q.a.length!==4||q.c<0||q.c>3){console.log("QUIZ",code,i);bad++;}
    const k=q.q.trim().toLowerCase(); if(seen.has(k)){console.log("DUP",code,q.q.slice(0,50));bad++;} else seen.set(k,code); });
}
const unused=Object.keys(window.DIAG).filter(k=>!used.has(k));
console.log(`articles ${tot} | with a figure ${withDg} | diagrams ${Object.keys(window.DIAG).length} | unreferenced ${unused.length}${unused.length?": "+unused.join(", "):""}`);
console.log(bad? bad+" ISSUES" : "all structural checks pass");
process.exit(bad?1:0);
