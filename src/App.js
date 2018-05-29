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

        if (JSON.parse(localStorage.getItem('uid'))) {
          this.setState(JSON.parse(localStorage.getItem('uid')))
        }
      }
    )
  }

  handleAuth = () => {
    this.setState({uid: 'rkarim0589'})
    localStorage.setItem('uid', JSON.stringify(this.state.uid))
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
    return this.state.uid || JSON.parse(localStorage.getItem('uid'))
  }

  render() {
    return (
      <div className="App">
        {this.signedIn() 
          ? <Main signOut={this.signOut}/>  
          : <SignIn handleAuth={this.handleAuth}/>
        }
      </div>
    )
  }
}

export default App;
