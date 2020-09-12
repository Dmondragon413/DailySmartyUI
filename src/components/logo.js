import React, { Component } from 'react';

export default class Logo extends Component {
    render() {

        const size = {
            height: this.props.size ? this.props.size : 105,
            width: this.props.size ? this.props.size : 105
        }
        return (
            <div className="logo-main">
                <img style={size} alt="daily smart ui image logo" src="/assets/ds_circle_logo.png"/>
            </div>
        )
    }
}