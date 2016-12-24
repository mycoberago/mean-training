export class MainController {
  constructor ($http) {
    'ngInject';

      this.http = $http;
  }

  postMessage() {
    //  angular post method referenced in the constructor function above
    // when the function is excuted by the form click, the message is passed along to the server side post
    this.http.post('http://localhost:5000/api/message', {msg: this.message});
  }  

}
