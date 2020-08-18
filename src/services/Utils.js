const BACKEND_CLS = 'http://localhost:4001/api/v1/cardloaders'

export const fetchLogin = (userInfo) => {
    return fetch(BACKEND_CLS+'/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(userInfo)})
        .then(r => r.json())
}

export const fetchPersistLogin = (token) => {
    return fetch(BACKEND_CLS+'/persist_login', {
        headers: {'Authorization': `Bearer ${token}`}
    })
        .then(r => r.json())
}