import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableWithoutFeedback } from 'react-native';
import ConfettiCannon from 'react-native-confetti-cannon';

export default function App() {

  const colorArr = ['blue', 'green', 'orange', 'red', 'pink', 'cyan', 'purple', 'lime'];

  const SCREEN_WIDTH = Dimensions.get('window').width
  const SCREEN_HEIGHT = Dimensions.get('window').height + 30;

  const [complete, setComplete] = useState(false);

  const [lock, setLock] = useState(false);


  const [num1, setNum1] = useState(Math.floor(Math.random() * 7))
  const [num2, setNum2] = useState(Math.floor(Math.random() * 7))
  const [num3, setNum3] = useState(Math.floor(Math.random() * 7))
  const [num4, setNum4] = useState(Math.floor(Math.random() * 7))
  const [num5, setNum5] = useState(Math.floor(Math.random() * 7))
  const [num6, setNum6] = useState(Math.floor(Math.random() * 7))
  const [num7, setNum7] = useState(Math.floor(Math.random() * 7))
  const [num8, setNum8] = useState(Math.floor(Math.random() * 7))

  const NewNum1 = () => {
    if (complete === false) {
      setNum1(Math.floor(Math.random()*7))
    }

  }

  const NewNum2 = () => {
    if (complete === false) {
      setNum2(Math.floor(Math.random()*7))
    }

  }

  const NewNum3 = () => {
    if (complete === false) {
      setNum3(Math.floor(Math.random()*7))
    }

  }

  const NewNum4 = () => {
    if (complete === false) {
      setNum4(Math.floor(Math.random()*7))
    }
  }

  const NewNum5 = () => {
    if (complete === false) {
      setNum5(Math.floor(Math.random()*7))
    }
  }

  const NewNum6 = () => {
    if (complete === false) {
      setNum6(Math.floor(Math.random()*7))
    }
    
  }

  const NewNum7 = () => {
    if (complete === false) {
      setNum7(Math.floor(Math.random()*7))
    }
  }

  const NewNum8 = () => {
    if (complete === false) {
      setNum8(Math.floor(Math.random()*7))
    }
  }


  const Reset = () => {

      setNum1(Math.floor(Math.random()*7))
      setNum2(Math.floor(Math.random()*7))
      setNum3(Math.floor(Math.random()*7))
      setNum4(Math.floor(Math.random()*7))
      setNum5(Math.floor(Math.random()*7))
      setNum6(Math.floor(Math.random()*7))
      setNum7(Math.floor(Math.random()*7))
      setNum8(Math.floor(Math.random()*7))
      setComplete(false)
  }

  const UnLock = () => {
    setLock(false)
  }

  useEffect(() => {
    if (
      num1 === num2 && num2 === num3 && num3 === num4 && num4 === num5 && num5 === num6 && num6 === num7 && num7 === num8
    ) {
      setComplete(true);
      setLock(true)
    }
  }, [num1, num2, num3, num4, num5, num6, num7, num8])

  return (
    <View style={styles.container}>
      <View>
        <View style={{flexDirection: 'row', }} >
          <TouchableWithoutFeedback onPress={lock === true ? UnLock : NewNum1} onLongPress={Reset}>
            <View style={{backgroundColor: colorArr[num1], width: SCREEN_WIDTH*0.25, height: SCREEN_HEIGHT*0.5}}/>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={lock === true ? UnLock : NewNum2} onLongPress={Reset}>
            <View style={{backgroundColor: colorArr[num2], width: SCREEN_WIDTH*0.25, height: SCREEN_HEIGHT*0.5}}/>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={lock === true ? UnLock : NewNum3} onLongPress={Reset}>
            <View style={{backgroundColor: colorArr[num3], width: SCREEN_WIDTH*0.25, height: SCREEN_HEIGHT*0.5}}/>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={lock === true ? UnLock : NewNum4}  onLongPress={Reset}>
            <View style={{backgroundColor: colorArr[num4], width: SCREEN_WIDTH*0.25, height: SCREEN_HEIGHT*0.5}}/>
          </TouchableWithoutFeedback>
        </View>
        <View style={{flexDirection: 'row'}}>
        <TouchableWithoutFeedback onPress={lock === true ? UnLock : NewNum5} onLongPress={Reset}>
            <View style={{backgroundColor: colorArr[num5], width: SCREEN_WIDTH*0.25, height: SCREEN_HEIGHT*0.5}}/>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={lock === true ? UnLock : NewNum6} onLongPress={Reset}>
            <View style={{backgroundColor: colorArr[num6], width: SCREEN_WIDTH*0.25, height: SCREEN_HEIGHT*0.5}}/>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={lock === true ? UnLock : NewNum7} onLongPress={Reset}>
            <View style={{backgroundColor: colorArr[num7], width: SCREEN_WIDTH*0.25, height: SCREEN_HEIGHT*0.5}}/>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={lock === true ? UnLock : NewNum8} onLongPress={Reset}>
            <View style={{backgroundColor: colorArr[num8], width: SCREEN_WIDTH*0.25, height: SCREEN_HEIGHT*0.5}}/>
          </TouchableWithoutFeedback>
        </View>
      </View>
      <StatusBar style="auto" />
      {complete === true ? (
          <ConfettiCannon count={600} origin={{x: -10, y: 0}} />
    
        ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
