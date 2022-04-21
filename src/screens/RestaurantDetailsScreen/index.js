
import { View, Text, Image, FlatList,StyleSheet} from "react-native";
import restaurants from '../../../assets/data/restaurants.json'
const restaurant = restaurants[0];  
import {Ionicons} from "@expo/vector-icons"
import DishListItem from "../../components/DishListItem";



const RestaurantDetailsPage = () => {
    return (
        <View style={styles.page}>
            <Image source={{uri: restaurant.image,}} style = {styles.image}  />
            <Ionicons 
            name="arrow-back-circle" 
            size={45} 
            color="white" 
            style={styles.iconContainer} />

            <View style={styles.container}>
                <Text style={styles.title}>{restaurant.name}  </Text>
                <Text style={styles.subtitle}> $ {restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}-{restaurant.maxDeliveryTime} minutes  </Text> 
            </View>
            
            <DishListItem />  

        </View>
    )

};

const styles = StyleSheet.create({

    page: {
        flex:1,
    },

    image: {
        width: "100%",
        aspectRatio: 4 / 3,
    },

    title: {
        fontSize: 35,
        fontWeight: "600",
    },

    subtitle: {
        color: "grey",
    },

    iconContainer: {
        position: "absolute",
        top: 30,
        left: 10,
    },

  });


export default RestaurantDetailsPage;




