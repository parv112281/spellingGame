import React, { Component } from 'react';
import { Text, View, StyleSheet} from 'react-native';
import Word from './Word.js'

export default class AssetExample extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Word index={this.props.index}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  logo: {
    backgroundColor: "#056ecf",
    height: 128,
    width: 128,
  }
});
