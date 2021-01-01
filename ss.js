define([], function () {

    function restApi() {

        let tempA, tempB;

        function fetch(method,param){
            
            if(['get','post','put','patch','delete'].indexOf(method.toLowerCase())==-1){
                
                return Promise.resolve(false)
                
            }
            
            var tempUrl=tempA;
            
            return new Promise.resolve(function(resolve){
                
                var runMethod=function(){
                    
                    var config={
                        method:method,
                        mod: 'cors',
                        cache :'no-cache',
                        headers:{'Content-Type': 'application/json'},
                        redirect:'follow',
                        referrer:'no-referrer'
                    };
                    
                        method!=='get'?config.body=JSON.stringify(param):false
                        
                        //원래 여기에 get이면 시리얼라이즈결과를 바인딩해야함 바디말고 tempA+= 식으로
                        //그러나 이러면 변수값이 바뀌니까 이렇게 함
                        // method!=='get'?config.body=JSON.stringify(param):tempUrl+=serializeBody(param)
                    
                    return config;
                    
                    
                    
                }();
                
                fetch(tempUrl,runMethod).then(resolve);
                
            });
            
        }

        function urlTest(url) {
            
            const regex = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
            
            return regex.test(url)
    
        };


        this.setup = function (url) {
            
            if (!urlTest(url)) {

                console.log("wrong URL")
                
                //에러포인트 발견, 리턴 안될 것임
                // error(false)
                
                // =>fix
                
                return this;
                
            }    


            tempA = url;

            return this;
        }


        this.get = function (url) {

 
            return fetch('get');

        }

        this.post = function (data) {

            
            return fetch('post',data);
            

        }

        this.put = function (data) {


            return fetch('put',data);
        }

        this.delete = function (data) {

            
            return fetch('delete',data);
            
        }


    }


    return restApi;
})