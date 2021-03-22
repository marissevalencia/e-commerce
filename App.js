import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TextInput} from 'react-native';

export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>
    <Image style = {{width: 400, 
      height: 200,
      marginTop: 30}}
      source = {{uri: "https://miro.medium.com/max/700/1*KHb4G8Hbc6s5a-5dEMBbXw.jpeg"}}></Image>

      <TextInput style = {{height: 80, 
       borderColor:'orange',
       borderWidth: 40}} 
       placeholder = "E-commerce" 
       value = "                       WELCOME TO FOOD DELIVERY APP "/>

      <Text style ={{height: 25, 
        borderColor: 'yellow', 
        borderWidth: 15,
        marginBottom: 20,
        marginTop: 20}} 
        >         ORDER NOW!</Text>

     <TextInput style = {{height: 15, 
        borderColor:'yellow', 
        borderWidth: 18, 
        marginTop: 20,
        marginBottom: 20}} 
        placeholder = "E-commerce" value =                 "        ENJOY YOUR MEAL!"/>

      
    </View>
  
    

      <TextInput style = {{height: 15, 
        borderColor:'white', 
        borderWidth: 1, 
        marginTop: 250}} 
        placeholder = "E-commerce" value ="FEEDBACK/RATING"/>

     <TextInput style = {{height: 15, 
        borderColor:'white', 
        borderWidth: 1, 
        marginTop: 10}} 
        placeholder = "E-commerce" value ="EXIT/QUIT"/>
      

     <TextInput style = {{height: 80, 
       borderColor:'skyblue',
       borderWidth: 20,
       marginTop: 20}} 
       placeholder = "E-commerce" 
       value = "                                                MENU                                    "/>


     <TextInput style = {{height: 80, 
       borderColor:'yellowgreen',
       borderWidth: 20,
       marginTop: 20}} 
       placeholder = "E-commerce" 
       value = "                                            MILK TEA                                    "/>

      <Image style = {{width: 400, 
      height: 200}}
      source = {{uri: "https://static.imoney.ph/articles/wp-content/uploads/2019/07/milk-tea-mania-ph.jpg"}}></Image>

      
     <TextInput style = {{height: 80, 
       borderColor:'orange',
       borderWidth: 20,
       marginTop: 20}} 
       placeholder = "E-commerce" 
       value = "                                            SHAWARMA                                    "/>

      <Image style = {{width: 400, 
      height: 200}}
      source = {{uri: "https://i1.wp.com/tcfranchising.ph/wp-content/uploads/2020/08/3371.jpg?fit=500%2C333&ssl=1"}}></Image>


     <TextInput style = {{height: 80, 
       borderColor:'grey',
       borderWidth: 20,
       marginTop: 20}} 
       placeholder = "E-commerce" 
       value = "                                            JOLLIBEE CHICKEN JOY                                   "/>

      <Image style = {{width: 400, 
      height: 200}}
      source = {{uri: "https://jollibeeusa.com/wp-content/uploads/2019/03/lgchickjoy.png"}}></Image>

      <TextInput style = {{height: 80, 
       borderColor:'pink',
       borderWidth: 20,
       marginTop: 20}} 
       placeholder = "E-commerce" 
       value = "                                        GREENWICH LASAGNA                                   "/>

      <Image style = {{width: 400, 
      height: 200}}
      source = {{uri: "https://greenwich-pizza-cdn.tillster.com/9a93c78e-e6cd-4e40-b004-32d61f708725.png"}}></Image>

      
     <TextInput style = {{height: 80, 
       borderColor:'violet',
       borderWidth: 20,
       marginTop: 20}} 
       placeholder = "E-commerce" 
       value = "                                                EGG PIE                                    "/>

      <Image style = {{width: 400, 
      height: 200}}
      source = {{uri: "https://www.foxyfolksy.com/wp-content/uploads/2016/08/egg-pie-recipe.jpg"}}></Image>

     <TextInput style = {{height: 80, 
       borderColor:'maroon',
       borderWidth: 20,
       marginTop: 20}} 
       placeholder = "E-commerce" 
       value = "                                      JOLLIBEE BURGER                                    "/>

      <Image style = {{width: 400, 
      height: 200}}
      source = {{uri: "https://img.jakpost.net/c/2019/11/12/2019_11_12_82229_1573532922._large.jpg"}}></Image>

     <TextInput style = {{height: 80, 
       borderColor:'red',
       borderWidth: 20,
       marginTop: 20}} 
       placeholder = "E-commerce" 
       value = "                                                                  MCDONALD CHICKEN FILLET Ala King                                   "/>

      <Image style = {{width: 400, 
      height: 200}}
      source = {{uri: "https://cdn1.clickthecity.com/gallery/normal_small_750.jpg"}}></Image>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
