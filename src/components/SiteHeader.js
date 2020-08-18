import React from 'react';
import logo from '../logo.svg'
import { useHistory } from 'react-router-dom';

export const SiteHeader = () => {
    const history = useHistory()

    const handleLogout = (e) => {
        e.preventDefault()
        localStorage.clear()
        history.push('/')
    }

    return (
        <div>
            <img src={logo} className="App-logo" alt="logo" onClick={() => {history.push('/')}}/>
            {localStorage.token ?
            <h3>4CT Card Loader</h3>
            :
            <h3>Welcome!</h3>
            }
            <div className='right-header'>
                {localStorage.token ? 
                <button className='small-button' onClick={(e) => handleLogout(e)} >Logout</button>
                :
                null
                }
            </div>
        </div>
    )
}