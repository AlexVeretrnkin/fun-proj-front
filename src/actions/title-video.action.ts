import {TitleVideoModel} from "../models/titleVideo.model";

export const getTitleVideo = (payload: TitleVideoModel) => {
    return {
        type: 'GET_TITLE_VIDEO',
        payload: payload
    }
}
