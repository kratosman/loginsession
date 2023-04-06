var spanBalance = document.querySelector('.spanBalance');
var depositInput = document.getElementById('depositInput');
var withdrawInput = document.getElementById('withdrawInput');
var updateBalance;


    var btnLogout = document.getElementById('btnLogout');
    btnLogout.addEventListener('click', () => {
        fetch('/logout', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            credentials: 'include'
        })
            .then(res => {
                if (res.redirected) {
                    history.replaceState({}, null, window.location.href = res.url);
                }
            })
    })

    
fetch('/user')
    .then(res => res.json())
    .then(data => {
        fetch(`/login/${data.userId}`)
            .then(res => res.json())
            .then(data => {
                var info = document.querySelector('.info');
                console.log(data)
                info.innerHTML = `
                    Name: ${data.name} <br />
                    Balance : ${data.balance}
                    <span class="spanBalance"></span>
                `
            })
    });

