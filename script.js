angular.module('myApp', [])
    .directive('markdown', function() {
    return {
        restrict:'A',
        link:function(scope,element,attrs){
           element.slider({
                range: true,
                min: 0,
                max: 500,
                values: [ 75, 300 ],
                slide: function( event, ui ) {

                }
            });
        }
    };
});