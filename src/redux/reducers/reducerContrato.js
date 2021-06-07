//CONTANTS
const CONTRATO_SAVE  = "CONTRATO_SAVE"


//REDUCERS
export const savecontrato = ( state =  [] , action) => {
    switch( action.type ){
        case CONTRATO_SAVE:
            //send data to array data
            return action.data
        default:
            return state
    }
}
