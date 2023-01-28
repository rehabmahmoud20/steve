import React, { useContext } from 'react';
import "./css/browser.css";
import arrow from "../../assets/images/arrow.png";
import { DataContext } from '../../App';
import Icon from '../Icon/Icon';

const Browser = () => {
    const DataConsumer = useContext(DataContext);
  return (
    <section className="browser">
        <div className="container flex">
            <div className="browser-text">
                <h2>The best business solution for you</h2>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. <br /> Stet clita kasd gubergren, no sea takimata sanctus est Lorem</p>
                <div className="flex anchor">
                    <a>Learn About Our Success</a>
                    <div>
                        <img src={arrow} alt="arrow" />
                    </div>
                </div>
            </div>
            <div className="activity">
                {
                    DataConsumer?.icon?.map((elem) => {
                        return (
                            <Icon elem={elem} key={elem.id}/>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Browser;