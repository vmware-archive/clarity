const https = require('https');

const API_ENDPOINT = 'https://raw.githubusercontent.com/vmware/clarity-assets/master/icons/{SET}/{SHAPE}.svg';

// This is a basic function that downloads the content from GitHub, and forces a download using Content-Disposition.
exports.handler = (event, context, cb) => {
  const shape = event.queryStringParameters.shape;
  const set = event.queryStringParameters.set;
  const file = API_ENDPOINT.replace('{SET}', set).replace('{SHAPE}', shape);
  console.log(`REQUEST - SET ${set} SHAPE ${shape}`);

  https
    .get(file, resp => {
      let data = '';

      resp.on('data', chunk => {
        data += chunk;
      });

      resp.on('end', () => {
        console.log('SUCCESS');
        cb(null, {
          statusCode: 200,
          headers: {
            'Content-Type': 'image/svg+xml',
            'Content-Disposition': `attachment; filename=${shape}.svg`,
          },
          body: data.toString(),
        });
      });
    })
    .on('error', err => {
      console.log(`ERROR ${err.toString()}`);
      cb({
        statusCode: 500,
        data: err.message,
      });
    });
};
