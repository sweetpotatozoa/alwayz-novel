import './MyPoint.css'

function MyPoint({ currentPoint }) {
  return (
    <div className='pointContainer'>
      <div className='pointBackground'>
        <img src='images/pointbackground.png' />
        <div className='lastPointPercent'>
          <span>
            열람권까지
            <span className='lastPointNum'>
              {currentPoint ? ((700 - currentPoint) / 7).toFixed(1) : 100}%!
            </span>
          </span>

          <div>
            <span className='lastPointNum'>
              {Math.ceil((700 - currentPoint) / 100)}일
            </span>
            뒤는 하루종일 웹소설 보는 날!
          </div>
        </div>
        <div className='currentPoint'>{currentPoint}P</div>
        <div className='prize'>
          <img src='images/prize.png' />
        </div>
      </div>
    </div>
  )
}

export default MyPoint
