angular.module('myApp', [])
    .directive('draggable', function() {
    return {
        restrict:'A',
        link:function(scope,element,attrs){
           element.draggable({});
        }
    };
});