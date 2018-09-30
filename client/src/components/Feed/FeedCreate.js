import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addPost} from '../../actions/feed'

import camera from '../../images/camera.png'
import video from '../../images/video.png'
import music from '../../images/music.png'
import person from '../../images/person.png'

class FeedCreate extends Component {

  state = {
    text: '',
    after: ''
  }
  onChangeFeed = e => {
    this.setState({text: e.target.value})
  }


  onSubmitFeed = e => {
    e.preventDefault()

    const {user} = this.props.auth
    const newPost = {
      text: this.state.text,
      name: user.name,
      lastname: user.lastname
    }
    this.props.dispatch(addPost(newPost));
    this.setState({text:''})
    
  }

 

  render() {
    return (
      <div>
         <div className='create_post'>
        <form onSubmit={this.onSubmitFeed} action="submit">
            <div className='input_div'>
              <img className='create_post_avatar' src={person} alt=""/>
              <input onChange={this.onChangeFeed} value={this.state.text} type="text" placeholder='Что нового?'/>
            </div>
            <div className='create_post_icons'>
               <img className='create_post_camera' src={camera} alt=""/>
               <img className='create_post_video'  src={video} alt=""/>
               <img className='create_post_music' src={music} alt=""/>
            </div>
            <button className='formbtn'>Отправить</button>
        </form>
        
        </div>
        <p>{this.state.after}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(FeedCreate)