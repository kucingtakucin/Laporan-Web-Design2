/*
 * Copyright (c) 2020. Adam Arthur Faizal.
 */

import React, {Component} from 'react';
import '../App.css';
import './css/memo.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import gambar from './img/08BorderRadius.png';
import gambar2 from './img/08BorderRadius2.png';
import {NavLink} from "react-router-dom";

class CSS08BorderRadius extends Component {
    constructor(props) {
        super(props);
        this.state = {
            kiri: 'Kiri',
            kanan: 'Kanan',
        }
    }

    render() {
        return (
            <div className="css08">
                <header>
                    <div className="jumbotron">
                        <h1 className="display-4 text-center">Border Radius</h1>
                    </div>
                </header>
                <div className="container">
                    <main>
                        <div className="container clearfix">
                            <div className="circle">
                                <p>
                                    {this.state.kiri}
                                </p>
                            </div>
                            <div className="circle"><p>1</p></div>
                            <div className="circle"><p>2</p></div>
                            <div className="circle"><p>3</p></div>
                            <div className="circle"><p>4</p></div>
                            <div className="circle"><p>5</p></div>
                            <div className="circle">
                                <p>
                                    {this.state.kanan}
                                </p>
                            </div>
                        </div>
                        <section>
                            <img className="img-thumbnail" src={gambar} alt="Border Radius" />
                            <img className="img-thumbnail" src={gambar2} alt="Border Radius" />
                        </section>
                    </main>
                    <footer>
                        <NavLink to="/Laporan-Web-Design2" className="btn btn-lg btn-secondary">Kembali</NavLink>
                    </footer>
                </div>
            </div>
        )
    }
}

export default CSS08BorderRadius;
