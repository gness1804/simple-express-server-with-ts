import 'reflect-metadata';
import { RequestHandler } from 'express';
import { AppRouter } from '../../AppRouter';
import { Methods, MetadataKeys } from '../../types/';

export function controller(routePrefix: string) {
  return function (target: Function): void {
    const router = AppRouter.getInstance();
    for (const classKey in target.prototype) {
      if (Object.prototype.hasOwnProperty.call(target.prototype, classKey)) {
        const routeHandler = target.prototype[classKey];
        const path: string = Reflect.getMetadata(
          MetadataKeys.path,
          target.prototype,
          classKey,
        );
        const method: Methods = Reflect.getMetadata(
          MetadataKeys.method,
          target.prototype,
          classKey,
        );

        const middlewares: RequestHandler[] =
          Reflect.getMetadata(
            MetadataKeys.middleware,
            target.prototype,
            classKey,
          ) || [];

        if (path) {
          router[method](`${routePrefix}${path}`, ...middlewares, routeHandler);
        }
      }
    }
  };
}
