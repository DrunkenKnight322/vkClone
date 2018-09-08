import React, { Component } from 'react'
import SideNavigation from '../layouts/sidenav/SideNavigation';
import './feed.css'
import person from '../../images/person.png'
import like from '../../images/like.png'
import comment from '../../images/comment.png'
import camera from '../../images/camera.png'
import video from '../../images/video.png'
import music from '../../images/music.png'

export default class Feed extends Component {
  render() {
    return (
      <div>
        <SideNavigation />
        <div className='create_post'>
        <form action="submit">
            <div className='input_div'>
              <img className='create_post_avatar' src={person} alt=""/>
              <input type="text" placeholder='Что нового?'/>
            </div>
            <div className='create_post_icons'>
               <img className='create_post_camera' src={camera} alt=""/>
               <img className='create_post_video'  src={video} alt=""/>
               <img className='create_post_music' src={music} alt=""/>
            </div>
            <button>Отправить</button>
        </form>

        </div>

        <div className='posts'>
        <div className='post_form'>
            <div className="user">
                <img src={person} alt=""/>
                <div className='post_header'>
                     <h3>Huy</h3>
                     <p>6 минут назад</p>
                </div>
            </div>

            <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur doloribus voluptatum necessitatibus eveniet exercitationem ea, illum, perferendis dolorum rerum hic suscipit voluptatibus ex minima quod delectus inventore. Ullam, exercitationem ducimus?
            </div> <hr/>
            <div className="likes">
                <div className='like_img_div'>
                  <img className='like_img' src={like} alt=""/>
                  <p>1</p>
                </div>
                
                <div className='comment_img_div'>
                    <img className='comment_img' src={comment} alt=""/>
                    <p>2</p>
                </div>
                
            </div>
            <div className="comments">
                <img className='comment_person' src={person} alt=""/>
                <div className='comment'>
                    <h4>Name</h4>
                    <h5>Comment</h5>
                    <p>2 минуты назад</p>
                    <div className='comment_like_div'>
                       <img className='comment_form_like' src={like} alt=""/>
                       <p>1</p>
                    </div>
                </div>
                
                
            </div>
        </div>
        </div>
        
      </div>
    )
  }
}
