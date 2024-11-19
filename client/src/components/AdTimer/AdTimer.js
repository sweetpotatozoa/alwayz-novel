import React, { useState, useEffect } from 'react'
import './AdTimer.css'
import backendApis from '../../utils/backendApis'

function AdTimer() {
  const [lastTime, setLastTime] = useState(15)

  useEffect(function () {
    const timeDrop = function () {
      setLastTime((lastTime) => lastTime - 1)
    }
    const timer = setInterval(timeDrop, 1000)
    const timeout = setTimeout(function () {
      clearInterval(timer)
    }, 15000)
    return function () {
      clearInterval(timer)
      clearTimeout(timeout)
    }
  }, [])
  useEffect(
    function () {
      if (lastTime === 0) {
        adComplete()
      }
    },
    [lastTime],
  )

  const adComplete = async () => {
    try {
      const response1 = await backendApis.updatePoint('PUT', {})
      console.log('서버응답', response1)
    } catch (error) {
      console.error('서버 요청 오류', error)
    }
  }
  return (
    <div className='timer'>
      {lastTime > 0 ? (
        <div className='lastTimeContainer'>
          <span className='lastTime'>{lastTime} 초</span>
          <div className='lastTime'>지금나가시면 포인트를 못받아요</div>
        </div>
      ) : (
        '이제 뒤로가기를 누르셔도 괜찮습니다'
      )}
    </div>
  )
}
export default AdTimer
