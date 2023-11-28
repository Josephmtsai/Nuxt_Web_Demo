// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['~/modules/module.ts'],
  nuxt3WinstonLog: {
    maxSize: '100m',
    skipRequestMiddlewareHandler: true,
    maxFiles: '14d', // 保留最近14天的日志文件
    infoLogPath: './logs', // 信息日志的存储路径
    infoLogName: '%DATE%-info.log', // 信息日志的命名格式，%DATE% 会被替换为当前日期
    errorLogPath: './logs', // 错误日志的存储路径
    errorLogName: '%DATE%-error.log', // 错误日志的命名格式
    requestLogPath: './logs',
    requestLogName: '%DATE%-request.log',
    eventLogPath: './logs',
    eventLogName: '%DATE%-event.log',
  },
  devtools: { enabled: true },
  runtimeConfig: {
    apiDomain: 'https://randomuser.me',
    // public中的键也可以在客户端使用
    public: {
      apiBase: '/api',
    },
  },
});
