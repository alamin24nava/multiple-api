import React from 'react'

import Layout from '../../layout/Index'
import Countries from './Countries'

export default function Index() {
    return (
        <div>
            <div className='main-content'>
            <Layout />
                <div className='section-box'>
                    <h4 className='title pb-0'>All Countries Data</h4>
                </div>
                <Countries />
            </div>
        </div>
    )
}
