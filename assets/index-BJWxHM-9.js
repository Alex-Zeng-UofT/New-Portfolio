function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-fS0KIbcQ.js","assets/index-B_E9vqY_.js","assets/index-Cii1wOb7.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-B_E9vqY_.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-fS0KIbcQ.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};