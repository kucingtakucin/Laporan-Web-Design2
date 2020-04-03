/*
 * Copyright (c) 2020. Adam Arthur Faizal.
 */

import React, {Component} from 'react';
import '../App.css';
import './css/format-text.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import gambar from './img/05FormatTextdanFont.png';
import gambar2 from './img/05FormatTextdanFont2.png';
import {NavLink} from "react-router-dom";

class CSS05FormatTextdanFont extends Component {
    render() {
        return (
            <div className="css05">
                <header>
                    <div className="jumbotron">
                        <h1 className="display-4 text-center">Format Text & Font</h1>
                    </div>
                </header>
                <div className="container">
                    <main>
                        <div className="text-styling">
                            <h2>Sebuah Judul</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, molestiae sequi? Dicta
                                dolore incidunt laborum maiores provident. Adipisci, consequuntur cum doloribus ex fuga
                                illum incidunt laborum nesciunt quis sint. Animi, cum dignissimos ea minus natus,
                                necessitatibus nemo nisi, placeat praesentium quidem reprehenderit tempora ut veritatis
                                voluptate voluptatibus. Accusamus accusantium alias aliquam amet corporis culpa cumque
                                delectus earum eius et exercitationem hic illum inventore, iste laborum mollitia nulla
                                numquam quasi quidem repellendus, sit suscipit tempore ut, veniam vitae voluptas
                                voluptatem. Ad aliquid aspernatur, commodi, cum cumque eveniet facere facilis maiores
                                neque optio placeat porro quisquam quo tempore vel. Ad, aspernatur id?</p>
                            <img className="img-thumbnail" src={gambar} alt="FormatText & Font"/>
                            <img className="img-thumbnail" src={gambar2} alt="FormatText & Font"/>
                        </div>
                    </main>
                    <footer>
                        <NavLink to="/Laporan-Web-Design2" className="btn btn-lg btn-secondary">Kembali</NavLink>
                    </footer>
                </div>
            </div>
        )
    }
}

export default CSS05FormatTextdanFont;
