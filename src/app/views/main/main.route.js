'use strict';

(function () {

  angular
    .module('omdb')
    .config(function ($stateProvider) {
      $stateProvider
        .state('main', {
          url         : '',
          templateUrl : 'app/views/main/main.view.html',
          controller  : 'MainCtrl',
          controllerAs: 'MainCtrl',
          title       : 'main'
        });
    });

}());
