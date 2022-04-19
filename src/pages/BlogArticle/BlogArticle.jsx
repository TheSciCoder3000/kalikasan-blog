import React from 'react'
import { useParams } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import './BlogArticle.css'

const BlogArticle = () => {
    const { blogId } = useParams()
    return (
        <div className='blog-article-page'>
            {/* Navbar */}
            <NavBar className='article-navbar' initial='visible' />

            {/* Article Main Image */}
            <img src={''} alt="article-pic" className="article-main-pic" />

            {/* Article Header */}
            <h2 className="article-header">{}</h2>
            
            {/* Article Content */}
            <div className="article-content">
                
            </div>
        </div>
    )
}

export default BlogArticle