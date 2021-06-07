
export const saveCalculadora = ( state = [], action) => {
    switch(action.type){
        case 'SAVE_CALCULADORA':
            return state
        default:
            return action;
    }
}