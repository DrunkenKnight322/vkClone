import React, { Component } from 'react'
import SideNavigation from '../layouts/sidenav/SideNavigation';
import ProfileAvatar from './ProfileAvatar'
import ProfileInfo from './ProfileInfo'
import Photos from './Photos'
import ProfileFeed from './ProfileFeed'
import ProfileFeedCreate from './ProfileFeedCreate'


import './profile.css'

export default class Profile extends Component {
  render() {
    return (
      <div className='main'>
        <SideNavigation />
        <ProfileAvatar />
        <div className='main_flex'>
          <ProfileInfo />
          <Photos />
          <ProfileFeedCreate />
          <ProfileFeed />
        </div>
      </div>
    )
  }
}
