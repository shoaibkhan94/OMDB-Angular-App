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
            "SearchResults": ["$q", "$state", "$stateParams", "MainDataService", function($q, $state, $stateParams, MainDataService) {
              var defer = $q.defer();
              console.log("test 2",$stateParams.search);
              $q.when(MainDataService.search($stateParams.search)).then(function(data) {
                defer.resolve(data);
                if(data.data.Response === "False"){
                  alert(data.data.Error);
                  $state.go("main.home")
                }
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
          "MovieResult": ["$q", "$state", "$stateParams", "MainDataService", function($q, $state, $stateParams, MainDataService) {
            var defer = $q.defer();
            console.log("test 3",$stateParams.id);
            $q.when(MainDataService.movieById($stateParams.id)).then(function(data) {
              defer.resolve(data);
              if(data.data.Response === "False"){
                alert(data.data.Error);
                $state.go("main.home")
              }
            });
            return defer.promise;
          }]
        }
      });
    });

}());
