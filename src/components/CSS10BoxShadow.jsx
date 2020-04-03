/*
 * Copyright (c) 2020. Adam Arthur Faizal.
 */

import React, {Component} from 'react';
import '../App.css';
import './css/template.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import gambar from './img/10BoxShadow.png';
import gambar2 from './img/10BoxShadow2.png';
import {NavLink} from "react-router-dom";

class CSS10BoxShadow extends Component {
    render() {
        return (
            <div className="css10">
                <header>
                    <div className="jumbotron">
                        <h1 className="display-4 text-center">Box Shadow</h1>
                    </div>
                </header>
                <div className="container">
                    <main>
                        <div className="card-group">
                            <div className="card">
                                <div className="card card-header">
                                    <h2 className="card-title text-center">Card Title</h2>
                                </div>
                                <div className="card card-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus consequatur
                                        cupiditate dicta eaque, illum in labore libero magni modi mollitia nobis,
                                        placeat quae quas quia quod repellendus reprehenderit rerum saepe sint sit,
                                        tempora voluptatibus. Alias atque deserunt dolores harum laborum magnam
                                        perspiciatis quos sequi veritatis vitae. Doloribus, exercitationem repellat?</p>
                                </div>
                            </div>
                        </div>
                        <img className="img-thumbnail" src={gambar} alt="Box Shadow" />
                        <img className="img-thumbnail" src={gambar2} alt="Box Shadow" />
                    </main>
                    <footer>
                        <NavLink to="/Laporan-Web-Design2" className="btn btn-lg btn-secondary">Kembali</NavLink>
                    </footer>
                </div>
            </div>
        )
    }
}

export default CSS10BoxShadow;
