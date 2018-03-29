import React, {Component} from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'
import {Speech} from 'expo'

const styles = StyleSheet.create({
  word: {fontSize: 72},
  highlight_letter: {fontSize: 96, color:"red"},
})

export default class Word extends Component {

    words = ['one', 'two', 'three', 'four']
    wordListLength = this.words.length
    state = {
      buttonDisabled: true,
      index: 0,
      currLetterIndex: 0,
      letterHighlight: false
    }
    letterIndex = 0


  componentDidMount() {
    this.speakWord()
  }

  nextWord = async () => {
    await this.setState(prevState => ({
      index: ++prevState.index,
      buttonDisabled: true,
      currLetterIndex: 0,
      letterHighlight: true,
    }))
    this.speakWord()
  }

  speechStart = {
    onStart: this.letterStarted,
    onDone: this.letterEnded,
  }

  letterStarted = () => {
    this.setState(prevState => ({
      currLetterIndex: prevState.currLetterIndex,
      index: prevState.index,
      buttonDisabled: prevState.buttonDisabled,
      letterHighlight: true,
    }))
  }

 letterEnded = () => {
    this.setState(prevState => ({
      currLetterIndex: ++prevState.currLetterIndex,
      index: prevState.index,
      buttonDisabled: prevState.buttonDisabled,
      letterHighlight: false,
    }))
  }

   speakWord = async () => {
      let currWord = this.words[this.state.index % this.wordListLength]

      for(let letter of currWord) {
        await Speech.speak(letter, {
          onStart: this.letterStarted,
          onDone: this.letterEnded,
          })
        }
      await Speech.speak(currWord, {onDone: this.enableButton})
  }

  enableButton = () => {
    this.setState(prevState => ({
      buttonDisabled: !prevState.buttonDisabled,
      index: prevState.index,
      currLetterIndex: prevState.currLetterIndex,
      letterHighlight: prevState.letterHighlight,
    }))
  }

  render() {
    let word = this.words[this.state.index % this.wordListLength]
    let word_part_beg = word.substring(0, this.state.currLetterIndex)
    let highlight_letter = word.substring(this.state.currLetterIndex, this.state.currLetterIndex + 1)
    let word_part_end = word.substring(this.state.currLetterIndex + 1)
    if(this.state.letterHighlight)
    {
      return(
        <View>
          <Text style={styles.word}>{word_part_beg}<Text style={styles.highlight_letter}>{highlight_letter}</Text>{word_part_end}</Text>
          <Button onPress={()=>this.nextWord()} title='Next' disabled={this.state.buttonDisabled} />
        </View>
      )
    }

    return(
      <View>
        <Text style={styles.word}>{word}</Text>
        <Button onPress={()=>this.nextWord()} title='Next' disabled={this.state.buttonDisabled} />
      </View>
      )
  }
}
