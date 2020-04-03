/*
 * Copyright (c) 2020. Adam Arthur Faizal.
 */

import React, {Component} from 'react';
import '../App.css';
import './css/nav-style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import gambar from './img/11Nav.png';
import gambar2 from './img/11Nav2.png';
import gambar3 from './img/11Nav3.png';
import {NavLink} from "react-router-dom";

class CSS11Nav extends Component {
    render(){
        return (
            <div className="css11">
                <header>
                    <div className="jumbotron">
                        <h1 className="display-4 text-center">Nav</h1>
                    </div>
                </header>
                <div className="container">
                    <main>
                        <nav className="nav">
                            <div className="title">
                                <NavLink to="#">OneNav</NavLink>
                            </div>
                            <ul>
                                <li><NavLink to="#" className="active">Home</NavLink></li>
                                <li><NavLink to="#">Portfolio</NavLink></li>
                                <li><NavLink to="#">About</NavLink></li>
                                <li><NavLink to="#">Contact</NavLink></li>
                            </ul>
                        </nav>
                        <img className="img-thumbnail" src={gambar} alt="Nav"/>
                        <img className="img-thumbnail" src={gambar2} alt="Nav"/>
                        <img className="img-thumbnail" src={gambar3} alt="Nav"/>
                    </main>
                    <footer>
                        <NavLink to="/Laporan-Web-Design2" className="btn btn-lg btn-secondary">Kembali</NavLink>
                    </footer>
                </div>
            </div>
        )
    }
}

export default CSS11Nav;
