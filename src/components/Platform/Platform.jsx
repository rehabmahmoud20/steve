import React from 'react';
import "./css/platform.css";
import arrow from "../../assets/images/arrow.png";
import dashboard from "../../assets/images/dashboard2.png";
import Rectangle from "../../assets/images/Rectangle 9.png";

const Platform = () => {
  return (
    <section className="platform">
        <div className="rectangle">
            <img src={Rectangle} alt="rectangle" />
        </div>
        <div className="container flex">
            <div className="platform-text">
                <h2>Best Platform for the Technological Era</h2>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. <br /> Stet clita kasd gubergren, no sea takimata sanctus est Lorem</p>
                <div className="flex anchor">
                    <a>Learn About Our Success</a>
                    <div>
                        <img src={arrow} alt="arrow" />
                    </div>
                </div>
            </div>
            <div className="dashboard">
                <img src={dashboard} alt="dashboard"/>
            </div>
        </div>
    </section>
  )
}

export default Platform;