import React from "react";
import { StyleSheet, Text, View } from "react-native";
import firebase from "firebase";
import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";

export default class App extends React.Component {
  componentDidMount = () => {
    const config = {
      apiKey: "AIzaSyApi7bHDKw4Jv0hsbbSPM9_C955cF_pzLQ",
      authDomain: "one-time-password-app.firebaseapp.com",
      databaseURL: "https://one-time-password-app.firebaseio.com",
      projectId: "one-time-password-app",
      storageBucket: "one-time-password-app.appspot.com",
      messagingSenderId: "1065148846365"
    };
    firebase.initializeApp(config);
  };

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around"
  }
});
