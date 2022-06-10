import { animate } from 'framer-motion'
import { useEffect, useRef } from 'react'

const CountUp = ({ from, to }) => {
    const counterRef = useRef()

    useEffect(() => {
        const counterNode = counterRef.current

        const animation = animate(from, to, {
            duration: 1.25,
            onUpdate(value) {
                counterNode.textContent = value.toFixed(0)
            }
        })

        return () => animation.stop()
    }, [from, to])

    return <h2 ref={counterRef} className='count-up' />
}

export default CountUp