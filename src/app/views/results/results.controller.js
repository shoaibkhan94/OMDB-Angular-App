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
 * Controller for omdb
 */
(function() {

  angular
    .module('omdb')
    .controller('ResultsCtrl', ResultsCtrl);

  ResultsCtrl.$inject = ["MainService", "SearchResults"]

  function ResultsCtrl(MainService, SearchResults) {
    var vm = this;
    vm.results = null;
    console.log(SearchResults);
    vm.results = SearchResults.data;
    vm.search = "";
    vm.response = null;
    vm.searchMovies = function () {
      console.log("test",vm.search);
      MainService.searchMovies(vm.search, function success(response) {
        console.log(response);
        vm.response = response;
      }, function error(response) {
        console.log(response);
      });
    }
  }

})();
