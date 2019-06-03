const allHref = window.location.href;
const api = (() => {
  if (allHref.indexOf("tmc.himyidea.com") !== -1) {
    return 'https://tmc.himyidea.com';
  } else {
    return 'http://test.himyidea.com';
  }
})();

export {
  api
};
