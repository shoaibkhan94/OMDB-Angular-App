'use strict';

(function () {

  angular
    .module('omdb')
    .config(function ($stateProvider) {
      $stateProvider
        .state('main.home', {
          url         : '/',
          templateUrl : 'app/views/home/home.view.html',
          controller  : 'HomeCtrl',
          controllerAs: 'HomeCtrl',
          title       : 'Home'
        });
    });

}());
