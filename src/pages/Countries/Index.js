import React from 'react'

import Layout from '../../layout/Index'
import Countries from './Countries'

export default function Index() {
    return (
        <div className='aa'>
            <Layout />
            <div className='main-content'>
                <div className='section-box'>
                    <h4 className='title pb-0'>All Country Data</h4>
                </div>
                <Countries />
            </div>
        </div>
    )
}
