import React, { Component } from 'react'
import './register.css'
export default class Register extends Component {
  render() {
    return (
      <div>
            <form action="submit" className='register_form'>
                <h1>Впервые в ВКонтакте?</h1>
                <h4>Моментальная регистрация</h4>
                <input type="text" placeholder='Ваше Имя' />
                <input type="text" placeholder='Ваша фамилия' />
                <input type="text" placeholder='Дата рождения'/>
                <input type="email" name="email" placeholder="Ваш email"/>
                <input type="password" name="password" placeholder='Придумайте пароль'/>
                <button>Зарегистрироваться</button>
            </form>
      </div>
    )
  }
}
