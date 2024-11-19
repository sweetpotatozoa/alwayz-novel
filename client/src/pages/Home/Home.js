import './Home.css'
import React, { useState, useEffect } from 'react'
import backendApis from '../../utils/backendApis'
import WatchAdsButton from '../../components/WatchAdsButton/WatchAdsButton'
import MyPoint from '../../components/MyPoint/MyPoint'
import Catchphrase from '../../components/Catchphrase/Catchphrase'
import Logo from '../../components/Logo/Logo'

function Home() {
  const [currentPoint, setCurrentPoint] = useState(0)
  const [todayWatchCount, setTodayWatchCount] = useState(0)
  const initialize = async () => {
    const response = await backendApis.getPoint('GET', {})
    // console.log('responese', response)
    setCurrentPoint(response.currentPoint)
    setTodayWatchCount(response.todayWatchCount)
  }
  useEffect(() => {
    initialize()
  }, [])

  return (
    <div className='background'>
      <Logo></Logo>
      <Catchphrase></Catchphrase>
      <MyPoint currentPoint={currentPoint}></MyPoint>
      <WatchAdsButton todayWatchCount={todayWatchCount}></WatchAdsButton>
    </div>
  )
}

export default Home
