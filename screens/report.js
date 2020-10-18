import React from "react";
import { SafeAreaView, Text, StyleSheet, StatusBar, View, Button} from "react-native";
import { Card } from "react-native-elements"
import { theme } from "../styles";
import { LinearGradient } from "expo-linear-gradient";
import { Rating } from 'react-native-ratings';



const Report = () => {

  const backFunction = () => {
    console.log("going back")
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1, backgroundColor: "#09C6F9" }}>
        <LinearGradient
          colors={["#09C6F9", "#045DE9"]}
          style={{
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
        <View>
          <Text style={styles.title}>QFC</Text>
          <Rating style = {styles.x}
              count={5}
              showRating={false}
              type="custom"
              ratingColor="#a8dda8"
              startingValue={3.5}
              fractions={1}
              ratingBackgroundColor="#eeeeee"
              tintColor="#045DE9"
              style={{ backgroundColor: 'transparent'}}
              readonly = {true}
            />
          <Text style={styles.subheader1}>Moderate Risk</Text>


          <Card>
            <Card.Title>Risk breakdown</Card.Title>
          </Card>
        </View>

        <Button title="Home" onPress = {backFunction}>
        </Button>
        <Button title="Rate this location"></Button>

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
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  title: {
    color: theme.text,
    fontSize: 70,
    alignSelf: "center",
    margin: 40,
  },
  subheader1: {
    color: theme.text,
    fontSize: 40,
    alignSelf: "center",
    margin: 5,
  },
  subheader2: {

  },
  breakdown: {
    borderWidth: 2,
    alignSelf: "stretch",
    alignContent: "stretch",
  }
});

export default Report;
