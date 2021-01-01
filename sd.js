
define([], function () {

    function restApi() {

        let tempA, tempB;
        
        function fetch(method,param){
            
            if(['get','post','put','patch','delete'].indexOf(method.toLowerCase())==-1){
                
                return Promise.resolve(false)
                
            }
            
            var tempUrl=tempA;
            
            return Promise.resolve(function(resolve){
                
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
                return this;
            }    

            tempA = url;
            return this;
        }


        this.get = function (cb) {

            cb(fetch('get'));
            
            return this

        }

        this.post = function (data,cb) {

            console.log("post")
            cb(fetch('post',data));
            
            return this

        }

        this.put = function (data,cb) {

            cb(('put',data));
            
            return this
        }

        this.delete = function (data,cb) {

            cb(fetch('delete',data));
            
            return this
            
        }


    }


    return restApi;
})