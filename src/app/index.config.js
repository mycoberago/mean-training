// authProvider allows to configure satellizer
// API_URL is injected from the index.module.js as a constant
export function config ($logProvider, toastrConfig, $authProvider, API_URL) {
  'ngInject';
  // Enable log
  $logProvider.debugEnabled(true);

  // Set options third-party lib
  toastrConfig.allowHtml = true;
  toastrConfig.timeOut = 3000;
  toastrConfig.positionClass = 'toast-top-right';
  toastrConfig.preventDuplicates = true;
  toastrConfig.progressBar = true;

  // satellizer
  // this is also what is used as URL in app.post in server side in express
  $authProvider.signupUrl = API_URL + 'auth/register';
  $authProvider.loginUrl = API_URL + 'auth/login';
}
