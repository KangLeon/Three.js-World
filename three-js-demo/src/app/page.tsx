"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import Image from "next/image";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { RoundedBox } from "@react-three/drei";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Canvas
        style={{
          width: "100vw",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
        }}
        shadows
        camera={{ position: new THREE.Vector3(0, 5, 5), fov: 50 }}
      >
        <ambientLight intensity={Math.PI / 2} />
        <spotLight
          position={new THREE.Vector3(10, 8, 10)}
          angle={Math.PI / 4}
          penumbra={1}
          decay={0}
          intensity={Math.PI * 2}
          castShadow
        />
        <pointLight
          position={new THREE.Vector3(-10, -10, -10)}
          decay={0}
          intensity={Math.PI}
        />
        {(() => {
          const result: JSX.Element[] = [];
          for (let i = 0; i < 100; i++) {
            const x = Math.random() * 10 - 5;
            const y = Math.random() * 10 - 5;
            const z = Math.random() * 10 - 5;
            const color = `hsl(${Math.random() * 360},60%,50%)`;
            result.push(
              <RoundedBox
                position={[x, y, z]}
                rotation={new THREE.Euler(0, Math.PI / 4, 0)}
                radius={0.1}
                key={i}
              >
                <meshToonMaterial color={color} />
              </RoundedBox>,
            );
          }
          return result;
        })()}
      </Canvas>
    </main>
  );
}
