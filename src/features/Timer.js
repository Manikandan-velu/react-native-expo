import React, {useState} from 'react';
import {View, Text, StyleSheet, Vibration} from 'react-native';
import { useKeepAwake } from 'expo-keep-awake';
import { ProgressBar } from 'react-native-paper';
import { Countdown } from '../components/CountDown';
import { RoundedButton } from '../components/RoundedButton';
import { spacing } from '../Utils/sizes';
import { colors } from '../Utils/colors';
import { Timing } from './Timing';

export const Timer = ({focusSubject, clearSubject})=> {
  useKeepAwake();
  
  const [isStarted, setIsstarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);

  const ONE_SECOND_IN_MS = 1000;

  const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
  ];

  const onEnd = (reset)=> {
    Vibration.vibrate(PATTERN);
    setIsstarted(false);
    setProgress(1);
    reset();
  }

  return (
    <View style={styles.container}>
    <View style={styles.countdowun} >
      <Countdown         
        minutes={minutes}
        isPaused={!isStarted} 
        onProgress={setProgress} 
        onEnd={onEnd} 
      />
      <View style={{paddingTop:spacing.lg}}>
        <Text style={styles.title}>Focus In:</Text>
        <Text style={styles.text}>{focusSubject}</Text>
      </View>
    </View>
    <View style={{paddingTop:spacing.sm}}>
      <ProgressBar 
        progress={progress}
        color={colors.progress} 
        style={{height:spacing.sm}}
      />
    </View>
    <View style={styles.timingWrap}>
      <Timing onChangeTime={setMinutes} />
    </View>
    <View style={styles.countdowunWrap} >
      {!isStarted && <RoundedButton style={{fontSize:12}} title="Start" onPress={()=> setIsstarted(true)}  />} 
      {isStarted && <RoundedButton style={{fontSize:12}} title="Stop" onPress={()=> setIsstarted(false)}  />}
    </View>
    <View style={styles.clrearTimer}>
      <RoundedButton size={50} title="-" onPress={clearSubject} />
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  countdowun:{
    flex: 0.5,
    alignItems:'center',
    justifyContent:'center'
  },
  countdowunWrap: {
    flex: 0.3,
    flexDirection:'row',
    padding: spacing.xl,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timingWrap: {
    flex: 0.1,
    flexDirection:'row',
    padding: spacing.xl,
  },
  clrearTimer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  title:{
    color: colors.white,
    textAlign:'center'
  },
  text: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign:'center'
  }
})