import {combineReducers} from "redux";

import {ongoings} from "./ongoing.reducer";
import {title} from "./title.reducer";
import {titleVideo} from "./title-video.reducer";

export default combineReducers({
    ongoings,
    title,
    titleVideo
});
