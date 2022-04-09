import './Home.css'
import Forest from './trees-edited.jpg'
import Pope from './pope.jpg'
import NavBar from '../../components/NavBar/NavBar'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { AnimationVariants } from './variants'
import BlogItem from '../../components/BlogItem/BlogItem'

const Home = () => {
  const CardAnimation = useAnimation()
  const [ cardRef, cardInView ] = useInView({ threshold: 0.01 })
  
  const NavbarAnimation = useAnimation()
  const [ navbarRef, navbarInView ] = useInView({ threshold: 0.1 })

  const BlogAnimation = useAnimation()
  const [ blogRef, blogInView ] = useInView({ threshold: 1, rootMargin: '1000px' })
  

  useEffect(() => {
    if (cardInView) CardAnimation.start('visible')
    else CardAnimation.start('hidden')
  }, [cardInView])
  
  useEffect(() => {
    if (!navbarInView) NavbarAnimation.start('visible')
    else NavbarAnimation.start('hidden')
  }, [navbarInView])

  useEffect(() => {
    if (blogInView) BlogAnimation.start('visible')
    else BlogAnimation.start('hidden')
  }, [blogInView])


  const blogPosts = [
    {
      title: 'A day in the wild',
      desc: 'A story of a man living in the forest of 5 years. This article shares his story and adventures as he survives in the wild from scratch only relying in mother nature for nourishment. Join him as he tells his story and his experiences.',
      src: Forest
    },
    {
      title: 'A day in the wild',
      desc: 'A story of a man living in the forest of 5 years. This article shares his story and adventures as he survives in the wild from scratch only relying in mother nature for nourishment. Join him as he tells his story and his experiences.',
      src: Forest
    },
    {
      title: 'A day in the wild',
      desc: 'A story of a man living in the forest of 5 years. This article shares his story and adventures as he survives in the wild from scratch only relying in mother nature for nourishment. Join him as he tells his story and his experiences.',
      src: Forest
    },
    {
      title: 'A day in the wild',
      desc: 'A story of a man living in the forest of 5 years. This article shares his story and adventures as he survives in the wild from scratch only relying in mother nature for nourishment. Join him as he tells his story and his experiences.',
      src: Forest
    },
    {
      title: 'A day in the wild',
      desc: 'A story of a man living in the forest of 5 years. This article shares his story and adventures as he survives in the wild from scratch only relying in mother nature for nourishment. Join him as he tells his story and his experiences.',
      src: Forest
    },
    {
      title: 'A day in the wild',
      desc: 'A story of a man living in the forest of 5 years. This article shares his story and adventures as he survives in the wild from scratch only relying in mother nature for nourishment. Join him as he tells his story and his experiences.',
      src: Forest
    },
  ]


  return (
    <div className='home-page'>
      {/* Sticky Navbar */}
      <NavBar className='home-nav' animation={NavbarAnimation} />
      
      {/* Hero Section */}
      <div className="hero-section">
        {/* Hero Img */}
        <img src={Forest} alt="hero-img" />

        {/* Hero Texts */}
        <div className="hero-text">
          <h1 ref={navbarRef} className="hero-header">The Time is Now</h1>
          <p className="hero-subtext">Together we can save this world for future generations to come</p>
        </div>

        {/* Quote by Pope Francis */}
        <motion.div className="quote-section"
                    animate={CardAnimation}
                    initial="hidden"
                    variants={AnimationVariants.Card}>

          <img src={Pope} alt="pope-francis" />
          <div className="quote-info">
            <h1 className="quote-text">“Many things have to change course but it is we human beings above all who need to change”</h1>
            <p className="quote-person">- Pope Francis (Laodato Si)</p>
          </div>

        </motion.div>
      </div>

      {/* Blogs Section */}
      <div className="blogs-section">
        <h1 ref={cardRef} className="blog-header">Blog Posts</h1>
        <motion.div ref={blogRef} className="blog-lists"
                    animate={BlogAnimation}
                    initial="hidden"
                    variants={{
                      visible: {
                        opacity: 1,
                        transition: { duration: 0.2, when: 'beforeChildren', staggerChildren: 0.3 }
                      },
                      hidden: {
                        opacity: 0,
                        transition: { duration: 0.2, when: 'afterChildren'}
                      }
                    }}>
          {blogPosts.length > 0
            ? blogPosts.map(blogItem => 
                <BlogItem imgSrc={blogItem.src} title={blogItem.title} desc={blogItem.desc} />
              )
            : <p>There are no blogs posted</p>
          }
        </motion.div>
      </div>
    </div>
  )
}

export default Home