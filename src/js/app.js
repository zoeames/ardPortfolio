var app = angular.module("ardPortfolio", ['ngRoute']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {templateUrl: 'views/welcome.html', controller: 'WelcomeCtrl'})
      .when('/resume', {templateUrl: 'views/resume.html', controller: 'ResumeCtrl'})
      .when('/gallery', {templateUrl: 'views/gallery.html', controller: 'GalleryCtrl'})
      .when('/artwork', {templateUrl: 'views/artwork.html', controller: 'ArtworkCtrl'})
      .otherwise({redirectTo: '/'});
  }]);
