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
import ScrollIntoView from "./components/ScrollIntoView";

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
                    <NavLink to="/" className="navbar-brand font-weight-bold">
                        Adam Arthur Faizal
                    </NavLink>
                    <NavLink to="/" className="navbar-brand font-weight-bold">
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
                            <li><NavLink to="/Width-Height">1. Width & Height</ NavLink></li>
                            <li><NavLink to="/Margin">2. Margin</NavLink></li>
                            <li><NavLink to="/Padding">3. Padding</NavLink></li>
                            <li><NavLink to="/Border">4. Border</NavLink></li>
                            <li><NavLink to="/FormatText-Font">5. Format Text & Font</NavLink></li>
                        </ul>
                    </section>
                    <section className="alert alert-secondary">
                        <ul>
                            <li><NavLink to="/Background">6. Background</NavLink></li>
                            <li><NavLink to="/Pseudo-Class">7. Pseudo-Class</NavLink></li>
                            <li><NavLink to="/Border-Radius">8. Border-Radius</NavLink></li>
                            <li><NavLink to="/Linear-Gradient">9. Linear-Gradient</NavLink></li>
                            <li><NavLink to="/Box-Shadow">10. Box Shadow</NavLink></li>
                        </ul>
                    </section>
                    <section className="alert alert-secondary">
                        <ul>
                            <li><NavLink to="/Nav">11. Nav</NavLink></li>
                            <li><NavLink to="/Aside">12. Aside</NavLink></li>
                            <li><NavLink to="/Card">13. Card</NavLink></li>
                            <li><NavLink to="/Button">14. Button</NavLink></li>
                            <li><NavLink to="/Table">15. Table</NavLink></li>
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
                <ScrollIntoView>
                    <Switch>
                        <Route path="/" component={App} exact/>
                        <Route path="/Width-Height" component={CSS01WidthHeight}/>
                        <Route path="/Margin" component={CSS02Margin} />
                        <Route path="/Padding" component={CSS03Padding} />
                        <Route path="/Border" component={CSS04Border} />
                        <Route path="/FormatText-Font" component={CSS05FormatTextdanFont} />
                        <Route path="/Background" component={CSS06Background} />
                        <Route path="/Pseudo-Class" component={CSS07PseudoClass} />
                        <Route path="/Border-Radius" component={CSS08BorderRadius} />
                        <Route path="/Linear-Gradient" component={CSS09LinearGradient} />
                        <Route path="/Box-Shadow" component={CSS10BoxShadow} />
                        <Route path="/Nav" component={CSS11Nav} />
                        <Route path="/Aside" component={CSS12Aside} />
                        <Route path="/Card" component={CSS13Card} />
                        <Route path="/Button" component={CSS14Button} />
                        <Route path="/Table" component={CSS15Table} />
                    </Switch>
                </ScrollIntoView>
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
