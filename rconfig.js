var require = {
    "paths": {
        "app": "./app",
        "restApi": "./restApi",
        "login": "./login"
    },
    "shim": {
        "app":{
            "deps":[""]
        },
        "login": {
            "deps":["restAPi"]
        }
    },
    "baseUrl": "/static/api"
};