import './BlogItem.css'
import { motion } from 'framer-motion'
import { useAnimation } from 'framer-motion'
import { BlogVariants } from './BlogVariants'

const BlogItem = ({ imgSrc, title, desc }) => {

  const InfoAnimation = useAnimation()
  return (
    <>
    <motion.div className='blog-item'
                variants={BlogVariants.Container}
                onHoverStart={() => InfoAnimation.start('visible')}
                onHoverEnd={() => InfoAnimation.start('hidden')}>
          <motion.img src={imgSrc} 
              variants={BlogVariants.Img}
              animate={InfoAnimation}
              initial="hidden"
              alt={`${title}-blog-img`} 
              className={`blog-item-img ${(imgSrc === '' || !imgSrc) && 'no-link'}`} />
          <motion.div className="img-filter"
                      initial="hidden"
                      animate={InfoAnimation}
                      variants={BlogVariants.ImgFilter} />
          <motion.div className="blog-info"
                      initial="hidden"
                      animate={InfoAnimation}
                      variants={BlogVariants.Info}>
              <h2 className="blog-title">{title}</h2>
              <p className="blog-desc">{desc}</p>
          </motion.div>
    </motion.div>
    </>
  )
}

export default BlogItem