async function getJSON(url){
    let response = await fetch(url)
    let data = await response.json()
    return data
}

const usersJSON = getJSON('users.json')
console.log(usersJSON)

const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop)
})

function User(username, email, password) {
    this.username = username
    this.email = email
    this.password = password
}

if (params.email && params.password){
    const user = new User(params.username, params.email, params.password)
    console.log(user)
}
else if (!params.email && !params.password && params.submit === 'Entrar') {
    window.alert('Você não logou.')
    window.location.href = 'login.html'
}

