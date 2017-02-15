'use strict';

/**
 * @ngdoc controller
 *
 * @name AboutCtrl
 *
 * @description
 * Controller for omdb
 */
(function() {

  angular
    .module('omdb')
    .controller('AboutCtrl', AboutCtrl);

  function AboutCtrl() {
    var vm = this;

    vm.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }

})();
