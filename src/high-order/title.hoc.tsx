import { connect } from 'react-redux'

import {ChosenTitle} from "../title/chosen-title";

import {getTitle} from "../actions/title.action";
import {downloadTitle, getTitleInfo, getTitleVideoLink} from "../core/title/title.service";
import {VideoFileQueryModel} from "../models/title-video-query.model";
import {getTitleVideo} from "../actions/title-video.action";

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

            dispatch(getTitleVideo(getTitleVideoLink(new VideoFileQueryModel(await titleId, 1))))

            dispatch(getTitle(await getTitleInfo(id)));
        },
        downloadTitle: async (id: number) => await downloadTitle(id),
        setVideo: (series: number = 1) => dispatch(getTitleVideo(getTitleVideoLink(new VideoFileQueryModel(titleId, series))))
    }
}

const ConnectedTitle = connect(getFoundedTitle, mapDispatchToProps)(ChosenTitle)

export default ConnectedTitle;
