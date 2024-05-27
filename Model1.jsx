
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/native'

export default function Model(props) {
  const { nodes, materials } = useGLTF(require('../src/Model1.glb'));
  return (
    <group {...props} dispose={null}>
      <group scale={0.025}position={[10, 5, 20]} align="center">
        <group position={[1456.998, 73.747, -942.285]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Line001_Solid_Glass_0.geometry}
            material={materials.Solid_Glass}
            position={[-25.309, 25.309, -59.055]}
          />
        </group>
        <group position={[1386.321, 202.756, -1001.34]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Line002_Ceramic_0.geometry}
            material={materials.Ceramic}
            position={[-35.086, 18.828, -59.055]}
          />
        </group>
        <group position={[1456.998, 19.685, -942.285]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Line003_Metal_0.geometry}
            material={materials.Metal}
            position={[-25.309, 25.309, -3.937]}
          />
        </group>
        <group position={[1456.998, 24.606, -942.285]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Line004_Wall_Paint_0.geometry}
            material={materials.Wall_Paint}
            position={[-25.309, 25.309, -0.984]}
          />
        </group>
        <group position={[1456.998, 137.795, -942.285]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Line005_Metal_0.geometry}
            material={materials.Metal}
            position={[-26.434, 26.434, -3.937]}
          />
        </group>
        <group position={[1456.998, 142.717, -942.285]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Line006_Wall_Paint_0.geometry}
            material={materials.Wall_Paint}
            position={[-26.434, 26.434, -0.984]}
          />
        </group>
        <group position={[1386.321, 147.638, -1001.34]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Line007_Metal_0.geometry}
            material={materials.Metal}
            position={[-35.086, 18.828, -3.937]}
          />
        </group>
        <group position={[1433.671, 265.773, -980.086]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Line009_Metal_0.geometry}
            material={materials.Metal}
            position={[-78.417, 39.98, -3.937]}
          />
        </group>
        <group position={[1442.562, 270.695, -980.084]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Line010_Wall_Paint_0.geometry}
            material={materials.Wall_Paint}
            position={[-69.536, 39.981, -0.984]}
          />
        </group>
        <group position={[1634.162, -21.384, -669.445]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Line011_05_-_Default_0'].geometry}
            material={materials['05_-_Default']}
            position={[0.002, 14.873, 0]}
          />
        </group>
        <group position={[1634.164, 4.648, -669.556]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Line012_14_-_Polished_Aluminum_0'].geometry}
            material={materials['14_-_Polished_Aluminum']}
            position={[0, 14.762, 0]}
          />
        </group>
        <group position={[1393.793, -14.528, -883.155]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Line013_12_-_Car_Paint_0'].geometry}
            material={materials['12_-_Car_Paint']}
            position={[49.021, 162.066, -1.22]}
          />
        </group>
        <group position={[1634.145, -19.683, -669.241]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box002_13_-_Brushed_Metal_#2_0'].geometry}
            material={materials['13_-_Brushed_Metal_2']}
            position={[0.019, 15.077, 0.792]}
          />
        </group>
        <group position={[1634.145, -42.065, -669.355]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box003__0.geometry}
            material={materials.Box003__0}
            position={[0.019, 14.963, 18.214]}
          />
        </group>
        <group position={[1420.188, -3.278, -942.524]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Line015_05_-_Default_0'].geometry}
            material={materials['05_-_Default']}
            position={[-47.084, 101.909, 3.278]}
          />
        </group>
        <group position={[1420.191, 5.906, -942.519]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Line016_04_-_Default_0'].geometry}
            material={materials['04_-_Default']}
            position={[-47.744, 101.911, -5.906]}
          />
        </group>
        <group
          position={[1457.507, 226.461, -956.909]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.984}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Cylinder002_03_-_Default_0'].geometry}
            material={materials['03_-_Default']}
            position={[-0.113, 0, -82.206]}
          />
        </group>
        <group position={[1457.507, 226.461, -956.909]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Shape001_02_-_Default_0'].geometry}
            material={materials['02_-_Default']}
            position={[-0.113, 0, -82.206]}
          />
        </group>
        <group
          position={[1457.514, 311.764, -956.909]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1.061}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Cylinder004_11_-_Default_0'].geometry}
            material={materials['11_-_Default']}
            position={[-0.113, 0, -158.087]}
          />
        </group>
        <group position={[1379.522, 160.688, -756.282]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box036_15_-_Glossy_Plastic_0'].geometry}
            material={materials['15_-_Glossy_Plastic']}
            position={[0, 5.164, -160.688]}
          />
        </group>
        <group position={[1456.986, 138.235, -762.978]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box037_06_-_Default_0'].geometry}
            material={materials['06_-_Default']}
            position={[13.923, 13.534, -201.79]}
          />
        </group>
        <group position={[1456.986, 138.235, -779.147]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box038_06_-_Default_0'].geometry}
            material={materials['06_-_Default']}
            position={[13.923, 13.534, -201.79]}
          />
        </group>
        <group position={[1456.986, 138.235, -795.317]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box039_06_-_Default_0'].geometry}
            material={materials['06_-_Default']}
            position={[13.923, 13.534, -201.79]}
          />
        </group>
        <group position={[1456.986, 138.235, -811.486]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box040_06_-_Default_0'].geometry}
            material={materials['06_-_Default']}
            position={[13.923, 13.534, -201.79]}
          />
        </group>
        <group position={[1456.986, 138.235, -827.655]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box041_06_-_Default_0'].geometry}
            material={materials['06_-_Default']}
            position={[13.923, 13.534, -201.79]}
          />
        </group>
        <group position={[1456.986, 138.235, -842.019]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box042_06_-_Default_0'].geometry}
            material={materials['06_-_Default']}
            position={[13.923, 13.534, -201.79]}
          />
        </group>
        <group position={[1456.986, 138.235, -856.384]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box043_06_-_Default_0'].geometry}
            material={materials['06_-_Default']}
            position={[13.923, 13.534, -201.79]}
          />
        </group>
        <group position={[1456.986, 138.235, -870.063]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box044_06_-_Default_0'].geometry}
            material={materials['06_-_Default']}
            position={[13.923, 13.534, -201.79]}
          />
        </group>
        <group position={[1456.986, 138.235, -746.811]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box045_06_-_Default_0'].geometry}
            material={materials['06_-_Default']}
            position={[13.923, 13.534, -201.79]}
          />
        </group>
        <group position={[1456.986, 138.235, -729.25]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box046_06_-_Default_0'].geometry}
            material={materials['06_-_Default']}
            position={[13.923, 13.534, -201.79]}
          />
        </group>
        <group position={[1456.986, 138.235, -711.688]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box047_06_-_Default_0'].geometry}
            material={materials['06_-_Default']}
            position={[13.923, 13.534, -201.79]}
          />
        </group>
        <group position={[1456.986, 138.235, -694.127]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box048_06_-_Default_0'].geometry}
            material={materials['06_-_Default']}
            position={[13.923, 13.534, -201.79]}
          />
        </group>
        <group position={[1456.986, 138.235, -676.566]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box049_06_-_Default_0'].geometry}
            material={materials['06_-_Default']}
            position={[13.923, 13.534, -201.79]}
          />
        </group>
        <group position={[1456.986, 138.235, -659.005]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box050_06_-_Default_0'].geometry}
            material={materials['06_-_Default']}
            position={[13.923, 13.534, -201.79]}
          />
        </group>
        <group position={[1456.986, 138.235, -644.113]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box051_06_-_Default_0'].geometry}
            material={materials['06_-_Default']}
            position={[13.923, 13.534, -201.79]}
          />
        </group>
        <group position={[1505.623, 84.011, -644.113]} rotation={[-Math.PI / 2, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box052_06_-_Default_0'].geometry}
            material={materials['06_-_Default']}
            position={[13.923, 13.534, -201.79]}
          />
        </group>
        <group position={[1505.623, 131.478, -693.311]} rotation={[Math.PI, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box053_06_-_Default_0'].geometry}
            material={materials['06_-_Default']}
            position={[13.923, 13.534, -201.79]}
          />
        </group>
        <group position={[1408.839, 84.011, -644.113]} rotation={[-Math.PI / 2, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box054_06_-_Default_0'].geometry}
            material={materials['06_-_Default']}
            position={[13.923, 13.534, -201.79]}
          />
        </group>
        <group position={[1402.854, 131.478, -693.311]} rotation={[Math.PI, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box055_06_-_Default_0'].geometry}
            material={materials['06_-_Default']}
            position={[13.923, 13.534, -201.79]}
          />
        </group>
        <group position={[1669.211, 104.174, -925.75]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box057_15_-_Glossy_Plastic_0'].geometry}
            material={materials['15_-_Glossy_Plastic']}
            position={[0, 5.164, -160.688]}
          />
        </group>
        <group position={[1101.795, 84.011, -775.577]} rotation={[-Math.PI / 2, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box058_06_-_Default_0'].geometry}
            material={materials['06_-_Default']}
            position={[13.923, 13.534, -201.79]}
          />
        </group>
        <group position={[1101.795, 84.011, -824.938]} rotation={[-Math.PI / 2, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box059_06_-_Default_0'].geometry}
            material={materials['06_-_Default']}
            position={[13.923, 13.534, -201.79]}
          />
        </group>
        <group position={[1101.795, 84.011, -874.298]} rotation={[-Math.PI / 2, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box060_06_-_Default_0'].geometry}
            material={materials['06_-_Default']}
            position={[13.923, 13.534, -201.79]}
          />
        </group>
        <group position={[1101.795, 84.011, -923.659]} rotation={[-Math.PI / 2, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box061_06_-_Default_0'].geometry}
            material={materials['06_-_Default']}
            position={[13.923, 13.534, -201.79]}
          />
        </group>
        <group position={[1101.795, 84.011, -973.02]} rotation={[-Math.PI / 2, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box062_06_-_Default_0'].geometry}
            material={materials['06_-_Default']}
            position={[13.923, 13.534, -201.79]}
          />
        </group>
        <group position={[1101.795, 84.011, -1022.381]} rotation={[-Math.PI / 2, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box063_06_-_Default_0'].geometry}
            material={materials['06_-_Default']}
            position={[13.923, 13.534, -201.79]}
          />
        </group>
        <group position={[1101.795, 84.011, -1076.545]} rotation={[-Math.PI / 2, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box064_06_-_Default_0'].geometry}
            material={materials['06_-_Default']}
            position={[13.923, 13.534, -201.79]}
          />
        </group>
        <group position={[1101.795, 84.011, -1130.708]} rotation={[-Math.PI / 2, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box065_06_-_Default_0'].geometry}
            material={materials['06_-_Default']}
            position={[13.923, 13.534, -201.79]}
          />
        </group>
        <group position={[1101.795, 84.011, -1184.872]} rotation={[-Math.PI / 2, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box066_06_-_Default_0'].geometry}
            material={materials['06_-_Default']}
            position={[13.923, 13.534, -201.79]}
          />
        </group>
        <group position={[1101.795, 84.011, -1239.036]} rotation={[-Math.PI / 2, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box067_06_-_Default_0'].geometry}
            material={materials['06_-_Default']}
            position={[13.923, 13.534, -201.79]}
          />
        </group>
        <group position={[1101.415, 138.235, -746.811]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box068_06_-_Default_0'].geometry}
            material={materials['06_-_Default']}
            position={[13.923, 13.534, -201.79]}
          />
        </group>
        <group position={[1101.415, 138.235, -729.25]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box069_06_-_Default_0'].geometry}
            material={materials['06_-_Default']}
            position={[13.923, 13.534, -201.79]}
          />
        </group>
        <group position={[1101.415, 138.235, -711.688]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box070_06_-_Default_0'].geometry}
            material={materials['06_-_Default']}
            position={[13.923, 13.534, -201.79]}
          />
        </group>
        <group position={[1101.415, 138.235, -694.127]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box071_06_-_Default_0'].geometry}
            material={materials['06_-_Default']}
            position={[13.923, 13.534, -201.79]}
          />
        </group>
        <group position={[1101.415, 138.235, -676.566]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box072_06_-_Default_0'].geometry}
            material={materials['06_-_Default']}
            position={[13.923, 13.534, -201.79]}
          />
        </group>
        <group position={[1101.415, 138.235, -659.005]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box073_06_-_Default_0'].geometry}
            material={materials['06_-_Default']}
            position={[13.923, 13.534, -201.79]}
          />
        </group>
        <group position={[1101.415, 138.235, -644.113]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box074_06_-_Default_0'].geometry}
            material={materials['06_-_Default']}
            position={[13.923, 13.534, -201.79]}
          />
        </group>
        <group position={[1052.786, 84.011, -746.806]} rotation={[-Math.PI / 2, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box075_06_-_Default_0'].geometry}
            material={materials['06_-_Default']}
            position={[13.923, 13.534, -201.79]}
          />
        </group>
        <group position={[1052.786, 84.011, -729.264]} rotation={[-Math.PI / 2, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box076_06_-_Default_0'].geometry}
            material={materials['06_-_Default']}
            position={[13.923, 13.534, -201.79]}
          />
        </group>
        <group position={[1052.786, 84.011, -711.695]} rotation={[-Math.PI / 2, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box077_06_-_Default_0'].geometry}
            material={materials['06_-_Default']}
            position={[13.923, 13.534, -201.79]}
          />
        </group>
        <group position={[1052.786, 84.011, -694.109]} rotation={[-Math.PI / 2, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box078_06_-_Default_0'].geometry}
            material={materials['06_-_Default']}
            position={[13.923, 13.534, -201.79]}
          />
        </group>
        <group position={[1052.786, 84.011, -676.496]} rotation={[-Math.PI / 2, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box079_06_-_Default_0'].geometry}
            material={materials['06_-_Default']}
            position={[13.923, 13.534, -201.79]}
          />
        </group>
        <group position={[1052.786, 84.011, -659.026]} rotation={[-Math.PI / 2, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box080_06_-_Default_0'].geometry}
            material={materials['06_-_Default']}
            position={[13.923, 13.534, -201.79]}
          />
        </group>
        <group position={[1052.786, 84.011, -644.161]} rotation={[-Math.PI / 2, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box081_06_-_Default_0'].geometry}
            material={materials['06_-_Default']}
            position={[13.923, 13.534, -201.79]}
          />
        </group>
        <group position={[1505.579, 84.011, -746.806]} rotation={[-Math.PI / 2, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box082_06_-_Default_0'].geometry}
            material={materials['06_-_Default']}
            position={[13.923, 13.534, -201.79]}
          />
        </group>
        <group position={[1505.579, 84.011, -729.264]} rotation={[-Math.PI / 2, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box083_06_-_Default_0'].geometry}
            material={materials['06_-_Default']}
            position={[13.923, 13.534, -201.79]}
          />
        </group>
        <group position={[1505.579, 84.011, -711.695]} rotation={[-Math.PI / 2, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box084_06_-_Default_0'].geometry}
            material={materials['06_-_Default']}
            position={[13.923, 13.534, -201.79]}
          />
        </group>
        <group position={[1505.579, 84.011, -694.109]} rotation={[-Math.PI / 2, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box085_06_-_Default_0'].geometry}
            material={materials['06_-_Default']}
            position={[13.923, 13.534, -201.79]}
          />
        </group>
        <group position={[1505.579, 84.011, -676.496]} rotation={[-Math.PI / 2, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box086_06_-_Default_0'].geometry}
            material={materials['06_-_Default']}
            position={[13.923, 13.534, -201.79]}
          />
        </group>
        <group position={[1505.579, 84.011, -659.026]} rotation={[-Math.PI / 2, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box087_06_-_Default_0'].geometry}
            material={materials['06_-_Default']}
            position={[13.923, 13.534, -201.79]}
          />
        </group>
        <group position={[1505.579, 84.011, -644.161]} rotation={[-Math.PI / 2, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box088_06_-_Default_0'].geometry}
            material={materials['06_-_Default']}
            position={[13.923, 13.534, -201.79]}
          />
        </group>
        <group position={[1618.302, 204.369, -930.815]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Shape003_02_-_Default_0'].geometry}
            material={materials['02_-_Default']}
            position={[75.243, 0, -15.496]}
          />
        </group>
        <group position={[1701.976, 76.331, -1107.597]} rotation={[Math.PI, 0, Math.PI]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Shape004_02_-_Default_0'].geometry}
            material={materials['02_-_Default']}
            position={[75.243, 0, -15.496]}
          />
        </group>
        <group position={[1636.999, 76.331, -1107.597]} rotation={[Math.PI, 0, Math.PI]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Shape005_02_-_Default_0'].geometry}
            material={materials['02_-_Default']}
            position={[75.243, 0, -15.496]}
          />
        </group>
        <group position={[1457.953, 76.331, -988.675]} rotation={[Math.PI, 0, Math.PI]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Shape006_02_-_Default_0'].geometry}
            material={materials['02_-_Default']}
            position={[75.243, 0, -15.496]}
          />
        </group>
        <group position={[1213.56, 76.149, -1108.232]} rotation={[Math.PI, 0, Math.PI]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Shape007_02_-_Default_0'].geometry}
            material={materials['02_-_Default']}
            position={[75.243, 0, -15.496]}
          />
        </group>
        <group position={[1173.402, 76.331, -1062.446]} rotation={[0, -Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Shape008_02_-_Default_0'].geometry}
            material={materials['02_-_Default']}
            position={[75.243, 0, -15.496]}
          />
        </group>
        <group position={[1173.402, 76.331, -998.373]} rotation={[0, -Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Shape009_02_-_Default_0'].geometry}
            material={materials['02_-_Default']}
            position={[75.243, 0, -15.496]}
          />
        </group>
        <group position={[1173.402, 76.331, -934.266]} rotation={[0, -Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Shape010_02_-_Default_0'].geometry}
            material={materials['02_-_Default']}
            position={[75.243, 0, -15.496]}
          />
        </group>
        <group position={[1173.402, 76.331, -870.1]} rotation={[0, -Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Shape011_02_-_Default_0'].geometry}
            material={materials['02_-_Default']}
            position={[75.243, 0, -15.496]}
          />
        </group>
        <group position={[1172.221, 76.331, -715.172]} rotation={[0, -Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Shape012_02_-_Default_0'].geometry}
            material={materials['02_-_Default']}
            position={[75.243, 0, -15.496]}
          />
        </group>
        <group position={[1172.221, 76.331, -658.119]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Shape013_02_-_Default_0'].geometry}
            material={materials['02_-_Default']}
            position={[75.243, 0, -15.496]}
          />
        </group>
        <group position={[1529.325, 76.146, -776.314]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Shape014_02_-_Default_0'].geometry}
            material={materials['02_-_Default']}
            position={[75.243, 0, -15.496]}
          />
        </group>
        <group position={[1740.498, 76.331, -964.086]} rotation={[0, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Shape015_02_-_Default_0'].geometry}
            material={materials['02_-_Default']}
            position={[75.243, 0, -15.496]}
          />
        </group>
        <group position={[1740.812, 76.331, -818.421]} rotation={[0, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Shape016_02_-_Default_0'].geometry}
            material={materials['02_-_Default']}
            position={[75.243, 0, -15.496]}
          />
        </group>
        <group position={[1473.459, 76.331, -862.07]} rotation={[Math.PI, 0, Math.PI]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Shape017_02_-_Default_0'].geometry}
            material={materials['02_-_Default']}
            position={[75.243, 0, -15.496]}
          />
        </group>
        <group position={[1473.459, 76.331, -862.896]} rotation={[Math.PI, 0, Math.PI]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Shape018_03_-_Default_0'].geometry}
            material={materials['03_-_Default']}
            position={[75.243, 0, -15.496]}
          />
        </group>
        <group position={[1714.209, 76.331, -746.566]} rotation={[Math.PI, 0, Math.PI]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Shape019_03_-_Default_0'].geometry}
            material={materials['03_-_Default']}
            position={[75.243, 0, -15.496]}
          />
        </group>
        <group position={[1355.953, 76.331, -628.783]} rotation={[Math.PI, 0, Math.PI]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Shape020_03_-_Default_0'].geometry}
            material={materials['03_-_Default']}
            position={[75.243, 0, -15.496]}
          />
        </group>
        <group position={[1473.459, 76.331, -989.481]} rotation={[Math.PI, 0, Math.PI]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Shape021_03_-_Default_0'].geometry}
            material={materials['03_-_Default']}
            position={[75.243, 0, -15.496]}
          />
        </group>
        <group position={[1715.874, 76.331, -1108.693]} rotation={[Math.PI, 0, Math.PI]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Shape022_03_-_Default_0'].geometry}
            material={materials['03_-_Default']}
            position={[75.243, 0, -15.496]}
          />
        </group>
        <group position={[1650.592, 76.331, -1108.693]} rotation={[Math.PI, 0, Math.PI]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Shape023_03_-_Default_0'].geometry}
            material={materials['03_-_Default']}
            position={[75.243, 0, -15.496]}
          />
        </group>
        <group position={[1226.935, 76.331, -1109.032]} rotation={[Math.PI, 0, Math.PI]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Shape024_03_-_Default_0'].geometry}
            material={materials['03_-_Default']}
            position={[75.243, 0, -15.496]}
          />
        </group>
        <group position={[1172.593, 76.331, -1076.855]} rotation={[0, -Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Shape025_03_-_Default_0'].geometry}
            material={materials['03_-_Default']}
            position={[75.243, 0, -15.496]}
          />
        </group>
        <group position={[1172.593, 76.331, -1012.751]} rotation={[0, -Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Shape026_03_-_Default_0'].geometry}
            material={materials['03_-_Default']}
            position={[75.243, 0, -15.496]}
          />
        </group>
        <group position={[1172.593, 76.331, -948.646]} rotation={[0, -Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Shape027_03_-_Default_0'].geometry}
            material={materials['03_-_Default']}
            position={[75.243, 0, -15.496]}
          />
        </group>
        <group position={[1172.593, 76.331, -884.082]} rotation={[0, -Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Shape028_03_-_Default_0'].geometry}
            material={materials['03_-_Default']}
            position={[75.243, 0, -15.496]}
          />
        </group>
        <group position={[1171.473, 76.331, -728.809]} rotation={[0, -Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Shape029_03_-_Default_0'].geometry}
            material={materials['03_-_Default']}
            position={[75.243, 0, -15.496]}
          />
        </group>
        <group position={[1366.267, 76.149, -1226.106]} rotation={[Math.PI, 0, Math.PI]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Shape030_02_-_Default_0'].geometry}
            material={materials['02_-_Default']}
            position={[75.243, 0, -15.496]}
          />
        </group>
        <group position={[1379.642, 76.331, -1226.905]} rotation={[Math.PI, 0, Math.PI]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Shape031_03_-_Default_0'].geometry}
            material={materials['03_-_Default']}
            position={[75.243, 0, -15.496]}
          />
        </group>
        <group position={[1741.452, 76.331, -950.51]} rotation={[0, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Shape032_03_-_Default_0'].geometry}
            material={materials['03_-_Default']}
            position={[75.243, 0, -15.496]}
          />
        </group>
        <group position={[1741.452, 76.331, -805.409]} rotation={[0, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Shape033_03_-_Default_0'].geometry}
            material={materials['03_-_Default']}
            position={[75.243, 0, -15.496]}
          />
        </group>
        <group position={[1658.326, 204.43, -1062.411]} rotation={[0, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Shape034_02_-_Default_0'].geometry}
            material={materials['02_-_Default']}
            position={[75.243, 0, -15.496]}
          />
        </group>
        <group position={[1659.28, 204.43, -1048.835]} rotation={[0, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Shape035_03_-_Default_0'].geometry}
            material={materials['03_-_Default']}
            position={[75.243, 0, -15.496]}
          />
        </group>
        <group position={[1658.326, 204.43, -992.608]} rotation={[0, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Shape036_02_-_Default_0'].geometry}
            material={materials['02_-_Default']}
            position={[75.243, 0, -15.496]}
          />
        </group>
        <group position={[1659.28, 204.43, -979.032]} rotation={[0, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Shape037_03_-_Default_0'].geometry}
            material={materials['03_-_Default']}
            position={[75.243, 0, -15.496]}
          />
        </group>
        <group position={[1618.272, 204.43, -1147.126]} rotation={[Math.PI, 0, Math.PI]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Shape038_02_-_Default_0'].geometry}
            material={materials['02_-_Default']}
            position={[75.243, 0, -15.496]}
          />
        </group>
        <group position={[1631.847, 204.43, -1148.08]} rotation={[Math.PI, 0, Math.PI]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Shape039_03_-_Default_0'].geometry}
            material={materials['03_-_Default']}
            position={[75.243, 0, -15.496]}
          />
        </group>
        <group position={[1553.09, 204.43, -1147.126]} rotation={[Math.PI, 0, Math.PI]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Shape040_02_-_Default_0'].geometry}
            material={materials['02_-_Default']}
            position={[75.243, 0, -15.496]}
          />
        </group>
        <group position={[1566.666, 204.43, -1148.08]} rotation={[Math.PI, 0, Math.PI]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Shape041_03_-_Default_0'].geometry}
            material={materials['03_-_Default']}
            position={[75.243, 0, -15.496]}
          />
        </group>
        <group position={[1475.21, 204.43, -1147.126]} rotation={[Math.PI, 0, Math.PI]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Shape042_02_-_Default_0'].geometry}
            material={materials['02_-_Default']}
            position={[75.243, 0, -15.496]}
          />
        </group>
        <group position={[1488.786, 204.43, -1148.08]} rotation={[Math.PI, 0, Math.PI]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Shape043_03_-_Default_0'].geometry}
            material={materials['03_-_Default']}
            position={[75.243, 0, -15.496]}
          />
        </group>
        <group position={[1320.247, 204.43, -1147.126]} rotation={[Math.PI, 0, Math.PI]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Shape044_02_-_Default_0'].geometry}
            material={materials['02_-_Default']}
            position={[75.243, 0, -15.496]}
          />
        </group>
        <group position={[1333.823, 204.43, -1148.08]} rotation={[Math.PI, 0, Math.PI]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Shape045_03_-_Default_0'].geometry}
            material={materials['03_-_Default']}
            position={[75.243, 0, -15.496]}
          />
        </group>
        <group position={[1202.647, 204.43, -1225.967]} rotation={[Math.PI, 0, Math.PI]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Shape046_02_-_Default_0'].geometry}
            material={materials['02_-_Default']}
            position={[75.243, 0, -15.496]}
          />
        </group>
        <group position={[1216.223, 204.43, -1226.921]} rotation={[Math.PI, 0, Math.PI]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Shape047_03_-_Default_0'].geometry}
            material={materials['03_-_Default']}
            position={[75.243, 0, -15.496]}
          />
        </group>
        <group position={[1553.166, 204.43, -930.978]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Shape048_02_-_Default_0'].geometry}
            material={materials['02_-_Default']}
            position={[75.243, 0, -15.496]}
          />
        </group>
        <group position={[1604.52, 204.43, -929.922]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Shape049_03_-_Default_0'].geometry}
            material={materials['03_-_Default']}
            position={[75.243, 0, -15.496]}
          />
        </group>
        <group position={[1539.488, 204.43, -930.274]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Shape050_03_-_Default_0'].geometry}
            material={materials['03_-_Default']}
            position={[75.243, 0, -15.496]}
          />
        </group>
        <group position={[1371.71, 204.43, -803.666]} rotation={[0, -Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Shape051_02_-_Default_0'].geometry}
            material={materials['02_-_Default']}
            position={[75.243, 0, -15.496]}
          />
        </group>
        <group position={[1371.006, 204.43, -817.343]} rotation={[0, -Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Shape052_03_-_Default_0'].geometry}
            material={materials['03_-_Default']}
            position={[75.243, 0, -15.496]}
          />
        </group>
        <group position={[1300.289, 204.43, -776.472]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Shape053_02_-_Default_0'].geometry}
            material={materials['02_-_Default']}
            position={[75.243, 0, -15.496]}
          />
        </group>
        <group position={[1286.612, 204.43, -775.768]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Shape054_03_-_Default_0'].geometry}
            material={materials['03_-_Default']}
            position={[75.243, 0, -15.496]}
          />
        </group>
        <group position={[1083.224, 204.43, -1062.657]} rotation={[0, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Shape055_02_-_Default_0'].geometry}
            material={materials['02_-_Default']}
            position={[75.243, 0, -15.496]}
          />
        </group>
        <group position={[1084.178, 204.43, -1049.081]} rotation={[0, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Shape056_03_-_Default_0'].geometry}
            material={materials['03_-_Default']}
            position={[75.243, 0, -15.496]}
          />
        </group>
        <group position={[1083.24, 204.43, -998.293]} rotation={[0, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Shape057_02_-_Default_0'].geometry}
            material={materials['02_-_Default']}
            position={[75.243, 0, -15.496]}
          />
        </group>
        <group position={[1084.194, 204.43, -984.718]} rotation={[0, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Shape058_03_-_Default_0'].geometry}
            material={materials['03_-_Default']}
            position={[75.243, 0, -15.496]}
          />
        </group>
        <group position={[1083.24, 204.43, -934.497]} rotation={[0, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Shape059_02_-_Default_0'].geometry}
            material={materials['02_-_Default']}
            position={[75.243, 0, -15.496]}
          />
        </group>
        <group position={[1084.194, 204.43, -920.921]} rotation={[0, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Shape060_03_-_Default_0'].geometry}
            material={materials['03_-_Default']}
            position={[75.243, 0, -15.496]}
          />
        </group>
        <group position={[1083.24, 204.43, -870.206]} rotation={[0, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Shape061_02_-_Default_0'].geometry}
            material={materials['02_-_Default']}
            position={[75.243, 0, -15.496]}
          />
        </group>
        <group position={[1084.194, 204.43, -856.63]} rotation={[0, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Shape062_03_-_Default_0'].geometry}
            material={materials['03_-_Default']}
            position={[75.243, 0, -15.496]}
          />
        </group>
        <group position={[1442.562, 290.826, -980.084]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Shape063_01_-_Default_0'].geometry}
            material={materials['01_-_Default']}
            position={[-69.536, 39.981, -0.984]}
          />
        </group>
        <group position={[1404.676, 220.619, -639.575]} rotation={[-Math.PI / 2, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box089_02_-_Default_0'].geometry}
            material={materials['02_-_Default']}
            position={[13.923, 13.534, -201.79]}
          />
        </group>
        <group position={[1154.704, 220.619, -639.575]} rotation={[-Math.PI / 2, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box090_02_-_Default_0'].geometry}
            material={materials['02_-_Default']}
            position={[13.923, 13.534, -201.79]}
          />
        </group>
        <group position={[1154.704, 220.619, -747.361]} rotation={[-Math.PI / 2, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box091_02_-_Default_0'].geometry}
            material={materials['02_-_Default']}
            position={[13.923, 13.534, -201.79]}
          />
        </group>
        <group position={[1405.484, 220.619, -874.824]} rotation={[-Math.PI / 2, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box092_02_-_Default_0'].geometry}
            material={materials['02_-_Default']}
            position={[13.923, 13.534, -201.79]}
          />
        </group>
        <group position={[1508.133, 220.619, -874.824]} rotation={[-Math.PI / 2, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box093_02_-_Default_0'].geometry}
            material={materials['02_-_Default']}
            position={[13.923, 13.534, -201.79]}
          />
        </group>
        <group position={[1508.927, 220.619, -757.978]} rotation={[-Math.PI / 2, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box094_02_-_Default_0'].geometry}
            material={materials['02_-_Default']}
            position={[13.923, 13.534, -201.79]}
          />
        </group>
        <group position={[1759.015, 220.619, -758.339]} rotation={[-Math.PI / 2, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box095_02_-_Default_0'].geometry}
            material={materials['02_-_Default']}
            position={[13.923, 13.534, -201.79]}
          />
        </group>
        <group position={[1759.368, 220.619, -1123.879]} rotation={[-Math.PI / 2, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box096_02_-_Default_0'].geometry}
            material={materials['02_-_Default']}
            position={[13.923, 13.534, -201.79]}
          />
        </group>
        <group position={[1688.049, 220.619, -1123.879]} rotation={[-Math.PI / 2, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box097_02_-_Default_0'].geometry}
            material={materials['02_-_Default']}
            position={[13.923, 13.534, -201.79]}
          />
        </group>
        <group position={[1404.369, 220.619, -1242.81]} rotation={[-Math.PI / 2, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box098_02_-_Default_0'].geometry}
            material={materials['02_-_Default']}
            position={[13.923, 13.534, -201.79]}
          />
        </group>
        <group position={[1404.369, 220.619, -1178.922]} rotation={[-Math.PI / 2, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box099_02_-_Default_0'].geometry}
            material={materials['02_-_Default']}
            position={[13.923, 13.534, -201.79]}
          />
        </group>
        <group position={[1296.159, 220.619, -1242.81]} rotation={[-Math.PI / 2, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box100_02_-_Default_0'].geometry}
            material={materials['02_-_Default']}
            position={[13.923, 13.534, -201.79]}
          />
        </group>
        <group position={[1303.418, 348.187, -1241.578]} rotation={[-Math.PI / 2, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box101_02_-_Default_0'].geometry}
            material={materials['02_-_Default']}
            position={[13.923, 13.534, -201.79]}
          />
        </group>
        <group position={[1303.701, 348.187, -1163.774]} rotation={[-Math.PI / 2, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box102_02_-_Default_0'].geometry}
            material={materials['02_-_Default']}
            position={[13.923, 13.534, -201.79]}
          />
        </group>
        <group position={[1769.49, 348.187, -1162.708]} rotation={[-Math.PI / 2, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box103_02_-_Default_0'].geometry}
            material={materials['02_-_Default']}
            position={[13.923, 13.534, -201.79]}
          />
        </group>
        <group position={[1769.495, 348.187, -913.218]} rotation={[-Math.PI / 2, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box104_02_-_Default_0'].geometry}
            material={materials['02_-_Default']}
            position={[13.923, 13.534, -201.79]}
          />
        </group>
        <group position={[1407.662, 348.187, -911.986]} rotation={[-Math.PI / 2, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box105_02_-_Default_0'].geometry}
            material={materials['02_-_Default']}
            position={[13.923, 13.534, -201.79]}
          />
        </group>
        <group position={[1406.51, 348.187, -716.859]} rotation={[-Math.PI / 2, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box106_02_-_Default_0'].geometry}
            material={materials['02_-_Default']}
            position={[13.923, 13.534, -201.79]}
          />
        </group>
        <group position={[1097.435, 348.187, -717.005]} rotation={[-Math.PI / 2, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box107_02_-_Default_0'].geometry}
            material={materials['02_-_Default']}
            position={[13.923, 13.534, -201.79]}
          />
        </group>
        <group position={[1097.251, 348.187, -1241.371]} rotation={[-Math.PI / 2, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box108_02_-_Default_0'].geometry}
            material={materials['02_-_Default']}
            position={[13.923, 13.534, -201.79]}
          />
        </group>
        <group position={[1393.793, -19.042, -883.155]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Line022_24_-_Default_0'].geometry}
            material={materials['24_-_Default']}
            position={[49.021, 162.066, -1.22]}
          />
        </group>
        <group position={[1436.651, 11.437, -942.444]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Line023_23_-_Default_0'].geometry}
            material={materials['23_-_Default']}
            position={[-22.467, 59.715, -7.874]}
          />
        </group>
        <group position={[1436.651, 9.656, -942.444]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Line024_23_-_Default_0'].geometry}
            material={materials['23_-_Default']}
            position={[-22.467, 59.715, -7.874]}
          />
        </group>
        <group position={[1436.651, 13.261, -942.444]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Line025_Wall_Paint_0.geometry}
            material={materials.Wall_Paint}
            position={[-22.467, 59.715, -7.874]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line017_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[1823.84, -2.515, -724.761]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Shape002_05_-_Default_0'].geometry}
          material={materials['05_-_Default']}
          position={[1823.84, -3.324, -724.761]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line018_05_-_Default_0'].geometry}
          material={materials['05_-_Default']}
          position={[1058.064, 0, -744.489]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line019_04_-_Default_0'].geometry}
          material={materials['04_-_Default']}
          position={[1058.116, -1.529, -744.587]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line020_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1366.26, 164.966, -1218.93]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Line021_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[1481.756, 164.966, -839.578]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  )
}
