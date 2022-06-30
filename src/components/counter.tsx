import { useState } from "react"
import React from "react"
import AnimatedNumber from "react-awesome-animated-number"
import "react-awesome-animated-number/dist/index.css"

export const Counter = () => {
  const [number, setNumber] = useState(392013)
  const [hasComma, setHasComma] = useState(true)
  const [size, setSize] = useState(28)
  const [duration, setDuration] = useState(200)

  React.useEffect(() => {
    number > 0 &&
      setTimeout(
        () => setNumber(number + 1),
        Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000
      )
  }, [number])
  return (
    <div className="flex flex-col md:flex-row text-[28px] text-white md:text-black">
      <AnimatedNumber
        value={number}
        hasComma={hasComma}
        size={size}
        duration={duration}
        className="mt-[6px] mr-2 text-center flex justify-center"
      />
      <span> Players already registered</span>
    </div>
  )
}

export default Counter
