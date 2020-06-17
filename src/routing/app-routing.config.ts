import { RouteConfigModel } from '../models/route-config.model';

import Upload from '../upload/upload';
import Ongoing from "../ongoing/ongoing";

export const routes: RouteConfigModel[] = [
  {
    path: "/ongoings",
    component: Ongoing
  },
  {
    path: "/upload",
    component: Upload
  }
];
