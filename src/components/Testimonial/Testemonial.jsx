import React, { useState, useEffect, useRef, useContext } from 'react';
import "./css/testemonial.css";
import User from "../../assets/images/user.png";
import Star from "../../assets/images/star.png";
import TestSection from '../TestSection/TestSection';
import { DataContext } from "../../App";

const Testemonial = () => {
    const [count, setCount] = useState(0);
    const [state, setState] = useState(false);
    const ref = useRef(null);
    const DataConsumer = useContext(DataContext);

    // Observer Function
    useEffect(() => {
        const observer = new IntersectionObserver((entries, observer) => {
            const entry = entries[0];
            setState(entry.isIntersecting);
        });
        observer.observe(ref.current);
    });
    // Calculate Dynamically
    useEffect(() => {
        const interval = window.setInterval(() => {
            if (state) {
                if (count < 570) {
                    setCount((prev) => prev + 1)
                }
            }
        }, 1);
        // Cleanup Function
        return () => {
            window.clearInterval(interval)
        }
    }, [state, count]);
  return (
    <section className="testemonial">
        <div className="container">
            <div className="heading">
                <h2>Don't Just Take our Word for it!</h2>
            </div>
            <div className="calcs flex" ref={ref}>
                {
                    DataConsumer?.testemonial?.map((elem) => {
                        return (
                            <TestSection elem={elem} count={count} key={elem.id}/>
                        )
                    })
                }
            </div>
            <div className="feedback flex">
                <div className="user-container">
                    <div className="user flex">
                        <div className="image">
                            <img src={User} alt="user" />
                        </div>
                        <div className="info">
                            <h3>Florrie Jacobs</h3>
                            <p className="position">CEO of Company</p>
                            <p className="text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
                            <div className="stars flex">
                                <img src={Star} alt="star" />
                                <img src={Star} alt="star" />
                                <img src={Star} alt="star" />
                                <img src={Star} alt="star" />
                                <img src={Star} alt="star" />
                            </div>
                        </div>
                    </div>
                    <div className="bullets flex">
                        <div className="active"></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div  className="user-text">
                    <h2>Grow Your Business and Join Our Happy Users</h2>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet</p>
                    <button>About Us</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testemonial;