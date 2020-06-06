export class RouteConfigModel {
  public component: Function = () => {};
  public path: string = '';
  public routes?: RouteConfigModel[];
}
