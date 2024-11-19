import './WatchAdsButton.css'
import { useNavigate } from 'react-router-dom'

function WatchAdsButton({ todayWatchCount }) {
  const navigate = useNavigate()
  const goAd = function () {
    navigate('/ad')
  }
  const isWatchCountFive = todayWatchCount >= 5

  return (
    <div className='adButtonContainer'>
      <button
        className={isWatchCountFive ? 'inactiveButton' : 'activeButton'}
        onClick={isWatchCountFive ? undefined : goAd}
      >
        <span className='getPointWord'>
          {isWatchCountFive
            ? '오늘의 광고를 모두 봤어요'
            : '광고보고 20POINT 받기!'}
        </span>
        <span className='watchAdCount'>X{5 - todayWatchCount}</span>
      </button>
    </div>
  )
}

export default WatchAdsButton
