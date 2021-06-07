
//ACTIONS 
export const saveUserLogin = (user) => async (dispatch) => {
    dispatch({
        type: LOGIN_USER,
        user,
    })
}