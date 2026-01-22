import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

const ParallaxSection = ({ children, offset = 50, speed = 1, className = "" }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [-offset * speed, offset * speed])
  const rotateX = useTransform(scrollYProgress, [0, 1], [5, -5])
  const rotateY = useTransform(scrollYProgress, [0, 1], [-5, 5])
  
  const springY = useSpring(y, { stiffness: 100, damping: 30, restDelta: 0.001 })
  const springRotateX = useSpring(rotateX, { stiffness: 100, damping: 30 })

  return (
    <motion.div
      ref={ref}
      style={{ y: springY, rotateX: springRotateX, perspective: 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default ParallaxSection
