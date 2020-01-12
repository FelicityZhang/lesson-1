import React, { Component } from 'react';
import './SubmitPage.css';

class SubmitPage extends Component {
    constructor ( props ) {
        super( props )
    }

    render() {
        return (
            <div>
                <div className='mainPage'>
                    <div className='infoBox'>
                        <p>email:{ this.props.email }</p>
                        <p className='title'>Thank You for Submitting!!</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default SubmitPage;