const TestSection = ({elem, count}) => {
  return (
    <div className="calc">
        <p className="number">{count}</p>
        <p className="type">{elem.text}</p>
    </div>
  )
}

export default TestSection;