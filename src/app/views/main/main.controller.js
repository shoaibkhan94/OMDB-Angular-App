'use strict';

/**
 * @ngdoc controller
 *
 * @name MainCtrl
 *
 * @description
 * Controller for omdb
 */
(function() {

  angular
    .module('omdb')
    .controller('MainCtrl', MainCtrl);

  function MainCtrl() {
    var vm = this;

    vm.user = { username: 'USER'};
  }

})();
