/**
 * Created by shoaibk on 15/2/17.
 */
'use strict';

/**
 * @ngdoc controller
 * @name ResultCtrl
 * @description
 * Controller for Showing Details of a particular Movie
 */
(function() {

  angular
    .module('omdb')
    .controller('ResultCtrl', ResultCtrl);

  ResultCtrl.$inject = ["$scope", "$window", "MovieResult"]

  function ResultCtrl($scope, $window, MovieResult) {
    var vm = this;
    vm.result = null;
    console.log(MovieResult);
    vm.result = MovieResult.data;
    $scope.img = vm.result.Poster;
    vm.gotoResults = function () {
      $window.history.back()
    }
  }

})();
