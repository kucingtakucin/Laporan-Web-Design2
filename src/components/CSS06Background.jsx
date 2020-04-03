/*
 * Copyright (c) 2020. Adam Arthur Faizal.
 */

import React, {Component} from 'react';
import '../App.css';
import './css/template.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import gambar from './img/06Background.png';
import gambar2 from './img/06Background2.png';
import {NavLink} from "react-router-dom";

class CSS06Background extends Component {
    render() {
        return (
            <div className="css06">
                <header>
                    <div className="jumbotron">
                        <h1 className="display-4 text-center">Background</h1>
                    </div>
                </header>
                <div className="container">
                    <main>
                        <p>Ini adalah background</p>
                        <img className="img-thumbnail" src={gambar} alt="Background" />
                        <img className="img-thumbnail" src={gambar2} alt="Background" />
                    </main>
                    <footer>
                        <NavLink to="/Laporan-Web-Design2" className="btn btn-lg btn-secondary">Kembali</NavLink>
                    </footer>
                </div>
            </div>
        );
    }
}

export default CSS06Background;
