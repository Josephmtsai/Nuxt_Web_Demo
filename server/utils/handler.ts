import type { H3Event } from 'h3';

export const defineMyHandler = (handler: (event: H3Event) => any) => {
  const _handler = async (event: H3Event) => {
    const startTime = Date.now(); // 記錄開始時間

    const response = await handler(event); // 執行原有的 handler

    const endTime = Date.now(); // 記錄結束時間
    const duration = endTime - startTime; // 計算處理時間

    // 輸出 API 處理時間和其他相關信息
    console.log(`API handler took ${duration}ms`);
    console.log(JSON.stringify(response));
    return response;
  };

  return defineEventHandler(_handler);
};
