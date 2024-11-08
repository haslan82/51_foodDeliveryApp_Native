import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import * as Icon from "react-native-feather";
import { themeColors } from "../utils/Theme";
import Categories from "../components/Categories";
import { featured } from "../utils/constants";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = () => {
 
  return (
    <SafeAreaView className="bg-white">
      <StatusBar barStyle="dark-content" />

      {/* Search Bar */}

      <View className="flex-row items-center space-x-2 px-4 pb-2 ">
        <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-3">
          <Icon.Search height={25} width="25" stroke={"gray"} />
          <TextInput placeholder="Restaurants" className="ml-2 flex-1" />
          <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2  border-gray-3">
            <Icon.MapPin height={20} width={20} stroke={"gray"} />
            <Text className="text-gray-600 ">İstanbul, TR</Text>
          </View>
        </View>
        <View
          style={{ backgroundColor: themeColors.bgColor(1) }}
          className="p-3 ml-2 rounded-full"
        >
          <Icon.Sliders
            height={20}
            width={20}
            strokeWidth={2.5}
            stroke={"white"}
          />
        </View>
      </View>

      {/* Main */}

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
      >
        {/* Categories */}

        <Categories />

        {/* featured */}

        <View className="mt-5">
  {[...Array(3)].flatMap(() => featured).map((item, index) => {
    return (
      <FeaturedRow
        key={index}
        title={item.title}
        restaurants={item.restaurant}
        description={item.description}
      />
    );
  })}
</View>



        {/* <View className=" mt-5 ">
          {
          featured.map((item, index) => {
         
            return (
              <FeaturedRow
                key={index}
                title={item.title}
                restaurants={item.restaurant}
                description={item.description}
              />
            );
          })}
        </View> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
