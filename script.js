angular.module('myApp', [])
    .directive('slider', function() {
    return {
        restrict:'A',
        link:function(scope,element,attrs){
           element.slider({
                orientation: "vertical",
                min: 0,
                max: 500,
                value: 75,
                slide: function( event, ui ) {

                }
            });
        }
    };
});