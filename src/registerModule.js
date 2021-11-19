export const registerModules = (router,modules)=>{
  for(let module in modules){
    router.addRoute(modules[module].moduleRoute);
  }
}
