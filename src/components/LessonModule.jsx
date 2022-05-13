import { motion, useAnimation } from "framer-motion"

// Display lessons in Home Page
const LessonModule = ({ lesson, indx, variants }) => {
    const lessonModuleAnimation = useAnimation()

    return (
        <motion.div className={`module-${indx+1} module-container`}
                    onHoverStart={() => lessonModuleAnimation.start('hover')}
                    onHoverEnd={() => lessonModuleAnimation.start('hidden')}>
            <img src={lesson.src} alt={`module-${indx+1} pic`} className="lesson-pic" />
            <motion.div className="lesson-content"
                        initial='hidden'
                        animate={lessonModuleAnimation}
                        variants={variants}>
                <h3 className="lesson-header" dangerouslySetInnerHTML={{ __html: lesson.title }}></h3>
                <p className="lesson-desc">{lesson.desc}</p>
            </motion.div>
        </motion.div>
    )
}

export default LessonModule