/*
 * Copyright (c) 2020. Adam Arthur Faizal.
 */

import React, {Component} from 'react';
import '../App.css';
import './css/template.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import gambar from './img/02Margin.png';
import {NavLink} from "react-router-dom";

class CSS02Margin extends Component {
    render() {
        return (
            <div className="css02">
                <header>
                    <div className="jumbotron">
                        <h1 className="display-4 text-center">Margin</h1>
                    </div>
                </header>
                <div className="container">
                    <main>
                        <div id="box">
                            <p>Ini adalah box</p>
                        </div>
                        <img className="img-thumbnail" src={gambar} alt="Margin" />
                    </main>
                    <footer>
                        <NavLink className="btn btn-lg btn-secondary" to="/Laporan-Web-Design2">Kembali</NavLink>
                    </footer>
                </div>
            </div>
        )
    }
}

export default CSS02Margin;
