'use strict';

(function() {
  this.app.component('sidebar', {
     templateUrl: "js/components/sidebar/sidebar.html",
     bindings: { name: '@' },

      controller: function ($scope,$rootScope) {

        $scope.currentState = "MainController"

        debugger;

        $rootScope.$on('$routeChangeSuccess', function (e, current, pre) {
          $scope.currentState = current.$$route.controller;
        });
       // use this.parent to access required Objects
       debugger;

       $scope.logout = function(){



       }

      }
  });
}).call(this);
