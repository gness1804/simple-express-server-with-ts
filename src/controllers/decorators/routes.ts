import 'reflect-metadata';
import { decorator, decoratorFactory } from '../../types/index';
import { Methods } from '../../types/';

function bindRoute(method: string): decoratorFactory {
  return function (path: string): decorator {
    return function (
      classTarget: any,
      classKey: string,
      // desc: PropertyDescriptor,
    ): void {
      Reflect.defineMetadata('path', path, classTarget, classKey);
      Reflect.defineMetadata('method', method, classTarget, classKey);
    };
  };
}

export const get = bindRoute(Methods.get);
export const put = bindRoute(Methods.put);
export const post = bindRoute(Methods.post);
export const del = bindRoute(Methods.del);
export const patch = bindRoute(Methods.patch);
