const debug = true;

let api;
if (debug === true) {
  api = 'http://59.110.233.88';
  // api = 'http://192.168.111.65:8087';
} else {
  api = 'https://tmc.himyidea.com';
}

export {
  api
};
