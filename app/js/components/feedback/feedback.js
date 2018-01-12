'use strict';

(function() {
  this.app.component('tips', {
     templateUrl: "js/components/tips/tips.html",
     bindings: { name: '@' },

      controller: function ($Feedback,$scope) {

        $Feedback.getFeedback().then(function(_response){
          // debugger;
          // $scope.regions = _response.data;
        },function(_error){
          console.log(_error);
        })

       // use this.parent to access required Objects

      }
  });
}).call(this);
