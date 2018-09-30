import React, { Component } from 'react'
import person from '../../images/person.png'
import like from '../../images/like.png'
import comment from '../../images/comment.png'

export default class ProfileFeed extends Component {
  render() {
    return (
      <div>
        <div className='posts'>
            <div className='post_form_profile'>
                <div className="user1">
                    <img src={person} alt=""/>
                    <div className='post_header'>
                        <h3>Huy</h3>
                        <p>6 минут назад</p>
                    </div>
                </div>

                <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur doloribus voluptatum necessitatibus eveniet exercitationem ea, illum, perferendis dolorum rerum hic suscipit voluptatibus ex minima quod delectus inventore. Ullam, exercitationem ducimus?
                </div> <hr/>
                <div className="likes1">
                    <div className='like_img_div'>
                    <img className='like_img1' src={like} alt=""/>
                    <p>1</p>
                    </div>
                    
                    <div className='comment_img_div'>
                        <img className='comment_img1' src={comment} alt=""/>
                        <p>2</p>
                    </div>
                    
                </div>
                <div className="comments">
                    <img className='comment_person1' src={person} alt=""/>
                    <div className='comment'>
                        <h4>Name</h4>
                        <h5>Comment</h5>
                        <p>2 минуты назад</p>
                        <div className='comment_like_div1'>
                        <img className='comment_form_like1' src={like} alt=""/>
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
