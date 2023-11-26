import { Transform } from 'stream';
export default defineEventHandler((event) => {
  console.log('New request: ' + getRequestURL(event));

  console.log('[Request]' + getRequestURL(event));
  console.log('[Method]' + event.method);
  switch (event.method) {
    case 'GET':
      console.log('[Data]' + JSON.stringify(getQuery(event)));
  }
});
