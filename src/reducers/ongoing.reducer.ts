export const ongoings = (state = [], action: any) => {
    if (action.type === 'GET_ONGOINGS') {
        return [
            ...state,
            ...action.payload
        ];
    }

    return state;
}
