import React, { useState } from 'react';
import {Pressable, Text } from 'react-native';
import * as Clipboard from 'expo-clipboard';

import { styles } from './styles';
import { BatInput } from '../BatInput';
import generatePass from '../../service/passwordService';

export function BatButton() {
  const [pass, setPass]=useState('')
  
  function handleGenerateButton(){
    let generatedPass:string=generatePass()
    setPass(generatedPass)
  }

  function handlerCopyButton(){
    Clipboard.setStringAsync(pass)
  }

  return (
    <>
      <BatInput pass={pass}/>

      <Pressable
        style={styles.button}
        onPress={handleGenerateButton}
      >
        <Text style={styles.text}>Generate</Text>
      </Pressable>
      
      <Pressable
        style={styles.button}
        onPress={handlerCopyButton}
      >
        <Text style={styles.text}>⚡Copiar</Text>
      </Pressable>
    </>
  );
}