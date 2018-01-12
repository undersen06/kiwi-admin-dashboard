'use strict';

(function() {
  this.app.component('tips', {
     templateUrl: "js/components/tips/tips.html",
     bindings: { name: '@' },

      controller: function ($Tips,$scope) {

        $Tips.getTips().then(function(_response){
          debugger;
          $scope.regions = _response.data;
        },function(_error){

        })

       // use this.parent to access required Objects

      }
  });
}).call(this);
