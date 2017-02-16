'use strict';

(function () {

  angular
    .module('omdb')
    .config(function ($stateProvider) {
      $stateProvider
        .state('main.about', {
          url         : '/about',
          templateUrl : 'app/views/about/about.view.html',
          controller  : 'AboutCtrl',
          controllerAs: 'AboutCtrl',
          title       : 'About OMDB'
        });
    });

}());
