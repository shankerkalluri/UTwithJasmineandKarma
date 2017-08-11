describe('App Test', function(){ //describe your object type
    
    beforeEach(module('MyApp')); //load module
    
   describe('reversestring', function(){ //describe your app name
       
       var reverse;
       beforeEach(inject(function ($filter){ //initialize your filter
           reverse = $filter('reverse', {});
       }));
       
       it('should reverse a string', function(){ //write tests
           expect(reverse('dj')).toBe('jd'); //pass
           expect(reverse('don')).toBe('nod'); //pass
       });
   });
    
    
    describe('add controller', function(){
        var $controller;
        beforeEach(inject(function (_$controller_){
            $controller = _$controller_;
        }));
        
        it('1+1 should equal 2', function(){
            var $scope = {};
            var controller = $controller('CalculatorController', {$scope:$scope});
            $scope.num1=1;
            $scope.num2=2;
            $scope.add();
            expect($scope.sum).toBe(3);
        });
    });
    
    describe('playerservicetest', function(){
        var data = [{ "Id": "1", "Name": "DJ Kumar", "Age": 35}, {"Id": "2", "Name": "Sachin Tendulkar", "Age": 40}];
        var PlayerLocalApi = {}; 
        
        beforeEach(inject(function (_PlayerLocalApi_){
            PlayerLocalApi = _PlayerLocalApi_;
        }));
        
        it('should return search player data', function(){
           expect(PlayerLocalApi.getPlayers()).toEqual(data); 
        });
        
    });
    
    
    /*
    describe('servicewithhttptest', function(){
        var PlayerApi, httpBackend;
        
        beforeEach(inject(function ($httpBackend, _PlayerApi_){
            PlayerApi = _PlayerApi_;
            httpBackend = $httpBackend;
            console.log(httpBackend);
        }));
        
        it('ServiceTestSpec', function(){
            
            var returnData = {};
            
            //7 ExpectGet to make sure this is called once
            httpBackend.expectGet("http://localhost:61409/api/players").respond(returnData);
            
           //8 make the call
            var returnedPromise = PlayerApi.getPlayers();
            
            //9 setup holder for the response, that will put the result
            //into a variable in this scope for you test.
            
            var result;
            returnedPromise.then(function(response){
                result = response.data;
            });
            
        });
        
        
    });*/
    
    
});