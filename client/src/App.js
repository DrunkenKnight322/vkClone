import React, { Component } from 'react'
import { BrowserRouter as Router, Switch} from 'react-router-dom';
import Route from 'react-router-dom/Route'
import jwt_decode from 'jwt-decode';


import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer'

import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Feed from './components/Feed/Feed'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Footer />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/feed' component={Feed} />
        </div>
         
      </Router>
    )
  }
}
