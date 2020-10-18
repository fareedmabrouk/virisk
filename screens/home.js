import React, { useState } from "react";
import { View, SafeAreaView, Text, StyleSheet, StatusBar, TextInput, Button, Picker } from "react-native";
import { theme } from "../styles";
import { LinearGradient } from "expo-linear-gradient";
import { Picker } from '@react-native-community/picker';

const Home = () => {
  const [value, onChangeText] = useState();

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1, backgroundColor: "#09C6F9" }}>
        <LinearGradient
          colors={["#09C6F9", "#045DE9"]}
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={styles.text}>Enter An Address</Text>
          <TextInput
            style={{ height: 100, color: 'white' }}
            placeholder="Ex: Safeway 19th St."
            onChangeText={text => onChangeText(text)}
            value={value}
          />
          
          <Picker
          >

          </Picker>
          <View style={{flexDirection: 'row'}}>
            <Button
              onPress={console.log('test')}
              title='Review Safety'
              color='white'
              accessibilityLabel='Review a business sanitation'
            />
            <Button
              onPress={console.log('test')}
              title='Rate Business'
              color='white'
              accessibilityLabel='Review a business sanitation'
            />
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
  },
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
