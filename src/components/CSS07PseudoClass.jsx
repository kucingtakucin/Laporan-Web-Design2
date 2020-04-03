/*
 * Copyright (c) 2020. Adam Arthur Faizal.
 */

import React, {Component} from 'react';
import '../App.css';
import './css/pseudoclass.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import gambar from './img/07PseudoClass.png';
import gambar2 from './img/07PseudoClass2.png';
import {NavLink} from "react-router-dom";

class CSS07PseudoClass extends Component {
    render() {
        return (
            <div className="css07">
                <header>
                    <div className="jumbotron">
                        <h1 className="display-4 text-center">Pseudo Class</h1>
                    </div>
                </header>
                <div className="container">
                    <main>
                        <div className="links">
                            <ul>
                                <li><NavLink to="#">a:link</NavLink></li>
                                <li><NavLink to="#">a:hover</NavLink></li>
                                <li><NavLink to="#">a:active</NavLink></li>
                                <li><NavLink to="#">a:visited</NavLink></li>
                            </ul>
                        </div>
                        <img className="img-thumbnail" src={gambar} alt="PseudoClass" />
                        <img className="img-thumbnail" src={gambar2} alt="PseudoClass" />
                    </main>
                    <footer>
                        <NavLink to="/Laporan-Web-Design2" className="btn btn-lg btn-secondary">Kembali</NavLink>
                    </footer>
                </div>
            </div>
        );
    }
}

export default CSS07PseudoClass;
