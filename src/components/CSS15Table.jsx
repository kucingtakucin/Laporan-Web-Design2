/*
 * Copyright (c) 2020. Adam Arthur Faizal.
 */

import React, {Component} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import gambar from './img/15Table.png';
import gambar2 from './img/15Table2.png';
import gambar3 from './img/15Table3.png';
import {NavLink} from "react-router-dom";

class CSS15Table extends Component {
    render() {
        return (
            <div className="css15">
                <header>
                    <div className="jumbotron">
                        <h1 className="display-4 text-center">Table</h1>
                    </div>
                </header>
                <div className="container">
                    <main>
                        <table className="table table-bordered">
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>A091amassmen</td>
                                <td>Piper Boni</td>
                                <td>scopic@matralia.org</td>
                            </tr>
                            <tr>
                                <td>A091ritical</td>
                                <td>Naticha Nail</td>
                                <td>bagganet@naifly.com</td>
                            </tr>
                            </tbody>
                        </table>
                        <img src={gambar} className="img-thumbnail" alt="Table" />
                        <img src={gambar2} className="img-thumbnail" alt="Table" />
                        <img src={gambar3} className="img-thumbnail" alt="Table" />
                    </main>
                    <footer>
                        <NavLink to="/Laporan-Web-Design2" className="btn btn-lg btn-secondary">Kembali</NavLink>
                    </footer>
                </div>
            </div>
        )
    }
}

export default CSS15Table;
