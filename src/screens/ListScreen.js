import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


const ListScreen = ({ navigation }) => {

  const pressHandler = ()=>{
      navigation.goBack();
  }

  return (
    <View>
      <Text>{navigation.getParam('title')}</Text>
      <Text>{navigation.getParam('body')}</Text>
      <Text>{navigation.getParam('rating')}</Text>

      {/* <Button title="back to home screen" onPress={pressHandler}/>,  */}

    </View>
   
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
});

export default ListScreen;
