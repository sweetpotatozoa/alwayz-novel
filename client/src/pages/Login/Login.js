import './Login.css'
import React, { useState } from 'react'
import backendApis from '../../utils/backendApis'
import { useNavigate } from 'react-router-dom'
import Logo from '../../components/Logo/Logo'

function Login() {
  const navigate = useNavigate()
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const handleOnClick = async (e) => {
    e.preventDefault()
    // console.log(userName, password)

    const userData = { userName, password }
    const response = await backendApis.login('POST', userData)
    if (response.status !== 200) {
      alert('비밀번호가 틀렸습니다.')
      return
    } else {
      navigate('/')
    }
  }
  return (
    <div className='background'>
      <div className='logo' style={{ margin: 50 }}>
        <Logo></Logo>
      </div>
      <input
        type='text'
        placeholder='아이디'
        onChange={(e) => {
          setUserName(e.target.value)
        }}
      />
      <input
        type='password'
        placeholder='비밀번호'
        onChange={(e) => {
          setPassword(e.target.value)
        }}
      />
      <button className='button' onClick={handleOnClick}>
        로그인
      </button>
    </div>
  )
}
export default Login
