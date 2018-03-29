import React, { Component } from 'react';
import {View, StyleSheet} from 'react-native';
import { Constants } from 'expo';
import Word from './components/Word.js'

// or any pure javascript modules available in npm
import { Card } from 'react-native-elements'; // Version can be specified in package.json

export default class App extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <View style={styles.container}>
        <Card title="Spelling Word">
          <Word />
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
});
