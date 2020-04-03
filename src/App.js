/*
 * Copyright (c) 2020. Adam Arthur Faizal.
 */

import React, {Component} from 'react';
import {NavLink, Route, Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CSS01WidthHeight from "./components/CSS01WidthHeight";
import CSS02Margin from "./components/CSS02Margin";
import CSS03Padding from "./components/CSS03Padding";
import CSS04Border from "./components/CSS04Border";
import CSS05FormatTextdanFont from "./components/CSS05FormatTextdanFont";
import CSS06Background from "./components/CSS06Background";
import CSS07PseudoClass from "./components/CSS07PseudoClass";
import CSS08BorderRadius from "./components/CSS08BorderRadius";
import CSS09LinearGradient from "./components/CSS09LinearGradient";
import CSS10BoxShadow from "./components/CSS10BoxShadow";
import CSS11Nav from "./components/CSS11Nav";
import CSS12Aside from "./components/CSS12Aside";
import CSS13Card from "./components/CSS13Card";
import CSS14Button from "./components/CSS14Button";
import CSS15Table from "./components/CSS15Table";

class App extends Component{
    render() {
        return (
            <div className="App">
                <AppNavBar />
                <AppHeader />
                <AppMain />
                <AppFooter />
            </div>
        )
    }
}

class AppNavBar extends Component {
    render() {
        return (
            <nav className="App-nav navbar navbar-dark bg-secondary fixed-top">
                <div className="container-fluid">
                    <NavLink to="/Laporan-Web-Design" className="navbar-brand font-weight-bold">
                        Adam Arthur Faizal
                    </NavLink>
                    <NavLink to="/Laporan-Web-Design" className="navbar-brand font-weight-bold">
                        React version : {React.version}
                    </NavLink>
                </div>
            </nav>
        );
    }
}

class AppHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Title : "Laporan Praktikum Web Design : CSS",
            Nama : "Adam Arthur Faizal",
            NIM : "M3119001",
            Kelas : "TI A 2019"
        };
    }

    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="font-weight-bold font-keren">{this.state.Title}</h1>
                <h3>{this.state.Nama}</h3>
                <h4>{this.state.NIM} - {this.state.Kelas}</h4>
                <h2 className="font-weight-bold">Modul CSS</h2>
                <Clock/>
            </header>
        );
    }
}

class AppMain extends Component {
    render() {
        return (
            <main className="App-main">
                <div className="d-xl-flex justify-content-around">
                    <section className="alert alert-secondary">
                        <ul>
                            <li><NavLink to="/Laporan-Web-Design2/Width-Height">1. Width & Height</ NavLink></li>
                            <li><NavLink to="/Laporan-Web-Design2/Margin">2. Margin</NavLink></li>
                            <li><NavLink to="/Laporan-Web-Design2/Padding">3. Padding</NavLink></li>
                            <li><NavLink to="/Laporan-Web-Design2/Border">4. Border</NavLink></li>
                            <li><NavLink to="/Laporan-Web-Design2/FormatText-Font">5. Format Text & Font</NavLink></li>
                        </ul>
                    </section>
                    <section className="alert alert-secondary">
                        <ul>
                            <li><NavLink to="/Laporan-Web-Design2/Background">6. Background</NavLink></li>
                            <li><NavLink to="/Laporan-Web-Design2/Pseudo-Class">7. Pseudo-Class</NavLink></li>
                            <li><NavLink to="/Laporan-Web-Design2/Border-Radius">8. Border-Radius</NavLink></li>
                            <li><NavLink to="/Laporan-Web-Design2/Linear-Gradient">9. Linear-Gradient</NavLink></li>
                            <li><NavLink to="/Laporan-Web-Design2/Box-Shadow">10. Box Shadow</NavLink></li>
                        </ul>
                    </section>
                    <section className="alert alert-secondary">
                        <ul>
                            <li><NavLink to="/Laporan-Web-Design2/Nav">11. Nav</NavLink></li>
                            <li><NavLink to="/Laporan-Web-Design2/Aside">12. Aside</NavLink></li>
                            <li><NavLink to="/Laporan-Web-Design2/Card">13. Card</NavLink></li>
                            <li><NavLink to="/Laporan-Web-Design2/Button">14. Button</NavLink></li>
                            <li><NavLink to="/Laporan-Web-Design2/Table">15. Table</NavLink></li>
                        </ul>
                    </section>
                </div>
                <section>
                    <h5 id="react-version" className="text-center text-light">React version : {React.version}</h5>
                </section>
            </main>
        );
    }
}

class AppFooter extends Component {
    render() {
        return (
            <footer className="App-footer bg-dark fixed-bottom">
                <h5 className="font-weight-bold text-center">Copyright &copy; 2020 Adam Arthur Faizal. All Rights Reserved</h5>
            </footer>
        );
    }
}

class AppRouter extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/Laporan-Web-Design2" component={App} exact/>
                    <Route path="/Laporan-Web-Design2/Width-Height" component={CSS01WidthHeight}/>
                    <Route path="/Laporan-Web-Design2/Margin" component={CSS02Margin} />
                    <Route path="/Laporan-Web-Design2/Padding" component={CSS03Padding} />
                    <Route path="/Laporan-Web-Design2/Border" component={CSS04Border} />
                    <Route path="/Laporan-Web-Design2/FormatText-Font" component={CSS05FormatTextdanFont} />
                    <Route path="/Laporan-Web-Design2/Background" component={CSS06Background} />
                    <Route path="/Laporan-Web-Design2/Pseudo-Class" component={CSS07PseudoClass} />
                    <Route path="/Laporan-Web-Design2/Border-Radius" component={CSS08BorderRadius} />
                    <Route path="/Laporan-Web-Design2/Linear-Gradient" component={CSS09LinearGradient} />
                    <Route path="/Laporan-Web-Design2/Box-Shadow" component={CSS10BoxShadow} />
                    <Route path="/Laporan-Web-Design2/Nav" component={CSS11Nav} />
                    <Route path="/Laporan-Web-Design2/Aside" component={CSS12Aside} />
                    <Route path="/Laporan-Web-Design2/Card" component={CSS13Card} />
                    <Route path="/Laporan-Web-Design2/Button" component={CSS14Button} />
                    <Route path="/Laporan-Web-Design2/Table" component={CSS15Table} />
                </Switch>
            </div>
        )
    }
}

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        }
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 10);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({
            date: new Date(),
        });
    }

    render() {
        return (
            <h2>
                {this.state.date.toLocaleTimeString()}
            </h2>
        )
    }
}

export default AppRouter;
