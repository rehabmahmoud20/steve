import React from 'react';
import "./css/overview.css";
import dashboard3 from "../../assets/images/dashboard3.png";

const Overview = () => {
  return (
    <section className="overview">
      <div className="container">
        <p className="service">Advanced Customer Service Platform</p>
        <h2>Platform Overview</h2>
        <p className="paragraph">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. <br /> Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet</p>
        <div className="dashboard">
          <img src={dashboard3} alt="dashboard" />
        </div>
        <div className="bullets flex">
          <div className="active"></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
  )
}

export default Overview;