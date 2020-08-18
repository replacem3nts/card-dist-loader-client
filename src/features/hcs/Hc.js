import React, { useState } from 'react'
import { connect } from 'react-redux'
import { PickedUpPrescription } from '../prescriptions/PickedUpPrescription'

const Hc = ({ hc }) => {
    const pickedup = hc.rxes.filter(rx => rx.pickedup && !rx.loaded)
    const loaded = hc.rxes.filter(rx => rx.loaded)

    const pickedupRxArr = pickedup.map(rx => {
        return <PickedUpPrescription key={rx.id} {...rx}/>
        })

    return (
        <article>
            <section>
                <h2>{hc.name}</h2>
            </section>
            <section className='display-container'>
                <h3>Picked Up:</h3>
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
                        {pickedupRxArr}
                    </tbody>
                </table>
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