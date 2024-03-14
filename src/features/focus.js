import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {colors} from '../Utils/colors';
import { spacing } from '../Utils/sizes';
import { TextInput } from 'react-native-paper';
import {RoundedButton} from '../components/RoundedButton';

export const Focus = ({addSubject})=> {
  const [subject, setSubject] = useState(null);
  return(
  <View style={styles.container}>
    <View style={styles.inputContainer}>
      <TextInput style={styles.inputText} onChangeText={setSubject} label="Focus Item" />
      <View style={styles.button}>
        <RoundedButton title="+" size={50} onPress={()=> addSubject(subject)} />
      </View>
    </View>
  </View>
  )}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inputText: {
    flex:1,
    marginRight: spacing.md
  },
  button: {
    justifyContent: 'center'
  },
  inputContainer: {
    padding: spacing.lg,
    justifyContent: 'top',
    flexDirection: 'row'
  }
})