import 'reflect-metadata';

export function get(path: string) {
  return function (
    classTarget: any,
    classKey: string,
    // desc: PropertyDescriptor,
  ) {
    Reflect.defineMetadata('path', path, classTarget, classKey);
  };
}
