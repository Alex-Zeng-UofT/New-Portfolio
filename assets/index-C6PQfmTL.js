function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-B7glsLd9.js","assets/index-D7ID1jhZ.js","assets/index-v8eNchJi.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-D7ID1jhZ.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-B7glsLd9.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
