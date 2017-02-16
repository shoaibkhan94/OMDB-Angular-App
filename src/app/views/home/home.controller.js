'use strict';

/**
 * @ngdoc controller
 *
 * @name HomeCtrl
 *
 * @description
 * Controller for omdb
 */
(function () {

  angular
    .module('omdb')
    .controller('HomeCtrl', HomeCtrl);
  HomeCtrl.$inject = ["$rootScope", "$state"]

  function HomeCtrl($rootScope, $state) {
    var vm = this;
    vm.search = "";
    vm.response = null;
    vm.loader = false;
    vm.searchMovies = function () {
      $state.go("main.results", {search: vm.search});
    }
    var init = function () {
      vm.loader = false;
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

    init();
  }

})();
