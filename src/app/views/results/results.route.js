/**
 * Created by shoaibk on 15/2/17.
 */
'use strict';

(function () {

  angular
    .module('omdb')
    .config(function ($stateProvider) {
      $stateProvider
        .state('main.results', {
          url         : '/results/{search}',
          templateUrl : 'app/views/results/results.view.html',
          params      : {search : null},
          controller  : 'ResultsCtrl',
          controllerAs: 'ResultsCtrl',
          title       : 'Search Results',
          resolve     : {
            "SearchResults": ["$q", "$stateParams", "MainDataService", function($q, $stateParams, MainDataService) {
              var defer = $q.defer();
              console.log("test 2",$stateParams.search);
              $q.when(MainDataService.register($stateParams.search)).then(function(data) {
                defer.resolve(data);
              });
              return defer.promise;
            }]
          }
        })
        .state('main.result', {
        url         : '/result/{id}',
        templateUrl : 'app/views/results/result.view.html',
        params      : {id : null},
        controller  : 'ResultCtrl',
        controllerAs: 'ResultCtrl',
        title       : 'Movie',
        resolve     : {
          "MovieResult": ["$q", "$stateParams", "MainDataService", function($q, $stateParams, MainDataService) {
            var defer = $q.defer();
            console.log("test 3",$stateParams.id);
            $q.when(MainDataService.movieById($stateParams.id)).then(function(data) {
              defer.resolve(data);
            });
            return defer.promise;
          }]
        }
      });
    });

}());
