function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/CircleDrawer-Y8VgPN5K.js","assets/index-BHu33pQw.js","assets/index-DXFoFm9C.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-BHu33pQw.js";async function o(a,e=!0){const{CircleDrawer:r}=await i(()=>import("./CircleDrawer-Y8VgPN5K.js"),__vite__mapDeps([0,1,2]));await a.addShape("circle",new r,e)}export{o as loadCircleShape};