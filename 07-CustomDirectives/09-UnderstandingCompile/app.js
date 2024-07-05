var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })
    
    .when('/second', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
    .when('/second/:num', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
});

myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
    
    $scope.people = [
        {
        name: 'John Doe',
        address: '555 Main St.',
        city: 'New York',
        state: 'NY',
        zip: '11111'
        },
        {
        name: 'Jane Doe',
        address: '333 Second St.',
        city: 'Buffalo',
        state: 'NY',
        zip: '22222'
        },
        {
        name: 'George Doe',
        address: '111 Third St.',
        city: 'Miami',
        state: 'FL',
        zip: '33333'
        }
    ]
    
    $scope.formattedAddress = function(person) {
      
        return person.address + ', ' + person.city + ', ' + person.state + ' ' + person.zip;
        
    };
    
}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams) {
    
    
    
}]);

// Compilers and Linkers are 2 fundamental elements to building code. When you
// write code and build it the compiler converts it to a lower level language,
// maybe machine language or something like that. The Linker is what brings all
// those files together and builds a single file that's executable, The computer will
// actually interact with. The AngularJS architects chose these terms to describe
// specific aspects of custom directives as they are kind of similar but not really.
// The instructor thinks there are some better terms they could have used.
//
// We can add a new property to our directive object called compile. Compile
// expects it's value to be a function. When AngularJS runs that function it will
// pass it 2 parameters: elem and attrs. elem is the element and attrs are the attributes,
// the piece of HTML, the piece of the DOM that defines the directive. Then we can have
// code inside of the compile function that does whatever we want.
//
// The compile function returns an object which can have 2 properties. They're both
// linking properties. One is pre-link which is just called pre and the other one is
// called post and is for post-linking. Pre and Post also expect functions. They take
// 3 arguments: the scope, the elements involved (elements) and the attributes (attrs)
// for the HTML that's just been generated by creating the instance of the directive.
//
// Let's examine what's happening here, first it Compiles. The elem we have when we
// compile is the 'a' (anchor tag) with everything inside it that we have in our
// searchresult directive. What we have when we compile is that we can gain access
// to the HTML that defines the view for the directive.
//
// What do the link functions do? We can see that Pre-link runs and then Post-link
// runs. Then another Pre-link and then another Post-link and then another ... 3
// times the pre and post link functions run but compile only runs once. We output
// HTML in the loop 3 times so the pre and post link functions run each time a
// directive is used. Each time a directive has it's own scope. So for every
// element of the array the scope becomes this person. Remember from the scope
// attribute we have a scope and the personObject is a part of it. Every time that
// loop runs we get a new instance of searchResult with that person as part of the
// scope. So essentially we have a new model and view 3 times. But compile only 
// runs once. 
//
// So compile defines the searchresult piece of HTML/ piece of DOM.
// This thing that defines what the directive is. In the compile function I can
// change it if I want to. I can look at it and make decisions. Then the linking
// functions let us change the HTML and access it as each directive is created
// along the way.
//
// Compile means that I can change my directive on the fly before it gets used.
// The elem that defines my directive is an 'a' tag, an anchor tag with the
// list-group-item class. Thus all of the generated versions of that directive
// have that list-group-item class.
myApp.directive("searchResult", function() {
    return {
        restrict: 'AECM',
        templateUrl: 'directives/searchresult.html',
        replace: true,
        scope: {
            personObject: "=",
            formattedAddressFunction: "&"
        },
        compile: function(elem, attrs) {
            console.log('Compile');
            
            console.log('Compile elem:');
            console.log(elem.html());
            // console.log(elem);
            
            console.log('Compile attrs:');
            console.log(attrs);

            return {
                pre: function(scope, elements, attrs) {
                    console.log('Pre-linking');
                    
                    console.log('Pre scope:');
                    console.log(scope);
                    
                    console.log('Pre elements:');
                    console.log(elements[0]);
                    // console.log(elements);
                    
                    console.log('Pre attrs:');
                    console.log(attrs);
                },
                post: function(scope, elements, attrs) {
                    console.log('Post-linking')
                    
                    console.log('Post scope:');
                    console.log(scope);
                    
                    console.log('Post elements:');
                    console.log(elements[0]);
                    // console.log(elements);
                    
                    console.log('Post attrs:');
                    console.log(attrs);
                }
            };
        }
   }
});

