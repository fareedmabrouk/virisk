import React, { useEffect, useState } from "react";
import { Image, View, SafeAreaView, Text, StyleSheet, StatusBar, ScrollView } from "react-native";
import { theme } from "../styles";
import { LinearGradient } from "expo-linear-gradient";
import getScore from '../clients/scoreClient';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const Scorecard = ({ route, navigation }) => {
    const {placeId, name} = route.params;
    const [response, setResponse] = useState({overall: 0});

    useEffect(() => {
        const fetchData = async () => {
            try {
                var tempResponse = await getScore(placeId, name);
                if (tempResponse) {
                    setResponse(tempResponse);
                }
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
            <ScrollView>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Text style={styles.text}>{name}</Text>
            </View>
        
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <AnimatedCircularProgress
                    size={200}
                    width={8}
                    fill={response.overall}
                    tintColor="#90ee90"
                    backgroundColor="grey">
                    {(fill) => (
                    <Text style={styles.circleText}>{ fill > 0 ? fill : 'No Data!' }</Text>
                    )}
                    </AnimatedCircularProgress>
            </View>
            <View style={{flexDirection: 'column', backgroundColor: 'white', borderRadius: '30', margin: 20}}>
                
                <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 5}}>
                        <View style={{flex: .3, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                            <Image
                                style={styles.image}
                                source={require('../assets/mask.png')}
                            />
                        </View>
                        <View style={{flex: .3, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={styles.numberText}>{response.masks}</Text>
                        </View>
                        <View style={{flex: .3, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <Text>Low numbers of customers reported to be wearing masks.</Text>
                        </View>
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 5}}>
                        <View style={{flex: .3, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                            <Image
                                style={styles.image}
                                source={require('../assets/distance.png')}
                            />
                        </View>
                        <View style={{flex: .3, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={styles.numberText}>{response.cramped}</Text>
                        </View>
                        <View style={{flex: .3, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <Text>Walkability isn't great here, social distancing will be difficult.</Text>
                        </View>
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 5}}>
                        <View style={{flex: .3, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                            <Image
                                style={styles.image}
                                source={require('../assets/sanitizer.png')}
                            />
                        </View>
                        <View style={{flex: .3, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={styles.numberText}>{response.sanitized}</Text>
                        </View>
                        <View style={{flex: .3, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <Text>Surfaces are not often sanitized here!</Text>
                        </View>
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 5}}>
                        <View style={{flex: .3, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                            <Image
                                style={styles.image}
                                source={require('../assets/cough.png')}
                            />
                        </View>
                        <View style={{flex: .3, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={styles.numberText}>{response.stars}</Text>
                        </View>
                        <View style={{flex: .3, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <Text>High amount of Covid cases near this area!</Text>
                        </View>
                </View>

            </View>
            </ScrollView>
        </LinearGradient>
      </SafeAreaView>
      <SafeAreaView style={{ flex: 0, backgroundColor: "#045DE9" }} />
    </>
  );
};

const styles = StyleSheet.create({
numberText: {
    fontSize: 30
},
image: {
   width: 100,
   height: 100
},    
text: {
    color: theme.text,
    fontSize: 40,
    fontFamily: "Futura",
    marginTop: 70,
    marginBottom: 50,
  },
  circleText: {
    color: theme.text,
    fontSize: 40,
    fontFamily: "Futura",
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
