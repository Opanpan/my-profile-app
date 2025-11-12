'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF } from '@react-three/drei';
import { Group, Object3D } from 'three';

interface ModelProps {
  url: string;
  position?: [number, number, number];
  rotate?: boolean;
  scale: any;
}

const RotatingModel: React.FC<ModelProps> = ({
  url,
  position = [0, 0, 0],
  rotate = false,
  scale,
}) => {
  const { scene } = useGLTF(url);
  const ref = useRef<Group>(null!);

  // Rotate model if `rotate` is true
  useFrame(() => {
    if (rotate && ref.current) {
      ref.current.rotation.y += 0.01;
    }
  });

  return (
    <primitive
      ref={ref}
      object={scene as Object3D}
      position={position}
      scale={scale}
    />
  );
};

export default function BottleAndCap() {
  return (
    <Canvas camera={{ position: [0, 0.5, 2] }}>
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} intensity={1} />

      {/* Bottle + Cap (auto-rotating) */}

      <RotatingModel
        url='/models/base.glb'
        position={[0, -1.6, 0]}
        rotate
        scale={[1, 1, 1]}
      />
      <RotatingModel
        url='/models/cap.glb'
        rotate
        position={[0, 0, 0]}
        scale={[0.2, 0.2, 0.2]}
      />

      {/* User interaction + environment */}
      <OrbitControls enableZoom enableRotate />
      <Environment preset='studio' />
    </Canvas>
  );
}

// Optional: preload models for smoother load
useGLTF.preload('/models/base.glb');
useGLTF.preload('/models/cap.glb');
