import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import './HomePage.css';
import { withRouter } from 'react-router-dom';

class HomePage extends Component {
    constructor ( props ) {
        super( props )
        this.state = {
            email: '11111 ',

        }
        this.handleChange = this.handleChange.bind( this );
        this.handleSubmit = this.handleSubmit.bind( this );
    }

    handleChange = ( event ) => {
        this.setState( { email: event.target.value } )
    }


    handleSubmit( e ) {
        e.preventDefault();
        // alert( 'A email was submitted: ' + this.state.email );
        console.log( 'you info was submitted' )
        const newEmail = this.state.email
        this.props.onFormSubmit( newEmail );
        this.props.history.push( `/submit` )
    }



    render() {
        return (
            <div>
                <div className='mainPage'>
                    {/* <p>email:{ this.state.email }</p> */ }
                    <div className='infoBox'>
                        <p className='title'>Special Gift for You!</p>
                        <form className='userInfoBox' onSubmit={ this.handleSubmit } >
                            <div className='userInfo'>
                                <input
                                    name="name"
                                    placeholder="Contact Name"
                                    className='input' ></input>
                                <input className='input' onClick={ this.handleClick } placeholder='Date of Birth' ></input>
                                <input className='input' placeholder='Gender'></input>
                                <input
                                    placeholder='Email Address'
                                    type="text"
                                    className='input' onChange={ this.handleChange }></input>
                            </div>
                            <button className='button'>Get Gift</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default withRouter( HomePage );




