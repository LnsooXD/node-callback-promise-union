# Callback Promise

> Promise with callback

## Installation

```sh
npm i -S callback-promise-union
yarn add callback-promise-union
```

## Example

```javascript

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

```

## Author

- [LnsooXD](https://github.com/LnsooXD)


## License

- [MIT](http://spdx.org/licenses/MIT)
