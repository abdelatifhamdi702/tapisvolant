import React from 'react'
import Link from 'next/link'

const Activity = ({ title, imgURL, description }) => {
  return (
    <>
      <div className="single-img">
        <img className="single-img-img" src={imgURL} />
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </>
  )
}

export default Activity
