export const AnimationVariants = {
  HeroBtn: {
    hover: {
      backgroundColor: '#ffffff',
      color: '#000000',
      transition: { duration: 0.3 }
    },
    tap: {
      backgroundColor: '#FFDE99',
      border: '1px solid #FFDE99',
      transition: { duration: 0.1 }
    }
  },
  LessonPanel: {
    hidden: {
      height: 0,
      transition: { duration: 0.8 }
    },
    visible: {
      height: '60vh',
      transition: { duration: 1 }
    }
  },
  LessonModule: {
    hidden: {
      y: '100%',
      transition: { duration: 0.3 }
    },
    hover: {
      y: 0,
      transition: { delay: 0.2, duration: 0.5 }
    }
  }
}