function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/BaseMover-Cmv1jApl.js","assets/index-CJtBVQGp.js","assets/index-BINi7toQ.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-CJtBVQGp.js";async function _(a,e=!0){await a.addMover("base",async()=>{const{BaseMover:o}=await r(()=>import("./BaseMover-Cmv1jApl.js"),__vite__mapDeps([0,1,2]));return new o},e)}export{_ as loadBaseMover};
