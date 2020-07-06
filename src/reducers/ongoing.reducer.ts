export const ongoings = (state = [], action: any) => {
    if (action.type === 'GET_ONGOINGS') {
        return [
            ...action.payload
        ];
    }

    return state;
}
