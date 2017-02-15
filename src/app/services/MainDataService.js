/**
 * Created by shoaibk on 15/2/17.
 */
/**
 * @ngdoc Service
 * @name UserDataService
 * @author shoaib khan
 * @description
 * Service for User Management API calls
 */
(function() {

  angular
    .module('omdb')
    .service('MainDataService', MainDataService);

  MainDataService.$inject = ["$q", "$timeout", "$state", "$rootScope", "$stateParams", "HTTPFactory"];


  function MainDataService($q, $timeout, $state, $rootScope, $stateParams, HTTPFactory) {
    var _self = this;

    /**
     * @ngdoc function
     * @name Registration Function
     * @param {object} Registration Object
     * @description
     * Registration Function
     *
     */
    _self.register = function(data){

      return HTTPFactory.call({
        url : "s=\'"+data+"\'"+"&type=movie",
        method : "GET"
      })
    };

    _self.movieById = function (data) {
      return HTTPFactory.call({
        url : "i="+data+"&type=movie&plot=full",
        method : "GET"
      })
    };

  }

}());

