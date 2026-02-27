import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { momoSignature, momotrust, windowHeight } from '../config/config';
import { useNavigation } from '@react-navigation/native';
import ButtonComp from '../components/Button/Button';

const Home = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <ImageBackground
        source={require('../images/img/bgscreen.png')}
        resizeMode="cover"
        style={styles.container}
      >
        <View>
          {/* 🌎 Welcome to GoodConnects! */}
          <Text style={styles.mainTitle}>🌎 Welcome!</Text>

          {/* Intro Paragraph */}
          <Text style={styles.introText}>Click here for Check List</Text>

          <ButtonComp
            name="Click Me"
            onpress={() => navigation.navigate('listofusers')}
          />
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: windowHeight,
    padding: 20,
  },
  mainTitle: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black', // Deep Blue (Primary Brand Color)
    marginBottom: 15,
    fontFamily: momoSignature,
  },

  introText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333333',
    textAlign: 'center',
    marginBottom: 25,
    fontFamily: momotrust,
  },
});
