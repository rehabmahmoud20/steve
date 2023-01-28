import React, { useState, useContext } from 'react';
import "./css/header.css";
import logoImage from "../../assets/images/St    dy.png";
import vImage from "../../assets/images/v.png";
import dashboard from "../../assets/images/dashboard.png";
import { HiBars3 } from "react-icons/hi2";
import Client from '../Client/Client';
import List from '../List/List';
import { DataContext } from '../../App';

const Header = () => {
    const DataConsumer = useContext(DataContext);
    const [state, setState] = useState(false);
    const showMenu = () => {
        setState(!state)
    }
  return (
    <header>
        <div className="container">
            {/* Dropdown Menu */}
            <div className={`dropdown-menu ${state ? "show" : ""}`} >
                <ul>
                    {
                        DataConsumer?.list?.map((elem) => {
                            return (
                                <List elem={elem} key={elem.id} showMenu={showMenu}/>
                            )
                        })
                    }
                </ul>
            </div>
            {/* Start Navbar */}
            <nav className="flex">
                <div className="logo">
                    <img src={logoImage} alt="logo" className="main-logo"/>
                    <img src={vImage} alt="vLogo" className="v-image" />
                </div>
                <div className="bars" onClick={showMenu}>
                    <HiBars3 />
                </div>
                <ul className="flex">
                    {
                        DataConsumer?.list?.map((elem) => {
                            return (
                                <List elem={elem} onClick={() => setState(false)} key={elem.id}/>
                            )
                        })
                    }
                </ul>
                <button className="header-button">About Us</button>
            </nav>

            {/* Start Hero */}
            <div className="hero">
                <div className="hero-container flex">
                    <div className="hero-text">
                        <h3>Advanced Platform</h3>
                        <h1>Take your team to the next level</h1>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
                        <button>About Us</button>
                    </div>
                    <div className="dashboard">
                        <img src={dashboard} alt="dashboard" />
                    </div>
                </div>
                <div className="clients flex">
                    {
                        DataConsumer?.header?.map((client) => {
                            return (
                                <Client client={client} key={client.id}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header;