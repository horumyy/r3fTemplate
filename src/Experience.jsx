import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useControls } from "leva";
import basicVertexShader from "@/assets/shaders/basic.vert";

export default function Experience() {
  const { color } = useControls({ color: "#e3bfd4" });

  console.log(basicVertexShader);

  return (
    <Canvas>
      <ambientLight />
      <OrbitControls />
      <mesh>
        <boxGeometry attach="geometry" args={[1, 1, 1]} />
        <meshStandardMaterial attach="material" color={color} />
      </mesh>
    </Canvas>
  );
}
