import React from 'react'

import './style.css'

import ContentLoader from '../../components/ContentLoader/ContentLoader';
import useFetch from '../../components/CustomHooks/useFetch'
import Empty from '../../components/Empty/Empty';
import Todo from './Todo'

const url = 'https://jsonplaceholder.typicode.com/todos'
export default function Todos() {
    const {data, isLoading, error} = useFetch(url)
  return (
    <div className='row'>

      
        {isLoading && <ContentLoader />}
        {error && <Empty />}
        {
            data && data.map((todo)=>(
                <Todo todo={todo} key={todo.id} />
            ))
        }
    </div>
  )
}
