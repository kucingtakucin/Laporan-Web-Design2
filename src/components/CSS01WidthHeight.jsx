/*
 * Copyright (c) 2020. Adam Arthur Faizal.
 */

import React, {Component} from 'react';
import '../App.css';
import './css/template.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import gambar from './img/01WidthHeight.png';
import {NavLink} from "react-router-dom";

class CSS01WidthHeight extends Component {
    render(){
        return (
            <div className="css01">
                <header>
                    <div className="jumbotron">
                        <h1 className="display-4 text-center">Width & Height</h1>
                    </div>
                </header>
                <div className="container">
                    <main>
                        <div id="box">Ini adalah Box</div>
                        <img className="img-thumbnail" src={gambar} alt="Width Height"/>
                    </main>
                    <footer>
                        <NavLink className="btn btn-lg btn-secondary" to="/Laporan-Web-Design2">Kembali</NavLink>
                    </footer>
                </div>
            </div>
        )
    }
}

export default CSS01WidthHeight;
