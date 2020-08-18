import React from 'react'
import { useHistory } from 'react-router-dom'

export const HcDisplay = ({ id, name, rxes }) => {
    const history = useHistory()

    const totalRxes = rxes.length
    let availableRxes = 0
    let pickedupRxes = 0
    let loadedRxes = 0

    rxes.map(rx => {
        if(rx.loaded){
            loadedRxes++
        } else if (rx.pickedup) {
            pickedupRxes++
        } else {
            availableRxes++
        }
    })

    let handleLink = () => {
        history.push(`/${id}`)
    }

    return (
        <tr onClick={handleLink}>
            <td>{name}</td>
            <td>{availableRxes === 0 ? '-' : availableRxes}</td>
            <td>{pickedupRxes === 0 ? '-' : pickedupRxes}</td>
            <td>{loadedRxes === 0 ? '-' : loadedRxes}</td>
            <td>{totalRxes === 0 ? '-' : totalRxes}</td>
        </tr>
    )
}
