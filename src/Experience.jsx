import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useControls } from "leva";

export default function Experience() {
  const { color } = useControls({ color: "#e3bfd4" });

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
