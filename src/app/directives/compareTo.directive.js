//  custom angular directive used to check password
export function CompareToDirective ($parse) {
	'ngInject'
	return {
		require: 'ngModel', // tell angular need the ngModel
		link: function(scope,elm,attrs,ngModel){
			var mainModel = $parse(attrs.compareTo);
			var secondModel = $parse(attrs.ngModel);

			// score.watch allows to watch for changes and if there are changes then there is a newValue
			// this looks at the pwd model in auth.html
			// ngModel directive is referenced ng-model in the html attributes
			scope.$watch(attrs.ngModel, function(newValue){
				// set validity model whether it matches other model
				ngModel.$setValidity(attrs.name, newValue === mainModel(scope));
			});

			// watch changes in the original password input and confirm password input
			// this looks at the pwdConfirm in the auth.html
			// the compareTo directive is referenced as compate-to in html attributes
			scope.$watch(attrs.compareTo, function(newValue){
				// set validity model whether it matches other model
				ngModel.$setValidity(attrs.name, newValue === secondModel(scope));
			});
		}
	}
}