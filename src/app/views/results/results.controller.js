/**
 * Created by shoaibk on 15/2/17.
 */
'use strict';

/**
 * @ngdoc controller
 *
 * @name ResultsCtrl
 *
 * @description
 * Controller for Showing search results
 */
(function () {

  angular
    .module('omdb')
    .controller('ResultsCtrl', ResultsCtrl);

  ResultsCtrl.$inject = ["$rootScope", "SearchResults"]

  function ResultsCtrl($rootScope, SearchResults) {
    var vm = this;
    vm.results = null;
    console.log(SearchResults);
    vm.results = SearchResults.data;
    vm.loader = false;

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
