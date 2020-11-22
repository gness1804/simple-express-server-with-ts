import 'reflect-metadata';
import { RequestHandler, Request, Response, NextFunction } from 'express';
import { AppRouter } from '../../AppRouter';
import { Methods, MetadataKeys } from '../../types/';

function validateKeys(keys: string[]): RequestHandler {
  return function (req: Request, res: Response, next: NextFunction): void {
    if (!req.body) {
      res.status(422).send('Invalid request. Request must have a valid body.');
      return;
    }
    for (const key of keys) {
      if (req.body[key]) continue;
      res.status(422).send(`Error: key '${key}' not found!!`);
      return;
    }
    next();
  };
}

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
        const requiredBodyProps: string[] =
          Reflect.getMetadata(
            MetadataKeys.validator,
            target.prototype,
            classKey,
          ) || [];

        const validator: RequestHandler = validateKeys(requiredBodyProps);

        if (path) {
          router[method](
            `${routePrefix}${path}`,
            ...middlewares,
            validator,
            routeHandler,
          );
        }
      }
    }
  };
}
