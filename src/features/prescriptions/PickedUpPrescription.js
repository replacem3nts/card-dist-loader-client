import React, { useState } from 'react'

export const PickedUpPrescription = ({ id, rxcode, appt, cardserial, pickedup, loaded }) => {
    const [loadStatus, setLoadStatus] = useState(loaded)

    let dateOptions = {
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    }

    let handleChange = () => {

    }

    return (
        <tr>
            <td>{rxcode}</td>
            <td>{new Intl.DateTimeFormat('en-US', dateOptions).format(new Date(appt))}</td>
            <td>{cardserial}</td>
            <td>{pickedup ? 'Yes' : 'No'}</td>
            <td>
                <form onChange={handleChange}>
                    <select value={loadStatus} onChange={(e) => setLoadStatus(e.target.value)} >
                        <option value={true} >Yes</option>
                        <option value={false} >No</option>
                    </select>
                </form>
            </td>
        </tr>
    )
}
