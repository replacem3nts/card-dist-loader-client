import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'

const mapState = (state) => {
    return {hcs: state.hcs}
}

const Navigation = ({ hcs }) => {
    const history = useHistory()
    const [hcId, setHcId] = useState('DEFAULT')

    const hcOptArr = hcs.map(hc => {
        return <option key={hc.id} value={hc.id}>{hc.name}</option>
        })

    let handleHcNav = (hcId) => {
        history.push(`/${hcId}`)
    }

    return (
        <nav>
            <form onChange={(e) => handleHcNav(e.target.value)}>
                <label>
                    Health Center:
                    <select value={hcId} onChange={(e) => setHcId(e.target.value)}>
                        <option value='DEFAULT' disabled>---------------</option>
                        {hcOptArr}
                    </select>
                </label>
            </form>
        </nav>
    )
}

export default connect(mapState)(Navigation)
