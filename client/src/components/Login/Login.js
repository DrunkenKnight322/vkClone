import React, { Component } from 'react'
import './login.css'
import phone from '../../images/vkmusicAndroid.png'

export default class Landing extends Component {

  state = {
    email: '',
    password: ''
  }

  handleEmail = e => {
    this.setState({email: e.target.value})
  }
  handlePassword = e => {
    this.setState({password: e.target.value})
  }

  submitUser = e => {
    e.preventDefault()
    const userData = {
      email: this.state.email,
      password: this.state.password
    }
  }

  render() {
    return (
      <div className='landing_flex'>
        <div className="loginForm">
          <form action="submit" className='login' onSubmit={this.submitUser}>

              <label>Телефон или email</label>
              <input type="email" className='email_input' onChange={this.handleEmail}/>

              <label>Пароль</label>
              <input type="password" name="password" className='email_input' onChange={this.handlePassword}/>
           
              <button className='login_btn'>Войти</button>
          </form><br/>
          <span className='register_btn'><a href='/register'>Регистрация</a></span><br/> <br/>
          <a href="#" style={{
                color: '#4a76a8',
                textDecoration: 'none',
                fontSize: '13px',
                cursor:'pointer'
              }}>Забыли пароль?</a>
        </div>
        <div className='phones'>
          <div className='phones_h'></div>
          <h1 className='phones_h1'>Вконтакте для мобильных устройств</h1>
          <h2 className='phones_h2'>Чтобы всегда оставаться ВКонтакте с друзьями и близкими, не обязательно находиться за компьютером. Установите официальное мобильное приложение ВКонтакте и оставайтесь в курсе новостей Ваших друзей, где бы Вы ни находились.</h2>
          <img className='phone' src={phone} alt=""/>
          <img className='phone2' src={phone} alt=""/>
          <img className='phone3' src={phone} alt=""/>
        </div>
      </div>
    )
  }
}
