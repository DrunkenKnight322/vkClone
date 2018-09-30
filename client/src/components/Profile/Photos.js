import React, { Component } from 'react'
import shrike from '../../images/shrike.jpg'
import './profile.css'

export default class Photos extends Component {
  render() {
    return (
      <div className='photos_block'>
        <div className='photos_text'>
            <p style={{fontSize:'13px'}}>Мои фотографии  12</p>
            <p style={{color:'#919196'}}>показать на карте</p>
        </div>
        <div className='photos_content'>
            <img className='photos_photo' src={shrike} alt=""/>
            <img className='photos_photo2' src={shrike} alt=""/>
            <img className='photos_photo3' src={shrike} alt=""/>
            <img className='photos_photo4' src={shrike} alt=""/>
        </div>
      </div>
    )
  }
}
