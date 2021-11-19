export const registerModules = (router,store,modules)=>{
  for(let module in modules){
    if(modules[module].moduleStore)
      store.registerModule(module, modules[module].moduleStore)

    if(modules[module].moduleRoute)
      router.addRoute(modules[module].moduleRoute);
  }
}
