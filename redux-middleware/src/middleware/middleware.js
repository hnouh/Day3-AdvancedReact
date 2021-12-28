export const myFirstMiddleWare=(store)=>(next)=>(action)=>{
    // console.log("my first middleware")
    return (next(action))
}

export const mySeconMiddleWare=(store)=>(next)=>(action)=>{
    // console.log("my second middleware")
    // console.log(store.getState().counter.counter)
    if(store.getState().counter.counter>=10){
        return next({type:"DEC-COUTER"})
    }

    return (next(action))
}


export const myThirdMiddleWare=(store)=>(next)=>(action)=>{
    if(store.getState().counter.counter>=10){
        if(action.type=="INCREASE"){
            console.log("increase")
            return next({type:"INCREASE", payload:20})
        }
    }
    
    return (next(action))
}



