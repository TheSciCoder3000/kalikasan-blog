import React from 'react'
import { useParams } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'

const BlogEditor = () => {
    const { blogId } = useParams()
    return (
        <div className='blog-editor-page'>
            {/* Navbar */}
            <NavBar className='article-navbar' initial='visible' />

            {/* Article Main Pic */}
            <div className="article-pic-container">
                <img src={''} alt="editor-pic" className="main-pic-editor" />
            </div>
        </div>
    )
}

export default BlogEditor