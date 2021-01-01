
define([], function () {

    function restApi() {

        let tempA
        
        function api(method,param){
            
            if(['get','post','put','patch','delete'].indexOf(method.toLowerCase())==-1){
                
                return Promise.resolve(false)
                
            }
            
            let tempUrl=tempA;
            
            return new Promise(function(resolve,reject){
                
                let runMethod=(function(){
                    
                    let config={
                        method:method,
                        mod: 'cors',
                        cache :'no-cache',
                        headers:{'Content-Type': 'application/json'},
                        redirect:'follow',
                        referrer:'no-referrer'
                    };
                    
                        method!=='get'?config.body=JSON.stringify(param):false
                    
                    return config;
                    
                })();
                
                resolve(fetch(tempUrl,runMethod))
                
            });
            
        }

        function urlTest(url) {
            
            const regex = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
            
            return regex.test(url)
            
        };

        this.setup = function (url) {
            
            if (!urlTest(url)) {
                console.log("wrong URL")
                return this;
            }    

            tempA = url;

            return this;
        }

        
        this.get = function (cb) {

            cb(api('get'));
            
            return this

        }

        this.post = function (data,cb) {

            
            cb(api('post',data));
            
            return this

        }

        this.put = function (data,cb) {

            cb(api('put',data));
            
            return this
        }

        this.delete = function (data,cb) {

            cb(api('delete',data));
            
            return this
            
        }


    }


    return restApi;
})
