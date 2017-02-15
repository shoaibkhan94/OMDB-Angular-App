/**
 * Created by shoaibk on 15/2/17.
 */
'use strict';

/**
 * @ngdoc controller
 *
 * @name ResultCtrl
 *
 * @description
 * Controller for omdb
 */
(function() {

  angular
    .module('omdb')
    .controller('ResultCtrl', ResultCtrl);

  ResultCtrl.$inject = ["$scope", "MainService", "MovieResult"]

  function ResultCtrl($scope, MainService, MovieResult) {
    var vm = this;
    vm.result = null;
    console.log(MovieResult);
    vm.result = MovieResult.data;
    $scope.img = vm.result.Poster;
  }

})();
