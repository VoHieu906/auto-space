import * as THREE from "three";
import { yellowColor } from "../util/constants";
import { ThreeElements } from "@react-three/fiber";

// Use a type alias instead of an interface
export type SquareProps = ThreeElements["mesh"] & {
  position: [number, number, number];
  size?: [number, number];
  borderColor?: string;
};
export const Square: React.FC<SquareProps> = ({
  position,
  size = [5, 3],
  borderColor = yellowColor,
  ...props
}) => {
  const halfWidth = size[0] / 2;
  const halfLength = size[1] / 2;
  const borderThickness = 0.2;

  return (
    <>
      {/* Top border */}
      <mesh
        position={[
          position[0],
          position[1],
          position[2] + halfLength - borderThickness / 2,
        ]}
        {...props}
      >
        <boxGeometry args={[size[0], borderThickness, borderThickness]} />
        <meshBasicMaterial color={borderColor} />
      </mesh>
      {/* Bottom border */}
      <mesh
        position={[
          position[0],
          position[1],
          position[2] - halfLength + borderThickness / 2,
        ]}
        {...props}
      >
        <boxGeometry args={[size[0], borderThickness, borderThickness]} />
        <meshBasicMaterial color={borderColor} />
      </mesh>
      {/* Left border */}
      <mesh
        position={[
          position[0] - halfWidth + borderThickness / 2,
          position[1],
          position[2],
        ]}
        {...props}
      >
        <boxGeometry
          args={[
            borderThickness,
            borderThickness,
            size[1] - 2 * borderThickness,
          ]}
        />
        <meshBasicMaterial color={borderColor} />
      </mesh>
      {/* Right border */}
      <mesh
        position={[
          position[0] + halfWidth - borderThickness / 2,
          position[1],
          position[2],
        ]}
        {...props}
      >
        <boxGeometry
          args={[
            borderThickness,
            borderThickness,
            size[1] - 2 * borderThickness,
          ]}
        />
        <meshBasicMaterial color={borderColor} />
      </mesh>
    </>
  );
};
