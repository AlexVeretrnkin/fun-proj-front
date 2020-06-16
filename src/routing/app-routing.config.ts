import { RouteConfigModel } from '../models/route-config.model';

import OngoingContainer from '../containers/ongoing.container'
import Upload from '../upload/upload';

export const routes: RouteConfigModel[] = [
  {
    path: "/ongoings",
    component: OngoingContainer
  },
  {
    path: "/upload",
    component: Upload
  }
];
