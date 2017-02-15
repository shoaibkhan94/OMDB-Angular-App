/**
 * Created by shoaibk on 15/2/17.
 */
'use strict';

/**
 * @ngdoc factory
 * @name HTTPFactory
 * @description
 * Factory for HTTP Calls to server
 * @author Shoaib Khan
 */
(function () {

  angular
    .module('omdb')
    .factory('HTTPFactory', HTTPFactory);


  HTTPFactory.$inject = ["$http", "$window"];
  function HTTPFactory($http, $window) {
    var host = 'http://www.omdbapi.com/?';
    var storage = $window.localStorage;
    return {
      call : call,
      getHostURL : getHostURL
    };

    /**
     * @ngdoc function
     * @name call
     * @description
     * creates the http request to
     * server
     */
    function call(config) {
      /*if(userPersistenceService.getCookieData("auth_token")){
       $http.defaults.headers.common['api_token'] = "Bearer "+userPersistenceService.getCookieData('auth_token');
       }*/
      config.url = host+config.url;
      return $http(config);
    }

    /**
     * @ngdoc function
     * @name getHostURL
     * @description
     * Gets the URL of server
     */
    function getHostURL(config) {
      return host;
    }
  }

})();

