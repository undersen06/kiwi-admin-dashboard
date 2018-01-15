
'use strict';

(function() {
  this.app.service('OneSignal', ['$q', '$localStorage', function($q, $localStorage) {

    var onesignal;

    return {

      getOneSignal: function() {
        return onesignal = $localStorage.onesignal;
      },
      setOneSignal: function(data) {
        $localStorage.onesignal = data;
      },
      destroyOneSignal: function() {
        delete $localStorage.onesignal;
        return true;
      }
    };

  }]);
}).call(this);
