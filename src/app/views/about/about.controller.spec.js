'use strict';

describe('Controller: AboutCtrl', function () {

  // load the controller's module
  beforeEach(module('omdb'));

  var AboutCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector) {
    AboutCtrl = $injector.get('$controller')('AboutCtrl');
  }));


});
