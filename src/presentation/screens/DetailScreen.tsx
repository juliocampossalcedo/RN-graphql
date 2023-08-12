import { Dimensions } from "react-native";
import React from 'react';
import { TDetail } from "../components/templates";

const DetailScreen = ({ route }) => {
  const { character } = route.params;
  return (
    <TDetail character={character} />
  );
}

export default DetailScreen;