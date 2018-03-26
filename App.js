import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Constants } from 'expo';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-elements'; // Version can be specified in package.json

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      index: 0
    }
  }
  
  nextWord() {
    this.setState(prevState => ({
      index: ++prevState.index
    }))
    //console.log(this.state.index)
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Card title="Spelling Word">
          <AssetExample index={this.state.index}/>
        </Card>
        <Button onPress={()=>this.nextWord()} title='Next' />
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
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
