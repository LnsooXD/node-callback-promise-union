/**
 * @format
 * @Author: LnsooXD&lt;LnsooXD@gmail.com&gt;
 * @Date: 2018-07-23 10:58:27
 * @Last Modified by: LnsooXD<LnsooXD@gmail.com>
 * @Last Modified time: 2018-07-23 11:14:33
 * 
 * Copyright(c) 2018 LnsooXD
 * MIT Licensed
 */

const {CallbackPromise} = require('../');

function asyncCallbackFunc(error, result, cb) {
  const cp = new CallbackPromise(cb);
  cp.callback(error, result);
  return cp.promise;
}

function asyncFunc(error, result, cb) {
  const cp = new CallbackPromise(cb);
  if (error) {
    cp.reject(error);
  } else {
    cp.resolve(result);
  }
  return cp.promise;
}

function callbackFunc(error, result, cb) {
  cb(error, result);
}

function callbackAsyncFunc(error, result) {
  const cp = new CallbackPromise();
  callbackFunc(error, result, cp.delegate);
  return cp.promise;
}

(async () => {
  await asyncCallbackFunc('error', 'result');
  await asyncFunc('error', 'result');
  await callbackAsyncFunc('error', 'result');
})();
