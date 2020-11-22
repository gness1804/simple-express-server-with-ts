import 'reflect-metadata';
import {
  Methods,
  MetadataKeys,
  decorator,
  decoratorFactory,
} from '../../types/';

function bindRoute(method: string): decoratorFactory {
  return function (path: string): decorator {
    return function (
      classTarget: any,
      classKey: string,
      // desc: PropertyDescriptor,
    ): void {
      Reflect.defineMetadata(MetadataKeys.path, path, classTarget, classKey);
      Reflect.defineMetadata(
        MetadataKeys.method,
        method,
        classTarget,
        classKey,
      );
    };
  };
}

export const get = bindRoute(Methods.get);
export const put = bindRoute(Methods.put);
export const post = bindRoute(Methods.post);
export const del = bindRoute(Methods.del);
export const patch = bindRoute(Methods.patch);
