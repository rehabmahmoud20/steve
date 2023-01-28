import React from "react";

const Icon = ({elem}) => {
  return (
      <div className={elem.class}>
          <div className="activity-logo">
              <img src={`${process.env.PUBLIC_URL}${elem.image}`} alt="icon" />
          </div>
          <p className="darker">{elem.head}</p>
          <p>{elem.text}</p>
      </div>
  )
}

export default Icon;