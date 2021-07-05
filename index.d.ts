/**
 * @format
 * @Author: LnsooXD<LnsooXD@gmail.com>
 * @Date: 2018-07-23 10:57:47
 * @Last Modified by: LnsooXD<LnsooXD@gmail.com>
 * @Last Modified time: 2021-07-05 11:14:53
 * 
 * Copyright(c) 2021 LnsooXD
 * MIT Licensed
 */

export interface CallbackFunction<ErrorType, ResultType> {
  (error: ErrorType, result?: ResultType): void;
}

export declare class CallbackPromise<ErrorType, ResultType> {
  public readonly promise: Promise<ResultType>;
  public readonly delegate: CallbackFunction<ErrorType, ResultType>;
  constructor(callback?: CallbackFunction<ErrorType, ResultType>);
  public callback(error: ErrorType, result?: ResultType): any;
  public reject(error: ErrorType): void;
  public resolve(result?: ResultType): void;
}
