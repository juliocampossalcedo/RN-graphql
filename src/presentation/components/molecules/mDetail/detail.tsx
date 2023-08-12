import React from 'react';
import {
    View, Text, Image
} from 'react-native';
import{FunctionComponent as FC} from 'react';
import { styles } from './styles';
import { Character } from '../../../../domain/entities/Character';
 
interface MDetailProps {
    character : Character
}

const mDetail : FC<MDetailProps> = (props) => {
    return (
        <View>
            <Image 
                style={[styles.image]}
                source={{uri: props.character.image}} />
            <Text style={[styles.text]} >Name: {props.character.name}</Text>
            <Text style={[styles.text]} >Status: {`${props.character.status}`}</Text>
            <Text style={[styles.text]} >Species: {`${props.character.species}`}</Text>
            <Text style={[styles.text]} >Gender: {`${props.character.gender}`}</Text>
            <Text style={[styles.text]} >Origin: {`${props.character.origin}`}</Text>
        </View>
    );
};

mDetail.defaultProps = {
    character : {
        image: '',
        name: '',
        status: '',
        species: '',
        gender: '',
        origin: '',
        getDetail: Character.prototype.getDetail
    },
} 


export default mDetail;