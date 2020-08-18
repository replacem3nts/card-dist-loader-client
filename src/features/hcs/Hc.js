import React, { useState } from 'react'
import { connect } from 'react-redux'

const Hc = ({ hc }) => {
    const [toLoad, setToLoad] = useState([])

    const pickedup = hc.rxes.filter(rx => rx.pickedup && !rx.loaded)
    const loaded = hc.rxes.filter(rx => rx.loaded)

    let dateOptions = {
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    }

    let handleToLoad = (rxId) => {
        if(toLoad.find(tl => tl === rxId)){
            setToLoad(toLoad => toLoad.filter(id => id !== rxId))
        } else {
            setToLoad(toLoad => [...toLoad, rxId])
        }
    }


    const pickedupRxArr = pickedup.map(rx => {
        return (
            <li>
                <span>{rx.rxcode}</span>
                <span>{new Intl.DateTimeFormat('en-US', dateOptions).format(new Date(rx.appt))}</span>
                <span>{rx.cardserial}</span>
                <span>{rx.pickedup ? 'Yes' : 'No'}</span>
                <span>{rx.loaded ? 'Yes' : 'No'}</span>
                <span>
                    <input type='checkbox' checked={toLoad.find(rxId => rxId === rx.id)} value={rx.id} onClick={(e) => handleToLoad(e.target.value)}/>
                </span>
            </li>
            )
        })

    return (
        <article>
            <section>
                <h2>{hc.name}</h2>
            </section>
            <section>
                <h3>Picked Up:</h3>
                <form>
                    <div>
                        <span>Rx Code</span>
                        <span>Appt.</span>
                        <span>Card Serial</span>
                        <span>Picked Up</span>
                        <span>Loaded</span>
                        <span>Load?</span>
                        <ul>
                            {pickedupRxArr}
                        </ul>
                    </div>
                </form>
            </section>
            <section>
            <h3>Loaded:</h3>
                <table>
                        <thead>
                            <tr>
                                <th>Rx Code</th>
                                <th>Appt.</th>
                                <th>Card Serial</th>
                                <th>Picked Up</th>
                                <th>Loaded</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {rxArr} */}
                        </tbody>
                    </table>
            </section>
        </article>

    )
}

export default connect()(Hc)