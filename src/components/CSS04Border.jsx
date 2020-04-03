/*
 * Copyright (c) 2020. Adam Arthur Faizal.
 */

import React, {Component} from 'react';
import '../App.css';
import './css/template.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import gambar from './img/04Border.png';
import {NavLink} from "react-router-dom";

class CSS04Border extends Component {
    render() {
        return (
            <div className="css04">
                <header>
                    <div className="jumbotron">
                        <h1 className="display-4 text-center">Border</h1>
                    </div>
                </header>
                <div className="container">
                    <main>
                        <div id="box">
                            <p>Ini adalah Box</p>
                        </div>
                        <img className="img-thumbnail" src={gambar} alt="Border" />
                    </main>
                    <footer>
                        <NavLink to="/Laporan-Web-Design2" className="btn btn-lg btn-secondary">Kembali</NavLink>
                    </footer>
                </div>
            </div>
        )
    }
}

export default CSS04Border;
