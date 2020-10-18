import React from "react";
import { SafeAreaView, Text, StyleSheet, StatusBar, View } from "react-native";
import { theme } from "../styles";
import { LinearGradient } from "expo-linear-gradient";

const Report = () => {
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
        <View>
          <Text style={styles.text}>QFC</Text>
          <Text>Risk</Text>
          <Text>Moderate</Text>

          <View>
            <Text>Area     Rating</Text>
            <Text>BusEness</Text>
            <Text>Mask Wearing</Text>
          </View>
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

export default Report;
