var nativefier = require('nativefier').default;

module.exports = (function() {

  var options = {
    name: 'Gist Lord',
    targetUrl: 'https://epoch.github.io/gistlord/',
    version: '0.36.4',
    out: './build',
    overwrite: true,
    width: 1280,
    height: 800,
    showMenuBar: false,
    fastQuit: false,
    ignoreCertificate: false,
    insecure: false,
    honest: false,
    zoom: 1.0
  };

  return nativefier(options, function(error, appPath) {
    if (error) {
      throw error;
    }
    console.log('App has been nativefied to', appPath);
  });

})();

