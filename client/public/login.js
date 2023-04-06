var formLogin = document.getElementById('formLogin');

var valUser = document.getElementById('email');
var valPass = document.getElementById('password')

formLogin.addEventListener('submit', (e) => {
    var user = valUser.value;
var pass = valPass.value;
console.log(user, pass);

    e.preventDefault();
    fetch('/login', {
        method: 'POST',
        headers: { 
            'Content-Type':'application/json',
        },
        body: JSON.stringify({
            'email': user,
            'password':pass
        })
    })
        .then(res => {
            if (res.redirected) {
                history.replaceState({}, null, window.location.href = res.url);
            }
        })

        valUser.value = "";
        valPass.value = "";
})
