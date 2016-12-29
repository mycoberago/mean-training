export class AuthController {
	
	// this constructor injects satellizer through the auth service
	constructor($auth){
		'ngInject';

		this.$auth = $auth;
	}

	//  register function for auth.html form
	register(){
		var vm = this; // allows access to view model
		// this.user is the object passed from the auth.html auth.user object that was created
		// then is a PROMISE to check if the sign up was successfull
		this.$auth.signup(this.user).then(function(token){
			vm.$auth.setToken(token);
		});
	}

	//  login function for auth.html form
	login(){
		var vm = this; // allows access to view model
		// this.user is the object passed from the auth.html auth.user object that was created
		// then is a PROMISE to check if the sign up was successfull
		this.$auth.login(this.login.user).then(function(token){
			vm.$auth.setToken(token);
		});
	}
}