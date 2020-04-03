/*
 * Copyright (c) 2020. Adam Arthur Faizal.
 */

import React, {Component} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import gambar from './img/13Card.png';
import gambar2 from './img/13Card2.png';
import gambar3 from './img/13Card3.png';
import gambar4 from './img/13Card4.png';
import laravel from './img/laravel-image.png';
import {NavLink} from "react-router-dom";

class CSS13Card extends Component {
    render() {
        return (
            <div className="css13">
                <header>
                    <div className="jumbotron">
                        <h1 className="display-4 text-center">Card</h1>
                    </div>
                </header>
                <div className="container">
                    <main>
                        <div className="card-group">
                            <div className="card">
                                <div className="card-header">
                                    <h1 className="card-title text-center">Membuat Card</h1>
                                    <h3 className="card-subtitle text-center">Membuat Card</h3>
                                </div>
                                <div className="card-img">
                                    <img className="img-thumbnail" src={laravel} alt="Laravel" />
                                </div>
                                <div className="card-body">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda, aut
                                        beatae dolorem dolores dolorum error fugiat itaque, nemo nesciunt nihil
                                        obcaecati optio pariatur quibusdam quisquam repellat sint, veniam! Delectus ea
                                        maiores repellat velit. At aut consequatur dignissimos, doloremque dolores, eos,
                                        excepturi illo iure nihil obcaecati perspiciatis soluta temporibus vero.
                                    </p>
                                </div>
                                <div className="card-footer">
                                    <NavLink to="#" className="btn btn-lg btn-success float-left clearfix">BUKA</NavLink>
                                    <NavLink to="#" className="btn btn-lg btn-danger float-right clearfix">HAPUS</NavLink>
                                </div>
                            </div>
                        </div>
                        <img className="img-thumbnail" src={gambar} alt="Card" />
                        <img className="img-thumbnail" src={gambar2} alt="Card" />
                        <img className="img-thumbnail" src={gambar3} alt="Card" />
                        <img className="img-thumbnail" src={gambar4} alt="Card" />
                    </main>
                    <footer>
                        <NavLink to="/Laporan-Web-Design2" className="btn btn-lg btn-secondary">Kembali</NavLink>
                    </footer>
                </div>
            </div>
        )
    }
}

export default CSS13Card;
