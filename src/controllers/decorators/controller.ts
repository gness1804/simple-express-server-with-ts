import 'reflect-metadata';
import { AppRouter } from '../../AppRouter';
import { httpMethod } from '../../types/index';

export function controller(routePrefix: string) {
  return function (target: Function): void {
    const router = AppRouter.getInstance();
    for (const classKey in target.prototype) {
      if (Object.prototype.hasOwnProperty.call(target.prototype, classKey)) {
        const routeHandler = target.prototype[classKey];
        const path = Reflect.getMetadata('path', target.prototype, classKey);
        const method: httpMethod = Reflect.getMetadata('method', target.prototype, classKey);

        if (path) {
          router[method](`${routePrefix}${path}`, routeHandler);
        }
      }
    }
  };
}
