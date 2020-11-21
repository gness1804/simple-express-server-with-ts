import 'reflect-metadata';

export function get(path: string) {
  return function (
    classTarget: any,
    classKey: string,
    // desc: PropertyDescriptor,
  ) {
    Reflect.defineMetadata('path', path, classTarget, classKey);
    Reflect.defineMetadata('method', 'get', classTarget, classKey);
  };
}

export function post(path: string) {
  return function (
    classTarget: any,
    classKey: string,
    // desc: PropertyDescriptor,
  ) {
    Reflect.defineMetadata('path', path, classTarget, classKey);
    Reflect.defineMetadata('method', 'post', classTarget, classKey);
  };
}
