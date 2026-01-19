import React, { useRef, useEffect, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Environment, Sparkles, Stars, Torus, Icosahedron } from '@react-three/drei';
import * as THREE from 'three';

// Custom Mouse Parallax Rig
const MouseRig = () => {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state, delta) => {
    // Smoothly interpolate camera position
    const targetX = mouse.current.x * 2;
    const targetY = mouse.current.y * 2;
    
    // Clamp delta to prevent jumps
    const dt = Math.min(delta, 0.1);
    
    camera.position.x += (targetX - camera.position.x) * 2 * dt;
    camera.position.y += (targetY - camera.position.y) * 2 * dt;
    camera.lookAt(0, 0, 0);
  });

  return null;
};

// The Main Centerpiece: A complex glass & energy artifact
const AstroFluxCore = ({ position, scale = 1 }: any) => {
  const outerRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    const dt = Math.min(delta, 0.1);
    const time = state.clock.getElapsedTime();

    if (outerRef.current) {
      outerRef.current.rotation.x = Math.sin(time * 0.2) * 0.2;
      outerRef.current.rotation.y += dt * 0.2;
    }
    if (ring1Ref.current) {
       ring1Ref.current.rotation.x = time * 0.5;
       ring1Ref.current.rotation.y = time * 0.3;
    }
    if (ring2Ref.current) {
       ring2Ref.current.rotation.x = -time * 0.4;
       ring2Ref.current.rotation.z = time * 0.2;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.y = time * 0.1;
      ring3Ref.current.rotation.z = -time * 0.6;
   }
  });

  return (
    <group position={position} scale={scale}>
      
      {/* 1. Outer Crystalline Shell (Glass) */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <Icosahedron args={[1.6, 0]} ref={outerRef}>
          <meshPhysicalMaterial 
            roughness={0.1}
            transmission={0.95} // High transmission for glass
            thickness={2} // Refraction volume
            ior={1.4} // Index of refraction
            chromaticAberration={0.06} // Rainbow edges
            color="#ffffff"
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </Icosahedron>
      </Float>

      {/* 2. Inner Energy Core (Liquid Metal) */}
      <Float speed={4} rotationIntensity={1} floatIntensity={0.5}>
        <mesh>
          <sphereGeometry args={[0.9, 64, 64]} />
          <MeshDistortMaterial 
            color="#ccff00" 
            emissive="#ccff00"
            emissiveIntensity={0.8}
            speed={4} 
            distort={0.5} 
            roughness={0.2}
            metalness={1}
          />
        </mesh>
      </Float>

      {/* 3. Tech Rings (Neon) */}
      <group>
         <Torus args={[2.4, 0.02, 16, 100]} ref={ring1Ref}>
             <meshBasicMaterial color="#06b6d4" toneMapped={false} />
         </Torus>
         <Torus args={[2.8, 0.03, 16, 100]} ref={ring2Ref}>
             <meshBasicMaterial color="#9333ea" toneMapped={false} />
         </Torus>
          <Torus args={[3.2, 0.01, 16, 100]} ref={ring3Ref}>
             <meshBasicMaterial color="#ffffff" transparent opacity={0.3} toneMapped={false} />
         </Torus>
      </group>

    </group>
  );
};

// Background Floating Data Shards
const FloatingShards = () => {
  const count = 20;
  
  const shards = useMemo(() => {
    return new Array(count).fill(0).map((_, i) => ({
      position: [
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 10 - 5
      ] as [number, number, number],
      scale: Math.random() * 0.5 + 0.2,
      speed: Math.random() * 0.5 + 0.2,
      color: i % 2 === 0 ? '#ccff00' : '#9333ea'
    }));
  }, []);

  return (
    <>
      {shards.map((shard, i) => (
        <Float key={i} speed={shard.speed} rotationIntensity={2} floatIntensity={2} position={shard.position}>
          <mesh scale={shard.scale}>
            <octahedronGeometry args={[1, 0]} />
            <meshStandardMaterial 
              color={shard.color} 
              wireframe 
              transparent 
              opacity={0.3} 
            />
          </mesh>
        </Float>
      ))}
    </>
  );
};

export const Scene3DElements: React.FC = () => {
  return (
    <div className="absolute inset-0 z-10 pointer-events-none h-full w-full">
      <Canvas 
        dpr={[1, 1.5]} 
        gl={{ 
          alpha: true, 
          antialias: false,
          powerPreference: "high-performance",
          failIfMajorPerformanceCaveat: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.2
        }}
        camera={{ position: [0, 0, 12], fov: 45 }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#ffffff" />
        <pointLight position={[-10, -10, -5]} intensity={2} color="#9333ea" />
        <pointLight position={[0, -5, 5]} intensity={1} color="#ccff00" />
        
        <Environment preset="city" />
        <MouseRig />

        {/* Deep Space Background */}
        <Stars radius={150} depth={50} count={2000} factor={4} saturation={1} fade speed={1} />
        <Sparkles count={50} scale={15} size={3} speed={0.4} opacity={0.5} color="#ccff00" />

        {/* Main 3D Composition */}
        <AstroFluxCore position={[3, 0, 0]} scale={1.8} />
        
        {/* Floating Background Elements */}
        <FloatingShards />

      </Canvas>
    </div>
  );
};