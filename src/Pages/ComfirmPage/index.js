import React, { Component } from 'react';
import './ComfirmPage.css';
import { Link } from 'react-router-dom'


class ComfirmPage extends Component {
    constructor ( props ) {
        super( props )

    }


    render() {
        return (
            <div>
                <div className='mainPage'>
                    <div className='infoBox'>
                        <div className='img'></div>
                        <p className='title'>Congradulations!</p>
                        <div className='emailInfo'>
                            <p>Please show vendor this page to get a</p>
                            <p>free SnowPlus device!</p>

                        </div>
                        <Link className='link' to='/'>
                            <button OnClick={ this.handleClick } className='button'>Back to Home</button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default ComfirmPage;
