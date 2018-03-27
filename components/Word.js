import React, {Component} from 'react'
import {Text, StyleSheet} from 'react-native'
import {Speech} from 'expo'

const styles = StyleSheet.create({
  word: {fontSize: 72}
})

export default class Word extends Component {

  constructor() {
    super()
    this.words = ['teeth', 'baby', 'silly', 'community']
    this.wordListLength = this.words.length
  }

  componentDidMount() {
    this.soundAndSpellWord(this.words[0])
  }

  async soundAndSpellWord(currWord) {
    await Speech.speak(currWord)
    //console.log(currWord)
    for(let letter of currWord) {
      await Speech.speak(letter)
      //console.log(letter)
    }
  }

  componentDidUpdate() {
    let currWord = this.words[this.props.index % this.wordListLength]
    this.soundAndSpellWord(currWord)
  }

  render() {
    let word = this.words[this.props.index % this.wordListLength]
    //Speech.speak(word)
    return(
      <Text style={styles.word}>{word}</Text>
      )
  }
}
