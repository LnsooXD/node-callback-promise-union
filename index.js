/**
 * @format
 * @Author: LnsooXD<LnsoXD@gmail.com>
 * @Date: 2018-07-23 10:21:00
 * @Last Modified by: LnsooXD<LnsooXD@gmail.com>
 * @Last Modified time: 2018-07-23 11:14:59
 * 
 * Copyright(c) 2018 LnsooXD
 * MIT Licensed
 */

Object.defineProperty(exports, '__esModule', {value: true});

const KEY_PROMISE = Symbol('key#promise');
const KEY_DELEGATE = Symbol('key#delegate');
const KEY_RESOLVE = Symbol('key#resolve');
const KEY_REJECT = Symbol('key#reject');
const KEY_CALLBACK = Symbol('key#callback');

class CallbackPromise {
  constructor(callback) {
    const originCallback = callback ? callback : () => {};
    let originResolve;
    let originReject;

    this[KEY_PROMISE] = new Promise((resolve, reject) => {
      originResolve = resolve;
      originReject = reject;
    });

    this[KEY_RESOLVE] = result => {
      originCallback(null, result);
      originResolve(result);
    };

    this[KEY_REJECT] = error => {
      originCallback(error);
      originReject(error);
    };

    this[KEY_CALLBACK] = (error, result) => {
      originCallback(error, result);
      return error ? this.originReject(error) : this.originResolve(result);
    };
    this[KEY_DELEGATE] = (error, result) => this[KEY_CALLBACK](error, result);
  }

  get callback() {
    return this[KEY_CALLBACK];
  }

  get resolve() {
    return this[KEY_RESOLVE];
  }

  get reject() {
    return this[KEY_REJECT];
  }

  get promise() {
    return this[KEY_PROMISE];
  }

  get delegate() {
    return this[KEY_DELEGATE];
  }
}

exports.CallbackPromise = CallbackPromise;
