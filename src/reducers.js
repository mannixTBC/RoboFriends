import {
    CHANGE_SEARCH_FIELD,
    CHANGE_CONSOLE_LOG,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCES,
    REQUEST_ROBOTS_FAILED
     
    } from './constants';


const initialStateRobots = {
    searchField:'',
    changeLog:'',
    
}

export const searchRobots = (state = initialStateRobots, action = {}) => {
    switch(action.type) {
        case  CHANGE_SEARCH_FIELD :
            return Object.assign({},state,{searchField:action.payload});
        case CHANGE_CONSOLE_LOG :
            return  Object.assign({},state,{changeLog:action.payload});
        default:
            return state
    }
}

const initialStateSearch = {
    isPending: true,
    robots: [],
    error : ''
}

export  const requestRobots = (state= initialStateSearch, action={}) => {
    switch(action.type){
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({},state, {isPending:true})
        case REQUEST_ROBOTS_SUCCES:
            return Object.assign({},state, {robots:action.payload, isPending:false})    
        case REQUEST_ROBOTS_FAILED:
            return Object.assign({},state,{error:action.payload,isPending:false })
        default:
            return state
    }
}

