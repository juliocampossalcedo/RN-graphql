import React from 'react';
import {useQuery} from '@apollo/client';
import JOBS_QUERY from "../../data/repositories/GetImagesImpl";
import { TGallery } from "../components/templates";


const GalleryScreen = ({ navigation }) => {
    const {data, loading, error} = useQuery(JOBS_QUERY);
    
    return (
      <TGallery 
      data={data} 
      loading={loading} 
      error={error} 
      navigate={navigation.navigate}/>
    )

}

export default GalleryScreen;