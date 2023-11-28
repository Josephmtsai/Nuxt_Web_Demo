export default defineEventHandler((event) => {
  console.log('New request: ' + getRequestURL(event));

  console.log('[Request]' + getRequestURL(event));
  console.log('[Method]' + event.method);
  //event.context.$logger.request('处理 HTTP 请求');
  switch (event.method) {
    case 'GET':
      console.log('[Data]' + JSON.stringify(getQuery(event)));
  }
});
