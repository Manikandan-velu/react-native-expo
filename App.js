import React, {useState} from 'react';
import { Text, View, StyleSheet,SafeAreaView, Platform, StatusBar } from 'react-native';
import { colors } from './src/Utils/colors'
import {Focus} from './src/features/focus';
import {Timer} from './src/features/Timer';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack

export default function App() {
  const [currentSubject, setCurrentSubject] = useState();

  return (
    <SafeAreaView style={styles.container}>      
      {!currentSubject ? (<Focus addSubject={setCurrentSubject} />):(
        <Timer
          focusSubject={currentSubject}
          onTimerEnd={()=> {}}
          clearSubject={()=> setCurrentSubject(null)}
         />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue
  }
});