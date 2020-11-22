import 'reflect-metadata';
import { MetadataKeys } from './../../types/index';

export function validateBody(...keys: string[]) {
  return function (
    classTarget: any,
    classKey: string,
    // desc: PropertyDescriptor,
  ) {
    Reflect.defineMetadata(MetadataKeys.validator, keys, classTarget, classKey);
  };
}
