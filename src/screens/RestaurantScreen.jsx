import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as Icon from "react-native-feather";
import { useNavigation, useRoute } from "@react-navigation/native";
import { themeColors } from "../utils/Theme";
import DishRow from "../components/DishRow";
import CartIcon from "../components/CartIcon";
import { StatusBar } from "expo-status-bar";

const RestaurantScreen = () => {
  const navigation = useNavigation();

  const { params } = useRoute();
  let item = params;
  console.log("restaurant:", item);
  return (
    <View >
      <CartIcon />
      <StatusBar style="light"/>
      <ScrollView>
      
        <View className="relative">
          <Image className="w-full h-72 " source={item.image} />

          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-8 left-6 bg-gray-50 p-2 rounded-full shadow"
          >
            <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
          </TouchableOpacity>
        </View>
<View style={{borderTopLeftRadius:40, borderTopRightRadius:40}}
className='bg-white -mt-12 pt-6'
>
<View className='px-5'>
  <Text className='text-3xl font-bold'>{item.name} </Text>
  <View>
  <View className="flex-row items-center space-x-1">
            <Image
              style={{ height: 16, width: 16 }}
              source={require("../../assets/images/vecteezy_mobile-game-golden-star-clipart-design-illustration_9342559.png")}
            />
            <Text className="text-green-700">{item.stars} </Text>
            <Text className="text-gray-700">
              ({item.reviews}review)*
              <Text className="font-semibold ">{item.category} </Text>{" "}
            </Text>

            <View className="flex-row items-center space-x-1 mt-3">
            <Icon.MapPin color="gray" width="15" height="15" style={{marginBottom:10}}/>
            <Text className="text-gray-700 text-xs ml-2 mb-3">
              Nearby*{item.address}{" "}
            </Text>
          </View>
          </View>
  </View>
            <Text className='text-gray-500 mt-2'>{item.description} </Text>

</View>
</View>

      <View className='pb-36 bg-white'>
        <Text className='px-4 py-4 text-2xl font-bold'>Menu</Text>
        {
          item.dishes.map((dish, index)=> <DishRow item={{...dish}} key={index} />)
        }
      </View>

      </ScrollView>
    </View>
  );
};

export default RestaurantScreen;

const styles = StyleSheet.create({});
