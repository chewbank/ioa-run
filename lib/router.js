'use strict';

const consoln = require('@chewbank/consoln');
const { main, argv } = require('@chewbank/ioa');

const { default: Default } = argv;

const commandPath = Default.shift();

if (commandPath) {

  const commandPathArray = commandPath.split('.');

  let iterate = main;

  for (const name of commandPathArray) {
    iterate = iterate[name];
    if (iterate === undefined) {
      consoln.error(`\x1b[33m\x1b[39m${commandPath}执行器路径无效`);
      break;
    }
  }

  (async () => {

    consoln.success(`\x1b[33m\x1b[39m${commandPath}() 已触发\x1b[39m`);
    await iterate(...Default);
    consoln.success(`\x1b[33m\x1b[39m${commandPath}() 执行完毕\x1b[39m`);

  })();

}
