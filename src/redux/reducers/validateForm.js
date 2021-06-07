let mensajes_error ={ 
    nombremsg:false,
    apellidopaternomsg:false,
    apellidomaternomsg:false,
    emailmsg:false,
}


export const validateForm = ( state = [], action) => {
    switch(action.type){
        case 'VALIDATE_FORM':
            if(action.data === 'nombre')
             {
                mensajes_error = { nombremsg:true}
             }

            return mensajes_error
        default:
            return action;
    }
}