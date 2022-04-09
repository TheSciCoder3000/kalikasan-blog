export const BlogVariants = {
    Container: {
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, when: 'beforeChildren' }
        },
        hidden: {
            opacity: 0,
            y: '5rem',
            transition: { duration: 0.3 }
        }
    },
    Info: {
        hidden: {
            y: '10rem',
            transition: { duration: 0.5 }
        },
        visible: {
            y: 0,
            transition: { duration: 0.35 }
        }
    },
    Img: {
        visible: {
            scale: 1.2,
            transition: { duration: 0.4 }
        },
        hidden: {
            scale: 1,
            transition: { duration: 0.2 }
        }
    },
    ImgFilter: {
        visible: {
            opacity: 0.3,
            transition: { duration: 0.4 }
        },
        hidden: {
            opacity: 0,
            transition: { duration: 0.2 }
        }
    }
}