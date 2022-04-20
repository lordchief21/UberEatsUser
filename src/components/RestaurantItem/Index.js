import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';



{/*Crear una función que me permita colocar las VIEWS sin necesidad de estar duplicando el código*/}

const RestaurantItem = ({restaurant}) => {
  return(
    <View style={styles.restaurantContainer}>
        
        <Image 
          source=
          {{uri: restaurant.image,
        }}
          style = {styles.image}
        />
        <Text style={styles.title}>{restaurant.name}</Text>

        {/* Llamamos los values con sus respectivos keys....... El &#8226; es para el punto en el medio*/}
        <Text style={styles.subtitle}>$ {restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}-{restaurant.maxDeliveryTime} minutes </Text> 
   
    </View>
  )
};

  export default RestaurantItem; {/* Con esto exportamos. Ver clase de Bundles en soyHenry */}

        {/*Luego lo mandaremos al App.js con el import*/  /*Todo lo relacionado en cuanto a estilo, también se coloca aquí*/}


const styles = StyleSheet.create({
    
        
    restaurantContainer: {
      width: "100%",
      
  
    },
  
    image: {
      width: "100%",
      aspectRatio: 5 /3,
      marginBottom: 5,
      
    },
  
    title:{
      fontSize: 16,
      fontWeight: "bold",
      marginVertical: 5,
    },
    
    subtitle:{
      color: "grey",
      marginBottom: 10,
    },
  
  });