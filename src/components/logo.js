import React, { Component } from 'react';

import { LInk, Link } from 'react-router-dom';

export default class Logo extends Component {
    render() {

        const size = {
            height: this.props.size ? this.props.size : 105,
            width: this.props.size ? this.props.size : 105
        }
        return (
            <div className="logo-main">
                <Link to="/">
                    <img style={size} alt="daily smart ui image logo" src="/assets/ds_circle_logo.png"/>
                </Link>
            </div>
        )
    }
}