import 'reflect-metadata';
import { AppRouter } from '../../AppRouter';

export function controller(routePrefix: string) {
  return function (target: Function) {
    const router = AppRouter.getInstance();
    for (const classKey in target.prototype) {
      if (Object.prototype.hasOwnProperty.call(target.prototype, classKey)) {
        const routeHandler = target.prototype[classKey];
        const path = Reflect.getMetadata('path', target.prototype, classKey);

        if (path) {
          router.get(`${routePrefix}${path}`, routeHandler);
        }
      }
    }
  };
}
