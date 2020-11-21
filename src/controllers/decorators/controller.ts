import 'reflect-metadata';
import { AppRouter } from '../../AppRouter';
import { Methods } from '../../types/';

export function controller(routePrefix: string) {
  return function (target: Function): void {
    const router = AppRouter.getInstance();
    for (const classKey in target.prototype) {
      if (Object.prototype.hasOwnProperty.call(target.prototype, classKey)) {
        const routeHandler = target.prototype[classKey];
        const path = Reflect.getMetadata('path', target.prototype, classKey);
        const method: Methods = Reflect.getMetadata(
          'method',
          target.prototype,
          classKey,
        );

        if (path) {
          router[method](`${routePrefix}${path}`, routeHandler);
        }
      }
    }
  };
}
