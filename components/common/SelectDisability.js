import React, { useState } from 'react'

const SelectDisability = ({ id, type, isChecked }) => {
  const [checked, setChecked] = useState(isChecked)
  const checkHandler = () => {
    setChecked(!checked)
  }
  let divId = 'dis_id' + id
  return (
    <>
      <div id={divId} className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="checkbox"
          id={id}
          value={type}
          checked={checked}
          onChange={checkHandler}
        />
        <label className="form-check-label" htmlFor={id}>
          {type}
        </label>
      </div>
    </>
  )
}

export default SelectDisability
