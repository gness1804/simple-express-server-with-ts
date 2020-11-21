import { Request } from 'express';

// simple types
export type httpMethod = 'get' | 'post' | 'put' | 'delete' | 'patch'

export type decorator = (classTarget: any, classKey: string) => void;

export type decoratorFactory = (path: string) => decorator;

// interfaces
export interface ModifiedRequest extends Request {
  body: { [key: string]: string | undefined };
}



