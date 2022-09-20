const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop)
})

class User {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }
    checkPassword(password, realPassword) {
        console.log(`[user ${this.username}] Checking password...`)
        if (password === realPassword){
            console.log(`[user ${this.username}] Password is real!`)
            return true
        }
        else{
            console.log(`[user ${this.username}] Password isn't real.`)
            return false
        }
    }
}

if (params.email && params.password){
    if (params.submit === 'Entrar'){
        var user = new User(params.username, params.email, params.password)
        fetch('users.json').then(response => {
            return response.json()
        }).then(
            data => {
                for (user in data.users){
                    if (user.checkPassword(params.password, user.password))
                        console.log(user)
                }
            }
        )
    }
}
else if (!params.email && !params.password && params.submit === 'Entrar') {
    window.alert('Você não logou.')
    window.location.href = 'login.html'
}

