import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import MapView, { Marker } from 'react-native-maps';
import { themeColors } from '../utils/Theme';
import * as Icon from "react-native-feather";
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../slices/restaurantSlice';
import { emptyCart } from '../slices/cartSlice';

const DeliveryScreen = () => {
    const restaurant = useSelector(selectRestaurant);
    const navigation = useNavigation();
    const dispatch = useDispatch();
    
    const cancelOrder = () => {
        dispatch(emptyCart());
        navigation.navigate("Home");
      };
      

  return (


    <SafeAreaView>
      
    <View className="flex-1">
      <MapView
        initialRegion={{
          latitude: 39.9208,
          longitude: 32.8541,
          latitudeDelta: 0.0099,
          longitudeDelta: 0.0099,
        }}
        className="flex-1"
        mapType="standart"
      >
        <Marker
          coordinate={{
            latitude: 39.9208,
            longitude: 32.8541,
          }}
          title={restaurant?.name}
          description={restaurant?.description}
          pinColor={themeColors.bgColor(1)}
        />
      </MapView>


        <View className="rounded-t-3xl -mt-12 bg-white relative ">
        <TouchableOpacity className="absolute right-4 top-2"></TouchableOpacity>
        <View className="flex-row justify-between px-5 pt-10">
          <View>
            <Text className="text-lg text-gray-700 font-semibold">
              Estimated Arrival
            </Text>
            <Text className="text-3xl font-extrabold text-gray-700">
              20-30 Minutes
            </Text>
            <Text className="mt-2 text-gray-700 font-semibold">
              "Your order is out for delivery."
            </Text>
          </View>
          <Image
            className="h-24 w-24"
            source={require("../assets/images/bikeGuy2.gif")}
          />
        </View>

        <View
          style={{ backgroundColor: themeColors.bgColor(0.8) }}
          className="p-2 flex-row justify-between items-center rounded-full my-5 mx-2"
        >
          <View
            style={{ backgroundColor: "rgba(255,255,255,0.4)" }}
            className="p-1 rounded-full"
          >
            <Image
              style={{ backgroundColor: "rgba(255,255,255,0.4)" }}
              className="w-16 h-16 rounded-full"
              source={require("../assets/images/Tarkan.png")}
            />
          </View>

          <View className="flex-1 ml-3">
            <Text className="text-lg font-bold text-white">
              Tarkan
            </Text>
            <Text className="text-white font-semibold">Your Rider</Text>
          </View>
          <View className="flex-row items-center space-x-3 mr-3">
            <TouchableOpacity className="bg-white p-2 rounded-full mr-3">
              <Icon.Phone
                fill={'lightgreen'}
                stroke={'green'}
                strokeWidth="1"
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={cancelOrder}
              className="bg-white p-2 rounded-full "
            >
              <Icon.X stroke={"red"} strokeWidth="5" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

    </View>
    
    </SafeAreaView>
  )
}

export default DeliveryScreen

const styles = StyleSheet.create({})