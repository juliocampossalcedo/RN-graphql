import React from 'react';
import {
    View, ScrollView, TouchableHighlight, Image
} from 'react-native';
import{FunctionComponent as FC} from 'react';
import { styles } from './styles';
import { AMessage } from '../../atoms';
import type { ApolloError } from "@apollo/client";
import { CharacterDTO } from '../../../../data/dtos/CharacterDTO';


interface tGalleryProps {
    loading: boolean,
    error: ApolloError,
    data: CharacterDTO,
    navigate: ( string, {}) => void;
}

const tGallery : FC<tGalleryProps> = (props) => {
    if (props.loading) {
        return (
            <AMessage type="info" text="Loading ...." />
        );
      }
  
    if (props.error) {
        return (
            <AMessage type="error" text="Something happened, try later" />
        );
    }
  
      return (
        <ScrollView>
          <View style={[styles.container]}>
            {
              props.data.characters.results.map((item, index)=> 
              <TouchableHighlight key={index} onPress={
                () => props.navigate('Detail', {
                  character: item
                })}>
                <Image 
                  style={[styles.item]}
                  source={{uri: item.image}} />
              </TouchableHighlight>
              )
            }
          </View>
        </ScrollView>
  
      );
};

tGallery.defaultProps = {
} 


export default tGallery;