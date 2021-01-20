import React, { useState } from "react";
import { Text, StyleSheet, View, Button, FlatList, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation })=> {

  const pressHandler = ()=>{
      navigation.push('ListScreen')
  }

  const [reviews, setReviews] = useState([
    { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
    { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
  ])
  return <View>

    <FlatList data={reviews}
              renderItem={({item})=> (
                <TouchableOpacity onPress={ ()=>navigation.navigate('ListScreen', item)}>
                  <Text style={styles.text}>{item.title}</Text>
                </TouchableOpacity>
              )}
    />

    <Button 
      onPress={pressHandler}
      title="Go to Components Demo"
      />

      <TouchableOpacity 
      onPress={ ()=> navigation.push('List')}>
          <Text> Go to List Demo</Text>
      </TouchableOpacity>
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  headingText:{
    fontSize: 40,
    fontWeight: "700"
  }
});

export default HomeScreen;
