
export const saveContrato = (contrato) => async (dispatch) => {
    dispatch({
        type: SAVE_CONTRATO,
        contrato,
    })
}