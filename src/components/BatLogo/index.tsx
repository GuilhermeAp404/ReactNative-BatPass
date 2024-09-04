import React from 'react';
import { View, Text, Image } from 'react-native';
import Logo from '../../../assets/bat-logo.png'

import { styles } from './styles';

export function BatLogo() {
    return (
        <View>
            <Text style={styles.title}>BAT PASS GENERATOR</Text>
            <Image 
                source={Logo}
                style={{
                    resizeMode:'contain',
                    height: 180
                }}
            />
        </View>
    );
}