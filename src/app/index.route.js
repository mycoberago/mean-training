export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main' // use main to access functions through controller
    })  // make sure semicolon is removed
    .state('auth', {
      url: '/auth',
      templateUrl: 'app/auth/auth.html',
      controller: 'AuthController',
      controllerAs: 'auth' // use main to access functions through controller
    });

  $urlRouterProvider.otherwise('/');
}
