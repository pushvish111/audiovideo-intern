import React, { Component } from 'react'
import './Brand.css'
import logo from './1.gif';

export default class Brand extends Component {
    render() {
        return (
            <div className="brand">
                <div className="brand-text">
                    <div className="inline">
                        <h1>Luxury <span>of</span></h1>
                    </div>
                    <h1 className="brand-design">Design</h1>
                </div>
                <div className="brand-img">
                    <img src={logo} alt ="#" />
                </div>
            </div>
        )
    }
}
