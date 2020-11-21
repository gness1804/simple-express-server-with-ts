import 'reflect-metadata';

type decorator = (classTarget: any, classKey: string) => void;
type decoratorFactory = (path: string) => decorator;

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

export const get = bindRoute('get');
export const put = bindRoute('put');
export const post = bindRoute('post');
export const del = bindRoute('delete');
export const patch = bindRoute('patch');
