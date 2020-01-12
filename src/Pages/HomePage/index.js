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
                    <p>email:{ this.state.email }</p>
                    <div className='infoBox'>
                        <p className='title'>Special Gift for You!</p>
                        <form className='userInfoBox' onSubmit={ this.handleSubmit } >
                            <div className='userInfo'>
                                <input
                                    name="name"
                                    placeholder="Contact Name"
                                    className='input' onChange={ this.handleChange }></input>
                                <input className='input' placeholder='Date of Birth' onChange={ e => this.props.handleChange( e ) }></input>
                                <input className='input' placeholder='Gender' onChange={ e => this.props.handleChange( e ) }></input>
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





    // onFormSubmit = ( event ) => {
    //     console.log( 'onformsubmit clikced' )
    //     event.preventDefault()
    //     let data = {
    //         name: this.state.name,
    //         date_of_birth: this.state.date_of_birth,
    //         gender: this.state.gender,
    //         email: this.state.email,
    //     };
    //     fetch( 'http://localhost:8888/users', {
    //         method: 'POST',
    //         body: JSON.stringify( data ),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     } ).then( response => {
    //         return response.json();
    //     } )
    //     this.setState( {
    //         name: '',
    //         date_of_birth: '',
    //         gender: '',
    //         email: '',
    //     } )
    // }