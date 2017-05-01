import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Main from './src/components/Main';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import store from './src/store/store';
// import Main from './src/components/Main';
import Router from './src/Router';
// import LoginForm from './src/components/LoginForm'
export default class App extends React.Component {
  componentWillMount() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyABpzs72GFR4ptNH_vckwfRudA6HKvlLLw",
      authDomain: "manage-employee-app.firebaseapp.com",
      databaseURL: "https://manage-employee-app.firebaseio.com",
      projectId: "manage-employee-app",
      storageBucket: "manage-employee-app.appspot.com",
      messagingSenderId: "548718810234"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <View style={styles.toolbarStyles}/>
          <Router/>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  toolbarStyles: {
    height: 26,
    backgroundColor: "#0e2447",
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center'
  },
});