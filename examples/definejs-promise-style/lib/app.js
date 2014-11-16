define(['core/core', 'util/utils'],
  function (core, utils) {
    var app = {
      core: core,
      version: utils.version,
      views: [],
      controllers: [],
      models: [],
      loaded: false,
      lunch: function () {
        if (utils.isObject(core)) {

          this.loaded = true;
          console.log('app.version:', this.version);
          console.log('App just got lunched!');

        } else {

          console.warn('There is something wrong with dependencies!');

        }
      }
    };

    return app;
  });