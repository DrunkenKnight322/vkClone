import React, { Component } from 'react'
import person from '../../images/person.png'
import like from '../../images/like.png'
import comment from '../../images/comment.png'
import {connect} from 'react-redux'
import {getPosts} from '../../actions/feed'
import {deletePost} from '../../actions/feed'
import axios from 'axios'

class FeedItem extends Component {

    componentDidMount(){
        this.props.dispatch(getPosts())
    }

  onDelete = () => {
    console.log('delete')
  }

  render() {
    const { posts} = this.props.posts;
    const feed = posts.map((post) => (
      <div key={post._id} className='posts'>
            <div onClick={this.onClickPost} className='post_form'>
                <div className="user">
                    <img src={person} alt=""/>
                    <div className='post_header'>
                        <h3>{post.name}{' '}{post.lastname}</h3>
                        <p>{post.date}</p>
                    </div>
                    {post.user === this.props.auth.user.id ? (
                        <button onClick={this.onDelete}>x</button>
                    ): null}
                    
                </div>

                <div className="content">
                    {post.text}
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
            </div><br/>
        </div>
    ))
    return (
      <div>
        {feed}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
        auth: state.auth

    }
}

export default connect(mapStateToProps)(FeedItem)

