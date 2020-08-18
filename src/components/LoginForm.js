import React, { useState } from 'react'
import { fetchLogin } from '../services/Utils'
import { connect } from 'react-redux'
import { setHcs } from '../features/hcs/HcsSlice'
import { useHistory } from 'react-router-dom'

const mapDispatch = { setHcs }


const LoginForm = ({ setHcs }) => {
    let [username, setUsername] = useState('')
    let [password, setPassword] = useState('')
    let history = useHistory()


    let handleSubmit = (e) => {
        e.preventDefault()
        let userInfo = {username, password}
        fetchLogin(userInfo)
            .then(response => {
                console.log(response)
                let { token} = response
                let { hcs } = response.cardloader
                setHcs({hcs, token})
                history.push('/')
            })
    }

    return (
        <form onSubmit={handleSubmit} >
            <label>
                Username:<br/>
                <input type='text' name='username' value={username} onChange={(e) => setUsername(e.target.value)}/><br/><br/>
            </label>
            <label>
                Password:<br/>
                <input type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)}/><br/><br/>
            </label>
            <input type='submit' value='Submit'/><br/>
        </form>
    )
}

export default connect(null, mapDispatch)(LoginForm)