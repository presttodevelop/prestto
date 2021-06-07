export const saveForm = ( state = [], action) => {
    switch(action.type){
        case 'SAVE_FORM':
            return action;
        default:
            return state;
    }
}