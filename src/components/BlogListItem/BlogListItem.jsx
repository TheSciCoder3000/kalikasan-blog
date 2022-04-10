import React from 'react'
import './BlogListItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

const BlogListItem = ({ item }) => {
    console.log(faHeart)
  return (
    <div className="blog-list-item">
        <img src={item.src} className="blog-img" />
        <div className="blog-info">
            <div className="basic-info">
                <h3 className="blog-title">{item.title}</h3>
                <p className="blog-desc">{item.desc}</p>
            </div>
            <hr className='divider' />
            <div className="item-stats">
                <div className='item-view-count'>{item.views} views</div>
                <div className='item-like-count'>
                    <FontAwesomeIcon icon={faHeart} />
                    <span className="item-likes">{item.likes}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogListItem