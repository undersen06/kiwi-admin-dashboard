(function() {
  this.app.config(function($routeProvider) {


    $routeProvider
    .when("/", {
      templateUrl : "js/views/main/main.html",
      controller : "MainController"
    })
    .when("/dashboard", {
      templateUrl : "js/views/main/main.html",
      controller : "MainController"
    })
    .when("/login", {
      templateUrl : "js/views/login/login.html",
      controller : "LoginController"
    })

    .when("/tips", {
      templateUrl : "js/views/tips/tips.html",
      controller : "TipsController"
    })

    .when("/regions", {
      templateUrl : "js/views/regions/regions.html",
      controller : "RegionsController"
    })

    .when("/notifications", {
      templateUrl : "js/views/notifications/notifications.html",
      controller : "NotificationsController"
    })

    .when("/users", {
      templateUrl : "js/views/users/users.html",
      controller : "UsersController"
    })

    .when("/settings", {
      templateUrl : "js/views/config/settings/settings.html",
      controller : "SettingsController"
    })

    .when("/profile", {
      templateUrl : "js/views/config/profile/profile.html",
      controller : "ProfileController"
    });

  });
}).call(this);
