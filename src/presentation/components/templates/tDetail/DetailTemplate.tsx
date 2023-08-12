import React from 'react';
import {
    View, Text,
} from 'react-native';
import{FunctionComponent as FC} from 'react';
import { styles } from './styles';
import { MDetail } from '../../molecules';
import { Character } from '../../../../domain/entities/Character';
 
interface TDetailProps {
    character : Character
}

const tDetail : FC<TDetailProps> = (props) => {
    return (
        <View style={[styles.container]}>
            <MDetail character={props.character} />
        </View>
    );
};

tDetail.defaultProps = {
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


export default tDetail;