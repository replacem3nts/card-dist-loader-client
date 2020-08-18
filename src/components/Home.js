import React from 'react'
import { connect } from 'react-redux'
import { HcDisplay } from '../features/hcs/HcDisplay'

const mapState = (state) => {
    return {hcs: state.hcs}
}

const Home = ({ hcs }) => {

    const hcInfoArr = hcs.map(hc => {
        return <HcDisplay key={hc.id} {...hc}/>
    })

    return (
        <article>
            <section className='display-container'>
                <table>
                    <thead>
                        <tr>
                            <th>Health Center</th>
                            <th>Available Prescriptions</th>
                            <th>Picked Up Prescriptions</th>
                            <th>Loaded Prescriptions</th>
                            <th>Total Prescriptions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {hcInfoArr}
                    </tbody>
                </table>
            </section>
        </article>
    )
}

export default connect(mapState)(Home)