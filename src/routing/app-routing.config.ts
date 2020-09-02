import { RouteConfigModel } from '../models/route-config.model';

import Upload from '../upload/upload';

import ConnectedOngoings from "../high-order/ongoing.hoc";
import ConnectedTitle from "../high-order/title.hoc";

export const routes: RouteConfigModel[] = [
  {
    path: "/ongoings",
    component: ConnectedOngoings
  },
  {
    path: "/upload",
    component: Upload
  },
  {
    path: "/title/:id",
    component: ConnectedTitle
  },
];
