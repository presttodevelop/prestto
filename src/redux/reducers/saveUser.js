//CONTANTS
const LOGIN_USER  = 'LOGIN_USER'

//Receive data
const data = {
    array : [],
    offset: 0
}
//REDUCERS
export const saveUser = ( state =  data, action) => { 
    switch( action.type ){
        case LOGIN_USER:
            //send data to array data
            return { ...state, array: action }
        default:
            return state
    }
}