'use strict';

(function() {
  this.app.component('sidebar', {
     templateUrl: "js/components/sidebar/sidebar.html",
     bindings: { name: '@' },

      controller: function ($scope,$rootScope,AuthModel,$window) {

        $scope.currentState = "MainController"

        $rootScope.$on('$routeChangeSuccess', function (e, current, pre) {
          $scope.currentState = current.$$route.controller;
        });


       $scope.logout = function(){

         AuthModel.destroyAdmin();
         $window.location.href = '#/login';

       }

      }
  });
}).call(this);
