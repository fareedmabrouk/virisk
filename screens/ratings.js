import React, { useState } from "react";
import { View, SafeAreaView, Text, StyleSheet, StatusBar, Button, TouchableOpacity } from "react-native";
import { theme } from "../styles";
import { LinearGradient } from "expo-linear-gradient";
import { Rating } from 'react-native-ratings';
import * as Haptics from 'expo-haptics';

const Ratings = ({route, navigation}) => {
    const { place_id, address_name } = route.params;
    const [rate, setRating] = useState(3.5);
    const onPress = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        navigation.navigate('Form', { place_id : place_id, star_rating: rate });}
    const ratingCompleted = (rating) => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        setRating(rating);}

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1, backgroundColor: "#045DE9" }}>
      <LinearGradient
          colors={["#09C6F9", "#045DE9"]}
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{marginRight: 20, marginLeft: 20, marginBottom: 90, flexDirection: 'row', justifyContent: 'center'}}>
                <Text style={styles.text}>Rate {address_name} on its COVID-19 Safety Guidelines:</Text>
            </View>
            <View style={{borderRadius: 300, backgroundColor: "#ffffff", marginLeft: 30, marginRight: 30, flexDirection: 'row', justifyContent: 'center'}}>
                <View style={{padding: 30, flex: 1}}>
                    <Rating
                    count={5}
                    showRating={true}
                    type="custom"
                    ratingColor="#FF4500"
                    startingValue={3}
                    fractions={0}
                    ratingBackgroundColor="#ffa280"
                    tintColor="#ffffff"
                    style={{ backgroundColor: 'transparent'}}
                    onFinishRating={ratingCompleted}
                    />
                </View>    
            </View>
            <View style={{marginTop: 30, flexDirection: 'row', justifyContent: 'center'}}>
                <TouchableOpacity 
                style={{margin:25, 
                alignItems: "center",
                borderColor: 'white',
                borderWidth: 2,
                padding: 20,
                borderRadius: 100}}
                onPress={onPress}>
                    <Text style={{color: 'white', fontSize: 22}}>Submit Rating</Text>
                </TouchableOpacity>
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Ratings;
