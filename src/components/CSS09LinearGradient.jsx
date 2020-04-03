/*
 * Copyright (c) 2020. Adam Arthur Faizal.
 */

import React, {Component} from 'react';
import '../App.css';
import './css/gradient.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import gambar from './img/09LinearGradient.png';
import gambar2 from './img/09LinearGradient2.png';
import {NavLink} from "react-router-dom";

class CSS09LinearGradient extends Component {
    render() {
        return (
            <div className="css09">
                <header>
                    <div className="jumbotron">
                        <h1 className="display-4 text-center">Linear Gradient</h1>
                    </div>
                </header>
                <div className="container">
                    <main>
                        <div className="tombol">
                            <button className="btn btn-lg btn-primary">Ini adalah button 1</button>
                            <button className="button ">Ini adalah button 2</button>
                        </div>
                        <div className="gambar clearfix">
                            <img className="img-thumbnail" src={gambar} alt="Linear Gradient" />
                            <img className="img-thumbnail" src={gambar2} alt="Linear Gradinet" />
                        </div>
                    </main>
                    <footer>
                        <NavLink to="/Laporan-Web-Design2" className="btn btn-lg btn-secondary">Kembali</NavLink>
                    </footer>
                </div>
            </div>
        )
    }
}

export default CSS09LinearGradient;
