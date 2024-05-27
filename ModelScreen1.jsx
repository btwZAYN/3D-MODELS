// src/ModelScreen.js
import React, { Suspense } from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { Canvas } from '@react-three/fiber';
import Model1 from './Model1';
import useControls from 'r3f-native-orbitcontrols';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ModelScreen1 = () => {
  const [OrbitControls, events] = useControls();

  return (
    <SafeAreaView style={styles.container}>
      {/* Model Container */}
      <View style={styles.modelContainer} {...events}>
        <Canvas>
          <OrbitControls enablePan={true} />
          <group scale={0.025}position={[-10, -5, -20]} align="center"></group>
          <directionalLight position={[1, 0, 0]} args={['silver', 10]} />
          <directionalLight position={[-1, 0, 0]} args={['white', 0]} />
          <directionalLight position={[0, 1, 0]} args={['green', 15]} />
          <directionalLight position={[0, -1, 0]} args={['skyblue', 5]} />
          <directionalLight position={[0, 0, 1]} args={['silver', 20]} />
          <directionalLight position={[0, 0, -1]} args={['white', 0]} />
          <Suspense fallback={null}>
            <Model1 />
          </Suspense>
        </Canvas>
      </View>

      {/* Bottom Container */}
      <View style={styles.bottomContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.textTitle}>Modern House</Text>
          <Text style={styles.textprice}>$1,00</Text>
          <Text style={styles.text}>
            A modern house with a beautiful view of pool and grassy plot.
          </Text>
          <TouchableOpacity>
            <Text style={{textAlign:'center', padding: 10,
                          backgroundColor: '#3F6900',
                          borderRadius: 99,
                          marginTop: 10,
                          width: 150,
                          alignItems:'center',
                          marginLeft: 100,
                          }}>
              Buy Now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ModelScreen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Semi-transparent white color
  },
  modelContainer: {
    flex: 2,
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 10,
  },
  textContainer: {
    margin: 20,
    marginBottom: 0,
  },
  textTitle: {
    color: 'black',
    fontSize: 28,
    fontWeight: 'bold',
  },
  textprice: {
    color: '#3F6900',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  text: {
    color: 'black', // Dark grey text color
    fontSize: 16,
    textAlign: 'justify',
    marginVertical: 10,
  },
});
