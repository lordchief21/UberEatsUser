import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,FlatList } from 'react-native';
import RestaurantItem from './src/components/RestaurantItem/Index';
import  restaurants from "./assets/data/restaurants.json";










export default function App() {
  return (
    <View style={styles.container}>
      
      {/*Restaurant Item */}
      {/* .......... Con lo contenido adentro de la etiqueta llamamos cada objeto del array... Usamos [] */}
        
        
        {/* <RestaurantItem restaurant={restaurants[0]} />           
            <RestaurantItem restaurant={restaurants[1]}/> */}






      {/* Uso del FLatList */}

        {/* FlatList es un componente específico de Reac Native que permite generar un "Loop" por todo el array de restaurants... OJO: MUCHO CUIDADO CON LOS CIERRES DE "[],{},(),/>" */}

        <FlatList 
          data={restaurants} 
          renderItem ={({ item }) => <RestaurantItem restaurant={item}/>} /> 



      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },

  

});
