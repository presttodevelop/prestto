export const getUsers = ( state = [], action) => {
    switch(action.type){
        case 'START_GET_USERS':
            return action;
        case 'COMPLET_GET_USERS':
            return action;
        case 'ERROR_GET_USER':
            return action;
        default:
            return state;
    }
}