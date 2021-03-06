'use strict';

/**
 * @ngdoc controller
 *
 * @name AppCtrl
 *
 * @description
 * The main application Controller for omdb
 */
(function() {

  angular
    .module('omdb')
    .controller('AppCtrl', AppCtrl);

  function AppCtrl($rootScope) {
    var vm = this;

    vm.title = 'My App'; // Default Title

    $rootScope.$on('$stateChangeSuccess', stateChangeSuccess); // Listen for state change

    /**
     * @name stateChangeSuccess
     *
     * @param {Object} event - the event object
     * @param {Object} newState - the new state object
     */
    function stateChangeSuccess(event, newState) {
      vm.title = newState.title;
    }
  }

})();
