export const titleVideo = (state = [], action: any) => {
    if (action.type === 'GET_TITLE_VIDEO') {
        return action.payload;
    }

    return state;
}
