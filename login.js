define(['restApi'], function (rest) {
    const loginForm = document.getElementById("loginForm")
    const loginButton = document.getElementById("loginButton")

    const login = new rest();

    const getLoginData = function() {
        login.get("http://localhost:3000/users")
    }

    const postLoginData = function (email, pwd) {

        const loginData = {
            email: email,
            pwd: pwd
        }
        const loginFunc = (response) => {
            response.then(res=>res.json())
                    .then(data=>console.log(data))
        }

        login.setup("http://localhost:4000/login").post(loginData, loginFunc)
    
    };

    const handleSubmit = event => {
        event.preventDefault();
        const email = loginForm.querySelector(".email").value
        const pwd = loginForm.querySelector(".pwd").value
        postLoginData(email, pwd);
    };

    function init() {
        loginForm.addEventListener("submit", handleSubmit)
    }

    if (loginForm) {
        init();
    }

})