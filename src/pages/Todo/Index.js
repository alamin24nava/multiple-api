import React from 'react'

import Layout from '../../layout/Index'
import Todos from './Todos'

export default function Index() {
  return (
    <div className='main-content'>
        <Layout />
        <Todos />
    </div>
  )
}
