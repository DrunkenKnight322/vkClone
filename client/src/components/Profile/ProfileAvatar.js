import React, { Component } from 'react'
import shrike from '../../images/shrike.jpg'
import chart from '../../images/chart.png'
import './profile.css'
import {Link, Redirect} from 'react-router-dom'

export default class ProfileAvatar extends Component {

  onUploadPhoto = () => {
    <a href="/upload"></a>
  }

  render() {
    return (
      <div>
        <div className='profile_avatar_div'>
            <div className="profile_avatar">
                <img src={shrike} className='profile_avatar_img' alt=""/>
                <div className='profile_edit_div'>
                    <span className='profile_edit'><Link to="/edit">Редактировать</Link></span>
                    <div className="edit_chart_div">
                    <img onClick={this.onUploadPhoto} className='edit_chart' src={chart} alt=""/>
                    </div>
                    
                </div>
                
            </div>
        </div>
      </div>
    )
  }
}
