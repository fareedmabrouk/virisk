import React, { useEffect, useState } from "react";
import { View, SafeAreaView, Text, StyleSheet, StatusBar } from "react-native";
import { theme } from "../styles";
import { LinearGradient } from "expo-linear-gradient";
import getScore from '../clients/scoreClient';

const Scorecard = ({ route, navigation }) => {
    const {placeId, name} = route.params;
    const [score, changeScore] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                var score = await getScore(placeId, name);
                changeScore(score);
            } catch (error) {
                console.error(error)
            }
        }
        fetchData();
    }, [])


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
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Text style={styles.text}>{name}</Text>
            </View>
            <View>

            </View>
            <View>

            </View>
            <Text style={styles.text}>I HATE YOU</Text>
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

export default Scorecard;
