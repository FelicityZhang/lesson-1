import React, { Component } from 'react';
import './SubmitPage.css';
import { Link } from 'react-router-dom'



class SubmitPage extends Component {
    constructor ( props ) {
        super( props )

        this.handlePostSubmit = this.handlePostSubmit.bind( this );
    }

    handlePostSubmit() {
        let data = {
            name: this.props.email,
        };
        fetch( 'http://localhost:3000/contacts', {
            method: 'POST',
            body: JSON.stringify( data ),
            headers: {
                'Content-Type': 'application/json'
            }
        } ).then( response => {
            return response.json();
        } )
        console.log( data )
    }


    render() {
        return (
            <div>
                <div className='mainPage'>
                    <div className='infoBox'>
                        <div className='img'></div>
                        <p className='title'>Thank You for Submitting!</p>
                        <div className='emailInfo'>
                            <p>A conformation email has been sent to:</p>
                            <p>{ this.props.email }</p>
                            <p>Please follow the instruction in the email. </p>
                        </div>
                        <Link className='link' to='/'>
                            <button OnClick={ this.handleClick } className='button'>Back to Home</button>
                        </Link>                    </div>
                </div>
            </div>
        );
    }
}

export default SubmitPage;