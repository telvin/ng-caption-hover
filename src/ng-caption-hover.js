/**
 *
 * Copyright (c) 2016 telvin@vidaltek.com
 *
 * licensed under the MIT license.
 *
 **/
;(function (window, angular) {

    var m = angular.module('ng-caption-hover', []);

    m.directive('ngCaptionHoverRoot', ['$timeout', function ($timeout) {
        return {
            restrict: 'A',
            controller: ['$scope', '$element', '$attrs', function ($scope, $element, $attrs) {
                this.config = {contentWidth: 0, contentHeight: 0}
                var ctrl = this;

                /*$scope.$watch($attrs.ngCaptionHoverRoot, function (newVal, oldVal) {

                }, true);*/

                ctrl.$appendContent = function () {

                    $timeout(function(){
                        var coverRate = $attrs.ngCaptionHoverRoot || '0.5';
                        coverRate = parseFloat(coverRate);

                        var configHeight =  $($element).height();

                        var positionTop = configHeight * coverRate;
                        var blurCaption = $element[0].getElementsByClassName('blur')
                        if(blurCaption.length > 0){
                            $(blurCaption).css({width: Math.ceil(ctrl.config.contentWidth), height: positionTop});
                        }

                        var captionText = $element[0].getElementsByClassName('caption-text')
                        if(captionText.length > 0){
                            $(captionText).css({width: Math.ceil(ctrl.config.contentWidth)});
                        }


                        var caption = $element[0].getElementsByClassName('caption')
                        if(caption.length > 0){
                            var begin = 0
                            $(caption).css({top: configHeight + 'px'});
                            $(caption).css({
                                'transform':'translateY(-'+begin+'px)',
                                '-webkit-transform':'translateY(-'+begin+'px)',
                                '-moz-transform': 'translateY(-'+begin+'px)',
                                '-ms-transform': 'translateY(-'+begin+'px)',
                                '-o-transform':'translateY(-'+begin+'px)'});


                            $($element).hover(function () {
                                //console.log('hover')
                                $(caption).css({
                                    'transform':'translateY(-'+positionTop+'px)',
                                    '-webkit-transform':'translateY(-'+positionTop+'px)',
                                    '-moz-transform': 'translateY(-'+positionTop+'px)',
                                    '-ms-transform': 'translateY(-'+positionTop+'px)',
                                    '-o-transform':'translateY(-'+positionTop+'px)'});
                            }, function () {
                                $(caption).removeAttr("style")
                                $(caption).css({top: configHeight + 'px'});
                            })
                        }
                    })
                }



            }],
            link: function (scope, element) {
                $(element).addClass('hover-container');
            }
        };
    }]);

    m.directive('ngCaptionHoverContent', function () {
        return {
            restrict: 'A',
            require: ['^ngCaptionHoverRoot'],
            link: function (scope, element, attrs, controllers) {

                $(element).addClass('content');
                var clientRect = element[0].getBoundingClientRect();


                controllers[0].config.contentWidth = clientRect.width;
                controllers[0].config.contentHeight = clientRect.height;

                controllers[0].$appendContent(element);
            }
        };
    });

    m.directive('ngCaptionHoverCaption', function () {
        return {
            restrict: 'A',
            require: ['^ngCaptionHoverRoot'],
            transclude: true,
            template: '<div class="caption"> <div class="blur"><div class="caption-text"><div class="caption-text-body" ng-transclude></div></div></div></div>',
            link: function (scope, element, attrs, controllers) {

                controllers[0].$appendContent(element);
            }
        };
    });



})(window, window.angular);