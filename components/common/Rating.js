import React from 'react'
import Link from 'next/link'

const Rating = ({ rating }) => {
  const getRating = (rating) => {
    var rate = parseInt(rating)
    let content = []
    for (let i = 0; i < 5; i++) {
      if (i < rate) {
        content.push(
          <li>
            <i className="las la-star"></i>
          </li>
        )
      } else {
        content.push(
          <li>
            <i className="lar la-star"></i>
          </li>
        )
      }
    }
    return content
  }

  return <>{getRating(rating)}</>
}

export default Rating
