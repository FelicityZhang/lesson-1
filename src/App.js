import React, { Component } from 'react';
import { Redirect, Route, Link, Switch } from 'react-router-dom'
import HomePage from './Pages/HomePage/'
import SubmitPage from './Pages/SubmitPage'
import ComfirmPage from './Pages/ComfirmPage'
import './App.css';
import { AuthProvider } from './auth.js'
import app from './firebase'


class App extends Component {
  constructor ( props ) {
    super( props )
    this.state = {
      email: '22222',
      redirectToReferrer: false
    }
    this.handleEmailSubmit = this.handleEmailSubmit.bind( this );
    this.sendEmail = this.sendEmail.bind( this );

  }

  sendEmail() {
    var user = app.auth().currentUser
    user.sendEmailVerification().then( function () {
      alert( 'thhhhhhhe email sent' )
    } ).catch( function ( error ) {
    } )
  }

  handleEmailSubmit( newEmail ) {
    this.setState( {
      email: newEmail
    } )
  }

  render() {
    return (
      <div>
        <div>
          <div className='nav'>
            <div className='logo'>SNOWPLUS<span className='logoimg'><span className='star'>*</span>+</span></div>
            <p className='giveaway'>SnowPlus Giveaway!</p>
            <p>  </p>
          </div>
          <AuthProvider>
            <Switch>
              {/* <Route exact path='/' render={ props => this.state.redirectToReferrer === true ? <Redirect to='/submit' email={ this.state.email } /> : <HomePage onFormSubmit={ this.handleEmailSubmit } /> } /> */ }
              <Route exact path='/' render={ props => <HomePage onFormSubmit={ this.handleEmailSubmit } sendEmail={ this.sendEmail } /> } />
              <Route path='/submit' render={ props => <SubmitPage { ...props } email={ this.state.email } /> } />
              <Route path='/comfirm' render={ props => <ComfirmPage /> } />
              <Route path='/dateselect' render={ props => <dateSelect /> } />
            </Switch>
          </AuthProvider>
        </div>
      </div>
    )
  }
}
export default App;
