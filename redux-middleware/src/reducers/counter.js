const initialState ={
    counter:0
}

function counter(state=initialState, {type, payload}) {
    // console.log("our type is: "+type)
    // console.log("hello from reducer")
    switch(type){
        case 'INCREASE':
            // return {counter:state.counter+1}
            return {counter:state.counter+payload}
        case 'DEC-COUTER':
            // return {counter:state.counter-1}
            return {counter:state.counter-payload}
        case 'RESET-COUTER':
            return {counter:0}
        default: return state
    }
}
export default counter;

export const incCounter= (payload) =>{
    return {
    type:'INCREASE',
    payload:payload
}
}

export const decCounter= (payload) =>{
    return {
    type:'DEC-COUTER',
    payload:payload
}
}

export const resetCounter= () =>{
    return {
    type:'RESET-COUTER',
}
}