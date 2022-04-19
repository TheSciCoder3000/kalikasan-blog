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
  Card: {
    visible: {
      opacity: 1,
      transition: { duration: 0.1, staggerChildren: 0.2, when: 'beforeChildren' }
    },
    hidden: {
      opacity: 0,
      transition: { duration: 0.3 }
    }
  },
  CardChildren: {
    visible: {
      opacity: 1,
      transition: { duration: 0.4 }
    },
    hidden: {
      opacity: 0,
      transition: { duration: 0.5 }
    }
  }
}