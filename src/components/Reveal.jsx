import { motion } from 'framer-motion'

// Fade and rise once when scrolled into view
export default function Reveal({ children, delay = 0, as = 'div', className, ...rest }) {
  const Tag = motion[as]
  return (
    <Tag
      initial={{ opacity: 0, transform: 'translateY(16px)' }}
      whileInView={{ opacity: 1, transform: 'translateY(0px)' }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.23, 1, 0.32, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </Tag>
  )
}
