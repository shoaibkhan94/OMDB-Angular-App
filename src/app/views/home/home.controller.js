'use strict';

/**
 * @ngdoc controller
 *
 * @name HomeCtrl
 *
 * @description
 * Controller for omdb
 */
(function() {

  angular
    .module('omdb')
    .controller('HomeCtrl', HomeCtrl);
  HomeCtrl.$inject = ["$rootScope", "$state", "MainService"]

  function HomeCtrl($rootScope, $state, MainService) {
    var vm = this;
    vm.search = "";
    vm.response = null;
    vm.loader = false;
    vm.searchMovies = function () {
      console.log("test",vm.search);
      $state.go("main.results",{search : vm.search});
      console.log("not here");
      /*MainService.searchMovies(vm.search, function success(response) {
       console.log(response);
       vm.response = response;
       }, function error(response) {
       console.log(response);
       });*/
    }
    $rootScope.$on('$stateChangeStart', stateChangeStart); // Listen for state change

    /**
     * @name stateChangeSuccess
     *
     * @memberof AppCtrl
     *
     * @param {Object} event - the event object
     * @param {Object} newState - the new state object
     */
    function stateChangeStart(event, newState) {
      vm.loader = true;
    }
  }

})();
