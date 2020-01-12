import React, { Component } from 'react';
import { Redirect, Route, Link, Switch } from 'react-router-dom'
import HomePage from './Pages/HomePage/'
import SubmitPage from './Pages/SubmitPage'
import ComfirmPage from './Pages/ComfirmPage'

import './App.css';

let postURL

class App extends Component {
  constructor ( props ) {
    super( props )
    this.state = {
      email: '22222',
      redirectToReferrer: false
    }
    this.handleEmailSubmit = this.handleEmailSubmit.bind( this );
    // this.redirect = this.redirect.bind( this );
  }
  // redirect() {
  //   this.setState( {
  //     redirectToReferrer: true
  //   } )
  // }

  handleEmailSubmit( newEmail ) {
    this.setState( {
      email: newEmail
    } )
  }
  render() {
    return (
      <div>
        <div className='nav'></div>
        <div>
          <Switch>
            {/* <Route exact path='/' render={ props => this.state.redirectToReferrer === true ? <Redirect to='/submit' email={ this.state.email } /> : <HomePage onFormSubmit={ this.handleEmailSubmit } /> } /> */ }
            <Route exact path='/' render={ props => <HomePage onFormSubmit={ this.handleEmailSubmit } /> } />

            <Route path='/submit' render={ props => <SubmitPage { ...props } email={ this.state.email } /> } />
            <Route path='/comfirm' render={ props => <ComfirmPage /> } />
          </Switch>
        </div>
      </div>
    )
  }
}
export default App;
