import React from 'react';
import "./css/bootcamp.css";
import arrow from "../../assets/images/arrow.png";
import dashboard from "../../assets/images/dashboard4.png";
import Rectangle from "../../assets/images/Rectangle 11.png";

const Bootcamp = () => {
  return (
    <section className="bootcamp">
        <div className="rectangle">
          <img src={Rectangle} alt="rectangle" />
        </div>
        <div className="container flex">
            <div className="bootcamp-text">
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

export default Bootcamp;