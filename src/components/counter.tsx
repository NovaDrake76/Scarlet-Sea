import React from "react"
import NumberFormat from "react-number-format"

function Counter() {
  const [counter, setCounter] = React.useState(312278)

  React.useEffect(() => {
    counter > 0 &&
      setTimeout(
        () => setCounter(counter + 1),
        Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000
      )
  }, [counter])

  return (
    <div className="Counter">
      <div>
        <NumberFormat
          value={counter}
          displayType={"text"}
          thousandSeparator={true}
          suffix={" "}
        />
        Players already registered
      </div>
    </div>
  )
}

export default Counter
