import React from "react";
import { SafeAreaView, Text, StyleSheet, StatusBar } from "react-native";
import { theme } from "../styles";
import { LinearGradient } from "expo-linear-gradient";
import { Rating } from 'react-native-ratings';

const Ratings = () => {
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
          <Text style={styles.text}>Rate ___ on its COVID-19 Measurements:</Text>

          <Rating
              count={5}
              showRating={true}
              type="custom"
              ratingColor="#a8dda8"
              startingValue={3.5}
              fractions={1}
              ratingBackgroundColor="#eeeeee"
              tintColor="#045DE9"
              style={{ backgroundColor: 'transparent'}}
            />
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

export default Ratings;
