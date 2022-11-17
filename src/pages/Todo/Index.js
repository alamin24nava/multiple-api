import React from 'react'

import Layout from '../../layout/Index'
import Todos from './Todos'

export default function Index() {
  return (
    <div className='main-content'>
      <div class="section-box"><h4 class="title pb-0">All Todo List</h4></div>
        <Layout />
        <Todos />
    </div>
  )
}
