import { combineReducers } from 'redux'
import { getUsers } from './UserReducers'
import { getRegister } from './registroNumber';
import { saveForm } from './SaveForm'
import { validateForm } from './validateForm';
import { saveCalculadora } from './saveCalculadora';
import { saveUser } from './saveUser';
import { savecontrato } from './reducerContrato';
import { updateContract } from './updateContract';


export default combineReducers({ 
    saveForm,
    getUsers,
    getRegister,
    validateForm,
    saveCalculadora,
    saveUser,
    savecontrato,
    updateContract
})