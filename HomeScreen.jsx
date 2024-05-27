import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
const HomeScreen = () => {
  const navigation = useNavigation();
  const homes = [
    { image: require('../assets/1.png'), name: 'Modern House' },
    { image: require('../assets/2.png'), name: 'Classic House' },
    { image: require('../assets/home3.png'), name: 'Beach House' },
    { image: require('../assets/home4.png'), name: 'Mountain House' }
  ];

  return (
    <ImageBackground source={require('../assets/f.jpg')} style={styles.background}>
      <Text style={styles.title}>Choose Your Dream Home</Text>
      <View style={styles.homeContainer}>
        {homes.map((home, index) => (
          <TouchableOpacity onPress={()=>{navigation.navigate("model1")}}>
          <View style={styles.homeItem} key={index}>
            <Image source={home.image} style={styles.homeImage} />
            <Text style={styles.homeText}>{home.name}</Text>
          </View>
          </TouchableOpacity>
        ))}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  homeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  homeItem: {
    alignItems: 'center',
    margin: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },
  homeImage: {
    width: 120,
    height: 120,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  homeText: {
    marginTop: 10,
    fontSize: 16,
    color: '#333',
  },
});

export default HomeScreen;