// Me: I just copied searchResult to create searchResult2 as he starts
// changing it and I wanted to keep what I had done so far.
//
// But I could if I wanted to come in here and remove an attribute
// for example we could remove the class attribute. What's going to happen?
// Well we are editing essentially the directive html on the fly prior to it
// being used and being bound up to the scope and everything else. Notice
// we have no scope, no data in the compile function. This is just editing the
// directive HTML essentially. If we remove the class attribute then the
// class attribute is remove from all of the instances of the directive.
// AngularJS adds it's own classes to the 'a' but the 'list-group-item' class
// that we had in the directive is now gone. We edited the directive before
// it was used.
myApp.directive("searchResult2", function() {
    return {
        restrict: 'AECM',
        templateUrl: 'directives/searchresult2.html',
        replace: true,
        scope: {
            personObject: "=",
            formattedAddressFunction: "&"
        },
        compile: function(elem, attrs) {
            console.log('Compile');
            
            console.log('Compile elem:');
            elem.removeAttr('class');
            console.log(elem.html());
            // console.log(elem);
            
            console.log('Compile attrs:');
            console.log(attrs);

            return {
                pre: function(scope, elements, attrs) {
                    console.log('Pre-linking');
                    
                    console.log('Pre scope:');
                    console.log(scope);
                    
                    console.log('Pre elements:');
                    console.log(elements[0]);
                    // console.log(elements);
                    
                    console.log('Pre attrs:');
                    console.log(attrs);
                },
                post: function(scope, elements, attrs) {
                    console.log('Post-linking')
                    
                    console.log('Post scope:');
                    console.log(scope);
                    
                    console.log('Post elements:');
                    console.log(elements[0]);
                    // console.log(elements);
                    
                    console.log('Post attrs:');
                    console.log(attrs);
                }
            };
        }
   }
});

// Me: I wanted to keep the elem.removeAttr('class'); in searchResult2 so
// I have created another directive.
//
// On the other hand Link is run every time the directive is used. Over and
// over and over again. We have a pre link and a post link. What's the
// difference between pre link and post link? To explain: you can actually
// nest directives so we could have a <search-result> inside of another
// <search-result> or some other directive, that's perfectly valid. So what
// AngularJS actually does is it compiles the directive, then runs pre link,
// then looks for any other directives inside and compiles them and runs
// pre link. So on and so forth and when it gets all the way down to the
// bottom and it's figured everything out it runs post link back up the
// chain. Post link is actually safer then pre link because by the time you
// run post link you already know what you have to deal with. I already know
// that everything inside my directive is already done and ready to go.
//
// So AngularJS in it's documentation says to avoid using pre link. They
// have it available but they say that's not safe. So we can get rid of it.
//
// What can we do with post link? With post I now have a template (the view)
// which is the elements argument and its attributes as well in the attrs
// argument. And we have the model, the scope for that particular instance
// of the directive. The thing that is about to be outputted to the HTML.
// The view is copied from the original directive. Inside the ng-repeat
// the post link function ran 3 times because it created 3 instances of the
// directive, 3 outputted HTML elements combined with 3 different scopes.
// So we could do the exact same thing where we remove the class in post
// but we could do it with a condition.
//
// The compile ran once and returned a post link. Now we can do things to
// the actual generated HTML that's about to be outputted and look at the
// scope that's connected to that instance of the directive. When would
// you ever want to do this? You might want to do this when what you have
// to do requires code and can't be done inside the directive itself.
// AngularJS gives you the tools to jump inside the middle of all that
// HTML generation and make some decisions. With post link you can make
// some decisions, make some changes before the HTML is output to the DOM,
// output to the webpage by the browser. That's all that compile and link are.
// The instructor thinks initialize and onbind would have been better names
// then compile and post.
//
// The honest truth is that you'll almost never have to run code inside of
// compile. So it would be a pain to always have to write an empty compile
// and then return a post. Because it's more likely that you are going to
// want to run some code while it's being bound in the link function. Not in
// the compile function. AngularJS provides a short hand.
myApp.directive("searchResult3", function() {
    return {
        restrict: 'AECM',
        templateUrl: 'directives/searchresult3.html',
        replace: true,
        scope: {
            personObject: "=",
            formattedAddressFunction: "&"
        },
        compile: function(elem, attrs) {
            console.log('Compile');
            
            console.log('Compile elem:');
            console.log(elem.html());
            // console.log(elem);
            
            console.log('Compile attrs:');
            console.log(attrs);

            return {
                post: function(scope, elements, attrs) {
                    console.log('Post-linking')
                    
                    console.log('Post scope:');
                    console.log(scope);

                    if (scope.personObject.name == 'Jane Doe') {
                        elements.removeAttr('class');
                    }

                    console.log('Post elements:');
                    console.log(elements);
                    
                    console.log('Post attrs:');
                    console.log(attrs);
                }
            };
        }
   }
});