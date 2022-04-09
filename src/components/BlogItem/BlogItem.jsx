import './BlogItem.css'

const BlogItem = ({ imgSrc, title, description }) => {
  return (
    <div className='blog-item'>
        <img src={imgSrc} alt={`${title}-blog-img`} className="blog-item-img" />
        <div className="blog-info">
            <h2 className="blog-title">{title}</h2>
            <p className="blog-desc">{description}</p>
        </div>
    </div>
  )
}

export default BlogItem