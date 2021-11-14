import React, { Component } from 'react'
import './Content.css'
import logo2 from './2.gif';

export default class Content extends Component {
    render() {
        return (
            <div className="content">
                <div className = "content-text">
                    <h2>DESIGN THAT MAKE<br></br> <span className="left">A DIFFERENCE</span></h2>
                </div>
                <div className = "content-img">
                    <img src={logo2} alt="@" />
                </div>
            </div>
        )
    }
}
