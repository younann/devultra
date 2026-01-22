import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const Particles = ({ count = 5000 }) => {
  const points = useRef()

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10
      
      const mixedColor = new THREE.Color('#3b82f6').lerp(new THREE.Color('#8b5cf6'), Math.random())
      colors[i * 3] = mixedColor.r
      colors[i * 3 + 1] = mixedColor.g
      colors[i * 3 + 2] = mixedColor.b
    }
    return { positions, colors }
  }, [count])

  useFrame((state) => {
    const { clock, mouse } = state
    points.current.rotation.y = clock.getElapsedTime() * 0.05
    points.current.rotation.x = clock.getElapsedTime() * 0.03
    
    // Slight parallax with mouse
    points.current.position.x = THREE.MathUtils.lerp(points.current.position.x, mouse.x * 0.5, 0.1)
    points.current.position.y = THREE.MathUtils.lerp(points.current.position.y, mouse.y * 0.5, 0.1)
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.positions.length / 3}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particles.colors.length / 3}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

const Background3D = () => {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Particles />
      </Canvas>
    </div>
  )
}

export default Background3D
