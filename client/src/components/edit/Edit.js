import React, { Component } from 'react'
import axios from 'axios'
import UploadPhoto from './UploadPhoto'

export default class Edit extends Component {

    state = {
        status: '',
        date: '',
        city: '',
        familyStatus: '',
        languages: '',
        inspire: '',
        about: ''
    }

    onStatus = e => {
        this.setState({status: e.target.value})
    }
    onDate = e => {
        this.setState({date: e.target.value})
    }
    onCity = e => {
        this.setState({city: e.target.value})
    }

    onFamily = e => {
        this.setState({familyStatus: e.target.value})
    }
    onLang = e => {
        this.setState({languages: e.target.value})
    }
    onInspire = e => {
        this.setState({inspire: e.target.value})
    }
    onAbout = e => {
        this.setState({about: e.target.value})
    }

    onSubmitChanges = e => {
        e.preventDefault();

        const uploadProfile = {
            status: this.state.status,
            date: this.state.date,
            city: this.state.city,
            familyStatus: this.state.familyStatus,
            languages: this.state.languages,
            inspire: this.state.inspire,
            about: this.state.about
        }

        axios.post('/api/users/profile', uploadProfile)
            .then(res => this.props.history.push('/profile'))

    }

   

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitChanges} action="submit">
            <input onChange={this.onStatus} type="text" placeholder='Изменить статус'/>
            <input onChange={this.onDate}  type="text" placeholder='Изменить дату'/>
            <input onChange={this.onCity}  type="text" placeholder='Изменить город'/>
            <input onChange={this.onFamily}  type="text" placeholder='Изменить семейное положение'/>
            <input onChange={this.onLang}  type="text" placeholder='Изменить языки'/>
            <input onChange={this.onInspire} type="text" placeholder='Изменить вдохновение'/>
            <input onChange={this.onAbout} type="text" placeholder='Изменить "о себе"'/>
            <button type='submit'>Сохранить</button>
        </form><br/>
       <UploadPhoto />

      </div>
    )
  }
}
