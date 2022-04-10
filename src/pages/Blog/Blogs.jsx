import React from 'react'
import ForestFire from './forestFire.jpg'
import Hero from '../../components/Hero/Hero'
import BlogListItem from '../../components/BlogListItem/BlogListItem'
import { blogPosts } from '../blogPosts'
import './Blog.css'

const Blogs = () => {
  return (
    <div className='blog-page'>
      {/* Hero Section */}
      <Hero customY="-120px" imgSrc={ForestFire} header="Blogs" />

      {/* Blog Lists */}
      <div className="blog-list">
        {blogPosts.map(blogItem => 
          <BlogListItem item={blogItem} />
        )}
      </div>
    </div>
  )
}

export default Blogs