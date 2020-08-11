const BACKEND_HCS = 'https://card-dist-4ct.herokuapp.com/api/v1/hcs'

export const fetchLogin = (userInfo) => {
    return fetch(BACKEND_HCS+'/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(userInfo)})
        .then(r => r.json())
}