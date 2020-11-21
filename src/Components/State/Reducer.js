const Reducer = (state, action) => {
    switch (action.type)
    {
        case 'LOGIN':
            return {
                ...state,
                userData: action.payload
            };
        case 'REGISTER':
            return {
                ...state,
                userData: action.payload
            };
        case 'GET_USER_ID':
            return {
                ...state,
                userToken: action.payload
            };
        default:
            return state;
    }
};

export default Reducer;