import React from 'react'
import './home.scss'
import Featured from '../../components/featured/Featured'
import Navbar from '../../components/navbar/Navbar'
import List from '../../components/list/List'


function home() {
  return (
    <div className='home'>
      <Navbar/>
      <Featured />
      <List/>
    </div>
  )
}

export default home