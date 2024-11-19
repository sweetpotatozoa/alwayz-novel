import './Ad.css'
import React, { useState, useEffect } from 'react'

import backendApis from '../../utils/backendApis'
import AdTimer from '../../components/AdTimer/AdTimer'

function Ad() {
  const [isClicked, setIsClicked] = useState(false)
  const handleClick = () => {
    setIsClicked(true)
    // 쿠폰 받기 로직 구현 (예: 서버 요청)
  }

  const [adItemInfo, setAdIteminfo] = useState({})
  const AdItemInfoSetting = async () => {
    const response = await backendApis.getAdItemInfo('GET', {})
    console.log('ad.js', response)
    setAdIteminfo(response)
  }
  useEffect(() => {
    AdItemInfoSetting()
  }, [])

  return (
    <div className='background'>
      <AdTimer></AdTimer>
      <div className='itemImg'>
        <img src={adItemInfo.image} />
      </div>
      <div className='iteminfo'>
        <div className='price'>{adItemInfo.teamPrice}원</div>
        <div className='review'>
          <img className='reviewStars' src='images/star.png' />
          <span className='reviewCount'>{adItemInfo.reviewNum}</span>
        </div>
      </div>
      <button
        className={`coupon ${isClicked ? 'clicked' : ''}`}
        onClick={handleClick}
        disabled={isClicked}
      >
        {isClicked
          ? '쿠폰이 받아졌습니다'
          : `최대 ${adItemInfo.coupon}원 할인 쿠폰 받기`}
      </button>
      <div className='title'>{adItemInfo.title}</div>
      <hr className='titleLine'></hr>
      <div className='shippingContainer'>
        <div className='shippingPrice'>
          <span className='smallTitle'>배송비</span>
          <span className='detail' id='freeShipping'>
            모든 상품 무료 배송
          </span>
        </div>
        <div className='shppingInfo'>
          <span className='smallTitle'>배송정보</span>
          <span className='detail'>
            배송 3일 소요. {adItemInfo.shippingCor}
          </span>
        </div>
      </div>
      <hr className='shippingLine'></hr>
      <div className='ranking'>
        {adItemInfo.category} 판매 {adItemInfo.ranking}위
      </div>
      <hr className='titleLine'></hr>
      <div className='phurchaseButton'>
        <button
          className='soloPurchase'
          onClick={() => {
            alert('개인구매 페이지로 넘어가겠죠?')
          }}
        >
          <span>{adItemInfo.soloPrice}원 개인구매</span>
        </button>
        <button
          className='teamPurchase'
          onClick={() => {
            alert('팀구매 페이지로 넘어가겠죠?')
          }}
        >
          <span>{adItemInfo.teamPrice}원 팀구매</span>
        </button>
      </div>
    </div>
  )
}

export default Ad
