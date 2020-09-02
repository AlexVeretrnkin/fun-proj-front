export const title = (state = [], action: any) => {
    if (action.type === 'GET_TITLE') {
        return {
            ...state,
            ...action.payload
        };
    }

    return state;
}
