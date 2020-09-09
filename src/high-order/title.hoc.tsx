import { connect } from 'react-redux'

import {ChosenTitle} from "../title/chosen-title";

import {getTitle} from "../actions/title.action";
import {downloadTitle, getTitleInfo, getTitleVideoLink} from "../core/title/title.service";
import {VideoFileQueryModel} from "../models/title-video-query.model";
import {getTitleVideo} from "../actions/title-video.action";

import axios, {AxiosResponse} from "axios";

let titleId: number;

let getFoundedTitle = (state: any) => {
    console.log(state);

    return {
        title: state.title,
        titleVideo: state.titleVideo
    };
};

const mapDispatchToProps = (dispatch: Function) => {
    return {
        setTitle: async (id: number) => {
            titleId = id;

            // axios({
            //     url: getTitleVideoLink(new VideoFileQueryModel(titleId, 1)),
            //     method: 'GET',
            //     responseType: 'blob', // important
            // }).then((response) => {
            //     const url = window.URL.createObjectURL(new Blob([response.data]));
            //
            //     dispatch(getTitleVideo(
            //         {
            //             videoUrl: url,
            //             currentSeries: 1
            //         }
            //     ));
            // });

            dispatch(getTitleVideo(
                {
                    videoUrl: getTitleVideoLink(new VideoFileQueryModel(titleId, 1)),
                    currentSeries: 1
                }
            ));

            dispatch(getTitle(await getTitleInfo(id)));
        },
        downloadTitle: async (id: number) => await downloadTitle(id),
        setVideo: (series: number = 1) => {
            dispatch(
                getTitleVideo(
                    {
                        currentSeries: series,
                        videoUrl: getTitleVideoLink(new VideoFileQueryModel(titleId, series))
                    }
                )
            )
        }
    }
}

const ConnectedTitle = connect(getFoundedTitle, mapDispatchToProps)(ChosenTitle)

export default ConnectedTitle;
