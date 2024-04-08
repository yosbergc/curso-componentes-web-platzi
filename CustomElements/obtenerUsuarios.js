let render = document.querySelector('.render');
async function obtenerUsuario() {
    let res = await fetch('https://dummyapi.io/data/v1/user', {
        method: 'GET',
        headers: {
            "app-id": "66131f2500ce1464b6800e00"
        }
    });
    let data = await res.json();
    let userData = [...data.data];
    console.log(userData)
    let userList = userData.map(user => {
        return `<user-component nombre="${user.firstName}" apellido="${user.lastName}" sourcesita="${user.picture}"></user-component>`
    });
    render.innerHTML = userList.join('');
}  
obtenerUsuario()