import http from './http';
import idhttp from './idhttp';


//getUSers
const startGetUsers = () => { return { type: 'START_GET_USERS', ready: false }}
const counterGetRegister = () => { return { type: 'START_GET_REGISTER', ready: false }}
const completeRegister = (data) => { return { type: 'COMPLETE_GET_REGISTER', data }}
const completeGetUSers = (data) => { return { type: 'COMPLETE_GET_USERS', data }}
const errorGetRegister = (error) => { return { type:'ERROR_GET_REGISTER', error }}
const errorGetUsers = (error) => { return { type:'ERROR_GET_USERS', error }}
const saveFormComplete = (data) => {return { type: 'SAVE_FORM', data}};
const saveCalculadora = (data) => {return { type: 'SAVE_CALCULADORA', data}}
export const saveContrato = (data) => {return { type: 'SAVE_CONTRATO', data}}
export const updateContract = (data) => {return { type: 'UPDATE_CONTRACT', data}}

export default function validateForm(data){
    return { type: 'VALIDATE_FORM', data}
};




export const getUsers = () => {
    return ( dispatch, getState ) => {
        dispatch(startGetUsers());
        //TODO Resquest con  axios esto es una promesa
        http.get('/')
        .then((response) => {
            if(response.data)
                dispatch(completeGetUSers(response.data));
        })
        .catch((error) => {
                dispatch(errorGetUsers(error))
        })
    }
}


export const getRegister = () => {
    return ( dispatch, getState ) => {
        dispatch(counterGetRegister());
        //TODO Resquest con  axios esto es una promesa
        idhttp.get('/')
        .then((response) => {
            if(response.data)
                dispatch(completeRegister(response.data));
        })
        .catch((error) => {
                dispatch(errorGetUsers(error))
        })
    }
}