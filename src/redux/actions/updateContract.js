
export const updateContract = (contrato) => async (dispatch) => {
    dispatch({
        type: UPDATE_CONTRACT,
        contrato,
    })
}