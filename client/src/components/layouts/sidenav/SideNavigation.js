import React, { Component } from 'react'
import './sidenav.css'
import camera from '../../../images/camera.png'
import chat from '../../../images/chat.png'
import game from '../../../images/game.png'
import house from '../../../images/house.png'
import list from '../../../images/list.png'
import person from '../../../images/person.png'
import group from '../../../images/group.png'
import music from '../../../images/music.png'
import video from '../../../images/video.png'

export default class SideNavigation extends Component {
  render() {
    return (
      <div className='side_div'>
        <ul className="sidenav">
          <li className='li1'><img src={house} alt="" className='img1'/> Моя Страница</li>
          <li className='li1'><img src={list} alt="" className='img2'/>Новости</li>
          <li className='li1'><img src={chat} alt="" className='img1'/>Сообщения</li>
          <li className='li1'><img src={person} alt="" className='img1'/>Друзья</li>
          <li className='li1'><img src={group} alt="" className='img1'/>Группы</li>
          <li className='li1'><img src={camera} alt="" className='img1'/>Фотографии</li>
          <li className='li1'><img src={music} alt="" className='img1'/>Музыка</li>
          <li className='li1'><img src={video} alt="" className='img1'/>Видео</li>
          <li className='li1'><img src={game} alt="" className='img1'/>Игры</li>
        </ul>
      </div>
    )
  }
}

