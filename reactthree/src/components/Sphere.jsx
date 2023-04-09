import {
  OrbitControls,
  PerspectiveCamera,
  RenderTexture,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";

const Sphere = () => {
  return (
    <div>
      <Canvas>
        <mesh>
          <OrbitControls enableZoom={false} autoRotate />
          <ambientLight intensity={1} />
          <directionalLight position={[3, 2, 1]} />
          <sphereGeometry args={[15, 32, 16]} />
          <meshStandardMaterial>
            <RenderTexture>
              <PerspectiveCamera makeDefault position={[0, 0, 5]} />
              <color attach="background" args={["red"]} />
            </RenderTexture>
          </meshStandardMaterial>
        </mesh>
      </Canvas>
    </div>
  );
};

export default Sphere;
