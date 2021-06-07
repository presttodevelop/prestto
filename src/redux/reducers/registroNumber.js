export const getRegister = ( state = [], action) => {
    switch(action.type){
        case 'START_GET_REGISTER':
            return action;
        case 'COMPLETE_GET_REGISTER':
            return action.data;
        case 'ERROR_GET_REGISTER':
            return action;
        default:
            return state;
    }
}