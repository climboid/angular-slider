function mainCtrl($scope){

	$scope.hello = "hello"; //first input text
	$scope.goodbye = "goodbye"; //second input text
}

angular.module('myApp', [])
    .directive('slider', function() {
    return {
        restrict:'A',
        link:function(scope,element,attrs){
           element.slider({
                min: 0,
                max: 500,
                value: 75,
                slide: function( event, ui ) {
                		if(event.target.id =="slider1"){
                			scope.hello = ui.value;	
                		}else if(event.target.id == "slider2"){
                			scope.goodbye = ui.value;
                		}
                    
                    scope.$apply();
                }
            });
        }
    };
});