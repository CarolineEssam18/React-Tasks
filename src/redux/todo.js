import { createStore } from "redux"

//actions 
const ADD_TODO="ADD_TODO"
const REMOVE_TODO="REMOVE_TODO"


export const addtodoaction=(payload)=>{
    return{
        type:ADD_TODO,
        payload
    }
}
export const removetodoaction=key=>{
    return{
        type:REMOVE_TODO,
        payload :key
    }
}

//state 
const initialstate={
    todos:[]
}

//reducer 
const todoreducer=(state = initialstate,action)=>{
    switch (action.type) {
        case ADD_TODO: 
        return {...state,todos:[...state.todos,action.payload]}   
        case REMOVE_TODO: 
        return {...state,todos:state.todos.filter((todo,i)=>i!==action.payload)} 
        default:
            return state;
    }
}

//store 
export const store=createStore(todoreducer)