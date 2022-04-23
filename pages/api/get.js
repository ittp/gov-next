const axios = require('axios');

const { YandexDisk } = require('yandex-disk');

// let [ res1, res2 ] = await Promise.all([
//   fetch(url_1),
//   fetch(url_2)
// ]);
const os = require('os');
let net = os.networkInterfaces();

export default (req, res) => {
  // Open Chrome DevTools to step through the debugger!
  // debugger;
  console.log(1);
  res.status(200);
  res.json({
    data: 1,
    net,
    os: {
      ...req.headers,
    },
  });
};
