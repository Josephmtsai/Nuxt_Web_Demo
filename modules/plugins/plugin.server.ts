import { defineNuxtPlugin } from '#app';
import { getLogger } from './winstonLogger';

export default defineNuxtPlugin((nuxtApp) => {
  if (!(<any>global)._isRebuildConsole) {
    console.log(`winstonLogger rebuild console`);
    console.log(`nuxt3-winston-log v0.5`);
    const options = nuxtApp.$config.public.nuxt3WinstonLog;
    const globalLogger = getLogger(options);
    const originLog = console.log;
    const originError = console.error;
    console.log = function (...rest) {
      const str = rest.join(' ');
      globalLogger.info(str);
      originLog.apply(this, rest);
    };
    console.error = function (...rest) {
      const str = rest.join(' ');
      globalLogger.error(str);
      originError.apply(this, rest);
    };
    const customLogger = {
      log: (...args: any[]) => {
        globalLogger.info(args.join(' ')); // 標準日誌
      },
      error: (...args: any[]) => {
        globalLogger.error(args.join(' ')); // 錯誤日誌
      },
      request: (...args: any[]) => {
        globalLogger.log('http', args.join(' ')); // HTTP 日誌
      },
      event: (...args: any[]) => {
        globalLogger.log('verbose', args.join(' ')); // 詳細日誌
      },
    };

    // 將 customLogger 注入到所有 Vue 組件中
    nuxtApp.provide('logger', customLogger);
    (<any>global)._isRebuildConsole = true;
  }
});
