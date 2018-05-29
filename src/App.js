import React, { Component } from 'react';

import './App.css';
import Main from './Main'
import SignIn from './SignIn'
import { auth } from './rebase'

class App extends Component {
  state = {
    uid: null,
  }

  componentWillMount() {
    auth.onAuthStateChanged(
      (user) => {
        if (user) {
          this.handleAuth()
        } else {
          this.handleUnauth()
        }
        const curr = JSON.parse(localStorage.getItem('uid'))
        if (curr) {
          this.setState({ uid: curr })
        }
      }
    )
  }

  handleAuth = () => {

    console.log('hello')
    this.setState({ uid: auth.currentUser.uid })
    localStorage.setItem('uid', JSON.stringify(this.state.uid))
    console.log(this.state.uid)


  }

  handleUnauth = () => {
    this.setState({ uid: null })
    localStorage.removeItem('uid')

  }

  signOut = () => {
    auth.signOut()
    localStorage.removeItem('uid')

  }

  signedIn = () => {
    if (this.state.uid) {
      return this.state.uid
    } else if (JSON.parse(localStorage.getItem('uid'))) {
      return JSON.parse(localStorage.getItem('uid'))
    } else {
      return null
    }
  }

  render() {
    return (
      <div className="App">
        {this.signedIn()
          ? <Main signOut={this.signOut} user={this.state}/>
          : <SignIn handleAuth={this.handleAuth} />
        }
      </div>
    )
  }
}

export default App;
