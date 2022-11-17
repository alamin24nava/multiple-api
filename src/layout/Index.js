import React, {useState} from 'react'
import Header from './Header'
import Aside from './Aside'

export default function Index() {
  const [expand, setExpand] = useState(false)
  const sideBarExpand = (expanded)=>{
    setExpand(expanded);
  }
  return (
    <>
        <Header onExpand = {sideBarExpand} />
        <Aside expanded = {expand} />
    </>
  )
}
