'use strict';

(function() {
  this.app.component('regions', {
     templateUrl: "js/components/regions/regions.html",
     bindings: { name: '@' },

      controller: function ($Regions,$scope) {

        $Regions.getRegions().then(function(_response){
          $scope.regions = _response.data;
        },function(_error){

        })

       // use this.parent to access required Objects

      }
  });
}).call(this);
