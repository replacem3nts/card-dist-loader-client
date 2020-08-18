import React from 'react'

export const PickedUpPrescription = ({ id, rxcode, appt, cardserial, pickedup, loaded, edit}) => {

    return (
        <tr onClick={() => edit(id)}>
            <td>{rxcode}</td>
            <td>{appt}</td>
            <td>{cardserial}</td>
            <td>{pickedup ? 'Yes' : 'No'}</td>
            <td>{loaded ? 'Yes' : 'No'}</td>
            <td><input/> </td>
        </tr>
    )
}
