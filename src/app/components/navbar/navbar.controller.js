export class NavbarController {
	//  inject auth service so we have access to satellizer
	constructor ($auth){
		'ngInject';


		this.$auth = $auth;
		this.isAuthenticated = $auth.isAuthenticated;
	}

	logout() {
		this.$auth.logout();
	}
}