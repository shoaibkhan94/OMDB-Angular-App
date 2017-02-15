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

  MainCtrl.$inject = ["$state", "MainService"]

  function MainCtrl($state, MainService) {
    var vm = this;
    vm.search = "";
    vm.response = null;
    vm.searchMovies = function () {
      console.log("test",vm.search);
      $state.go("main.results",{search : vm.search});
      /*MainService.searchMovies(vm.search, function success(response) {
        console.log(response);
        vm.response = response;
      }, function error(response) {
        console.log(response);
      });*/
    }
  }

})();
