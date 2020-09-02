import axios, {AxiosResponse} from "axios";

import {ApiUrls} from "../api-urls";

import {CardInfoModel} from "../../models/card-info.model";
import {VideoFileQueryModel} from "../../models/title-video-query.model";

export function getTitleInfo(titleId: number): Promise<CardInfoModel> {
    return axios.get<CardInfoModel>(ApiUrls.getTitleInfoUrl(), {
        params: {titleId}
    }).then((res: AxiosResponse<CardInfoModel>) => res.data)
}

export function downloadTitle(titleId: number): Promise<CardInfoModel> {
    return axios.post<CardInfoModel>(ApiUrls.getTitleDownloadUrl(), {titleId})
        .then((res: AxiosResponse<CardInfoModel>) => res.data)
}

export function getTitleVideoLink(video: VideoFileQueryModel): string {
    return `${ApiUrls.getTitleVideoUrl()}?${video.getQuery()}`;
}
