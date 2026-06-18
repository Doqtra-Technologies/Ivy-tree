const url = 'https://t7of4wxu.api.sanity.io/v2024-06-15/data/query/production?query=*[_type == "homepage"]';
fetch(url, {
  method: 'OPTIONS', // Preflight request
  headers: {
    'Origin': 'http://localhost:3000',
    'Access-Control-Request-Method': 'GET'
  }
})
.then(res => {
  console.log("Status:", res.status);
  console.log("Access-Control-Allow-Origin:", res.headers.get('access-control-allow-origin'));
})
.catch(console.error);
