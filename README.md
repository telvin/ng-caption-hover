# ng-caption-hover
[![Bower Version][bower-image]][bower-url]
[![Build Status][build-image]][build-url]
[![Dependency Status][depstat-image]][depstat-url]
[![Code Climate][gpa-image]][gpa-url]

## About
    This module will make add a caption along with a hover effect with a custom template using jQuery and
        Angular.

## Examples

### Image

```html
    <div ng-caption-hover-root>
        <div ng-caption-hover-content>
            <img src="demo/sample.jpg">
        </div>

        <div ng-caption-hover-caption>
            When you hover on this, you see me
        </div>
    </div>
```

### Paragraph

```html
    <div ng-caption-hover-root ng-if="dummyText">
        <div ng-caption-hover-content>
            <span>{{dummyText}}</span>
        </div>

        <div ng-caption-hover-caption>
            When you hover this element, you see me
        </div>
    </div>
```

### List

```html
    <div class="row">
        <div class="col-md-3 text-center" ng-repeat="item in [1,2,3,4] track by $index">
            <div ng-caption-hover-root>
                <div ng-caption-hover-content>
                    <img src="demo/sample.jpg">
                </div>

                <div ng-caption-hover-caption>
                    When you hover on this, you see me. I'm {{$index+1}}
                </div>
            </div>
        </div>
    </div>
```

## Get Started
Get the package:

```sh
    bower install
```

Add the script tags:

```html
    <link rel="stylesheet" type="text/css" href="dist/ng-caption-hover.min.css" media="screen">
    <script src="bower_components/jquery/dist/jquery.min.js"></script>
    <script src="bower_components/angular/angular.min.js"></script>
    <script src="dist/ng-caption-hover.min.js"></script>
```

Then add the module to your app:

```js
        angular.module('yourApp', ['ng-caption-hover']);
```

## Usage

```html
 <div ng-caption-hover-root>
    <div ng-caption-hover-content>
        We put the visible content into here.
        When user hovers on this area, the caption would show.
    </div>

    <div ng-caption-hover-caption>
        We put the body of the hover caption into here.
    </div>
</div>
```
