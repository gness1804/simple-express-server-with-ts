import { Request } from 'express';

export type decorator = (classTarget: any, classKey: string) => void;

export type decoratorFactory = (path: string) => decorator;

// interfaces
export interface ModifiedRequest extends Request {
  body: { [key: string]: string | undefined };
}

// enums
export enum MetadataKeys {
  path = 'path',
  method = 'method',
  middleware = 'middleware',
}

export enum Methods {
  get = 'get',
  post = 'post',
  del = 'delete',
  put = 'put',
  patch = 'patch',
}
