import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { DirectionalLight } from "three";
import Cube from "../components/Cube";

import Test from "../components/Test";

const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="left">
          <Test />
        </div>
        <div className="right">
          <h1> aryavir</h1>
        </div>
      </div>

      <div className="hero2">
        <h1>hello</h1>
        <div className="right2">
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={3}>
              <MeshDistortMaterial
                color="#220736"
                attach="material"
                distort={0.2}
                speed={2}
              />
            </Sphere>
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default Home;
