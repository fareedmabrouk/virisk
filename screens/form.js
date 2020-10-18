import React, { useState } from "react";
import { View, SafeAreaView, Text, StyleSheet, StatusBar, Button, TouchableOpacity } from "react-native";
import { theme } from "../styles";
import { CheckBox } from "@react-native-community/checkbox";

const Form = ({route, navigation}) => {
    const { star_rating } = route.params
    var cramped = 0;
    var masks = 0;
    var sanitized = 0;
    // let form = new FormData();
    // form.append("placeId", "test_place_id");
    // form.append("stars", 1);
    // form.append("cramped", cramped);
    // form.append("masks", masks);
    // form.append("sanitized", sanitized);
    const onPress = () => fetch("https://virisk.herokuapp.com/addReview", {
                                method: 'POST',
                                headers: {
                                    Accept: 'application/json',
                                    'Content-Type': 'application/json'
                                  },
                                body: JSON.stringify({
                                    placeId : "test_place_id2",
                                    stars : star_rating,
                                    cramped : cramped,
                                    masks : masks,
                                    sanitized : sanitized
                                })}).then((response) => navigation.navigate("Rating"));
    
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1, backgroundColor: "#09C6F9" }}>

        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            
            <View style={{paddingBottom: 30, flexDirection: 'row', justifyContent: 'center'}}>
                <Text style={styles.text}>Please answer the questions below:</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Text style={styles.question}>Were you able to safely distance?</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <TouchableOpacity 
                style={styles.yes}
                onPress={() => {
                 cramped = 1;  
                }}>
                    <Text style={{fontSize: 25}}>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={styles.no}
                onPress={() => {
                    cramped = 0;  
                   }}>
                    <Text style={{fontSize: 25}}>No</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Text style={styles.question}>Were masks strictly enforced?</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <TouchableOpacity 
                style={styles.yes}
                onPress={() => {
                    masks = 1;  
                   }}>
                    <Text style={{fontSize: 25}}>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={styles.no}
                onPress={() => {
                    masks = 0;  
                   }}>
                    <Text style={{fontSize: 25}}>No</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Text style={styles.question}>Were surfaces frequently sanitized?</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <TouchableOpacity 
                style={styles.yes}
                onPress={() => {
                    sanitized = 1;  
                   }}>
                    <Text style={{fontSize: 25}}>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={styles.no}
                onPress={() => {
                    sanitized = 0;  
                   }}>
                    <Text style={{fontSize: 25}}>No</Text>
                </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <TouchableOpacity 
                style={styles.submit}
                onPress={onPress}>
                    <Text style={{fontSize: 30}}>Submit</Text>
                </TouchableOpacity>
                </View>
        </View>
      </SafeAreaView>
      <SafeAreaView style={{ flex: 0, backgroundColor: "#045DE9" }} />
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    color: theme.text,
    fontSize: 40,
    fontFamily: "Roboto",
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
      fontFamily: "Roboto",
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
    backgroundColor: "#E0D0C1",
    padding: 30, borderRadius: 15
  }
});

export default Form;
