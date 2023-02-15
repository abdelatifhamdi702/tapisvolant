import React from 'react'
import Link from 'next/link'
const BookingRow = ({ tourName, tourImgURL, BookingDate, tourPrice }) => {
  return (
    <>
      <tr>
        <td>
          <div className="wh_item">
            <img src={tourImgURL} alt="Image" />
            <span style={{ marginLeft: '15px' }}>{tourName}</span>
          </div>
        </td>
        <td>
          <p className="wh-tem-price">{BookingDate}</p>
        </td>
        <td>
          <p className="wh-tem-price text-red">${tourPrice}</p>
        </td>
      </tr>
    </>
  )
}

export default BookingRow
