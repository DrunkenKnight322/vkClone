import React, { Component } from 'react'
import shrike from '../../images/shrike.jpg'
import chart from '../../images/chart.png'
import './profile.css'
import {Link, Redirect} from 'react-router-dom'
import axios from 'axios'

export default class ProfileAvatar extends Component {

  state = {
    photo: null
  }

  componentDidMount(id){
    axios.get(`/api/photos/${id}`)
      .then(res => {
        this.setState({photo: res.data})
      })
  }

  render() {
    return (
      <div>
        <div className='profile_avatar_div'>
            <div className="profile_avatar">
                <img src={this.state.photo} className='profile_avatar_img' alt=""/>
                <div className='profile_edit_div'>
                    <span className='profile_edit'><Link to="/edit">Редактировать</Link></span>
                    <div className="edit_chart_div">
                    <img  className='edit_chart' src={chart} alt=""/>
                    </div>
                    
                </div>
                
            </div>
        </div>
      </div>
    )
  }
}
