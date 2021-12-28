import axios from "axios"

const initialState ={
    posts:[]
}

function posts(state=initialState, {type, payload}) {
    switch(type){
        case 'FETCH-POSTS': 
            return {posts:payload}
        default: return state
    }
}
export default posts;

export const fetchData= async (dispatch) =>{
    const postFetch = await axios.get('https://jsonplaceholder.typicode.com/posts')
        dispatch( {type:'FETCH-POSTS',payload:postFetch.data})
}
