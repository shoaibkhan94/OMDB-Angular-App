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

  MainCtrl.$inject = ["$state"]

  function MainCtrl($state) {
    var vm = this;
    vm.search = "";
    vm.response = null;
    vm.searchMovies = function () {
      console.log("test",vm.search);
      $state.go("main.results",{search : vm.search});
    }
  }

})();
