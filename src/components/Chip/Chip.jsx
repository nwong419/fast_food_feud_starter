import * as React from "react"
import "./Chip.css"

export function Chip({ label = "", isActive = false, handleClick = () => {} }) {

  const buttonClassName = !isActive ? "chip" : `chip active`;
  return (
    <button className={buttonClassName} onClick={handleClick}>
      <p className="label">{label}</p>
      <span className="close" role="button">{`X`}</span>
    </button>
  )
}

export default Chip
