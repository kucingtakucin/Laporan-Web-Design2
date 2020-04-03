/*
 * Copyright (c) 2020. Adam Arthur Faizal.
 */

import React, {Component} from 'react';
import '../App.css';
import './css/template.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import gambar from './img/03Padding.png';
import {NavLink} from "react-router-dom";

class CSS03Padding extends Component {
    render() {
        return (
            <div className="css03">
                <header>
                    <div className="jumbotron">
                        <h1 className="display-4 text-center">Padding</h1>
                    </div>
                </header>
                <div className="container">
                    <main>
                        <div id="box">
                            <p>Ini adalah box</p>
                        </div>
                        <img className="img-thumbnail" src={gambar} alt="Padding" />
                    </main>
                    <footer>
                        <NavLink className="btn btn-lg btn-secondary" to="/Laporan-Web-Design2">Kembali</NavLink>
                    </footer>
                </div>
            </div>
        )
    }
}

export default CSS03Padding;
