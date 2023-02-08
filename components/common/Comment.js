import React from 'react'
import Link from 'next/link'
import Rating from './Rating'

const Comment = ({ userName, userImgURL, commentContent, rating }) => {
  return (
    <>
      <div className="comment-item">
        <div className="comment-author_img">
          <img src={userImgURL} alt="Image" />
        </div>
        <div className="comment-author_text">
          <div className="comment-author_info">
            <h6>{userName}</h6>
            <ul className="rating-star">
              <Rating rating={rating} />
            </ul>
          </div>
          <p>{commentContent}</p>
        </div>
      </div>
    </>
  )
}

export default Comment
