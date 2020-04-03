/*
 * Copyright (c) 2020. Adam Arthur Faizal.
 */

import React, {Component} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import gambar from './img/14Button.png';
import gambar2 from './img/14Button2.png';
import {NavLink} from "react-router-dom";

class CSS14Button extends Component {
    render() {
        return (
            <div className="css14">
                <header>
                    <div className="jumbotron">
                        <h1 className="display-4 text-center">Button</h1>
                    </div>
                </header>
                <div className="container">
                    <main>
                        <div className="tombol">
                            <button className="button rounded-button">Rounded Button</button>
                            <button className="button flat-button">Flat Button</button>
                            <button className="btn btn-lg btn-primary">Bootstrap Button</button>
                            <button className="btn btn-lg btn-secondary">Bootstrap Button</button>
                            <button className="btn btn-lg btn-success">Bootstrap Button</button>
                            <button className="btn btn-lg btn-warning">Bootstrap Button</button>
                            <button className="btn btn-lg btn-info">Bootstrap Button</button>
                            <button className="btn btn-lg btn-danger">Bootstrap Button</button>
                        </div>
                        <img className="img-thumbnail" src={gambar} alt="Button" />
                        <img className="img-thumbnail" src={gambar2} alt="Button" />
                    </main>
                    <footer>
                        <NavLink to="/Laporan-Web-Design2" className="btn btn-lg btn-secondary">Kembali</NavLink>
                    </footer>
                </div>
            </div>
        )
    }
}

export default CSS14Button;
