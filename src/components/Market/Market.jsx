const Market = ({elem}) => {
  return (
      <div className="list flex">
          <div className="circle">
              <p>{elem.number}</p>
          </div>
          <div className="text">
              <h3>{elem.head}</h3>
              <p>{elem.text}</p>
          </div>
      </div>
  )
}

export default Market;