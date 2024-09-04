import React from 'react';
import { TextInput } from 'react-native';

import { styles } from './styles';

interface BatTextInputProps{
    pass:string
}

export function BatInput(props:BatTextInputProps) {
    return (
        <TextInput 
            style={styles.inputer}
            placeholder='PASS'
            value={props.pass}
        />
    );
}