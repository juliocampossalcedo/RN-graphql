import React from 'react';
import {
    View, Text,
} from 'react-native';
import{FunctionComponent as FC} from 'react';
import { styles } from './styles';
 
interface AMessageProps {
    type : "info" | "error"  
    text : string, 
}

const aMessage : FC<AMessageProps> = (props) => {
    return (
        <View style={[styles.container]}>
          <Text style={props.type === 'info' ? [styles.info] : [styles.error]}>
            {props.text}</Text>
        </View>
    );
};

aMessage.defaultProps = {
    type : 'info',
    text : 'Loading..', 
} 


export default aMessage;