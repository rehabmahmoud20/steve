import React, { useContext } from 'react';
import "./css/works.css";
import { DataContext } from "../../App";
import Market from '../Market/Market';

const Works = () => {
    const DataConsumer = useContext(DataContext);
  return (
    <section className="works">
        <div className="container flex">
            <div className="works-text">
                <h2>Acceleration Process to Grow Your Business</h2>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. <br /> Stet clita kasd gubergren, no sea takimata sanctus est Lorem</p>
                <button>About Us</button>
            </div>
            <div className="lists">
                {
                    DataConsumer?.market?.map((elem) => {
                        return (
                            <Market elem={elem} key={elem.id}/>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Works;