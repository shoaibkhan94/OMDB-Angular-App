/**
 * Created by shoaibk on 15/2/17.
 */
/**
 * @ngdoc Service
 * @name UserDataService
 * @author shoaib khan
 * @description
 * Service for API calls
 */
(function() {

  angular
    .module('omdb')
    .service('MainDataService', MainDataService);

  MainDataService.$inject = ["HTTPFactory"];


  function MainDataService(HTTPFactory) {
    var _self = this;

    /**
     * @ngdoc function
     * @name Search Function
     * @param {String} Search String
     * @description
     * Function to search Movies
     *
     */
    _self.search = function(data){
      return HTTPFactory.call({
        url : "s=\'"+data+"\'"+"&type=movie",
        method : "GET"
      })
    };

    /**
     * @ngdoc function
     * @name movieById Function
     * @param {String} ImdbId
     * @description
     * Function to Get Movie Info By ImdbId
     *
     */
    _self.movieById = function (data) {
      return HTTPFactory.call({
        url : "i="+data+"&type=movie&plot=full",
        method : "GET"
      })
    };
  }

}());

