import React, { Component } from 'react'
import {connect} from 'react-redux'


class ProfileInfo extends Component {

    state = {
        hide: true,
        info:'Показать подробную инфромацию'
    }

    onShowInfo = e =>{
        if (this.state.hide === true) {
            this.setState({hide: false})
            this.setState({info: 'Скрыть подробную информацию'})
        }else{
            this.setState({hide: true})
            this.setState({info: 'Показать подробную инфромацию'})
        }
        
    }

  render() {
      const {user} = this.props.auth
      console.log(this.props.auth)
    return (
      <div className='profile_main'>
        <div className='name_div'>
            <h1>{user.name} {' '} {user.lastname}</h1>
            <h4>{user.status}</h4>
        </div><hr/>
        
        <div className="info">
            <div className="date_of_birth">
                <p>День рождения:</p>
                <p className='info_p2'>{user.birth}</p>
            </div>

            <div className="date_of_birth">
                <p>Город:</p>
                <p className='info_p2'>{user.city}</p>
            </div>
           
            <div className="date_of_birth">
                <p>Семейное положение:</p>
                <p className='info_p2'>{user.familyStatus}</p>
            </div>

            <span onClick={this.onShowInfo} className='info_p1'>{this.state.info}</span><br/><br/>
            {this.state.hide === false ? 
                <div className='hidden_div'>
                    <p className='another_info_p'>Основная информация</p><hr className='another_info_hr'/>
                    <div className="date_of_birth">
                       <p>Языки:</p>
                       <p className='info_p2'>{user.languages}</p>
                    </div><br/>
                    <p>Жизненная позиция</p><hr className='another_info_hr'/>
                    <div className="date_of_birth">
                       <p>Вдохновляют:</p>
                       <p className='info_p2'>{user.inspire}</p>
                    </div>
                    <br/>
                    <p>Личная информация</p><hr className='another_info_hr'/>
                    <div className="date_of_birth">
                       <p>О себе:</p>
                       <p className='info_p2'>{user.about}</p>
                    </div>
                </div>
                
                
            : null}


            <div className='another_info'>
                <div className='info_friends'>
                    <h2>32</h2>
                    <p>друзей</p>
                </div>
                <div className='info_friends'>
                    <h2>32</h2>
                    <p>подписчиков</p>
                </div>
                <div className='info_friends'>
                    <h2>2</h2>
                    <p>фотографий</p>
                </div>
                <div className='info_friends'>
                    <h2>2</h2>
                    <p>видеозаписи</p>
                </div>
                <div className='info_friends'>
                    <h2>2</h2>
                    <p>аудиозаписи</p>
                </div>
            </div>
            
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(ProfileInfo)