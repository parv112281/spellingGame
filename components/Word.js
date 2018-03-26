import React, {Component} from 'react'
import {Text, StyleSheet} from 'react-native'
import {Speech} from 'expo'

const styles = StyleSheet.create({
  word: {fontSize: 72}
})

export default class Word extends Component {
  
  constructor() {
    super()
    this.words = ['one', 'two', 'three', 'four']
    this.wordListLength = this.words.length
  }
  
  componentDidMount() {
    //Speech.speak(this.words[0])   
  }
  
  async componentDidUpdate() {
    let currWord = this.words[this.props.index % this.wordListLength]
    await Speech.speak(currWord)
    //console.log(currWord)
    for(let letter of currWord) {
      await Speech.speak(letter)
      //console.log(letter)
    }
  }
      
  render() {
    let word = this.words[this.props.index % this.wordListLength]
    //Speech.speak(word)
    return(
      <Text style={styles.word}>{word}</Text>
      )
  }
}