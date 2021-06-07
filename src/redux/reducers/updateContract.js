//CONTANTS
const UPDATE_CONTRACT  = "UPDATE_CONTRACT"

const data = {
    array : [],
    offset: 0
}

//REDUCERS
export const updateContract = ( state =  false , action) => {
    switch( action.type ){
        case UPDATE_CONTRACT:
            //send data to array data
            return action.data
        default:
            return state
    }
}
