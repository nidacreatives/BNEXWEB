"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function FloatingObject({ position }: { position: [number, number, number] }) {
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    mesh.current.rotation.x += 0.002;
    mesh.current.rotation.y += 0.003;
    mesh.current.position.y = position[1] + Math.sin(clock.elapsedTime) * 0.6;
  });

  return (
    <mesh ref={mesh} position={position}>
      <sphereGeometry args={[0.6, 32, 32]} />
      <meshStandardMaterial
        color="#22d3ee"
        emissive="#22d3ee"
        emissiveIntensity={0.6}
        roughness={0.2}
      />
    </mesh>
  );
}

export default function Scene3D() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />

        <Stars radius={100} depth={50} count={5000} factor={4} fade speed={2} />

        <FloatingObject position={[-3, 0, -2]} />
        <FloatingObject position={[3, 1, -1]} />
        <FloatingObject position={[0, -2, -3]} />
      </Canvas>
    </div>
  );
}
