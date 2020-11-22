// types
export type decorator = (classTarget: any, classKey: string) => void;

export type decoratorFactory = (path: string) => decorator;

// enums
export enum MetadataKeys {
  path = 'path',
  method = 'method',
  middleware = 'middleware',
  validator = 'validator',
}

export enum Methods {
  get = 'get',
  post = 'post',
  del = 'delete',
  put = 'put',
  patch = 'patch',
}
