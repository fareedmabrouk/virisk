import React, { useState } from "react";
import { View, SafeAreaView, Text, StyleSheet, StatusBar, TouchableOpacity, Button, Picker } from "react-native";
import { theme } from "../styles";
import { LinearGradient } from "expo-linear-gradient";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { add } from '../clients/homeClient'

const Home = () => {
  const [address, changeAddress] = useState();

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1, backgroundColor: "#09C6F9" }}>
        <LinearGradient
          colors={["#09C6F9", "#045DE9"]}
          style={{
            flex: 1
          }}
        >
          <View style={{alignItems: 'center'}}>
            <Text style={styles.text}>Enter An Address</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row', marginLeft: 30, marginRight: 30}}>
            <GooglePlacesAutocomplete
              placeholder='Search'
              onPress={(data, details = null) => {
                console.log('fetching the result');
                console.log(data);
                changeAddress(data);
              }}
              query={{
                key: 'AIzaSyBL71YXDYhH8_56sew0qDJ3crkYiHjbVLg',
                language: 'en',
              }}
              styles={{
                
              }}
            />
          </View>
          <View style={{flexDirection: 'row', marginBottom: 300, justifyContent: 'space-around'}}>
            <TouchableOpacity
              onPress={(address) => {
                console.log(address)
              }}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Check Safety</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={(address) => {console.log(address)}}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Review Safety</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </SafeAreaView>
      <SafeAreaView style={{ flex: 0, backgroundColor: "#045DE9" }} />
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    color: theme.text,
    fontSize: 40,
    fontFamily: "Futura",
    marginTop: 100,
    marginBottom: 50,
  },
  button: {
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: theme.text,
    fontFamily: 'Futura',
    color: 'white',
    padding: 10,
    fontSize: 22
  },
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
