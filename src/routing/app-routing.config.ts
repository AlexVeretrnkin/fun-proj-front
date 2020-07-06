import { RouteConfigModel } from '../models/route-config.model';

import Upload from '../upload/upload';

import ConnectedOngoings from "../high-order/ongoing.hoc";

export const routes: RouteConfigModel[] = [
  {
    path: "/ongoings",
    component: ConnectedOngoings
  },
  {
    path: "/upload",
    component: Upload
  }
];
