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

  ResultsCtrl.$inject = ["$scope", "$rootScope", "$state", "$stateParams", "$q", "MainDataService", "SearchResults"]

  function ResultsCtrl($scope, $rootScope, $state, $stateParams, $q, MainDataService, SearchResults) {
    var vm = this;
    vm.results = null;
    console.log(SearchResults);
    vm.results = SearchResults.data;
    vm.loader = false;
    vm.pages = parseInt(vm.results.totalResults / 10) + 1;
    console.log(vm.pages);
    $scope.current_page = 1;
    vm.range = function (num) {
      var arr = new Array(num)
      for (var i = 1; i <= num; i++) {
        arr[i - 1] = i;
      }
      return arr;
    }
    vm.otherPages = function (pageNo) {
      var defer = $q.defer();
      $q.when(MainDataService.otherPages($stateParams.search, pageNo)).then(function (data) {
        defer.resolve(data);
        console.log(data);
        if (data.data.Response === "False") {
          alert(data.data.Error);
          $state.go("main.home")
        }
        else {
          $scope.current_page = pageNo;
          vm.results = data.data;
          console.log(data.data);
        }
      });
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
