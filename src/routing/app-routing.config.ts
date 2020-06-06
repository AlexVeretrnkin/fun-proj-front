import { RouteConfigModel } from '../models/route-config.model';

import Ongoing from '../ongoing/ongoing';
import Upload from '../upload/upload';

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
