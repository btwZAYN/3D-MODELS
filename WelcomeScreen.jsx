import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.screenContent}>
         <ImageBackground
      source={require('../assets/a.jpg')}
      style={styles.screenContainer}
    >
      
        <Text style={styles.welcomeText}>𝘞𝘦𝘭𝘤𝘰𝘮𝘦 𝘵𝘰 𝘵𝘩𝘦 𝘋𝘳𝘦𝘢𝘮 𝘏𝘰𝘮𝘦 !</Text>
       <View style={{marginTop:200}}> 
       <TouchableOpacity 
          onPress={() => navigation.navigate('HomeScreen')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => navigation.navigate('AboutUsScreen', {
            description: 'Welcome to the Dream Home App!\n\nOur app is designed to inspire and assist you in visualizing your future home. Explore stunning 3D designs of homes and discover a variety of architectural styles and interior designs. Whether you’re planning to build a new house, renovate an existing space, or simply looking for ideas, the Dream Home App is your ultimate guide.'
          })}
          style={styles.button}
        >
          <Text style={styles.buttonText}>About Us</Text>
        </TouchableOpacity>
        </View>
      
    </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    
    justifyContent:'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  screenContent: {
    alignItems: 'center',
    
    marginBottom: 0,
  },
  welcomeText: {
    fontSize: 16,
    marginBottom: 0,
    marginTop:210,
    marginLeft:150,
    color: 'grey',
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  button: {
    padding: 10,
    backgroundColor: 'grey',
    borderRadius: 5,
    marginTop: 10,
    width: 150,
    alignItems: 'center',
     
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default WelcomeScreen;
