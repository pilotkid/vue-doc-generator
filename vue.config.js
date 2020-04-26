module.exports = {
  "transpileDependencies": [
    "vuetify"
  ]
}


const AutoDocumentAfterReload = function (cb) {
  this.apply = function (compiler) {
    console.log(compiler);
    if (compiler.hooks && compiler.hooks.done) {

      console.log(compiler.hooks);

      compiler.hooks.watchRun.tap('afterDocumentGenerated', AutoDocumentAfterReload);

      compiler.hooks.done.tap('afterDocumentGenerated', cb);
    }
  };
};

const afterDocumentGenerated = function () {
  const { exec } = require('child_process');
  exec('yarn vue-docgen ./src/components/**/*.vue ./docs', (err, stdout, stderr) => {
    if (err) {
      console.log("HEY THIS IS MY SCRIPT HERE THAT IS RUNNING");
      console.error(err);
      // node couldn't execute the command
      return;
    }

    // the *entire* stdout and stderr (buffered)
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  });
  console.log('Generated documentation');
};

const plugins = [];
const isDev = process.env.NODE_ENV === 'development';
if (isDev) {
  plugins.push(new AutoDocumentAfterReload(afterDocumentGenerated));
}



module.exports = {
  configureWebpack: {
    plugins
  }
};