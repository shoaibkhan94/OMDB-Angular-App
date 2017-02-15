/**
 * Created by shoaibk on 15/2/17.
 */
/**
 * @ngdoc Service
 * @author Shoaib Khan
 * @name UserService
 * @description
 * Service for User Management
 */
(function() {

  angular
    .module('omdb')
    .service('MainService', MainService);

  MainService.$inject = ["$q", "$timeout", "$state", "$rootScope", "$stateParams", "$window", "MainDataService"];


  function MainService($q, $timeout, $state, $rootScope, $stateParams, $window, MainDataService) {
    var _self = this;

    /**
     * @ngdoc function
     * @name Registration Function
     * @param User Registration object
     * @description To register a new user to the system
     */
    _self.searchMovies = function (data, successCallback, errorCallback) {
      var user = MainDataService.register(data);
      user.then(function (response) {
        successCallback(response.data);
        console.log(response);
      }, function (response) {
        errorCallback(response.data);
        console.log(response);
      });
    };
  }


}());

