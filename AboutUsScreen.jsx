import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

const AboutUsScreen = ({ route }) => {
  const { description } = route.params;

  return (
    <ImageBackground
      source={require('../assets/b.jpg')}
      style={styles.screenContainer}
    >
      <View style={styles.screenContent}>
        <Text style={styles.descriptionText}>{description}</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  screenContent: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  descriptionText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});

export default AboutUsScreen;
