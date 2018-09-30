import React, { Component } from 'react'
import camera from '../../images/camera.png'
import video from '../../images/video.png'
import music from '../../images/music.png'
import person from '../../images/person.png'

export default class ProfileFeedCreate extends Component {
  render() {
    return (
      <div>
        <div className='create_post1'>
        <form action="submit">
            <div className='input_div'>
              <img className='create_post_avatar1' src={person} alt=""/>
              <input type="text" placeholder='Что нового?'/>
            </div>
            <div className='create_post_icons'>
               <img className='create_post_camera1' src={camera} alt=""/>
               <img className='create_post_video1'  src={video} alt=""/>
               <img className='create_post_music1' src={music} alt=""/>
            </div>
            <button className='formbtn1'>Отправить</button>
        </form>

        </div>
      </div>
    )
  }
}
