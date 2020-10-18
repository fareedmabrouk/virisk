import React, { useState } from "react";
import { View, SafeAreaView, Text, StyleSheet, StatusBar, Button, TouchableOpacity } from "react-native";
import { theme } from "../styles";
import { LinearGradient } from "expo-linear-gradient";
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import * as Haptics from 'expo-haptics';

const Form = ({route, navigation}) => {
    const { place_id, star_rating } = route.params;
    var radio_props = [
        {label: 'No', value: 0},
        {label: 'Yes', value : 1}
    ];
    var cramped = 0;
    var masks = 0;
    var sanitized = 0;
    const onPress = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        fetch("https://virisk.herokuapp.com/addReview", {
                                method: 'POST',
                                headers: {
                                    Accept: 'application/json',
                                    'Content-Type': 'application/json'
                                  },
                                body: JSON.stringify({
                                    placeId : place_id,
                                    stars : star_rating,
                                    cramped : cramped,
                                    masks : masks,
                                    sanitized : sanitized
                                })}).then((response) => navigation.navigate("Home"));}
    
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
        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            
            <View style={{paddingBottom: 30, flexDirection: 'row', justifyContent: 'center'}}>
                <Text style={styles.text}>Please answer the questions below:</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Text style={styles.question}>Were you able to safely distance?</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <RadioForm
            radio_props={radio_props}
            initial={0}
            formHorizontal={true}
            labelHorizontal={true}
            buttonColor={'#f9b409'}
            selectedButtonColor={'#09f9b4'}
            labelStyle={{fontSize: 20, color: 'white', paddingRight: 30, paddingTop: 15}}
            buttonSize={35}
            animation={true}
            style={{padding: 15, marginLeft: 30}}
            onPress={(value) => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                cramped = value;}}/>
                {/* <TouchableOpacity 
                style={styles.yes}
                onPress={() => {
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                    cramped = 1;  
                }}>
                    <Text style={{fontSize: 25}}>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={styles.no}
                onPress={() => {
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                    cramped = 0;  
                   }}>
                    <Text style={{fontSize: 25}}>No</Text>
                </TouchableOpacity> */}
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Text style={styles.question}>Were masks strictly enforced?</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <RadioForm
            radio_props={radio_props}
            initial={0}
            formHorizontal={true}
            labelHorizontal={true}
            buttonColor={'#f9b409'}
            selectedButtonColor={'#09f9b4'}
            labelStyle={{fontSize: 20, color: 'white', paddingRight: 30, paddingTop: 15}}
            buttonSize={35}
            animation={true}
            style={{padding: 15, marginLeft: 30}}
            onPress={(value) => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                masks = value;}}/>
                {/* <TouchableOpacity 
                style={styles.yes}
                onPress={() => {
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                    masks = 1;  
                   }}>
                    <Text style={{fontSize: 25}}>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={styles.no}
                onPress={() => {
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                    masks = 0;  
                   }}>
                    <Text style={{fontSize: 25}}>No</Text>
                </TouchableOpacity> */}
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Text style={styles.question}>Were surfaces frequently sanitized?</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <RadioForm
            radio_props={radio_props}
            initial={0}
            formHorizontal={true}
            labelHorizontal={true}
            buttonColor={'#f9b409'}
            selectedButtonColor={'#09f9b4'}
            labelStyle={{fontSize: 20, color: 'white', paddingRight: 30, paddingTop: 15}}
            buttonSize={35}
            animation={true}
            style={{padding: 15, marginLeft: 30}}
            onPress={(value) => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                sanitized = value;}}/>
                {/* <TouchableOpacity 
                style={styles.yes}
                onPress={() => {
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                    sanitized = 1;  
                   }}>
                    <Text style={{fontSize: 25}}>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={styles.no}
                onPress={() => {
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                    sanitized = 0;  
                   }}>
                    <Text style={{fontSize: 25}}>No</Text>
                </TouchableOpacity> */}
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <TouchableOpacity 
                style={styles.submit}
                onPress={onPress}>
                    <Text style={{color: "white", fontSize: 30}}>Submit</Text>
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
    alignContent: 'center',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  question: {
      color: theme.text,
      fontSize: 25,
      fontFamily: "Futura",
      textAlign: "center",
  },
  yes: {
    margin:25, 
    alignItems: "center",
    backgroundColor: "#09f9b4",
    padding: 30, borderRadius: 15
  },
  no: {
    margin:25, 
    alignItems: "center",
    backgroundColor: "#f9b409",
    padding: 30, borderRadius: 15
  },
  submit: {
    margin:25, 
    alignItems: "center",
    borderColor: "white",
    borderWidth: 2,
    padding: 30, borderRadius: 15
  }
});

export default Form;
