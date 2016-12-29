export class MainController {
  constructor ($http) {
    'ngInject';

      this.http = $http;
      this.getMessages();
  }

  //  this grabs the messages from the api
  //  this can be used then to parse and display data onto the web page
  getMessages(){
  	//  vm is for view model
  	var vm = this;
  	this.http.get('http://localhost:5000/api/message').then(function(result){
  		vm.messages = result.data;
  	});
  }

  postMessage() {
    //  angular post method referenced in the constructor function above
    // when the function is excuted by the form click, the message is passed along to the server side post
    this.http.post('http://localhost:5000/api/message', {msg: this.message});
  }  

}
