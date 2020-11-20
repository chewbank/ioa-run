'use strict';

const app = require('@app');

app.emit('loads', {
  "run": {
    "level": 80,
    module(func, name) {
      if (func instanceof Function) {
        if (func.prototype) {
          return new func();
        } else {
          return func;
        }
      } else {
        throw new TypeError(`[@chewbank/ioa-run] ${name}()执行器必须为函数类型`);
      }
    },
  },
});

app.loader({
  "router.js": {
    "level": 100
  },
})
