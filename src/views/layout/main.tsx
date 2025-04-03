import React from 'react'
import MainHeader from './header'
import HomeView from '../pages/home/home'

const Main = () => {
  return (
    <div className="mx-8 w-full h-screen ">
        <MainHeader />
        <HomeView />
    </div>
  )
}

export default Main